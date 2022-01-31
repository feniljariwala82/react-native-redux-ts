import { StyleSheet, Text, View } from "react-native";
import React from "react";

const H3 = (props: any) => {
  return (
    <View>
      <Text style={styles.body}>{props.children}</Text>
    </View>
  );
};

export default H3;

const styles = StyleSheet.create({
  body: {
    fontFamily: "open-bold",
    fontSize: 20,
  },
});
