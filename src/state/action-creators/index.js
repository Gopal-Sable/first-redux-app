export const depositMoney = (amount) => {
    return (despatch => {
        dispatch({
            type: 'deposit',
            payload: amount
        })
    })

}
export const withdrawMoney = (amount) => {
    return (despatch => {
        dispatch({
            type: 'withdraw',
            payload: amount
        })
    })
}