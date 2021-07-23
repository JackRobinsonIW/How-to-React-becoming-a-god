import Modal from "../Modal/Modal";
import useModal from "./hooks/useModal";

export function CustomHook() {
    const [displayModal, setDisplayModal] = useModal();

    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <button style={{padding: '20px'}} onClick={setDisplayModal}>
                {displayModal ? "Close Modal" : "Open Modal"}
            </button>
            <Modal displayModal={displayModal} setDisplayModal={setDisplayModal} />
        </div>
    );
}

export default CustomHook;
