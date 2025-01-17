/*
Author : Jérémie Chevalley
Date : 17.01.2025
Description : Helper
*/

const success = (message, data) => {
    return {
        message: message,
        data: data,
    };
};

const successCounter = (message, counter, data) => {
    return {
        message: message,
        counter: counter,
        data: data,
    };
};

export { success, successCounter };
