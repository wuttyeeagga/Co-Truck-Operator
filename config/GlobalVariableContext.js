import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const DeviceVariables = {
  AUTH_BEAR_TOKEN:
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRiY2I1YjkxZjY4OWQ4NGYzMGZkYjE5NDQ2NjQ3ZmUzOWNjYzUwN2YwMTc2MjUzZDVhOWIwNTRiOGUwMjJkNGUxZGQ2OGVlMGQ1OTU2ODhlIn0.eyJhdWQiOiIxIiwianRpIjoiZGJjYjViOTFmNjg5ZDg0ZjMwZmRiMTk0NDY2NDdmZTM5Y2NjNTA3ZjAxNzYyNTNkNWE5YjA1NGI4ZTAyMmQ0ZTFkZDY4ZWUwZDU5NTY4OGUiLCJpYXQiOjE3MDU0ODE1NzIsIm5iZiI6MTcwNTQ4MTU3MiwiZXhwIjoxNzM3MTAzOTcyLCJzdWIiOiIxMjAiLCJzY29wZXMiOltdfQ.RXu6PNhsaRfDwTelvnQNJWGDPIlj7Qu95CLjC1mk6qN6Qmyd-3H_AsEQ7bFl_yHkCPdOLwugIKxkcyVmLTeQ8C1z8fUUJIINURGPtyIA0XgRzuYI5nzm4ttAFyF7F92oQxM2s9QdN8gygBwNbUIlsh2D0-RCeSXXl0olPWX3MEcou77LgMhUg9Mx6NSWp2BKijQ6tv5e68MoDST2RwhgJAMe3LiXDp3wTNP6lrxEPskunMZyrHr6NoeZt4Qy27l7V26WpnsmW_9qIHkoA4vCmcyZFS4ohUsr7wW8-3BV_6ujdOUbSV9qNflyOqHJYAdB8X4g4-FlBQo34DR2_KVkHfSmekNREjwatESz9rBq-A-w5r3VwiOmVLcXwp3ulYudc5TuZnkh7nJOqA3nPU4RS7B_rcBPPqOZsir_fhVN1lzHwvlV3kBALjJY4K4MuOLFcuW7aUuHYXkIrDwJUyBlwdd8mPsSauUqPgqDfKF2LWH6aYSxek9-JUjrtVW0EIiy6xgnERGHiKvEUDFa7yX4Xv7NAnhwAX0M9YhkYFH2uoL0GVhgWXcqdVHRjt2ETJifzbxFr2gTkXBFXXPvuDv4ps6IhIrdt5SoYRp6y_Ypy2SnImMj322_92-wHwnmAP1V_3Oes-CPekAT0ckYj4Czs1YuLTuwpnWMokA2h5q0QKA',
  AUTH_OWNER_ID: '',
  DLImage: '',
  NRCImage: '',
  OWNER_INFO: '',
  RCImage: '',
  VehicleImage: '',
  VehicleInsuranceImage: '',
  certificateURL: 'some certificateURL',
  companyCertificate: '',
  confirmPwdShown: false,
  dlBackImage: '',
  dlFrontImage: '',
  newPwdShown: false,
  nrcBackImage: '',
  nrcFrontImage: '',
  oldPwdShown: false,
  showPassword: false,
  __env__: 'Development',
};
export const AppVariables = {};
const GlobalVariableContext = React.createContext();
const GlobalVariableUpdater = React.createContext();
const keySuffix = '';

// Attempt to parse a string as JSON. If the parse fails, return the string as-is.
// This is necessary to account for variables which are already present in local
// storage, but were not stored in JSON syntax (e.g. 'hello' instead of '"hello"').
function tryParseJson(str) {
  try {
    return JSON.parse(str);
  } catch {
    return str;
  }
}

