import './App.css';

import React, { FC, useCallback, useEffect, useState } from 'react';

import AddButton from '../AddButton/AddButton';
import { ITodo } from '../../interfaces/todo';
import TodoItem from '../TodoItem/TodoItem';
import { TodoService } from '../../../Services/TodoService';

const App: FC = () => {
    const todoService = new TodoService();
    const [gotData, setGotData] = useState<boolean>(false);
    const [items, setItems] = useState<ITodo[] | undefined>(undefined);

    const getData = useCallback(async () => {
        const data = await todoService.getTodoData();

        setItems(data);
    }, []);

    useEffect(() => {
        if (!gotData) {
            getData();
            setGotData(true);
        }
    }, [getData, gotData]);

    return (
        <div className="App">
            <header className="App-header">
                <h1 data-testid="title">Todo</h1>
                <AddButton getData={getData} />
            </header>
            <main className="App-main">
                {items?.map((value, index) => (
                    <TodoItem
                        key={index}
                        title={value.title}
                        completed={value.completed}
                    />
                ))}
            </main>
        </div>
    );
};

export default App;
