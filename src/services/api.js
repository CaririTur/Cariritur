import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from "react";


const api = axios.create({
    baseURL: "http://44.201.212.12:3000",
})

export default api;
