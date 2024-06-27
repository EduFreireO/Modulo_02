import Header from "../../components/Header";
import Description from "../../components/Description";
import Input from "../../components/Input";
import { Container, Content, Icon } from "./styles";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
export default function CreateGroup() {
  const navigator = useNavigation();
  const [teamsName, setTeamsName] = useState("");
  function handlePress() {
    navigator.navigate("Players", { group: teamsName });
  }
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Description
          title="New Team"
          subTitle="Create a new team to add participants"
        />
        <Input placeholder="name" onChangeText={(txt) => setTeamsName(txt)} />
        <Button title="Create team" onPress={handlePress} />
      </Content>
    </Container>
  );
}
