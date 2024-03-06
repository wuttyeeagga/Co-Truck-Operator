import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CotruckApi from '../apis/CotruckApi.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Icon,
  ScreenContainer,
  Table,
  TableCell,
  TableRow,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const InvoiceScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();

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
                color: theme.colors['CoTruckBlack'],
                fontFamily: 'System',
                fontSize: 20,
                fontWeight: '400',
              }),
              dimensions.width
            )}
          >
            {'Invoices'}
          </Text>
        </View>
      </View>
      {/* View Invoice */}
      <CotruckApi.FetchViewInvoicePOST
        book_truck_id={props.route?.params?.book_truck_id ?? ''}
      >
        {({ loading, error, data, refetchViewInvoice }) => {
          const viewInvoiceData = data?.json;
          if (loading) {
            return (
              <>
                {/* loading */}
                <View
                  style={StyleSheet.applyWidth(
                    { alignItems: 'center', flex: 1, justifyContent: 'center' },
                    dimensions.width
                  )}
                >
                  <ActivityIndicator
                    animating={true}
                    color={theme.colors['Primary']}
                    hidesWhenStopped={true}
                    size={'large'}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.ActivityIndicatorStyles(theme)[
                        'Activity Indicator'
                      ],
                      dimensions.width
                    )}
                  />
                </View>
              </>
            );
          }

          if (error || data?.status < 200 || data?.status >= 300) {
            return (
              <>
                {/* Error View */}
                <View
                  style={StyleSheet.applyWidth(
                    { alignItems: 'center', flex: 1, justifyContent: 'center' },
                    dimensions.width
                  )}
                >
                  {/* error */}
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.TextStyles(theme)['Text 2'],
                      dimensions.width
                    )}
                  >
                    {viewInvoiceData?.message}
                  </Text>
                </View>
              </>
            );
          }

          return (
            <>
              {/* Main View */}
              <View
                style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
              >
                {/* Booking Id & Status View */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      margin: 20,
                      padding: 10,
                    },
                    dimensions.width
                  )}
                >
                  {/* Book Truck ID */}
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.TextStyles(theme)['Text 3'],
                      dimensions.width
                    )}
                  >
                    {'Booking ID : '}
                    {viewInvoiceData?.data?.book_truck_id}
                  </Text>
                  {/* Status */}
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text 3'],
                        { color: theme.colors['Error'] }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Status : '}
                    {viewInvoiceData?.data?.status}
                  </Text>
                </View>
                {/* Row Wrapper */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      margin: 10,
                    },
                    dimensions.width
                  )}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      { margin: 10 },
                      dimensions.width
                    )}
                  >
                    {/* Details */}
                    <Text
                      accessible={true}
                      allowFontScaling={true}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text 2'],
                          {
                            color: theme.colors['CoTruckBlack'],
                            fontSize: 16,
                            margin: 5,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {"Shipper's Details"}
                    </Text>
                    {/* Sender's Name */}
                    <Text
                      accessible={true}
                      allowFontScaling={true}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text 2'],
                          {
                            color: theme.colors['CoTruckBlack'],
                            fontSize: 16,
                            margin: 5,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {viewInvoiceData?.data?.shipper_name}
                    </Text>
                    {/* Sender's Mobile */}
                    <Text
                      accessible={true}
                      allowFontScaling={true}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text 2'],
                          { margin: 5 }
                        ),
                        dimensions.width
                      )}
                    >
                      {viewInvoiceData?.data?.shipper_mobile}
                    </Text>
                  </View>
                </View>
                {/* Table 2 */}
                <Table
                  borderColor={theme.colors['Light']}
                  borderStyle={'solid'}
                  borderWidth={1}
                  cellHorizontalPadding={10}
                  cellVerticalPadding={10}
                  drawTopBorder={true}
                  showsVerticalScrollIndicator={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TableStyles(theme)['Table'],
                      {
                        marginBottom: 10,
                        marginLeft: 10,
                        marginRight: 10,
                        marginTop: 10,
                      }
                    ),
                    dimensions.width
                  )}
                >
                  <TableRow drawBottomBorder={true} drawStartBorder={true}>
                    {/* Sub Total Cell */}
                    <TableCell
                      drawEndBorder={true}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.TableCellStyles(theme)['Table Cell'],
                        dimensions.width
                      )}
                    >
                      {/* Sub Total */}
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
                    {/* Sub Total Cell */}
                    <TableCell
                      drawEndBorder={true}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.TableCellStyles(theme)['Table Cell'],
                        dimensions.width
                      )}
                    >
                      {/* Sub Total */}
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.TextStyles(theme)['Text 3'],
                          dimensions.width
                        )}
                      >
                        {viewInvoiceData?.data?.sub_total}
                      </Text>
                    </TableCell>
                  </TableRow>

                  <TableRow drawBottomBorder={true} drawStartBorder={true}>
                    {/* Add On Amount Cell */}
                    <TableCell
                      drawEndBorder={true}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.TableCellStyles(theme)['Table Cell'],
                        dimensions.width
                      )}
                    >
                      {/* Add On Amount */}
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.TextStyles(theme)['Text 3'],
                          dimensions.width
                        )}
                      >
                        {'Add On Amount'}
                      </Text>
                    </TableCell>
                    {/* Add On Amount Cell */}
                    <TableCell
                      drawEndBorder={true}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.TableCellStyles(theme)['Table Cell'],
                        dimensions.width
                      )}
                    >
                      {/* Add On Amount */}
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.TextStyles(theme)['Text 3'],
                          dimensions.width
                        )}
                      >
                        {viewInvoiceData?.data?.addon_amount}
                      </Text>
                    </TableCell>
                  </TableRow>
                  {/* Table Row 2 */}
                  <TableRow drawBottomBorder={true} drawStartBorder={true}>
                    {/* Final Total Cell */}
                    <TableCell
                      drawEndBorder={true}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.TableCellStyles(theme)['Table Cell'],
                        dimensions.width
                      )}
                    >
                      {/* Final Total */}
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.TextStyles(theme)['Text 3'],
                          dimensions.width
                        )}
                      >
                        {'Final Total'}
                      </Text>
                    </TableCell>
                    {/* Final Total Cell */}
                    <TableCell
                      drawEndBorder={true}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.TableCellStyles(theme)['Table Cell'],
                        dimensions.width
                      )}
                    >
                      {/* Final Total */}
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
                </Table>
              </View>
            </>
          );
        }}
      </CotruckApi.FetchViewInvoicePOST>
    </ScreenContainer>
  );
};

export default withTheme(InvoiceScreen);
