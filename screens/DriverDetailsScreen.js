import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CotruckApi from '../apis/CotruckApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
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
import { useIsFocused } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const DriverDetailsScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const cotruckOperatorViewDriverPOST = CotruckApi.useOperatorViewDriverPOST();
  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);

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
          {'Driver Details'}
        </Text>
      </View>

      <CotruckApi.FetchOperatorViewDriverPOST driver_id={123}>
        {({ loading, error, data, refetchOperatorViewDriver }) => {
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
            <FlashList
              data={fetchData?.driver_info}
              estimatedItemSize={50}
              keyExtractor={flashListData =>
                flashListData?.id ||
                flashListData?.uuid ||
                JSON.stringify(flashListData)
              }
              listKey={'GWBNoYIK'}
              numColumns={1}
              onEndReachedThreshold={0.5}
              renderItem={({ item, index }) => {
                const flashListData = item;
                return (
                  <>
                    <Surface
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.SurfaceStyles(theme)['Surface'],
                          { margin: 10, padding: 10 }
                        ),
                        dimensions.width
                      )}
                    >
                      {/* Status Container */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            flexDirection: 'row',
                            margin: 10,
                          },
                          dimensions.width
                        )}
                      >
                        {/* Status */}
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text 2'],
                              { color: theme.colors['CoTruckPending'] }
                            ),
                            dimensions.width
                          )}
                        >
                          {flashListData?.status_of_driver}
                        </Text>
                      </View>
                      {/* Name Row */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            flexDirection: 'row',
                            margin: 10,
                          },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            { width: '40%' },
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
                            {'Name'}
                          </Text>
                        </View>
                        <Icon
                          name={'Entypo/dots-two-vertical'}
                          size={18}
                          style={StyleSheet.applyWidth(
                            { width: '10%' },
                            dimensions.width
                          )}
                        />
                        {/* View 2 */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              backgroundColor: 'rgba(0, 0, 0, 0)',
                              width: '50%',
                            },
                            dimensions.width
                          )}
                        >
                          {/* Text 2 */}
                          <Text
                            accessible={true}
                            allowFontScaling={true}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text 2'],
                                { marginLeft: 10 }
                              ),
                              dimensions.width
                            )}
                          >
                            {flashListData?.name}
                          </Text>
                        </View>
                      </View>
                      {/* Mobile Number Row */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            flexDirection: 'row',
                            margin: 10,
                          },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            { width: '40%' },
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
                            {'Mobile Number'}
                          </Text>
                        </View>
                        <Icon
                          name={'Entypo/dots-two-vertical'}
                          size={18}
                          style={StyleSheet.applyWidth(
                            { width: '10%' },
                            dimensions.width
                          )}
                        />
                        {/* View 2 */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              backgroundColor: 'rgba(0, 0, 0, 0)',
                              width: '50%',
                            },
                            dimensions.width
                          )}
                        >
                          {/* Text 2 */}
                          <Text
                            accessible={true}
                            allowFontScaling={true}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text 2'],
                                { marginLeft: 10 }
                              ),
                              dimensions.width
                            )}
                          >
                            {flashListData?.mobile}
                          </Text>
                        </View>
                      </View>
                      {/* Vehicle Type Row */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            flexDirection: 'row',
                            margin: 10,
                          },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            { width: '40%' },
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
                            {'Vehicle Type'}
                          </Text>
                        </View>
                        <Icon
                          name={'Entypo/dots-two-vertical'}
                          size={18}
                          style={StyleSheet.applyWidth(
                            { width: '10%' },
                            dimensions.width
                          )}
                        />
                        {/* View 2 */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              backgroundColor: 'rgba(0, 0, 0, 0)',
                              width: '50%',
                            },
                            dimensions.width
                          )}
                        >
                          {/* Text 2 */}
                          <Text
                            accessible={true}
                            allowFontScaling={true}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text 2'],
                                { marginLeft: 10 }
                              ),
                              dimensions.width
                            )}
                          >
                            {flashListData?.vehicle_type}
                          </Text>
                        </View>
                      </View>
                      {/* Assigned Row */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            flexDirection: 'row',
                            margin: 10,
                          },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            { width: '40%' },
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
                            {'Vehicle Assigned'}
                          </Text>
                        </View>
                        <Icon
                          name={'Entypo/dots-two-vertical'}
                          size={18}
                          style={StyleSheet.applyWidth(
                            { width: '10%' },
                            dimensions.width
                          )}
                        />
                        {/* View 2 */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              backgroundColor: 'rgba(0, 0, 0, 0)',
                              width: '50%',
                            },
                            dimensions.width
                          )}
                        >
                          {/* Text 2 */}
                          <Text
                            accessible={true}
                            allowFontScaling={true}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text 2'],
                                { marginLeft: 10 }
                              ),
                              dimensions.width
                            )}
                          >
                            {flashListData?.registr_number}
                          </Text>
                        </View>
                      </View>
                    </Surface>
                    {/* Surface 2 */}
                    <Surface
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.SurfaceStyles(theme)['Surface'],
                          { margin: 10, padding: 10 }
                        ),
                        dimensions.width
                      )}
                    >
                      <View>
                        {/* Title */}
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text 2'],
                              {
                                color: theme.colors['CoTruckBlack'],
                                margin: 10,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'Driving License'}
                        </Text>
                        {/* Driving License Row */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              flexDirection: 'row',
                              justifyContent: 'space-around',
                              margin: 10,
                            },
                            dimensions.width
                          )}
                        >
                          {/* Driving License Front */}
                          <Image
                            resizeMode={'cover'}
                            source={{ uri: `${flashListData?.license_info}` }}
                            style={StyleSheet.applyWidth(
                              GlobalStyles.ImageStyles(theme)['Image 3'],
                              dimensions.width
                            )}
                          />
                          {/* Driving License Back */}
                          <Image
                            resizeMode={'cover'}
                            source={{ uri: `${flashListData?.license_back}` }}
                            style={StyleSheet.applyWidth(
                              GlobalStyles.ImageStyles(theme)['Image 3'],
                              dimensions.width
                            )}
                          />
                        </View>

                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text 2'],
                              { color: theme.colors['Success'] }
                            ),
                            dimensions.width
                          )}
                        >
                          {'APPROVED'}
                        </Text>
                      </View>
                      {/* View 2 */}
                      <View>
                        {/* Title */}
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text 2'],
                              {
                                color: theme.colors['CoTruckBlack'],
                                margin: 10,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'National Registration Card'}
                        </Text>
                        {/* NRC Row View */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              flexDirection: 'row',
                              justifyContent: 'space-around',
                              margin: 10,
                            },
                            dimensions.width
                          )}
                        >
                          {/* NRC Front Image */}
                          <Image
                            resizeMode={'cover'}
                            source={{ uri: `${flashListData?.adhar_info}` }}
                            style={StyleSheet.applyWidth(
                              GlobalStyles.ImageStyles(theme)['Image 3'],
                              dimensions.width
                            )}
                          />
                          {/* NRC Back Image */}
                          <Image
                            resizeMode={'cover'}
                            source={{ uri: `${flashListData?.adhar_back}` }}
                            style={StyleSheet.applyWidth(
                              GlobalStyles.ImageStyles(theme)['Image 3'],
                              dimensions.width
                            )}
                          />
                        </View>

                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text 2'],
                              { color: theme.colors['Success'] }
                            ),
                            dimensions.width
                          )}
                        >
                          {'APPROVED'}
                        </Text>
                      </View>
                    </Surface>
                  </>
                );
              }}
              showsHorizontalScrollIndicator={true}
              showsVerticalScrollIndicator={true}
            />
          );
        }}
      </CotruckApi.FetchOperatorViewDriverPOST>
    </ScreenContainer>
  );
};

export default withTheme(DriverDetailsScreen);
