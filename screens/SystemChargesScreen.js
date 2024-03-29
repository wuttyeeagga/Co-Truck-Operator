import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CotruckApi from '../apis/CotruckApi.js';
import Header2Block from '../components/Header2Block';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { ScreenContainer, WebView, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const SystemChargesScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
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
      scrollable={false}
    >
      {/* Header */}
      <Header2Block title={'System Charges'} />
      <ScrollView
        bounces={true}
        keyboardShouldPersistTaps={'never'}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
      >
        <CotruckApi.FetchSystemChargesPOST
          operator_id={Constants['AUTH_OWNER_ID']}
        >
          {({ loading, error, data, refetchSystemCharges }) => {
            const fetchData = data?.json;
            if (loading) {
              return (
                <>
                  {/* loading */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        flex: 1,
                        justifyContent: 'center',
                      },
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
                <>
                  {/* error */}
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
                </>
              );
            }

            return (
              <>
                {/* System Charges Web View */}
                <WebView
                  cacheEnabled={true}
                  javaScriptEnabled={true}
                  showsHorizontalScrollIndicator={true}
                  showsVerticalScrollIndicator={true}
                  source={{ uri: `${fetchData}` }}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.WebViewStyles(theme)['Web View'],
                    dimensions.width
                  )}
                />
              </>
            );
          }}
        </CotruckApi.FetchSystemChargesPOST>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(SystemChargesScreen);
