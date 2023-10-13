import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Clicktoadd from "./src/clicktoadd";
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text>Hello word~</Text>
          <StatusBar style="auto" /><Clicktoadd />
        </View>
        
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
