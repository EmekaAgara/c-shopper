import React from "react";
import { useRouter } from "expo-router";
// import { StatusBar } from 'expo-status-bar';
import Icon from "react-native-vector-icons/Ionicons";
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  TextInput,
  SafeAreaView,
  Image,
} from "react-native";
import { W3mButton } from "@web3modal/wagmi-react-native";

const options = [
  {
    image: require("../../assets/image.jpeg"),
    title: "Sport",
    subtitle: "Amateur leagues, fan groups",
    screen: "screens/products",
  },
  {
    image: require("../../assets/image.jpeg"),
    title: "Youth organisation",
    subtitle: "Scouts, clubs, outreach programmes",
    screen: "screens/products",
  },
  {
    image: require("../../assets/image.jpeg"),
    title: "Project",
    subtitle: "Planning, brainstorming, hobbies",
    screen: "screens/products",
  },
  {
    image: require("../../assets/image.jpeg"),
    title: "Business",
    subtitle: "Customer engagement, networking",
    screen: "screens/products",
  },
  {
    image: require("../../assets/image.jpeg"),
    title: "Volunteering",
    subtitle: "Non-profits, mentoring, fundraising",
    screen: "screens/products",
  },
];

export default function home() {
  const router = useRouter();
  const onThethaChatPressed = () => {
    router.push({ pathname: "aichat" });
  };

  const onGeminiPressed = () => {
    router.push({ pathname: "chat" });
  };
  const onGoogleGemPressed = () => {
    router.push({ pathname: "screens/products" });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profile}>
          <View style={styles.profileIcon}>
            <Text style={styles.profileInitials}>EA</Text>
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationText}>2</Text>
            </View>
          </View>
        </View>
        <View style={styles.searchContainer}>
          <W3mButton balance="show" size="md" />
        </View>
        <TouchableOpacity style={styles.groupIcon}>
          <Icon name="people-circle" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>
          Get everyone together by creating a community
        </Text>
        <View style={styles.createButton}>
          <Icon name="search" size={24} color="#888" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#888"
          />
          {/* <Text style={styles.createButtonText}>Create my own</Text> */}
        </View>
        <View style={styles.optionsContainer}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.option}
              onPress={() => router.push({ pathname: option.screen })}
            >
              <Image source={option.image} style={styles.optionImage} />
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionTitle}>{option.title}</Text>
                <Text style={styles.optionSubtitle}>{option.subtitle}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  profile: {
    flex: 1,
  },
  profileIcon: {
    position: "relative",
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#444",
    justifyContent: "center",
    alignItems: "center",
  },
  profileInitials: {
    color: "#fff",
    fontWeight: "bold",
  },
  notificationBadge: {
    position: "absolute",
    top: -4,
    right: -4,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  notificationText: {
    color: "#fff",
    fontSize: 12,
  },
  searchContainer: {
    flex: 4,
    marginLeft: 16,
  },
  searchInput: {
    // backgroundColor: "#333",
    borderRadius: 8,
    paddingHorizontal: 16,
    color: "#fff",
    width: "95%",
    padding: 15,
  },
  groupIcon: {
    marginLeft: 16,
  },
  content: {
    padding: 16,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 16,
  },
  createButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#222",
    borderRadius: 8,
    padding: 6,
    marginBottom: 16,
    paddingLeft: 20,
    shadowColor: "#cf6679",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  createButtonText: {
    color: "#888",
    marginLeft: 8,
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  option: {
    width: "48%",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#222",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  optionImage: {
    width: 50,
    height: 50,
    marginBottom: 8,
  },
  optionTextContainer: {
    alignItems: "center",
  },
  optionTitle: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  optionSubtitle: {
    color: "#888",
    textAlign: "center",
  },
});
