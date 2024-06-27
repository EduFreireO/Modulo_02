import Header from "../../components/Header";
import Description from "../../components/Description";
import ButtonIcon from "../../components/ButtonIcon";
import { Container, Form, NumberOfPlayers, HeaderList } from "./styles";
import Input from "../../components/Input";
import Filter from "../../components/Filter";
import { useState } from "react";
import { FlatList } from "react-native";
import PlayerCard from "../../components/PlayerCard";
import { Button } from "../../components/Button";
import { useRoute } from "@react-navigation/native";

type TypeParams = {
  group: string;
};

export default function Players() {
  const [players, setPlayers] = useState(["Teste1", "Teste2"]);
  const [activeTeam, setActiveTeam] = useState("");

  const route = useRoute();
  const { group } = route.params as TypeParams; // ??

  return (
    <Container>
      <Header showBackButton />
      <Description title={group} subTitle="Add players and separate teams" />
      <Form>
        <Input placeholder="Name" />
        <ButtonIcon name="add" />
      </Form>

      <HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === activeTeam}
              onPress={() => setActiveTeam(item)}
            />
          )}
          horizontal
        />
        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>
      <FlatList
        data={players}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => console.log("Removed")} />
        )}
      />
      <Button title="Remove Player" type="SECONDARY" />
    </Container>
  );
}
