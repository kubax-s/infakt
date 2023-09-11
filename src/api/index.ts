export const API_URL = 'https://randomuser.me/api'

export const getAccountants = (page: number) => fetch(`${API_URL}?seed=abc&gender=female&page=${page}&results=4`);
