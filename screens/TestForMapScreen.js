import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import getLocationUtil from '../utils/getLocation';
import useWindowDimensions from '../utils/useWindowDimensions';
import { MapCallout, MapMarker, MapView } from '@draftbit/maps';
import { Button, ScreenContainer, TextInput, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { Text, View } from 'react-native';

const TestForMapScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [kolat, setKolat] = React.useState('');
  const [kolong, setKolong] = React.useState('');
  const [loco, setLoco] = React.useState({});
  const [textInput2Value, setTextInput2Value] = React.useState('');
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
        const mylocation = await getLocationUtil();
        console.log('Complete ON_SCREEN_FOCUS:0 GET_LOCATION', { mylocation });
        console.log('Start ON_SCREEN_FOCUS:1 UPDATE_MAP_LOCATION');
        mapViewkFhR7pPERef.current.animateToLocation({
          latitude: mylocation?.latitude,
          longitude: mylocation?.longitude,
          zoom: 0,
        });
        console.log('Complete ON_SCREEN_FOCUS:1 UPDATE_MAP_LOCATION');
        console.log('Start ON_SCREEN_FOCUS:3 CONSOLE_LOG');
        console.log(mylocation);
        console.log('Complete ON_SCREEN_FOCUS:3 CONSOLE_LOG');
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
          latitude={kolat}
          longitude={kolong}
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
        {/* Latitude Input */}
        <TextInput
          allowFontScaling={true}
          autoCapitalize={'none'}
          changeTextDelay={500}
          editable={false}
          placeholder={'latitude'}
          placeholderTextColor={theme.colors['TextPlaceholder']}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextInputStyles(theme)['Text Input 3'],
              { margin: 10 }
            ),
            dimensions.width
          )}
        />
        {/* Longitude Input */}
        <TextInput
          allowFontScaling={true}
          autoCapitalize={'none'}
          changeTextDelay={500}
          editable={false}
          placeholder={'longitude'}
          placeholderTextColor={theme.colors['TextPlaceholder']}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextInputStyles(theme)['Text Input 3'],
              { margin: 10 }
            ),
            dimensions.width
          )}
        />
        <Button
          onPress={() => {
            try {
              navigation.navigate('Test1Screen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            GlobalStyles.ButtonStyles(theme)['Button'],
            dimensions.width
          )}
          title={'Get Started'}
        />
        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            GlobalStyles.TextStyles(theme)['Text 3'],
            dimensions.width
          )}
        >
          {'Double click me to edit 👀'}
        </Text>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(TestForMapScreen);
