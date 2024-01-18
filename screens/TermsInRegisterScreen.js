import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CotruckApi from '../apis/CotruckApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  Icon,
  ScreenContainer,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';

const TermsInRegisterScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [isDLUpload, setIsDLUpload] = React.useState(false);
  const [isNRCUpload, setIsNRCUpload] = React.useState(false);
  const [pickerValue, setPickerValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const cotruckNewAddOwnerPOST = CotruckApi.useNewAddOwnerPOST();

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
            {'Step 4 of 4 - Terms & Conditions'}
          </Text>
        </View>

        <Surface
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.SurfaceStyles(theme)['Surface'], {
              paddingBottom: 10,
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 10,
            }),
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                color: theme.colors['CoTruckBlack'],
                fontFamily: 'System',
                fontSize: 16,
                fontWeight: '400',
                margin: 10,
              }),
              dimensions.width
            )}
          >
            {'Please read the following terms'}
          </Text>
          {/* Text 2 */}
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
            {
              '1. I hereby declare, in its sole discretion, to change, modify, or otherwise ament the Terms of Use, and any other documents incorporated by reference\n\n2.  I hereby declare, in its sole discretion, to change, modify, or otherwise ament the Terms of Use, and any other documents incorporated by reference\n\n3.  I hereby declare, in its sole discretion, to change, modify, or otherwise ament the Terms of Use, and any other documents incorporated by reference'
            }
          </Text>
        </Surface>
        {/* Agree and Submit */}
        <Button
          onPress={() => {
            const handler = async () => {
              try {
                const Response = (
                  await cotruckNewAddOwnerPOST.mutateAsync({
                    certificate: props.route?.params?.certificate ?? '',
                    comp_name: props.route?.params?.comp_name ?? '',
                    comp_phone: props.route?.params?.comp_phone ?? '',
                    comp_reg_no: props.route?.params?.comp_regi ?? '',
                    driving_license_back: 'file',
                    driving_license_front: 'file',
                    email: props.route?.params?.email ?? '',
                    first_name: 'sfadl',
                    license_no: props.route?.params?.agent_license ?? '',
                    mobile: props.route?.params?.mobile ?? '',
                    nrc_back: 'file',
                    nrc_front: 'file',
                    password: props.route?.params?.password ?? '',
                    referral_code: props.route?.params?.refer_code ?? '',
                    user_type: 'OWNER',
                    vehicle_insurance:
                      props.route?.params?.vehicle_insurance ?? '',
                    vehicle_reg_certificate: props.route?.params?.regi ?? '',
                    vehicle_reg_no: props.route?.params?.regi_no ?? '',
                    vehicle_type: props.route?.params?.vehicle_type ?? '',
                  })
                )?.json;
                console.log();
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
              margin: 20,
              marginTop: 40,
            }),
            dimensions.width
          )}
          title={'Agree and Submit'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(TermsInRegisterScreen);
