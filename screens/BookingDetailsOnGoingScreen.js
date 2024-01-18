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

const BookingDetailsOnGoingScreen = props => {
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
            <FlashList
              data={fetchData?.book_trucks}
              estimatedItemSize={50}
              keyExtractor={flashListData =>
                flashListData?.id ||
                flashListData?.uuid ||
                JSON.stringify(flashListData)
              }
              listKey={'AAW2BHQO'}
              numColumns={1}
              onEndReachedThreshold={0.5}
              renderItem={({ item }) => {
                const flashListData = item;
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
                          {flashListData?.id}
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
                          {flashListData?.booking_status}
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
                          renderItem={({ item }) => {
                            const flashListData = item;
                            return (
                              <>
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
                                      {
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                      },
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
                                            GlobalStyles.ImageStyles(theme)[
                                              'Image 3'
                                            ],
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
                                      <Text
                                        accessible={true}
                                        allowFontScaling={true}
                                        style={StyleSheet.applyWidth(
                                          GlobalStyles.TextStyles(theme)[
                                            'Text 3'
                                          ],
                                          dimensions.width
                                        )}
                                      >
                                        {flashListData?.name}
                                      </Text>
                                      {/* Text 2 */}
                                      <Text
                                        accessible={true}
                                        allowFontScaling={true}
                                        style={StyleSheet.applyWidth(
                                          GlobalStyles.TextStyles(theme)[
                                            'Text 3'
                                          ],
                                          dimensions.width
                                        )}
                                      >
                                        {flashListData?.comp_name}
                                      </Text>
                                    </View>
                                  </View>
                                  {/* View 2 */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                      },
                                      dimensions.width
                                    )}
                                  >
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
                              </>
                            );
                          }}
                          showsHorizontalScrollIndicator={true}
                          showsVerticalScrollIndicator={true}
                        />
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
                        {
                          alignItems: 'center',
                          flexDirection: 'row',
                          margin: 20,
                        },
                        dimensions.width
                      )}
                    >
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
                          {'Pick up to drop location'}
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
                      {/* View 3 */}
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
                          {'Pick up to drop location'}
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
                      {/* View 4 */}
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
                          {'Pick up to drop location'}
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
                              {'MMK 500'}
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
              showsHorizontalScrollIndicator={true}
              showsVerticalScrollIndicator={true}
            />
          );
        }}
      </CotruckApi.FetchOperatorBookingDetailByIdPOST>
    </ScreenContainer>
  );
};

export default withTheme(BookingDetailsOnGoingScreen);
