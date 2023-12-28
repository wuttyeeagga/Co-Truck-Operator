import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { MapMarker, MapView } from '@draftbit/maps';
import {
  Button,
  Circle,
  Icon,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const HospitalOnMapScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [switchValue, setSwitchValue] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');

  return (
    <ScreenContainer
      hasBottomSafeArea={false}
      hasSafeArea={true}
      hasTopSafeArea={false}
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
            backgroundColor: theme.colors['Custom Color'],
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
            flexDirection: 'column',
            height: 72,
            justifyContent: 'space-between',
            paddingLeft: 16,
            paddingRight: 16,
          },
          dimensions.width
        )}
      >
        {/* Left View */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flex: 1,
              flexDirection: 'row',
              height: 48,
              justifyContent: 'center',
            },
            dimensions.width
          )}
        >
          {/* Back */}
          <Touchable
            onPress={() => {
              try {
                navigation.goBack();
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Divider'],
                  borderLeftWidth: 1,
                  borderRadius: 10,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  height: 48,
                  width: 48,
                },
                dimensions.width
              )}
            >
              <Circle size={50}>
                <Icon
                  color={theme.colors['Strong']}
                  name={'Ionicons/arrow-back-sharp'}
                  size={24}
                />
              </Circle>
            </View>
          </Touchable>
          {/* Address */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderBottomWidth: 1,
                borderColor: theme.colors['Divider'],
                borderLeftWidth: 1,
                borderRadius: 10,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flex: 1,
                flexDirection: 'row',
                marginLeft: 8,
                paddingLeft: 12,
              },
              dimensions.width
            )}
          >
            <Icon
              color={theme.colors['Light']}
              name={'Ionicons/search-outline'}
              size={24}
            />
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, paddingLeft: 8, paddingRight: 8 },
                dimensions.width
              )}
            >
              <TextInput
                autoCapitalize={'none'}
                defaultValue={'Jl. Prapatan No 26, Labuan, Malang'}
                placeholder={'Enter a value...'}
                style={StyleSheet.applyWidth(
                  {
                    borderRadius: 8,
                    height: 48,
                    paddingBottom: 8,
                    paddingLeft: 8,
                    paddingRight: 8,
                    paddingTop: 8,
                  },
                  dimensions.width
                )}
              />
            </View>
          </View>
        </View>
      </View>
      {/* Map */}
      <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
        <MapView
          apiKey={'AIzaSyBzktToWosjNgrrUawZnbslB9NSXSXCkwo'}
          followsUserLocation={true}
          latitude={37.40241}
          loadingEnabled={true}
          longitude={-122.12125}
          rotateEnabled={true}
          scrollEnabled={true}
          showsCompass={true}
          showsPointsOfInterest={true}
          showsUserLocation={true}
          style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
          zoom={15}
          zoomEnabled={true}
        >
          <MapMarker
            latitude={37.4078}
            longitude={-122.1228}
            pinColor={theme.colors['Primary']}
            title={'Draftbit'}
          />
        </MapView>
      </View>
      {/* Hospital Details */}
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors['Custom Color'],
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            bottom: 0,
            flexDirection: 'column',
            justifyContent: 'space-between',
            left: 0,
            marginTop: 10,
            paddingBottom: 20,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 20,
            position: 'absolute',
            right: 0,
          },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              backgroundColor: theme.colors['Custom Color'],
              borderRadius: 12,
              flexDirection: 'row',
              height: 104,
              marginBottom: 20,
              paddingLeft: 12,
            },
            dimensions.width
          )}
        >
          <Image
            resizeMode={'cover'}
            source={{ uri: 'https://picsum.photos/64' }}
            style={StyleSheet.applyWidth(
              { borderRadius: 4, height: 80, width: 80 },
              dimensions.width
            )}
          />
          <View
            style={StyleSheet.applyWidth(
              { flex: 1, marginLeft: 15 },
              dimensions.width
            )}
          >
            {/* Name */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_500Medium',
                  fontSize: 16,
                },
                dimensions.width
              )}
            >
              {'Medika Husada Hospital'}
            </Text>
            {/* Address */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_300Light',
                  fontSize: 12,
                  marginTop: 5,
                  opacity: 0.7,
                },
                dimensions.width
              )}
            >
              {'Jl. Prapatan No 26, Labuan, Malang'}
            </Text>
            {/* Distance */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row', marginTop: 12 },
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors['Primary']}
                name={'FontAwesome/location-arrow'}
                size={20}
              />
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Primary'],
                    fontFamily: 'Inter_400Regular',
                    fontSize: 13,
                    marginLeft: 5,
                  },
                  dimensions.width
                )}
              >
                {'1,2 KM'}
              </Text>
            </View>
          </View>
        </View>
        {/* Actions */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              height: 48,
              justifyContent: 'space-between',
            },
            dimensions.width
          )}
        >
          {/* Chat */}
          <Button
            activeOpacity={0.8}
            disabledOpacity={0.8}
            icon={'Ionicons/call-outline'}
            style={StyleSheet.applyWidth(
              GlobalStyles.ButtonStyles(theme)['App Btns'],
              dimensions.width
            )}
            title={'Chat'}
          />
          {/* Call */}
          <Button
            activeOpacity={0.8}
            disabledOpacity={0.8}
            icon={'Ionicons/call-outline'}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors.primary,
                borderRadius: 8,
                fontFamily: 'Inter_400Regular',
                fontSize: 16,
                textAlign: 'center',
                width: '45%',
              },
              dimensions.width
            )}
            title={' Call '}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(HospitalOnMapScreen);
