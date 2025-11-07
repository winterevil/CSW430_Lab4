import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const DetailListItem = ({ icon, title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Icon name={icon} size={24} style={styles.icon} />
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#ccc",
  },
  icon: {
    color: "#663399",
    marginRight: 16,
  },
  details: {
    flexDirection: "column",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  subtitle: {
    color: "gray",
    fontSize: 14,
    marginTop: 4,
  },
});

export default DetailListItem;
