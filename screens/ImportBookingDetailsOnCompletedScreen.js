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
import * as Linking from 'expo-linking';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const ImportBookingDetailsOnCompletedScreen = props => {
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

      <CotruckApi.FetchNewLeadsDetailsPOST
        book_truck_id={props.route?.params?.book_truck_id ?? ''}
      >
        {({ loading, error, data, refetchNewLeadsDetails }) => {
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
                  {fetchData?.data?.book_truck_id}
                </Text>
                {/* Status */}
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text 3'],
                      {
                        color: theme.colors['Error'],
                        fontFamily: 'System',
                        fontWeight: '400',
                        margin: 5,
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'Status : '}
                  {props.route?.params?.booking_status ?? ''}
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
                  {'paid_statu'}
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
                      <Image
                        resizeMode={'cover'}
                        source={Images.Icon}
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
                    <View>
                      {/* Name */}
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.TextStyles(theme)['Text 3'],
                          dimensions.width
                        )}
                      >
                        {'shipper name'}
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
                        {'shipper mobile'}
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
                          Linking.openURL('tel:');
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
                        source={Images.Icon}
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
                    <View>
                      {/* Driver Name */}
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.TextStyles(theme)['Text 3'],
                          dimensions.width
                        )}
                      >
                        {null}
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
                        {null}
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
                          Linking.openURL('tel:');
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
                    {fetchData?.data?.pickup_location}
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
                    {fetchData?.data?.drop_location}
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
                    {fetchData?.data?.depot_location}
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
                        {'Truck Type'}
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
                {/* View 2 */}
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
                        {'Type of material'}
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
                {/* View 3 */}
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
                        {'Per Container Weight (Ton)'}
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
                        {null}
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
                {/* View 4 */}
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
                {/* View 5 */}
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
                        {null}
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
                {/* View 6 */}
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
                        {fetchData?.data?.pickup_date?.split(' ')[0]}
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
                {/* View 7 */}
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
                        {null}
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
                      navigation.navigate('InvoiceScreen');
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
            </>
          );
        }}
      </CotruckApi.FetchNewLeadsDetailsPOST>
    </ScreenContainer>
  );
};

export default withTheme(ImportBookingDetailsOnCompletedScreen);
