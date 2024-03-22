import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CotruckApi from '../apis/CotruckApi.js';
import Header2Block from '../components/Header2Block';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import showAlertUtil from '../utils/showAlert';
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
  const [addOnAmount, setAddOnAmount] = React.useState(0);
  const [availabilityTruck, setAvailabilityTruck] = React.useState(0);
  const [baseCharges, setBaseCharges] = React.useState(0);
  const [chargesOptions, setChargesOptions] = React.useState([]);
  const [chooseDriverOptions, setChooseDriverOptions] = React.useState([]);
  const [extraAmount, setExtraAmount] = React.useState(0);
  const [extraCharges, setExtraCharges] = React.useState([]);
  const [extraChargesDesc, setExtraChargesDesc] = React.useState([]);
  const [multiSelectPickerValue, setMultiSelectPickerValue] = React.useState(
    []
  );
  const [selectDriver, setSelectDriver] = React.useState([]);
  const [textInputValue, setTextInputValue] = React.useState('');
  const [totalCharges, setTotalCharges] = React.useState('');
  const [truckNumbers, setTruckNumbers] = React.useState(0);
  const addExtraToTotal = (a, b) => {
    const d = a + b;
    return d;
  };
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
          book_truck_id={props.route?.params?.book_truck_id ?? ''}
          handlers={{
            onData: fetchData => {
              console.log("===>", fetchData?.data?.drivers);
              try {
                const DRIVERS = fetchData?.data?.drivers;
                setChooseDriverOptions(DRIVERS);
                setBaseCharges((fetchData?.data?.sub_total).toString());
                setTotalCharges((fetchData?.data?.total_price).toString());
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
              return (
                <>
                  {/* Error View */}
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
                  {/* Locations View */}
                  <View>
                    {/* Route */}
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
                      {'Route'}
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
                  {/* Divider  */}
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
                    {/* Date View */}
                    <View
                      style={StyleSheet.applyWidth(
                        { alignItems: 'center', width: '30%' },
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
                    {/* Material Type */}
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
                    {/* Shipper Name View */}
                    <View
                      style={StyleSheet.applyWidth(
                        { alignItems: 'center', width: '35%' },
                        dimensions.width
                      )}
                    >
                      {/* Booked BY */}
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
                        {'Booked By'}
                      </Text>
                      {/* Shipper Name */}
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
                        {fetchData?.data?.shipper_name}
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
                    {/* Vehicle Type */}
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
                        {'Vehicle Type'}
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
                    {/* Weight View */}
                    <View
                      style={StyleSheet.applyWidth(
                        { alignItems: 'center', width: '35%' },
                        dimensions.width
                      )}
                    >
                      {/* Load Weight */}
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
                        {'Load Weight'}
                      </Text>
                      {/* Weight */}
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
                        {fetchData?.data?.load_weight}
                      </Text>
                    </View>
                  </View>
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
                  {/* Address View */}
                  <View
                    style={StyleSheet.applyWidth(
                      { margin: 20 },
                      dimensions.width
                    )}
                  >
                    {/* Pickup Row */}
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
                      {/* Address */}
                      <View
                        style={StyleSheet.applyWidth(
                          { width: '45%' },
                          dimensions.width
                        )}
                      >
                        {/* Address */}
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            GlobalStyles.TextStyles(theme)['Text 2'],
                            dimensions.width
                          )}
                        >
                          {'Pickup Address'}
                        </Text>
                      </View>
                      {/* Icon View */}
                      <View>
                        <Icon
                          color={theme.colors['CoTruckGrey']}
                          name={'Entypo/dots-two-vertical'}
                          size={20}
                        />
                      </View>
                      {/* Address View */}
                      <View
                        style={StyleSheet.applyWidth(
                          { width: '50%' },
                          dimensions.width
                        )}
                      >
                        {/* Pickup Address */}
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
                          {fetchData?.data?.pickup_address}
                        </Text>
                      </View>
                    </View>
                    <Divider
                      color={theme.colors['Light']}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.DividerStyles(theme)['Divider'],
                          { marginBottom: 10, marginTop: 10 }
                        ),
                        dimensions.width
                      )}
                    />
                    {/* Drop Row */}
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
                      {/* Address */}
                      <View
                        style={StyleSheet.applyWidth(
                          { width: '45%' },
                          dimensions.width
                        )}
                      >
                        {/* Address */}
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            GlobalStyles.TextStyles(theme)['Text 2'],
                            dimensions.width
                          )}
                        >
                          {'Drop Address'}
                        </Text>
                      </View>
                      {/* Icon View */}
                      <View>
                        <Icon
                          color={theme.colors['CoTruckGrey']}
                          name={'Entypo/dots-two-vertical'}
                          size={20}
                        />
                      </View>
                      {/* Address View */}
                      <View
                        style={StyleSheet.applyWidth(
                          { width: '50%' },
                          dimensions.width
                        )}
                      >
                        {/* Drop Address */}
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
                          {fetchData?.data?.drop_address}
                        </Text>
                      </View>
                    </View>
                  </View>

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
                      try {
                        const valueyU36WT4v = newChooseDriverValue;
                        setSelectDriver(valueyU36WT4v);
                        const asdf = valueyU36WT4v;
                        const valueozrfZm8a = newChooseDriverValue?.length;
                        setTruckNumbers(valueozrfZm8a);
                        const ans = valueozrfZm8a;
                        console.log(asdf);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    options={fetchData?.data?.drivers}
                    placeholder={'Truck Number'}
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
                    value={selectDriver}
                  />


                  {/* Base Charges */}
                  <View>
                    <View
                      style={StyleSheet.applyWidth(
                        { margin: 10, marginBottom: 0 },
                        dimensions.width
                      )}
                    >
                      {/* Base Charges */}
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text 2'],
                            {
                              color: theme.colors['CoTruckBlack'],
                              fontSize: 16,
                              margin: 10,
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'Base Charges'}
                      </Text>
                    </View>
                    {/* View 2 */}
                    <View
                      style={StyleSheet.applyWidth(
                        { margin: 10, marginTop: 0 },
                        dimensions.width
                      )}
                    >
                      {/* Base Charges Input */}
                      <TextInput
                        allowFontScaling={true}
                        autoCapitalize={'none'}
                        changeTextDelay={500}
                        editable={false}
                        onChangeText={newBaseChargesInputValue => {
                          try {
                            setBaseCharges(newBaseChargesInputValue);
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        placeholder={'Enter a value...'}
                        placeholderTextColor={theme.colors['TextPlaceholder']}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextInputStyles(theme)['Text Input 3'],
                            {
                              borderColor: theme.colors['Light'],
                              borderRadius: 12,
                              height: 48,
                              margin: 10,
                              paddingLeft: 16,
                            }
                          ),
                          dimensions.width
                        )}
                        value={baseCharges}
                      />
                    </View>
                  </View>
                  {/* Add on Amount */}
                  <View>
                    <View
                      style={StyleSheet.applyWidth(
                        { margin: 10, marginBottom: 0 },
                        dimensions.width
                      )}
                    >
                      {/* Add on Amount */}
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text 2'],
                            {
                              color: theme.colors['CoTruckBlack'],
                              fontSize: 16,
                              margin: 10,
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'Add On Amount'}
                      </Text>
                    </View>
                    {/* View 2 */}
                    <View
                      style={StyleSheet.applyWidth(
                        { margin: 10, marginTop: 0 },
                        dimensions.width
                      )}
                    >
                      {/* Add-on Amount Input */}
                      <TextInput
                        allowFontScaling={true}
                        autoCapitalize={'none'}
                        changeTextDelay={500}
                        keyboardType={'phone-pad'}
                        onChangeText={newAddOnAmountInputValue => {
                          try {
                            const valueMNqv9sFA = parseInt(
                              newAddOnAmountInputValue,
                              10
                            );
                            setAddOnAmount(valueMNqv9sFA);
                            const ewer = valueMNqv9sFA;
                            if (newAddOnAmountInputValue === '') {
                              const valuetH3yI2lk = 0;
                              setAddOnAmount(valuetH3yI2lk);
                              const qwerqwer = valuetH3yI2lk;
                              const valueeiBeF7mh =
                                (fetchData?.data?.total_price).toString();
                              setTotalCharges(valueeiBeF7mh);
                              const qwer = valueeiBeF7mh;
                            } else {
                              const results = addExtraToTotal(
                                parseInt(ewer, 10),
                                parseInt(baseCharges, 10)
                              );

                              const value4us9u2aL = results.toString();
                              setTotalCharges(value4us9u2aL);
                              const asdf = value4us9u2aL;
                            }
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        placeholder={'Add on Amount'}
                        placeholderTextColor={theme.colors['TextPlaceholder']}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextInputStyles(theme)['Text Input 3'],
                            {
                              borderColor: theme.colors['Light'],
                              borderRadius: 12,
                              height: 48,
                              margin: 10,
                              paddingLeft: 16,
                            }
                          ),
                          dimensions.width
                        )}
                        value={addOnAmount}
                      />
                    </View>
                  </View>
                  {/* Total Charges */}
                  <View>
                    {/* Total Charges View */}
                    <View
                      style={StyleSheet.applyWidth(
                        { margin: 10, marginBottom: 0 },
                        dimensions.width
                      )}
                    >
                      {/* Total Charges */}
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text 2'],
                            {
                              color: theme.colors['CoTruckBlack'],
                              fontSize: 16,
                              margin: 10,
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'Total Charges'}
                      </Text>
                    </View>
                    {/* Total Charges View */}
                    <View
                      style={StyleSheet.applyWidth(
                        { margin: 10, marginTop: 0 },
                        dimensions.width
                      )}
                    >
                      {/* Total Charges Input */}
                      <TextInput
                        allowFontScaling={true}
                        autoCapitalize={'none'}
                        changeTextDelay={500}
                        editable={false}
                        onChangeText={newTotalChargesInputValue => {
                          try {
                            setTotalCharges(newTotalChargesInputValue);
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        placeholder={'Total Price'}
                        placeholderTextColor={theme.colors['TextPlaceholder']}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextInputStyles(theme)['Text Input 3'],
                            {
                              borderColor: theme.colors['Light'],
                              borderRadius: 12,
                              height: 48,
                              margin: 10,
                              paddingLeft: 16,
                            }
                          ),
                          dimensions.width
                        )}
                        value={totalCharges}
                      />
                    </View>
                  </View>
                  {/* Button Row */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginBottom: 50,
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
                            if (selectDriver?.length === 0) {
                              showAlertUtil({
                                title: 'Message',
                                message: 'Please choose truck number',
                                buttonText: undefined,
                              });
                            } else {
                              const results = (
                                await cotruckAcceptNewTripPOST.mutateAsync({
                                  addon_amount: addOnAmount,
                                  booking_id: fetchData?.data?.book_truck_id,
                                  driver_ids: selectDriver,
                                  final_total: totalCharges,
                                  operator_id: Constants['AUTH_OWNER_ID'],
                                  qty: fetchData?.data?.no_of_truck,
                                  sub_total: fetchData?.data?.sub_total,
                                })
                              )?.json;

                              showAlertUtil({
                                title: 'Message',
                                message: results?.message,
                                buttonText: undefined,
                              });

                              navigation.navigate('BottomTabNavigator', {
                                screen: 'HomeScreen',
                              });
                              console.log(results);
                            }
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
