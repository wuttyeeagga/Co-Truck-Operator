import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { CheckboxRow, Icon, Touchable, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const ChangeLanguageContainerBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        { justifyContent: 'center' },
        dimensions.width
      )}
    >
      {/* My Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            margin: 20,
            marginLeft: 20,
            marginTop: 20,
          },
          dimensions.width
        )}
      >
        <Touchable
          style={StyleSheet.applyWidth({ marginLeft: 10 }, dimensions.width)}
        >
          <Icon name={'MaterialIcons/arrow-back-ios'} size={30} />
        </Touchable>

        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
              fontSize: 20,
              marginLeft: 10,
            }),
            dimensions.width
          )}
        >
          {'Choose Language\n'}
        </Text>
      </View>
      {/* language */}
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
    </View>
  );
};

export default withTheme(ChangeLanguageContainerBlock);
