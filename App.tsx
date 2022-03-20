import React from 'react';
import { Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View>
        <Text>Start</Text>
      </View>
    </ThemeProvider>
  );
}

