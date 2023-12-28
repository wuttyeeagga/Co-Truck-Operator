import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CotruckApi from '../apis/CotruckApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const Test1Screen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      style={StyleSheet.applyWidth(
        {
          alignItems: 'center',
          backgroundColor: theme.colors['Surface'],
          flex: 1,
          justifyContent: 'center',
        },
        dimensions.width
      )}
    >
      <View style={StyleSheet.applyWidth({ margin: 10 }, dimensions.width)}>
        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            GlobalStyles.TextStyles(theme)['Text 3'],
            dimensions.width
          )}
        >
          {Constants['test']}
        </Text>
      </View>
      {/* View 2 */}
      <View
        style={StyleSheet.applyWidth(
          { marginBottom: 10, marginTop: 10 },
          dimensions.width
        )}
      >
        <Button
          onPress={() => {
            const handler = async () => {
              console.log('Button ON_PRESS Start');
              let error = null;
              try {
                console.log('Start ON_PRESS:0 FETCH_REQUEST');
                const asdf = (await CotruckApi.testGET(Constants))?.json;
                console.log('Complete ON_PRESS:0 FETCH_REQUEST', { asdf });
                console.log('Start ON_PRESS:1 SET_VARIABLE');
                const gawp = setGlobalVariableValue({
                  key: 'test',
                  value: asdf,
                });
                console.log('Complete ON_PRESS:1 SET_VARIABLE', { gawp });
                console.log('Start ON_PRESS:2 CONSOLE_LOG');
                console.log(asdf, Constants['test'], gawp);
                console.log('Complete ON_PRESS:2 CONSOLE_LOG');
              } catch (err) {
                console.error(err);
                error = err.message ?? err;
              }
              console.log(
                'Button ON_PRESS Complete',
                error ? { error } : 'no error'
              );
            };
            handler();
          }}
          style={StyleSheet.applyWidth(
            GlobalStyles.ButtonStyles(theme)['Button'],
            dimensions.width
          )}
          title={'Back'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(Test1Screen);
