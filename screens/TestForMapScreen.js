import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import getLocationUtil from '../utils/getLocation';
import useWindowDimensions from '../utils/useWindowDimensions';
import { MapCallout, MapMarker, MapView } from '@draftbit/maps';
import {
  Button,
  Picker,
  ScreenContainer,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { View } from 'react-native';

const TestForMapScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [kolat, setKolat] = React.useState('');
  const [kolong, setKolong] = React.useState('');
  const [loco, setLoco] = React.useState({});
  const [pickerValue, setPickerValue] = React.useState('');
  const [textInput2Value, setTextInput2Value] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');
  const isFocused = useIsFocused();
  React.useEffect(() => {
    const handler = async () => {
      console.log('Screen ON_SCREEN_FOCUS Start');
      let error = null;
      try {
        if (!isFocused) {
          return;
        }
        console.log('Start ON_SCREEN_FOCUS:0 GET_LOCATION');
        const mylocation = await getLocationUtil();
        console.log('Complete ON_SCREEN_FOCUS:0 GET_LOCATION', { mylocation });
        console.log('Start ON_SCREEN_FOCUS:1 UPDATE_MAP_LOCATION');
        mapViewkFhR7pPERef.current.animateToLocation({
          latitude: mylocation?.latitude,
          longitude: mylocation?.longitude,
          zoom: 0,
        });
        console.log('Complete ON_SCREEN_FOCUS:1 UPDATE_MAP_LOCATION');
        console.log('Start ON_SCREEN_FOCUS:3 CONSOLE_LOG');
        console.log(mylocation);
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
  const mapViewkFhR7pPERef = React.useRef();

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <View style={StyleSheet.applyWidth({ margin: 20 }, dimensions.width)}>
        {/* Latitude Input */}
        <TextInput
          allowFontScaling={true}
          autoCapitalize={'none'}
          changeTextDelay={500}
          editable={false}
          placeholder={'latitude'}
          placeholderTextColor={theme.colors['TextPlaceholder']}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextInputStyles(theme)['Text Input 3'],
              { margin: 10 }
            ),
            dimensions.width
          )}
        />
        {/* Longitude Input */}
        <TextInput
          allowFontScaling={true}
          autoCapitalize={'none'}
          changeTextDelay={500}
          editable={false}
          placeholder={'longitude'}
          placeholderTextColor={theme.colors['TextPlaceholder']}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextInputStyles(theme)['Text Input 3'],
              { margin: 10 }
            ),
            dimensions.width
          )}
        />
        <Button
          onPress={() => {
            try {
              navigation.navigate('Test1Screen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            GlobalStyles.ButtonStyles(theme)['Button'],
            dimensions.width
          )}
          title={'Get Started'}
        />
        <Picker
          autoDismissKeyboard={true}
          dropDownBackgroundColor={theme.colors.background}
          dropDownBorderColor={theme.colors.divider}
          dropDownBorderRadius={8}
          dropDownBorderWidth={1}
          dropDownTextColor={theme.colors.strong}
          iconSize={24}
          label={'ko ko'}
          leftIconMode={'inset'}
          mode={'native'}
          onValueChange={newPickerValue => {
            const pickerValue = newPickerValue;
            try {
              setPickerValue(newPickerValue);
            } catch (err) {
              console.error(err);
            }
          }}
          placeholder={'Select an option'}
          selectedIconColor={theme.colors.strong}
          selectedIconName={'Feather/check'}
          selectedIconSize={20}
          style={StyleSheet.applyWidth({ margin: 10 }, dimensions.width)}
          type={'solid'}
          value={pickerValue}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(TestForMapScreen);
