import axios from "axios";
const axiosall= axios.create({
    baseURL:'http://localhost:5000'
})

const ComponentName = () => {
   return axiosall
};

export default ComponentName;