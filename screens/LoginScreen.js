import React from "react";
import * as GlobalStyles from "../GlobalStyles.js";
import * as CotruckApi from "../apis/CotruckApi.js";
import * as GlobalVariables from "../config/GlobalVariableContext";
import Images from "../config/Images";
import Breakpoints from "../utils/Breakpoints";
import * as StyleSheet from "../utils/StyleSheet";
import showAlertUtil from "../utils/showAlert";
import useWindowDimensions from "../utils/useWindowDimensions";
import {
  Button,
  CheckboxRow,
  IconButton,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from "@draftbit/ui";
import { Image, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import messaging from "@react-native-firebase/messaging";
import NetInfo from "@react-native-community/netinfo";
import NoInternetScreen from "./NoInternetScreen.js";

const LoginScreen = (props) => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [checkboxRowValue, setCheckboxRowValue] = React.useState("");
  const [condi, setCondi] = React.useState("");
  const [msg, setMsg] = React.useState("Message");
  const [successMsg, setSuccessMsg] = React.useState("Success");
  const cotruckLoginPOST = CotruckApi.useLoginPOST();

  // for fcm token (cloud messaging customize code)
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log("Authorization status:", authStatus, "isEnables?");
    }
  }

  const getToken = async () => {
    const token = await messaging().getToken();
    console.log("Token =>", token);
  };

  React.useEffect(() => {
    requestUserPermission();
    getToken();
  }, []);

  React.useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener((state) => {
      const conn = state.isConnected; //boolean value whether internet connected or not
      console.log("Connection type", state.type); //gives the connection type
      !conn
        ? (alert("No Internet Connection!"),
          navigation.navigate(NoInternetScreen))
        : null; //alert if internet not connected
    });

    console.log("asdf ==>", "hihi");

    return () => removeNetInfoSubscription();
  });

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={true}
      hasTopSafeArea={false}
      scrollable={true}
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors["Surface"], flex: 1 },
        dimensions.width
      )}
    >
      <KeyboardAwareScrollView
        enableAutomaticScroll={true}
        keyboardShouldPersistTaps={"never"}
        showsVerticalScrollIndicator={true}
      >
        {/* LogoContainer */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: "center", justifyContent: "center", margin: 20 },
            dimensions.width
          )}
        >
          {/* Logo Image */}
          <Image
            resizeMode={"cover"}
            source={Images.Logo}
            style={StyleSheet.applyWidth(
              { height: 150, marginBottom: 10, marginTop: 10, width: 150 },
              dimensions.width
            )}
          />
        </View>
        {/* Text Container */}
        <View
          style={StyleSheet.applyWidth(
            { marginLeft: 20, marginRight: 20 },
            dimensions.width
          )}
        >
          {/* Login */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
                color: theme.colors["Primary"],
                fontSize: 24,
                marginBottom: 10,
                marginTop: 10,
              }),
              dimensions.width
            )}
          >
            {"Login"}
          </Text>

          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
                color: theme.colors["Medium"],
                fontSize: 16,
                marginBottom: 10,
                marginTop: 10,
              }),
              dimensions.width
            )}
          >
            {"Please sign in to continue.."}
          </Text>
        </View>
        {/* Input Container */}
        <View
          style={StyleSheet.applyWidth(
            { marginLeft: 10, marginRight: 10 },
            dimensions.width
          )}
        >
          {/* Email */}
          <TextInput
            allowFontScaling={true}
            autoCapitalize={"none"}
            autoCorrect={false}
            blurOnSubmit={true}
            changeTextDelay={500}
            enablesReturnKeyAutomatically={true}
            keyboardType={"default"}
            onChangeText={(newEmailValue) => {
              try {
                setGlobalVariableValue({
                  key: "email",
                  value: newEmailValue,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            placeholder={"Email"}
            placeholderTextColor={theme.colors["TextPlaceholder"]}
            returnKeyType={"next"}
            secureTextEntry={false}
            spellcheck={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextInputStyles(theme)["Text Input"],
                {
                  borderColor: theme.colors["Light"],
                  borderRadius: 12,
                  height: 48,
                  marginBottom: 20,
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 20,
                  paddingLeft: 20,
                }
              ),
              dimensions.width
            )}
            value={Constants["email"]}
          />
          {/* Password */}
          <>
            {Constants["showPassword"] ? null : (
              <TextInput
                allowFontScaling={true}
                autoCapitalize={"none"}
                autoCorrect={false}
                blurOnSubmit={true}
                changeTextDelay={500}
                enablesReturnKeyAutomatically={true}
                keyboardType={"default"}
                onChangeText={(newPasswordValue) => {
                  try {
                    setGlobalVariableValue({
                      key: "password",
                      value: newPasswordValue,
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
                placeholder={"Password"}
                placeholderTextColor={theme.colors["TextPlaceholder"]}
                returnKeyType={"next"}
                secureTextEntry={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextInputStyles(theme)["Text Input"],
                    {
                      borderColor: theme.colors["Light"],
                      borderRadius: 12,
                      height: 48,
                      marginBottom: 20,
                      marginLeft: 20,
                      marginRight: 20,
                      marginTop: 20,
                      paddingLeft: 20,
                    }
                  ),
                  dimensions.width
                )}
                value={Constants["password"]}
              />
            )}
          </>
          {/* Password 2 */}
          <>
            {!Constants["showPassword"] ? null : (
              <TextInput
                allowFontScaling={true}
                autoCapitalize={"none"}
                autoCorrect={false}
                blurOnSubmit={true}
                changeTextDelay={500}
                enablesReturnKeyAutomatically={true}
                keyboardType={"default"}
                onChangeText={(newPassword2Value) => {
                  try {
                    setGlobalVariableValue({
                      key: "password",
                      value: newPassword2Value,
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
                placeholder={"Password"}
                placeholderTextColor={theme.colors["TextPlaceholder"]}
                returnKeyType={"next"}
                secureTextEntry={false}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextInputStyles(theme)["Text Input"],
                    {
                      borderColor: theme.colors["Light"],
                      borderRadius: 12,
                      height: 48,
                      marginBottom: 20,
                      marginLeft: 20,
                      marginRight: 20,
                      marginTop: 20,
                      paddingLeft: 20,
                    }
                  ),
                  dimensions.width
                )}
                value={Constants["password"]}
              />
            )}
          </>
          <>
            {Constants["showPassword"] ? null : (
              <IconButton
                icon={"Ionicons/ios-eye-off-sharp"}
                onPress={() => {
                  try {
                    setGlobalVariableValue({
                      key: "showPassword",
                      value: !Constants["showPassword"],
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
                size={32}
                style={StyleSheet.applyWidth(
                  { bottom: 30, position: "absolute", right: 30 },
                  dimensions.width
                )}
              />
            )}
          </>
          {/* Icon Button 2 */}
          <>
            {!Constants["showPassword"] ? null : (
              <IconButton
                icon={"Ionicons/ios-eye-outline"}
                onPress={() => {
                  try {
                    setGlobalVariableValue({
                      key: "showPassword",
                      value: !Constants["showPassword"],
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
                size={32}
                style={StyleSheet.applyWidth(
                  { bottom: 30, position: "absolute", right: 30 },
                  dimensions.width
                )}
              />
            )}
          </>
        </View>
        {/* ForgetPasswordContainer */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignContent: "flex-end",
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0)",
              flexDirection: "row",
              flexWrap: "nowrap",
              justifyContent: "flex-end",
              margin: 10,
            },
            dimensions.width
          )}
        >
          {/* Forgot Password Button */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate("ForgotPasswordScreen");
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              { borderColor: theme.colors["Error"], marginRight: 10 },
              dimensions.width
            )}
          >
            {/* Forgot Password */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
                  marginRight: 10,
                  textAlign: "right",
                }),
                dimensions.width
              )}
            >
              {"Forgot Password ?"}
            </Text>
          </Touchable>
        </View>
        {/* CheckboxRowContainer */}
        <View style={StyleSheet.applyWidth({ margin: 10 }, dimensions.width)}>
          <CheckboxRow
            color={theme.colors["Custom Color"]}
            direction={"row-reverse"}
            label={"Remember Me"}
            onCheck={() => {
              const checkboxRowValue = undefined;
              console.log("Checkbox Row ON_CHECK Start");
              let error = null;
              try {
                console.log("Start ON_CHECK:0 SET_VARIABLE");
                setGlobalVariableValue({
                  key: "email",
                  value: Constants["email"],
                });
                console.log("Complete ON_CHECK:0 SET_VARIABLE");
                console.log("Start ON_CHECK:1 SET_VARIABLE");
                setGlobalVariableValue({
                  key: "password",
                  value: Constants["password"],
                });
                console.log("Complete ON_CHECK:1 SET_VARIABLE");
              } catch (err) {
                console.error(err);
                error = err.message ?? err;
              }
              console.log(
                "Checkbox Row ON_CHECK Complete",
                error ? { error } : "no error"
              );
            }}
            onPress={(newCheckboxRowValue) => {
              const checkboxRowValue = newCheckboxRowValue;
              try {
                setCheckboxRowValue(newCheckboxRowValue);
              } catch (err) {
                console.error(err);
              }
            }}
            status={checkboxRowValue}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.CheckboxRowStyles(theme)["Checkbox Row"],
                { fontSize: 16 }
              ),
              dimensions.width
            )}
            uncheckedColor={theme.colors["Custom Color_18"]}
          />
        </View>
        {/* ButtonContainer */}
        <View style={StyleSheet.applyWidth({ margin: 25 }, dimensions.width)}>
          {/* Login */}
          <Button
            onPress={() => {
              const handler = async () => {
                try {
                  if (Constants["email"] === "") {
                    return showAlertUtil({
                      title: "Message",
                      message: "Please Enter Your Email.",
                      buttonText: undefined,
                    });
                    return;
                  }

                  if (Constants["password"] === "") {
                    return showAlertUtil({
                      title: "Message",
                      message: "Please Enter Your Password.",
                      buttonText: undefined,
                    });
                    return;
                  }

                  // get fcm token
                  const FCM_TOKEN = await messaging().getToken();
                  const loginResponse = (
                    await cotruckLoginPOST.mutateAsync({
                      email: Constants["email"],
                      password: Constants["password"],
                      user_type: "OWNER",
                      fcm_token: FCM_TOKEN,
                    })
                  )?.json;
                  const message = loginResponse?.message;

                  showAlertUtil({
                    title: "Message",
                    message: message,
                    buttonText: undefined,
                  });

                  const token = loginResponse?.token;
                  if (!token) {
                    return;
                  }
                  const userid = loginResponse?.data.id;
                  setGlobalVariableValue({
                    key: "AUTH_OWNER_ID",
                    value: userid,
                  });
                  setGlobalVariableValue({
                    key: "AUTH_BEAR_TOKEN",
                    value: "Bearer " + token,
                  });
                  const data = loginResponse?.data;
                  setGlobalVariableValue({
                    key: "OWNER_INFO",
                    value: data,
                  });
                  if (navigation.canGoBack()) {
                    navigation.popToTop();
                  }
                  navigation.replace("BottomTabNavigator", {
                    screen: "HomeScreen",
                  });
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ButtonStyles(theme)["Button"], {
                borderRadius: 12,
                fontSize: 16,
                height: 48,
              }),
              dimensions.width
            )}
            title={"Log In"}
          />
        </View>
        {/* Sign Up View */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
              margin: 10,
            },
            dimensions.width
          )}
        >
          {/* Don't have an account */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
                fontSize: 16,
              }),
              dimensions.width
            )}
          >
            {"Don't have an account?"}
          </Text>
          {/* Sign Up Button */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate("AuthNavigator", {
                  screen: "RegisterScreen",
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth({ marginLeft: 10 }, dimensions.width)}
          >
            {/* Sign Up */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text"], {
                  color: theme.colors["Primary"],
                  fontSize: 16,
                }),
                dimensions.width
              )}
            >
              {"Sign Up"}
            </Text>
          </Touchable>
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(LoginScreen);
