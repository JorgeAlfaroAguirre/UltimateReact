import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  isLoading?: boolean;
  onClick: () => void;
};
const Btn = styled.button<{ isLoading: boolean }>`
  background-color: ${(props) => (props.isLoading ? "red" : "blue")};
  padding: 25px 30px;
`;

const Button2 = ({ children, isLoading = false, onClick }: Props) => {
  return (
    <Btn onClick={onClick} isLoading={isLoading} type="button">
      {children}
    </Btn>
  );
};

export default Button2;
