import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from "react";


const api = axios.create({
    baseURL: "https://cariritur.gruposilva.dev.br/api/",
})

export default api;
