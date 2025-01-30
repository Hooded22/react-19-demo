import Panel from './Panel.tsx';
import Button from './Button';

export default function Form() {
    return (
        <Panel title="Welcome">
            <Button show={true}>Sign up</Button>
            <Button show={false}>Log in</Button>
        </Panel>
    );
}