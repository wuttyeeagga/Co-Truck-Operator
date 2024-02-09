import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import getLocationUtil from '../utils/getLocation';
import useWindowDimensions from '../utils/useWindowDimensions';
import { MapCallout, MapMarker, MapView } from '@draftbit/maps';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { View } from 'react-native';

const LiveTrackingMapScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [kolat, setKolat] = React.useState('');
  const [kolong, setKolong] = React.useState('');
  const [loco, setLoco] = React.useState({});
  const [myRegion, setMyRegion] = React.useState([]);
  const isFocused = useIsFocused();
  React.useEffect(() => {
    console.log('Screen ON_SCREEN_FOCUS Start');
    let error = null;
    try {
      if (!isFocused) {
        return;
      }
    } catch (err) {
      console.error(err);
      error = err.message ?? err;
    }
    console.log(
      'Screen ON_SCREEN_FOCUS Complete',
      error ? { error } : 'no error'
    );
  }, [isFocused]);
  const mapViewkFhR7pPERef = React.useRef();

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <MapView
        apiKey={'AIzaSyBzktToWosjNgrrUawZnbslB9NSXSXCkwo'}
        autoClusterMarkers={true}
        autoClusterMarkersDistanceMeters={100000}
        customMapStyle={'Beautiful West Coast Villa'}
        latitude={37.40241}
        loadingBackgroundColor={theme.colors['CoTruckBlack']}
        loadingEnabled={true}
        loadingIndicatorColor={theme.colors['Success']}
        longitude={-122.12125}
        moveOnMarkerPress={false}
        onPress={(latitude, longitude) => {
          const handler = async () => {
            console.log('Map View ON_PRESS Start');
            let error = null;
            try {
              console.log('Start ON_PRESS:0 GET_LOCATION');
              const topup = await getLocationUtil();
              console.log('Complete ON_PRESS:0 GET_LOCATION', { topup });
              console.log('Start ON_PRESS:1 UPDATE_MAP_LOCATION');
              mapViewkFhR7pPERef.current.animateToLocation({
                latitude: latitude,
                longitude: longitude,
                zoom: 0,
              });
              console.log('Complete ON_PRESS:1 UPDATE_MAP_LOCATION');
              console.log('Start ON_PRESS:2 SET_VARIABLE');
              setKolat(latitude);
              console.log('Complete ON_PRESS:2 SET_VARIABLE');
              console.log('Start ON_PRESS:3 SET_VARIABLE');
              setKolong(longitude);
              console.log('Complete ON_PRESS:3 SET_VARIABLE');
              console.log('Start ON_PRESS:5 DECLARE_VARIABLE');
              const kolat = latitude;
              console.log('Complete ON_PRESS:5 DECLARE_VARIABLE', { kolat });
              console.log('Start ON_PRESS:6 DECLARE_VARIABLE');
              const kolong = longitude;
              console.log('Complete ON_PRESS:6 DECLARE_VARIABLE', { kolong });
              console.log('Start ON_PRESS:7 CONSOLE_LOG');
              console.log(
                latitude,
                longitude,
                topup?.latitude,
                topup?.longitude
              );
              console.log('Complete ON_PRESS:7 CONSOLE_LOG');
            } catch (err) {
              console.error(err);
              error = err.message ?? err;
            }
            console.log(
              'Map View ON_PRESS Complete',
              error ? { error } : 'no error'
            );
          };
          handler();
        }}
        provider={'google'}
        ref={mapViewkFhR7pPERef}
        rotateEnabled={true}
        scrollEnabled={true}
        showsCompass={true}
        showsPointsOfInterest={true}
        showsUserLocation={true}
        style={StyleSheet.applyWidth(
          GlobalStyles.MapViewStyles(theme)['Map View'],
          dimensions.width
        )}
        zoom={8}
        zoomEnabled={true}
      >
        <MapMarker
          androidUseDefaultIconImplementation={true}
          description={'ko lat and ko long'}
          flat={true}
          pinColor={theme.colors['Success']}
          pinImage={Images.Location}
          pinImageSize={50}
          title={'first time map maker'}
          tracksViewChanges={true}
        >
          <MapCallout showTooltip={true} />
        </MapMarker>
      </MapView>

      <View style={StyleSheet.applyWidth({ margin: 20 }, dimensions.width)}>
        {/* Back */}
        <Button
          onPress={() => {
            try {
              navigation.goBack();
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
              borderRadius: 12,
              height: 48,
              margin: 10,
            }),
            dimensions.width
          )}
          title={'Back'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(LiveTrackingMapScreen);
