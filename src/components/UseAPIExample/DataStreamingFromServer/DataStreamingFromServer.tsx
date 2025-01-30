import './styles.css';
import {useState} from "react";
import {MessageContainer} from "./message.tsx";

function fetchMessage(): Promise<string> {
    return new Promise((resolve) => setTimeout(resolve, 1000, "⚛️"));
}

export const DataStreamingFromServer = () => {
    const [messagePromise, setMessagePromise] = useState<Promise<string> | null>(null);
    const [show, setShow] = useState(false);

    function download() {
        setMessagePromise(fetchMessage());
        setShow(true);
    }

    if (show && messagePromise) {
        return <MessageContainer messagePromise={messagePromise}/>;
    } else {
        return <button onClick={download}>Download message</button>;
    }
}