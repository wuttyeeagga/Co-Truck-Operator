import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  CheckboxRow,
  Divider,
  Icon,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useNavigation } from '@react-navigation/native';
import { Modal, Text, View, useWindowDimensions } from 'react-native';

const AsdfBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();
  const [checkboxRow2Value, setCheckboxRow2Value] = React.useState('');
  const [checkboxRow3Value, setCheckboxRow3Value] = React.useState('');
  const [checkboxRow4Value, setCheckboxRow4Value] = React.useState('');
  const [checkboxRow5Value, setCheckboxRow5Value] = React.useState('');
  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <Modal animationType={'none'}>
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            marginLeft: 20,
            marginTop: 20,
          },
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
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 3'], {
                color: theme.colors['Primary'],
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
      <CheckboxRow
        checkedIcon={'AntDesign/checkcircle'}
        direction={'row-reverse'}
        label={'Change in schedule'}
        onPress={newCheckboxRowValue => {
          const checkboxRowValue = newCheckboxRowValue;
          try {
            setCheckboxRowValue(newCheckboxRowValue);
          } catch (err) {
            console.error(err);
          }
        }}
        status={checkboxRowValue}
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
      {/* Checkbox Row 2 */}
      <CheckboxRow
        checkedIcon={'AntDesign/checkcircle'}
        direction={'row-reverse'}
        label={'Goods not available'}
        onPress={newCheckboxRow2Value => {
          const checkboxRowValue = newCheckboxRow2Value;
          try {
            setCheckboxRow2Value(newCheckboxRow2Value);
          } catch (err) {
            console.error(err);
          }
        }}
        status={checkboxRow2Value}
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
      {/* Checkbox Row 3 */}
      <CheckboxRow
        checkedIcon={'AntDesign/checkcircle'}
        direction={'row-reverse'}
        label={'Technical Issue'}
        onPress={newCheckboxRow3Value => {
          const checkboxRowValue = newCheckboxRow3Value;
          try {
            setCheckboxRow3Value(newCheckboxRow3Value);
          } catch (err) {
            console.error(err);
          }
        }}
        status={checkboxRow3Value}
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
      {/* Checkbox Row 4 */}
      <CheckboxRow
        checkedIcon={'AntDesign/checkcircle'}
        direction={'row-reverse'}
        label={'Goods not ready'}
        onPress={newCheckboxRow4Value => {
          const checkboxRowValue = newCheckboxRow4Value;
          try {
            setCheckboxRow4Value(newCheckboxRow4Value);
          } catch (err) {
            console.error(err);
          }
        }}
        status={checkboxRow4Value}
        style={StyleSheet.applyWidth(
          GlobalStyles.CheckboxRowStyles(theme)['Checkbox Row'],
          dimensions.width
        )}
      />
      {/* Divider 4 */}
      <Divider
        color={theme.colors.divider}
        style={StyleSheet.applyWidth(
          GlobalStyles.DividerStyles(theme)['Divider'],
          dimensions.width
        )}
      />
      {/* Checkbox Row 5 */}
      <CheckboxRow
        checkedIcon={'AntDesign/checkcircle'}
        direction={'row-reverse'}
        label={'Others'}
        onPress={newCheckboxRow5Value => {
          const checkboxRowValue = newCheckboxRow5Value;
          try {
            setCheckboxRow5Value(newCheckboxRow5Value);
          } catch (err) {
            console.error(err);
          }
        }}
        status={checkboxRow5Value}
        style={StyleSheet.applyWidth(
          GlobalStyles.CheckboxRowStyles(theme)['Checkbox Row'],
          dimensions.width
        )}
      />
      {/* Divider 5 */}
      <Divider
        color={theme.colors.divider}
        style={StyleSheet.applyWidth(
          GlobalStyles.DividerStyles(theme)['Divider'],
          dimensions.width
        )}
      />
      {/* Reason Input Container */}
      <View>
        {/* Type Reason */}
        <TextInput
          allowFontScaling={true}
          autoCapitalize={'none'}
          changeTextDelay={500}
          onChangeText={newTypeReasonValue => {
            const textInputValue = newTypeReasonValue;
            try {
              setTextInputValue(newTypeReasonValue);
            } catch (err) {
              console.error(err);
            }
          }}
          placeholder={'Type Reasons....'}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextInputStyles(theme)['Text Input 3'],
              {
                marginBottom: 20,
                marginLeft: 20,
                marginRight: 20,
                marginTop: 20,
              }
            ),
            dimensions.width
          )}
          value={textInputValue}
        />
      </View>
      {/* Warning View */}
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors['CoTruckLightGrey'],
            marginLeft: 20,
            marginRight: 20,
            padding: 10,
          },
          dimensions.width
        )}
      >
        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            GlobalStyles.TextStyles(theme)['Text 3'],
            dimensions.width
          )}
        >
          {
            'Warning: On confirming cancellation Rs.500 to be charged from your wallet...'
          }
        </Text>
      </View>
      <Button
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
            margin: 20,
          }),
          dimensions.width
        )}
        title={'Confirm'}
      />
    </Modal>
  );
};

export default withTheme(AsdfBlock);
