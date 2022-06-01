export function isEmpty(obj: any) {
    if (['number', 'string', 'boolean'].includes(typeof obj)) {
        return !obj;
    }
    return !obj || Object.keys(obj).length === 0;
}


export function shallowCompare(a, b, depth = 1) {
    if (!a || !b) {
        return a === b;
    }
    for (let i in b) {
        if (depth === 1) {
            if (a[i] !== b[i]) {
                return false;
            }
        } else {
            if (!shallowCompare(a[i], b[i], depth - 1)) {
                return false;
            }
        }
    }
    return Object.keys(b || {}).length === Object.keys(a || {}).length;
}

