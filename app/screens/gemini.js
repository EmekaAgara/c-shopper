import React, { useState, useEffect } from "react";
import { GiftedChat, Bubble, InputToolbar } from "react-native-gifted-chat";
import axios from "axios";
import {
  ActivityIndicator,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const gemini = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("ProfileScreen");
  };

  const { user } = "user";

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: `Hi User 👋\nMy name is Beth AI, Text if you need Help.`,
        createdAt: new Date(),
        user: { _id: 2, name: "Beth" },
      },
    ]);
  }, []);

  const onSend = async (newMessages = []) => {
    const userMessage = newMessages[0].text;

    // Append the user's message to the state
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));

    try {
      setLoading(true);
      const response = await axios.post(
        // "https://api.openai.com/v1/engines/text-davinci-002/completions",
        "https://api.openai.com/v1/completions",
        {
          model: "text-davinci-003",
          // prompt: `Your name is Beth AI. As a medical professional, respond to the user's question with a coherent and informative answer and don't give advice if they dont ask:\n${userMessage}`,
          prompt: `Your name is Beth AI, respond like a casual conversation if no medical question is asked and respond to the user's question with a coherent and informative short answer As a medical professional:\nTopic:${userMessage}\n`,
          temperature: 0.7,
          max_tokens: 150,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          },
        }
      );

      const botMessage =
        response.data.choices[0]?.text || "Sorry, I didn't understand that.";

      // Append the bot's message to the state
      setMessages((prevMessages) =>
        GiftedChat.append(prevMessages, [
          {
            _id: prevMessages.length + 1,
            text: botMessage,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: "Beth",
              // avatar:"" link for avatar
            },
          },
        ])
      );
    } catch (error) {
      console.error("Error sending message to OpenAI:", error);
    } finally {
      setLoading(false); // Set loading back to false after fetching
    }
  };

  const renderInputToolbar = (props) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={styles.inputToolbarContainer}
        primaryStyle={styles.inputToolbarPrimary}
        textInputStyle={{ color: "white" }}
      />
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <SafeAreaView style={styles.HeaderContainer}>
        <StatusBar hidden />
        <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
          <Image
            source={{
              uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAulBMVEVdQPIAAAD///9gQvpeQfVfQfdhQ/w8KZ1ZPehWNvNbPuxWO98bEkZPNs1RONNcPvNUMvNGMLYXDzs5J5QqHW9TOdlLM8M7KZoRCyxdRONnUuG9t+uup+VPLuhmT+daO/PMyOhNKPI/K6UNCSMIBRUvIHsoG2gUDjYdFE0zI4QjGFvy8vero+mVieTo5/Kgl+HKxelGHuyMfuva1/KajukFBA80JIkSDTAMCCElGWBEL7IKBhuViOvNx/aRFjYOAAAExklEQVR4nO3cb3OiSBAGcGBmEP+CGImuiSjJmcTsuuvemmTd3Pf/Wgd6GsTBHAPUDNTze5VKVbq6oWmGQaMZB89fx1pN2F8mx7IM7fDDt3nTlp1ZYWzn9iZR4ey2KTurYtnOdBWv8GZen/N34Puzjwq/z2WnUwZ7/eNQ4aSWBYac1b7C1Vp2JmWx7X2FU192JqVpvkcVThzZeZRovQorHNdvjH7wfxra33UdM3vzZ+1XzW71Cc5Em9a5ScM2fZedQdns2jxOpGrJTgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgypjZslomKyCOZrUIowWkVChGA1fXdbeh5auRkv5jGGf0YuU/VoUi3Xt9b+OZOeKwtvtfHH2bJ07hyFb/kCM11ovFeVGoRObpcX0iGIcOT+IMlCmRWvqptuCYoHencTxVrkVzmaiwI3YSzadEnHtFBir19KS+yMGn7bM4A9F+L5bpnmX2KpKZeXUWRy88WRG0d56Y7mXvr7OrORKocCWSvziZLbKfRNbgxHFVGKeMk5hIe5kdXhzRsVwgbpOKtCmvSZVoU25zhVMwa2aciRwRaPeiEc4EDC2zXkBswI1zL/9CNF+5md1lPYdkwY2jy/8POvxBkz0zwh00uj6UPmr4AyL7EKRv/DgCd9ZicZZagsc+JY7QArBIqRX2UGFS5SrM2qVU1QoLmzTsjh9H+qTRSEqFmeMoe7cwH7iJjTLf8flrIwXu+CmZ/c66nkxZtb3JX7WxgJtZUSvvK/kr78QO4EE38+XT4sZR4OlJY/e8zLLPB/ORF0eBJ2CNJPcABZuL2+4d+ZdhykN+9ibl31lVaFJue7ki84G3paVAj4Zo9ywxoe14znZiQ4lTGJ7E5OP5o9jVQ14ScTJvFJSFJge9JdhcLLE+yvx8Uhp22qfCr4wSDyqB/Lv9EYkvSIRfH4aHKr58uFbhTnHEhocGu+vlOfLMOg7mvlIFhg3GtsuNvlluSb5rh5re4k94pw9yfuKhDCysjZL8edHoGBUQBwAAAAAAAKBk1Ixk+sYEZYzs/qq8rApEe5vRaPT6FPQskxB2uVC6q40N+4Nl+EcjtxKP9rH3GG+/nwaNdosSEpXKaCgqKiqL7X5H28PG9SL2GWNlNkgvYmdv5Dsd9yoIAq/bHVpWu9vtbYPgxe10zj6coMaLmE+lfOL0f1gqtAV8ERMssdOqRpNq0f4w973wJx61yhQYbV2ff0PhMwtaoQKjbV3eu+9LgmrcC2NM70+G+txhVYZMDGslX3heOIHVmTEnSDvls9sJV1oFT+AeNXu8L9Qk6mtX7gqMo2TY2Fwo76Fhqfed5owo07ppJ/LJ+2RhXhWUWL1gefophIdOo2vlfJuqFBo+S7S968bedVhcTc7eid1D0161li8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQKfL/p3vJ7LE2tWUnUSr/XfvVlJ1EqZyJNpvLTqJUzrNmjOvcpv5PQzMmjuw0SrRehRUaU192HqVpvhtRhau17ETKYvvGrkLjn7qWGPbovkLjey3nqb3+YRwqNG7m9Ruovj8zPio0Zrc1u/HbznRlxCs0jG/zZn3Oo+3c3hwKO1ZoPH8dy06sKPaXybEs4196Yje7GW1+GAAAAABJRU5ErkJggg==",
            }}
            resizeMode="cover"
            style={styles.btnImg}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.HelloText}>Beth AI</Text>
          <Text style={styles.descText1}>Online </Text>
        </TouchableOpacity>
      </SafeAreaView>
      <GiftedChat
        messages={messages}
        onSend={(newMessages) => onSend(newMessages)}
        user={{ _id: 1, name: "User" }}
        renderBubble={(props) => (
          <Bubble
            {...props}
            wrapperStyle={{
              left: {
                backgroundColor: "#141518", // Dark background color for user messages
                borderRadius: "6",
                padding: 7,
              },
              right: {
                backgroundColor: "#A020F0", // Dark background color for bot messages
                borderRadius: "6",

                padding: 7,
              },
            }}
            textStyle={{
              left: {
                color: "white", // Change the color to your desired color
              },
            }}
          />
        )}
        renderInputToolbar={(props) => renderInputToolbar(props)}
      />
      {loading && (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator size="small" color="gray" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderContainer: {
    display: "flex",
    flexDirection: "row",

    // alignSelf: "left",
    // justifyContent: "space-between",
    // marginLeft: "10",
  },
  HelloText: {
    color: "white",
    fontSize: 20,
    // fontWeight: 700,
    textAlign: "center",
    paddingBottom: 1,
  },

  descText1: {
    color: "#898A8B",
    fontSize: 11,
    // fontWeight: 600,
    textAlign: "left",
    paddingBottom: 20,
    paddingLeft: 0,
  },
  btnImg: {
    marginLeft: 30,
    marginRight: 10,
    height: 40,
    width: 40,
    resizeMode: "contain",
    borderRadius: 30,
    // alignSelf: "center",
  },
  inputToolbarContainer: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#b2b2b2",
    backgroundColor: "#222",
    padding: 2,
  },
  inputToolbarPrimary: {
    alignItems: "center",
    color: "white",
  },
});

export default gemini;
