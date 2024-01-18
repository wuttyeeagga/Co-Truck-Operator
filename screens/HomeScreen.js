import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CotruckApi from '../apis/CotruckApi.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  AccordionGroup,
  Icon,
  IconButton,
  ScreenContainer,
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

const HomeScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [checkboxRow2Value, setCheckboxRow2Value] = React.useState('');
  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');
  const [containerWeight, setContainerWeight] = React.useState('');
  const [depotValue, setDepotValue] = React.useState('');
  const [dropOffValue, setDropOffValue] = React.useState('');
  const [isExport, setIsExport] = React.useState(false);
  const [isImport, setIsImport] = React.useState(true);
  const [materialType, setMaterialType] = React.useState('');
  const [notFound, setNotFound] = React.useState('');
  const [numberOfTruck, setNumberOfTruck] = React.useState('');
  const [pickerValue, setPickerValue] = React.useState('');
  const [pickerValue2, setPickerValue2] = React.useState('');
  const [pickupValue, setPickupValue] = React.useState('');
  const [productType, setProductType] = React.useState('');
  const [showappointment, setShowappointment] = React.useState(false);
  const [switchRow2Value, setSwitchRow2Value] = React.useState(false);
  const [switchRowValue, setSwitchRowValue] = React.useState(false);
  const [switchRowValue2, setSwitchRowValue2] = React.useState(false);
  const [switchValue, setSwitchValue] = React.useState(false);
  const [switchValue2, setSwitchValue2] = React.useState(false);
  const [switchValue3, setSwitchValue3] = React.useState(false);
  const [switchValue4, setSwitchValue4] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={true}
      hasTopSafeArea={true}
      scrollable={false}
    >
      {/* Tab Header */}
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
            {/* Title */}
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
              {'New Leads'}
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
          />
        </Touchable>
      </View>

      <ScrollView
        bounces={true}
        contentContainerStyle={StyleSheet.applyWidth(
          { paddingBottom: 20 },
          dimensions.width
        )}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <CotruckApi.FetchOperatorUserIdPOST
          handlers={{
            on404: fetchData => {
              try {
                setNotFound('There is not Found');
              } catch (err) {
                console.error(err);
              }
            },
          }}
          user_id={120}
        >
          {({ loading, error, data, refetchOperatorUserId }) => {
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
              return (
                <>
                  {/* View 2 */}
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
                    <Text
                      accessible={true}
                      allowFontScaling={true}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text 2'],
                          { fontSize: 16 }
                        ),
                        dimensions.width
                      )}
                    >
                      {notFound}
                    </Text>
                  </View>
                </>
              );
            }

            return (
              <FlatList
                data={fetchData?.data}
                keyExtractor={listData =>
                  listData?.id || listData?.uuid || JSON.stringify(listData)
                }
                listKey={'Or2R6bzt'}
                numColumns={1}
                onEndReachedThreshold={0.5}
                renderItem={({ item }) => {
                  const listData = item;
                  return (
                    <>
                      <Touchable
                        onPress={() => {
                          try {
                            console.log('pressed');
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                      >
                        {/* Card */}
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
                          {/* Locations Row */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                flexDirection: 'row',
                                margin: 5,
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
                                    GlobalStyles.TextStyles(theme)['Text 2'],
                                    {
                                      alignSelf: 'center',
                                      fontSize: 12,
                                      margin: 5,
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {listData?.pickup_location}
                              </Text>
                            </View>
                            {/* Icon View */}
                            <View>
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
                                    GlobalStyles.TextStyles(theme)['Text 2'],
                                    {
                                      alignSelf: 'center',
                                      fontSize: 12,
                                      margin: 5,
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {listData?.drop_location}
                              </Text>
                            </View>
                            {/* Icon View */}
                            <View>
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
                                    GlobalStyles.TextStyles(theme)['Text 2'],
                                    {
                                      alignSelf: 'center',
                                      fontSize: 12,
                                      margin: 5,
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {listData?.depot_location_name}
                              </Text>
                            </View>
                          </View>
                          {/* Info Row */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                flexDirection: 'row',
                                margin: 5,
                              },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  width: '25%',
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
                                    { margin: 5 }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {listData?.pickup_date?.split(' ')[0]}
                              </Text>
                            </View>
                            {/* View 2 */}
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  width: '25%',
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
                                    { margin: 5 }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {listData?.vehicle_type?.split(' ')[0]}
                              </Text>
                            </View>
                            {/* View 3 */}
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  width: '25%',
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
                                    { margin: 5 }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'Truck - '}
                                {listData?.no_of_truck}
                              </Text>
                            </View>
                            {/* View 4 */}
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  width: '25%',
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
                                    { margin: 5 }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {listData?.load_weight}
                              </Text>
                            </View>
                          </View>

                          <View
                            style={StyleSheet.applyWidth(
                              { margin: 5 },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  alignItems: 'center',
                                  borderRadius: 8,
                                  flexDirection: 'row',
                                  justifyContent: 'flex-end',
                                  margin: 10,
                                },
                                dimensions.width
                              )}
                            >
                              {/* Owner Book Status */}
                              <Text
                                accessible={true}
                                allowFontScaling={true}
                                style={StyleSheet.applyWidth(
                                  GlobalStyles.TextStyles(theme)['Text 2'],
                                  dimensions.width
                                )}
                              >
                                {'Owner Book Status - '}
                              </Text>
                              {/* Accepted */}
                              <>
                                {!(
                                  listData?.owner_book_status === 'ACCEPTED'
                                ) ? null : (
                                  <Text
                                    accessible={true}
                                    allowFontScaling={true}
                                    style={StyleSheet.applyWidth(
                                      StyleSheet.compose(
                                        GlobalStyles.TextStyles(theme)[
                                          'Text 2'
                                        ],
                                        { color: theme.colors['Success'] }
                                      ),
                                      dimensions.width
                                    )}
                                  >
                                    {listData?.owner_book_status}
                                  </Text>
                                )}
                              </>
                              {/* Pending */}
                              <>
                                {!(
                                  listData?.owner_book_status === 'PENDING'
                                ) ? null : (
                                  <Text
                                    accessible={true}
                                    allowFontScaling={true}
                                    style={StyleSheet.applyWidth(
                                      StyleSheet.compose(
                                        GlobalStyles.TextStyles(theme)[
                                          'Text 2'
                                        ],
                                        {
                                          color: theme.colors['CoTruckPending'],
                                        }
                                      ),
                                      dimensions.width
                                    )}
                                  >
                                    {listData?.owner_book_status}
                                  </Text>
                                )}
                              </>
                              {/* Cancelled */}
                              <>
                                {!(
                                  listData?.owner_book_status === 'CANCELLED'
                                ) ? null : (
                                  <Text
                                    accessible={true}
                                    allowFontScaling={true}
                                    style={StyleSheet.applyWidth(
                                      StyleSheet.compose(
                                        GlobalStyles.TextStyles(theme)[
                                          'Text 2'
                                        ],
                                        { color: theme.colors['Error'] }
                                      ),
                                      dimensions.width
                                    )}
                                  >
                                    {listData?.owner_book_status}
                                  </Text>
                                )}
                              </>
                            </View>
                          </View>
                        </View>
                      </Touchable>
                    </>
                  );
                }}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
              />
            );
          }}
        </CotruckApi.FetchOperatorUserIdPOST>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(HomeScreen);
