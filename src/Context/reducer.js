import React, { useState, useReducer } from 'react';

let token = localStorage.getItem('token')
    ? (localStorage.getItem('token'))
    : '';

export const initialState = {
   
    token: '' || token,
    loading: false,
    errorMessage: null,
};

export const AuthReducer = (initialState, action) => {
    if (token )
        return {
            ...initialState,
            loading: 'true',
        }


    switch (action.type) {
        case 'REQUEST_LOGIN':
            return {
                ...initialState,
                loading: true,
            };
        case 'LOGIN_SUCCESS':
            return {
                ...initialState,
               
                token: action.payload.token,
                loading: false,
            };
        case 'LOGOUT':
            return {
                ...initialState,
                
                token: '',
            };

        case 'LOGIN_ERROR':
            return {
                ...initialState,
                loading: false,
                errorMessage: action.error,
            };

        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};