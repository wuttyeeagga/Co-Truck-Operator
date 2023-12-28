import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { TextInput, withTheme } from '@draftbit/ui';
import { View, useWindowDimensions } from 'react-native';

const InfoRowBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
        dimensions.width
      )}
    >
      {/* Contact Person Name */}
      <TextInput
        autoCapitalize={'none'}
        placeholder={'Company Name'}
        placeholderTextColor={theme.colors['Light']}
        style={StyleSheet.applyWidth(
          {
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderBottomWidth: 1,
            borderColor: theme.colors['Light'],
            borderLeftWidth: 1,
            borderRadius: 12,
            borderRightWidth: 1,
            borderTopWidth: 1,
            fontFamily: 'Inter_400Regular',
            height: 48,
            marginTop: 10,
            paddingBottom: 8,
            paddingLeft: 20,
            paddingRight: 8,
            paddingTop: 8,
            width: '48%',
          },
          dimensions.width
        )}
      />
      {/* Mobile Number */}
      <TextInput
        autoCapitalize={'none'}
        placeholder={'Company Name'}
        placeholderTextColor={theme.colors['Light']}
        style={StyleSheet.applyWidth(
          {
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderBottomWidth: 1,
            borderColor: theme.colors['Light'],
            borderLeftWidth: 1,
            borderRadius: 12,
            borderRightWidth: 1,
            borderTopWidth: 1,
            fontFamily: 'Inter_400Regular',
            height: 48,
            marginTop: 10,
            paddingBottom: 8,
            paddingLeft: 20,
            paddingRight: 8,
            paddingTop: 8,
            width: '48%',
          },
          dimensions.width
        )}
      />
    </View>
  );
};

export default withTheme(InfoRowBlock);
