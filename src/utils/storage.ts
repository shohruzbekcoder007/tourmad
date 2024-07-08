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

export const removeStorage = () => {
    localStorage.removeItem('tour-access');
    localStorage.removeItem('tour-refresh');
}

export const saveLogin = (password: string) => {
    localStorage.setItem('login-tourmad', password);
}

export const savePassword = (password: string) => {
    localStorage.setItem('password-tourmad', password);
}

export const getLoginPassword = () => {
    return {
        login: localStorage.getItem('login-tourmad'),
        password: localStorage.getItem('password-tourmad'),
    }
}
