import api from '../api';
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getPlaces(token) {
    try {
        const response = await api.get('/place', {
            headers: { Authorization: `Bearer ${token}` },
        });

        return response.data;
    } catch (error) {
        await AsyncStorage.clear()
    }
}
