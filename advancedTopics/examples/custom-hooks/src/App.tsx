import { useCallback, useState } from 'react';
import './App.css';

const useToggle = (initialState: boolean = false): [boolean, () => void] => {
  const [state, setState] = useState<boolean>(initialState);

  const toggle = useCallback((): void => setState(state => !state), []);
  return [state, toggle]
}

interface ModalProps {
  displayModal: boolean;
  setDisplayModal: () => void
}

const Modal = ({ displayModal, setDisplayModal }: ModalProps) => {

  if (!displayModal) return null;

  return (
    <div style={{ position: 'absolute', alignSelf: 'center', padding: '20px', borderWidth: '1px', borderStyle: 'solid', marginTop: '500px', justifyContent: 'center', textAlign: 'center' }}>
      <p style={{ fontSize: 20, fontWeight: 'bold' }}>Modal Window</p>
      <p>Some text you want to show the user</p>
      <button style={{ padding: '10px', fontSize: 20 }} onClick={setDisplayModal}>Close Modal</button>
    </div>
  )
}

function App() {
  const [displayModal, setDisplayModal] = useToggle();

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <button style={{ marginTop: '100px', padding: '20px', fontSize: 20 }} onClick={setDisplayModal}>{displayModal ? 'Close Modal' : 'Open Modal'}</button>
      <Modal displayModal={displayModal} setDisplayModal={setDisplayModal} />
    </div>
  );
}

export default App;
