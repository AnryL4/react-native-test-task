import { stripHtml } from '../src/lib/text';

describe('stripHtml', () => {
    it('delete single HTML-tag', () => {
        const input = '<p>Hello</p>';
        const result = stripHtml(input);
        expect(result).toBe('Hello');
    });

    it('delete inner HTML-tags', () => {
        const input = '<div><strong>Text</strong> inside</div>';
        const result = stripHtml(input);
        expect(result).toBe('Text inside');
    });

    it('delete all HTML-tags and spaces', () => {
        const input = '   <h1>Title</h1>   ';
        const result = stripHtml(input);
        expect(result).toBe('Title');
    });

    it('empty string return empty string', () => {
        const result = stripHtml('');
        expect(result).toBe('');
    });

    it('work with string without HTML', () => {
        const input = 'Just plain text';
        const result = stripHtml(input);
        expect(result).toBe('Just plain text');
    });

    it('delete single tags', () => {
        const input = 'Some text<br>more text';
        const result = stripHtml(input);
        expect(result).toBe('Some textmore text');
    });
});
