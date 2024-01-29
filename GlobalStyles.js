import * as StyleSheet from './utils/StyleSheet';

import Breakpoints from './utils/Breakpoints';

export const TextStyles = theme =>
  StyleSheet.create({
    Text: { color: theme.colors.strong },
    'Text 3': { color: theme.colors.strong },
    'Text 4': { color: theme.colors.strong },
  });

export const PinInputStyles = theme =>
  StyleSheet.create({
    'Pin Input': {
      alignItems: 'center',
      borderColor: theme.colors.medium,
      borderRadius: 5,
      borderWidth: 1,
      color: theme.colors.strong,
      flex: 1,
      fontSize: 25,
      justifyContent: 'center',
      marginLeft: 5,
      marginRight: 5,
      maxHeight: 70,
      maxWidth: 70,
      padding: 5,
    },
  });

export const DividerStyles = theme =>
  StyleSheet.create({ Divider: { height: 1 } });

export const TableStyles = theme => StyleSheet.create({ Table: { flex: 1 } });

export const TableCellStyles = theme =>
  StyleSheet.create({ 'Table Cell': { flex: 1, flexDirection: 'row' } });

export const MapViewStyles = theme =>
  StyleSheet.create({ 'Map View': { flex: 1, height: '100%', width: '100%' } });

