//import React from 'react';


export  const saveToken = (meta_data) => {
    // localStorage.setItem('data',JSON.stringify(token))
    localStorage.setItem('data', JSON.stringify(meta_data))
}

export     const getToken = () => {
    //let token =  localStorage.getItem('data',JSON.stringify(token))
    let meta_data = JSON.parse(localStorage.getItem('data'))
    return meta_data
}