import { Msg, Container } from "./styles";
type Props = {
  msg: string;
};

export function EmptyList({ msg }: Props) {
  return (
    <Container>
      <Msg>{msg}</Msg>
    </Container>
  );
}
