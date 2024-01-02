import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
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
import { Text, View } from 'react-native';

const ManageVehicleScreen = props => {
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

      <Touchable
        onPress={() => {
          try {
            navigation.navigate('VehicleDetailsScreen');
          } catch (err) {
            console.error(err);
          }
        }}
      >
        <Surface
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.SurfaceStyles(theme)['Surface'], {
              alignItems: 'stretch',
              flexDirection: 'column',
              margin: 20,
              padding: 10,
            }),
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
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                    margin: 10,
                  }),
                  dimensions.width
                )}
              >
                {'20ft Container Truck'}
              </Text>
              {/* Text 2 */}
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                    margin: 10,
                  }),
                  dimensions.width
                )}
              >
                {'4567810'}
              </Text>
            </View>

            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                  color: theme.colors['CoTruckPending'],
                  fontFamily: 'System',
                  fontSize: 14,
                  fontWeight: '400',
                  margin: 10,
                }),
                dimensions.width
              )}
            >
              {'ASSIGNED'}
            </Text>
          </View>
        </Surface>
      </Touchable>
      {/* Touchable 2 */}
      <Touchable
        onPress={() => {
          try {
            navigation.navigate('VehicleDetailsScreen');
          } catch (err) {
            console.error(err);
          }
        }}
      >
        <Surface
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.SurfaceStyles(theme)['Surface'], {
              alignItems: 'stretch',
              flexDirection: 'column',
              margin: 20,
              padding: 10,
            }),
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
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                    margin: 10,
                  }),
                  dimensions.width
                )}
              >
                {'40ft Container Truck'}
              </Text>
              {/* Registration No. */}
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                    margin: 10,
                  }),
                  dimensions.width
                )}
              >
                {'250620'}
              </Text>
            </View>

            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                  color: theme.colors['CoTruckPending'],
                  fontFamily: 'System',
                  fontSize: 14,
                  fontWeight: '400',
                  margin: 10,
                }),
                dimensions.width
              )}
            >
              {'ASSIGNED'}
            </Text>
          </View>
        </Surface>
      </Touchable>
      {/* Touchable 3 */}
      <Touchable
        onPress={() => {
          try {
            navigation.navigate('VehicleDetailsScreen');
          } catch (err) {
            console.error(err);
          }
        }}
      >
        <Surface
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.SurfaceStyles(theme)['Surface'], {
              alignItems: 'stretch',
              flexDirection: 'column',
              margin: 20,
              padding: 10,
            }),
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
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                    margin: 10,
                  }),
                  dimensions.width
                )}
              >
                {'20ft Container Truck'}
              </Text>
              {/* Registration No. */}
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                    margin: 10,
                  }),
                  dimensions.width
                )}
              >
                {'htet shine truck'}
              </Text>
            </View>

            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                  color: theme.colors['CoTruckPending'],
                  fontFamily: 'System',
                  fontSize: 14,
                  fontWeight: '400',
                  margin: 10,
                }),
                dimensions.width
              )}
            >
              {'ASSIGNED'}
            </Text>
          </View>
        </Surface>
      </Touchable>
      {/* Touchable 4 */}
      <Touchable>
        <Surface
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.SurfaceStyles(theme)['Surface'], {
              alignItems: 'stretch',
              flexDirection: 'column',
              margin: 20,
              padding: 10,
            }),
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
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                    margin: 10,
                  }),
                  dimensions.width
                )}
              >
                {'20ft Container Truck'}
              </Text>
              {/* Text 2 */}
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                    margin: 10,
                  }),
                  dimensions.width
                )}
              >
                {'4567810'}
              </Text>
            </View>

            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                  color: theme.colors['CoTruckPending'],
                  fontFamily: 'System',
                  fontSize: 14,
                  fontWeight: '400',
                  margin: 10,
                }),
                dimensions.width
              )}
            >
              {'ASSIGNED'}
            </Text>
          </View>
        </Surface>
      </Touchable>
      {/* Touchable 5 */}
      <Touchable>
        <Surface
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.SurfaceStyles(theme)['Surface'], {
              alignItems: 'stretch',
              flexDirection: 'column',
              margin: 20,
              padding: 10,
            }),
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
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                    margin: 10,
                  }),
                  dimensions.width
                )}
              >
                {'20ft Container Truck'}
              </Text>
              {/* Text 2 */}
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                    margin: 10,
                  }),
                  dimensions.width
                )}
              >
                {'4567810'}
              </Text>
            </View>

            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                  color: theme.colors['CoTruckPending'],
                  fontFamily: 'System',
                  fontSize: 14,
                  fontWeight: '400',
                  margin: 10,
                }),
                dimensions.width
              )}
            >
              {'ASSIGNED'}
            </Text>
          </View>
        </Surface>
      </Touchable>
      {/* Touchable 6 */}
      <Touchable>
        <Surface
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.SurfaceStyles(theme)['Surface'], {
              alignItems: 'stretch',
              flexDirection: 'column',
              margin: 20,
              padding: 10,
            }),
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
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                    margin: 10,
                  }),
                  dimensions.width
                )}
              >
                {'20ft Container Truck'}
              </Text>
              {/* Text 2 */}
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                    margin: 10,
                  }),
                  dimensions.width
                )}
              >
                {'4567810'}
              </Text>
            </View>

            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                  color: theme.colors['CoTruckPending'],
                  fontFamily: 'System',
                  fontSize: 14,
                  fontWeight: '400',
                  margin: 10,
                }),
                dimensions.width
              )}
            >
              {'ASSIGNED'}
            </Text>
          </View>
        </Surface>
      </Touchable>
      {/* Touchable 7 */}
      <Touchable>
        <Surface
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.SurfaceStyles(theme)['Surface'], {
              alignItems: 'stretch',
              flexDirection: 'column',
              margin: 20,
              padding: 10,
            }),
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
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                    margin: 10,
                  }),
                  dimensions.width
                )}
              >
                {'20ft Container Truck'}
              </Text>
              {/* Text 2 */}
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                    margin: 10,
                  }),
                  dimensions.width
                )}
              >
                {'4567810'}
              </Text>
            </View>

            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                  color: theme.colors['CoTruckPending'],
                  fontFamily: 'System',
                  fontSize: 14,
                  fontWeight: '400',
                  margin: 10,
                }),
                dimensions.width
              )}
            >
              {'ASSIGNED'}
            </Text>
          </View>
        </Surface>
      </Touchable>
      {/* Touchable 8 */}
      <Touchable>
        <Surface
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.SurfaceStyles(theme)['Surface'], {
              alignItems: 'stretch',
              flexDirection: 'column',
              margin: 20,
              padding: 10,
            }),
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
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                    margin: 10,
                  }),
                  dimensions.width
                )}
              >
                {'20ft Container Truck'}
              </Text>
              {/* Text 2 */}
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                    margin: 10,
                  }),
                  dimensions.width
                )}
              >
                {'4567810'}
              </Text>
            </View>

            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'], {
                  color: theme.colors['CoTruckPending'],
                  fontFamily: 'System',
                  fontSize: 14,
                  fontWeight: '400',
                  margin: 10,
                }),
                dimensions.width
              )}
            >
              {'ASSIGNED'}
            </Text>
          </View>
        </Surface>
      </Touchable>
    </ScreenContainer>
  );
};

export default withTheme(ManageVehicleScreen);
