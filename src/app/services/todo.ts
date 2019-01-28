export class Todo {

    id: number;
    title: string = 'Ready Player One!';
    complete: boolean = false;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
