import React from 'react';
import { Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import { SinglePage } from './src/screens/SinglePage';


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SinglePage />
    </ThemeProvider>
  );
}

