import axios from 'axios'
import appsettings from '../../appsettings.json'

export default axios.create({
    baseURL: appsettings.BASE_URL,
})