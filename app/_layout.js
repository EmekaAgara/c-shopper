import "@walletconnect/react-native-compat";
import { WagmiProvider } from "wagmi";
import { mainnet, polygon, arbitrum } from "@wagmi/core/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createWeb3Modal,
  defaultWagmiConfig,
  Web3Modal,
} from "@web3modal/wagmi-react-native";
import { Stack } from "expo-router";
import { emailConnector } from "@web3modal/email-wagmi-react-native";

const email = emailConnector({ projectId, metadata });

// 0. Setup queryClient
const queryClient = new QueryClient();

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "cd45e15368c667448a32a7748009c38b";

// 2. Create config
const metadata = {
  name: "AppKit RN",
  description: "AppKit RN Example",
  url: "https://walletconnect.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
  redirect: {
    native: "YOUR_APP_SCHEME://",
    universal: "YOUR_APP_UNIVERSAL_LINK.com",
  },
};

const chains = [mainnet, polygon, arbitrum];

const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  extraConnectors: [email],
});

// 3. Create modal
createWeb3Modal({
  projectId,
  wagmiConfig,
  defaultChain: mainnet, // Optional
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});

export default function Layout() {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <Stack
          screenOptions={{
            headerShown: false,
            // statusBarHidden={true}
          }}
        >
          <Stack.Screen name="index" options={{}} />
          <Stack.Screen name="screens/home" options={{}} />
          <Stack.Screen name="screens/chat" options={{}} />
          <Stack.Screen name="screens/aichat" options={{}} />
          <Stack.Screen name="screens/gemini" options={{}} />
          <Stack.Screen name="screens/products" options={{}} />
        </Stack>
        <Web3Modal />
      </QueryClientProvider>
    </WagmiProvider>
  );
}
