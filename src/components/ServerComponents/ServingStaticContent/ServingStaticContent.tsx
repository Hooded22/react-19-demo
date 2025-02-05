import { marked } from 'marked'; // Not included in bundle
import sanitizeHtml from 'sanitize-html'; // Not included in bundle
import { fetchPageContent } from './api';

export async function ServingStaticContent() {
    // NOTE: loads *during* render, when the app is built.
    const content = await fetchPageContent()
    const markedContent = await marked(content)

    return <div>{sanitizeHtml(markedContent)}</div>;
}