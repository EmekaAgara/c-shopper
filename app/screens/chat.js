import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      {loading && (
        <ActivityIndicator
          style={styles.activityIndicator}
          size="small"
          color="#808080"
        />
      )}
      <WebView
        source={{ uri: "https://thethaai.netlify.app/" }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        javaScriptEnabled={true}
        // domStorageEnabled={true}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        style={loading ? styles.webViewHidden : styles.webView}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  activityIndicator: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },
  webView: {
    flex: 1,
  },
  webViewHidden: {
    width: 0,
    height: 0,
  },
});

// export default WebViewWithLoading;
