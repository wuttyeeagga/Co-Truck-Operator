import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { CheckboxRow, withTheme } from '@draftbit/ui';
import { View } from 'react-native';

const CheckboxRowBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');

  return (
    <View>
      <CheckboxRow
        direction={'row-reverse'}
        label={'Remember Me'}
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
          StyleSheet.compose(
            GlobalStyles.CheckboxRowStyles(theme)['Checkbox Row'],
            { fontSize: 16 }
          ),
          dimensions.width
        )}
      />
    </View>
  );
};

export default withTheme(CheckboxRowBlock);
