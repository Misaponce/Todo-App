import React, { ChangeEvent } from "react";

export interface CustomInputProps {
    type: string;
    placeHolder: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface TodoFormProps {
    onSubmit: (newTodo: ItemType) => void;
}

export interface ItemType {
    id: string;
    text: string;
    completed: boolean;
}