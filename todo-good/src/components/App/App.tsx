import './App.css';

import React, { FC, useCallback, useContext, useEffect, useState } from 'react';

import AddButton from '../AddButton/AddButton';
import { ApiContext } from '../../contexts/ApiContext';
import { ITodo } from '../../interfaces/todo';
import TodoItem from '../TodoItem/TodoItem';

const App: FC = () => {
    const [gotData, setGotData] = useState<boolean>(false);
    const [items, setItems] = useState<ITodo[] | undefined>(undefined);
    const { getTodoData } = useContext(ApiContext);

    const itemSort = (a: ITodo, b: ITodo) => {
        return a.id < b.id ? 1 : b.id < a.id ? -1 : 0;
    };

    const getData = useCallback(async () => {
        const data = await getTodoData();

        data?.sort(itemSort);

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
