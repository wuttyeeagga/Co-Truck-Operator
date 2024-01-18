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
  Table,
  TableCell,
  TableRow,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { ScrollView, Text, View } from 'react-native';

const PaymentScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [AddressRadioButtoGroup, setAddressRadioButtoGroup] = React.useState(1);
  const [PaymentModal, setPaymentModal] = React.useState(false);
  const [PromoCodeModal, setPromoCodeModal] = React.useState(false);
  const [ShippingAddressModal, setShippingAddressModal] = React.useState(false);
  const [paymentMethodRadioGroup, setPaymentMethodRadioGroup] =
    React.useState(1);
  const [starRatingValue, setStarRatingValue] = React.useState(0);
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
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
            marginBottom: 20,
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

      <ScrollView
        bounces={true}
        showsHorizontalScrollIndicator={true}
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

          <Table
            borderColor={theme.colors.divider}
            borderStyle={'solid'}
            borderWidth={1}
            cellHorizontalPadding={10}
            cellVerticalPadding={10}
            drawTopBorder={true}
            showsVerticalScrollIndicator={true}
            style={StyleSheet.applyWidth(
              GlobalStyles.TableStyles(theme)['Table'],
              dimensions.width
            )}
          >
            <TableRow drawBottomBorder={true} drawStartBorder={true}>
              <TableCell
                drawEndBorder={true}
                style={StyleSheet.applyWidth(
                  GlobalStyles.TableCellStyles(theme)['Table Cell'],
                  dimensions.width
                )}
              >
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.TextStyles(theme)['Text 3'],
                    dimensions.width
                  )}
                >
                  {'Sub Total'}
                </Text>
              </TableCell>
              {/* Table Cell 2 */}
              <TableCell
                drawEndBorder={true}
                style={StyleSheet.applyWidth(
                  GlobalStyles.TableCellStyles(theme)['Table Cell'],
                  dimensions.width
                )}
              >
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.TextStyles(theme)['Text 3'],
                    dimensions.width
                  )}
                >
                  {'500'}
                </Text>
              </TableCell>
            </TableRow>
            {/* Table Row 2 */}
            <TableRow drawBottomBorder={true} drawStartBorder={true}>
              <TableCell
                drawEndBorder={true}
                style={StyleSheet.applyWidth(
                  GlobalStyles.TableCellStyles(theme)['Table Cell'],
                  dimensions.width
                )}
              >
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.TextStyles(theme)['Text 3'],
                    dimensions.width
                  )}
                >
                  {'Extra Charges'}
                </Text>
              </TableCell>
              {/* Table Cell 2 */}
              <TableCell
                drawEndBorder={true}
                style={StyleSheet.applyWidth(
                  GlobalStyles.TableCellStyles(theme)['Table Cell'],
                  dimensions.width
                )}
              >
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.TextStyles(theme)['Text 3'],
                    dimensions.width
                  )}
                >
                  {'300'}
                </Text>
              </TableCell>
            </TableRow>
            {/* Table Row 3 */}
            <TableRow drawBottomBorder={true} drawStartBorder={true}>
              <TableCell
                drawEndBorder={true}
                style={StyleSheet.applyWidth(
                  GlobalStyles.TableCellStyles(theme)['Table Cell'],
                  dimensions.width
                )}
              >
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text 3'],
                      { fontFamily: 'System', fontSize: 14, fontWeight: '400' }
                    ),
                    dimensions.width
                  )}
                >
                  {'Total'}
                </Text>
              </TableCell>
              {/* Table Cell 2 */}
              <TableCell
                drawEndBorder={true}
                style={StyleSheet.applyWidth(
                  GlobalStyles.TableCellStyles(theme)['Table Cell'],
                  dimensions.width
                )}
              >
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.TextStyles(theme)['Text 3'],
                    dimensions.width
                  )}
                >
                  {'800'}
                </Text>
              </TableCell>
            </TableRow>
          </Table>
          {/* View 2 */}
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
                GlobalStyles.TextStyles(theme)['Text 3'],
                dimensions.width
              )}
            >
              {'Toperator comp 1'}
            </Text>
          </View>
          {/* View 3 */}
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
          <View
            style={StyleSheet.applyWidth(
              { marginLeft: 10, marginRight: 10 },
              dimensions.width
            )}
          >
            <TextInput
              allowFontScaling={true}
              autoCapitalize={'none'}
              changeTextDelay={500}
              multiline={true}
              onChangeText={newTextInputValue => {
                const textInputValue = newTextInputValue;
                try {
                  setTextInputValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'Share your trip experience'}
              placeholderTextColor={theme.colors['TextPlaceholder']}
              scrollEnabled={true}
              spellcheck={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextInputStyles(theme)['Text Input 3'],
                  { borderRadius: 12, padding: 15 }
                ),
                dimensions.width
              )}
              value={textInputValue}
            />
          </View>
        </View>
        <Button
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
              margin: 20,
            }),
            dimensions.width
          )}
          title={'CONFIRM PAYMENT'}
        />
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(PaymentScreen);
