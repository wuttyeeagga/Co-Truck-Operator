import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CotruckApi from '../apis/CotruckApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import openImagePickerUtil from '../utils/openImagePicker';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Image, ScrollView, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const IdentityProofViewScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [isDLUpload, setIsDLUpload] = React.useState(false);
  const [isNRCUpload, setIsNRCUpload] = React.useState(false);

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={true}
      scrollable={false}
    >
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
            {'Identification Proof'}
          </Text>
        </View>
      </View>

      <CotruckApi.FetchGetIdentifyProofPOST
        operator_id={Constants['AUTH_OWNER_ID']}
      >
        {({ loading, error, data, refetchGetIdentifyProof }) => {
          const fetchData = data?.json;
          if (loading) {
            return (
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flex: 1, justifyContent: 'center' },
                  dimensions.width
                )}
              >
                <ActivityIndicator
                  animating={true}
                  color={theme.colors['Primary']}
                  hidesWhenStopped={true}
                  size={'large'}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ActivityIndicatorStyles(theme)[
                      'Activity Indicator'
                    ],
                    dimensions.width
                  )}
                />
              </View>
            );
          }

          if (error || data?.status < 200 || data?.status >= 300) {
            return <ActivityIndicator />;
          }

          return (
            <ScrollView
              bounces={true}
              showsHorizontalScrollIndicator={true}
              showsVerticalScrollIndicator={true}
            >
              {/* Main View */}
              <View
                style={StyleSheet.applyWidth({ margin: 20 }, dimensions.width)}
              >
                {/* NRC Container */}
                <View>
                  {/* Sub Title */}
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text 2'],
                        { margin: 10 }
                      ),
                      dimensions.width
                    )}
                  >
                    {'1.  Upload National Registration Card'}
                  </Text>
                  {/* Image View */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 10,
                      },
                      dimensions.width
                    )}
                  >
                    <Image
                      resizeMode={'cover'}
                      source={{ uri: `${fetchData?.data?.adhar_image}` }}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.ImageStyles(theme)['Image 3'],
                          { borderRadius: 8, height: 150, width: 150 }
                        ),
                        dimensions.width
                      )}
                    />
                  </View>
                  {/* Back Image View */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 10,
                      },
                      dimensions.width
                    )}
                  >
                    {/* NRC Back Image */}
                    <Image
                      resizeMode={'cover'}
                      source={{ uri: `${fetchData?.data?.adhar_back}` }}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.ImageStyles(theme)['Image 3'],
                          { borderRadius: 8, height: 150, width: 150 }
                        ),
                        dimensions.width
                      )}
                    />
                  </View>
                </View>
                {/* Driving License Container */}
                <View>
                  {/* Sub Title */}
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text 2'],
                        { margin: 10 }
                      ),
                      dimensions.width
                    )}
                  >
                    {'2.  Upload Driving License'}
                  </Text>
                  {/* Image View */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 10,
                      },
                      dimensions.width
                    )}
                  >
                    {/* DL Front Image */}
                    <Image
                      resizeMode={'cover'}
                      source={{ uri: `${fetchData?.data?.license_image}` }}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.ImageStyles(theme)['Image 3'],
                          { borderRadius: 8, height: 150, width: 150 }
                        ),
                        dimensions.width
                      )}
                    />
                  </View>
                  {/* Back Image */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 10,
                      },
                      dimensions.width
                    )}
                  >
                    {/* DL Back Image */}
                    <Image
                      resizeMode={'cover'}
                      source={{ uri: `${fetchData?.data?.license_back}` }}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.ImageStyles(theme)['Image 3'],
                          { borderRadius: 8, height: 150, width: 150 }
                        ),
                        dimensions.width
                      )}
                    />
                  </View>
                </View>
                {/* Edit */}
                <Button
                  onPress={() => {
                    try {
                      navigation.navigate('IdentityProofEditScreen');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ButtonStyles(theme)['Button'],
                      { margin: 20 }
                    ),
                    dimensions.width
                  )}
                  title={'Edit'}
                />
              </View>
            </ScrollView>
          );
        }}
      </CotruckApi.FetchGetIdentifyProofPOST>
    </ScreenContainer>
  );
};

export default withTheme(IdentityProofViewScreen);
