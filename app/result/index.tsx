import { Image, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useNavigationHelper } from "../functions/navigation";

export default function ResultScreen() {
  const { goTo } = useNavigationHelper();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 30,
      }}
    >
      <Image
        source={{ uri: "https://c.tenor.com/a0gCuklGEqcAAAAC/tenor.gif" }}
        style={{ width: 200, height: 200, marginBottom: 20, borderRadius: 100 }}
      />
      <Text
        variant="displaySmall"
        style={{ marginBottom: 20, textAlign: "center", color: "#555555ff" }}
      >
        Player A - Winner!
      </Text>
      <Button
        labelStyle={{ fontSize: 20, padding: 40, width: "100%" }}
        mode="contained"
        onPress={() => goTo("/")}
      >
        Start a new game
      </Button>
    </View>
  );
}
