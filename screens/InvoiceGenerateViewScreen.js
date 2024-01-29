import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CotruckApi from '../apis/CotruckApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Link, ScreenContainer, WebView, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const InvoiceGenerateViewScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [url, setUrl] = React.useState([]);
  const cotruckSystemChargesPOST = CotruckApi.useSystemChargesPOST();
  const isFocused = useIsFocused();
  React.useEffect(() => {
    const handler = async () => {
      try {
        if (!isFocused) {
          return;
        }
        const response = (
          await cotruckSystemChargesPOST.mutateAsync({ operator_id: 125 })
        )?.json;
        console.log(response);
      } catch (err) {
        console.error(err);
      }
    };
    handler();
  }, [isFocused]);

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={true}
      hasTopSafeArea={true}
      scrollable={true}
    >
      <WebView
        allowUniversalAccessFromFileURLs={true}
        cacheEnabled={true}
        javaScriptEnabled={true}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        source={{ uri: `${Constants['myURL']}` }}
        style={StyleSheet.applyWidth(
          GlobalStyles.WebViewStyles(theme)['Web View'],
          dimensions.width
        )}
      />
      <Text
        accessible={true}
        allowFontScaling={true}
        style={StyleSheet.applyWidth(
          GlobalStyles.TextStyles(theme)['Text 2'],
          dimensions.width
        )}
      >
        {'asdf'}
      </Text>
    </ScreenContainer>
  );
};

export default withTheme(InvoiceGenerateViewScreen);
