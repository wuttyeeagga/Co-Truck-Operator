import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const SampleRowBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 10,
        },
        dimensions.width
      )}
    >
      <Text
        accessible={true}
        allowFontScaling={true}
        style={StyleSheet.applyWidth(
          GlobalStyles.TextStyles(theme)['Text 2'],
          dimensions.width
        )}
      >
        {'Name'}
      </Text>
      <Icon name={'Entypo/dots-two-vertical'} size={20} />
      {/* Text 2 */}
      <Text
        accessible={true}
        allowFontScaling={true}
        style={StyleSheet.applyWidth(
          GlobalStyles.TextStyles(theme)['Text 2'],
          dimensions.width
        )}
      >
        {'Toperator comp 1'}
      </Text>
    </View>
  );
};

export default withTheme(SampleRowBlock);
