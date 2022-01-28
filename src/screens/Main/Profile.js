import React from 'react';
import { View, Text } from 'react-native';
import Button from '../../components/atom/button';
import { useNavigation } from "@react-navigation/native";

const Profile = () => {

  const navigation = useNavigation();
  function SignIn() {
    return navigation.navigate("SignIn");

  }
  return (
    <View>
      <Button
        textButton="Sign In"
        onPress={SignIn}
      />
    </View>
  )
};

export default Profile;