export const NumberInputStyles = theme =>
  StyleSheet.create({
    'Number Input': {
      borderBottomWidth: 1,
      borderColor: theme.colors.divider,
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
  });

export const TextInputStyles = theme =>
  StyleSheet.create({
    'Text Area': {
      borderBottomWidth: 1,
      borderColor: theme.colors.divider,
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
    'Text Input': {
      borderBottomWidth: 1,
      borderColor: theme.colors.divider,
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
    'Text Input 2': {
      borderBottomWidth: 1,
      borderColor: theme.colors.divider,
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
    'Text Input 3': {
      borderBottomWidth: 1,
      borderColor: theme.colors.divider,
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
    'Text Input 4': {
      borderBottomWidth: 1,
      borderColor: theme.colors.divider,
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
  });

export const AccordionGroupStyles = theme =>
  StyleSheet.create({
    Accordion: {
      fontSize: 16,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
  });

export const TabViewItemStyles = theme =>
  StyleSheet.create({ 'Tab View Item': { flex: 1 } });

export const ViewStyles = theme =>
  StyleSheet.create({
    'header action': {
      alignItems: 'center',
      height: 48,
      justifyContent: 'center',
      width: 48,
    },
    'header action 2': {
      alignItems: 'center',
      height: 48,
      justifyContent: 'center',
      width: 48,
    },
    'header action 3': {
      alignItems: 'center',
      height: 48,
      justifyContent: 'center',
      width: 48,
    },
    'screen header view': {
      alignItems: 'center',
      flexDirection: 'row',
      height: 50,
      justifyContent: 'space-between',
      paddingLeft: 16,
      paddingRight: 16,
    },
    'screen header view 2': {
      alignItems: 'center',
      flexDirection: 'row',
      height: 50,
      justifyContent: 'space-between',
      paddingLeft: 16,
      paddingRight: 16,
    },
    'screen header view 3': {
      alignItems: 'center',
      flexDirection: 'row',
      height: 50,
      justifyContent: 'space-between',
      paddingLeft: 16,
      paddingRight: 16,
    },
  });

export const ButtonStyles = theme =>
  StyleSheet.create({
    'Action button': {
      backgroundColor: theme.colors.primary,
      borderRadius: 12,
      fontFamily: 'Inter_500Medium',
      fontSize: 16,
      height: 48,
      marginTop: 25,
      textAlign: 'center',
    },
    'Action button 2': {
      backgroundColor: theme.colors.primary,
      borderRadius: 12,
      fontFamily: 'Inter_500Medium',
      fontSize: 16,
      height: 48,
      marginTop: 25,
      textAlign: 'center',
    },
    'Action button 3': {
      backgroundColor: theme.colors.primary,
      borderRadius: 12,
      fontFamily: 'Inter_500Medium',
      fontSize: 16,
      height: 48,
      marginTop: 25,
      textAlign: 'center',
    },
    'App Btns': {
      backgroundColor: theme.colors['Divider'],
      borderBottomWidth: 1,
      borderColor: theme.colors['Light'],
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      color: theme.colors['Strong'],
      fontFamily: 'Inter_400Regular',
      fontSize: 16,
      textAlign: 'center',
      width: '45%',
    },
    'App Btns 2': {
      backgroundColor: theme.colors['Divider'],
      borderBottomWidth: 1,
      borderColor: theme.colors['Light'],
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      color: theme.colors['Strong'],
      fontFamily: 'Inter_400Regular',
      fontSize: 16,
      textAlign: 'center',
      width: '45%',
    },
    Button: {
      backgroundColor: theme.colors.primary,
      borderRadius: 8,
      fontFamily: 'System',
      fontWeight: '700',
      textAlign: 'center',
    },
    'action btn tablet': {
      backgroundColor: theme.colors.primary,
      borderRadius: 12,
      fontFamily: 'Inter_500Medium',
      fontSize: [
        { minWidth: Breakpoints.Mobile, value: 16 },
        { minWidth: Breakpoints.BigScreen, value: 24 },
        { minWidth: Breakpoints.Desktop, value: 20 },
        { minWidth: Breakpoints.Laptop, value: 20 },
        { minWidth: Breakpoints.Tablet, value: 20 },
      ],
      height: [
        { minWidth: Breakpoints.Mobile, value: 48 },
        { minWidth: Breakpoints.BigScreen, value: 80 },
        { minWidth: Breakpoints.Desktop, value: 60 },
        { minWidth: Breakpoints.Laptop, value: 60 },
        { minWidth: Breakpoints.Tablet, value: 60 },
      ],
      marginTop: 10,
      textAlign: 'center',
    },
    'action btn tablet 2': {
      backgroundColor: theme.colors.primary,
      borderRadius: 12,
      fontFamily: 'Inter_500Medium',
      fontSize: [
        { minWidth: Breakpoints.Mobile, value: 16 },
        { minWidth: Breakpoints.BigScreen, value: 24 },
        { minWidth: Breakpoints.Desktop, value: 20 },
        { minWidth: Breakpoints.Laptop, value: 20 },
        { minWidth: Breakpoints.Tablet, value: 20 },
      ],
      height: [
        { minWidth: Breakpoints.Mobile, value: 48 },
        { minWidth: Breakpoints.BigScreen, value: 80 },
        { minWidth: Breakpoints.Desktop, value: 60 },
        { minWidth: Breakpoints.Laptop, value: 60 },
        { minWidth: Breakpoints.Tablet, value: 60 },
      ],
      marginTop: 10,
      textAlign: 'center',
    },
    'action btn tablet 3': {
      backgroundColor: theme.colors.primary,
      borderRadius: 12,
      fontFamily: 'Inter_500Medium',
      fontSize: [
        { minWidth: Breakpoints.Mobile, value: 16 },
        { minWidth: Breakpoints.BigScreen, value: 24 },
        { minWidth: Breakpoints.Desktop, value: 20 },
        { minWidth: Breakpoints.Laptop, value: 20 },
        { minWidth: Breakpoints.Tablet, value: 20 },
      ],
      height: [
        { minWidth: Breakpoints.Mobile, value: 48 },
        { minWidth: Breakpoints.BigScreen, value: 80 },
        { minWidth: Breakpoints.Desktop, value: 60 },
        { minWidth: Breakpoints.Laptop, value: 60 },
        { minWidth: Breakpoints.Tablet, value: 60 },
      ],
      marginTop: 10,
      textAlign: 'center',
    },
  });

export const ImageStyles = theme =>
  StyleSheet.create({
    Image: { height: 100, width: 100 },
    'Image 2': { height: 100, width: 100 },
    'Image 3': { height: 100, width: 100 },
    'Image 4': { height: 100, width: 100 },
  });

export const SwitchRowStyles = theme =>
  StyleSheet.create({ 'Switch Row': { marginLeft: 0, marginRight: 0 } });

export const ActionSheetItemStyles = theme =>
  StyleSheet.create({ 'Action Sheet Item': { textAlign: 'center' } });

export const SwipeableItemStyles = theme =>
  StyleSheet.create({ 'Swipeable Item': { overflow: 'hidden' } });

export const SurfaceStyles = theme =>
  StyleSheet.create({ Surface: { minHeight: 40 } });

export const H6Styles = theme =>
  StyleSheet.create({
    H6: { color: theme.colors.strong, fontSize: 10.72, fontWeight: 'bold' },
  });

export const H5Styles = theme =>
  StyleSheet.create({
    H5: { color: theme.colors.strong, fontSize: 13.28, fontWeight: 'bold' },
  });

export const CheckboxRowStyles = theme =>
  StyleSheet.create({ 'Checkbox Row': { minHeight: 50 } });

export const H1Styles = theme =>
  StyleSheet.create({
    H1: { color: theme.colors.strong, fontSize: 32, fontWeight: 'bold' },
  });

export const FetchStyles = theme =>
  StyleSheet.create({ Fetch: { minHeight: 40 } });

export const H4Styles = theme =>
  StyleSheet.create({
    H4: { color: theme.colors.strong, fontSize: 16, fontWeight: 'bold' },
  });

export const CircleStyles = theme =>
  StyleSheet.create({
    Circle: {
      alignItems: 'center',
      backgroundColor: theme.colors.primary,
      justifyContent: 'center',
    },
  });

export const WebViewStyles = theme =>
  StyleSheet.create({ 'HTML View': { flex: 1 }, 'Web View': { flex: 1 } });

export const ActivityIndicatorStyles = theme =>
  StyleSheet.create({ 'Activity Indicator': { height: 36, width: 36 } });

export const LinkStyles = theme =>
  StyleSheet.create({ Link: { color: theme.colors.primary } });
