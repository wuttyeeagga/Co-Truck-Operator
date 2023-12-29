import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Button, PinInput, ScreenContainer, withTheme } from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const VerificationScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [pinInputValue, setPinInputValue] = React.useState('');
  const [codeInputValue, setCodeInputValue] = React.useState(undefined);

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      {/* logoContainer */}
      <View
        style={StyleSheet.applyWidth(
          { alignItems: 'center', justifyContent: 'center', margin: 20 },
          dimensions.width
        )}
      >
        <Image
          resizeMode={'cover'}
          source={Images.Icon}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
              height: 150,
              marginBottom: 10,
              marginTop: 10,
              width: 150,
            }),
            dimensions.width
          )}
        />
      </View>

      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'stretch',
            alignSelf: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            justifyContent: 'flex-start',
            margin: 20,
            marginTop: 0,
          },
          dimensions.width
        )}
      >
        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
              color: theme.colors['CoTruckBlack'],
              fontFamily: 'System',
              fontSize: 18,
              fontWeight: '400',
              margin: 10,
              textAlign: 'center',
            }),
            dimensions.width
          )}
        >
          {'Verification'}
        </Text>
        {/* Text 2 */}
        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
              color: theme.colors['CoTruckBlack'],
              fontFamily: 'System',
              fontSize: 16,
              fontWeight: '400',
              margin: 10,
              textAlign: 'center',
            }),
            dimensions.width
          )}
        >
          {'Enter the four digit code sent to 096782100468'}
        </Text>
      </View>
      {/* View 2 */}
      <View
        style={StyleSheet.applyWidth(
          { backgroundColor: theme.colors['Surface'], margin: 20 },
          dimensions.width
        )}
      >
        <PinInput
          autoComplete={'one-time-code'}
          blurOnFull={true}
          cellCount={4}
          changeTextDelay={500}
          clearOnCellFocus={true}
          focusedBorderColor={theme.colors.primary}
          keyboardType={'number-pad'}
          onChangeText={newPinInputValue => {
            const codeInputValue = newPinInputValue;
            try {
              setPinInputValue(newPinInputValue);
            } catch (err) {
              console.error(err);
            }
          }}
          onInputFull={finalValue => {
            const codeInputValue = finalValue;
            try {
            } catch (err) {
              console.error(err);
            }
          }}
          renderItem={({ cellValue, isFocused }) => {
            return null;
          }}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.PinInputStyles(theme)['Pin Input'],
              { margin: 20 }
            ),
            dimensions.width
          )}
          value={pinInputValue}
        />
        {/* Verify Button */}
        <Button
          onPress={() => {
            try {
              /* 'Navigate' action requires configuration: choose a navigation destination */
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
              margin: 10,
              marginBottom: 10,
              marginTop: 20,
            }),
            dimensions.width
          )}
          title={'Verify'}
        />
      </View>
      {/* View 3 */}
      <View
        style={StyleSheet.applyWidth(
          { backgroundColor: 'rgba(0, 0, 0, 0)', margin: 50 },
          dimensions.width
        )}
      >
        {/* Resend Button */}
        <Button
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
              marginTop: 30,
            }),
            dimensions.width
          )}
          title={'Resend'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(VerificationScreen);
