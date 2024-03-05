import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CotruckApi from '../apis/CotruckApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import showAlertUtil from '../utils/showAlert';
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

const ExportBookingDetailsOnCompletedScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const cotruckCompleteBookingPOST = CotruckApi.useCompleteBookingPOST();

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
        {/* Title */}
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
        {/* Booking Details */}
        <CotruckApi.FetchBookingDetailPOST
          book_truck_id={props.route?.params?.book_truck_id ?? ''}
        >
          {({ loading, error, data, refetchBookingDetail }) => {
            const bookingDetailsData = data?.json;
            if (loading) {
              return (
                <>
                  {/* Loading */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        flex: 1,
                        justifyContent: 'center',
                      },
                      dimensions.width
                    )}
                  >
                    {/* loading */}
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
                </>
              );
            }

            if (error || data?.status < 200 || data?.status >= 300) {
              return <ActivityIndicator />;
            }

            return (
              <>
                {/* Status View Row */}
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
                  {/* Booking ID */}
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text 3'],
                        { color: theme.colors['Custom Color_9'], margin: 5 }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Booking ID : '}
                    {bookingDetailsData?.data?.book_truck_id}
                  </Text>
                  {/* Status */}
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text 3'],
                        {
                          color: theme.colors['Success'],
                          fontFamily: 'System',
                          fontWeight: '400',
                          margin: 5,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Status : '}
                    {bookingDetailsData?.data?.status}
                  </Text>
                </View>
                {/* Paid Status View */}
                <View
                  style={StyleSheet.applyWidth(
                    { alignItems: 'flex-end', marginLeft: 20, marginRight: 20 },
                    dimensions.width
                  )}
                >
                  {/* Paid Status */}
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text 2'],
                        { color: theme.colors['Error'], margin: 5 }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Payment Status : '}
                    {bookingDetailsData?.data?.paid_status}
                  </Text>
                </View>
                {/* Booking Info Row */}
                <View
                  style={StyleSheet.applyWidth(
                    { marginLeft: 20, marginRight: 20 },
                    dimensions.width
                  )}
                >
                  {/* Booking Customer Row */}
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
                    {/* Booking Customer View */}
                    <View
                      style={StyleSheet.applyWidth(
                        { alignItems: 'center', flexDirection: 'row' },
                        dimensions.width
                      )}
                    >
                      {/* Image View */}
                      <View>
                        {/* Shipper Image */}
                        <Image
                          resizeMode={'cover'}
                          source={{
                            uri: `${bookingDetailsData?.data?.shipper_info?.user_image}`,
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
                      {/* Info View */}
                      <View
                        style={StyleSheet.applyWidth(
                          { marginLeft: 20 },
                          dimensions.width
                        )}
                      >
                        {/* Name */}
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            GlobalStyles.TextStyles(theme)['Text 3'],
                            dimensions.width
                          )}
                        >
                          {bookingDetailsData?.data?.shipper_info?.name}
                        </Text>
                        {/* Mobile */}
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            GlobalStyles.TextStyles(theme)['Text 3'],
                            dimensions.width
                          )}
                        >
                          {bookingDetailsData?.data?.shipper_info?.mobile}
                        </Text>
                      </View>
                    </View>
                    {/* Call View */}
                    <View
                      style={StyleSheet.applyWidth(
                        { margin: 10 },
                        dimensions.width
                      )}
                    >
                      {/* Call Button */}
                      <IconButton
                        icon={'Feather/phone'}
                        onPress={() => {
                          try {
                            Linking.openURL(
                              `tel:${bookingDetailsData?.data?.shipper_info?.mobile}`
                            );
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        size={32}
                        style={StyleSheet.applyWidth(
                          { marginLeft: 5, marginRight: 5 },
                          dimensions.width
                        )}
                      />
                    </View>
                  </View>
                  <Divider
                    color={theme.colors['Light']}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.DividerStyles(theme)['Divider'],
                        {
                          marginBottom: 5,
                          marginLeft: 10,
                          marginRight: 10,
                          marginTop: 5,
                        }
                      ),
                      dimensions.width
                    )}
                  />
                  {/* Driver Row */}
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
                    {/* Driver Info View */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          flexDirection: 'row',
                          marginLeft: 20,
                        },
                        dimensions.width
                      )}
                    >
                      {/* Driver Image View */}
                      <View>
                        {/* Driver Image */}
                        <Image
                          resizeMode={'cover'}
                          source={{
                            uri: `${bookingDetailsData?.data?.driver_info?.user_image}`,
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
                      {/* Info View */}
                      <View
                        style={StyleSheet.applyWidth(
                          { marginLeft: 20 },
                          dimensions.width
                        )}
                      >
                        {/* Driver Name */}
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            GlobalStyles.TextStyles(theme)['Text 3'],
                            dimensions.width
                          )}
                        >
                          {bookingDetailsData?.data?.driver_info?.name}
                        </Text>
                        {/* Driver Mobile */}
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            GlobalStyles.TextStyles(theme)['Text 3'],
                            dimensions.width
                          )}
                        >
                          {bookingDetailsData?.data?.driver_info?.mobile}
                        </Text>
                      </View>
                    </View>
                    {/* Call View */}
                    <View
                      style={StyleSheet.applyWidth(
                        { margin: 10 },
                        dimensions.width
                      )}
                    >
                      {/* Call Button */}
                      <IconButton
                        icon={'Feather/phone'}
                        onPress={() => {
                          try {
                            Linking.openURL(
                              `tel:${bookingDetailsData?.data?.driver_info?.mobile}`
                            );
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        size={32}
                        style={StyleSheet.applyWidth(
                          { marginLeft: 5, marginRight: 5 },
                          dimensions.width
                        )}
                      />
                    </View>
                  </View>
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
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text 3'],
                          {
                            color: theme.colors['CoTruckBlack'],
                            fontFamily: 'System',
                            fontSize: 12,
                            fontWeight: '400',
                            margin: 5,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {bookingDetailsData?.data?.depot_location}
                    </Text>
                  </View>
                  {/* Icon View 2 */}
                  <View
                    style={StyleSheet.applyWidth(
                      { marginBottom: 10, marginTop: 10 },
                      dimensions.width
                    )}
                  >
                    <Icon name={'AntDesign/swap'} size={24} />
                  </View>
                  {/* Pickup View */}
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
                            fontSize: 12,
                            fontWeight: '400',
                            margin: 5,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {bookingDetailsData?.data?.pickup_location}
                    </Text>
                  </View>
                  {/* Icon View */}
                  <View
                    style={StyleSheet.applyWidth(
                      { marginBottom: 10, marginTop: 10 },
                      dimensions.width
                    )}
                  >
                    <Icon name={'AntDesign/swap'} size={24} />
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
                          GlobalStyles.TextStyles(theme)['Text 3'],
                          {
                            color: theme.colors['CoTruckBlack'],
                            fontFamily: 'System',
                            fontSize: 12,
                            fontWeight: '400',
                            margin: 5,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {bookingDetailsData?.data?.drop_location}
                    </Text>
                  </View>
                </View>
                {/* Info View */}
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
                      {/* Pickup Date View  */}
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
                              { fontSize: 16, marginLeft: 10 }
                            ),
                            dimensions.width
                          )}
                        >
                          {bookingDetailsData?.data?.pickup_date?.split(' ')[0]}{' '}
                          {
                            bookingDetailsData?.data?.pickup_date
                              ?.split(' ')[1]
                              ?.split(':')[0]
                          }
                          {':'}
                          {
                            bookingDetailsData?.data?.pickup_date
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
                              { fontSize: 16, marginLeft: 10 }
                            ),
                            dimensions.width
                          )}
                        >
                          {bookingDetailsData?.data?.pickup_address}
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
                              { fontSize: 16, marginLeft: 10 }
                            ),
                            dimensions.width
                          )}
                        >
                          {bookingDetailsData?.data?.drop_address}
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
                              { fontSize: 16, marginLeft: 10 }
                            ),
                            dimensions.width
                          )}
                        >
                          {bookingDetailsData?.data?.booking_type}
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
                  {/* Vehicle Type */}
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
                      {/* Truck Type  View */}
                      <View
                        style={StyleSheet.applyWidth(
                          { width: '45%' },
                          dimensions.width
                        )}
                      >
                        {/* Truck Type  */}
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
                      {/* Truck Type  View */}
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
                          {bookingDetailsData?.data?.vehicle_type}
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
                          {bookingDetailsData?.data?.material_type}
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
                      {/* Weight View */}
                      <View
                        style={StyleSheet.applyWidth(
                          { width: '45%' },
                          dimensions.width
                        )}
                      >
                        {/* Weight */}
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
                      {/* Weight View */}
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
                                marginLeft: 10,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {bookingDetailsData?.data?.load_weight}
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
                                color: theme.colors['CoTruckBlack'],
                                fontSize: 16,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'No of container'}
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
                          {bookingDetailsData?.data?.no_of_truck}
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
                      {/* Product Type View  */}
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
                              { fontSize: 16, marginLeft: 10 }
                            ),
                            dimensions.width
                          )}
                        >
                          {bookingDetailsData?.data?.product_category}
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
                  {/* Invoice */}
                  <Button
                    onPress={() => {
                      try {
                        navigation.navigate('InvoiceScreen', {
                          book_truck_id:
                            bookingDetailsData?.data?.book_truck_id,
                        });
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
                    title={'Invoice'}
                  />
                </View>
                {/* Complete Button View */}
                <>
                  {bookingDetailsData?.data?.complete_booking ? null : (
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
                      {/* Complete Button */}
                      <>
                        {!(
                          bookingDetailsData?.data?.paid_status === 'PAID'
                        ) ? null : (
                          <Button
                            onPress={() => {
                              const handler = async () => {
                                try {
                                  const result = (
                                    await cotruckCompleteBookingPOST.mutateAsync(
                                      {
                                        book_truck_id:
                                          bookingDetailsData?.data
                                            ?.book_truck_id,
                                        operator_id: Constants['AUTH_OWNER_ID'],
                                      }
                                    )
                                  )?.json;

                                  showAlertUtil({
                                    title: 'Message',
                                    message: result?.message,
                                    buttonText: undefined,
                                  });

                                  navigation.navigate('BottomTabNavigator', {
                                    screen: 'PaidScreen',
                                  });
                                } catch (err) {
                                  console.error(err);
                                }
                              };
                              handler();
                            }}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.ButtonStyles(theme)['Button'],
                                { borderRadius: 12, height: 48, margin: 20 }
                              ),
                              dimensions.width
                            )}
                            title={'Complete All Ride'}
                          />
                        )}
                      </>
                    </View>
                  )}
                </>
              </>
            );
          }}
        </CotruckApi.FetchBookingDetailPOST>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(ExportBookingDetailsOnCompletedScreen);
