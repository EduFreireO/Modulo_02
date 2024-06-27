import { UsersThree } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;
  align-items: center;
  padding: 24px;
  flex-direction: row;
  border-radius: 6px;
  margin-bottom: 12px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GREEN_500,
  weight: "fill",
}))`
  margin-right: 20px;
`;

export const TeamName = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
