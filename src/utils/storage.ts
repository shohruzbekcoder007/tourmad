export const getStorage = () => {
    const token = localStorage.getItem('tour-access');
    return token
}

export const setStorage = (token: string) => {
    localStorage.setItem('tour-access', token);
}

export const getStorageR = () => {
    const token = localStorage.getItem('tour-refresh');
    return token
}

export const setStorageR = (token: string) => {
    localStorage.setItem('tour-refresh', token);
}