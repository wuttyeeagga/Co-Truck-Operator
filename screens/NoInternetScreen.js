import { StyleSheet, Text, View } from "react-native";
import React from "react";

const NoInternetScreen = () => {
  return (
    <View style={styles.container}>
      <Text>There is no Internet connections!!1</Text>
    </View>
  );
};

export default NoInternetScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
