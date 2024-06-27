import ButtonIcon from "../ButtonIcon";
import { Container, Icon, Name } from "./styles";

type Player = {
  name: string;
  onRemove: () => void;
};

export default function PlayerCard({ name, onRemove }: Player) {
  return (
    <Container>
      <Icon name="person" />
      <Name>{name}</Name>
      <ButtonIcon name="close" type="DELETE" onPress={() => onRemove()} />
    </Container>
  );
}
