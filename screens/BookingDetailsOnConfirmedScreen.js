import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CotruckApi from '../apis/CotruckApi.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  Divider,
  Icon,
  IconButton,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const BookingDetailsOnConfirmedScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
      /* 'Conditional Stop' action requires configuration: select Check Value */
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={true}
      scrollable={true}
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
          {'Booking Details'}
        </Text>
      </View>

      <CotruckApi.FetchOperatorBookingDetailByIdPOST
        booking_id={5}
        user_id={120}
      >
        {({ loading, error, data, refetchOperatorBookingDetailById }) => {
          const fetchData = data?.json;
          if (loading) {
            return <ActivityIndicator />;
          }

          if (error || data?.status < 200 || data?.status >= 300) {
            return <ActivityIndicator />;
          }

          return (
            <>
              <FlashList
                data={fetchData?.book_trucks}
                estimatedItemSize={50}
                keyExtractor={flashListData =>
                  flashListData?.id ||
                  flashListData?.uuid ||
                  JSON.stringify(flashListData)
                }
                listKey={'p4F5nKwh'}
                numColumns={1}
                onEndReachedThreshold={0.5}
                renderItem={({ item, index }) => {
                  const flashListData = item;
                  return (
                    <>
                      {/* Main View */}
                      <View
                        style={StyleSheet.applyWidth(
                          { marginLeft: 20, marginRight: 20 },
                          dimensions.width
                        )}
                      >
                        {/* Status View */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              marginBottom: 10,
                              marginLeft: 20,
                              marginRight: 20,
                              marginTop: 10,
                            },
                            dimensions.width
                          )}
                        >
                          {/* Id */}
                          <Text
                            accessible={true}
                            allowFontScaling={true}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text 3'],
                                {
                                  color: theme.colors['CoTruckGrey'],
                                  margin: 5,
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {'Booking ID : '}
                            {null}
                          </Text>
                          {/* Status */}
                          <Text
                            accessible={true}
                            allowFontScaling={true}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text 3'],
                                { color: theme.colors['Success'], margin: 5 }
                              ),
                              dimensions.width
                            )}
                          >
                            {'Status : '}
                            {flashListData?.booking_status}
                          </Text>
                        </View>
                        <FlashList
                          data={fetchData?.get_booking_customers}
                          estimatedItemSize={50}
                          keyExtractor={flashListData =>
                            flashListData?.id ||
                            flashListData?.uuid ||
                            JSON.stringify(flashListData)
                          }
                          listKey={JSON.stringify(
                            fetchData?.get_booking_customers
                          )}
                          numColumns={1}
                          onEndReachedThreshold={0.5}
                          renderItem={({ item, index }) => {
                            const flashListData = item;
                            return (
                              <>
                                {/* Operator Info Row */}
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      alignItems: 'center',
                                      flexDirection: 'row',
                                      justifyContent: 'space-between',
                                    },
                                    dimensions.width
                                  )}
                                >
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {/* Operator Image View */}
                                    <View>
                                      {/* Operator Image */}
                                      <Image
                                        resizeMode={'cover'}
                                        source={Images.Icon}
                                        style={StyleSheet.applyWidth(
                                          StyleSheet.compose(
                                            GlobalStyles.ImageStyles(theme)[
                                              'Image 3'
                                            ],
                                            { height: 60, width: 60 }
                                          ),
                                          dimensions.width
                                        )}
                                      />
                                    </View>
                                    {/* Operator Info */}
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          justifyContent: 'space-between',
                                          marginLeft: 5,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {/* Operator Name */}
                                      <Text
                                        accessible={true}
                                        allowFontScaling={true}
                                        style={StyleSheet.applyWidth(
                                          StyleSheet.compose(
                                            GlobalStyles.TextStyles(theme)[
                                              'Text 3'
                                            ],
                                            {
                                              color:
                                                theme.colors['CoTruckBlack'],
                                              marginBottom: 5,
                                            }
                                          ),
                                          dimensions.width
                                        )}
                                      >
                                        {fetchData?.get_booking_customers?.name}
                                      </Text>
                                      {/* Operator Mobile */}
                                      <Text
                                        accessible={true}
                                        allowFontScaling={true}
                                        style={StyleSheet.applyWidth(
                                          StyleSheet.compose(
                                            GlobalStyles.TextStyles(theme)[
                                              'Text 3'
                                            ],
                                            {
                                              color:
                                                theme.colors['CoTruckBlack'],
                                              fontSize: 12,
                                              marginTop: 5,
                                            }
                                          ),
                                          dimensions.width
                                        )}
                                      >
                                        {'Operator Mobile'}
                                      </Text>
                                    </View>
                                  </View>
                                  {/* Action View */}
                                  <View>
                                    {/* Call View */}
                                    <View>
                                      {/* Call Icon */}
                                      <IconButton
                                        color={theme.colors['Primary']}
                                        icon={'Feather/phone'}
                                        size={25}
                                        style={StyleSheet.applyWidth(
                                          { marginRight: 20 },
                                          dimensions.width
                                        )}
                                      />
                                    </View>
                                  </View>
                                </View>
                              </>
                            );
                          }}
                          showsHorizontalScrollIndicator={true}
                          showsVerticalScrollIndicator={true}
                        />
                        {/* Divider 2 */}
                        <Divider
                          color={theme.colors.divider}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.DividerStyles(theme)['Divider'],
                              { marginBottom: 5, marginTop: 5 }
                            ),
                            dimensions.width
                          )}
                        />
                        {/* Driver Info Row */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                            },
                            dimensions.width
                          )}
                        >
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                              },
                              dimensions.width
                            )}
                          >
                            {/* Driver Image View */}
                            <View
                              style={StyleSheet.applyWidth(
                                { marginLeft: 20 },
                                dimensions.width
                              )}
                            >
                              {/* Driver Image */}
                              <Image
                                resizeMode={'cover'}
                                source={Images._40ft}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.ImageStyles(theme)['Image 3'],
                                    { height: 50, width: 50 }
                                  ),
                                  dimensions.width
                                )}
                              />
                            </View>
                            {/* Driver Info */}
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  justifyContent: 'space-between',
                                  marginLeft: 5,
                                },
                                dimensions.width
                              )}
                            >
                              {/* Driver Name */}
                              <Text
                                accessible={true}
                                allowFontScaling={true}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text 3'],
                                    {
                                      color: theme.colors['CoTruckBlack'],
                                      marginBottom: 5,
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'Driver Name'}
                              </Text>
                              {/* Driver Mobile */}
                              <Text
                                accessible={true}
                                allowFontScaling={true}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text 3'],
                                    {
                                      color: theme.colors['CoTruckBlack'],
                                      fontSize: 12,
                                      marginLeft: 5,
                                      marginTop: 5,
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'Driver Mobile'}
                              </Text>
                            </View>
                          </View>
                          {/* Action View */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                              },
                              dimensions.width
                            )}
                          >
                            {/* Edit View */}
                            <View
                              style={StyleSheet.applyWidth(
                                { margin: 10 },
                                dimensions.width
                              )}
                            >
                              {/* Edit Icon */}
                              <IconButton
                                color={theme.colors['Primary']}
                                icon={'Feather/edit'}
                                size={25}
                              />
                            </View>
                            {/* Call View */}
                            <View
                              style={StyleSheet.applyWidth(
                                { margin: 10 },
                                dimensions.width
                              )}
                            >
                              {/* Call Icon */}
                              <IconButton
                                color={theme.colors['Primary']}
                                icon={'Feather/phone'}
                                size={25}
                              />
                            </View>
                          </View>
                        </View>
                        {/* Divider 3 */}
                        <Divider
                          color={theme.colors.divider}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.DividerStyles(theme)['Divider'],
                              { marginBottom: 5, marginTop: 5 }
                            ),
                            dimensions.width
                          )}
                        />
                      </View>
                      {/* Location Container */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            flexDirection: 'row',
                            marginBottom: 10,
                            marginLeft: 20,
                            marginRight: 20,
                            marginTop: 10,
                          },
                          dimensions.width
                        )}
                      >
                        {/* Pickup View */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginBottom: 10,
                              marginTop: 10,
                              width: '30%',
                            },
                            dimensions.width
                          )}
                        >
                          {/* Pickup */}
                          <Text
                            accessible={true}
                            allowFontScaling={true}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text 3'],
                                {
                                  color: theme.colors['CoTruckBlack'],
                                  fontFamily: 'System',
                                  fontSize: 14,
                                  fontWeight: '400',
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {flashListData?.pickup_location}
                          </Text>
                        </View>
                        {/* Icon View */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '5%',
                            },
                            dimensions.width
                          )}
                        >
                          <Icon
                            color={theme.colors['CoTruckGrey']}
                            name={'AntDesign/swap'}
                            size={20}
                          />
                        </View>
                        {/* Drop View */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '30%',
                            },
                            dimensions.width
                          )}
                        >
                          {/* Drop */}
                          <Text
                            accessible={true}
                            allowFontScaling={true}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text 2'],
                                { color: theme.colors['CoTruckBlack'] }
                              ),
                              dimensions.width
                            )}
                          >
                            {flashListData?.drop_location}
                          </Text>
                        </View>
                        {/* Icon View 2 */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '5%',
                            },
                            dimensions.width
                          )}
                        >
                          <Icon
                            color={theme.colors['CoTruckGrey']}
                            name={'AntDesign/swap'}
                            size={20}
                          />
                        </View>
                        {/* Depot View */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '30%',
                            },
                            dimensions.width
                          )}
                        >
                          {/* Depot */}
                          <Text
                            accessible={true}
                            allowFontScaling={true}
                            style={StyleSheet.applyWidth(
                              GlobalStyles.TextStyles(theme)['Text 2'],
                              dimensions.width
                            )}
                          >
                            {flashListData?.depot_point_location}
                          </Text>
                        </View>
                      </View>
                      {/* Booking Info View */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            backgroundColor: theme.colors['Surface'],
                            marginBottom: 10,
                            marginLeft: 20,
                            marginRight: 20,
                            marginTop: 10,
                          },
                          dimensions.width
                        )}
                      >
                        {/* Truck Type */}
                        <View>
                          {/* Row Wrapper */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                flexDirection: 'row',
                                marginBottom: 10,
                                marginTop: 10,
                              },
                              dimensions.width
                            )}
                          >
                            {/* Vehicle Type View */}
                            <View
                              style={StyleSheet.applyWidth(
                                { width: '45%' },
                                dimensions.width
                              )}
                            >
                              {/* Vehicle Type */}
                              <Text
                                accessible={true}
                                allowFontScaling={true}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text 3'],
                                    {
                                      color: theme.colors['TextPlaceholder'],
                                      fontSize: 16,
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'Truck Type'}
                              </Text>
                            </View>
                            {/* Icon View */}
                            <View
                              style={StyleSheet.applyWidth(
                                { width: '5%' },
                                dimensions.width
                              )}
                            >
                              <Icon
                                color={theme.colors['Light']}
                                name={'Entypo/dots-two-vertical'}
                                size={16}
                              />
                            </View>
                            {/* Vehicle Type View */}
                            <View
                              style={StyleSheet.applyWidth(
                                { width: '45%' },
                                dimensions.width
                              )}
                            >
                              {/* Vehicle Type */}
                              <Text
                                accessible={true}
                                allowFontScaling={true}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text 3'],
                                    { fontSize: 16 }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {flashListData?.vehicle_type}
                              </Text>
                            </View>
                          </View>
                          <Divider
                            color={theme.colors['Tab_Divider']}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.DividerStyles(theme)['Divider'],
                                { height: 2, marginTop: 5 }
                              ),
                              dimensions.width
                            )}
                          />
                        </View>
                        {/* Material Type */}
                        <View>
                          {/* Row Wrapper */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                flexDirection: 'row',
                                marginBottom: 10,
                                marginTop: 10,
                              },
                              dimensions.width
                            )}
                          >
                            {/* Material Type View */}
                            <View
                              style={StyleSheet.applyWidth(
                                { width: '45%' },
                                dimensions.width
                              )}
                            >
                              {/* Material Type */}
                              <Text
                                accessible={true}
                                allowFontScaling={true}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text 3'],
                                    {
                                      color: theme.colors['TextPlaceholder'],
                                      fontSize: 16,
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'Type of material'}
                              </Text>
                            </View>
                            {/* Icon View */}
                            <View
                              style={StyleSheet.applyWidth(
                                { width: '5%' },
                                dimensions.width
                              )}
                            >
                              <Icon
                                color={theme.colors['Light']}
                                name={'Entypo/dots-two-vertical'}
                                size={16}
                              />
                            </View>
                            {/* Material Type View */}
                            <View
                              style={StyleSheet.applyWidth(
                                { width: '45%' },
                                dimensions.width
                              )}
                            >
                              {/* Material Type */}
                              <Text
                                accessible={true}
                                allowFontScaling={true}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text 3'],
                                    { fontSize: 16 }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {flashListData?.type_material}
                              </Text>
                            </View>
                          </View>
                          <Divider
                            color={theme.colors['Tab_Divider']}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.DividerStyles(theme)['Divider'],
                                { height: 2, marginTop: 5 }
                              ),
                              dimensions.width
                            )}
                          />
                        </View>
                        {/* Load Weight */}
                        <View>
                          {/* Row Wrapper */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                flexDirection: 'row',
                                marginBottom: 10,
                                marginTop: 10,
                              },
                              dimensions.width
                            )}
                          >
                            {/* Load Weight View */}
                            <View
                              style={StyleSheet.applyWidth(
                                { width: '45%' },
                                dimensions.width
                              )}
                            >
                              {/* Load Weight */}
                              <Text
                                accessible={true}
                                allowFontScaling={true}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text 3'],
                                    {
                                      color: theme.colors['TextPlaceholder'],
                                      fontSize: 16,
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'Load Weight'}
                              </Text>
                            </View>
                            {/* Icon View */}
                            <View
                              style={StyleSheet.applyWidth(
                                { width: '5%' },
                                dimensions.width
                              )}
                            >
                              <Icon
                                color={theme.colors['Light']}
                                name={'Entypo/dots-two-vertical'}
                                size={16}
                              />
                            </View>
                            {/* Load Weight View */}
                            <View
                              style={StyleSheet.applyWidth(
                                { width: '45%' },
                                dimensions.width
                              )}
                            >
                              {/* Load Weight */}
                              <Text
                                accessible={true}
                                allowFontScaling={true}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text 3'],
                                    { fontSize: 16 }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {flashListData?.load_weight}
                              </Text>
                            </View>
                          </View>
                          <Divider
                            color={theme.colors['Tab_Divider']}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.DividerStyles(theme)['Divider'],
                                { height: 2, marginTop: 5 }
                              ),
                              dimensions.width
                            )}
                          />
                        </View>
                        {/* No of Container */}
                        <View>
                          {/* Row Wrapper */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                flexDirection: 'row',
                                marginBottom: 10,
                                marginTop: 10,
                              },
                              dimensions.width
                            )}
                          >
                            {/* No of Container */}
                            <View
                              style={StyleSheet.applyWidth(
                                { width: '45%' },
                                dimensions.width
                              )}
                            >
                              {/* No of Container */}
                              <Text
                                accessible={true}
                                allowFontScaling={true}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text 3'],
                                    {
                                      color: theme.colors['TextPlaceholder'],
                                      fontSize: 16,
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'No of container'}
                              </Text>
                            </View>
                            {/* Icon View */}
                            <View
                              style={StyleSheet.applyWidth(
                                { width: '5%' },
                                dimensions.width
                              )}
                            >
                              <Icon
                                color={theme.colors['Light']}
                                name={'Entypo/dots-two-vertical'}
                                size={16}
                              />
                            </View>
                            {/* No of Container */}
                            <View
                              style={StyleSheet.applyWidth(
                                { width: '45%' },
                                dimensions.width
                              )}
                            >
                              {/* No of Container */}
                              <Text
                                accessible={true}
                                allowFontScaling={true}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text 3'],
                                    { fontSize: 16 }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {flashListData?.no_of_truck}
                              </Text>
                            </View>
                          </View>
                          <Divider
                            color={theme.colors['Tab_Divider']}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.DividerStyles(theme)['Divider'],
                                { height: 2, marginTop: 5 }
                              ),
                              dimensions.width
                            )}
                          />
                        </View>
                        {/* Product Type */}
                        <View>
                          {/* Row Wrapper */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                flexDirection: 'row',
                                marginBottom: 10,
                                marginTop: 10,
                              },
                              dimensions.width
                            )}
                          >
                            {/* Product Type View */}
                            <View
                              style={StyleSheet.applyWidth(
                                { width: '45%' },
                                dimensions.width
                              )}
                            >
                              {/* Product Type */}
                              <Text
                                accessible={true}
                                allowFontScaling={true}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text 3'],
                                    {
                                      color: theme.colors['TextPlaceholder'],
                                      fontSize: 16,
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'Product type'}
                              </Text>
                            </View>
                            {/* Icon View */}
                            <View
                              style={StyleSheet.applyWidth(
                                { width: '5%' },
                                dimensions.width
                              )}
                            >
                              <Icon
                                color={theme.colors['Light']}
                                name={'Entypo/dots-two-vertical'}
                                size={16}
                              />
                            </View>
                            {/* Product Type View */}
                            <View
                              style={StyleSheet.applyWidth(
                                { width: '45%' },
                                dimensions.width
                              )}
                            >
                              {/* Product Type */}
                              <Text
                                accessible={true}
                                allowFontScaling={true}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text 3'],
                                    { fontSize: 16 }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {flashListData?.provider_category}
                              </Text>
                            </View>
                          </View>
                          <Divider
                            color={theme.colors['Tab_Divider']}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.DividerStyles(theme)['Divider'],
                                { height: 2, marginTop: 5 }
                              ),
                              dimensions.width
                            )}
                          />
                        </View>
                        {/* Pickup Date */}
                        <View>
                          {/* Row Wrapper */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                flexDirection: 'row',
                                marginBottom: 10,
                                marginTop: 10,
                              },
                              dimensions.width
                            )}
                          >
                            {/* Pickup Date View */}
                            <View
                              style={StyleSheet.applyWidth(
                                { width: '45%' },
                                dimensions.width
                              )}
                            >
                              {/* Pickup Date */}
                              <Text
                                accessible={true}
                                allowFontScaling={true}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text 3'],
                                    {
                                      color: theme.colors['TextPlaceholder'],
                                      fontSize: 16,
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'Pickup Date'}
                              </Text>
                            </View>
                            {/* Icon View */}
                            <View
                              style={StyleSheet.applyWidth(
                                { width: '5%' },
                                dimensions.width
                              )}
                            >
                              <Icon
                                color={theme.colors['Light']}
                                name={'Entypo/dots-two-vertical'}
                                size={16}
                              />
                            </View>
                            {/* Pickup Date View */}
                            <View
                              style={StyleSheet.applyWidth(
                                { width: '45%' },
                                dimensions.width
                              )}
                            >
                              {/* Pickup Date */}
                              <Text
                                accessible={true}
                                allowFontScaling={true}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text 3'],
                                    { fontSize: 16 }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {flashListData?.pickup_date?.split(' ')[0]}
                              </Text>
                            </View>
                          </View>
                          <Divider
                            color={theme.colors['Tab_Divider']}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.DividerStyles(theme)['Divider'],
                                { height: 2, marginTop: 5 }
                              ),
                              dimensions.width
                            )}
                          />
                        </View>
                        {/* Booking Comments */}
                        <View>
                          {/* Row Wrapper */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                flexDirection: 'row',
                                marginBottom: 10,
                                marginTop: 10,
                              },
                              dimensions.width
                            )}
                          >
                            {/* Booking Comments View */}
                            <View
                              style={StyleSheet.applyWidth(
                                { width: '45%' },
                                dimensions.width
                              )}
                            >
                              {/* Booking Comments */}
                              <Text
                                accessible={true}
                                allowFontScaling={true}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text 3'],
                                    {
                                      color: theme.colors['TextPlaceholder'],
                                      fontSize: 16,
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'Booking Comments'}
                              </Text>
                            </View>
                            {/* Icon View */}
                            <View
                              style={StyleSheet.applyWidth(
                                { width: '5%' },
                                dimensions.width
                              )}
                            >
                              <Icon
                                color={theme.colors['Light']}
                                name={'Entypo/dots-two-vertical'}
                                size={16}
                              />
                            </View>
                            {/* Booking Comments View */}
                            <View
                              style={StyleSheet.applyWidth(
                                { width: '45%' },
                                dimensions.width
                              )}
                            >
                              {/* Booking Comments */}
                              <Text
                                accessible={true}
                                allowFontScaling={true}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text 3'],
                                    { fontSize: 16 }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {flashListData?.comment}
                              </Text>
                            </View>
                          </View>
                          <Divider
                            color={theme.colors['Tab_Divider']}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.DividerStyles(theme)['Divider'],
                                { height: 2, marginTop: 5 }
                              ),
                              dimensions.width
                            )}
                          />
                        </View>
                        {/* Load Image */}
                        <View>
                          {/* Row Wrapper */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                flexDirection: 'row',
                                marginBottom: 10,
                                marginTop: 10,
                              },
                              dimensions.width
                            )}
                          >
                            {/* Load Image View */}
                            <View
                              style={StyleSheet.applyWidth(
                                { width: '45%' },
                                dimensions.width
                              )}
                            >
                              {/* Load Image */}
                              <Text
                                accessible={true}
                                allowFontScaling={true}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text 3'],
                                    {
                                      color: theme.colors['TextPlaceholder'],
                                      fontSize: 16,
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'Load Image'}
                              </Text>
                            </View>
                            {/* Icon View */}
                            <View
                              style={StyleSheet.applyWidth(
                                { width: '5%' },
                                dimensions.width
                              )}
                            >
                              <Icon
                                color={theme.colors['Light']}
                                name={'Entypo/dots-two-vertical'}
                                size={16}
                              />
                            </View>
                            {/* Load Image View */}
                            <View
                              style={StyleSheet.applyWidth(
                                { width: '45%' },
                                dimensions.width
                              )}
                            >
                              {/* Booking Comments */}
                              <Text
                                accessible={true}
                                allowFontScaling={true}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text 3'],
                                    { fontSize: 16 }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'Load Image'}
                              </Text>
                              <Image
                                resizeMode={'cover'}
                                source={{
                                  uri: `${flashListData?.truck_image}`,
                                }}
                                style={StyleSheet.applyWidth(
                                  GlobalStyles.ImageStyles(theme)['Image 3'],
                                  dimensions.width
                                )}
                              />
                            </View>
                          </View>
                          <Divider
                            color={theme.colors['Tab_Divider']}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.DividerStyles(theme)['Divider'],
                                { height: 2, marginTop: 5 }
                              ),
                              dimensions.width
                            )}
                          />
                        </View>
                        {/* PerTruck Price */}
                        <View>
                          {/* Row View */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                flexDirection: 'row',
                                marginBottom: 10,
                                marginTop: 10,
                              },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                { width: '45%' },
                                dimensions.width
                              )}
                            >
                              <Text
                                accessible={true}
                                allowFontScaling={true}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text 3'],
                                    {
                                      color: theme.colors['TextPlaceholder'],
                                      fontSize: 16,
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'Per truck price'}
                              </Text>
                            </View>
                            {/* View 2 */}
                            <View
                              style={StyleSheet.applyWidth(
                                { width: '5%' },
                                dimensions.width
                              )}
                            >
                              <Icon
                                color={theme.colors['Light']}
                                name={'Entypo/dots-two-vertical'}
                                size={16}
                              />
                            </View>
                            {/* View 3 */}
                            <View
                              style={StyleSheet.applyWidth(
                                { width: '45%' },
                                dimensions.width
                              )}
                            >
                              {/* Text 2 */}
                              <Text
                                accessible={true}
                                allowFontScaling={true}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text 3'],
                                    { fontSize: 16 }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'MMK '}
                                {flashListData?.estimate_price}
                              </Text>
                            </View>
                          </View>
                        </View>
                        {/* Invoice Total Container */}
                        <View
                          style={StyleSheet.applyWidth(
                            { marginTop: 30 },
                            dimensions.width
                          )}
                        >
                          {/* Sub Total */}
                          <View>
                            {/* Row Wrapper */}
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  alignItems: 'center',
                                  flexDirection: 'row',
                                  marginBottom: 10,
                                  marginTop: 10,
                                },
                                dimensions.width
                              )}
                            >
                              {/* Sub Total View */}
                              <View
                                style={StyleSheet.applyWidth(
                                  { width: '45%' },
                                  dimensions.width
                                )}
                              >
                                {/* Sub Total */}
                                <Text
                                  accessible={true}
                                  allowFontScaling={true}
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.TextStyles(theme)['Text 3'],
                                      {
                                        color: theme.colors['TextPlaceholder'],
                                        fontSize: 16,
                                      }
                                    ),
                                    dimensions.width
                                  )}
                                >
                                  {'Sub Total'}
                                </Text>
                              </View>
                              {/* Icon View */}
                              <View
                                style={StyleSheet.applyWidth(
                                  { width: '5%' },
                                  dimensions.width
                                )}
                              >
                                <Icon
                                  color={theme.colors['Light']}
                                  name={'Entypo/dots-two-vertical'}
                                  size={16}
                                />
                              </View>
                              {/* Sub Total View */}
                              <View
                                style={StyleSheet.applyWidth(
                                  { width: '45%' },
                                  dimensions.width
                                )}
                              >
                                {/* Sub Total */}
                                <Text
                                  accessible={true}
                                  allowFontScaling={true}
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.TextStyles(theme)['Text 3'],
                                      { fontSize: 16 }
                                    ),
                                    dimensions.width
                                  )}
                                >
                                  {'MMK '}
                                  {flashListData?.total_amt}
                                </Text>
                              </View>
                            </View>
                          </View>
                          {/* Extra Charges */}
                          <View>
                            {/* Row Wrapper */}
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  alignItems: 'center',
                                  flexDirection: 'row',
                                  marginBottom: 10,
                                  marginTop: 10,
                                },
                                dimensions.width
                              )}
                            >
                              {/* Extra Charges View */}
                              <View
                                style={StyleSheet.applyWidth(
                                  { width: '45%' },
                                  dimensions.width
                                )}
                              >
                                {/* Extra Charges */}
                                <Text
                                  accessible={true}
                                  allowFontScaling={true}
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.TextStyles(theme)['Text 3'],
                                      {
                                        color: theme.colors['TextPlaceholder'],
                                        fontSize: 16,
                                      }
                                    ),
                                    dimensions.width
                                  )}
                                >
                                  {'Extra Charges'}
                                </Text>
                              </View>
                              {/* Icon View */}
                              <View
                                style={StyleSheet.applyWidth(
                                  { width: '5%' },
                                  dimensions.width
                                )}
                              >
                                <Icon
                                  color={theme.colors['Light']}
                                  name={'Entypo/dots-two-vertical'}
                                  size={16}
                                />
                              </View>
                              {/* Extra Charges View */}
                              <View
                                style={StyleSheet.applyWidth(
                                  { width: '45%' },
                                  dimensions.width
                                )}
                              >
                                {/* Extra Charges */}
                                <Text
                                  accessible={true}
                                  allowFontScaling={true}
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.TextStyles(theme)['Text 3'],
                                      { fontSize: 16 }
                                    ),
                                    dimensions.width
                                  )}
                                >
                                  {'MMK '}
                                  {flashListData?.extra_charge}
                                </Text>
                              </View>
                            </View>
                          </View>
                          {/* Total Price */}
                          <View>
                            {/* Row Wrapper */}
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  alignItems: 'center',
                                  flexDirection: 'row',
                                  marginBottom: 10,
                                  marginTop: 10,
                                },
                                dimensions.width
                              )}
                            >
                              {/* Total Price View */}
                              <View
                                style={StyleSheet.applyWidth(
                                  { width: '45%' },
                                  dimensions.width
                                )}
                              >
                                {/* Total Price */}
                                <Text
                                  accessible={true}
                                  allowFontScaling={true}
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.TextStyles(theme)['Text 3'],
                                      {
                                        color: theme.colors['TextPlaceholder'],
                                        fontSize: 16,
                                      }
                                    ),
                                    dimensions.width
                                  )}
                                >
                                  {'Total Price'}
                                </Text>
                              </View>
                              {/* Icon View */}
                              <View
                                style={StyleSheet.applyWidth(
                                  { width: '5%' },
                                  dimensions.width
                                )}
                              >
                                <Icon
                                  color={theme.colors['Light']}
                                  name={'Entypo/dots-two-vertical'}
                                  size={16}
                                />
                              </View>
                              {/* Total Price View */}
                              <View
                                style={StyleSheet.applyWidth(
                                  { width: '45%' },
                                  dimensions.width
                                )}
                              >
                                {/* Total Price */}
                                <Text
                                  accessible={true}
                                  allowFontScaling={true}
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.TextStyles(theme)['Text 3'],
                                      { fontSize: 16 }
                                    ),
                                    dimensions.width
                                  )}
                                >
                                  {'MMK '}
                                  {flashListData?.final_total}
                                </Text>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </>
                  );
                }}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
              />
              {/* Button Container */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    marginBottom: 10,
                    marginLeft: 20,
                    marginRight: 20,
                    marginTop: 10,
                  },
                  dimensions.width
                )}
              >
                <Button
                  onPress={() => {
                    try {
                      navigation.navigate('ReasonForCancelScreen');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ButtonStyles(theme)['Button'],
                      { borderRadius: 12, height: 48, margin: 20 }
                    ),
                    dimensions.width
                  )}
                  title={'Cancel'}
                />
              </View>
            </>
          );
        }}
      </CotruckApi.FetchOperatorBookingDetailByIdPOST>
    </ScreenContainer>
  );
};

export default withTheme(BookingDetailsOnConfirmedScreen);
