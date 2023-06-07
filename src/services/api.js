import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from "react";


const api = axios.create({
    baseURL: "http://192.168.55.10:3000",
})

export default api;
