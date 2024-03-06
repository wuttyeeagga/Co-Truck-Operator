import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CotruckApi from '../apis/CotruckApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  Icon,
  Picker,
  PickerItem,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const ExportReasonForCancelScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [asdf, setAsdf] = React.useState('');
  const [cancelReason, setCancelReason] = React.useState('');
  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');
  const [isFive, setIsFive] = React.useState(false);
  const [isFour, setIsFour] = React.useState(false);
  const [isOne, setIsOne] = React.useState(false);
  const [isThree, setIsThree] = React.useState(false);
  const [isTwo, setIsTwo] = React.useState(false);
  const [pickerValue, setPickerValue] = React.useState('');
  const [qwer, setQwer] = React.useState('');
  const [reason, setReason] = React.useState('');
  const [zxcv, setZxcv] = React.useState('');
  const cotruckRejectNewLeadPOST = CotruckApi.useRejectNewLeadPOST();

  return (
    <ScreenContainer
      hasSafeArea={true}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors['Surface'] },
        dimensions.width
      )}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          { alignItems: 'center', flexDirection: 'row', margin: 20 },
          dimensions.width
        )}
      >
        {/* Icon Button */}
        <View
          style={StyleSheet.applyWidth({ marginLeft: 10 }, dimensions.width)}
        >
          <Touchable
            onPress={() => {
              try {
                navigation.goBack();
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Icon name={'MaterialIcons/arrow-back-ios'} size={30} />
          </Touchable>
        </View>
        {/* Title View */}
        <View
          style={StyleSheet.applyWidth({ marginLeft: 10 }, dimensions.width)}
        >
          {/* Title */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 3'], {
                color: theme.colors['CoTruckBlack'],
                fontFamily: 'System',
                fontSize: 20,
                fontWeight: '400',
              }),
              dimensions.width
            )}
          >
            {'Reason for cancel'}
          </Text>
        </View>
      </View>

      <KeyboardAwareScrollView
        contentContainerStyle={StyleSheet.applyWidth(
          { paddingBottom: 30 },
          dimensions.width
        )}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
      >
        <Picker
          autoDismissKeyboard={true}
          dropDownBackgroundColor={theme.colors.background}
          dropDownBorderColor={theme.colors.divider}
          dropDownBorderRadius={8}
          dropDownBorderWidth={1}
          dropDownTextColor={theme.colors.strong}
          iconSize={24}
          label={'Reason for cancel'}
          leftIconMode={'inset'}
          mode={'dropdown'}
          onValueChange={newPickerValue => {
            const pickerValue = newPickerValue;
            try {
              setPickerValue(newPickerValue);
            } catch (err) {
              console.error(err);
            }
          }}
          options={Constants['CANCELREASONS']}
          placeholder={'Select an option'}
          placeholderTextColor={theme.colors['TextPlaceholder']}
          selectedIconColor={theme.colors.strong}
          selectedIconName={'Feather/check'}
          selectedIconSize={20}
          style={StyleSheet.applyWidth(
            { borderRadius: 12, height: 48, margin: 20 },
            dimensions.width
          )}
          type={'solid'}
          value={pickerValue}
        >
          <PickerItem
            style={StyleSheet.applyWidth({ margin: 5 }, dimensions.width)}
          />
        </Picker>
        {/* Reason Input Container */}
        <View style={StyleSheet.applyWidth({ margin: 10 }, dimensions.width)}>
          {/* Type Reason */}
          <TextInput
            allowFontScaling={true}
            autoCapitalize={'none'}
            changeTextDelay={500}
            onChangeText={newTypeReasonValue => {
              try {
                setReason(newTypeReasonValue);
              } catch (err) {
                console.error(err);
              }
            }}
            placeholder={'Type Reasons....'}
            placeholderTextColor={theme.colors['TextPlaceholder']}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextInputStyles(theme)['Text Input 3'],
                {
                  borderColor: theme.colors['Light'],
                  borderRadius: 12,
                  borderWidth: 1,
                  height: 48,
                  marginBottom: 20,
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 20,
                  paddingLeft: 20,
                }
              ),
              dimensions.width
            )}
            value={reason}
          />
        </View>
        {/* Confirm */}
        <Button
          onPress={() => {
            const handler = async () => {
              try {
                const results = (
                  await cotruckRejectNewLeadPOST.mutateAsync({
                    booking_id: props.route?.params?.book_truck_id ?? '',
                    cancel_id: pickerValue,
                    operator_id: Constants['AUTH_OWNER_ID'],
                    reason: reason,
                  })
                )?.json;
                navigation.navigate('BottomTabNavigator', {
                  screen: 'HomeScreen',
                });
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
              borderRadius: 12,
              height: 48,
              margin: 40,
            }),
            dimensions.width
          )}
          title={'Confirm'}
        />
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(ExportReasonForCancelScreen);
