import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Image,
  Dimensions,
} from "react-native";
import { Video, ResizeMode } from "expo-av";
import { Link, Slot, useNavigation, useRouter } from "expo-router";
import SlidingText from "../components/SlidingText";
const { height: deviceHeight } = Dimensions.get("window");
import { StatusBar } from "expo-status-bar";
import { useWeb3Modal } from "@web3modal/wagmi-react-native";

export default function App() {
  <StatusBar hidden={true} />;
  const { open } = useWeb3Modal();
  const router = useRouter();

  const onConnectPressed = () => {
    router.push({ pathname: "screens/home" });
    open();
  };
  return (
    <View style={styles.container}>
      <Video
        style={styles.video}
        source={{
          uri: "https://videos.pexels.com/video-files/7660180/7660180-uhd_1440_2560_25fps.mp4",
        }}
        shouldPlay
        isLooping={true}
        resizeMode={ResizeMode.COVER}
        //  resizeMode
      />
      <Image style={styles.logo} source={require("../assets/logo.png")} />

      <View style={styles.textContainer}>
        <Text style={styles.mainText}>Crypto Shoppr</Text>

        <SlidingText />
        <TouchableOpacity
          onPress={onConnectPressed}
          style={styles.ButtonContainer}
        >
          <Text style={styles.ButtonText}>Get Started</Text>
        </TouchableOpacity>
        <Text style={styles.subText}>
          Shop with ease, buy, earn and swap loyalty tokens and checkout with
          cryptocurrency
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 20,
  },
  w3mButton: {
    marginLeft: "auto",
    padding: 50,
    color: "white",
  },
  video: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  textContainer: {
    display: "flex",
    // alignItems: "center",
    justifyContent: "flex-start",
    // paddingTop: "150%",
    paddingTop: deviceHeight * 0.75,
    // marginBottom: deviceHeight * 0.09,
    flex: 1,
    backgroundColor: "#0000005c",
    paddingHorizontal: 20,
  },

  mainText: {
    fontSize: 28,
    fontWeight: "600",
    color: "white",
  },
  subText: {
    fontSize: 12,
    marginTop: 10,
    textAlign: "center",
    color: "white",
  },
  ButtonContainer: {
    backgroundColor: "#0067f3",
    width: "100%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },

  ButtonText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "600",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  logo: {
    position: "absolute",
    alignSelf: "center",
    // marginTop: "35%",
    zIndex: 1,
    width: "60%",
    height: "60%",
    resizeMode: "contain",
  },
});
