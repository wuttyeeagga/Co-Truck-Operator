import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { IconButton, withTheme } from '@draftbit/ui';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

const Header2Block = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <View
      style={StyleSheet.applyWidth(
        { alignItems: 'center', flexDirection: 'row' },
        dimensions.width
      )}
    >
      {/* Back Button */}
      <IconButton
        color={theme.colors['CoTruckBlack']}
        icon={'MaterialIcons/arrow-back-ios'}
        onPress={() => {
          try {
            navigation.goBack();
          } catch (err) {
            console.error(err);
          }
        }}
        size={32}
        style={StyleSheet.applyWidth({ marginLeft: 30 }, dimensions.width)}
      />
      {/* Title */}
      <Text
        accessible={true}
        allowFontScaling={true}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
            color: theme.colors['CoTruckBlack'],
            fontFamily: 'System',
            fontSize: 20,
            fontWeight: '400',
            marginLeft: 10,
          }),
          dimensions.width
        )}
      >
        {'Vehicle Details'}
      </Text>
    </View>
  );
};

export default withTheme(Header2Block);
