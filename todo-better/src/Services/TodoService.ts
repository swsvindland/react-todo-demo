import { Api } from '../Data/Api';
import { ITodo } from './interfaces/todo';

export class TodoService {
    api: Api;

    constructor() {
        this.api = new Api();
    }

    private itemSort = (a: ITodo, b: ITodo) => {
        return a.id < b.id ? 1 : b.id < a.id ? -1 : 0;
    };

    public getTodoData = async () => {
        const data = await this.api.getTodoData();

        if (!data) {
            return;
        }

        return data.sort(this.itemSort);
    };

    public addTodoItem = async (text: string) => {
        await this.api.addTodoItem(text);
    };
}
