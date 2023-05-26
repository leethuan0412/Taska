import {R} from '@src/assets/R';
import {AppButton, AppHeader, Block} from '@src/component';
import {AppImage} from '@src/component/AppImage/FstImage';
import RNTextInput from '@src/component/AppInput';
import {Spacing} from '@src/component/appSpacing';
import {FontSize} from '@src/component/fontSize';
import {NavigationUtils} from '@src/navigation/NavigationUtils';
import {ROUTE_AUTH} from '@src/navigation/RouteAuth';
import {colors} from '@src/theme';
import {Formik} from 'formik';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as Yup from 'yup';

const RegisterScreen = () => {
  const [loading, setLoading] = React.useState(false);

  const RegisterSchema = Yup.object().shape({
    email: Yup.string().trim().email().required('Email invalid'),
    password: Yup.string().trim().min(6).required('more than 4 characters'),
  });

  const handleSubmit = (values: {email: string; password: string}) => {
    // setLoading(true);
    // auth()
    //   .createUserWithEmailAndPassword(values.email, values.password)
    //   .then((res) => {
    //     let uid = auth().currentUser.uid;
    //     auth().currentUser.updateProfile({displayName: 'User'});
    //     firestore().collection('Profiles').doc(uid).set({
    //       name: 'User'
    //     })
    //     showMessage({
    //       message: 'Successfully',
    //       type: 'success',
    //     });
    //     NavigationUtils.navigate(ROUTE_AUTH.LOGIN_EMAIL);
    //   })
    //   .catch((error) => {
    //     if (error.code === 'auth/email-already-in-use') {
    //       setLoading(false);
    //       Alert.alert('Email này đã tồn tại!');
    //     }
    //     if (error.code === 'auth/invalid-email') {
    //       setLoading(false);
    //       Alert.alert('Địa chỉ email không hợp lệ!');
    //     }
    //   });
  };

  return (
    <Block flex={1} color={colors.white}>
      <AppHeader goBack />
      <Block paddingHorizontal={Spacing.width20}>
        <Text style={styles.title}>Create your Account</Text>
        <Block marginTop={Spacing.height40}>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={handleSubmit}
            validationSchema={RegisterSchema}>
            {({handleChange, handleSubmit, values, errors, touched}) => (
              <>
                <RNTextInput
                  value={values.email}
                  onChangeText={handleChange('email')}
                  leftIcon={R.images.ic_email}
                  placeholder="Email"
                  inputContainerStyle={styles.input}
                  errorMessage={errors.email}
                  touched={touched.email}
                />
                <RNTextInput
                  value={values.password}
                  onChangeText={handleChange('password')}
                  leftIcon={R.images.ic_lock}
                  placeholder="Password"
                  inputContainerStyle={styles.input}
                  secureTextEntry
                  errorMessage={errors.password}
                  touched={touched.password}
                />
                {/* <Block
              direction="row"
              alignItems="center"
              justifyContent="center"
              marginTop={Spacing.height20}>
              <CheckBox isCheck={check} onPress={() => setCheck(!check)} />
              <Text style={styles.remember}>Remember me</Text>
            </Block> */}
                <AppButton
                  label="Sign up"
                  style={[styles.loginPassword, {backgroundColor: '#246BFD'}]}
                  labelStyle={styles.txtlogin}
                  onPress={handleSubmit}
                />
              </>
            )}
          </Formik>
          <View style={styles.viewLogin}>
            <View style={styles.line} />
            <Text style={styles.or}>or continue with</Text>
            <View style={styles.line} />
          </View>
          <Block
            direction="row"
            alignItems="center"
            justifyContent="space-around"
            marginTop={Spacing.height40}>
            <TouchableOpacity style={styles.btnFb}>
              <AppImage
                source={R.images.ic_fb}
                style={styles.iconFb}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnFb}>
              <AppImage
                source={R.images.ic_gg}
                style={styles.iconFb}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnFb}>
              <AppImage
                source={R.images.ic_apple}
                style={styles.iconFb}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </Block>

          <Block
            direction="row"
            alignItems="center"
            justifyContent="center"
            marginTop={Spacing.height50}>
            <Text style={styles.txtAcc}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => NavigationUtils.navigate(ROUTE_AUTH.LOGIN_EMAIL)}>
              <Text style={styles.txtSignup}>Sign in</Text>
            </TouchableOpacity>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};
const styles = StyleSheet.create({
  btnFb: {
    borderWidth: 1,
    paddingVertical: Spacing.height10,
    paddingHorizontal: Spacing.width20,
    borderRadius: Spacing.height16,
    borderColor: '#91919150',
  },
  iconFb: {
    height: Spacing.height24,
    width: Spacing.height24,
  },
  txtAcc: {
    color: '#9E9E9E',
    fontSize: FontSize.Font14,
  },
  txtSignup: {
    color: '#246BFD',
    fontWeight: '600',
    fontSize: FontSize.Font14,
    marginLeft: Spacing.width5,
  },
  line: {
    height: 1,
    width: '25%',
    backgroundColor: '#9E9E9E80',
  },
  viewLogin: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacing.height40,
    justifyContent: 'center',
  },
  or: {
    fontSize: FontSize.Font20,
    paddingHorizontal: Spacing.width10,
    color: '#616161',
  },
  txtlogin: {
    color: colors.white,
    paddingVertical: Spacing.height16,
    fontSize: FontSize.Font16,
    fontWeight: 'bold',
  },
  loginPassword: {
    width: '100%',
    justifyContent: 'center',
    borderRadius: Spacing.height24,
    marginTop: Spacing.height20,
    shadowColor: '#246BFD',
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 15,
      width: 0,
    },
  },
  remember: {
    fontSize: FontSize.Font14,
    marginLeft: Spacing.width10,
  },
  input: {
    paddingVertical: Spacing.height15,
    borderRadius: Spacing.height12,
    backgroundColor: '#BDBDBD30',
  },
  title: {
    fontSize: FontSize.Font40,
    fontWeight: 'bold',
    marginTop: Spacing.height20,
  },
});
export {RegisterScreen};
