import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const data = [
  {
    id: "1",
    image: require("../../assets/logo.png"),
    title: "Meta Lama 7B",
    description: "Using Google Gemini Test chat functiionality",
    screen: "aichat",
  },

  {
    id: "2",
    image: require("../../assets/logo.png"),
    title: "Meta Lama",
    description: "Using Meta Lama Test chat functiionality",
    screen: "chat",
  },

  {
    id: "3",
    image: require("../../assets/logo.png"),
    title: "Google Gemini Test",
    description: "Using Google Gemini Test chat functiionality",
    screen: "googleai",
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
    <View style={styles.container}>
      <StatusBar style="hidden" />
      <View style={styles.container} behavior="padding">
        <Text style={styles.HelloText}>Enter your Location</Text>

        <TouchableOpacity
          onPress={onThethaChatPressed}
          style={styles.ButtonContainer}
        >
          <Text style={styles.ButtonText}> Recommended Products</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onGeminiPressed}
          style={styles.ButtonContainer}
        >
          <Text style={styles.ButtonText}> Get new Operational Account</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onGoogleGemPressed}
          style={styles.ButtonContainer}
        >
          <Text style={styles.ButtonText}>Standby Account send xrp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  HelloText: {
    color: "white",
    fontSize: 25,
    fontWeight: 700,
    textAlign: "left",
    paddingHorizontal: 20,
  },

  mainText: {
    color: "white",
    fontSize: 30,
    fontWeight: 700,
    textAlign: "center",
    paddingHorizontal: 50,
    paddingBottom: 10,
  },

  wText: {
    color: "white",
    fontSize: 90,
    fontWeight: 600,
    textAlign: "center",
    paddingHorizontal: 50,
    marginVertical: 15,
  },

  dText: {
    color: "white",
    fontSize: 15,
    fontWeight: 600,
    textAlign: "center",
    paddingHorizontal: 50,
    color: "#818589",
    lineHeight: 20,
  },

  sText: {
    color: "white",
    fontSize: 20,
    fontWeight: 600,
    textAlign: "center",
    paddingHorizontal: 50,
    color: "#ffffff",
    lineHeight: 20,
    paddingTop: 10,
  },

  subText: {
    color: "white",
    fontSize: 15,
    fontWeight: 500,
    textAlign: "center",
    paddingHorizontal: 50,
    color: "#818589",
    lineHeight: 20,
  },

  weatherImg: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 250,
    alignContent: "center",
    alignSelf: "center",
    marginVertical: 30,
  },

  textInput: {
    backgroundColor: "#212125",
    height: 55,
    width: "90%",
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 25,
    alignSelf: "flex-start",
    borderRadius: 7,
    color: "#818589",
  },

  ButtonContainer: {
    backgroundColor: "#5659C6",
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 140,
    marginBottom: 10,
  },

  ButtonText: {
    fontSize: 15,
    color: "#fff",
    fontWeight: 500,
    alignSelf: "center",
  },
});
