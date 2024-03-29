import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CotruckApi from '../apis/CotruckApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
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
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const ManageVehicleScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={true}
      scrollable={false}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
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
            {'Manage Vehicle'}
          </Text>
        </View>
        {/* Add New */}
        <Button
          onPress={() => {
            try {
              navigation.navigate('AddNewVehicleScreen');
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

      <ScrollView
        bounces={true}
        keyboardShouldPersistTaps={'never'}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <CotruckApi.FetchOperatorVehicleListPOST
          operator_id={Constants['AUTH_OWNER_ID']}
        >
          {({ loading, error, data, refetchOperatorVehicleList }) => {
            const fetchData = data?.json;
            if (loading) {
              return (
                <>
                  {/* Loading View */}
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
                    {/* loading */}
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
                    {/* error */}
                    <Text
                      accessible={true}
                      allowFontScaling={true}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text 2'],
                          { fontSize: 16 }
                        ),
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
                contentContainerStyle={StyleSheet.applyWidth(
                  { flexDirection: 'column' },
                  dimensions.width
                )}
                data={fetchData?.data}
                keyExtractor={(listData, index) =>
                  listData?.id ?? listData?.uuid ?? index.toString()
                }
                listKey={'1MYH0n2p'}
                numColumns={1}
                onEndReachedThreshold={0.5}
                renderItem={({ item, index }) => {
                  const listData = item;
                  return (
                    <Touchable
                      onPress={() => {
                        try {
                          navigation.navigate('VehicleDetailsScreen', {
                            vehicle_status: listData?.status_of_vechile,
                            id: listData?.id,
                          });
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
                            {/* Vehicle Type */}
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
                              {listData?.vehicle_type}
                            </Text>
                            {/* Regi Number */}
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
                              {listData?.label}
                            </Text>
                          </View>
                          {/* Status */}
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
                            {listData?.status_of_vechile}
                          </Text>
                        </View>
                      </Surface>
                    </Touchable>
                  );
                }}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
              />
            );
          }}
        </CotruckApi.FetchOperatorVehicleListPOST>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(ManageVehicleScreen);
