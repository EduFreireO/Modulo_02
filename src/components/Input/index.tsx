import { Container } from "./styles";
import { useTheme } from "styled-components/native";
import { TextInputProps } from "react-native";
export default function Input({ ...rest }: TextInputProps) {
  const { COLORS } = useTheme();

  return <Container {...rest} placeholderTextColor={COLORS.GRAY_300} />;
}
