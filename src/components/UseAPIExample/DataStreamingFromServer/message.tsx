"use client";

import {Suspense, use} from "react";
import {ErrorBoundary} from "react-error-boundary";

function Message({messagePromise}: { messagePromise: Promise<string> }) {
    const messageContent = use(messagePromise);
    return <p>Here is the message: {messageContent}</p>;
}

export function MessageContainer({messagePromise}: { messagePromise: Promise<string> }) {
    return (
        <ErrorBoundary fallback={<p>⚠️Something went wrong</p>}>
            <Suspense fallback={<p>⌛Downloading message...</p>}>
                <Message messagePromise={messagePromise}/>
            </Suspense>
        </ErrorBoundary>
    );
}