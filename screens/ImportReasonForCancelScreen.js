import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CotruckApi from '../apis/CotruckApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  CheckboxRow,
  Divider,
  Icon,
  KeyboardAvoidingView,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';

const ReasonForCancelScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [checkboxRow10Value, setCheckboxRow10Value] = React.useState('');
  const [checkboxRow6Value, setCheckboxRow6Value] = React.useState('');
  const [checkboxRow7Value, setCheckboxRow7Value] = React.useState('');
  const [checkboxRow8Value, setCheckboxRow8Value] = React.useState('');
  const [checkboxRow9Value, setCheckboxRow9Value] = React.useState('');
  const [reason, setReason] = React.useState('');
  const [checkboxRowValue, setCheckboxRowValue] = React.useState(undefined);
  const cotruckRejectNewLeadPOST = CotruckApi.useRejectNewLeadPOST();

  return (
    <ScreenContainer
      hasSafeArea={false}
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

      <KeyboardAvoidingView behavior={'padding'} enabled={true}>
        {/* Main View */}
        <View>
          {/* Checkbox Row 6 */}
          <CheckboxRow
            checkedIcon={'AntDesign/checkcircle'}
            direction={'row-reverse'}
            label={'Change in schedule'}
            onPress={newCheckboxRow6Value => {
              const checkboxRowValue = newCheckboxRow6Value;
              try {
                setCheckboxRow6Value(newCheckboxRow6Value);
              } catch (err) {
                console.error(err);
              }
            }}
            status={checkboxRow6Value}
            style={StyleSheet.applyWidth(
              GlobalStyles.CheckboxRowStyles(theme)['Checkbox Row'],
              dimensions.width
            )}
          />
          {/* Divider 6 */}
          <Divider
            color={theme.colors.divider}
            style={StyleSheet.applyWidth(
              GlobalStyles.DividerStyles(theme)['Divider'],
              dimensions.width
            )}
          />
          {/* Checkbox Row 7 */}
          <CheckboxRow
            checkedIcon={'AntDesign/checkcircle'}
            direction={'row-reverse'}
            label={'Goods not available'}
            onPress={newCheckboxRow7Value => {
              const checkboxRowValue = newCheckboxRow7Value;
              try {
                setCheckboxRow7Value(newCheckboxRow7Value);
              } catch (err) {
                console.error(err);
              }
            }}
            status={checkboxRow7Value}
            style={StyleSheet.applyWidth(
              GlobalStyles.CheckboxRowStyles(theme)['Checkbox Row'],
              dimensions.width
            )}
          />
          {/* Divider 7 */}
          <Divider
            color={theme.colors.divider}
            style={StyleSheet.applyWidth(
              GlobalStyles.DividerStyles(theme)['Divider'],
              dimensions.width
            )}
          />
          {/* Checkbox Row 8 */}
          <CheckboxRow
            checkedIcon={'AntDesign/checkcircle'}
            direction={'row-reverse'}
            label={'Technical Issue'}
            onPress={newCheckboxRow8Value => {
              const checkboxRowValue = newCheckboxRow8Value;
              try {
                setCheckboxRow8Value(newCheckboxRow8Value);
              } catch (err) {
                console.error(err);
              }
            }}
            status={checkboxRow8Value}
            style={StyleSheet.applyWidth(
              GlobalStyles.CheckboxRowStyles(theme)['Checkbox Row'],
              dimensions.width
            )}
          />
          {/* Divider 3 */}
          <Divider
            color={theme.colors.divider}
            style={StyleSheet.applyWidth(
              GlobalStyles.DividerStyles(theme)['Divider'],
              dimensions.width
            )}
          />
          {/* Checkbox Row 9 */}
          <CheckboxRow
            checkedIcon={'AntDesign/checkcircle'}
            direction={'row-reverse'}
            label={'Goods not ready'}
            onPress={newCheckboxRow9Value => {
              const checkboxRowValue = newCheckboxRow9Value;
              try {
                setCheckboxRow9Value(newCheckboxRow9Value);
              } catch (err) {
                console.error(err);
              }
            }}
            status={checkboxRow9Value}
            style={StyleSheet.applyWidth(
              GlobalStyles.CheckboxRowStyles(theme)['Checkbox Row'],
              dimensions.width
            )}
          />
          {/* Divider 2 */}
          <Divider
            color={theme.colors.divider}
            style={StyleSheet.applyWidth(
              GlobalStyles.DividerStyles(theme)['Divider'],
              dimensions.width
            )}
          />
          {/* Checkbox Row 10 */}
          <CheckboxRow
            checkedIcon={'AntDesign/checkcircle'}
            direction={'row-reverse'}
            label={'Others'}
            onPress={newCheckboxRow10Value => {
              const checkboxRowValue = newCheckboxRow10Value;
              try {
                setCheckboxRow10Value(newCheckboxRow10Value);
              } catch (err) {
                console.error(err);
              }
            }}
            status={checkboxRow10Value}
            style={StyleSheet.applyWidth(
              GlobalStyles.CheckboxRowStyles(theme)['Checkbox Row'],
              dimensions.width
            )}
          />
          <Divider
            color={theme.colors.divider}
            style={StyleSheet.applyWidth(
              GlobalStyles.DividerStyles(theme)['Divider'],
              dimensions.width
            )}
          />
        </View>
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
        {/* Warning View */}
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['CoTruckLightGrey'],
              borderRadius: 12,
              marginBottom: 20,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 20,
              padding: 10,
            },
            dimensions.width
          )}
        >
          {/* Warning */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 3'], {
                margin: 10,
              }),
              dimensions.width
            )}
          >
            {
              'Warning: On confirming cancellation Rs.600 to be charged from your wallet...'
            }
          </Text>
        </View>
        {/* Confirm */}
        <Button
          onPress={() => {
            const handler = async () => {
              try {
                const results = (
                  await cotruckRejectNewLeadPOST.mutateAsync({
                    booking_id: props.route?.params?.book_truck_id ?? '',
                    cancel_id: checkboxRow6Value,
                    operator_id: Constants['AUTH_OWNER_ID'],
                    reason: reason,
                  })
                )?.json;
                console.log(results);
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
              margin: 20,
            }),
            dimensions.width
          )}
          title={'Confirm'}
        />
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

export default withTheme(ReasonForCancelScreen);
