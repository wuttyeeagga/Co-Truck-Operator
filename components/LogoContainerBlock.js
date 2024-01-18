import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { withTheme } from '@draftbit/ui';
import { Image, View } from 'react-native';

const LogoContainerBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        { alignItems: 'center', justifyContent: 'center', margin: 20 },
        dimensions.width
      )}
    >
      <Image
        resizeMode={'cover'}
        source={Images.Icon}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
            height: 150,
            marginBottom: 10,
            marginTop: 10,
            width: 150,
          }),
          dimensions.width
        )}
      />
    </View>
  );
};

export default withTheme(LogoContainerBlock);
