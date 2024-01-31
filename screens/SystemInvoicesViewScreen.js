import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CotruckApi from '../apis/CotruckApi.js';
import Header2Block from '../components/Header2Block';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { ScreenContainer, WebView, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const SystemInvoicesViewScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const [url, setUrl] = React.useState([]);

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={true}
      hasTopSafeArea={true}
      scrollable={true}
    >
      {/* Header */}
      <Header2Block title={'Generated Invoices'} />
      <CotruckApi.FetchGenerateInvoicesGET
        handlers={{
          onData: fetchData => {
            try {
              console.log(fetchData, fetchData?.data?.value);
            } catch (err) {
              console.error(err);
            }
          },
        }}
      >
        {({ loading, error, data, refetchGenerateInvoices }) => {
          const fetchData = data?.json;
          if (loading) {
            return (
              <>
                {/* View 2 */}
                <View
                  style={StyleSheet.applyWidth(
                    { alignItems: 'center', flex: 1, justifyContent: 'center' },
                    dimensions.width
                  )}
                >
                  <ActivityIndicator
                    animating={true}
                    color={theme.colors['Primary']}
                    hidesWhenStopped={true}
                    size={'large'}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.ActivityIndicatorStyles(theme)[
                        'Activity Indicator'
                      ],
                      dimensions.width
                    )}
                  />
                </View>
              </>
            );
          }

          if (error || data?.status < 200 || data?.status >= 300) {
            return (
              <View>
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.TextStyles(theme)['Text 2'],
                    dimensions.width
                  )}
                >
                  {fetchData}
                </Text>
              </View>
            );
          }

          return (
            <>
              {/* Web View 2 */}
              <WebView
                cacheEnabled={true}
                javaScriptEnabled={true}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
                source={{ uri: `${fetchData?.data?.value}` }}
                style={StyleSheet.applyWidth(
                  GlobalStyles.WebViewStyles(theme)['Web View'],
                  dimensions.width
                )}
              />
            </>
          );
        }}
      </CotruckApi.FetchGenerateInvoicesGET>
    </ScreenContainer>
  );
};

export default withTheme(SystemInvoicesViewScreen);
