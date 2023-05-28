export interface NavLinkProps {
    route: string;
    children: React.ReactNode;
    color?: string;
    large?: boolean;
    onClick?: React.MouseEventHandler<Element>;
}

export interface InputProps {
    placeholder: string;
    icon: React.ReactNode;
    type: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

export interface ButtonProps {
    title: string;
    type: 'submit' | 'button' | 'reset';
}