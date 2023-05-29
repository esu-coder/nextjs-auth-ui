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
    name?: string;
    error?: string;
}

export interface ButtonProps {
    title: string;
    type?: 'submit' | 'button' | 'reset';
    disabled?: boolean,
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

interface StaticImageData {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
}

export interface SocialButtonProps {
    title: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    icon: StaticImageData
}