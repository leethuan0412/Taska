import { R } from '@src/assets/R';
import { AppButton, AppHeader, Block } from '@src/component';
import { AppImage } from '@src/component/AppImage/FstImage';
import { Spacing } from '@src/component/appSpacing';
import { FontSize } from '@src/component/fontSize';
import { NavigationUtils } from '@src/navigation/NavigationUtils';
import { ROUTE_AUTH } from '@src/navigation/RouteAuth';
import { colors } from '@src/theme';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const LoginScreen = () => {
  return (
    <Block flex={1} color={colors.white} >
      <AppHeader goBack />
      <Text style={styles.title}>Let’s you in</Text>
      <Block marginTop={Spacing.height80}>
        <AppButton
          sourceIcon={R.images.ic_fb}
          label="Continue with Facebook"
          labelStyle={styles.label}
          style={styles.btn}
        />
        <AppButton
          sourceIcon={R.images.ic_gg}
          label="Continue with Google"
          labelStyle={styles.label}
          style={styles.btn}
        />
        <AppButton
          sourceIcon={R.images.ic_apple}
          label="Continue with Apple"
          labelStyle={styles.label}
          style={styles.btn}
        />
      </Block>
      <View style={styles.viewLogin}>
        <View style={styles.line} />
        <Text style={styles.or}>or</Text>
        <View style={styles.line} />
      </View>
      <AppButton
        label="Sign in with password"
        style={styles.loginPassword}
        labelStyle={styles.txtlogin}
        onPress={()=> NavigationUtils.navigate(ROUTE_AUTH.LOGIN_EMAIL)}
      />
      <Block
        flex={1}
        direction="row"
        alignItems="center"
        justifyContent="center"
        marginTop={Spacing.height40}>
        <Text style={styles.txtAcc}>Don’t have an account?</Text>
        <TouchableOpacity onPress={()=> NavigationUtils.navigate(ROUTE_AUTH.REGISTER)}>
        <Text style={styles.txtSignup}>Sign up</Text>
        </TouchableOpacity>
      </Block>
    </Block>
  );
};
const styles = StyleSheet.create({
  txtAcc:{
    color: '#9E9E9E',
    fontSize: FontSize.Font14,
  },
  txtSignup:{
    color: '#246BFD',
     fontWeight:'600',
     fontSize: FontSize.Font14,
     marginLeft: Spacing.width5
  },
  txtlogin:{
    color: colors.white,
    paddingVertical: Spacing.height16,
    fontSize: FontSize.Font16,
    fontWeight: 'bold',
   
  },
  loginPassword:{
    backgroundColor:'#246BFD',
    width: '90%',
    justifyContent:'center',
    borderRadius: Spacing.height24,
    marginTop: Spacing.height50,
    shadowColor: '#246BFD',
    shadowOpacity: 0.1,
    shadowOffset:{
      height:15,
      width:0,
    }
  },
  line: {
    height: 1,
    width: '40%',
    backgroundColor: '#9E9E9E80',
  },
  viewLogin: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacing.height50,
    justifyContent: 'center',
  },
  or: {
    fontSize: FontSize.Font20,
    paddingHorizontal: Spacing.width10,
    color: '#616161'
  },
  btn: {
    borderWidth: 1,
    paddingVertical: Spacing.height12,
    width: '90%',
    borderRadius: Spacing.height16,
    justifyContent: 'center',
    marginTop: Spacing.height15,
    borderColor: '#9E9E9E80',
  },
  label: {
    fontSize: FontSize.Font16,
  },
  title: {
    fontSize: FontSize.Font45,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: Spacing.height40,
  },
});
export {LoginScreen};
