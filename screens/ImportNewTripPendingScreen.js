import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CotruckApi from '../apis/CotruckApi.js';
import Header2Block from '../components/Header2Block';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  Divider,
  Icon,
  MultiSelectPicker,
  ScreenContainer,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const ImportNewTripPendingScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [availabilityTruck, setAvailabilityTruck] = React.useState(1);
  const [chooseDriverOptions, setChooseDriverOptions] = React.useState([]);
  const [multiSelectPickerValue, setMultiSelectPickerValue] = React.useState(
    []
  );
  const [textInputValue, setTextInputValue] = React.useState('');
  const [pickerValue, setPickerValue] = React.useState(undefined);
  const cotruckAcceptNewTripPOST = CotruckApi.useAcceptNewTripPOST();

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={true}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors['Surface'] },
        dimensions.width
      )}
    >
      {/* Header */}
      <Header2Block title={'New Trip (Pending)'} />
      <ScrollView
        bounces={true}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
      >
        <CotruckApi.FetchNewLeadsDetailsPOST
          book_truck_id={120}
          handlers={{
            onData: fetchData => {
              try {
                const asdf = fetchData?.data?.drivers;
                setChooseDriverOptions(asdf);
              } catch (err) {
                console.error(err);
              }
            },
          }}
        >
          {({ loading, error, data, refetchNewLeadsDetails }) => {
            const fetchData = data?.json;
            if (loading) {
              return (
                <>
                  {/* Loading View */}
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
                    <ActivityIndicator
                      animating={true}
                      color={'rgba(0, 0, 0, 0)'}
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
                <>
                  {/* Error View */}
                  <View>
                    {/* error */}
                    <Text
                      accessible={true}
                      allowFontScaling={true}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.TextStyles(theme)['Text 2'],
                        dimensions.width
                      )}
                    >
                      {fetchData?.message}
                    </Text>
                  </View>
                </>
              );
            }

            return (
              <>
                {/* Main View */}
                <View>
                  <View>
                    {/* Ride Zone */}
                    <Text
                      accessible={true}
                      allowFontScaling={true}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text 2'],
                          {
                            color: theme.colors['CoTruckBlack'],
                            fontSize: 20,
                            margin: 10,
                            marginLeft: 30,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Ride Zone'}
                    </Text>
                    {/* Row Wrapper */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          borderColor: theme.colors['Light'],
                          borderRadius: 12,
                          borderWidth: 1,
                          flexDirection: 'row',
                          margin: 10,
                          padding: 10,
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
                              GlobalStyles.TextStyles(theme)['Text 2'],
                              {
                                color: theme.colors['CoTruckBlack'],
                                fontSize: 12,
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
                          {
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '5%',
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
                              {
                                color: theme.colors['CoTruckBlack'],
                                fontSize: 12,
                                margin: 5,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {fetchData?.data?.drop_location}
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
                          color={theme.colors['CoTruckBlack']}
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
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text 2'],
                              {
                                color: theme.colors['CoTruckBlack'],
                                fontSize: 12,
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
                  </View>
                  {/* Type Material View */}
                  <View
                    style={StyleSheet.applyWidth(
                      { marginLeft: 20 },
                      dimensions.width
                    )}
                  >
                    {/* Type */}
                    <Text
                      accessible={true}
                      allowFontScaling={true}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text 2'],
                          { color: theme.colors['CoTruckGrey'], margin: 10 }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Type of Material'}
                    </Text>
                    {/* Material Type */}
                    <Text
                      accessible={true}
                      allowFontScaling={true}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text 2'],
                          { color: theme.colors['CoTruckBlack'], margin: 10 }
                        ),
                        dimensions.width
                      )}
                    >
                      {fetchData?.data?.vehicle_type}
                    </Text>
                  </View>
                  {/* Divider 4 */}
                  <Divider
                    color={theme.colors['Light']}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.DividerStyles(theme)['Divider'],
                        {
                          marginBottom: 10,
                          marginLeft: 20,
                          marginRight: 20,
                          marginTop: 10,
                        }
                      ),
                      dimensions.width
                    )}
                  />
                  {/* Date Price Row */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        flexDirection: 'row',
                        margin: 20,
                        marginBottom: 10,
                        marginTop: 10,
                      },
                      dimensions.width
                    )}
                  >
                    <View
                      style={StyleSheet.applyWidth(
                        { alignItems: 'center', width: '35%' },
                        dimensions.width
                      )}
                    >
                      {/* Date */}
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text 2'],
                            { color: theme.colors['CoTruckGrey'], margin: 5 }
                          ),
                          dimensions.width
                        )}
                      >
                        {'Date'}
                      </Text>
                      {/* Date Value */}
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text 2'],
                            { color: theme.colors['CoTruckBlack'], margin: 5 }
                          ),
                          dimensions.width
                        )}
                      >
                        {fetchData?.data?.pickup_date?.split(' ')[0]}
                      </Text>
                    </View>
                    {/* View 2 */}
                    <View
                      style={StyleSheet.applyWidth(
                        { alignItems: 'center', width: '35%' },
                        dimensions.width
                      )}
                    >
                      {/* Material Type */}
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text 2'],
                            { color: theme.colors['CoTruckGrey'], margin: 5 }
                          ),
                          dimensions.width
                        )}
                      >
                        {'Material Type'}
                      </Text>
                      {/* Material Type */}
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text 2'],
                            { color: theme.colors['CoTruckBlack'], margin: 5 }
                          ),
                          dimensions.width
                        )}
                      >
                        {fetchData?.data?.material_type}
                      </Text>
                    </View>
                    {/* View 3 */}
                    <View
                      style={StyleSheet.applyWidth(
                        { alignItems: 'center', width: '35%' },
                        dimensions.width
                      )}
                    >
                      {/* Price */}
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text 2'],
                            { color: theme.colors['CoTruckGrey'], margin: 5 }
                          ),
                          dimensions.width
                        )}
                      >
                        {'Price'}
                      </Text>
                      {/* Price Value */}
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text 2'],
                            { color: theme.colors['CoTruckBlack'], margin: 5 }
                          ),
                          dimensions.width
                        )}
                      >
                        {'MMK 450'}
                      </Text>
                    </View>
                  </View>
                  {/* Truck Info Row */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        flexDirection: 'row',
                        margin: 20,
                        marginBottom: 10,
                        marginTop: 10,
                      },
                      dimensions.width
                    )}
                  >
                    {/* Type View */}
                    <View
                      style={StyleSheet.applyWidth(
                        { alignItems: 'center', width: '35%' },
                        dimensions.width
                      )}
                    >
                      {/* Type */}
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
                        {'Type'}
                      </Text>
                      {/* Vehicle type */}
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
                        {fetchData?.data?.vehicle_type?.split(' ')[0]}
                      </Text>
                    </View>
                    {/* No of Truck View */}
                    <View
                      style={StyleSheet.applyWidth(
                        { alignItems: 'center', width: '35%' },
                        dimensions.width
                      )}
                    >
                      {/* No of truck */}
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
                        {'No of Truck'}
                      </Text>
                      {/* No of Truck */}
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
                        {fetchData?.data?.no_of_truck}
                      </Text>
                    </View>
                    {/* Availability View */}
                    <View
                      style={StyleSheet.applyWidth(
                        { alignItems: 'center', width: '40%' },
                        dimensions.width
                      )}
                    >
                      {/* Text View */}
                      <View>
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
                          {'Availability'}
                        </Text>
                      </View>
                      {/* Availability Input */}
                      <TextInput
                        allowFontScaling={true}
                        autoCapitalize={'none'}
                        changeTextDelay={500}
                        onChangeText={newAvailabilityInputValue => {
                          try {
                            setAvailabilityTruck(newAvailabilityInputValue);
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        placeholder={'enter number'}
                        placeholderTextColor={theme.colors['TextPlaceholder']}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextInputStyles(theme)['Text Input 3'],
                            {
                              borderColor: theme.colors['Light'],
                              margin: 10,
                              paddingLeft: 20,
                              width: '50%',
                            }
                          ),
                          dimensions.width
                        )}
                        value={availabilityTruck}
                      />
                    </View>
                  </View>
                  {/* Divider 2 */}
                  <Divider
                    color={theme.colors['Light']}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.DividerStyles(theme)['Divider'],
                        {
                          marginBottom: 10,
                          marginLeft: 20,
                          marginRight: 20,
                          marginTop: 10,
                        }
                      ),
                      dimensions.width
                    )}
                  />
                  {/* Choose Driver */}
                  <MultiSelectPicker
                    autoDismissKeyboard={true}
                    dropDownBackgroundColor={theme.colors.background}
                    dropDownBorderColor={theme.colors['Light']}
                    dropDownBorderRadius={12}
                    dropDownBorderWidth={1}
                    dropDownTextColor={theme.colors.strong}
                    iconSize={24}
                    leftIconMode={'inset'}
                    onValueChange={newChooseDriverValue => {
                      const pickerValue = newChooseDriverValue;
                      try {
                        setMultiSelectPickerValue(newChooseDriverValue);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    options={Constants['optionsList']}
                    placeholder={'Choose Driver'}
                    placeholderTextColor={theme.colors['TextPlaceholder']}
                    rightIconName={'AntDesign/caretdown'}
                    selectedIconColor={theme.colors.strong}
                    selectedIconName={'Feather/check'}
                    selectedIconSize={20}
                    style={StyleSheet.applyWidth(
                      { borderRadius: 12, height: 48, margin: 20 },
                      dimensions.width
                    )}
                    type={'solid'}
                    value={multiSelectPickerValue}
                  />
                  {/* View 2 */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                      },
                      dimensions.width
                    )}
                  >
                    {/* Reject */}
                    <Button
                      icon={'Entypo/circle-with-cross'}
                      onPress={() => {
                        try {
                          navigation.navigate('ImportReasonForCancelScreen', {
                            book_truck_id: fetchData?.data?.book_truck_id,
                          });
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.ButtonStyles(theme)['Button'],
                          {
                            backgroundColor: theme.colors['Error'],
                            borderRadius: 12,
                            height: 48,
                            margin: 10,
                          }
                        ),
                        dimensions.width
                      )}
                      title={'REJECT'}
                    />
                    {/* Accept */}
                    <Button
                      icon={'Ionicons/ios-checkmark-circle-sharp'}
                      onPress={() => {
                        const handler = async () => {
                          try {
                            const results = (
                              await cotruckAcceptNewTripPOST.mutateAsync({
                                booking_id:
                                  props.route?.params?.booking_id ?? '',
                                charges: 450,
                                desc: [],
                                driver_id: 23,
                                final_total: 12345,
                                qty: fetchData?.data?.no_of_truck,
                                sub_total: 780,
                                user_id: Constants['AUTH_OWNER_ID'],
                              })
                            )?.json;
                            console.log(results);
                            navigation.navigate('BottomTabNavigator', {
                              screen: 'HomeScreen',
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
                          {
                            backgroundColor: theme.colors['Success'],
                            borderRadius: 12,
                            height: 48,
                            margin: 10,
                          }
                        ),
                        dimensions.width
                      )}
                      title={'ACCEPT'}
                    />
                  </View>
                </View>
              </>
            );
          }}
        </CotruckApi.FetchNewLeadsDetailsPOST>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(ImportNewTripPendingScreen);