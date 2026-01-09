import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/pages/phishing">
          <Text style={{ marginTop: 20, color: "blue" }}>
            Go to Phising Page
          </Text>
      </Link>

      <Link href="/pages/qr_scanner">
          <Text style={{ marginTop: 20, color: "red" }}>
            Go to QR Scanner Page
          </Text>
      </Link>

      <Link href="/pages/app_detection">
          <Text style={{ marginTop: 20, color: "green" }}>
            Go to App Detection Page
          </Text>
      </Link>
    </View>
  );
}
