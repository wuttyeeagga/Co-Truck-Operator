import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
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
import { Text, View } from 'react-native';

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
                color: theme.colors['Primary'],
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
        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            GlobalStyles.TextStyles(theme)['Text 3'],
            dimensions.width
          )}
        >
          {'Booking ID: 29'}
        </Text>
        {/* Text 2 */}
        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 3'], {
              color: theme.colors['Error'],
            }),
            dimensions.width
          )}
        >
          {'Status: COMPLETED'}
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
        <View style={StyleSheet.applyWidth({ margin: 10 }, dimensions.width)}>
          {/* Details */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                color: theme.colors['CoTruckBlack'],
                fontSize: 16,
                margin: 5,
              }),
              dimensions.width
            )}
          >
            {"Sender's Details"}
          </Text>
          {/* Sender's Name */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                color: theme.colors['CoTruckBlack'],
                fontSize: 16,
                margin: 5,
              }),
              dimensions.width
            )}
          >
            {'kham'}
          </Text>
          {/* Sender's Mobile */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                margin: 5,
              }),
              dimensions.width
            )}
          >
            {'9672005000'}
          </Text>
        </View>
        {/* View 2 */}
        <View style={StyleSheet.applyWidth({ margin: 10 }, dimensions.width)}>
          {/* Details */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                color: theme.colors['CoTruckBlack'],
                fontSize: 16,
                margin: 5,
              }),
              dimensions.width
            )}
          >
            {"Sender's Details"}
          </Text>
          {/* Sender's Name */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                color: theme.colors['CoTruckBlack'],
                fontSize: 16,
                margin: 5,
              }),
              dimensions.width
            )}
          >
            {'kham'}
          </Text>
          {/* Sender's Mobile */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                margin: 5,
              }),
              dimensions.width
            )}
          >
            {'9672005000'}
          </Text>
        </View>
      </View>
      {/* Table 2 */}
      <Table
        borderColor={theme.colors.divider}
        borderStyle={'solid'}
        borderWidth={1}
        cellHorizontalPadding={10}
        cellVerticalPadding={10}
        drawTopBorder={true}
        showsVerticalScrollIndicator={true}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TableStyles(theme)['Table'], {
            marginBottom: 10,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
          }),
          dimensions.width
        )}
      >
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
                GlobalStyles.TextStyles(theme)['Text 3'],
                dimensions.width
              )}
            >
              {'Total Price'}
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
              {'0'}
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
              {'Final Total'}
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
      </Table>
    </ScreenContainer>
  );
};

export default withTheme(InvoiceScreen);
