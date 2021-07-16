import styled from "styled-components";

import Modal from "./components/Modal";
import useModal from "./hooks/useModal";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  margin-top: 100px;
  padding: 20px;
`;

function App() {
  const [displayModal, setDisplayModal] = useModal();

  return (
    <Container>
      <Button onClick={setDisplayModal}>
        {displayModal ? "Close Modal" : "Open Modal"}
      </Button>
      <Modal displayModal={displayModal} setDisplayModal={setDisplayModal} />
    </Container>
  );
}

export default App;
