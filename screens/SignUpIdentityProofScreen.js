import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import openImagePickerUtil from '../utils/openImagePicker';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  Divider,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, ScrollView, Text, View } from 'react-native';

const SignUpIdentityProofScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [dlBack, setDlBack] = React.useState({});
  const [dlFront, setDlFront] = React.useState({});
  const [isDLBack, setIsDLBack] = React.useState(false);
  const [isDLFront, setIsDLFront] = React.useState(false);
  const [isNRCBack, setIsNRCBack] = React.useState(false);
  const [isNRCFront, setIsNRCFront] = React.useState(false);
  const [nrcBack, setNrcBack] = React.useState({});
  const [nrcFront, setNrcFront] = React.useState({});

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
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                  color: theme.colors['CoTruckBlack'],
                  fontFamily: 'System',
                  fontSize: 16,
                  fontWeight: '400',
                }),
                dimensions.width
              )}
            >
              {'Step 2 of 4 - Identify Proof'}
            </Text>
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
              {'1.  Upload National Registration Card'}
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
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 10,
                      },
                      dimensions.width
                    )}
                  >
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
                          mediaTypes: 'Images',
                          allowsEditing: false,
                          quality: 0.2,
                        });

                        setIsNRCFront(true);
                        setNrcFront(results);
                        console.log(results);
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
              )}
            </>
            <Divider
              color={theme.colors['Light']}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.DividerStyles(theme)['Divider'],
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
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 10,
                      },
                      dimensions.width
                    )}
                  >
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
                          mediaTypes: 'Images',
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
              )}
            </>
          </View>
          {/* Driving License Container */}
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
              {'2.  Upload Driving License'}
            </Text>
            {/* DL Front Image */}
            <>
              {!isDLFront ? null : (
                <Touchable
                  onPress={() => {
                    try {
                      setIsDLFront(false);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  {/* DL Front View */}
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
                </Touchable>
              )}
            </>
            {/* Upload DL Front */}
            <>
              {isDLFront ? null : (
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
              )}
            </>
            <Divider
              color={theme.colors['Light']}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.DividerStyles(theme)['Divider'],
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
            {/* DL Back Image */}
            <>
              {!isDLBack ? null : (
                <Touchable
                  onPress={() => {
                    try {
                      setIsDLBack(false);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  {/* DL Back View */}
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
                </Touchable>
              )}
            </>
            {/* Upload DL Back */}
            <>
              {isDLBack ? null : (
                <Touchable
                  onPress={() => {
                    const handler = async () => {
                      try {
                        const results = await openImagePickerUtil({
                          mediaTypes: 'Images',
                          allowsEditing: false,
                          quality: 0.2,
                        });

                        setIsDLBack(true);
                        setDlBack(results);
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
              )}
            </>
          </View>
          {/* Next */}
          <Button
            onPress={() => {
              try {
                navigation.navigate('VehicleProofScreen', {
                  comp_name: props.route?.params?.comp_name ?? '',
                  comp_phone: props.route?.params?.comp_phone ?? '',
                  comp_regi: props.route?.params?.comp_regi ?? '',
                  certificate: props.route?.params?.certificate ?? '',
                  agent_license: props.route?.params?.agent_license ?? '',
                  agent_name: props.route?.params?.agent_name ?? '',
                  prefer_paths: props.route?.params?.prefer_paths ?? '',
                  mobile: props.route?.params?.mobile ?? '',
                  email: props.route?.params?.email ?? '',
                  password: props.route?.params?.password ?? '',
                  refer_code: props.route?.params?.refer_code ?? '',
                  NRC: nrcFront,
                  driving_license: dlFront,
                  NRC_back: nrcBack,
                  driving_license_back: dlBack,
                  name: props.route?.params?.name ?? '',
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
                margin: 20,
              }),
              dimensions.width
            )}
            title={'Next'}
          />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(SignUpIdentityProofScreen);
