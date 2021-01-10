import { FC, createContext } from 'react';

import { ITodo } from '../interfaces/todo';
import axios from 'axios';

interface IApiContext {
    getTodoData: () => Promise<ITodo[] | undefined>;
    addTodoItem: (text: string) => Promise<any>;
}

export const ApiContext = createContext<IApiContext>({} as IApiContext);

export const ApiProvider: FC = ({ children }) => {
    const getTodoData = async () => {
        try {
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/todos'
            );

            return response.data;
        } catch (error) {
            console.error(error);
        }
    };

    const addTodoItem = async (text: string) => {
        try {
            const body = {
                userId: 1,
                title: text,
                completed: false,
            };

            return await axios.post(
                'https://jsonplaceholder.typicode.com/todos',
                body
            );
        } catch (error) {
            console.error(error);
        }
    };

    const api: IApiContext = {
        getTodoData,
        addTodoItem,
    };

    return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
};