class GlobalVariable {
  /**
   *  Filters an object of key-value pairs for those that should be
   *  persisted to storage, and persists them.
   *
   *  @param values Record<string, string>
   */
  static async syncToLocalStorage(values) {
    const update = Object.entries(values)
      .filter(([key]) => key in DeviceVariables)
      .map(([key, value]) => [key + keySuffix, JSON.stringify(value)]);

    if (update.length > 0) {
      await AsyncStorage.multiSet(update);
    }

    return update;
  }

  static async loadLocalStorage() {
    const keys = Object.keys(DeviceVariables);
    const entries = await AsyncStorage.multiGet(
      keySuffix ? keys.map(k => k + keySuffix) : keys
    );

    // If values isn't set, use the default. These will be written back to
    // storage on the next render.
    const withDefaults = entries.map(([key_, value]) => {
      // Keys only have the suffix appended in storage; strip the key
      // after they are retrieved
      const key = keySuffix ? key_.replace(keySuffix, '') : key_;
      return [key, value ? tryParseJson(value) : DeviceVariables[key]];
    });

    return Object.fromEntries(withDefaults);
  }
}

class State {
  static defaultValues = {
    ...AppVariables,
    ...DeviceVariables,
  };

  static reducer(state, { type, payload }) {
    switch (type) {
      case 'RESET':
        return { values: State.defaultValues, __loaded: true };
      case 'LOAD_FROM_ASYNC_STORAGE':
        return { values: { ...state.values, ...payload }, __loaded: true };
      case 'UPDATE':
        return state.__loaded
          ? {
              ...state,
              values: {
                ...state.values,
                [payload.key]: payload.value,
              },
            }
          : state;
      default:
        return state;
    }
  }

  static initialState = {
    __loaded: false,
    values: State.defaultValues,
  };
}

export function GlobalVariableProvider({ children }) {
  const [state, dispatch] = React.useReducer(State.reducer, State.initialState);

  React.useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  // This effect runs on mount to overwrite the default value of any
  // key that has a local value.
  React.useEffect(() => {
    async function initialStorageLoader() {
      try {
        const payload = await GlobalVariable.loadLocalStorage();
        if (
          payload?.__env__ &&
          DeviceVariables.__env__ &&
          payload.__env__ !== DeviceVariables.__env__
        ) {
          console.log(
            `Publication Environment changed from ${payload.__env__} to ${DeviceVariables.__env__}. Refreshing variables`
          );
          dispatch({
            type: 'LOAD_FROM_ASYNC_STORAGE',
            payload: DeviceVariables,
          });
        } else {
          dispatch({ type: 'LOAD_FROM_ASYNC_STORAGE', payload });
        }
      } catch (err) {
        console.error(err);
      }
    }
    initialStorageLoader();
  }, []);

  // This effect runs on every state update after the initial load. Gives us
  // best of both worlds: React state updates sync, but current state made
  // durable next async tick.
  React.useEffect(() => {
    async function syncToAsyncStorage() {
      try {
        await GlobalVariable.syncToLocalStorage(state.values);
      } catch (err) {
        console.error(err);
      }
    }
    if (state.__loaded) {
      syncToAsyncStorage();
    }
  }, [state]);

  const onLayoutRootView = React.useCallback(async () => {
    if (state.__loaded) {
      await SplashScreen.hideAsync();
    }
  }, [state.__loaded]);

  // We won't want an app to read a default state when there might be one
  // incoming from storage.
  if (!state.__loaded) {
    return null;
  }

  return (
    <GlobalVariableUpdater.Provider
      value={dispatch}
      onLayout={onLayoutRootView}
    >
      <GlobalVariableContext.Provider value={state.values}>
        {children}
      </GlobalVariableContext.Provider>
    </GlobalVariableUpdater.Provider>
  );
}

// Hooks
export function useSetValue() {
  const dispatch = React.useContext(GlobalVariableUpdater);
  return ({ key, value }) => {
    dispatch({ type: 'UPDATE', payload: { key, value } });
    return value;
  };
}

export function useValues() {
  return React.useContext(GlobalVariableContext);
}
