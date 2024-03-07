/*
 * Copyright (c) 2022 Amazon.com, Inc. or its affiliates.  All rights reserved.
 *
 * PROPRIETARY/CONFIDENTIAL.  USE IS SUBJECT TO LICENSE TERMS.
 */

import React, {useState} from 'react';
import {StyleSheet, Text, ImageBackground, View, Image} from 'react-native';
import {Link} from './components/Link';

const images = {
  kepler: require('./assets/kepler.png'),
  shakaplayer: require('./assets/shakaplayer.png'),
  bitmovin: require('./assets/bitmovin.png'),
  hls: require('./assets/hls.png'),
};

export const App = () => {
  const [image, setImage] = useState(images.kepler);

  const styles = getStyles();

  return (
    <ImageBackground
      source={require('./assets/background.png')}
      style={styles.background}>
      <View style={styles.container}>
        <View style={styles.links}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Player Playground</Text>
            <Text style={styles.subHeaderText}>
              Choose a player from the list below to embark on your video
              journey.
            </Text>
          </View>
          <Link
            linkText={'Shaka Player'}
            onPress={() => {
              setImage(images.shakaplayer);
            }}
            testID="sampleLink"
          />
          <Link
            linkText={'HLS Player'}
            onPress={() => {
              setImage(images.hls);
            }}
          />
          <Link
            linkText={'Bitmovin Player'}
            onPress={() => {
              setImage(images.bitmovin);
            }}
          />
        </View>
        <View style={styles.image}>
          <Image source={image} />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          💡 This app is exclusively designed for enhancing player development.
        </Text>
      </View>
    </ImageBackground>
  );
};

const getStyles = () =>
  StyleSheet.create({
    background: {
      color: 'white',
      flex: 1,
      flexDirection: 'column',
    },
    container: {
      flex: 6,
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerContainer: {
      marginLeft: 200,
    },
    headerText: {
      color: 'white',
      fontSize: 80,
      marginBottom: 10,
    },
    subHeaderText: {
      color: 'white',
      fontSize: 40,
    },
    links: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-around',
      height: 600,
    },
    image: {
      flex: 1,
      paddingLeft: 150,
    },
    textContainer: {
      justifyContent: 'center',
      flex: 1,
      marginLeft: 190,
    },
    text: {
      color: 'white',
      fontSize: 40,
    },
  });
