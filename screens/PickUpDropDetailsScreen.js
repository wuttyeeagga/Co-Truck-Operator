import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import openImagePickerUtil from '../utils/openImagePicker';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  DatePicker,
  Icon,
  Picker,
  Pressable,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const PickUpDropDetailsScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [comment, setComment] = React.useState('');
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [loadImage, setLoadImage] = React.useState('');
  const [pickerValue, setPickerValue] = React.useState('');
  const [pickerValue2, setPickerValue2] = React.useState('');
  const [styledTextAreaValue, setStyledTextAreaValue] = React.useState('');
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');
  const [date, setDate] = React.useState(new Date());

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={true}
      scrollable={false}
    >
      {/* My Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            margin: 20,
            marginLeft: 20,
            marginTop: 20,
          },
          dimensions.width
        )}
      >
        <Touchable
          onPress={() => {
            try {
              navigation.goBack();
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth({ marginLeft: 10 }, dimensions.width)}
        >
          <Icon name={'MaterialIcons/arrow-back-ios'} size={30} />
        </Touchable>

        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
              fontSize: 20,
              marginLeft: 10,
            }),
            dimensions.width
          )}
        >
          {'Pick Up Drop Depot Details'}
        </Text>
      </View>

      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
      >
        {/* Date&Time */}
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
          <DatePicker
            autoDismissKeyboard={true}
            date={datePickerValue}
            label={'Choose Pick Up Date & Time'}
            labelColor={theme.colors['SummaryText']}
            leftIconMode={'inset'}
            leftIconName={'FontAwesome/calendar'}
            minimumDate={new Date()}
            mode={'datetime'}
            onDateChange={newDatePickerValue => {
              const date = newDatePickerValue;
              try {
                setDatePickerValue(newDatePickerValue);
              } catch (err) {
                console.error(err);
              }
            }}
            type={'solid'}
          />
        </View>
        {/* Pick Up Point */}
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
          {/* SubTitle View */}
          <View>
            {/* SubTitle */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                  color: theme.colors['bordercolor'],
                  fontFamily: 'System',
                  fontSize: 16,
                  fontWeight: '400',
                }),
                dimensions.width
              )}
            >
              {'Pickup point details'}
            </Text>
          </View>
          {/* Point Location View */}
          <View>
            <Pressable
              onPress={() => {
                console.log('Pressable ON_PRESS Start');
                let error = null;
                try {
                  console.log('Start ON_PRESS:1 NAVIGATE');
                  navigation.navigate('ImportLiveTrackScreen');
                  console.log('Complete ON_PRESS:1 NAVIGATE');
                } catch (err) {
                  console.error(err);
                  error = err.message ?? err;
                }
                console.log(
                  'Pressable ON_PRESS Complete',
                  error ? { error } : 'no error'
                );
              }}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    borderColor: theme.colors['TextPlaceholder'],
                    borderRadius: 12,
                    borderWidth: 1,
                    flexDirection: 'row',
                    marginBottom: 10,
                    marginTop: 10,
                  },
                  dimensions.width
                )}
              >
                <Icon
                  name={'Feather/map-pin'}
                  size={24}
                  style={StyleSheet.applyWidth(
                    {
                      marginBottom: 10,
                      marginLeft: 10,
                      marginRight: 10,
                      marginTop: 10,
                    },
                    dimensions.width
                  )}
                />
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text 2'],
                      {
                        color: theme.colors['TextPlaceholder'],
                        fontSize: 16,
                        marginLeft: 10,
                        marginRight: 10,
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'Pickup point location'}
                </Text>
              </View>
            </Pressable>
          </View>
          {/* Pick Up Info Row */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
              },
              dimensions.width
            )}
          >
            {/* Contact Person Name */}
            <TextInput
              autoCapitalize={'none'}
              placeholder={'Contact Name'}
              placeholderTextColor={theme.colors['Light']}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: 'rgba(0, 0, 0, 0)',
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Light'],
                  borderLeftWidth: 1,
                  borderRadius: 12,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  fontFamily: 'Inter_400Regular',
                  height: 48,
                  marginTop: 10,
                  paddingBottom: 8,
                  paddingLeft: 20,
                  paddingRight: 8,
                  paddingTop: 8,
                  width: '48%',
                },
                dimensions.width
              )}
            />
            {/* Mobile Number */}
            <TextInput
              autoCapitalize={'none'}
              placeholder={'Mobile Number'}
              placeholderTextColor={theme.colors['Light']}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: 'rgba(0, 0, 0, 0)',
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Light'],
                  borderLeftWidth: 1,
                  borderRadius: 12,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  fontFamily: 'Inter_400Regular',
                  height: 48,
                  marginTop: 10,
                  paddingBottom: 8,
                  paddingLeft: 20,
                  paddingRight: 8,
                  paddingTop: 8,
                  width: '48%',
                },
                dimensions.width
              )}
            />
          </View>
          {/* Pickup Address Input */}
          <TextInput
            allowFontScaling={true}
            autoCapitalize={'none'}
            changeTextDelay={500}
            onChangeText={newPickupAddressInputValue => {
              const textInputValue = newPickupAddressInputValue;
              try {
                setTextInputValue(newPickupAddressInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            placeholder={'Enter pickup address'}
            placeholderTextColor={theme.colors['TextPlaceholder']}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextInputStyles(theme)['Text Input 3'],
                {
                  borderRadius: 12,
                  height: 48,
                  marginBottom: 20,
                  marginTop: 20,
                  paddingLeft: 15,
                }
              ),
              dimensions.width
            )}
            value={textInputValue}
          />
        </View>
        {/* Drop Point */}
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
          {/* SubTitle View */}
          <View>
            {/* SubTitle */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                  color: theme.colors['bordercolor'],
                  fontFamily: 'System',
                  fontSize: 16,
                  fontWeight: '400',
                }),
                dimensions.width
              )}
            >
              {'Drop point details'}
            </Text>
          </View>
          {/* Point Location View */}
          <View>
            <Pressable
              onPress={() => {
                try {
                  navigation.navigate('ImportLiveTrackScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    borderColor: theme.colors['TextPlaceholder'],
                    borderRadius: 5,
                    borderWidth: 1,
                    flexDirection: 'row',
                    marginBottom: 10,
                    marginTop: 10,
                  },
                  dimensions.width
                )}
              >
                <Icon
                  name={'Feather/map-pin'}
                  size={24}
                  style={StyleSheet.applyWidth(
                    {
                      marginBottom: 10,
                      marginLeft: 10,
                      marginRight: 10,
                      marginTop: 10,
                    },
                    dimensions.width
                  )}
                />
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text 2'],
                      {
                        color: theme.colors['TextPlaceholder'],
                        fontSize: 16,
                        marginLeft: 10,
                        marginRight: 10,
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'Drop point location'}
                </Text>
              </View>
            </Pressable>
          </View>
          {/* Drop Info Row */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
              },
              dimensions.width
            )}
          >
            {/* Contact Person Name */}
            <TextInput
              autoCapitalize={'none'}
              placeholder={'Contace Name'}
              placeholderTextColor={theme.colors['Light']}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: 'rgba(0, 0, 0, 0)',
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Light'],
                  borderLeftWidth: 1,
                  borderRadius: 12,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  fontFamily: 'Inter_400Regular',
                  height: 48,
                  marginTop: 10,
                  paddingBottom: 8,
                  paddingLeft: 20,
                  paddingRight: 8,
                  paddingTop: 8,
                  width: '48%',
                },
                dimensions.width
              )}
            />
            {/* Mobile Number */}
            <TextInput
              autoCapitalize={'none'}
              placeholder={'Mobile Number'}
              placeholderTextColor={theme.colors['Light']}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: 'rgba(0, 0, 0, 0)',
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Light'],
                  borderLeftWidth: 1,
                  borderRadius: 12,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  fontFamily: 'Inter_400Regular',
                  height: 48,
                  marginTop: 10,
                  paddingBottom: 8,
                  paddingLeft: 20,
                  paddingRight: 8,
                  paddingTop: 8,
                  width: '48%',
                },
                dimensions.width
              )}
            />
          </View>
          {/* Drop Address Input */}
          <TextInput
            allowFontScaling={true}
            autoCapitalize={'none'}
            changeTextDelay={500}
            onChangeText={newDropAddressInputValue => {
              const textInputValue = newDropAddressInputValue;
              try {
                setTextInputValue2(newDropAddressInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            placeholder={'Enter drop address'}
            placeholderTextColor={theme.colors['TextPlaceholder']}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextInputStyles(theme)['Text Input 3'],
                {
                  borderRadius: 12,
                  height: 48,
                  marginBottom: 20,
                  marginTop: 20,
                  paddingLeft: 15,
                }
              ),
              dimensions.width
            )}
            value={textInputValue2}
          />
        </View>
        {/* Image Container */}
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
          {/* photoUpload */}
          <View>
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['bordercolor'],
                  fontFamily: 'System',
                  fontSize: 16,
                  fontWeight: '400',
                },
                dimensions.width
              )}
            >
              {'Upload Load Image'}
            </Text>

            <Touchable
              onPress={() => {
                const handler = async () => {
                  console.log('Touchable ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 OPEN_IMAGE_PICKER');
                    const newImageURL = await openImagePickerUtil({
                      mediaTypes: 'All',
                      allowsEditing: false,
                      quality: 0.2,
                    });
                    console.log('Complete ON_PRESS:0 OPEN_IMAGE_PICKER', {
                      newImageURL,
                    });
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setLoadImage(newImageURL);
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    'Touchable ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                };
                handler();
              }}
              style={StyleSheet.applyWidth({ marginTop: 10 }, dimensions.width)}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    borderBottomWidth: 1,
                    borderColor: theme.colors['Light'],
                    borderLeftWidth: 1,
                    borderRadius: 12,
                    borderRightWidth: 1,
                    borderStyle: 'dashed',
                    borderTopWidth: 1,
                    height: 140,
                    justifyContent: 'center',
                  },
                  dimensions.width
                )}
              >
                <Icon
                  color={theme.colors['Primary']}
                  name={'AntDesign/camerao'}
                  size={35}
                />
              </View>
            </Touchable>

            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'center',
                },
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                source={{ uri: `${loadImage}` }}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ImageStyles(theme)['Image 2'],
                    {
                      marginBottom: 10,
                      marginLeft: 10,
                      marginRight: 10,
                      marginTop: 10,
                    }
                  ),
                  dimensions.width
                )}
              />
            </View>
          </View>
        </View>
        {/* Add Comment */}
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
          <TextInput
            allowFontScaling={true}
            changeTextDelay={500}
            multiline={true}
            numberOfLines={4}
            onChangeText={newTextAreaValue => {
              try {
                setComment(newTextAreaValue);
              } catch (err) {
                console.error(err);
              }
            }}
            placeholder={'Add Comment'}
            placeholderTextColor={theme.colors['bordercolor']}
            style={StyleSheet.applyWidth(
              GlobalStyles.TextInputStyles(theme)['Text Area'],
              dimensions.width
            )}
            textAlignVertical={'top'}
            value={comment}
          />
        </View>
        {/* Choose Operator */}
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
          <Picker
            autoDismissKeyboard={true}
            dropDownBackgroundColor={theme.colors.background}
            dropDownBorderColor={theme.colors.divider}
            dropDownBorderRadius={8}
            dropDownBorderWidth={1}
            dropDownTextColor={theme.colors.strong}
            iconSize={24}
            leftIconMode={'inset'}
            mode={'native'}
            onValueChange={newPickerValue => {
              const pickerValue = newPickerValue;
              try {
                setPickerValue2(newPickerValue);
              } catch (err) {
                console.error(err);
              }
            }}
            placeholder={'Select an option'}
            selectedIconColor={theme.colors.strong}
            selectedIconName={'Feather/check'}
            selectedIconSize={20}
            type={'solid'}
            value={pickerValue2}
          />
        </View>
        {/* Button Container */}
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
          <Button
            onPress={() => {
              try {
                navigation.navigate('BookingSummaryScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              GlobalStyles.ButtonStyles(theme)['Button'],
              dimensions.width
            )}
            title={'Next'}
          />
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(PickUpDropDetailsScreen);
