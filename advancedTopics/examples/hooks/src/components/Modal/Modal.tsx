import styles from './Modal.css';

interface ModalProps {
  displayModal: boolean;
  setDisplayModal: () => void;
}

export const Modal = ({ displayModal, setDisplayModal }: ModalProps) => {
  const {modal} = styles()

  if (!displayModal) return null;

  return (
    <div className={modal}>
      <p style={{fontWeight: 'bold'}}>Modal Window</p>
      <p>Some text you want to show the user</p>
      <button style={{alignSelf: 'center'}} onClick={setDisplayModal}>Close Modal</button>
    </div>
  );
};

export default Modal;
