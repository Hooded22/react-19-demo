import {ReactNode, useContext} from 'react';
import ThemeContext from './ThemeContext';

interface PanelProps {
    title: string;
    children: ReactNode;
}

export default function Panel({title, children}: PanelProps) {
    const theme = useContext(ThemeContext);
    const className = 'panel-' + theme;

    return (
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    );
}