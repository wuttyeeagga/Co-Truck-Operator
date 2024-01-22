import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CotruckApi from '../apis/CotruckApi.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  IconButton,
  ScreenContainer,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const ManageDriverScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={true}
      scrollable={true}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 10,
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
          {/* Back Button */}
          <IconButton
            color={theme.colors['CoTruckBlack']}
            icon={'MaterialIcons/arrow-back-ios'}
            onPress={() => {
              try {
                navigation.goBack();
              } catch (err) {
                console.error(err);
              }
            }}
            size={32}
          />
          {/* Title */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                color: theme.colors['CoTruckBlack'],
                fontFamily: 'System',
                fontSize: 20,
                fontWeight: '400',
              }),
              dimensions.width
            )}
          >
            {'Manage Driver'}
          </Text>
        </View>
        {/* Add New */}
        <Button
          onPress={() => {
            try {
              navigation.navigate('AddNewDriverScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
              fontSize: 12,
              textAlign: 'right',
            }),
            dimensions.width
          )}
          title={'Add New'}
        />
      </View>

      <CotruckApi.FetchOperatorDriverListPOST operator_id={120}>
        {({ loading, error, data, refetchOperatorDriverList }) => {
          const fetchData = data?.json;
          if (loading) {
            return (
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
            );
          }

          if (error || data?.status < 200 || data?.status >= 300) {
            return (
              <>
                {/* View 2 */}
                <View
                  style={StyleSheet.applyWidth(
                    { alignItems: 'center', flex: 1, justifyContent: 'center' },
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
                    {fetchData?.message}
                  </Text>
                </View>
              </>
            );
          }

          return (
            <FlatList
              data={fetchData?.data}
              keyExtractor={listData =>
                listData?.id || listData?.uuid || JSON.stringify(listData)
              }
              listKey={'PHh3S0pv'}
              numColumns={1}
              onEndReachedThreshold={0.5}
              renderItem={({ item, index }) => {
                const listData = item;
                return (
                  <View>
                    <Touchable
                      onPress={() => {
                        try {
                          navigation.navigate('DriverDetailsScreen');
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <Surface
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.SurfaceStyles(theme)['Surface'],
                            {
                              alignItems: 'stretch',
                              flexDirection: 'column',
                              margin: 20,
                              padding: 10,
                            }
                          ),
                          dimensions.width
                        )}
                      >
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
                          <View>
                            <Text
                              accessible={true}
                              allowFontScaling={true}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Text 2'],
                                  { margin: 10 }
                                ),
                                dimensions.width
                              )}
                            >
                              {listData?.name}
                            </Text>
                            {/* Text 2 */}
                            <Text
                              accessible={true}
                              allowFontScaling={true}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Text 2'],
                                  { margin: 10 }
                                ),
                                dimensions.width
                              )}
                            >
                              {listData?.mobile}
                            </Text>
                          </View>

                          <Text
                            accessible={true}
                            allowFontScaling={true}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text 2'],
                                {
                                  color: theme.colors['CoTruckPending'],
                                  fontFamily: 'System',
                                  fontSize: 14,
                                  fontWeight: '400',
                                  margin: 10,
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {listData?.status_of_driver}
                          </Text>
                        </View>
                      </Surface>
                    </Touchable>
                  </View>
                );
              }}
              showsHorizontalScrollIndicator={true}
              showsVerticalScrollIndicator={true}
            />
          );
        }}
      </CotruckApi.FetchOperatorDriverListPOST>
    </ScreenContainer>
  );
};

export default withTheme(ManageDriverScreen);
