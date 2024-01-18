import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, Pressable, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const PointDetailsBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <Pressable>
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
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
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
              color: theme.colors['bordercolor'],
              fontSize: 16,
              marginLeft: 10,
              marginRight: 10,
            }),
            dimensions.width
          )}
        >
          {'Pickup point location'}
        </Text>
      </View>
    </Pressable>
  );
};

export default withTheme(PointDetailsBlock);
