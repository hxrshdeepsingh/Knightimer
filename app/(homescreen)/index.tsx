import { View } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import { useNavigationHelper } from "../functions/navigation";

export default function HomeScreen() {
  const { goTo } = useNavigationHelper();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 40,
      }}
    >
      <Text
        variant="displayLarge"
        style={{
          marginBottom: 0,
          textAlign: "center",
          color: "#000",
          fontSize: 24,
        }}
      >
        Set Up Your Match
      </Text>

      <Card
        style={{
          width: "100%",
          backgroundColor: "#f0f0f0",
          padding: 20,
          margin: 0,
          borderRadius: 16,
        }}
      >
        <Text
          variant="displayLarge"
          style={{
            marginBottom: 0,
            textAlign: "center",
            color: "#000",
            fontSize: 24,
          }}
        >
          Match Time
        </Text>
        <Text
          variant="displayLarge"
          style={{ marginBottom: 16, textAlign: "center", color: "#000" }}
        >
          10:00
        </Text>
        <Card.Cover
          source={{ uri: "https://c.tenor.com/a0gCuklGEqcAAAAC/tenor.gif" }}
        />
      </Card>
      <Button
        labelStyle={{ fontSize: 20, padding: 20, width: "100%" }}
        style={{ marginTop: "auto" }}
        mode="contained"
        onPress={() => goTo("/gamescreen")}
      >
        Start Match
      </Button>
    </View>
  );
}
