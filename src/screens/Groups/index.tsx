import { useState } from "react";
import { Container } from "./styles";
import { FlatList } from "react-native";
import Description from "../../components/Description";
import Header from "../../components/Header";
import GroupCard from "../../components/GroupCard";
import { EmptyList } from "../../components/EmptyList";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

export default function Groups() {
  const [groups, SetGroups] = useState([]);
  const navigation = useNavigation();
  function handleNavigation() {
    navigation.navigate("CreateGroup");
  }
  return (
    <Container>
      <Header />
      <Description title="Turmas" subTitle="Jogue com a sua turma" />
      <FlatList
        data={groups}
        renderItem={({ item }) => <GroupCard nameGroup={item} />}
        ListEmptyComponent={() => <EmptyList msg="There is no group yet" />}
        contentContainerStyle={!groups.length && { flex: 1 }}
      />
      <Button
        title="Criar nova turma"
        type="PRIMARY"
        onPress={handleNavigation}
      />
    </Container>
  );
}
