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
  Picker,
  PickerItem,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { Image, Text, View } from 'react-native';

const EditVehicleScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [RCPhoto, setRCPhoto] = React.useState({});
  const [VehicleInsurancePhoto, setVehicleInsurancePhoto] = React.useState({});
  const [VehiclePhoto, setVehiclePhoto] = React.useState({});
  const [isDLUpload, setIsDLUpload] = React.useState(false);
  const [isNRCUpload, setIsNRCUpload] = React.useState(false);
  const [isRCUpload, setIsRCUpload] = React.useState(false);
  const [isVehicleInsurance, setIsVehicleInsurance] = React.useState(false);
  const [pickerValue, setPickerValue] = React.useState('');
  const [registerNo, setRegisterNo] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [uploadVehicleImage, setUploadVehicleImage] = React.useState(false);
  const [vehicleTypeList, setVehicleTypeList] = React.useState('');
  const cotruckVehicleTypeListPOST = CotruckApi.useVehicleTypeListPOST();
  const cotruckAddNewVehiclePOST = CotruckApi.useAddNewVehiclePOST();
  const isFocused = useIsFocused();
  React.useEffect(() => {
    const handler = async () => {
      try {
        if (!isFocused) {
          return;
        }
        const Response = (await cotruckVehicleTypeListPOST.mutateAsync())?.json;
        const data = Response?.data;
        setVehicleTypeList(data);
        setPickerValue(props.route?.params?.vehicle_type ?? '');
        setRegisterNo(props.route?.params?.reg_no ?? '');
        setRCPhoto(props.route?.params?.registr_rc ?? '');
        setVehicleInsurancePhoto(props.route?.params?.registr_insurance ?? '');
        setVehiclePhoto(props.route?.params?.operator_truck_image ?? '');
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
            {'Edit Vehicle'}
          </Text>
        </View>
      </View>
      {/* Main View */}
      <View style={StyleSheet.applyWidth({ margin: 20 }, dimensions.width)}>
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
          onValueChange={newPickerValue => {
            const pickerValue = newPickerValue;
            try {
              setPickerValue(newPickerValue);
            } catch (err) {
              console.error(err);
            }
          }}
          options={vehicleTypeList}
          placeholder={'Choose Type of Vehicle'}
          selectedIconColor={theme.colors.strong}
          selectedIconName={'Feather/check'}
          selectedIconSize={20}
          style={StyleSheet.applyWidth(
            { borderRadius: 12, margin: 10, marginBottom: 20 },
            dimensions.width
          )}
          type={'solid'}
          value={pickerValue}
        ></Picker>
        {/* TextInput View */}
        <View>
          {/* Reg Input */}
          <TextInput
            allowFontScaling={true}
            autoCapitalize={'none'}
            changeTextDelay={500}
            onChangeText={newRegInputValue => {
              try {
                setRegisterNo(newRegInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            placeholder={'Registration No.'}
            placeholderTextColor={theme.colors['text placeholder']}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextInputStyles(theme)['Text Input 3'],
                {
                  borderColor: theme.colors['Light'],
                  borderRadius: 12,
                  height: 48,
                  margin: 10,
                  paddingLeft: 25,
                }
              ),
              dimensions.width
            )}
            value={registerNo}
          />
        </View>
        {/* RC Container */}
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
            {'1.  Upload Registration Certificate (RC)'}
          </Text>
          {/* Image View */}
          <>
            {!isRCUpload ? null : (
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
                <Image
                  resizeMode={'cover'}
                  source={{ uri: `${RCPhoto}` }}
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

                  setRCPhoto(results);
                  setIsRCUpload(true);
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
        {/* Vehicle Insurance Container */}
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
            {'2.  Upload Vehicle Insurance'}
          </Text>
          {/* Image View */}
          <>
            {!isVehicleInsurance ? null : (
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
                <Image
                  resizeMode={'cover'}
                  source={{ uri: `${VehicleInsurancePhoto}` }}
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

                  setVehicleInsurancePhoto(results);
                  setIsVehicleInsurance(true);
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
        {/* Vehicle Image Container */}
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
            {'3.  Upload Vehicle Image'}
          </Text>
          {/* Image View */}
          <>
            {!uploadVehicleImage ? null : (
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
                {/* Vehicle Image */}
                <Image
                  resizeMode={'cover'}
                  source={{ uri: `${VehiclePhoto}` }}
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

                  setVehiclePhoto(results);
                  setUploadVehicleImage(true);
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
        {/* Update Vehicle */}
        <Button
          onPress={() => {
            const handler = async () => {
              try {
                const Response = (
                  await cotruckAddNewVehiclePOST.mutateAsync({
                    operator_id: Constants['AUTH_OWNER_ID'],
                    reg_certificate: RCPhoto,
                    reg_no: textInputValue,
                    vehicle_id: pickerValue,
                    vehicle_image: VehiclePhoto,
                    vehicle_insurance: VehicleInsurancePhoto,
                  })
                )?.json;
                console.log(Response);
                const message = Response?.message;

                showAlertUtil({
                  title: 'Message',
                  message: message,
                  buttonText: undefined,
                });

                navigation.navigate('BottomTabNavigator', {
                  screen: 'SettingsScreen',
                });
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
          title={'Update Vehicle'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(EditVehicleScreen);
