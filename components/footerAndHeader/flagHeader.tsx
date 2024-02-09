import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import CountryFlag from 'react-native-country-flag';

const HeaderComponent = () => {
  const [language, setLanguage] = useState('en');
  const [isPickerVisible, setPickerVisible] = useState(false);

  const handleLanguageChange = (value: string) => {
    setLanguage(value);
    setPickerVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setPickerVisible(true)}>
        <CountryFlag isoCode={language === 'en' ? 'US' : 'PL'} size={32} />
      </TouchableOpacity>
      {isPickerVisible && (
        <Picker selectedValue={language} onValueChange={handleLanguageChange}>
          <Picker.Item label="English" value="en" />
          <Picker.Item label="Polski" value="pl" />
        </Picker>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
  },
});

export default HeaderComponent;
