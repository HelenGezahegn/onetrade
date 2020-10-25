import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: "center",
  },
  viewContainer: {
    marginBottom: 200,
    alignSelf: "center",
    alignItems: "center",
  },
  haveAccountText: {
    color: "grey",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginText: {
    color: "#6c63ff",
    marginTop: 100,
  },
  gettingStartedContainer: {
    elevation: 8,
    backgroundColor: "#6c63ff",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  gettingStartedText: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },
});

const image = require("../assets/landing.png");

const Landing = () => {
  const renderGettingStartedButton = () => {
    return (
      <TouchableOpacity style={styles.gettingStartedContainer}>
        <Text style={styles.gettingStartedText}>Getting Started</Text>
      </TouchableOpacity>
    );
  };

  const renderLoginPrompt = () => {
    return (
      <Text style={styles.haveAccountText}>
        Already have an account?
        <Text style={styles.loginText}> Log in.</Text>
      </Text>
    );
  };

  return (
    <ImageBackground
      source={image}
      imageStyle={{
        resizeMode: "contain",
      }}
      style={styles.imageContainer}
    >
      <View style={styles.viewContainer}>
        {renderGettingStartedButton()}
        {renderLoginPrompt()}
      </View>
    </ImageBackground>
  );
};

export default Landing;
