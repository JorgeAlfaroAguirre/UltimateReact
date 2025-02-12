import styled from "styled-components";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";

type BtnProps = {
  isLoading?: boolean;
};
type Props = {
  children: React.ReactNode;
  isLoading?: boolean;
  onClick: () => void;
};
const Btn = styled.button<BtnProps>`
  background-color: ${(props) => (props.isLoading ? "gray" : "blue")};
  padding: 25px 30px;
  color: white;
`;
const Button2 = ({ children, isLoading, onClick }: Props) => {
  const thumbs = isLoading ? (
    <FaRegThumbsDown color="red" />
  ) : (
    <FaRegThumbsUp />
  );
  return (
    <Btn onClick={onClick} isLoading={isLoading}>
      {children} {thumbs}
    </Btn>
  );
};

export default Button2;
