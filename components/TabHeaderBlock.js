import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, Touchable, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const TabHeaderBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
          padding: 20,
        },
        dimensions.width
      )}
    >
      <View
        style={StyleSheet.applyWidth(
          { alignItems: 'center', flexDirection: 'row' },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth({ marginLeft: 10 }, dimensions.width)}
        >
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Inter_500Medium',
                fontSize: 17,
              },
              dimensions.width
            )}
          >
            {'Home Screen'}
          </Text>
        </View>
      </View>

      <Touchable>
        <Icon
          name={'Ionicons/ios-notifications-outline'}
          size={24}
          style={StyleSheet.applyWidth({ opacity: 0.5 }, dimensions.width)}
        />
      </Touchable>
    </View>
  );
};

export default withTheme(TabHeaderBlock);
