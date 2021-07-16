import styled from "styled-components";

const Button = styled.button`
  padding: 10px;
`;

const ModalContainer = styled.div`
  position: absolute;
  align-self: center;
  padding: 20px;
  border-width: 1px;
  border-style: solid;
  margin-top: 500px;
  justify-content: center;
  text-align: center;
`;

const Title = styled.p`
  font-weight: bold;
`;

interface ModalProps {
  displayModal: boolean;
  setDisplayModal: () => void;
}

const Modal = ({ displayModal, setDisplayModal }: ModalProps) => {
  if (!displayModal) return null;

  return (
    <ModalContainer>
      <Title>Modal Window</Title>
      <p>Some text you want to show the user</p>
      <Button onClick={setDisplayModal}>Close Modal</Button>
    </ModalContainer>
  );
};

export default Modal;
