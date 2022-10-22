export async function basiclogin (SSN, password) {
    const response = await zlFetch.post(/*...*/)
    const { token } = response.body

    localStorage.setItem('token', token)
}


export async function isLoggedIn () {
    const token = store.get('token')
    if (!token) return false
}

