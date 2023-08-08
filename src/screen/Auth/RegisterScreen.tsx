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
import Api from '@src/service/Network/ApiService';
import {colors} from '@src/theme';
import {Formik} from 'formik';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as Yup from 'yup';

const RegisterScreen = () => {
  const RegisterSchema = Yup.object().shape({
    email: Yup.string().trim().email().required('Email invalid'),
    password: Yup.string().trim().min(4).required('more than 4 characters'),
  });

  const handleSubmit = async (values: {
    email: string;
    password: string;
    lastName: string;
    firstName: string;
  }) => {
    try {
      const body = {
        email: values.email,
        password: values.password,
        lastName: values.lastName,
        firstName: values.firstName,
      };
      showLoading();
      const res = await Api.register(body);
      console.log(res, 'res');

      hideLoading();
      // if (res?.ok) {
      //   NavigationUtils.goBack();
      // }
    } catch (error) {
      console.log(error, 'error');
    }
  };

  return (
    <Block flex={1} color={colors.white}>
      <AppHeader goBack />
      <DismissKeyboard>
        <Block paddingHorizontal={Spacing.width20}>
          <Text style={styles.title}>Create your Account</Text>
          <Block marginTop={Spacing.height40}>
            <Formik
              initialValues={{
                email: 'van.thuan@blockodyssey.io',
                password: '1111',
                firstName: 'leduc',
                lastName: 'thuan',
              }}
              onSubmit={handleSubmit}
              validationSchema={RegisterSchema}>
              {({handleChange, handleSubmit, values, errors, touched}) => (
                <>
                  <RNTextInput
                    value={values.firstName}
                    onChangeText={handleChange('firstName')}
                    leftIcon={R.images.ic_user}
                    placeholder="First Name"
                    inputContainerStyle={styles.input}
                    errorMessage={errors.firstName}
                    touched={touched.firstName}
                  />
                  <RNTextInput
                    value={values.lastName}
                    onChangeText={handleChange('lastName')}
                    leftIcon={R.images.ic_user}
                    placeholder="Last Name"
                    inputContainerStyle={styles.input}
                    errorMessage={errors.lastName}
                    touched={touched.lastName}
                  />
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

                  <AppButton
                    label="Sign up"
                    style={[styles.loginPassword, {backgroundColor: '#246BFD'}]}
                    labelStyle={styles.txtlogin}
                    onPress={handleSubmit}
                  />
                </>
              )}
            </Formik>
            <Block
              direction="row"
              alignItems="center"
              justifyContent="center"
              marginTop={Spacing.height50}>
              <Text style={styles.txtAcc}>Already have an account?</Text>
              <TouchableOpacity
                onPress={() =>
                  NavigationUtils.navigate(ROUTE_AUTH.LOGIN_EMAIL)
                }>
                <Text style={styles.txtSignup}>Sign in</Text>
              </TouchableOpacity>
            </Block>
          </Block>
        </Block>
      </DismissKeyboard>
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
