import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { TextInput, withTheme } from '@draftbit/ui';
import { useWindowDimensions } from 'react-native';

const DefaultInputBoxBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const [companyName, setCompanyName] = React.useState('');

  return (
    <TextInput
      autoCapitalize={'none'}
      onChangeText={newCompanyNameValue => {
        try {
          setCompanyName(newCompanyNameValue);
        } catch (err) {
          console.error(err);
        }
      }}
      placeholder={'Company Name'}
      placeholderTextColor={theme.colors['Light']}
      style={StyleSheet.applyWidth(
        {
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderBottomWidth: 1,
          borderColor: theme.colors['Light'],
          borderLeftWidth: 1,
          borderRadius: 12,
          borderRightWidth: 1,
          borderTopWidth: 1,
          fontFamily: 'Inter_400Regular',
          height: 48,
          marginLeft: 30,
          marginRight: 30,
          marginTop: 20,
          paddingBottom: 8,
          paddingLeft: 20,
          paddingRight: 8,
          paddingTop: 8,
        },
        dimensions.width
      )}
      value={companyName}
    />
  );
};

export default withTheme(DefaultInputBoxBlock);
