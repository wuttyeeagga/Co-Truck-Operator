import React from "react";
import * as GlobalStyles from "../GlobalStyles.js";
import Breakpoints from "../utils/Breakpoints";
import * as StyleSheet from "../utils/StyleSheet";
import openImagePickerUtil from "../utils/openImagePicker";
import useWindowDimensions from "../utils/useWindowDimensions";
import {
  Button,
  Divider,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from "@draftbit/ui";
import { useIsFocused } from "@react-navigation/native";
import { Image, ScrollView, Text, View } from "react-native";
import showAlertUtil from "../utils/showAlert.js";

const SignUpIdentityProofScreen = (props) => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  // const [dlBack, setDlBack] = React.useState({});
  // const [dlFront, setDlFront] = React.useState({});
  // const [isDLBack, setIsDLBack] = React.useState(false);
  // const [isDLFront, setIsDLFront] = React.useState(false);
  const [isNRCBack, setIsNRCBack] = React.useState(false);
  const [isNRCFront, setIsNRCFront] = React.useState(false);
  const [nrcBack, setNrcBack] = React.useState({});
  const [nrcFront, setNrcFront] = React.useState({});
  // const isFocused = useIsFocused();

  // React.useEffect(() => {
  //   try {
  //     if (!isFocused) {
  //       return;
  //     }
  //     console.log(
  //       props.route?.params?.company_file ?? "",
  //       props.route?.params?.agent_license_file ?? ""
  //     );
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }, [isFocused]);

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
            alignItems: "center",
            flexDirection: "row",
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
            <Icon name={"MaterialIcons/arrow-back-ios"} size={30} />
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
              StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text 3"], {
                color: theme.colors["CoTruckBlack"],
                fontFamily: "System",
                fontSize: 20,
                fontWeight: "400",
              }),
              dimensions.width
            )}
          >
            {"Create an account"}
          </Text>
        </View>
      </View>

      <ScrollView
        bounces={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
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
                StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text 2"], {
                  color: theme.colors["CoTruckBlack"],
                  fontFamily: "System",
                  fontSize: 16,
                  fontWeight: "400",
                }),
                dimensions.width
              )}
            >
              {"Step 2 of 4 - Identify Proof"}
            </Text>
          </View>
          {/* NRC Container */}
          <View>
            {/* Sub Title */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)["Text 2"], {
                  margin: 10,
                }),
                dimensions.width
              )}
            >
              {
                "1.  Upload Registered Person's National \n     Registration Card (NRC) "
              }
            </Text>
            {/* NRC Front Press */}
            <>
              {!isNRCFront ? null : (
                <Touchable
                  onPress={() => {
                    try {
                      setIsNRCFront(false);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  {/* NRC Front View */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: "center",
                        justifyContent: "center",
                        margin: 10,
                      },
                      dimensions.width
                    )}
                  >
                    <Image
                      resizeMode={"cover"}
                      source={{ uri: `${nrcFront}` }}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.ImageStyles(theme)["Image 3"],
                          { borderRadius: 8, height: 150, width: 150 }
                        ),
                        dimensions.width
                      )}
                    />
                  </View>
                </Touchable>
              )}
            </>
            {/* Upload NRC Front */}
            <>
              {isNRCFront ? null : (
                <Touchable
                  onPress={() => {
                    const handler = async () => {
                      try {
                        const results = await openImagePickerUtil({
                          mediaTypes: "Images",
                          allowsEditing: false,
                          quality: 0.2,
                          allowsMultipleSelection: false,
                        });

                        setIsNRCFront(true);
                        setNrcFront(results);
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
                        alignItems: "center",
                        borderRadius: 8,
                        borderStyle: "dashed",
                        borderWidth: 1,
                        justifyContent: "center",
                        margin: 20,
                        padding: 20,
                      },
                      dimensions.width
                    )}
                  >
                    <Icon
                      name={"AntDesign/pluscircle"}
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
                        GlobalStyles.TextStyles(theme)["Text 2"],
                        dimensions.width
                      )}
                    >
                      {"Upload NRC Front *"}
                    </Text>
                  </View>
                </Touchable>
              )}
            </>
            <Divider
              color={theme.colors["Light"]}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.DividerStyles(theme)["Divider"],
                  {
                    marginBottom: 5,
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: 5,
                  }
                ),
                dimensions.width
              )}
            />
            {/* NRC Back Press */}
            <>
              {!isNRCBack ? null : (
                <Touchable
                  onPress={() => {
                    try {
                      setIsNRCBack(false);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  {/* NRC Back */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: "center",
                        justifyContent: "center",
                        margin: 10,
                      },
                      dimensions.width
                    )}
                  >
                    <Image
                      resizeMode={"cover"}
                      source={{ uri: `${nrcBack}` }}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.ImageStyles(theme)["Image 3"],
                          { borderRadius: 8, height: 150, width: 150 }
                        ),
                        dimensions.width
                      )}
                    />
                  </View>
                </Touchable>
              )}
            </>
            {/* Upload NRC Back */}
            <>
              {isNRCBack ? null : (
                <Touchable
                  onPress={() => {
                    const handler = async () => {
                      try {
                        const results = await openImagePickerUtil({
                          mediaTypes: "Images",
                          allowsEditing: false,
                          quality: 0.2,
                          allowsMultipleSelection: false,
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
                        alignItems: "center",
                        borderRadius: 8,
                        borderStyle: "dashed",
                        borderWidth: 1,
                        justifyContent: "center",
                        margin: 20,
                        padding: 20,
                      },
                      dimensions.width
                    )}
                  >
                    <Icon
                      name={"AntDesign/pluscircle"}
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
                        GlobalStyles.TextStyles(theme)["Text 2"],
                        dimensions.width
                      )}
                    >
                      {"Upload NRC Back *"}
                    </Text>
                  </View>
                </Touchable>
              )}
            </>
          </View>
          {/* Next */}
          <Button
            onPress={() => {
              const handler = () => {
                try {
                  // back
                  if (Object.keys(nrcFront).length === 0) {
                    showAlertUtil({
                      title: "Message",
                      message: "Please Upload NRC Front Image",
                      buttonText: undefined,
                    });
                    return;
                  }
                  // front
                  if (Object.keys(nrcBack).length === 0) {
                    showAlertUtil({
                      title: "Message",
                      message: "Please Upload NRC Back Image",
                      buttonText: undefined,
                    });
                    return;
                  }

                  navigation.navigate("SignUpVehicleProofScreen", {
                    comp_phone: props.route?.params?.comp_phone ?? "",
                    comp_regi: props.route?.params?.comp_regi ?? "",
                    certificate: props.route?.params?.company_file ?? "",
                    agent_license:
                      props.route?.params?.agent_license_file ?? "",
                    agent_name: props.route?.params?.agent_name ?? "",
                    prefer_paths: props.route?.params?.prefer_paths ?? "",
                    mobile: props.route?.params?.mobile ?? "",
                    email: props.route?.params?.email ?? "",
                    refer_code: props.route?.params?.refer_code ?? "",
                    NRC: nrcFront,
                    NRC_back: nrcBack,
                    name: props.route?.params?.name ?? "",
                    comp_name: props.route?.params?.comp_name ?? "",
                    password: props.route?.params?.password ?? "",
                  });
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ButtonStyles(theme)["Button"], {
                margin: 20,
              }),
              dimensions.width
            )}
            title={"Next"}
          />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(SignUpIdentityProofScreen);
