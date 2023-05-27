import {View, Text} from 'react-native';
import React from 'react';
import CustomButton from '../CustomButton/CustomButton';

const SocialSignInButtons = () => {
  const onSignInWithFacebook = () => {
    console.warn('Sign in with Facebook button pressed');
  };

  const onSignInWithGoogle = () => {
    console.warn('Sign in with Google button pressed');
  };

  const onSignInWithApple = () => {
    console.warn('Sign in with Apple button pressed');
  };
  return (
    <>
      <CustomButton
        text="Sign In with Facebook"
        onPress={onSignInWithFacebook}
        type="TERTIARY"
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
      <CustomButton
        text="Sign In with Apple"
        onPress={onSignInWithGoogle}
        type="TERTIARY"
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      <CustomButton
        text="Forget Password"
        onPress={onSignInWithApple}
        type="TERTIARY"
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
    </>
  );
};

export default SocialSignInButtons;
