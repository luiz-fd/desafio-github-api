import axios from "axios";
import { BASE_URL } from "../utils/system";

export function findByLogin(login: string) {
    return axios.get(`${BASE_URL}/${login}`);
}