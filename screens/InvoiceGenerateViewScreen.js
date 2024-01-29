import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { ScreenContainer, WebView, withTheme } from '@draftbit/ui';

const InvoiceGenerateViewScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <WebView
        allowUniversalAccessFromFileURLs={true}
        cacheEnabled={true}
        javaScriptEnabled={true}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        source={{
          uri: 'https://dev.cotruck.co/index.php/operator/generated_invoices',
        }}
        style={StyleSheet.applyWidth(
          GlobalStyles.WebViewStyles(theme)['Web View'],
          dimensions.width
        )}
      />
    </ScreenContainer>
  );
};

export default withTheme(InvoiceGenerateViewScreen);
