import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CotruckApi from '../apis/CotruckApi.js';
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
import * as Linking from 'expo-linking';
import { ActivityIndicator, Image, ScrollView, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const ExportBookingDetailsAcceptedScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
      console.log(
        props.route?.params?.book_truck_id ?? '',
        props.route?.params?.booking_status ?? ''
      );
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

      <ScrollView
        bounces={true}
        keyboardShouldPersistTaps={'never'}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
      >
        <CotruckApi.FetchBookingDetailPOST
          book_truck_id={props.route?.params?.book_truck_id ?? ''}
        >
          {({ loading, error, data, refetchBookingDetail }) => {
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
                          { color: theme.colors['CoTruckGrey'], margin: 5 }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Booking ID : '}
                      {fetchData?.data?.book_truck_id}
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
                      {fetchData?.data?.status}
                    </Text>
                  </View>
                  {/* Shipper Info Row */}
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
                      {/* Shipper Image View */}
                      <View>
                        {/* Shipper Image */}
                        <Image
                          resizeMode={'cover'}
                          source={{
                            uri: `${fetchData?.data?.shipper_info?.user_image}`,
                          }}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.ImageStyles(theme)['Image 3'],
                              { height: 60, width: 60 }
                            ),
                            dimensions.width
                          )}
                        />
                      </View>
                      {/* Shipper Info */}
                      <View
                        style={StyleSheet.applyWidth(
                          { justifyContent: 'space-between', marginLeft: 5 },
                          dimensions.width
                        )}
                      >
                        {/* Shipper Name */}
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
                          {fetchData?.data?.shipper_info?.name}
                        </Text>
                        {/* Shipper Mobile */}
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text 3'],
                              {
                                color: theme.colors['CoTruckBlack'],
                                fontSize: 12,
                                marginTop: 5,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {fetchData?.data?.shipper_info?.mobile}
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
                          onPress={() => {
                            try {
                              Linking.openURL(
                                `tel:${fetchData?.data?.shipper_info?.mobile}`
                              );
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                          size={25}
                          style={StyleSheet.applyWidth(
                            { marginRight: 20 },
                            dimensions.width
                          )}
                        />
                      </View>
                    </View>
                  </View>
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
                          source={{
                            uri: `${fetchData?.data?.driver_info?.user_image}`,
                          }}
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
                          { justifyContent: 'space-between', marginLeft: 5 },
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
                          {fetchData?.data?.driver_info?.name}
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
                          {fetchData?.data?.driver_info?.mobile}
                        </Text>
                      </View>
                    </View>
                    {/* Action View */}
                    <View
                      style={StyleSheet.applyWidth(
                        { alignItems: 'center', flexDirection: 'row' },
                        dimensions.width
                      )}
                    >
                      {/* Call View */}
                      <View>
                        {/* Call Icon */}
                        <IconButton
                          color={theme.colors['Primary']}
                          icon={'Feather/phone'}
                          onPress={() => {
                            try {
                              Linking.openURL(
                                `tel:${fetchData?.data?.driver_info?.mobile}`
                              );
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                          size={25}
                          style={StyleSheet.applyWidth(
                            { marginRight: 20 },
                            dimensions.width
                          )}
                        />
                      </View>
                    </View>
                  </View>
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
                      {fetchData?.data?.depot_location}
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
                      {fetchData?.data?.pickup_location}
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
                      {fetchData?.data?.drop_location}
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
                                color: theme.colors['CoTruckBlack'],
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
                              {
                                color: theme.colors['CoTruckBlack'],
                                fontSize: 16,
                                marginLeft: 10,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {fetchData?.data?.pickup_date?.split(' ')[0]}{' '}
                          {
                            fetchData?.data?.pickup_date
                              ?.split(' ')[1]
                              ?.split(':')[0]
                          }
                          {':'}
                          {
                            fetchData?.data?.pickup_date
                              ?.split(' ')[1]
                              ?.split(':')[1]
                          }
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
                  {/* Pickup Address */}
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
                      {/* Pickup Address View */}
                      <View
                        style={StyleSheet.applyWidth(
                          { width: '45%' },
                          dimensions.width
                        )}
                      >
                        {/* Pickup Address */}
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text 3'],
                              {
                                color: theme.colors['CoTruckBlack'],
                                fontSize: 16,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'Pickup Address'}
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
                      {/* Pickup Address */}
                      <View
                        style={StyleSheet.applyWidth(
                          { width: '45%' },
                          dimensions.width
                        )}
                      >
                        {/* Pickup Address */}
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text 3'],
                              {
                                color: theme.colors['CoTruckBlack'],
                                fontSize: 16,
                                marginLeft: 10,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {fetchData?.data?.pickup_address}
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
                  {/* Drop Address */}
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
                      {/* Drop Address View */}
                      <View
                        style={StyleSheet.applyWidth(
                          { width: '45%' },
                          dimensions.width
                        )}
                      >
                        {/* Drop Address */}
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text 3'],
                              {
                                color: theme.colors['CoTruckBlack'],
                                fontSize: 16,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'Drop Address'}
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
                      {/* Drop Address View */}
                      <View
                        style={StyleSheet.applyWidth(
                          { width: '45%' },
                          dimensions.width
                        )}
                      >
                        {/* Drop Address */}
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text 3'],
                              {
                                color: theme.colors['CoTruckBlack'],
                                fontSize: 16,
                                marginLeft: 10,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {fetchData?.data?.drop_address}
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
                  {/* Booking Type */}
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
                      {/* Booking Type View */}
                      <View
                        style={StyleSheet.applyWidth(
                          { width: '45%' },
                          dimensions.width
                        )}
                      >
                        {/* Booking Type */}
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text 3'],
                              {
                                color: theme.colors['CoTruckBlack'],
                                fontSize: 16,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'Booking Type'}
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
                      {/* Booking Type View */}
                      <View
                        style={StyleSheet.applyWidth(
                          { width: '45%' },
                          dimensions.width
                        )}
                      >
                        {/* Booking Type */}
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text 3'],
                              {
                                color: theme.colors['CoTruckBlack'],
                                fontSize: 16,
                                marginLeft: 10,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {fetchData?.data?.booking_type}
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
                  {/* Truck Type  */}
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
                                color: theme.colors['CoTruckBlack'],
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
                              {
                                color: theme.colors['CoTruckBlack'],
                                fontSize: 16,
                                marginLeft: 10,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {fetchData?.data?.vehicle_type}
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
                                color: theme.colors['CoTruckBlack'],
                                fontSize: 16,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'Material Type'}
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
                              {
                                color: theme.colors['CoTruckBlack'],
                                fontSize: 16,
                                marginLeft: 10,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {fetchData?.data?.material_type}
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
                                color: theme.colors['CoTruckBlack'],
                                fontSize: 16,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'Weight (Tons)'}
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
                              { fontSize: 16, marginLeft: 10 }
                            ),
                            dimensions.width
                          )}
                        >
                          {fetchData?.data?.load_weight}
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
                                color: theme.colors['CoTruckBlack'],
                                fontSize: 16,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'No of Trucks'}
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
                              {
                                color: theme.colors['CoTruckBlack'],
                                fontSize: 16,
                                marginLeft: 10,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {fetchData?.data?.no_of_truck}
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
                                color: theme.colors['CoTruckBlack'],
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
                              {
                                color: theme.colors['CoTruckBlack'],
                                fontSize: 16,
                                marginLeft: 10,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {fetchData?.data?.product_category}
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
                </View>
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
                  {/* Cancel */}
                  <Button
                    onPress={() => {
                      try {
                        navigation.navigate('ImportReasonForCancelScreen');
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
        </CotruckApi.FetchBookingDetailPOST>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(ExportBookingDetailsAcceptedScreen);
