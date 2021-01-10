import './TodoItem.css'

const TodoItem = ({title, completed}) => {
    return (
        <article className='item'>
            <h2>{title}</h2>
            {completed ? (<div className='dot green' />) : (<div className='dot red' />)}
        </article>
    )
}

export default TodoItem