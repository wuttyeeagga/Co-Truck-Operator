import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import * as Linking from 'expo-linking';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const ReferAFriendScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={true}
      hasTopSafeArea={true}
      scrollable={false}
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
          onPress={() => {
            try {
              navigation.goBack();
            } catch (err) {
              console.error(err);
            }
          }}
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
          {'Refer a friend'}
        </Text>
      </View>
      {/* Img Container */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            justifyContent: 'center',
            margin: 20,
          },
          dimensions.width
        )}
      >
        <Image
          resizeMode={'cover'}
          source={Images.Referafriend}
          style={StyleSheet.applyWidth(
            GlobalStyles.ImageStyles(theme)['Image'],
            dimensions.width
          )}
        />
      </View>
      {/* View 2 */}
      <View
        style={StyleSheet.applyWidth(
          { alignItems: 'center', justifyContent: 'center' },
          dimensions.width
        )}
      >
        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
              fontFamily: 'System',
              fontSize: 16,
              fontWeight: '600',
            }),
            dimensions.width
          )}
        >
          {'Inviter your friends to get CoTruck App'}
        </Text>
      </View>

      <View
        style={StyleSheet.applyWidth(
          { justifyContent: 'center', margin: 20 },
          dimensions.width
        )}
      >
        {/* Text 2 */}
        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            GlobalStyles.TextStyles(theme)['Text'],
            dimensions.width
          )}
        >
          {
            'Refer the code with your friends and ask them to join to get special offer on your next ride.'
          }
        </Text>
      </View>
      {/* View 3 */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            flex: 0,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            margin: 10,
          },
          dimensions.width
        )}
      >
        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            GlobalStyles.TextStyles(theme)['Text'],
            dimensions.width
          )}
        >
          {'----------------Share your promo code-------------'}
        </Text>
      </View>
      {/* View 4 */}
      <View
        style={StyleSheet.applyWidth(
          { alignItems: 'center', justifyContent: 'center', marginTop: 20 },
          dimensions.width
        )}
      >
        {/* View  */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              borderRadius: 12,
              borderStyle: 'dashed',
              borderWidth: 1,
              justifyContent: 'center',
            },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                fontSize: 16,
                margin: 12,
              }),
              dimensions.width
            )}
          >
            {'dNcnb142'}
          </Text>
        </View>
      </View>
      {/* View 5 */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 30,
          },
          dimensions.width
        )}
      >
        <Touchable
          onPress={() => {
            try {
              /* 'Open App Link' action requires configuration: select URL */
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <Image
            resizeMode={'contain'}
            source={Images.Facebook}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
                height: 50,
                width: 50,
              }),
              dimensions.width
            )}
          />
        </Touchable>
        {/* Touchable 2 */}
        <Touchable
          onPress={() => {
            try {
              /* 'Open App Link' action requires configuration: select URL */
              /* 'Open App Link' action requires configuration: select URL */
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <Image
            resizeMode={'contain'}
            source={Images.Instagram}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
                height: 50,
                width: 50,
              }),
              dimensions.width
            )}
          />
        </Touchable>
        {/* Twitter */}
        <Touchable
          onPress={() => {
            try {
              /* 'Open App Link' action requires configuration: select URL */
              /* 'Open App Link' action requires configuration: select URL */
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <Image
            resizeMode={'contain'}
            source={Images.Twitter}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
                height: 50,
                width: 50,
              }),
              dimensions.width
            )}
          />
        </Touchable>
        {/* Touchable 4 */}
        <Touchable
          onPress={() => {
            try {
              /* 'Open App Link' action requires configuration: select URL */
              /* 'Open App Link' action requires configuration: select URL */
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <Image
            resizeMode={'contain'}
            source={Images.Whatsapp}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
                height: 50,
                width: 50,
              }),
              dimensions.width
            )}
          />
        </Touchable>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(ReferAFriendScreen);
