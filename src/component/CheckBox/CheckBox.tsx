import { R } from "@src/assets/R";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { AppImage } from "../AppImage/FstImage";
import { Spacing } from "../appSpacing";
import { Block } from "../Block";

interface Props{
    isCheck : boolean,
    onPress?: ()=> void
}

const  CheckBox =(props :Props)=>{
    const {isCheck,onPress}= props

    return (
      <TouchableOpacity onPress={onPress}>
        <Block
          height={Spacing.height24}
          width={Spacing.height24}
          borderWidth={5}
          borderRadius={Spacing.height8}
          borderColor="#246BFD"
          alignItems="center"
          justifyContent="center"
          color={isCheck ? '#246BFD' : '#fff'}>
          {isCheck && (
            <AppImage
              source={R.images.ic_check}
              resizeMode="contain"
              style={styles.iconCheck}
            />
          )}
        </Block>
      </TouchableOpacity>
    );
}
const styles =StyleSheet.create({
    iconCheck :{
        height: Spacing.height10,
        width: Spacing.height15,
    },
})
export {CheckBox}