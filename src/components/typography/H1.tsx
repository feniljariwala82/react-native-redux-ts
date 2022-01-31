import { StyleSheet, Text, View } from "react-native";
import React from "react";

const H1 = (props: any) => {
  return (
    <View>
      <Text style={styles.body}>{props.children}</Text>
    </View>
  );
};

export default H1;

const styles = StyleSheet.create({
  body: {
    fontFamily: "open-bold",
    fontSize: 24,
  },
});
