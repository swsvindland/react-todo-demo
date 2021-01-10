import { BASE_URL } from './constants';
import { ITodo } from './interfaces/todo';
import axios from 'axios';

export class Api {
    public getTodoData = async (): Promise<ITodo[] | undefined> => {
        try {
            const response = await axios.get(`${BASE_URL}/todos`);

            if (!response) {
                return;
            }

            return response.data;
        } catch (error) {
            console.error(error);
        }
    };

    public addTodoItem = async (text: string) => {
        try {
            const body = {
                userId: 1,
                title: text,
                completed: false,
            };

            return await axios.post(`${BASE_URL}/todos`, body);
        } catch (error) {
            console.error(error);
        }
    };
}
