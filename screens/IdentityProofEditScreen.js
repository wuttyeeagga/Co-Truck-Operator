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
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, ScrollView, Text, View } from 'react-native';

const IdentityProofEditScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [dlBack, setDlBack] = React.useState({});
  const [dlFront, setDlFront] = React.useState({});
  const [isDLBack, setIsDLBack] = React.useState(false);
  const [isDLFront, setIsDLFront] = React.useState(false);
  const [isNRCBack, setIsNRCBack] = React.useState(false);
  const [isNRCFront, setIsNRCFront] = React.useState(false);
  const [nrcBack, setNrcBack] = React.useState({});
  const [nrcFront, setNrcFront] = React.useState({});
  const [testImg, setTestImg] = React.useState('');
  const cotruckUpdateIdentificationPOST =
    CotruckApi.useUpdateIdentificationPOST();

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
            {'Identification Proof'}
          </Text>
        </View>
      </View>

      <ScrollView
        bounces={true}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
      >
        {/* Main View */}
        <View style={StyleSheet.applyWidth({ margin: 20 }, dimensions.width)}>
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
            {/* NRC Front */}
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
                    {/* NRC Front */}
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
              )}
            </>
            {/* NRC Back */}
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

                        setIsNRCBack(true);
                        setNrcBack(results);
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
            {/* DL Front */}
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
                  {/* Image View */}
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
            {/* DL Back */}
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
                  {/* Image View */}
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
              )}
            </>
          </View>
          {/* Update */}
          <Button
            onPress={() => {
              const handler = async () => {
                try {
                  const results = (
                    await cotruckUpdateIdentificationPOST.mutateAsync({
                      dl_back: dlBack,
                      dl_fron: dlFront,
                      nrc_back: nrcBack,
                      nrc_front: nrcFront,
                      operator_id: Constants['AUTH_OWNER_ID'],
                    })
                  )?.json;
                  navigation.navigate('BottomTabNavigator', {
                    screen: 'SettingsScreen',
                  });

                  showAlertUtil({
                    title: 'Message',
                    message: results?.message,
                    buttonText: undefined,
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
            title={'Update'}
          />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(IdentityProofEditScreen);
