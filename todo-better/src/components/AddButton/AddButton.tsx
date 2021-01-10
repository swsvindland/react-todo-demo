import { ChangeEvent, FC, useContext, useState } from 'react';

import { ApiContext } from '../../contexts/ApiContext';

interface IProps {
    getData: () => void;
}

const AddButton: FC<IProps> = ({ getData }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const { addTodoItem } = useContext(ApiContext);

    const add = () => {
        setOpen(true);
    };

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const accept = async () => {
        await addTodoItem(value);

        getData();
        setValue('');
        setOpen(false);
    };

    const cancel = () => {
        setValue('');
        setOpen(false);
    };

    return (
        <>
            <button onClick={add}>Add Item</button>
            <dialog open={open}>
                <h3>Add Todo</h3>
                <input value={value} onChange={onInputChange} />
                <button onClick={accept}>Accept</button>
                <button onClick={cancel}>Cancel</button>
            </dialog>
        </>
    );
};

export default AddButton;
