import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CotruckApi from '../apis/CotruckApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  MultiSelectPicker,
  Picker,
  ScreenContainer,
  SectionList,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { Text, View } from 'react-native';

const Test1Screen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [list, setList] = React.useState([
    { label: 'one', value: 1 },
    { label: 'two', value: 2 },
  ]);
  const [multiSelectPickerValue, setMultiSelectPickerValue] = React.useState(
    []
  );
  const [pickerValue, setPickerValue] = React.useState('');
  const [pickerValue2, setPickerValue2] = React.useState('');
  const [sectionList, setSectionList] = React.useState([
    { name: 'Burger', ' category': 'Lunch' },
  ]);
  const [textInputValue, setTextInputValue] = React.useState('');
  const cotruckOperatorVehicleList$available$POST =
    CotruckApi.useOperatorVehicleList$available$POST();
  const isFocused = useIsFocused();
  React.useEffect(() => {
    const handler = async () => {
      console.log('Screen ON_SCREEN_FOCUS Start');
      let error = null;
      try {
        if (!isFocused) {
          return;
        }
        console.log('Start ON_SCREEN_FOCUS:0 FETCH_REQUEST');
        const response = (
          await cotruckOperatorVehicleList$available$POST.mutateAsync({
            operator_id: 125,
            vehicle_status: 'AVAILABLE',
          })
        )?.json;
        console.log('Complete ON_SCREEN_FOCUS:0 FETCH_REQUEST', { response });
        console.log('Start ON_SCREEN_FOCUS:1 EXTRACT_KEY');
        const data = response?.data;
        console.log('Complete ON_SCREEN_FOCUS:1 EXTRACT_KEY', { data });
        console.log('Start ON_SCREEN_FOCUS:2 SET_VARIABLE');
        const valueHc7TK7k3 = JSON.stringify(data);
        setList(valueHc7TK7k3);
        const add = valueHc7TK7k3;
        console.log('Complete ON_SCREEN_FOCUS:2 SET_VARIABLE');
        console.log('Start ON_SCREEN_FOCUS:3 CONSOLE_LOG');
        console.log(response, list);
        console.log('Complete ON_SCREEN_FOCUS:3 CONSOLE_LOG');
      } catch (err) {
        console.error(err);
        error = err.message ?? err;
      }
      console.log(
        'Screen ON_SCREEN_FOCUS Complete',
        error ? { error } : 'no error'
      );
    };
    handler();
  }, [isFocused]);

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      style={StyleSheet.applyWidth(
        {
          alignItems: 'center',
          backgroundColor: theme.colors['Surface'],
          flex: 1,
          justifyContent: 'center',
        },
        dimensions.width
      )}
    >
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
            margin: 10,
          },
          dimensions.width
        )}
      >
        <Picker
          autoDismissKeyboard={true}
          dropDownBackgroundColor={theme.colors.background}
          dropDownBorderColor={theme.colors.divider}
          dropDownBorderRadius={8}
          dropDownBorderWidth={1}
          dropDownTextColor={theme.colors.strong}
          iconSize={24}
          leftIconMode={'inset'}
          mode={'native'}
          onValueChange={newPickerValue => {
            const pickerValue = newPickerValue;
            try {
              setPickerValue2(newPickerValue);
            } catch (err) {
              console.error(err);
            }
          }}
          placeholder={'Select an option'}
          selectedIconColor={theme.colors.strong}
          selectedIconName={'Feather/check'}
          selectedIconSize={20}
          type={'solid'}
          value={pickerValue2}
        />
        <TextInput
          allowFontScaling={true}
          autoCapitalize={'none'}
          changeTextDelay={500}
          editable={list}
          onChangeText={newTextInputValue => {
            try {
              setTextInputValue(newTextInputValue);
            } catch (err) {
              console.error(err);
            }
          }}
          placeholder={'Enter a value...'}
          style={StyleSheet.applyWidth(
            GlobalStyles.TextInputStyles(theme)['Text Input 3'],
            dimensions.width
          )}
          value={textInputValue}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(Test1Screen);
