import { FC } from 'react';
import { IButtonProps } from '@/components/types/types';

const Button: FC<IButtonProps> = ({ children }) => {
    return <button>{children}</button>;
};

export default Button;
