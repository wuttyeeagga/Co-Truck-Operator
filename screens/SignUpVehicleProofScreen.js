import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CotruckApi from '../apis/CotruckApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import openImagePickerUtil from '../utils/openImagePicker';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  Icon,
  Picker,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { Image, Text, View } from 'react-native';

const SignUpVehicleProofScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [isDLUpload, setIsDLUpload] = React.useState(false);
  const [isNRCUpload, setIsNRCUpload] = React.useState(false);
  const [vehicleInsuranceImage, setVehicleInsuranceImage] = React.useState({});
  const [vehicleRCImage, setVehicleRCImage] = React.useState({});
  const [vehicleRegNo, setVehicleRegNo] = React.useState('');
  const [vehicleRemark, setVehicleRemark] = React.useState('');
  const [vehicleType, setVehicleType] = React.useState('');
  const [vehicleTypeList, setVehicleTypeList] = React.useState('');
  const [vehicleTypeOptions, setVehicleTypeOptions] = React.useState([
    { label: '20ft Container Truck', value: 8 },
    { label: '40ft Container Truck', value: 9 },
  ]);
  const cotruckVehicleTypeListPOST = CotruckApi.useVehicleTypeListPOST();
  const isFocused = useIsFocused();
  React.useEffect(() => {
    const handler = async () => {
      try {
        if (!isFocused) {
          return;
        }
        const vehicleLists = (await cotruckVehicleTypeListPOST.mutateAsync())
          ?.json;
        const data = vehicleLists?.data;

        const valueNFLO2wkt = data;
        setVehicleTypeList(valueNFLO2wkt);
        const asdf = valueNFLO2wkt;
        console.log(
          props.route?.params?.certificate ?? '',
          props.route?.params?.agent_license ?? ''
        );
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
            {'Create an account'}
          </Text>
        </View>
      </View>
      {/* Main View */}
      <View style={StyleSheet.applyWidth({ margin: 20 }, dimensions.width)}>
        {/* Title View */}
        <View style={StyleSheet.applyWidth({ margin: 10 }, dimensions.width)}>
          {/* Title */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                color: theme.colors['CoTruckBlack'],
                fontFamily: 'System',
                fontSize: 16,
                fontWeight: '400',
              }),
              dimensions.width
            )}
          >
            {'Step 3 of 4 - Update Vehicle'}
          </Text>
        </View>
        {/* Choose Vehicle */}
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
          onValueChange={newChooseVehicleValue => {
            try {
              setVehicleType(newChooseVehicleValue);
            } catch (err) {
              console.error(err);
            }
          }}
          options={vehicleTypeOptions}
          placeholder={'Choose Vehicle'}
          placeholderTextColor={theme.colors['TextPlaceholder']}
          selectedIconColor={theme.colors.strong}
          selectedIconName={'Feather/check'}
          selectedIconSize={20}
          style={StyleSheet.applyWidth(
            {
              borderRadius: 8,
              margin: 20,
              paddingBottom: 8,
              paddingLeft: 8,
              paddingRight: 8,
              paddingTop: 8,
            },
            dimensions.width
          )}
          type={'solid'}
          value={vehicleType}
        />
        {/* Regostration View */}
        <View>
          {/* Sub Title */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              GlobalStyles.TextStyles(theme)['Text 2'],
              dimensions.width
            )}
          >
            {'Registration Number'}
          </Text>
          {/* Registration Number Input */}
          <TextInput
            allowFontScaling={true}
            autoCapitalize={'none'}
            changeTextDelay={500}
            onChangeText={newRegistrationNumberInputValue => {
              try {
                setVehicleRegNo(newRegistrationNumberInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            placeholder={'Registration Number'}
            placeholderTextColor={theme.colors['Light']}
            spellcheck={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextInputStyles(theme)['Text Input 3'],
                {
                  borderColor: theme.colors['Light'],
                  height: 48,
                  margin: 20,
                  paddingLeft: 12,
                }
              ),
              dimensions.width
            )}
            value={vehicleRegNo}
          />
        </View>
        {/* NRC Container */}
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
            {'Upload Registration Certificate'}
          </Text>
          {/* Image View */}
          <>
            {!isNRCUpload ? null : (
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
                  source={{ uri: `${vehicleRCImage}` }}
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
                    allowsMultipleSelection: false,
                  });

                  const valueJrDZbJE7 = results;
                  setVehicleRCImage(valueJrDZbJE7);
                  const adsf = valueJrDZbJE7;
                  setIsNRCUpload(true);
                  console.log(adsf, results);
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
        {/* Vehicle Insurance */}
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
            {'Upload Vehicle Insurance'}
          </Text>
          {/* Image View */}
          <>
            {!isDLUpload ? null : (
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
                  source={{ uri: `${vehicleInsuranceImage}` }}
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
                    allowsMultipleSelection: false,
                  });

                  setVehicleInsuranceImage(results);
                  setIsDLUpload(true);
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
              {/* Upload Image */}
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
        {/* Remark View */}
        <View>
          {/*  Text */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                color: theme.colors['CoTruckBlack'],
                fontSize: 16,
                margin: 20,
                marginBottom: 0,
                marginTop: 0,
              }),
              dimensions.width
            )}
          >
            {'Vehicle Remark'}
          </Text>
          {/* Vehicle Remark */}
          <TextInput
            allowFontScaling={true}
            autoCapitalize={'none'}
            changeTextDelay={500}
            onChangeText={newVehicleRemarkValue => {
              try {
                setVehicleRemark(newVehicleRemarkValue);
              } catch (err) {
                console.error(err);
              }
            }}
            placeholder={'Vehicle Remark'}
            placeholderTextColor={theme.colors['TextPlaceholder']}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextInputStyles(theme)['Text Input 3'],
                {
                  borderColor: theme.colors['Light'],
                  borderRadius: 12,
                  height: 48,
                  margin: 20,
                  paddingLeft: 12,
                }
              ),
              dimensions.width
            )}
            value={vehicleRemark}
          />
        </View>
        {/* Next */}
        <Button
          onPress={() => {
            try {
              navigation.navigate('TermsInRegisterScreen', {
                comp_name: props.route?.params?.comp_name ?? '',
                comp_phone: props.route?.params?.comp_phone ?? '',
                comp_reg_no: props.route?.params?.comp_regi ?? '',
                certificate: props.route?.params?.certificate ?? '',
                agent_license: props.route?.params?.agent_license ?? '',
                agent_name: props.route?.params?.agent_name ?? '',
                name: props.route?.params?.name ?? '',
                email: props.route?.params?.email ?? '',
                password: props.route?.params?.password ?? '',
                mobile: props.route?.params?.mobile ?? '',
                referral_code: props.route?.params?.refer_code ?? '',
                nrc_front: props.route?.params?.NRC ?? '',
                nrc_back: props.route?.params?.NRC_back ?? '',
                vehicle_type: vehicleType,
                vehicle_reg_no: vehicleRegNo,
                vehicle_reg_certificate: vehicleRCImage,
                vehicle_insurance: vehicleInsuranceImage,
                preferred_paths: props.route?.params?.prefer_paths ?? '',
                vehicle_remark: vehicleRemark,
              });
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
              borderRadius: 12,
              height: 48,
              margin: 20,
            }),
            dimensions.width
          )}
          title={'Next'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(SignUpVehicleProofScreen);
