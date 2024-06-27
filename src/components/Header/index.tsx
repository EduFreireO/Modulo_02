import { useNavigation } from "@react-navigation/native";
import { Container, Logo, Icon, BackButton } from "./styles";

type props = {
  showBackButton?: boolean;
};

export default function Header({ showBackButton = false }: props) {
  const navigation = useNavigation();
  function handlePress() {
    navigation.goBack();
    navigation.navigate("Groups");
  }

  const logo = require("../../assets/Logo.png");
  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handlePress}>
          <Icon />
        </BackButton>
      )}
      <Logo source={logo} />
    </Container>
  );
}
