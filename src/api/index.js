export const BASE_URL = 'https://radiant-fjord-00657.herokuapp.com/api';

export async function submitThisForm() {
    try {
        const response = await fetch(`${url}/users/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": username,
                "password": password,
                "email": email
            })
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error);
    }
}