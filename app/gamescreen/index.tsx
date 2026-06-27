import { useEffect } from "react";
import { View } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { useNavigationHelper } from "../functions/navigation";
import { useTimer } from "../hooks/useTimer";

export default function GameScreen() {
  const { goTo } = useNavigationHelper();

  const timerA = useTimer(600);
  const timerB = useTimer(600);

  useEffect(() => {
    if (Number(timerA.time) <= 0 || Number(timerB.time) <= 0) {
      timerA.pause();
      timerB.pause();
      goTo("/result");
    }
  }, [timerA.time, timerB.time]);

  function resetTimer() {
    timerA.reset();
    timerB.reset();
  }

  function toggleTimers(activeTimer, inactiveTimer) {
    if (activeTimer.isRunning) {
      activeTimer.pause();
      inactiveTimer.start();
    } else {
      activeTimer.start();
      inactiveTimer.pause();
    }
  }

  function toggleDisable(activeTimer, inactiveTimer) {
    return !activeTimer.isRunning;
  }

  function startMainTimer() {
    timerA.start();
  }

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  }

  const cardStyle = {
    backgroundColor: "#f5f5f5",
    borderRadius: 16,
    padding: 24,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 3,
  };

  const textStyle = {
    textAlign: "center",
    color: "#444",
  };

  return (
    <>
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 40,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      {/* Player 1 */}
      <Card style={cardStyle}>
        <Button
          disabled={toggleDisable(timerA, timerB)}
          labelStyle={{
            fontSize: 18,
            paddingVertical: 14,
            width: "100%",
          }}
          mode="contained"
          onPress={() => toggleTimers(timerA, timerB)}
        >
          {timerA.isRunning ? "Stop" : "Start"}
        </Button>

        <Text variant="displayLarge" style={[textStyle, { marginTop: 16 }]}>
          {formatTime(timerA.time)}
        </Text>

        <Text
          variant="headlineSmall"
          style={[textStyle, { marginVertical: 12 }]}
        >
          Player 1
        </Text>

        <Avatar.Icon
          style={{ alignSelf: "center", backgroundColor: "#1976D2" }}
          size={60}
          icon={timerA.isRunning ? "pause" : "play"}
        />
      </Card>

      {/* Control Buttons */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "80%",
          marginVertical: 10,
        }}
      >
        <Button
          mode="text"
          style={{ flex: 1, marginRight: 8 }}
          onPress={resetTimer}
        >
          Reset
        </Button>
        <Button
          mode="text"
          style={{ flex: 1, marginLeft: 8 }}
          onPress={() => goTo("/")}
        >
          Back
        </Button>
        <Button
          mode="text"
          style={{ flex: 1, marginLeft: 8 }}
          onPress={() => startMainTimer()}
        >
          Start
        </Button>
      </View>

      {/* Player 2 */}
      <Card style={cardStyle}>
        <Avatar.Icon
          style={{ alignSelf: "center", backgroundColor: "#1976D2" }}
          size={60}
          icon={timerB.isRunning ? "pause" : "play"}
        />

        <Text
          variant="headlineSmall"
          style={[textStyle, { marginVertical: 12 }]}
        >
          Player 2
        </Text>

        <Text variant="displayLarge" style={[textStyle, { marginBottom: 16 }]}>
          {formatTime(timerB.time)}
        </Text>

        <Button
          disabled={toggleDisable(timerB, timerA)}
          labelStyle={{ fontSize: 18, paddingVertical: 14, width: "100%" }}
          mode="contained"
          onPress={() => toggleTimers(timerB, timerA)}
        >
          {timerB.isRunning ? "Stop" : "Start"}
        </Button>
      </Card>
    </View>
    </>
  );
}
