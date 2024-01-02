import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Icon,
  IconButton,
  ScreenContainer,
  Surface,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const VehicleDetailsScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={true}
      scrollable={false}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          { alignItems: 'center', flexDirection: 'row' },
          dimensions.width
        )}
      >
        {/* Back Button */}
        <IconButton
          color={theme.colors['CoTruckBlack']}
          icon={'MaterialIcons/arrow-back-ios'}
          onPress={() => {
            try {
              navigation.goBack();
            } catch (err) {
              console.error(err);
            }
          }}
          size={32}
          style={StyleSheet.applyWidth({ marginLeft: 30 }, dimensions.width)}
        />
        {/* Title */}
        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
              color: theme.colors['CoTruckBlack'],
              fontFamily: 'System',
              fontSize: 20,
              fontWeight: '400',
              marginLeft: 10,
            }),
            dimensions.width
          )}
        >
          {'Vehicle Details'}
        </Text>
      </View>

      <Surface
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.SurfaceStyles(theme)['Surface'], {
            margin: 10,
            padding: 10,
          }),
          dimensions.width
        )}
      >
        {/* Status Container */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flexDirection: 'row', margin: 10 },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              GlobalStyles.TextStyles(theme)['Text 2'],
              dimensions.width
            )}
          >
            {'status - '}
          </Text>
          {/* Status */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                color: theme.colors['CoTruckPending'],
              }),
              dimensions.width
            )}
          >
            {'ASSIGNED'}
          </Text>
        </View>
        {/* Vehicle Type Row */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flexDirection: 'row', margin: 10 },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth({ width: '40%' }, dimensions.width)}
          >
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Text 2'],
                dimensions.width
              )}
            >
              {'Vehicle Type'}
            </Text>
          </View>
          <Icon
            name={'Entypo/dots-two-vertical'}
            size={18}
            style={StyleSheet.applyWidth({ width: '10%' }, dimensions.width)}
          />
          {/* View 2 */}
          <View
            style={StyleSheet.applyWidth(
              { backgroundColor: 'rgba(0, 0, 0, 0)', width: '50%' },
              dimensions.width
            )}
          >
            {/* Text 2 */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                  marginLeft: 10,
                }),
                dimensions.width
              )}
            >
              {'40ft Container Truck'}
            </Text>
          </View>
        </View>
        {/* Registration No. Row */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flexDirection: 'row', margin: 10 },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth({ width: '40%' }, dimensions.width)}
          >
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Text 2'],
                dimensions.width
              )}
            >
              {'Registration No.'}
            </Text>
          </View>
          <Icon
            name={'Entypo/dots-two-vertical'}
            size={18}
            style={StyleSheet.applyWidth({ width: '10%' }, dimensions.width)}
          />
          {/* View 2 */}
          <View
            style={StyleSheet.applyWidth(
              { backgroundColor: 'rgba(0, 0, 0, 0)', width: '50%' },
              dimensions.width
            )}
          >
            {/* Text 2 */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                  marginLeft: 10,
                }),
                dimensions.width
              )}
            >
              {'250620'}
            </Text>
          </View>
        </View>
      </Surface>
      {/* Surface 2 */}
      <Surface
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.SurfaceStyles(theme)['Surface'], {
            margin: 10,
            padding: 10,
          }),
          dimensions.width
        )}
      >
        {/* Title */}
        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
              margin: 10,
            }),
            dimensions.width
          )}
        >
          {'Registration Certificate (RC)'}
        </Text>

        <View style={StyleSheet.applyWidth({ margin: 10 }, dimensions.width)}>
          {/* Registration Certificate Image */}
          <Image
            resizeMode={'cover'}
            source={{
              uri: 'https://static.draftbit.com/images/placeholder-image.png',
            }}
            style={StyleSheet.applyWidth(
              GlobalStyles.ImageStyles(theme)['Image 3'],
              dimensions.width
            )}
          />
        </View>
        {/* Title */}
        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
              margin: 10,
            }),
            dimensions.width
          )}
        >
          {'Vehicle Insurance'}
        </Text>
        {/* View 2 */}
        <View style={StyleSheet.applyWidth({ margin: 10 }, dimensions.width)}>
          {/* Vehicle Insurance Image */}
          <Image
            resizeMode={'cover'}
            source={{
              uri: 'https://static.draftbit.com/images/placeholder-image.png',
            }}
            style={StyleSheet.applyWidth(
              GlobalStyles.ImageStyles(theme)['Image 3'],
              dimensions.width
            )}
          />
        </View>
        {/* Title */}
        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
              margin: 10,
            }),
            dimensions.width
          )}
        >
          {'Vehicle Image'}
        </Text>
        {/* View 3 */}
        <View style={StyleSheet.applyWidth({ margin: 10 }, dimensions.width)}>
          {/* Vehicle Image */}
          <Image
            resizeMode={'cover'}
            source={{
              uri: 'https://static.draftbit.com/images/placeholder-image.png',
            }}
            style={StyleSheet.applyWidth(
              GlobalStyles.ImageStyles(theme)['Image 3'],
              dimensions.width
            )}
          />
        </View>
      </Surface>
    </ScreenContainer>
  );
};

export default withTheme(VehicleDetailsScreen);
