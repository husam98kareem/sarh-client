import axios from 'axios'
const API_URL = "http://localhost:4000/api/human"
const createVacation = async(vacationData) => {
    await axios.post("http://localhost:4000/api/human", vacationData).then((response) => {
        console.log(response.data)
    })

}

const getVacations = async() => {
    const response = await axios.get(API_URL)
    return response.data
}

const humanService = {
    createVacation,
    getVacations
}

export default humanService