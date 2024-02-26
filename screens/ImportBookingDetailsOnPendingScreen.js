import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CotruckApi from '../apis/CotruckApi.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  Divider,
  Icon,
  IconButton,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import { ActivityIndicator, Image, ScrollView, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const ImportBookingDetailsOnPendingScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [checkboxRow2Value, setCheckboxRow2Value] = React.useState('');
  const [checkboxRow3Value, setCheckboxRow3Value] = React.useState('');
  const [checkboxRow4Value, setCheckboxRow4Value] = React.useState('');
  const [checkboxRow5Value, setCheckboxRow5Value] = React.useState('');
  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');
  const [styledTextAreaValue, setStyledTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
      /* 'Conditional Stop' action requires configuration: select Check Value */
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={true}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors['Surface'] },
        dimensions.width
      )}
    >
      {/* My Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            margin: 20,
            marginLeft: 20,
            marginTop: 20,
          },
          dimensions.width
        )}
      >
        <Touchable
          onPress={() => {
            try {
              navigation.goBack();
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth({ marginLeft: 10 }, dimensions.width)}
        >
          <Icon name={'MaterialIcons/arrow-back-ios'} size={30} />
        </Touchable>

        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
              fontSize: 20,
              marginLeft: 10,
            }),
            dimensions.width
          )}
        >
          {'Booking Details'}
        </Text>
      </View>

      <ScrollView
        bounces={true}
        contentContainerStyle={StyleSheet.applyWidth(
          { flex: 1 },
          dimensions.width
        )}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
      >
        <CotruckApi.FetchBookingDetailPOST
          book_truck_id={props.route?.params?.book_truck_id ?? ''}
        >
          {({ loading, error, data, refetchBookingDetail }) => {
            const fetchData = data?.json;
            if (loading) {
              return (
                <>
                  {/* loading View */}
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
              return <ActivityIndicator />;
            }

            return (
              <>
                {/* Status View */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      margin: 10,
                    },
                    dimensions.width
                  )}
                >
                  {/* Booking ID */}
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text 3'],
                        { color: theme.colors['CoTruckGrey'] }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Booking ID : '}
                    {fetchData?.data?.book_truck_id}
                  </Text>
                  {/* Status */}
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text 2'],
                        { color: theme.colors['Success'] }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Status : '}
                    {fetchData?.data?.status}
                  </Text>
                </View>
                <Divider
                  color={theme.colors.divider}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.DividerStyles(theme)['Divider'],
                      {
                        marginBottom: 5,
                        marginLeft: 20,
                        marginRight: 20,
                        marginTop: 5,
                      }
                    ),
                    dimensions.width
                  )}
                />
                {/* Shipper Row */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      margin: 20,
                    },
                    dimensions.width
                  )}
                >
                  {/* Row Wrapper */}
                  <View
                    style={StyleSheet.applyWidth(
                      { alignItems: 'center', flexDirection: 'row' },
                      dimensions.width
                    )}
                  >
                    {/* Image View */}
                    <View
                      style={StyleSheet.applyWidth(
                        { margin: 5 },
                        dimensions.width
                      )}
                    >
                      <Image
                        resizeMode={'cover'}
                        source={{
                          uri: `${fetchData?.data?.shipper_info?.user_image}`,
                        }}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.ImageStyles(theme)['Image 3'],
                            { height: 60, width: 60 }
                          ),
                          dimensions.width
                        )}
                      />
                    </View>
                    {/* Name and Mobile */}
                    <View
                      style={StyleSheet.applyWidth(
                        { marginLeft: 20 },
                        dimensions.width
                      )}
                    >
                      {/* Shipper Name */}
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text 2'],
                            { margin: 5 }
                          ),
                          dimensions.width
                        )}
                      >
                        {fetchData?.data?.shipper_info?.name}
                      </Text>
                      {/* Shipper Mobile */}
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text 2'],
                            { margin: 5 }
                          ),
                          dimensions.width
                        )}
                      >
                        {fetchData?.data?.shipper_info?.mobile}
                      </Text>
                    </View>
                  </View>
                  {/* View 2 */}
                  <View
                    style={StyleSheet.applyWidth(
                      { alignItems: 'center', justifyContent: 'center' },
                      dimensions.width
                    )}
                  >
                    {/* Call Button */}
                    <IconButton
                      icon={'Feather/phone'}
                      onPress={() => {
                        try {
                          Linking.openURL(
                            `tel:${fetchData?.data?.shipper_info?.mobile}`
                          );
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      size={32}
                      style={StyleSheet.applyWidth(
                        {
                          marginBottom: 10,
                          marginLeft: 10,
                          marginRight: 10,
                          marginTop: 10,
                        },
                        dimensions.width
                      )}
                    />
                  </View>
                </View>
                {/* Divider 2 */}
                <Divider
                  color={theme.colors.divider}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.DividerStyles(theme)['Divider'],
                      {
                        marginBottom: 5,
                        marginLeft: 20,
                        marginRight: 20,
                        marginTop: 5,
                      }
                    ),
                    dimensions.width
                  )}
                />
                {/* Location Container */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      flexDirection: 'row',
                      marginBottom: 10,
                      marginLeft: 20,
                      marginRight: 20,
                      marginTop: 10,
                    },
                    dimensions.width
                  )}
                >
                  {/* Pickup Location View */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '30%',
                      },
                      dimensions.width
                    )}
                  >
                    {/* Pickup Location */}
                    <Text
                      accessible={true}
                      allowFontScaling={true}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text 2'],
                          { fontSize: 12, margin: 5 }
                        ),
                        dimensions.width
                      )}
                    >
                      {fetchData?.data?.pickup_location}
                    </Text>
                  </View>
                  {/* Icon View */}
                  <View>
                    <Icon
                      color={theme.colors['CoTruckBlack']}
                      name={'AntDesign/swap'}
                      size={20}
                    />
                  </View>
                  {/* Drop Location View */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '30%',
                      },
                      dimensions.width
                    )}
                  >
                    {/* Drop Location */}
                    <Text
                      accessible={true}
                      allowFontScaling={true}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text 2'],
                          { fontSize: 12, margin: 5 }
                        ),
                        dimensions.width
                      )}
                    >
                      {fetchData?.data?.drop_location}
                    </Text>
                  </View>
                  {/* Icon View */}
                  <View>
                    <Icon
                      color={theme.colors['CoTruckBlack']}
                      name={'AntDesign/swap'}
                      size={20}
                    />
                  </View>
                  {/* Depot Location View */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '30%',
                      },
                      dimensions.width
                    )}
                  >
                    {/* Depot Location */}
                    <Text
                      accessible={true}
                      allowFontScaling={true}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text 2'],
                          { fontSize: 12, margin: 5 }
                        ),
                        dimensions.width
                      )}
                    >
                      {fetchData?.data?.depot_location}
                    </Text>
                  </View>
                </View>
                {/* Invoice */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors['Surface'],
                      marginBottom: 10,
                      marginLeft: 20,
                      marginRight: 20,
                      marginTop: 10,
                    },
                    dimensions.width
                  )}
                >
                  <View>
                    {/* Row View */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          flexDirection: 'row',
                          marginBottom: 10,
                          marginTop: 10,
                        },
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          { width: '45%' },
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text 3'],
                              {
                                color: theme.colors['TextPlaceholder'],
                                fontSize: 16,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'Truck Type'}
                        </Text>
                      </View>
                      {/* View 2 */}
                      <View
                        style={StyleSheet.applyWidth(
                          { width: '5%' },
                          dimensions.width
                        )}
                      >
                        <Icon
                          color={theme.colors['Light']}
                          name={'Entypo/dots-two-vertical'}
                          size={16}
                        />
                      </View>
                      {/* View 3 */}
                      <View
                        style={StyleSheet.applyWidth(
                          { width: '45%' },
                          dimensions.width
                        )}
                      >
                        {/* Text 2 */}
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text 3'],
                              { fontSize: 16 }
                            ),
                            dimensions.width
                          )}
                        >
                          {fetchData?.data?.vehicle_type}
                        </Text>
                      </View>
                    </View>
                    <Divider
                      color={theme.colors['Tab_Divider']}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.DividerStyles(theme)['Divider'],
                          { height: 2, marginTop: 5 }
                        ),
                        dimensions.width
                      )}
                    />
                  </View>
                  {/* View 2 */}
                  <View>
                    {/* Row View */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          flexDirection: 'row',
                          marginBottom: 10,
                          marginTop: 10,
                        },
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          { width: '45%' },
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text 3'],
                              {
                                color: theme.colors['TextPlaceholder'],
                                fontSize: 16,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'Type of material'}
                        </Text>
                      </View>
                      {/* View 2 */}
                      <View
                        style={StyleSheet.applyWidth(
                          { width: '5%' },
                          dimensions.width
                        )}
                      >
                        <Icon
                          color={theme.colors['Light']}
                          name={'Entypo/dots-two-vertical'}
                          size={16}
                        />
                      </View>
                      {/* View 3 */}
                      <View
                        style={StyleSheet.applyWidth(
                          { width: '45%' },
                          dimensions.width
                        )}
                      >
                        {/* Text 2 */}
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text 3'],
                              { fontSize: 16 }
                            ),
                            dimensions.width
                          )}
                        >
                          {fetchData?.data?.material_type}
                        </Text>
                      </View>
                    </View>
                    <Divider
                      color={theme.colors['Tab_Divider']}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.DividerStyles(theme)['Divider'],
                          { height: 2, marginTop: 5 }
                        ),
                        dimensions.width
                      )}
                    />
                  </View>
                  {/* View 3 */}
                  <View>
                    {/* Row View */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          flexDirection: 'row',
                          marginBottom: 10,
                          marginTop: 10,
                        },
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          { width: '45%' },
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text 3'],
                              {
                                color: theme.colors['TextPlaceholder'],
                                fontSize: 16,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'Per Container Weight (Ton)'}
                        </Text>
                      </View>
                      {/* View 2 */}
                      <View
                        style={StyleSheet.applyWidth(
                          { width: '5%' },
                          dimensions.width
                        )}
                      >
                        <Icon
                          color={theme.colors['Light']}
                          name={'Entypo/dots-two-vertical'}
                          size={16}
                        />
                      </View>
                      {/* View 3 */}
                      <View
                        style={StyleSheet.applyWidth(
                          { width: '45%' },
                          dimensions.width
                        )}
                      >
                        {/* Text 2 */}
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text 3'],
                              { fontSize: 16 }
                            ),
                            dimensions.width
                          )}
                        >
                          {fetchData?.data?.load_weight}
                        </Text>
                      </View>
                    </View>
                    <Divider
                      color={theme.colors['Tab_Divider']}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.DividerStyles(theme)['Divider'],
                          { height: 2, marginTop: 5 }
                        ),
                        dimensions.width
                      )}
                    />
                  </View>
                  {/* View 4 */}
                  <View>
                    {/* Row View */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          flexDirection: 'row',
                          marginBottom: 10,
                          marginTop: 10,
                        },
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          { width: '45%' },
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text 3'],
                              {
                                color: theme.colors['TextPlaceholder'],
                                fontSize: 16,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'No of container'}
                        </Text>
                      </View>
                      {/* View 2 */}
                      <View
                        style={StyleSheet.applyWidth(
                          { width: '5%' },
                          dimensions.width
                        )}
                      >
                        <Icon
                          color={theme.colors['Light']}
                          name={'Entypo/dots-two-vertical'}
                          size={16}
                        />
                      </View>
                      {/* View 3 */}
                      <View
                        style={StyleSheet.applyWidth(
                          { width: '45%' },
                          dimensions.width
                        )}
                      >
                        {/* Text 2 */}
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text 3'],
                              { fontSize: 16 }
                            ),
                            dimensions.width
                          )}
                        >
                          {fetchData?.data?.no_of_truck}
                        </Text>
                      </View>
                    </View>
                    <Divider
                      color={theme.colors['Tab_Divider']}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.DividerStyles(theme)['Divider'],
                          { height: 2, marginTop: 5 }
                        ),
                        dimensions.width
                      )}
                    />
                  </View>
                  {/* View 5 */}
                  <View>
                    {/* Row View */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          flexDirection: 'row',
                          marginBottom: 10,
                          marginTop: 10,
                        },
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          { width: '45%' },
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text 3'],
                              {
                                color: theme.colors['TextPlaceholder'],
                                fontSize: 16,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'Product type'}
                        </Text>
                      </View>
                      {/* View 2 */}
                      <View
                        style={StyleSheet.applyWidth(
                          { width: '5%' },
                          dimensions.width
                        )}
                      >
                        <Icon
                          color={theme.colors['Light']}
                          name={'Entypo/dots-two-vertical'}
                          size={16}
                        />
                      </View>
                      {/* View 3 */}
                      <View
                        style={StyleSheet.applyWidth(
                          { width: '45%' },
                          dimensions.width
                        )}
                      >
                        {/* Text 2 */}
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text 3'],
                              { fontSize: 16 }
                            ),
                            dimensions.width
                          )}
                        >
                          {fetchData?.data?.product_category}
                        </Text>
                      </View>
                    </View>
                    <Divider
                      color={theme.colors['Tab_Divider']}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.DividerStyles(theme)['Divider'],
                          { height: 2, marginTop: 5 }
                        ),
                        dimensions.width
                      )}
                    />
                  </View>
                  {/* View 6 */}
                  <View>
                    {/* Row View */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          flexDirection: 'row',
                          marginBottom: 10,
                          marginTop: 10,
                        },
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          { width: '45%' },
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text 3'],
                              {
                                color: theme.colors['TextPlaceholder'],
                                fontSize: 16,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'Pickup Date'}
                        </Text>
                      </View>
                      {/* View 2 */}
                      <View
                        style={StyleSheet.applyWidth(
                          { width: '5%' },
                          dimensions.width
                        )}
                      >
                        <Icon
                          color={theme.colors['Light']}
                          name={'Entypo/dots-two-vertical'}
                          size={16}
                        />
                      </View>
                      {/* View 3 */}
                      <View
                        style={StyleSheet.applyWidth(
                          { width: '45%' },
                          dimensions.width
                        )}
                      >
                        {/* Text 2 */}
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text 3'],
                              { fontSize: 16 }
                            ),
                            dimensions.width
                          )}
                        >
                          {fetchData?.data?.pickup_date?.split(' ')[0]}
                        </Text>
                      </View>
                    </View>
                    <Divider
                      color={theme.colors['Tab_Divider']}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.DividerStyles(theme)['Divider'],
                          { height: 2, marginTop: 5 }
                        ),
                        dimensions.width
                      )}
                    />
                  </View>
                </View>
                {/* Button Container */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      marginBottom: 10,
                      marginLeft: 20,
                      marginRight: 20,
                      marginTop: 10,
                    },
                    dimensions.width
                  )}
                >
                  <Button
                    onPress={() => {
                      try {
                        navigation.navigate('ImportReasonForCancelScreen', {
                          book_truck_id: fetchData?.data?.book_truck_id,
                        });
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ButtonStyles(theme)['Button'],
                        { marginTop: 20 }
                      ),
                      dimensions.width
                    )}
                    title={'Cancel'}
                  />
                </View>
              </>
            );
          }}
        </CotruckApi.FetchBookingDetailPOST>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(ImportBookingDetailsOnPendingScreen);
