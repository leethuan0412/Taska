import {R} from '@src/assets/R';
import {AppButton, AppHeader, Block} from '@src/component';
import {AppImage} from '@src/component/AppImage/FstImage';
import RNTextInput from '@src/component/AppInput';
import {Spacing} from '@src/component/appSpacing';
import DismissKeyboard from '@src/component/DismissKeyboard';
import {FontSize} from '@src/component/fontSize';
import {
  hideLoading,
  showLoading,
} from '@src/component/Loading/LoadingProgressRef';
import {NavigationUtils} from '@src/navigation/NavigationUtils';
import {ROUTE_AUTH} from '@src/navigation/RouteAuth';
import {setUserProfile} from '@src/redux/slices/accountSlice';
import Api from '@src/service/Network/ApiService';
import {colors} from '@src/theme';
import {Formik} from 'formik';
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import * as Yup from 'yup';

const LoginEmailScreen = () => {
  const [check, setCheck] = useState(false);
  const dispatch = useDispatch();

  const RegisterSchema = Yup.object().shape({
    email: Yup.string().trim().email().required('Email invalid'),
    password: Yup.string().trim().min(4).required('more than 4 characters'),
  });

  const handleSubmit = async (values: {email: string; password: string}) => {
    try {
      const payload = {
        email: values.email,
        password: values.password,
      };
      showLoading();
      const res = await Api.login(payload);
      console.log(res?.data?.accessToken, 'res?.data?.accessToken');

      if (res?.ok) {
        dispatch(setUserProfile({name: res?.data?.accessToken}));
      }
      hideLoading();
      console.log(res, 'res');
    } catch (error) {
      console.log(error, 'errr');
    }
  };

  return (
    <Block flex={1} color={colors.white}>
      <AppHeader goBack />
      <DismissKeyboard>
        <Block paddingHorizontal={Spacing.width20}>
          <Text style={styles.title}>Login to your Account</Text>
          <Block marginTop={Spacing.height40}>
            <Formik
              initialValues={{
                email: 'abc@gmail.com',
                password: '1111',
              }}
              onSubmit={handleSubmit}
              validationSchema={RegisterSchema}>
              {({handleChange, handleSubmit, values, errors, touched}) => (
                <>
                  <RNTextInput
                    value={values.email}
                    onChangeText={handleChange('email')}
                    leftIcon={R.images.ic_email}
                    placeholder="email"
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
                    style={[
                      styles.loginPassword,
                      {backgroundColor: check ? '#246BFD' : '#476EBE'},
                    ]}
                    labelStyle={styles.txtlogin}
                    onPress={handleSubmit}
                  />
                </>
              )}
            </Formik>
            <TouchableOpacity
              onPress={() =>
                NavigationUtils.navigate(ROUTE_AUTH.FORGOTPASSWORD)
              }>
              <Text style={styles.txtForgot}>Forgot the password?</Text>
            </TouchableOpacity>

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
                onPress={() => NavigationUtils.navigate(ROUTE_AUTH.REGISTER)}>
                <Text style={styles.txtSignup}>Sign up</Text>
              </TouchableOpacity>
            </Block>
          </Block>
        </Block>
      </DismissKeyboard>
    </Block>
  );
};
const styles = StyleSheet.create({
  txtForgot: {
    fontSize: FontSize.Font16,
    color: '#246BFD',
    textAlign: 'center',
    marginTop: Spacing.height20,
  },
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
export {LoginEmailScreen};
