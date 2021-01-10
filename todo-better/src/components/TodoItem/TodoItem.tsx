import './TodoItem.css';

import { FC } from 'react';

interface IProps {
    title: string;
    completed: boolean;
}

const TodoItem: FC<IProps> = ({ title, completed }) => {
    return (
        <article className="item">
            <h2>{title}</h2>
            {completed ? (
                <div className="dot green" />
            ) : (
                <div className="dot red" />
            )}
        </article>
    );
};

export default TodoItem;
