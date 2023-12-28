import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  CheckboxRow,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const ChooseLanguageScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [setEnglish, setSetEnglish] = React.useState(true);
  const [setMyanmar, setSetMyanmar] = React.useState(false);

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={true}
      scrollable={false}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          { alignItems: 'center', flexDirection: 'row', marginLeft: 20 },
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
                color: theme.colors['CoTruckBlack'],
                fontFamily: 'System',
                fontSize: 20,
                fontWeight: '400',
              }),
              dimensions.width
            )}
          >
            {'Choose Language'}
          </Text>
        </View>
      </View>
      {/* Container */}
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
    </ScreenContainer>
  );
};

export default withTheme(ChooseLanguageScreen);
