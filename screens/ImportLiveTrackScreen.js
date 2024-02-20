import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import getLocationUtil from '../utils/getLocation';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  MapCallout,
  MapMarker,
  MapMarkerCluster,
  MapView,
} from '@draftbit/maps';
import { Icon, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { Text, View } from 'react-native';

const ImportLiveTrackScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [myLocation, setMyLocation] = React.useState([]);
  const [screenVariable, setScreenVariable] = React.useState({});
  const [switchValue, setSwitchValue] = React.useState(false);
  const [testLocation, setTestLocation] = React.useState({});
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');
  const [textInputValue3, setTextInputValue3] = React.useState('');
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
        apiKey={'AIzaSyBzktToWosjNgrrUawZnbslB9NSXSXCkwo'}
        autoClusterMarkers={true}
        autoClusterMarkersDistanceMeters={10000}
        customMapStyle={'Beautiful West Coast Villa'}
        latitude={myLocation?.latitude}
        loadingBackgroundColor={theme.colors['Custom Color_19']}
        loadingEnabled={true}
        loadingIndicatorColor={theme.colors['Success']}
        longitude={myLocation?.longitude}
        moveOnMarkerPress={true}
        onPress={(latitude, longitude) => {
          console.log('Map View ON_PRESS Start');
          let error = null;
          try {
            console.log('Start ON_PRESS:0 UPDATE_MAP_LOCATION');
            mapViewqcAzS1MtRef.current.animateToLocation({
              latitude: latitude,
              longitude: longitude,
              zoom: 13,
            });
            console.log('Complete ON_PRESS:0 UPDATE_MAP_LOCATION');
            console.log('Start ON_PRESS:1 CONSOLE_LOG');
            console.log(latitude, longitude);
            console.log('Complete ON_PRESS:1 CONSOLE_LOG');
          } catch (err) {
            console.error(err);
            error = err.message ?? err;
          }
          console.log(
            'Map View ON_PRESS Complete',
            error ? { error } : 'no error'
          );
        }}
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
            latitude={16.782193}
            longitude={96.141405}
            pinColor={theme.colors['CoTruckPending']}
            pinImageSize={50}
            title={'a'}
            tracksViewChanges={true}
          >
            <MapCallout showTooltip={true} />
          </MapMarker>
          {/* Driver Marker */}
          <MapMarker
            flat={true}
            latitude={16.790791}
            longitude={96.141157}
            pinImage={Images._40ft}
            pinImageSize={50}
            title={'drop marker'}
            tracksViewChanges={true}
          >
            <MapCallout showTooltip={true} />
          </MapMarker>
          {/* Drop Marker */}
          <MapMarker
            flat={true}
            latitude={16.825298}
            longitude={96.130988}
            pinColor={theme.colors['Success']}
            pinImageSize={50}
            tracksViewChanges={true}
          >
            <MapCallout showTooltip={true} />
          </MapMarker>
        </MapMarkerCluster>
      </MapView>
    </ScreenContainer>
  );
};

export default withTheme(ImportLiveTrackScreen);
