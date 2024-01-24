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

const ImportBookingDetailsOnGoingScreen = props => {
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
      style={StyleSheet.applyWidth({ borderRadius: 12 }, dimensions.width)}
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

      <CotruckApi.FetchBookingDetailPOST
        book_truck_id={props.route?.params?.book_truck_id ?? ''}
      >
        {({ loading, error, data, refetchBookingDetail }) => {
          const fetchData = data?.json;
          if (loading) {
            return (
              <>
                {/* loading View */}
                <View
                  style={StyleSheet.applyWidth(
                    { alignItems: 'center', flex: 1, justifyContent: 'center' },
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
              <View
                style={StyleSheet.applyWidth(
                  { marginLeft: 20, marginRight: 20 },
                  dimensions.width
                )}
              >
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
                        { color: theme.colors['Custom Color_9'] }
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
                        { color: theme.colors['Success'] }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Status : '}
                    {fetchData?.data?.status}
                  </Text>
                </View>
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
                  {/* View 3 */}
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
                        { alignItems: 'center', flexDirection: 'row' },
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          { marginLeft: 5, marginRight: 5 },
                          dimensions.width
                        )}
                      >
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
                      {/* View 2 */}
                      <View
                        style={StyleSheet.applyWidth(
                          { marginLeft: 5, marginRight: 5 },
                          dimensions.width
                        )}
                      >
                        {/* Shipper Name */}
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
                        {/* Shipper Comp Name */}
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
                    {/* View 2 */}
                    <View
                      style={StyleSheet.applyWidth(
                        { alignItems: 'center', flexDirection: 'row' },
                        dimensions.width
                      )}
                    >
                      {/* Call */}
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
                {/* Operator Info Row 2 */}
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
                      { alignItems: 'center', flexDirection: 'row' },
                      dimensions.width
                    )}
                  >
                    <View
                      style={StyleSheet.applyWidth(
                        { marginLeft: 5, marginRight: 5 },
                        dimensions.width
                      )}
                    >
                      <Image
                        resizeMode={'cover'}
                        source={Images.Ellipse21}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.ImageStyles(theme)['Image 3'],
                            { height: 50, width: 50 }
                          ),
                          dimensions.width
                        )}
                      />
                    </View>
                    {/* View 2 */}
                    <View
                      style={StyleSheet.applyWidth(
                        { marginLeft: 5, marginRight: 5 },
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
                        {'driver name'}
                      </Text>
                      {/* Text 2 */}
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text 3'],
                            { color: theme.colors['Success'] }
                          ),
                          dimensions.width
                        )}
                      >
                        {'Trip Started'}
                      </Text>
                    </View>
                  </View>
                  {/* View 2 */}
                  <View
                    style={StyleSheet.applyWidth(
                      { alignItems: 'center', flexDirection: 'row' },
                      dimensions.width
                    )}
                  >
                    {/* Call */}
                    <IconButton
                      icon={'Feather/phone'}
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
                  { alignItems: 'center', flexDirection: 'row', margin: 20 },
                  dimensions.width
                )}
              >
                {/* Pickup Location */}
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
                    { width: '5%' },
                    dimensions.width
                  )}
                >
                  <Icon
                    color={theme.colors['CoTruckGrey']}
                    name={'AntDesign/swap'}
                    size={20}
                  />
                </View>
                {/* Drop Location */}
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
                    { width: '5%' },
                    dimensions.width
                  )}
                >
                  <Icon
                    color={theme.colors['CoTruckGrey']}
                    name={'AntDesign/swap'}
                    size={20}
                  />
                </View>
                {/* Depot Location */}
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
              {/* Invoice */}
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
                {/* Truck Type Info */}
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
                      {/* Truck Type */}
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
                      {/* Truck Type */}
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
                {/* Material Info */}
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
                      {/* Type Material */}
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
                {/* Load Weight Info */}
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
                {/* N0. Truck Info */}
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
                      {/* No. truck */}
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
                {/* Product Info */}
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
                {/* Pickup Date Info */}
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
                {/* Truck Price Info */}
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
                      {/* Truck Price */}
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
                        {fetchData?.data?.per_vehicle_ownercost}
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
                <Button
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ButtonStyles(theme)['Button'],
                      { borderRadius: 12, height: 48, margin: 20 }
                    ),
                    dimensions.width
                  )}
                  title={'Invoices'}
                />
              </View>
            </>
          );
        }}
      </CotruckApi.FetchBookingDetailPOST>
    </ScreenContainer>
  );
};

export default withTheme(ImportBookingDetailsOnGoingScreen);
