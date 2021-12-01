export const increment = (props) => {
    return {
        type:'INCREMENT',
        payload:props
    };
}

export const decrement = () => {
    return {
        type:'DECREMNT'
    };
}



