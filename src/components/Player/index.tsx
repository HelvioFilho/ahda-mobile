import React, { useEffect, useState } from 'react';
import { Audio } from 'expo-av';
import { Button, View } from 'react-native';

import { Container } from './styles';

export function Player() {
  const urlPlayer = "https://s18.maxcast.com.br:8707/live";
  const [sound, setSound] = useState();
  const [playing, setPlaying] = useState(false);

  const source = { uri: "https://s18.maxcast.com.br:8707/live" }
  const initialStatus = { shouldPlay: playing }

  async function playSound() {
    console.log('Loading Sound');
    Audio.setAudioModeAsync(
      {
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
        shouldDuckAndroid: true,
        staysActiveInBackground: true,
        playThroughEarpieceAndroid: true,
      }
    )
    const { sound } = await Audio.Sound.createAsync(source, initialStatus);
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  useEffect(() => {
    playing && playSound();
  }, []);

  return (
    <Container>
      <View>
        <Button title="Play Sound" onPress={playSound} />
      </View>
    </Container>
  );
}