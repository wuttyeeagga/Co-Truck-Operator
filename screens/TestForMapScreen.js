import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import getLocationUtil from '../utils/getLocation';
import { MapCallout, MapMarker, MapView } from '@draftbit/maps';
import { Button, ScreenContainer, TextInput, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { Text, View, useWindowDimensions } from 'react-native';

const TestForMapScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
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
        console.log('Start ON_SCREEN_FOCUS:2 SET_VARIABLE');
        const myCurrentLocation = setGlobalVariableValue({
          key: 'testLocation',
          value: mylocation,
        });
        console.log('Complete ON_SCREEN_FOCUS:2 SET_VARIABLE', {
          myCurrentLocation,
        });
        console.log('Start ON_SCREEN_FOCUS:3 CONSOLE_LOG');
        console.log(mylocation, myCurrentLocation, Constants['location']);
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
        keyExtractor={mapViewData =>
          mapViewData?.id || mapViewData?.uuid || JSON.stringify(mapViewData)
        }
        latitude={37.40241}
        listKey={'kFhR7pPE'}
        loadingBackgroundColor={theme.colors['CoTruckBlack']}
        loadingEnabled={true}
        loadingIndicatorColor={theme.colors['Success']}
        longitude={-122.12125}
        markersData={Constants['testLocation']}
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
                latitude: null,
                longitude: null,
                zoom: 0,
              });
              console.log('Complete ON_PRESS:1 UPDATE_MAP_LOCATION');
              console.log('Start ON_PRESS:2 SET_VARIABLE');
              setKolat(latitude);
              console.log('Complete ON_PRESS:2 SET_VARIABLE');
              console.log('Start ON_PRESS:3 SET_VARIABLE');
              setKolong(longitude);
              console.log('Complete ON_PRESS:3 SET_VARIABLE');
              console.log('Start ON_PRESS:4 SET_VARIABLE');
              setGlobalVariableValue({
                key: 'geo',
                value: topup,
              });
              console.log('Complete ON_PRESS:4 SET_VARIABLE');
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
        renderItem={({ item }) => {
          const mapViewData = item;
          return (
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
          );
        }}
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
      />
      <View style={StyleSheet.applyWidth({ margin: 20 }, dimensions.width)}>
        {/* Latitude Input */}
        <TextInput
          allowFontScaling={true}
          autoCapitalize={'none'}
          changeTextDelay={500}
          editable={false}
          onChangeText={newLatitudeInputValue => {
            try {
              setGlobalVariableValue({
                key: 'geo',
                value: newLatitudeInputValue,
              });
            } catch (err) {
              console.error(err);
            }
          }}
          placeholder={'latitude'}
          placeholderTextColor={theme.colors['TextPlaceholder']}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextInputStyles(theme)['Text Input 3'],
              { margin: 10 }
            ),
            dimensions.width
          )}
          value={Constants['geo']?.latitude}
        />
        {/* Longitude Input */}
        <TextInput
          allowFontScaling={true}
          autoCapitalize={'none'}
          changeTextDelay={500}
          editable={false}
          onChangeText={newLongitudeInputValue => {
            try {
              setGlobalVariableValue({
                key: 'geo',
                value: newLongitudeInputValue,
              });
              setGlobalVariableValue({
                key: 'geo',
                value: newLongitudeInputValue,
              });
            } catch (err) {
              console.error(err);
            }
          }}
          placeholder={'longitude'}
          placeholderTextColor={theme.colors['TextPlaceholder']}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextInputStyles(theme)['Text Input 3'],
              { margin: 10 }
            ),
            dimensions.width
          )}
          value={Constants['geo']?.longitude}
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
