export function isEmpty(obj: any) {
    if (['number', 'string', 'boolean'].includes(typeof obj)) {
        return !obj;
    }
    return !obj || Object.keys(obj).length === 0;
}
