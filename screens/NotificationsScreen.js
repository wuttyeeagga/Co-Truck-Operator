import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CotruckApi from '../apis/CotruckApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const NotificationsScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={true}
      scrollable={true}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          { alignItems: 'center', flexDirection: 'row', margin: 20 },
          dimensions.width
        )}
      >
        {/* Icon Button */}
        <View
          style={StyleSheet.applyWidth({ marginLeft: 10 }, dimensions.width)}
        >
          <Touchable
            onPress={() => {
              try {
                navigation.goBack();
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Icon name={'MaterialIcons/arrow-back-ios'} size={30} />
          </Touchable>
        </View>
        {/* Title View */}
        <View
          style={StyleSheet.applyWidth({ marginLeft: 10 }, dimensions.width)}
        >
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 3'], {
                color: theme.colors['CoTruckBlack'],
                fontFamily: 'System',
                fontSize: 20,
                fontWeight: '400',
              }),
              dimensions.width
            )}
          >
            {'Notifications'}
          </Text>
        </View>
      </View>

      <CotruckApi.FetchNotificationsPOST user_id={Constants['AUTH_OWNER_ID']}>
        {({ loading, error, data, refetchNotifications }) => {
          const fetchData = data?.json;
          if (loading) {
            return (
              <>
                {/* loading */}
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
              <>
                {/* error */}
                <View
                  style={StyleSheet.applyWidth(
                    { alignItems: 'center', flex: 1, justifyContent: 'center' },
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
              inverted={true}
              keyExtractor={listData =>
                listData?.id || listData?.uuid || JSON.stringify(listData)
              }
              listKey={'jHy0kwrU'}
              numColumns={1}
              onEndReachedThreshold={0.5}
              renderItem={({ item, index }) => {
                const listData = item;
                return (
                  <>
                    {/* Noti Card */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          borderColor: theme.colors['Light'],
                          borderRadius: 12,
                          borderWidth: 1,
                          margin: 20,
                        },
                        dimensions.width
                      )}
                    >
                      {/* Message View */}
                      <View
                        style={StyleSheet.applyWidth(
                          { marginLeft: 10 },
                          dimensions.width
                        )}
                      >
                        {/* Message  */}
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'],
                              { margin: 10 }
                            ),
                            dimensions.width
                          )}
                        >
                          {listData?.message}
                        </Text>
                      </View>
                      {/* View 2 */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'flex-end',
                            justifyContent: 'flex-start',
                            marginRight: 10,
                          },
                          dimensions.width
                        )}
                      >
                        {/* Date */}
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'],
                              { color: theme.colors['CoTruckGrey'], margin: 10 }
                            ),
                            dimensions.width
                          )}
                        >
                          {listData?.date}
                        </Text>
                      </View>
                    </View>
                  </>
                );
              }}
              showsHorizontalScrollIndicator={true}
              showsVerticalScrollIndicator={true}
            />
          );
        }}
      </CotruckApi.FetchNotificationsPOST>
    </ScreenContainer>
  );
};

export default withTheme(NotificationsScreen);
