import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { CheckboxRow, withTheme } from '@draftbit/ui';
import { View, useWindowDimensions } from 'react-native';

const LanguageBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const [setEnglish, setSetEnglish] = React.useState(false);
  const [setMyanmar, setSetMyanmar] = React.useState(false);

  return (
    <View
      style={StyleSheet.applyWidth(
        { alignItems: 'stretch', justifyContent: 'center', margin: 20 },
        dimensions.width
      )}
    >
      {/* checkboxRow */}
      <View>
        <CheckboxRow
          direction={'row-reverse'}
          label={'English'}
          onPress={newCheckboxRowValue => {
            try {
              setSetEnglish(newCheckboxRowValue);
              setSetEnglish(newCheckboxRowValue);
            } catch (err) {
              console.error(err);
            }
          }}
          status={setEnglish}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.CheckboxRowStyles(theme)['Checkbox Row'],
              { fontSize: 16 }
            ),
            dimensions.width
          )}
        />
      </View>
      {/* checkboxRow 2 */}
      <View>
        <CheckboxRow
          direction={'row-reverse'}
          label={'Myanmar'}
          onPress={newCheckboxRowValue => {
            try {
              setSetMyanmar(newCheckboxRowValue);
            } catch (err) {
              console.error(err);
            }
          }}
          status={setMyanmar}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.CheckboxRowStyles(theme)['Checkbox Row'],
              { fontSize: 16 }
            ),
            dimensions.width
          )}
        />
      </View>
    </View>
  );
};

export default withTheme(LanguageBlock);
