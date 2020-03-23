// headers --> use these at your own discretion
const headers = {'Content-Type': 'application/json', 'Accepts': 'application/json'}
// urls
const url = "http://localhost:4000"
const usersURL = `${url}/users`
const loginURL = `${url}/login`
// parse incoming data
const parseData = response => response.json();
// error handler
const catchError = error => {
    alert(error)
    console.log(`%c${error}`, 'color: red;')
}

// Create User
export const createUser = (user) => fetch(`${usersURL}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(user)
})
.then(parseData)
.catch(catchError)

// Login User
export const loginUser = (user) => fetch(`${loginURL}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(user)
})
.then(parseData)
.catch(catchError)