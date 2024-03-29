import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CotruckApi from '../apis/CotruckApi.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  Icon,
  IconButton,
  ScreenContainer,
  Surface,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Image, ScrollView, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const VehicleDetailsScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [isShow, setIsShow] = React.useState(false);
  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
      if (
        (props.route?.params?.vehicle_status ?? 'AVAILABLE') === 'AVAILABLE'
      ) {
        setIsShow(true);
      } else {
        setIsShow(false);
      }
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
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
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
            style={StyleSheet.applyWidth({ marginLeft: 30 }, dimensions.width)}
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
                marginLeft: 10,
              }),
              dimensions.width
            )}
          >
            {'Vehicle Details'}
          </Text>
        </View>
        {/* View 2 */}
        <>
          {!isShow ? null : (
            <View
              style={StyleSheet.applyWidth(
                { marginRight: 20 },
                dimensions.width
              )}
            >
              {/* Edit */}
              <Button
                onPress={() => {
                  try {
                    navigation.navigate('EditVehicleScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  GlobalStyles.ButtonStyles(theme)['Button'],
                  dimensions.width
                )}
                title={'Edit'}
              />
            </View>
          )}
        </>
      </View>

      <ScrollView
        bounces={true}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
      >
        <CotruckApi.FetchVehicleDetailPOST vehicle_id={34}>
          {({ loading, error, data, refetchVehicleDetail }) => {
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
              return <ActivityIndicator />;
            }

            return (
              <>
                <Surface
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.SurfaceStyles(theme)['Surface'],
                      { margin: 10, padding: 10 }
                    ),
                    dimensions.width
                  )}
                >
                  {/* Status Container */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        flexDirection: 'row',
                        margin: 10,
                      },
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
                      {'status - '}
                    </Text>
                    {/* Status */}
                    <Text
                      accessible={true}
                      allowFontScaling={true}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text 2'],
                          { color: theme.colors['CoTruckPending'] }
                        ),
                        dimensions.width
                      )}
                    >
                      {fetchData?.data?.status_of_vechile}
                    </Text>
                  </View>
                  {/* Vehicle Type Row */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        flexDirection: 'row',
                        margin: 10,
                      },
                      dimensions.width
                    )}
                  >
                    {/* Vehicle Type View */}
                    <View
                      style={StyleSheet.applyWidth(
                        { width: '40%' },
                        dimensions.width
                      )}
                    >
                      {/* Vehicle Type */}
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.TextStyles(theme)['Text 2'],
                          dimensions.width
                        )}
                      >
                        {'Vehicle Type'}
                      </Text>
                    </View>
                    <Icon
                      name={'Entypo/dots-two-vertical'}
                      size={18}
                      style={StyleSheet.applyWidth(
                        { width: '10%' },
                        dimensions.width
                      )}
                    />
                    {/* Vehicle Type View */}
                    <View
                      style={StyleSheet.applyWidth(
                        { backgroundColor: 'rgba(0, 0, 0, 0)', width: '50%' },
                        dimensions.width
                      )}
                    >
                      {/* Vehicle Type */}
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text 2'],
                            { marginLeft: 10 }
                          ),
                          dimensions.width
                        )}
                      >
                        {fetchData?.data?.vehicle_type}
                      </Text>
                    </View>
                  </View>
                  {/* Registration No. Row */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        flexDirection: 'row',
                        margin: 10,
                      },
                      dimensions.width
                    )}
                  >
                    {/* Reg.No View */}
                    <View
                      style={StyleSheet.applyWidth(
                        { width: '40%' },
                        dimensions.width
                      )}
                    >
                      {/* Reg.No */}
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.TextStyles(theme)['Text 2'],
                          dimensions.width
                        )}
                      >
                        {'Registration No.'}
                      </Text>
                    </View>
                    <Icon
                      name={'Entypo/dots-two-vertical'}
                      size={18}
                      style={StyleSheet.applyWidth(
                        { width: '10%' },
                        dimensions.width
                      )}
                    />
                    {/* Reg.No View */}
                    <View
                      style={StyleSheet.applyWidth(
                        { backgroundColor: 'rgba(0, 0, 0, 0)', width: '50%' },
                        dimensions.width
                      )}
                    >
                      {/* Reg.No  */}
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text 2'],
                            { marginLeft: 10 }
                          ),
                          dimensions.width
                        )}
                      >
                        {fetchData?.data?.registr_number}
                      </Text>
                    </View>
                  </View>
                </Surface>
                {/* Surface 2 */}
                <Surface
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.SurfaceStyles(theme)['Surface'],
                      { margin: 10, padding: 10 }
                    ),
                    dimensions.width
                  )}
                >
                  {/* Title */}
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
                    {'Registration Certificate (RC)'}
                  </Text>
                  {/* Image View */}
                  <View
                    style={StyleSheet.applyWidth(
                      { margin: 10 },
                      dimensions.width
                    )}
                  >
                    {/* Registration Certificate Image */}
                    <Image
                      resizeMode={'cover'}
                      source={{ uri: `${fetchData?.data?.registr_rc}` }}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.ImageStyles(theme)['Image 3'],
                        dimensions.width
                      )}
                    />
                  </View>
                  {/* Title */}
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
                    {'Vehicle Insurance'}
                  </Text>
                  {/* Image View */}
                  <View
                    style={StyleSheet.applyWidth(
                      { margin: 10 },
                      dimensions.width
                    )}
                  >
                    {/* Vehicle Insurance Image */}
                    <Image
                      resizeMode={'cover'}
                      source={{ uri: `${fetchData?.data?.registr_insurance}` }}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.ImageStyles(theme)['Image 3'],
                        dimensions.width
                      )}
                    />
                  </View>
                  {/* Title */}
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
                    {'Vehicle Image'}
                  </Text>
                  {/* Vehicle Image View */}
                  <View
                    style={StyleSheet.applyWidth(
                      { margin: 10 },
                      dimensions.width
                    )}
                  >
                    {/* Vehicle Image */}
                    <Image
                      resizeMode={'cover'}
                      source={{
                        uri: `${fetchData?.data?.operator_truck_image}`,
                      }}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.ImageStyles(theme)['Image 3'],
                        dimensions.width
                      )}
                    />
                  </View>
                </Surface>
                {/* Surface 3 */}
                <>
                  {!isShow ? null : (
                    <Surface
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.SurfaceStyles(theme)['Surface'],
                          { margin: 10, marginBottom: 50 }
                        ),
                        dimensions.width
                      )}
                    >
                      {/* Edit */}
                      <Button
                        onPress={() => {
                          try {
                            navigation.navigate('EditVehicleScreen', {
                              reg_no: fetchData?.data?.registr_number,
                              id: fetchData?.data?.id,
                              vehicle_type: fetchData?.data?.vehicle_type,
                              registr_rc: fetchData?.data?.registr_rc,
                              registr_insurance:
                                fetchData?.data?.registr_insurance,
                              operator_truck_image:
                                fetchData?.data?.operator_truck_image,
                            });
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.ButtonStyles(theme)['Button'],
                            { borderRadius: 12, height: 48, margin: 20 }
                          ),
                          dimensions.width
                        )}
                        title={'Edit'}
                      />
                    </Surface>
                  )}
                </>
              </>
            );
          }}
        </CotruckApi.FetchVehicleDetailPOST>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(VehicleDetailsScreen);
