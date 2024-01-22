import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  Icon,
  ScreenContainer,
  StarRating,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { ScrollView, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const PaymentScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [AddressRadioButtoGroup, setAddressRadioButtoGroup] = React.useState(1);
  const [PaymentModal, setPaymentModal] = React.useState(false);
  const [PromoCodeModal, setPromoCodeModal] = React.useState(false);
  const [ShippingAddressModal, setShippingAddressModal] = React.useState(false);
  const [addCharges, setAddCharges] = React.useState('');
  const [addComment, setAddComment] = React.useState('');
  const [paymentMethodRadioGroup, setPaymentMethodRadioGroup] =
    React.useState(1);
  const [starRatingValue, setStarRatingValue] = React.useState(0);
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textAreaValue2, setTextAreaValue2] = React.useState('');
  const [textAreaValue3, setTextAreaValue3] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');
  const [tripExp, setTripExp] = React.useState('');
  const [ratingValue, setRatingValue] = React.useState(undefined);

  return (
    <ScreenContainer
      hasSafeArea={true}
      hasTopSafeArea={false}
      scrollable={false}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            marginLeft: 20,
            marginRight: 20,
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
                color: theme.colors['Strong'],
                fontFamily: 'System',
                fontSize: 20,
                fontWeight: '400',
              }),
              dimensions.width
            )}
          >
            {'Payment'}
          </Text>
        </View>
      </View>

      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
      >
        {/* Main View */}
        <View
          style={StyleSheet.applyWidth(
            {
              justifyContent: 'space-between',
              padding: [
                { minWidth: Breakpoints.Mobile, value: 20 },
                { minWidth: Breakpoints.BigScreen, value: 50 },
                { minWidth: Breakpoints.Desktop, value: 40 },
                { minWidth: Breakpoints.Laptop, value: 30 },
                { minWidth: Breakpoints.Tablet, value: 25 },
              ],
            },
            dimensions.width
          )}
        >
          {/* Shipper Info Row */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 10,
              },
              dimensions.width
            )}
          >
            {/* Shipper Name */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                  color: theme.colors['Primary'],
                  margin: 5,
                }),
                dimensions.width
              )}
            >
              {'Shipper Name'}
            </Text>
            {/* Shipper Mobile */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                  color: theme.colors['Primary'],
                  margin: 5,
                }),
                dimensions.width
              )}
            >
              {'09812312311'}
            </Text>
          </View>
          {/* Success Status */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 20,
                marginRight: 20,
              },
              dimensions.width
            )}
          >
            <Icon
              color={theme.colors['Success']}
              name={'AntDesign/checkcircleo'}
              size={50}
              style={StyleSheet.applyWidth(
                { marginBottom: 10, marginTop: 10 },
                dimensions.width
              )}
            />
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 3'], {
                  alignSelf: 'center',
                  color: theme.colors['Success'],
                  fontFamily: 'System',
                  fontSize: 16,
                  fontWeight: '400',
                  marginBottom: 10,
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 10,
                }),
                dimensions.width
              )}
            >
              {'Your ride has been successfully completed'}
            </Text>
          </View>
          {/* Amount View */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', margin: 20 },
              dimensions.width
            )}
          >
            {/* Total Amount */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 3'], {
                  color: theme.colors['Primary'],
                  fontSize: 16,
                }),
                dimensions.width
              )}
            >
              {'MMK - 4000'}
            </Text>
            {/* Total Charges */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                  color: theme.colors['CoTruckGrey'],
                  margin: 5,
                }),
                dimensions.width
              )}
            >
              {'Total Charges'}
            </Text>
          </View>
          {/* Additional Charges View */}
          <View style={StyleSheet.applyWidth({ margin: 20 }, dimensions.width)}>
            {/* Additional Charges */}
            <TextInput
              allowFontScaling={true}
              autoCapitalize={'none'}
              changeTextDelay={500}
              multiline={false}
              onChangeText={newAdditionalChargesValue => {
                try {
                  setAddCharges(newAdditionalChargesValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'Add additional charges'}
              placeholderTextColor={theme.colors['TextPlaceholder']}
              scrollEnabled={false}
              spellcheck={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextInputStyles(theme)['Text Input 3'],
                  {
                    borderColor: theme.colors['Light'],
                    borderRadius: 12,
                    height: 48,
                    paddingLeft: 12,
                  }
                ),
                dimensions.width
              )}
              value={addCharges}
            />
          </View>
          {/* Comment View */}
          <View style={StyleSheet.applyWidth({ margin: 20 }, dimensions.width)}>
            {/* Add Comment */}
            <TextInput
              allowFontScaling={true}
              changeTextDelay={500}
              multiline={true}
              numberOfLines={4}
              onChangeText={newAddCommentValue => {
                try {
                  setAddComment(newAddCommentValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'Add comment'}
              placeholderTextColor={theme.colors['TextPlaceholder']}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextInputStyles(theme)['Text Area'],
                  {
                    borderColor: theme.colors['Light'],
                    height: 68,
                    paddingLeft: 12,
                  }
                ),
                dimensions.width
              )}
              textAlignVertical={'top'}
              value={addComment}
            />
          </View>
          {/* Star View */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', margin: 20 },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 3'], {
                  fontFamily: 'System',
                  fontSize: 16,
                  fontWeight: '400',
                  margin: 10,
                }),
                dimensions.width
              )}
            >
              {'Rate your trip experience'}
            </Text>
            <StarRating
              activeColor={theme.colors.primary}
              inactiveColor={theme.colors.divider}
              isEditable={true}
              maxStars={5}
              onPress={newStarRatingValue => {
                const ratingValue = newStarRatingValue;
                try {
                  setStarRatingValue(newStarRatingValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              rating={starRatingValue}
              starSize={50}
              style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
            />
          </View>
          {/* View 4 */}
          <View style={StyleSheet.applyWidth({ margin: 20 }, dimensions.width)}>
            {/* Trip Experience */}
            <TextInput
              allowFontScaling={true}
              changeTextDelay={500}
              multiline={true}
              numberOfLines={4}
              onChangeText={newTripExperienceValue => {
                const textInputValue = newTripExperienceValue;
                try {
                  setTextAreaValue3(newTripExperienceValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'Share your trip experience'}
              placeholderTextColor={theme.colors['TextPlaceholder']}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextInputStyles(theme)['Text Area'],
                  {
                    borderColor: theme.colors['Light'],
                    height: 68,
                    paddingLeft: 12,
                  }
                ),
                dimensions.width
              )}
              textAlignVertical={'top'}
              value={textAreaValue3}
            />
          </View>
        </View>
        <Button
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
              borderRadius: 12,
              height: 48,
              margin: 20,
              marginLeft: 30,
              marginRight: 30,
            }),
            dimensions.width
          )}
          title={'Request'}
        />
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(PaymentScreen);
