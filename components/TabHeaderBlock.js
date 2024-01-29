import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, Touchable, withTheme } from '@draftbit/ui';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

const TabHeaderBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 20,
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
          {/* Title */}
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
            {props.Title ?? ''}
          </Text>
        </View>
      </View>

      <Touchable
        onPress={() => {
          try {
            navigation.navigate('NotificationsScreen');
          } catch (err) {
            console.error(err);
          }
        }}
      >
        <Icon
          color={theme.colors['CoTruckGrey']}
          name={'Ionicons/ios-notifications-outline'}
          size={30}
          style={StyleSheet.applyWidth({ opacity: 0.5 }, dimensions.width)}
        />
      </Touchable>
    </View>
  );
};

export default withTheme(TabHeaderBlock);
