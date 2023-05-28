import axios from 'axios'

const API_URL = 'http://localhost:4000/api/orders/'
const createOrder = async(orderData) => {
    await axios.post("http://localhost:4000/api/orders/create", orderData).then((response) => {
        console.log(response.data)
    })

}
const getOrders = async() => {
    const response = await axios.get(API_URL)
    return response.data
}
const orderService = {
    createOrder,
    getOrders
}

export default orderService