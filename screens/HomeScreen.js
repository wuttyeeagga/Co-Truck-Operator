import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Icon,
  Picker,
  PickerItem,
  ScreenContainer,
  Switch,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import {
  Image,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

const HomeScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [checkboxRow2Value, setCheckboxRow2Value] = React.useState('');
  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');
  const [containerWeight, setContainerWeight] = React.useState('');
  const [depotValue, setDepotValue] = React.useState('');
  const [dropOffValue, setDropOffValue] = React.useState('');
  const [isExport, setIsExport] = React.useState(false);
  const [isImport, setIsImport] = React.useState(true);
  const [materialType, setMaterialType] = React.useState('');
  const [numberOfTruck, setNumberOfTruck] = React.useState('');
  const [pickerValue, setPickerValue] = React.useState('');
  const [pickerValue2, setPickerValue2] = React.useState('');
  const [pickupValue, setPickupValue] = React.useState('');
  const [productType, setProductType] = React.useState('');
  const [showappointment, setShowappointment] = React.useState(false);
  const [switchRow2Value, setSwitchRow2Value] = React.useState(false);
  const [switchRowValue, setSwitchRowValue] = React.useState(false);
  const [switchValue, setSwitchValue] = React.useState(false);
  const [switchValue2, setSwitchValue2] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={true}
      hasTopSafeArea={true}
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
            marginTop: 20,
            padding: 20,
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
              {'New Booking'}
            </Text>
          </View>
        </View>

        <Touchable
          onPress={() => {
            try {
              navigation.navigate('BottomTabNavigator');
              /* 'Run a Custom Function' action requires configuration: choose a custom function */
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <Icon
            name={'Ionicons/ios-notifications-outline'}
            size={24}
            style={StyleSheet.applyWidth({ opacity: 0.5 }, dimensions.width)}
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
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              GlobalStyles.TextStyles(theme)['Text 3'],
              dimensions.width
            )}
          >
            {'Import'}
          </Text>
          <Switch
            onValueChange={newSwitchValue => {
              try {
                setIsImport(newSwitchValue);
              } catch (err) {
                console.error(err);
              }
            }}
            value={isImport}
          />
          {/* Text 2 */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              GlobalStyles.TextStyles(theme)['Text 3'],
              dimensions.width
            )}
          >
            {'Export'}
          </Text>
        </View>
        {/* PickAndDropContainer */}
        <View
          style={StyleSheet.applyWidth(
            { marginLeft: 10, marginRight: 10 },
            dimensions.width
          )}
        >
          {/* Material Type Picker */}
          <Picker
            autoDismissKeyboard={true}
            dropDownBackgroundColor={theme.colors.background}
            dropDownBorderColor={theme.colors.divider}
            dropDownBorderRadius={8}
            dropDownBorderWidth={1}
            dropDownTextColor={theme.colors.strong}
            iconColor={theme.colors['Custom Color_2']}
            iconSize={20}
            leftIconMode={'inset'}
            mode={'native'}
            onValueChange={newMaterialTypePickerValue => {
              try {
                setMaterialType(newMaterialTypePickerValue);
              } catch (err) {
                console.error(err);
              }
            }}
            options={Constants['materialOptions']}
            placeholder={'Type of material'}
            rightIconName={'AntDesign/caretdown'}
            selectedIconColor={theme.colors.strong}
            selectedIconName={'Feather/check'}
            selectedIconSize={20}
            style={StyleSheet.applyWidth(
              { borderRadius: 12, margin: 10 },
              dimensions.width
            )}
            type={'solid'}
            value={materialType}
          >
            <PickerItem />
          </Picker>
          {/* Pickup Location Picker */}
          <Picker
            autoDismissKeyboard={true}
            dropDownBackgroundColor={theme.colors.background}
            dropDownBorderColor={theme.colors.divider}
            dropDownBorderRadius={8}
            dropDownBorderWidth={1}
            dropDownTextColor={theme.colors.strong}
            iconColor={theme.colors['Custom Color_7']}
            iconSize={24}
            leftIconMode={'inset'}
            leftIconName={'MaterialCommunityIcons/home-city'}
            mode={'dropdown'}
            onValueChange={newPickupLocationPickerValue => {
              try {
                setPickerValue(newPickupLocationPickerValue);
              } catch (err) {
                console.error(err);
              }
            }}
            options={Constants['pickUpOptions']}
            placeholder={'Select Pickup Location'}
            selectedIconColor={theme.colors.strong}
            selectedIconName={'Feather/check'}
            selectedIconSize={20}
            style={StyleSheet.applyWidth(
              { borderRadius: 12, margin: 10 },
              dimensions.width
            )}
            type={'solid'}
            value={pickerValue}
          >
            <PickerItem
              style={StyleSheet.applyWidth(
                { color: theme.colors['App Green'] },
                dimensions.width
              )}
            />
          </Picker>
          {/* Drop Location Picker */}
          <Picker
            autoDismissKeyboard={true}
            dropDownBackgroundColor={theme.colors.background}
            dropDownBorderColor={theme.colors.divider}
            dropDownBorderRadius={8}
            dropDownBorderWidth={1}
            dropDownTextColor={theme.colors.strong}
            iconColor={theme.colors['Custom Color_13']}
            iconSize={24}
            leftIconMode={'inset'}
            leftIconName={'MaterialIcons/home-work'}
            mode={'native'}
            onValueChange={newDropLocationPickerValue => {
              try {
                setDropOffValue(newDropLocationPickerValue);
              } catch (err) {
                console.error(err);
              }
            }}
            options={Constants['pickUpOptions']}
            placeholder={'Select Drop Location'}
            selectedIconColor={theme.colors.strong}
            selectedIconName={'Feather/check'}
            selectedIconSize={20}
            style={StyleSheet.applyWidth(
              { borderRadius: 12, margin: 10 },
              dimensions.width
            )}
            type={'solid'}
            value={dropOffValue}
          >
            <PickerItem />
          </Picker>
          {/* Depot Location Picker */}
          <Picker
            autoDismissKeyboard={true}
            dropDownBackgroundColor={theme.colors['Success']}
            dropDownBorderColor={theme.colors.divider}
            dropDownBorderRadius={8}
            dropDownBorderWidth={1}
            dropDownTextColor={theme.colors.strong}
            iconColor={theme.colors['Custom #14495c']}
            iconSize={24}
            leftIconMode={'inset'}
            leftIconName={'FontAwesome/ship'}
            mode={'dropdown'}
            onValueChange={newDepotLocationPickerValue => {
              try {
                setDepotValue(newDepotLocationPickerValue);
              } catch (err) {
                console.error(err);
              }
            }}
            options={Constants['pickUpOptions']}
            placeholder={'Select Depot Location'}
            selectedIconColor={theme.colors.strong}
            selectedIconName={'Feather/check'}
            selectedIconSize={20}
            style={StyleSheet.applyWidth(
              { borderRadius: 12, margin: 10 },
              dimensions.width
            )}
            type={'solid'}
            value={depotValue}
          >
            <PickerItem />
          </Picker>
          {/* Choose a vehicle */}
          <View style={StyleSheet.applyWidth({ margin: 10 }, dimensions.width)}>
            {/* SubTitle */}
            <View
              style={StyleSheet.applyWidth({ margin: 10 }, dimensions.width)}
            >
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                    color: theme.colors['Medium'],
                    fontFamily: 'System',
                    fontWeight: '600',
                  }),
                  dimensions.width
                )}
              >
                {'Choose a vehicle'}
              </Text>
            </View>
            {/* RowContainer */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginBottom: 10,
                  marginTop: 10,
                },
                dimensions.width
              )}
            >
              {/* 20ftTruckContainer */}
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center' },
                  dimensions.width
                )}
              >
                <Touchable
                  style={StyleSheet.applyWidth(
                    { marginBottom: 5, marginTop: 5 },
                    dimensions.width
                  )}
                >
                  <Image
                    resizeMode={'cover'}
                    source={Images._20ft}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ImageStyles(theme)['Image 2'],
                        { borderRadius: 30, height: 50, width: 50 }
                      ),
                      dimensions.width
                    )}
                  />
                </Touchable>

                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text 2'],
                      { marginBottom: 5, marginTop: 5, textAlign: 'auto' }
                    ),
                    dimensions.width
                  )}
                >
                  {'20ft Container Truck'}
                </Text>
              </View>
              {/* 40ftTruckContainer */}
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center' },
                  dimensions.width
                )}
              >
                <Touchable
                  style={StyleSheet.applyWidth(
                    { marginBottom: 5, marginTop: 5 },
                    dimensions.width
                  )}
                >
                  <Image
                    resizeMode={'cover'}
                    source={Images._40ft}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ImageStyles(theme)['Image 2'],
                        { borderRadius: 30, height: 50, width: 50 }
                      ),
                      dimensions.width
                    )}
                  />
                </Touchable>

                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text 2'],
                      { marginBottom: 5, marginTop: 5 }
                    ),
                    dimensions.width
                  )}
                >
                  {'20ft Container Truck'}
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* Load Details */}
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
          {/* View 4 */}
          <View style={StyleSheet.applyWidth({ margin: 10 }, dimensions.width)}>
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                  color: theme.colors['Medium'],
                  fontFamily: 'System',
                  fontSize: 14,
                  fontWeight: '600',
                }),
                dimensions.width
              )}
            >
              {'Load details'}
            </Text>
          </View>
          <View />
          {/* Container Weight View */}
          <View
            style={StyleSheet.applyWidth(
              { marginBottom: 10, marginTop: 10 },
              dimensions.width
            )}
          >
            {/* Weight Input */}
            <TextInput
              allowFontScaling={true}
              autoCapitalize={'none'}
              changeTextDelay={500}
              keyboardType={'numeric'}
              onChangeText={newWeightInputValue => {
                try {
                  setContainerWeight(newWeightInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'Average Container Weight(Ton)'}
              placeholderTextColor={theme.colors['TextPlaceholder']}
              returnKeyType={'next'}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextInputStyles(theme)['Text Input 2'],
                  {
                    borderColor: theme.colors['Medium'],
                    borderRadius: 12,
                    paddingBottom: 15,
                    paddingTop: 15,
                  }
                ),
                dimensions.width
              )}
              value={containerWeight}
            />
          </View>
          {/* No of Truck View */}
          <View
            style={StyleSheet.applyWidth(
              { marginBottom: 10, marginTop: 10 },
              dimensions.width
            )}
          >
            {/* NoOfTruckInput */}
            <TextInput
              allowFontScaling={true}
              autoCapitalize={'none'}
              changeTextDelay={500}
              keyboardType={'numeric'}
              onChangeText={newNoOfTruckInputValue => {
                try {
                  setNumberOfTruck(newNoOfTruckInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'No. of Truck'}
              placeholderTextColor={theme.colors['TextPlaceholder']}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextInputStyles(theme)['Text Input 2'],
                  {
                    borderColor: theme.colors['Medium'],
                    borderRadius: 12,
                    paddingBottom: 15,
                    paddingTop: 15,
                  }
                ),
                dimensions.width
              )}
              value={numberOfTruck}
            />
          </View>
          {/* View 2 */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: [
                  { minWidth: Breakpoints.Mobile, value: 'stretch' },
                  { minWidth: Breakpoints.Tablet, value: 'stretch' },
                ],
                justifyContent: 'center',
              },
              dimensions.width
            )}
          >
            {/* Product Category Picker */}
            <Picker
              autoDismissKeyboard={true}
              dropDownBackgroundColor={theme.colors.background}
              dropDownBorderColor={theme.colors.divider}
              dropDownBorderRadius={8}
              dropDownBorderWidth={1}
              dropDownTextColor={theme.colors.strong}
              iconColor={theme.colors['Custom Color_2']}
              iconSize={20}
              leftIconMode={'inset'}
              mode={'native'}
              onValueChange={newProductCategoryPickerValue => {
                try {
                  setProductType(newProductCategoryPickerValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              options={Constants['productOptions']}
              placeholder={'Product Category'}
              rightIconName={'AntDesign/caretdown'}
              selectedIconColor={theme.colors.strong}
              selectedIconName={'Feather/check'}
              selectedIconSize={20}
              style={StyleSheet.applyWidth(
                {
                  borderRadius: 12,
                  height: { minWidth: Breakpoints.Tablet, value: 38 },
                  marginBottom: 10,
                  marginTop: 10,
                  paddingBottom: [
                    { minWidth: Breakpoints.Tablet, value: 0 },
                    { minWidth: Breakpoints.Mobile, value: 10 },
                  ],
                  paddingLeft: 8,
                  paddingRight: 8,
                  paddingTop: [
                    { minWidth: Breakpoints.Tablet, value: 0 },
                    { minWidth: Breakpoints.Mobile, value: 10 },
                  ],
                },
                dimensions.width
              )}
              type={'solid'}
              value={productType}
            >
              <PickerItem />
            </Picker>
          </View>
        </View>
        {/* Button Container */}
        <View style={StyleSheet.applyWidth({ margin: 20 }, dimensions.width)}>
          <Button
            onPress={() => {
              console.log('Button ON_PRESS Start');
              let error = null;
              try {
                console.log('Start ON_PRESS:0 NAVIGATE');
                navigation.navigate('PickUpDropDetailsScreen');
                console.log('Complete ON_PRESS:0 NAVIGATE');
              } catch (err) {
                console.error(err);
                error = err.message ?? err;
              }
              console.log(
                'Button ON_PRESS Complete',
                error ? { error } : 'no error'
              );
            }}
            style={StyleSheet.applyWidth(
              GlobalStyles.ButtonStyles(theme)['Button'],
              dimensions.width
            )}
            title={'Next'}
          />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(HomeScreen);
