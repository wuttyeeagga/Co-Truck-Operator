import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CotruckApi from '../apis/CotruckApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import showAlertUtil from '../utils/showAlert';
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
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const DriverDetailsScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [dlBack, setDlBack] = React.useState({});
  const [dlFront, setDlFront] = React.useState({});
  const [driverID, setDriverID] = React.useState(0);
  const [driverStatus, setDriverStatus] = React.useState('');
  const [isShown, setIsShown] = React.useState(false);
  const [mobile, setMobile] = React.useState('');
  const [name, setName] = React.useState('');
  const [nrcBack, setNrcBack] = React.useState({});
  const [nrcFront, setNrcFront] = React.useState({});
  const [regNo, setRegNo] = React.useState('');
  const [vehicleAssigned, setVehicleAssigned] = React.useState('');
  const [vehicleType, setVehicleType] = React.useState('');
  const cotruckDeleteDriverPOST = CotruckApi.useDeleteDriverPOST();
  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
      if ((props.route?.params?.driver_status ?? '') === 'AVAILABLE') {
        setIsShown(true);
      } else {
        setIsShown(false);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={true}
      scrollable={true}
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
            {'Driver Details'}
          </Text>
        </View>
        {/* View 2 */}
        <>
          {!isShown ? null : (
            <View>
              {/* Edit */}
              <Button
                onPress={() => {
                  try {
                    navigation.navigate('EditDriverScreen', {
                      driver_id: props.route?.params?.driver_id ?? '',
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'],
                    { marginRight: 20 }
                  ),
                  dimensions.width
                )}
                title={'Edit'}
              />
            </View>
          )}
        </>
      </View>

      <CotruckApi.FetchDriverDetailPOST
        driver_id={props.route?.params?.driver_id ?? ''}
      >
        {({ loading, error, data, refetchDriverDetail }) => {
          const fetchData = data?.json;
          if (loading) {
            return (
              <>
                {/* Loading View */}
                <View
                  style={StyleSheet.applyWidth(
                    { alignItems: 'center', flex: 1, justifyContent: 'center' },
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
                {/* Error View */}
                <View
                  style={StyleSheet.applyWidth(
                    { alignItems: 'center', flex: 1, justifyContent: 'center' },
                    dimensions.width
                  )}
                >
                  {/* Error */}
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
            <>
              {/* Main View */}
              <View>
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
                        justifyContent: 'space-between',
                        margin: 10,
                      },
                      dimensions.width
                    )}
                  >
                    {/* Status */}
                    <Text
                      accessible={true}
                      allowFontScaling={true}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text 2'],
                          {
                            color: theme.colors['CoTruckPending'],
                            marginLeft: 10,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {props.route?.params?.driver_status ?? ''}
                    </Text>
                    {/* Delete */}
                    <>
                      {!isShown ? null : (
                        <Button
                          onPress={() => {
                            const handler = async () => {
                              try {
                                const Response = (
                                  await cotruckDeleteDriverPOST.mutateAsync({
                                    driver_id:
                                      props.route?.params?.driver_id ?? '',
                                  })
                                )?.json;
                                const message = Response?.message;

                                showAlertUtil({
                                  title: 'Message',
                                  message: message,
                                  buttonText: undefined,
                                });

                                navigation.navigate('ManageDriverScreen');
                              } catch (err) {
                                console.error(err);
                              }
                            };
                            handler();
                          }}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.ButtonStyles(theme)['Button'],
                              { marginRight: 10 }
                            ),
                            dimensions.width
                          )}
                          title={'Delete'}
                        />
                      )}
                    </>
                  </View>
                  {/* Name Row */}
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
                    {/* Name View */}
                    <View
                      style={StyleSheet.applyWidth(
                        { width: '40%' },
                        dimensions.width
                      )}
                    >
                      {/* Name */}
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.TextStyles(theme)['Text 2'],
                          dimensions.width
                        )}
                      >
                        {'Name'}
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
                    {/* Name View */}
                    <View
                      style={StyleSheet.applyWidth(
                        { backgroundColor: 'rgba(0, 0, 0, 0)', width: '50%' },
                        dimensions.width
                      )}
                    >
                      {/* Name */}
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
                        {fetchData?.data?.name}
                      </Text>
                    </View>
                  </View>
                  {/* Mobile Number Row */}
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
                    {/* Mobile  View */}
                    <View
                      style={StyleSheet.applyWidth(
                        { width: '40%' },
                        dimensions.width
                      )}
                    >
                      {/* Mobile  */}
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.TextStyles(theme)['Text 2'],
                          dimensions.width
                        )}
                      >
                        {'Mobile Number'}
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
                    {/* Mobile View */}
                    <View
                      style={StyleSheet.applyWidth(
                        { backgroundColor: 'rgba(0, 0, 0, 0)', width: '50%' },
                        dimensions.width
                      )}
                    >
                      {/* Mobile */}
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
                        {fetchData?.data?.mobile}
                      </Text>
                    </View>
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
                  {/* Assigned Row */}
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
                    <View
                      style={StyleSheet.applyWidth(
                        { width: '40%' },
                        dimensions.width
                      )}
                    >
                      {/* Reg No */}
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.TextStyles(theme)['Text 2'],
                          dimensions.width
                        )}
                      >
                        {'Vehicle Assigned'}
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
                    {/* View 2 */}
                    <View
                      style={StyleSheet.applyWidth(
                        { backgroundColor: 'rgba(0, 0, 0, 0)', width: '50%' },
                        dimensions.width
                      )}
                    >
                      {/* Reg No */}
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
                  <View>
                    {/* Title */}
                    <Text
                      accessible={true}
                      allowFontScaling={true}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text 2'],
                          { color: theme.colors['CoTruckBlack'], margin: 10 }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Driving License'}
                    </Text>
                    {/* Driving License Row */}
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
                      {/* Driving License Front */}
                      <Image
                        resizeMode={'cover'}
                        source={{ uri: `${fetchData?.data?.license_info}` }}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.ImageStyles(theme)['Image 3'],
                          dimensions.width
                        )}
                      />
                      {/* Driving License Back */}
                      <Image
                        resizeMode={'cover'}
                        source={{ uri: `${fetchData?.data?.license_back}` }}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.ImageStyles(theme)['Image 3'],
                          dimensions.width
                        )}
                      />
                    </View>

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
                      {'APPROVED'}
                    </Text>
                  </View>
                  {/* View 2 */}
                  <View>
                    {/* Title */}
                    <Text
                      accessible={true}
                      allowFontScaling={true}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text 2'],
                          { color: theme.colors['CoTruckBlack'], margin: 10 }
                        ),
                        dimensions.width
                      )}
                    >
                      {'National Registration Card'}
                    </Text>
                    {/* NRC Row View */}
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
                      {/* NRC Front Image */}
                      <Image
                        resizeMode={'cover'}
                        source={{ uri: `${fetchData?.data?.adhar_info}` }}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.ImageStyles(theme)['Image 3'],
                          dimensions.width
                        )}
                      />
                      {/* NRC Back Image */}
                      <Image
                        resizeMode={'cover'}
                        source={{ uri: `${fetchData?.data?.adhar_back}` }}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.ImageStyles(theme)['Image 3'],
                          dimensions.width
                        )}
                      />
                    </View>

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
                      {'APPROVED'}
                    </Text>
                  </View>
                </Surface>
              </View>
            </>
          );
        }}
      </CotruckApi.FetchDriverDetailPOST>
    </ScreenContainer>
  );
};

export default withTheme(DriverDetailsScreen);
