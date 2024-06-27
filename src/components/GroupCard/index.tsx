import { Container, Icon, TeamName } from "./styles";
import { TouchableOpacityProps } from "react-native";
type Props = TouchableOpacityProps & {
  nameGroup: string;
};
export default function GroupCard({ nameGroup, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon />
      <TeamName>{nameGroup}</TeamName>
    </Container>
  );
}
