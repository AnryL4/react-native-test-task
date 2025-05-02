export const stripHtml = (html: string) => {
    return html.replace(/<[^>]*>?/gm, '').replace(/\\r\\n|\\n|\\r/g, '').trim();
};
