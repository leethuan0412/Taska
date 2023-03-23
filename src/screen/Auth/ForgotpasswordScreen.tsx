import { R } from "@src/assets/R";
import { AppButton, AppHeader, Block } from "@src/component";
import { AppImage } from "@src/component/AppImage/FstImage";
import RNTextInput from "@src/component/AppInput";
import { Spacing } from "@src/component/appSpacing";
import { FontSize } from "@src/component/fontSize";
import { colors } from "@src/theme";
import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";

 const ForgotpasswordScreen =()=>{

    const [phone, setPhone] =useState('')

    return (
      <Block marginTop={Spacing.height20}>
        <AppHeader goBack title="Forgot Password" styleTitle={styles.title} />
        <Block paddingHorizontal={Spacing.width20}>
          <AppImage
            source={R.images.img_lock}
            resizeMode="cover"
            style={styles.imgLock}
          />
          <Text style={styles.desciption}>
            Select which contact details should we use to reset your password
          </Text>

          <RNTextInput
              leftIcon={R.images.ic_email}
              value={phone}
              onChangeText={setPhone}
              placeholder="Phone number"
              inputContainerStyle={styles.input}
            />

          <AppButton
            label="Continue"
            style={styles.loginPassword}
            labelStyle={styles.txtlogin}
          />
        </Block>
      </Block>
    );
 }
 const styles =StyleSheet.create({
    input:{
        paddingVertical: Spacing.height15,
        borderRadius: Spacing.height12,
        backgroundColor: '#BDBDBD30',
        marginTop: Spacing.height20
    },
    txtlogin:{
        color: colors.white,
        paddingVertical: Spacing.height16,
        fontSize: FontSize.Font16,
        fontWeight: 'bold',
       
      },
      loginPassword:{
        width: '100%',
        justifyContent:'center',
        borderRadius: Spacing.height24,
        marginTop: Spacing.height30,
        backgroundColor:'#246BFD',
        shadowColor: '#246BFD',
        shadowOpacity: 0.1,
        shadowOffset:{
          height:15,
          width:0,
        }
      },
    desciption:{
        fontSize: FontSize.Font16,
        marginTop: Spacing.height10
    },
    title:{
        fontSize: FontSize.Font24,
        fontWeight: 'bold'
    },
    imgLock:{
        height: Spacing.height240,
        width: Spacing.height240,
        marginTop: Spacing.height30,
        alignSelf:'center'
    },
 })
 export {ForgotpasswordScreen}