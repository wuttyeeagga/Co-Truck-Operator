import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { MapMarker, MapView } from '@draftbit/maps';
import { Button, Icon, ScreenContainer, withTheme } from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const RecipientAddressScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={false}
      scrollable={true}
    >
      {/* Map View */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'flex-start',
            borderRadius: 0,
            height: 280,
            justifyContent: 'center',
            overflow: 'hidden',
            paddingBottom: 16,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 8,
            width: '100%',
          },
          dimensions.width
        )}
      >
        <MapView
          apiKey={'AIzaSyBzktToWosjNgrrUawZnbslB9NSXSXCkwo'}
          followsUserLocation={true}
          latitude={26.2389}
          loadingEnabled={true}
          loadingIndicatorColor={theme.colors.appGreen}
          longitude={73.0243}
          provider={'google'}
          rotateEnabled={true}
          scrollEnabled={true}
          showsCompass={true}
          showsPointsOfInterest={true}
          showsUserLocation={true}
          style={StyleSheet.applyWidth(
            {
              borderRadius: 12,
              flex: 1,
              height: 220,
              overflow: 'hidden',
              width: '100%',
            },
            dimensions.width
          )}
          zoom={5}
          zoomEnabled={true}
        >
          <MapMarker
            description={'My Test Address'}
            flat={true}
            latitude={26.2389}
            longitude={73.0243}
            pinColor={theme.colors.custom_rgb255_0_0}
            title={'Arvind Limba'}
          />
          <MapMarker
            description={'My Test Address'}
            flat={true}
            latitude={26.9124}
            longitude={75.7873}
            pinColor={theme.colors.appGreen}
            title={'Arvind Limba'}
          />
        </MapView>
      </View>
      {/* Address View */}
      <View
        style={StyleSheet.applyWidth(
          { paddingLeft: 16, paddingRight: 16 },
          dimensions.width
        )}
      >
        {/* heading */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.strong,
              fontFamily: 'Inter_400Regular',
              marginTop: 30,
              textAlign: 'left',
              textTransform: 'capitalize',
            },
            dimensions.width
          )}
        >
          {'from'}
        </Text>
        {/* From View */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              backgroundColor: theme.colors.bGGray,
              borderRadius: 12,
              flexDirection: 'row',
              height: 50,
              marginTop: 10,
              paddingLeft: 16,
            },
            dimensions.width
          )}
        >
          {/* pin */}
          <Icon
            color={theme.colors.custom_rgb255_0_0}
            name={'Entypo/location-pin'}
            size={24}
          />
          {/* address */}
          <Text
            style={StyleSheet.applyWidth(
              { color: theme.colors.strong, paddingLeft: 16 },
              dimensions.width
            )}
          >
            {'some test dummy address, 2012'}
          </Text>
        </View>
        {/* heading */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.strong,
              fontFamily: 'Inter_400Regular',
              marginTop: 18,
              textAlign: 'left',
              textTransform: 'capitalize',
            },
            dimensions.width
          )}
        >
          {'to'}
        </Text>
        {/* To View */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              backgroundColor: theme.colors.bGGray,
              borderRadius: 12,
              flexDirection: 'row',
              height: 50,
              marginTop: 10,
              paddingLeft: 16,
            },
            dimensions.width
          )}
        >
          {/* pin */}
          <Icon
            color={theme.colors.appGreen}
            name={'Entypo/location-pin'}
            size={24}
          />
          {/* address */}
          <Text
            style={StyleSheet.applyWidth(
              { color: theme.colors.strong, paddingLeft: 16 },
              dimensions.width
            )}
          >
            {'another test dummy address, 2022'}
          </Text>
        </View>
      </View>
      {/* User View */}
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors.bGGray,
            borderRadius: 12,
            flexDirection: 'row',
            height: 100,
            justifyContent: 'space-between',
            marginTop: 30,
            overflow: 'hidden',
            paddingLeft: 16,
            paddingRight: 16,
            width: '100%',
          },
          dimensions.width
        )}
      >
        {/* Picture View */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              borderRadius: 12,
              justifyContent: 'center',
              marginLeft: 16,
              overflow: 'hidden',
            },
            dimensions.width
          )}
        >
          <Image
            resizeMode={'cover'}
            source={{ uri: 'https://picsum.photos/200/200' }}
            style={StyleSheet.applyWidth(
              { height: 65, width: 65 },
              dimensions.width
            )}
          />
        </View>
        {/* Details */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'flex-start',
              flex: 1,
              justifyContent: 'center',
              paddingLeft: 20,
            },
            dimensions.width
          )}
        >
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Inter_600SemiBold',
                fontSize: 18,
                textAlign: 'left',
              },
              dimensions.width
            )}
          >
            {'Draftbit AL'}
          </Text>

          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.textPlaceholder,
                fontFamily: 'Inter_400Regular',
              },
              dimensions.width
            )}
          >
            {'MD20215'}
          </Text>
        </View>
        {/* Chat */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              backgroundColor: theme.colors.greenBG,
              justifyContent: 'center',
              width: 70,
            },
            dimensions.width
          )}
        >
          <Icon
            color={theme.colors.appGreen}
            name={'Ionicons/chatbubble-ellipses-sharp'}
            size={24}
          />
        </View>
      </View>
      {/* Search Courier Btn */}
      <Button
        disabled={false}
        onPress={() => {
          try {
            navigation.goBack();
          } catch (err) {
            console.error(err);
          }
        }}
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors.appGreen,
            borderRadius: 12,
            fontFamily: 'Inter_600SemiBold',
            fontSize: 16,
            height: 51,
            marginBottom: 5,
            marginLeft: 16,
            marginRight: 16,
            marginTop: 30,
            textAlign: 'center',
            textTransform: 'capitalize',
          },
          dimensions.width
        )}
        title={'search courier'}
      />
    </ScreenContainer>
  );
};

export default withTheme(RecipientAddressScreen);
