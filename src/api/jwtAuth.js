export const setJWTAuthToken = user => {
    const currentUser = {
        email: user.email
    }
    console.log(currentUser);
    // Get JWT Token
    fetch('https://genius-car-server-nu-ten.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
    .then(res => res.json())
    .then(data => {
        // Local Storage is the easiest but not the best place to share JWT Token
        localStorage.setItem('geniusCarToken', data.data)
    })
}