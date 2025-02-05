import ThemeContext from './ThemeContext';
import Form from './Form';

export default function ReadingContextWithUse() {
    return (
        <ThemeContext value="dark">
            <Form />
        </ThemeContext>
    );
}