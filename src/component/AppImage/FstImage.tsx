import React, {useState} from 'react';
import {ActivityIndicator, Button, Image, StyleSheet, View} from 'react-native';
import FastImage, {FastImageProps} from 'react-native-fast-image';
import {R} from '../../assets/R';
import {colors} from '../../theme';
import {Spacing} from '../appSpacing';

const AppImage = (props: FastImageProps) => {
  const [imageLoading, setImageLoading] = useState(false);
  const [error, setError] = useState(false);
  const [, useReloadKey] = useState(new Date().getTime().toString());
  const reloadImage = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useReloadKey(new Date().getTime().toString());
  };
  return (
    <FastImage
      {...props}
      children={
        imageLoading ? (
          <View
            style={styles.image}
            children={
              <ActivityIndicator
                color={colors.primary}
                style={styles.activity}
              />
            }
          />
        ) : error ? (
          <Button
            style={styles.btnRefresh}
            children={
              <Image
                style={styles.iconImageErr}
                source={R.images.ic_refresh}
                resizeMode="center"
              />
            }
            onPress={reloadImage}
          />
        ) : (
          props.children
        )
      }
      onLoadStart={() => {
        setError(false);
        setImageLoading(true);
      }}
      onLoadEnd={() => {
        setImageLoading(false);
        setError(false);
      }}
      onError={() => {
        setError(true);
        setImageLoading(false);
      }}
    />
  );
};
const styles = StyleSheet.create({
  activity: {
    flex: 1,
  },
  iconImageErr: {
    alignSelf: 'center',
    width: Spacing.height22,
    height: Spacing.height22,
  },
  btnRefresh: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  image: {
    backgroundColor: colors.backgroundColor,
    flex: 1,
    overflow: 'hidden',
  },
});
export {AppImage};
