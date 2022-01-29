import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Button from '../../components/atom/button';
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch, } from "react-redux";
import { LogIn } from "../../redux/User";
import EditPRofile from "../../components/organisms/EditProfile";

const Setting = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  function Edit() {
    return navigation.navigate("EditProfile");
  }
  function Logout() {
    dispatch(LogIn(false));
    return navigation.navigate("Splash");
  }
  function SignIn() {
    return navigation.navigate("SignIn");
  }
  return (
    <View style={styles.screen}>
      {user.loggedIn ? (
        <>
          <EditPRofile />
          <Text style={styles.textStyle}>Or</Text>
          <Button
            textButton="Logout"
            onPress={Logout}
          />
        </>
      ) : (
        <Button
          textButton="Sign In"
          onPress={SignIn}
        />
      )
      }
    </View>
  )
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  textStyle: {
    fontSize: 20,
    marginVertical: 5,
    textAlign: 'center',
  },
})
export default Setting;
