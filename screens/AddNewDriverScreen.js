import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CotruckApi from '../apis/CotruckApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import openImagePickerUtil from '../utils/openImagePicker';
import showAlertUtil from '../utils/showAlert';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  Icon,
  NumberInput,
  Picker,
  PickerItem,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { Image, Text, View } from 'react-native';

const AddNewDriverScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [Mobile, setMobile] = React.useState('');
  const [Name, setName] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const [dlBack, setDlBack] = React.useState({});
  const [dlFront, setDlFront] = React.useState({});
  const [isDLBack, setIsDLBack] = React.useState(false);
  const [isDLFront, setIsDLFront] = React.useState(false);
  const [isNRCBack, setIsNRCBack] = React.useState(false);
  const [isNRCFront, setIsNRCFront] = React.useState(false);
  const [nrcBack, setNrcBack] = React.useState({});
  const [nrcFront, setNrcFront] = React.useState({});
  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');
  const [uploadVehicleImage, setUploadVehicleImage] = React.useState(false);
  const [vehicleTypeList, setVehicleTypeList] = React.useState('');
  const [vehicleTypePicker, setVehicleTypePicker] = React.useState('');
  const [pickerValue, setPickerValue] = React.useState(undefined);
  const cotruckOperatorVehicleList$available$POST =
    CotruckApi.useOperatorVehicleList$available$POST();
  const cotruckAddNewDriverPOST = CotruckApi.useAddNewDriverPOST();
  const isFocused = useIsFocused();
  React.useEffect(() => {
    const handler = async () => {
      try {
        if (!isFocused) {
          return;
        }
        const Response = (
          await cotruckOperatorVehicleList$available$POST.mutateAsync({
            operator_id: Constants['AUTH_OWNER_ID'],
            vehicle_status: 'AVAILABLE',
          })
        )?.json;
        const data = Response?.data;
        setVehicleTypeList(data);
        console.log(Response);
      } catch (err) {
        console.error(err);
      }
    };
    handler();
  }, [isFocused]);

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={true}
      scrollable={true}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            marginLeft: 20,
            marginTop: 20,
          },
          dimensions.width
        )}
      >
        {/* Icon Button */}
        <View
          style={StyleSheet.applyWidth({ marginLeft: 10 }, dimensions.width)}
        >
          <Touchable
            onPress={() => {
              try {
                navigation.goBack();
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Icon name={'MaterialIcons/arrow-back-ios'} size={30} />
          </Touchable>
        </View>
        {/* Title View */}
        <View
          style={StyleSheet.applyWidth({ marginLeft: 10 }, dimensions.width)}
        >
          {/* Title */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 3'], {
                color: theme.colors['CoTruckBlack'],
                fontFamily: 'System',
                fontSize: 20,
                fontWeight: '400',
              }),
              dimensions.width
            )}
          >
            {'Add New Driver'}
          </Text>
        </View>
      </View>
      {/* Main View */}
      <View style={StyleSheet.applyWidth({ margin: 20 }, dimensions.width)}>
        {/* Name Container */}
        <View>
          {/* Name Input */}
          <TextInput
            allowFontScaling={true}
            autoCapitalize={'none'}
            changeTextDelay={500}
            onChangeText={newNameInputValue => {
              try {
                setName(newNameInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            placeholder={'Name'}
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
            value={Name}
          />
        </View>
        {/* Mobile Container */}
        <View>
          {/* Mobile Input */}
          <NumberInput
            allowFontScaling={true}
            changeTextDelay={500}
            maxLength={11}
            onChangeText={newMobileInputValue => {
              try {
                setMobile(newMobileInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            placeholder={'Mobile Number'}
            placeholderTextColor={theme.colors['TextPlaceholder']}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.NumberInputStyles(theme)['Number Input'],
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
            value={Mobile}
          />
        </View>
        {/* Password Container */}
        <View>
          {/* Password Input */}
          <TextInput
            allowFontScaling={true}
            autoCapitalize={'none'}
            changeTextDelay={500}
            onChangeText={newPasswordInputValue => {
              try {
                setPassword(newPasswordInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            placeholder={'Enter Password'}
            placeholderTextColor={theme.colors['CoTruckGrey']}
            secureTextEntry={true}
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
            value={Password}
          />
        </View>
        {/* Vehicle Picker */}
        <Picker
          autoDismissKeyboard={true}
          dropDownBackgroundColor={theme.colors.background}
          dropDownBorderColor={theme.colors.divider}
          dropDownBorderRadius={8}
          dropDownBorderWidth={1}
          dropDownTextColor={theme.colors.strong}
          iconSize={24}
          leftIconMode={'inset'}
          mode={'dropdown'}
          onValueChange={newVehiclePickerValue => {
            const pickerValue = newVehiclePickerValue;
            try {
              setVehicleTypePicker(newVehiclePickerValue);
            } catch (err) {
              console.error(err);
            }
          }}
          options={vehicleTypeList}
          placeholder={'Choose vehicle to Assign'}
          placeholderTextColor={theme.colors['TextPlaceholder']}
          selectedIconColor={theme.colors.strong}
          selectedIconName={'Feather/check'}
          selectedIconSize={20}
          style={StyleSheet.applyWidth(
            {
              borderRadius: 12,
              height: 48,
              margin: 10,
              paddingBottom: 8,
              paddingLeft: 0,
              paddingRight: 8,
              paddingTop: 8,
            },
            dimensions.width
          )}
          type={'solid'}
          value={vehicleTypePicker}
        ></Picker>
        {/* Front Driving License View */}
        <View>
          {/* Sub Title */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                margin: 10,
              }),
              dimensions.width
            )}
          >
            {'1.  Upload Driving License ( Front )'}
          </Text>
          {/* Image View */}
          <>
            {!isDLFront ? null : (
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 10,
                  },
                  dimensions.width
                )}
              >
                {/* DL Front Image */}
                <Image
                  resizeMode={'cover'}
                  source={{ uri: `${dlFront}` }}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image 3'],
                      { borderRadius: 8, height: 150, width: 150 }
                    ),
                    dimensions.width
                  )}
                />
              </View>
            )}
          </>
          {/* Upload Image Button */}
          <Touchable
            onPress={() => {
              const handler = async () => {
                try {
                  const results = await openImagePickerUtil({
                    mediaTypes: 'Images',
                    allowsEditing: false,
                    quality: 0.2,
                  });

                  setDlFront(results);
                  setIsDLFront(true);
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
          >
            {/* Upload View */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  borderRadius: 8,
                  borderStyle: 'dashed',
                  borderWidth: 1,
                  justifyContent: 'center',
                  margin: 20,
                  padding: 20,
                },
                dimensions.width
              )}
            >
              <Icon
                name={'AntDesign/pluscircle'}
                size={24}
                style={StyleSheet.applyWidth(
                  {
                    marginBottom: 5,
                    marginLeft: 5,
                    marginRight: 5,
                    marginTop: 5,
                  },
                  dimensions.width
                )}
              />
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  GlobalStyles.TextStyles(theme)['Text 2'],
                  dimensions.width
                )}
              >
                {'Upload Image'}
              </Text>
            </View>
          </Touchable>
        </View>
        {/* Back Driving License View */}
        <View>
          {/* Sub Title */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                margin: 10,
              }),
              dimensions.width
            )}
          >
            {'2.  Upload Driving License ( Back )'}
          </Text>
          {/* Image View */}
          <>
            {!isDLBack ? null : (
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 10,
                  },
                  dimensions.width
                )}
              >
                {/* DL Back Image */}
                <Image
                  resizeMode={'cover'}
                  source={{ uri: `${dlBack}` }}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image 3'],
                      { borderRadius: 8, height: 150, width: 150 }
                    ),
                    dimensions.width
                  )}
                />
              </View>
            )}
          </>
          {/* Upload Image Button */}
          <Touchable
            onPress={() => {
              const handler = async () => {
                try {
                  const results = await openImagePickerUtil({
                    mediaTypes: 'Images',
                    allowsEditing: false,
                    quality: 0.2,
                  });

                  setDlBack(results);
                  setIsDLBack(true);
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
          >
            {/* Upload View */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  borderRadius: 8,
                  borderStyle: 'dashed',
                  borderWidth: 1,
                  justifyContent: 'center',
                  margin: 20,
                  padding: 20,
                },
                dimensions.width
              )}
            >
              <Icon
                name={'AntDesign/pluscircle'}
                size={24}
                style={StyleSheet.applyWidth(
                  {
                    marginBottom: 5,
                    marginLeft: 5,
                    marginRight: 5,
                    marginTop: 5,
                  },
                  dimensions.width
                )}
              />
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  GlobalStyles.TextStyles(theme)['Text 2'],
                  dimensions.width
                )}
              >
                {'Upload Image'}
              </Text>
            </View>
          </Touchable>
        </View>
        {/* Front NRC Card View */}
        <View>
          {/* Sub Title */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                margin: 10,
              }),
              dimensions.width
            )}
          >
            {'3. Upload National Registration Card ( Front )'}
          </Text>
          {/* Image View */}
          <>
            {!isNRCFront ? null : (
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 10,
                  },
                  dimensions.width
                )}
              >
                {/* NRC Front Image */}
                <Image
                  resizeMode={'cover'}
                  source={{ uri: `${nrcFront}` }}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image 3'],
                      { borderRadius: 8, height: 150, width: 150 }
                    ),
                    dimensions.width
                  )}
                />
              </View>
            )}
          </>
          {/* Upload Image Button */}
          <Touchable
            onPress={() => {
              const handler = async () => {
                try {
                  const results = await openImagePickerUtil({
                    mediaTypes: 'All',
                    allowsEditing: false,
                    quality: 0.2,
                  });

                  setNrcFront(results);
                  setIsNRCFront(true);
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
          >
            {/* Upload View */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  borderRadius: 8,
                  borderStyle: 'dashed',
                  borderWidth: 1,
                  justifyContent: 'center',
                  margin: 20,
                  padding: 20,
                },
                dimensions.width
              )}
            >
              <Icon
                name={'AntDesign/pluscircle'}
                size={24}
                style={StyleSheet.applyWidth(
                  {
                    marginBottom: 5,
                    marginLeft: 5,
                    marginRight: 5,
                    marginTop: 5,
                  },
                  dimensions.width
                )}
              />
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  GlobalStyles.TextStyles(theme)['Text 2'],
                  dimensions.width
                )}
              >
                {'Upload Image'}
              </Text>
            </View>
          </Touchable>
        </View>
        {/* Back NRC Card View */}
        <View>
          {/* Sub Title */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                margin: 10,
              }),
              dimensions.width
            )}
          >
            {'4. Upload National Registration Card ( Back )'}
          </Text>
          {/* Image View */}
          <>
            {!isNRCBack ? null : (
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 10,
                  },
                  dimensions.width
                )}
              >
                {/* NRC Back Image */}
                <Image
                  resizeMode={'cover'}
                  source={{ uri: `${nrcBack}` }}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image 3'],
                      { borderRadius: 8, height: 150, width: 150 }
                    ),
                    dimensions.width
                  )}
                />
              </View>
            )}
          </>
          {/* Upload Image Button */}
          <Touchable
            onPress={() => {
              const handler = async () => {
                try {
                  const results = await openImagePickerUtil({
                    mediaTypes: 'All',
                    allowsEditing: false,
                    quality: 0.2,
                  });

                  setNrcBack(results);
                  setIsNRCBack(true);
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
          >
            {/* Upload View */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  borderRadius: 8,
                  borderStyle: 'dashed',
                  borderWidth: 1,
                  justifyContent: 'center',
                  margin: 20,
                  padding: 20,
                },
                dimensions.width
              )}
            >
              <Icon
                name={'AntDesign/pluscircle'}
                size={24}
                style={StyleSheet.applyWidth(
                  {
                    marginBottom: 5,
                    marginLeft: 5,
                    marginRight: 5,
                    marginTop: 5,
                  },
                  dimensions.width
                )}
              />
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  GlobalStyles.TextStyles(theme)['Text 2'],
                  dimensions.width
                )}
              >
                {'Upload Image'}
              </Text>
            </View>
          </Touchable>
        </View>
        {/* Add Driver */}
        <Button
          onPress={() => {
            const handler = async () => {
              try {
                const results = (
                  await cotruckAddNewDriverPOST.mutateAsync({
                    driving_license_back: dlBack,
                    driving_license_front: dlFront,
                    mobile: Mobile,
                    name: Name,
                    nrc_back: nrcBack,
                    nrc_front: nrcFront,
                    operator_id: Constants['AUTH_OWNER_ID'],
                    password: Password,
                    vehicle_id: vehicleTypePicker,
                  })
                )?.json;

                showAlertUtil({
                  title: 'Message',
                  message: results?.message,
                  buttonText: undefined,
                });

                navigation.navigate('ManageDriverScreen');
                console.log(results);
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
              margin: 20,
            }),
            dimensions.width
          )}
          title={'Add Driver'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(AddNewDriverScreen);
