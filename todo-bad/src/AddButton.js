import { useState } from 'react'
import axios from 'axios'

const AddButton = ({getData}) => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState('')

    const add = () => {
        setOpen(true)
    }

    const onInputChange = (event) => {
        setValue(event.target.value)
    }

    const accept = async () => {
        const body = {
            'userId': 1,
            'title': value,
            'completed': false
        }

        await axios.post('https://jsonplaceholder.typicode.com/todos', body)

        getData()
        setOpen(false)
    }

    const cancel = () => {
        setOpen(false)
    }

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
    )
}

export default AddButton