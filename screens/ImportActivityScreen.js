import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CotruckApi from '../apis/CotruckApi.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  AccordionGroup,
  Divider,
  Icon,
  ScreenContainer,
  TabView,
  TabViewItem,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const ImportActivityScreen = props => {
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
          {
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 20,
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
            style={StyleSheet.applyWidth({ marginLeft: 10 }, dimensions.width)}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_500Medium',
                  fontSize: 17,
                },
                dimensions.width
              )}
            >
              {'Import Activity'}
            </Text>
          </View>
        </View>

        <Touchable
          onPress={() => {
            try {
              navigation.navigate('BottomTabNavigator', {
                screen: 'NotificationsScreen',
              });
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <Icon
            color={theme.colors['CoTruckGrey']}
            name={'Ionicons/ios-notifications-outline'}
            size={30}
            style={StyleSheet.applyWidth({ opacity: 1 }, dimensions.width)}
          />
        </Touchable>
      </View>

      <TabView
        activeColor={theme.colors.primary}
        indicatorColor={theme.colors.primary}
        keyboardDismissMode={'auto'}
        pressColor={theme.colors.primary}
        swipeEnabled={true}
        tabBarPosition={'top'}
        tabsBackgroundColor={theme.colors.background}
      >
        {/* Ongoing Tab View */}
        <>
          {!'OnGoing' ? null : (
            <TabViewItem
              style={StyleSheet.applyWidth(
                GlobalStyles.TabViewItemStyles(theme)['Tab View Item'],
                dimensions.width
              )}
              title={'Ongoing'}
            >
              <ScrollView
                bounces={true}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
              >
                <CotruckApi.FetchNewLeads$accepted$POST
                  booking_type={'Import'}
                  id={120}
                  owner_status={'ONGOING'}
                >
                  {({ loading, error, data, refetchNewLeads$accepted$ }) => {
                    const fetchData = data?.json;
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
                      return (
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
                          {/* Error */}
                          <Text
                            accessible={true}
                            allowFontScaling={true}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text 2'],
                                { margin: 20 }
                              ),
                              dimensions.width
                            )}
                          >
                            {fetchData?.message}
                          </Text>
                        </View>
                      );
                    }

                    return (
                      <FlatList
                        data={[]}
                        keyExtractor={listData =>
                          listData?.id ||
                          listData?.uuid ||
                          JSON.stringify(listData)
                        }
                        listKey={'UPIoiSOn'}
                        numColumns={1}
                        onEndReachedThreshold={0.5}
                        renderItem={({ item, index }) => {
                          const listData = item;
                          return (
                            <>
                              {/* 21 Dec 23 */}
                              <AccordionGroup
                                caretSize={24}
                                expanded={true}
                                iconSize={24}
                                label={'21 Dec 23'}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.AccordionGroupStyles(theme)[
                                      'Accordion'
                                    ],
                                    { margin: 10 }
                                  ),
                                  dimensions.width
                                )}
                              >
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      borderColor: theme.colors['Light'],
                                      borderRadius: 12,
                                      borderWidth: 1,
                                      margin: 10,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {/* Booking Component */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        backgroundColor: 'rgba(0, 0, 0, 0)',
                                        margin: 10,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {/* Location Row Wrapper */}
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
                                              GlobalStyles.TextStyles(theme)[
                                                'Text 2'
                                              ],
                                              {
                                                alignSelf: 'center',
                                                fontSize: 12,
                                                margin: 5,
                                              }
                                            ),
                                            dimensions.width
                                          )}
                                        >
                                          {'Asia World Port Terminal (AWPT)'}
                                        </Text>
                                      </View>
                                      {/* Icon View */}
                                      <View
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: '4%',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        <Icon
                                          color={theme.colors['CoTruckBlack']}
                                          name={'AntDesign/swap'}
                                          size={20}
                                        />
                                      </View>
                                      {/* View 2 */}
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
                                              GlobalStyles.TextStyles(theme)[
                                                'Text 2'
                                              ],
                                              {
                                                alignSelf: 'center',
                                                fontSize: 12,
                                                margin: 5,
                                              }
                                            ),
                                            dimensions.width
                                          )}
                                        >
                                          {'Myanmar Industrial Port (MIP)'}
                                        </Text>
                                      </View>
                                      {/* Icon View 2 */}
                                      <View
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: '4%',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        <Icon
                                          color={theme.colors['CoTruckBlack']}
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
                                              GlobalStyles.TextStyles(theme)[
                                                'Text 2'
                                              ],
                                              {
                                                alignSelf: 'center',
                                                fontSize: 12,
                                                margin: 5,
                                              }
                                            ),
                                            dimensions.width
                                          )}
                                        >
                                          {'North Dagon'}
                                        </Text>
                                      </View>
                                    </View>
                                    <Divider
                                      color={theme.colors['Light']}
                                      style={StyleSheet.applyWidth(
                                        StyleSheet.compose(
                                          GlobalStyles.DividerStyles(theme)[
                                            'Divider'
                                          ],
                                          { marginBottom: 5, marginTop: 5 }
                                        ),
                                        dimensions.width
                                      )}
                                    />
                                    {/* Info Row */}
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          alignItems: 'center',
                                          flexDirection: 'row',
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {/* Vehicle Type View */}
                                      <View
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: '35%',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {/* Vehicle Type */}
                                        <Text
                                          accessible={true}
                                          allowFontScaling={true}
                                          style={StyleSheet.applyWidth(
                                            StyleSheet.compose(
                                              GlobalStyles.TextStyles(theme)[
                                                'Text 2'
                                              ],
                                              {
                                                alignSelf: 'center',
                                                margin: 10,
                                              }
                                            ),
                                            dimensions.width
                                          )}
                                        >
                                          {'40ft'}
                                        </Text>
                                      </View>
                                      {/* Weight View */}
                                      <View
                                        style={StyleSheet.applyWidth(
                                          { width: '35%' },
                                          dimensions.width
                                        )}
                                      >
                                        {/* Weight */}
                                        <Text
                                          accessible={true}
                                          allowFontScaling={true}
                                          style={StyleSheet.applyWidth(
                                            StyleSheet.compose(
                                              GlobalStyles.TextStyles(theme)[
                                                'Text 2'
                                              ],
                                              {
                                                alignSelf: 'center',
                                                margin: 10,
                                              }
                                            ),
                                            dimensions.width
                                          )}
                                        >
                                          {'124'}
                                        </Text>
                                      </View>
                                      {/* Status View */}
                                      <View
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: '35%',
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
                                              GlobalStyles.TextStyles(theme)[
                                                'Text 2'
                                              ],
                                              {
                                                alignSelf: 'center',
                                                color: theme.colors['Success'],
                                                margin: 10,
                                              }
                                            ),
                                            dimensions.width
                                          )}
                                        >
                                          {'ONGOING'}
                                        </Text>
                                      </View>
                                    </View>
                                  </View>
                                </View>
                              </AccordionGroup>
                            </>
                          );
                        }}
                        showsHorizontalScrollIndicator={true}
                        showsVerticalScrollIndicator={true}
                      />
                    );
                  }}
                </CotruckApi.FetchNewLeads$accepted$POST>
              </ScrollView>
            </TabViewItem>
          )}
        </>
        {/* Completed */}
        <>
          {!'Completed' ? null : (
            <TabViewItem
              style={StyleSheet.applyWidth(
                GlobalStyles.TabViewItemStyles(theme)['Tab View Item'],
                dimensions.width
              )}
              title={'Completed'}
            >
              {/* 21 Dec 24 */}
              <AccordionGroup
                caretSize={24}
                expanded={true}
                iconSize={24}
                label={'21 Dec 23'}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.AccordionGroupStyles(theme)['Accordion'],
                    { margin: 10 }
                  ),
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      borderColor: theme.colors['Light'],
                      borderRadius: 12,
                      borderWidth: 1,
                      margin: 10,
                    },
                    dimensions.width
                  )}
                >
                  {/* Booking Component */}
                  <View
                    style={StyleSheet.applyWidth(
                      { backgroundColor: 'rgba(0, 0, 0, 0)', margin: 10 },
                      dimensions.width
                    )}
                  >
                    {/* Location Row Wrapper */}
                    <View
                      style={StyleSheet.applyWidth(
                        { alignItems: 'center', flexDirection: 'row' },
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
                              GlobalStyles.TextStyles(theme)['Text 2'],
                              { alignSelf: 'center', fontSize: 12, margin: 5 }
                            ),
                            dimensions.width
                          )}
                        >
                          {'Asia World Port Terminal (AWPT)'}
                        </Text>
                      </View>
                      {/* Icon View */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '4%',
                          },
                          dimensions.width
                        )}
                      >
                        <Icon
                          color={theme.colors['CoTruckBlack']}
                          name={'AntDesign/swap'}
                          size={20}
                        />
                      </View>
                      {/* View 2 */}
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
                              GlobalStyles.TextStyles(theme)['Text 2'],
                              { alignSelf: 'center', fontSize: 12, margin: 5 }
                            ),
                            dimensions.width
                          )}
                        >
                          {'Myanmar Industrial Port (MIP)'}
                        </Text>
                      </View>
                      {/* Icon View 2 */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '4%',
                          },
                          dimensions.width
                        )}
                      >
                        <Icon
                          color={theme.colors['CoTruckBlack']}
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
                              GlobalStyles.TextStyles(theme)['Text 2'],
                              { alignSelf: 'center', fontSize: 12, margin: 5 }
                            ),
                            dimensions.width
                          )}
                        >
                          {'North Dagon'}
                        </Text>
                      </View>
                    </View>
                    <Divider
                      color={theme.colors['Light']}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.DividerStyles(theme)['Divider'],
                          { marginBottom: 5, marginTop: 5 }
                        ),
                        dimensions.width
                      )}
                    />
                    {/* Info Row */}
                    <View
                      style={StyleSheet.applyWidth(
                        { alignItems: 'center', flexDirection: 'row' },
                        dimensions.width
                      )}
                    >
                      {/* Vehicle Type View */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '35%',
                          },
                          dimensions.width
                        )}
                      >
                        {/* Vehicle Type */}
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text 2'],
                              { alignSelf: 'center', margin: 10 }
                            ),
                            dimensions.width
                          )}
                        >
                          {'40ft'}
                        </Text>
                      </View>
                      {/* Weight View */}
                      <View
                        style={StyleSheet.applyWidth(
                          { width: '35%' },
                          dimensions.width
                        )}
                      >
                        {/* Weight */}
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text 2'],
                              { alignSelf: 'center', margin: 10 }
                            ),
                            dimensions.width
                          )}
                        >
                          {'124'}
                        </Text>
                      </View>
                      {/* Status View */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '35%',
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
                              {
                                alignSelf: 'center',
                                color: theme.colors['Success'],
                                margin: 10,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'ONGOING'}
                        </Text>
                      </View>
                    </View>
                  </View>
                  {/* Payment Status */}
                  <View>
                    {/* Payment Status */}
                    <Text
                      accessible={true}
                      allowFontScaling={true}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text 2'],
                          {
                            color: theme.colors['Primary'],
                            margin: 20,
                            textAlign: 'right',
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Payment Status - Pending'}
                    </Text>
                  </View>
                </View>
              </AccordionGroup>
            </TabViewItem>
          )}
        </>
        {/* Paid Tab View */}
        <>
          {!'Completed' ? null : (
            <TabViewItem
              style={StyleSheet.applyWidth(
                GlobalStyles.TabViewItemStyles(theme)['Tab View Item'],
                dimensions.width
              )}
              title={'Paid'}
            >
              {/* 21 Dec 25 */}
              <AccordionGroup
                caretSize={24}
                expanded={true}
                iconSize={24}
                label={'21 Dec 23'}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.AccordionGroupStyles(theme)['Accordion'],
                    { margin: 10 }
                  ),
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      borderColor: theme.colors['Light'],
                      borderRadius: 12,
                      borderWidth: 1,
                      margin: 10,
                    },
                    dimensions.width
                  )}
                >
                  {/* Booking Component */}
                  <View
                    style={StyleSheet.applyWidth(
                      { backgroundColor: 'rgba(0, 0, 0, 0)', margin: 10 },
                      dimensions.width
                    )}
                  >
                    {/* Location Row Wrapper */}
                    <View
                      style={StyleSheet.applyWidth(
                        { alignItems: 'center', flexDirection: 'row' },
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
                              GlobalStyles.TextStyles(theme)['Text 2'],
                              { alignSelf: 'center', fontSize: 12, margin: 5 }
                            ),
                            dimensions.width
                          )}
                        >
                          {'Asia World Port Terminal (AWPT)'}
                        </Text>
                      </View>
                      {/* Icon View */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '4%',
                          },
                          dimensions.width
                        )}
                      >
                        <Icon
                          color={theme.colors['CoTruckBlack']}
                          name={'AntDesign/swap'}
                          size={20}
                        />
                      </View>
                      {/* View 2 */}
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
                              GlobalStyles.TextStyles(theme)['Text 2'],
                              { alignSelf: 'center', fontSize: 12, margin: 5 }
                            ),
                            dimensions.width
                          )}
                        >
                          {'Myanmar Industrial Port (MIP)'}
                        </Text>
                      </View>
                      {/* Icon View 2 */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '4%',
                          },
                          dimensions.width
                        )}
                      >
                        <Icon
                          color={theme.colors['CoTruckBlack']}
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
                              GlobalStyles.TextStyles(theme)['Text 2'],
                              { alignSelf: 'center', fontSize: 12, margin: 5 }
                            ),
                            dimensions.width
                          )}
                        >
                          {'North Dagon'}
                        </Text>
                      </View>
                    </View>
                    <Divider
                      color={theme.colors['Light']}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.DividerStyles(theme)['Divider'],
                          { marginBottom: 5, marginTop: 5 }
                        ),
                        dimensions.width
                      )}
                    />
                    {/* Info Row */}
                    <View
                      style={StyleSheet.applyWidth(
                        { alignItems: 'center', flexDirection: 'row' },
                        dimensions.width
                      )}
                    >
                      {/* Vehicle Type View */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '35%',
                          },
                          dimensions.width
                        )}
                      >
                        {/* Vehicle Type */}
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text 2'],
                              { alignSelf: 'center', margin: 10 }
                            ),
                            dimensions.width
                          )}
                        >
                          {'40ft'}
                        </Text>
                      </View>
                      {/* Weight View */}
                      <View
                        style={StyleSheet.applyWidth(
                          { width: '35%' },
                          dimensions.width
                        )}
                      >
                        {/* Weight */}
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text 2'],
                              { alignSelf: 'center', margin: 10 }
                            ),
                            dimensions.width
                          )}
                        >
                          {'124'}
                        </Text>
                      </View>
                      {/* Status View */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '35%',
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
                              {
                                alignSelf: 'center',
                                color: theme.colors['Success'],
                                margin: 10,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'ONGOING'}
                        </Text>
                      </View>
                    </View>
                  </View>
                  {/* Payment Status */}
                  <View>
                    {/* Payment Status */}
                    <Text
                      accessible={true}
                      allowFontScaling={true}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text 2'],
                          {
                            color: theme.colors['Primary'],
                            margin: 20,
                            textAlign: 'right',
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Payment Status - Paid'}
                    </Text>
                  </View>
                </View>
              </AccordionGroup>
            </TabViewItem>
          )}
        </>
      </TabView>
    </ScreenContainer>
  );
};

export default withTheme(ImportActivityScreen);
