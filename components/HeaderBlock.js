import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, Touchable, withTheme } from '@draftbit/ui';
import { useNavigation } from '@react-navigation/native';
import { Text, View, useWindowDimensions } from 'react-native';

const HeaderBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <View
      style={StyleSheet.applyWidth(
        { alignItems: 'center', flexDirection: 'row', marginLeft: 20 },
        dimensions.width
      )}
    >
      {/* Icon Button */}
      <View style={StyleSheet.applyWidth({ marginLeft: 10 }, dimensions.width)}>
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
      <View style={StyleSheet.applyWidth({ marginLeft: 10 }, dimensions.width)}>
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
          {'Sign Up'}
        </Text>
      </View>
    </View>
  );
};

export default withTheme(HeaderBlock);
