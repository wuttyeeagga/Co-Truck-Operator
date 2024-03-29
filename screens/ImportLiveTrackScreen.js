import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import getLocationUtil from '../utils/getLocation';
import useWindowDimensions from '../utils/useWindowDimensions';
import { MapMarker, MapMarkerCluster, MapView } from '@draftbit/maps';
import { Icon, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { Text, View } from 'react-native';

const ImportLiveTrackScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [driverDesc, setDriverDesc] = React.useState('Driver Marker');
  const [myLocation, setMyLocation] = React.useState([]);
  const [screenVariable, setScreenVariable] = React.useState({});
  const [switchValue, setSwitchValue] = React.useState(false);
  const [testLocation, setTestLocation] = React.useState({});
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');
  const isFocused = useIsFocused();
  React.useEffect(() => {
    const handler = async () => {
      console.log('Screen ON_SCREEN_FOCUS Start');
      let error = null;
      try {
        if (!isFocused) {
          return;
        }
        console.log('Start ON_SCREEN_FOCUS:0 GET_LOCATION');
        const MYLOCATION = await getLocationUtil();
        console.log('Complete ON_SCREEN_FOCUS:0 GET_LOCATION', { MYLOCATION });
        console.log('Start ON_SCREEN_FOCUS:1 UPDATE_MAP_LOCATION');
        mapViewqcAzS1MtRef.current.animateToLocation({
          latitude: MYLOCATION?.latitude,
          longitude: MYLOCATION?.longitude,
          zoom: 13,
        });
        console.log('Complete ON_SCREEN_FOCUS:1 UPDATE_MAP_LOCATION');
        console.log('Start ON_SCREEN_FOCUS:2 SET_VARIABLE');
        setMyLocation(MYLOCATION);
        console.log('Complete ON_SCREEN_FOCUS:2 SET_VARIABLE');
        console.log('Start ON_SCREEN_FOCUS:3 SET_VARIABLE');
        /* 'Set Variable' action requires configuration: choose a variable */ console.log(
          'Complete ON_SCREEN_FOCUS:3 SET_VARIABLE'
        );
      } catch (err) {
        console.error(err);
        error = err.message ?? err;
      }
      console.log(
        'Screen ON_SCREEN_FOCUS Complete',
        error ? { error } : 'no error'
      );
    };
    handler();
  }, [isFocused]);
  const mapViewqcAzS1MtRef = React.useRef();

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={true}
      hasTopSafeArea={true}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { justifyContent: 'space-between' },
        dimensions.width
      )}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            marginBottom: 20,
            marginLeft: 20,
          },
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
            {'Live Track'}
          </Text>
        </View>
      </View>

      <MapView
        apiKey={'AIzaSyCJ1VkTz9Y_EEj9nVLNSkOw4yPc90gp9J0'}
        autoClusterMarkers={true}
        autoClusterMarkersDistanceMeters={10000}
        customMapStyle={'Beautiful West Coast Villa'}
        latitude={myLocation?.latitude}
        loadingBackgroundColor={theme.colors['Custom Color_19']}
        loadingEnabled={true}
        loadingIndicatorColor={theme.colors['Success']}
        longitude={myLocation?.longitude}
        moveOnMarkerPress={true}
        provider={'google'}
        ref={mapViewqcAzS1MtRef}
        rotateEnabled={false}
        scrollEnabled={true}
        showsPointsOfInterest={false}
        showsUserLocation={true}
        style={StyleSheet.applyWidth(
          GlobalStyles.MapViewStyles(theme)['Map View'],
          dimensions.width
        )}
        zoom={13}
        zoomEnabled={true}
      >
        <MapMarkerCluster>
          {/* Pickup Marker */}
          <MapMarker
            androidUseDefaultIconImplementation={true}
            flat={true}
            latitude={parseFloat(props.route?.params?.pickup_lat ?? '', 10)}
            longitude={parseFloat(props.route?.params?.pickup_long ?? '', 10)}
            pinColor={theme.colors['Error']}
            pinImageSize={50}
            title={'Pickup Marker'}
            tracksViewChanges={true}
          />
          {/* Driver Marker */}
          <MapMarker
            flat={true}
            latitude={parseFloat(props.route?.params?.driver_lat ?? '', 10)}
            longitude={parseFloat(props.route?.params?.driver_long ?? '', 10)}
            pinImage={Images.CotruckTruck}
            pinImageSize={50}
            title={'Driver'}
            tracksViewChanges={true}
          />
          {/* Drop Marker */}
          <MapMarker
            flat={true}
            latitude={parseFloat(props.route?.params?.drop_lat ?? '', 10)}
            longitude={parseFloat(props.route?.params?.drop_long ?? '', 10)}
            pinColor={theme.colors['Success']}
            pinImageSize={50}
            title={'Drop Marker'}
            tracksViewChanges={true}
          />
        </MapMarkerCluster>
      </MapView>
    </ScreenContainer>
  );
};

export default withTheme(ImportLiveTrackScreen);
