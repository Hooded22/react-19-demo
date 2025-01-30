import ThemeContext from './ThemeContext';
import Form from './Form';

export default function ReadingContextWithUse() {
    return (
        <ThemeContext.Provider value="dark">
            <Form/>
        </ThemeContext.Provider>
    );
}