import styles from "./UseAPlExample.module.css";
import ReadingContextWithUse from "./ReadingContextWithUse/ReadingContextWithUse.tsx";
import {DataStreamingFromServer} from "./DataStreamingFromServer/DataStreamingFromServer.tsx";

export const UseAPIExample = () => {
    return (
        <div className={styles.container}>
            <div className={styles.section}>
                <h1 className={styles.heading}>UseAPIExample</h1>
                <p className={styles.description}>
                    This is the example of reading context by using <code>use</code> API example.
                </p>
                <ReadingContextWithUse/>
            </div>
            <div className={styles.section}>
                <h1 className={styles.heading}>DataStreamingFromServer</h1>
                <p className={styles.description}>
                    This is the example of handling data streaming from server by using{" "}
                    <code>use</code> promise passed to a client component.
                </p>
                <DataStreamingFromServer/>
            </div>
        </div>
    );
};