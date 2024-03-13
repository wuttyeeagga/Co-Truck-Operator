import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CotruckApi from '../apis/CotruckApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import showAlertUtil from '../utils/showAlert';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  Icon,
  ScreenContainer,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ScrollView, Text, View } from 'react-native';

const TermsInRegisterScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [isDLUpload, setIsDLUpload] = React.useState(false);
  const [isNRCUpload, setIsNRCUpload] = React.useState(false);
  const [pickerValue, setPickerValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const cotruckRegisterPOST = CotruckApi.useRegisterPOST();
  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
      console.log(
        'data ====> ',
        props.route?.params?.certificate ?? null,
        props.route?.params?.vehicle_reg_certificate ?? null,
        props.route?.params?.nrc_front ?? null,
        props.route?.params?.nrc_back ?? null,
        props.route?.params?.preferred_paths ?? null,
        props.route?.params?.vehicle_reg_certificate ?? null,
        props.route?.params?.vehicle_insurance ?? null
      );

      showAlertUtil({
        title: 'Message',
        message: 'alert',
        buttonText: undefined,
      });
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);

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

      <ScrollView
        bounces={true}
        keyboardShouldPersistTaps={'never'}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
      >
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
          {/* Surface View */}
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
            {/* Sub Title */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                  color: theme.colors['CoTruckBlack'],
                  fontFamily: 'System',
                  fontSize: 16,
                  fontWeight: '600',
                  margin: 10,
                }),
                dimensions.width
              )}
            >
              {'Please read the following terms'}
            </Text>
            {/* Text Two */}
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
                    await cotruckRegisterPOST.mutateAsync({
                      agent_license: props.route?.params?.agent_license ?? null,
                      agent_name: props.route?.params?.agent_name ?? null,
                      certificate: props.route?.params?.certificate ?? null,
                      comp_name: props.route?.params?.comp_name ?? null,
                      comp_phone: props.route?.params?.comp_phone ?? null,
                      comp_reg_no: props.route?.params?.comp_reg_no ?? null,
                      email: props.route?.params?.email ?? null,
                      mobile: props.route?.params?.mobile ?? null,
                      name: props.route?.params?.name ?? null,
                      nrc_back: props.route?.params?.nrc_back ?? null,
                      nrc_front: props.route?.params?.nrc_front ?? null,
                      password: props.route?.params?.password ?? null,
                      paths: props.route?.params?.preferred_paths ?? null,
                      referral_code: props.route?.params?.referral_code ?? null,
                      user_type: 'OWNER',
                      vehicle_insurance:
                        props.route?.params?.vehicle_insurance ?? null,
                      vehicle_reamark:
                        props.route?.params?.vehicle_remark ?? null,
                      vehicle_reg_certificate:
                        props.route?.params?.vehicle_reg_certificate ?? null,
                      vehicle_reg_no:
                        props.route?.params?.vehicle_reg_no ?? null,
                      vehicle_type: props.route?.params?.vehicle_type ?? null,
                    })
                  )?.json;

                  showAlertUtil({
                    title: 'Message',
                    message: Response?.message,
                    buttonText: undefined,
                  });

                  const data = Response?.data;
                  if (!data) {
                    return;
                  }
                  navigation.navigate('OTPVerificationScreen', {
                    user_id: data?.id,
                    mobile: props.route?.params?.mobile ?? null,
                    is_forgot: 0,
                    is_regi: 1,
                  });
                  console.log(
                    Response,
                    data,
                    Response?.message,
                    'data is responding',
                    'Response'?.data
                  );
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
                borderRadius: 12,
                height: 48,
                margin: 20,
                marginTop: 40,
              }),
              dimensions.width
            )}
            title={'Agree and Submit'}
          />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(TermsInRegisterScreen);
