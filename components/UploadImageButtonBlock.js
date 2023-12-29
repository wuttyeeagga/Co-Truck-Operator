import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import openImagePickerUtil from '../utils/openImagePicker';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, Touchable, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const UploadImageButtonBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  return (
    <Touchable
      onPress={() => {
        const handler = async () => {
          try {
            const results = await openImagePickerUtil({
              mediaTypes: 'All',
              allowsEditing: false,
              quality: 0.2,
            });

            setGlobalVariableValue({
              key: 'NRCImage',
              value: results,
            });
          } catch (err) {
            console.error(err);
          }
        };
        handler();
      }}
    >
      {/* Upload View */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            borderRadius: 8,
            borderStyle: 'dashed',
            borderWidth: 1,
            justifyContent: 'center',
            margin: 20,
            padding: 20,
          },
          dimensions.width
        )}
      >
        <Icon
          name={'AntDesign/pluscircle'}
          size={24}
          style={StyleSheet.applyWidth(
            { marginBottom: 5, marginLeft: 5, marginRight: 5, marginTop: 5 },
            dimensions.width
          )}
        />
        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            GlobalStyles.TextStyles(theme)['Text 2'],
            dimensions.width
          )}
        >
          {'Upload Image'}
        </Text>
      </View>
    </Touchable>
  );
};

export default withTheme(UploadImageButtonBlock);
