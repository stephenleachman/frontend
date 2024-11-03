import { MouseEventHandler } from "react";

export interface ButtonProps {
    title: string;
    containerStyle?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    ref?: string;
}
export interface LinkButton {
    title: string;
    containerStyle?: string;
    path?: string;
}

export interface BadgeProps {
    title: React.ReactNode;
    classStyles?: string;
    key?: number;
    style?: any;
}