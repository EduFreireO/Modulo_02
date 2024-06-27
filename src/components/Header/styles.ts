import styled from "styled-components/native";
import { CaretLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export const Container = styled(SafeAreaView)`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

export const Icon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.WHITE,
}))``;
