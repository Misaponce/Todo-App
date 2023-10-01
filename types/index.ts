
export interface TodoFormProps {
    onSubmit: (newTodo: ItemType) => void;
}

export interface ItemType {
    id: string;
    text: string;
    completed: boolean;
}