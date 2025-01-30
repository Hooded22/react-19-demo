import {ReactNode, use} from 'react';
import ThemeContext from './ThemeContext';

interface ButtonProps {
    show: boolean;
    children: ReactNode;
}

export default function Button({show, children}: ButtonProps) {
    if (show) {
        const theme = use(ThemeContext);
        const className = 'button-' + theme;

        return <button className={className}>{children}</button>;
    }

    return null;
}