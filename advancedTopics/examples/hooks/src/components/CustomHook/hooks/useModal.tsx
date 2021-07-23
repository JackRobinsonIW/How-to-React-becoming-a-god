import { useCallback, useState } from 'react';

const useModal = (initialState: boolean = false): [boolean, () => void] => {
    const [state, setState] = useState<boolean>(initialState);

    const toggle = useCallback((): void => setState(state => !state), []);
    return [state, toggle]
}

export default useModal;