import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import openImagePickerUtil from '../utils/openImagePicker';
import {
  Button,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const BlankScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [isDLUpload, setIsDLUpload] = React.useState(false);
  const [isNRCUpload, setIsNRCUpload] = React.useState(false);

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={true}
      scrollable={false}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            marginLeft: 20,
            marginTop: 20,
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
            {'Create an account'}
          </Text>
        </View>
      </View>

      <View>
        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            GlobalStyles.TextStyles(theme)['Text 2'],
            dimensions.width
          )}
        >
          {'Step 2 of 4 - Identify Proof'}
        </Text>
      </View>
      {/* View 2 */}
      <View>
        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            GlobalStyles.TextStyles(theme)['Text 2'],
            dimensions.width
          )}
        >
          {'1. Upload National Registration Card'}
        </Text>
        {/* Upload Image */}
        <Button
          onPress={() => {
            const handler = async () => {
              try {
                const NRCImage = await openImagePickerUtil({
                  mediaTypes: 'All',
                  allowsEditing: false,
                  quality: 0.2,
                });

                setIsNRCUpload(true);
                setGlobalVariableValue({
                  key: 'NRCImage',
                  value: NRCImage,
                });
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
          style={StyleSheet.applyWidth(
            GlobalStyles.ButtonStyles(theme)['Button'],
            dimensions.width
          )}
          title={'Upload Image'}
        />
        <>
          {!isNRCUpload ? null : (
            <Image
              resizeMode={'cover'}
              source={{ uri: `${Constants['NRCImage']}` }}
              style={StyleSheet.applyWidth(
                GlobalStyles.ImageStyles(theme)['Image 3'],
                dimensions.width
              )}
            />
          )}
        </>
      </View>
      {/* View 3 */}
      <View>
        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            GlobalStyles.TextStyles(theme)['Text 2'],
            dimensions.width
          )}
        >
          {'2. Upload Driving License'}
        </Text>
        {/* Upload Image */}
        <Button
          onPress={() => {
            const handler = async () => {
              try {
                const dlImage = await openImagePickerUtil({
                  mediaTypes: 'All',
                  allowsEditing: false,
                  quality: 0.2,
                });

                setIsDLUpload(true);
                setGlobalVariableValue({
                  key: 'DLImage',
                  value: dlImage,
                });
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
          style={StyleSheet.applyWidth(
            GlobalStyles.ButtonStyles(theme)['Button'],
            dimensions.width
          )}
          title={'Upload Image'}
        />
        <>
          {!isDLUpload ? null : (
            <Image
              resizeMode={'cover'}
              source={{ uri: `${Constants['DLImage']}` }}
              style={StyleSheet.applyWidth(
                GlobalStyles.ImageStyles(theme)['Image 3'],
                dimensions.width
              )}
            />
          )}
        </>
      </View>
      <Button
        style={StyleSheet.applyWidth(
          GlobalStyles.ButtonStyles(theme)['Button'],
          dimensions.width
        )}
        title={'Next'}
      />
    </ScreenContainer>
  );
};

export default withTheme(BlankScreen);
