import { Platform } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';

const selectFile = async ({ returnNameAndValue = false }) => {
  try {
    const result = await DocumentPicker.getDocumentAsync();

    if (result.canceled) {
      console.error('Select file canceled');
      return;
    }

    let asset;
    if (result.name && result.uri) {
      asset = result;
    } else {
      asset = result.assets?.length > 0 ? result.assets[0] : null;
    }

    if (!asset) {
      console.error('No assets were returned in select file');
      return;
    }

    let value;
    if (Platform.OS === 'web') {
      value = asset.uri;
    } else {
      const fileBase64 = await FileSystem.readAsStringAsync(asset.uri, {
        encoding: FileSystem.EncodingType.Base64,
      });
      value = 'data:' + asset.mimeType + ';base64,' + fileBase64;
    }

    return returnNameAndValue ? { name: asset.name, value } : value;
  } catch (error) {
    console.error(error);
  }
};

export default selectFile;
