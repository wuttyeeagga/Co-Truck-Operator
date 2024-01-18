import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
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
import {
  Button,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { H4, H5 } from '@expo/html-elements';
import { useIsFocused } from '@react-navigation/native';
import { Text, View } from 'react-native';

const ChooseLocationZoneScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
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
        const myLocation = await getLocationUtil();
        console.log('Complete ON_SCREEN_FOCUS:0 GET_LOCATION', { myLocation });
        console.log('Start ON_SCREEN_FOCUS:2 UPDATE_MAP_LOCATION');
        /* 'Update Map Location' action requires configuration: select Latitude and Longitude */ console.log(
          'Complete ON_SCREEN_FOCUS:2 UPDATE_MAP_LOCATION'
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
          { alignItems: 'center', flexDirection: 'row', marginLeft: 20 },
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
                color: theme.colors['Primary'],
                fontFamily: 'System',
                fontSize: 20,
                fontWeight: '400',
              }),
              dimensions.width
            )}
          >
            {'Choose Location'}
          </Text>
        </View>
      </View>

      <MapView
        apiKey={'AIzaSyBzktToWosjNgrrUawZnbslB9NSXSXCkwo'}
        autoClusterMarkers={true}
        autoClusterMarkersDistanceMeters={10000}
        customMapStyle={'Beautiful West Coast Villa'}
        latitude={37.40241}
        loadingBackgroundColor={theme.colors['Custom Color_19']}
        loadingEnabled={true}
        loadingIndicatorColor={theme.colors['Success']}
        longitude={-122.12125}
        moveOnMarkerPress={true}
        onPress={(latitude, longitude) => {
          const handler = async () => {
            console.log('Map View ON_PRESS Start');
            let error = null;
            try {
              console.log('Start ON_PRESS:0 GET_LOCATION');
              const getLocation = await getLocationUtil();
              console.log('Complete ON_PRESS:0 GET_LOCATION', { getLocation });
              console.log('Start ON_PRESS:1 SET_VARIABLE');
              const valueM7LVbmWS = getLocation;
              setTestLocation(valueM7LVbmWS);
              const result = valueM7LVbmWS;
              console.log('Complete ON_PRESS:1 SET_VARIABLE');
              console.log('Start ON_PRESS:2 UPDATE_MAP_LOCATION');
              /* 'Update Map Location' action requires configuration: choose a target component */ console.log(
                'Complete ON_PRESS:2 UPDATE_MAP_LOCATION'
              );
              console.log('Start ON_PRESS:3 CONSOLE_LOG');
              console.log(latitude, longitude, getLocation, result);
              console.log('Complete ON_PRESS:3 CONSOLE_LOG');
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
        ref={mapViewqcAzS1MtRef}
        rotateEnabled={false}
        scrollEnabled={true}
        showsPointsOfInterest={false}
        showsUserLocation={true}
        style={StyleSheet.applyWidth(
          GlobalStyles.MapViewStyles(theme)['Map View'],
          dimensions.width
        )}
        zoom={15}
        zoomEnabled={true}
      >
        <MapMarkerCluster>
          <MapMarker
            androidUseDefaultIconImplementation={true}
            description={'a is a a for a'}
            flat={true}
            latitude={testLocation?.latitude}
            longitude={testLocation?.longitude}
            pinColor={theme.colors['GetFit Orange']}
            pinImageSize={50}
            title={'a'}
            tracksViewChanges={true}
          >
            <MapCallout showTooltip={true} />
          </MapMarker>
        </MapMarkerCluster>
      </MapView>

      <View
        style={StyleSheet.applyWidth(
          { backgroundColor: 'rgba(0, 0, 0, 0)', margin: 20 },
          dimensions.width
        )}
      >
        <H4
          style={StyleSheet.applyWidth(
            GlobalStyles.H4Styles(theme)['H4'],
            dimensions.width
          )}
        >
          {'SET YOUR LOCATION'}
        </H4>

        <H5
          style={StyleSheet.applyWidth(
            GlobalStyles.H5Styles(theme)['H5'],
            dimensions.width
          )}
        >
          {'Location'}
        </H5>

        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            GlobalStyles.TextStyles(theme)['Text 3'],
            dimensions.width
          )}
        >
          {null}
        </Text>
        <Button
          style={StyleSheet.applyWidth(
            GlobalStyles.ButtonStyles(theme)['Button'],
            dimensions.width
          )}
          title={'Confirm Location'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(ChooseLocationZoneScreen);
