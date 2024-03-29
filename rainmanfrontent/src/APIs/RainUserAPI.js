const URI = "http://18.219.134.198:8080/api/";
// const URI = "http://localhost:8080/api/";

const RainUserAPI = {
    getToken: (setData) =>{
        fetch( URI+"authenticate", {
            method: 'POST',
            body: JSON.stringify(setData),
            headers: {"Content-Type": "application/json"}
        } ).then( response => {
            console.log("hello")
            console.log(response)
            return response.json()
        }) .then((data) =>{
            console.log(data.jwt)
            localStorage.setItem('token', "Bearer "+data.jwt)
            window.location.href = "/profile"
        })
    },

    createAccount: (user) =>{
        fetch( URI+"users", {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"}
        } ).then(response =>{
            console.log(response)
            return response.json
        }).then( (data) =>{
            console.log(data);
            window.location.href = "/login"
        })
    },

    getCitiesList: (setData) =>{
        fetch(URI+"cities",{
            method: 'GET',
            headers:{"Authorization":localStorage.getItem("token")}
        } ).then( result => result.json() )
            .then(result => setData(result) )
            .catch( error => console.log(error))
    },

    createBet: (bet) =>{
        fetch(URI+"bets",{
            method: 'POST',
            body: JSON.stringify(bet),
            headers: {"Content-Type": "application/json", "Authorization":localStorage.getItem("token")}
        }).then(response =>{
            console.log(response)
            return response.json
        }).then((data) =>{
            console.log(data)
            window.location.href = "/profile"
        })
    },

    getUser: (setName, setCredits) =>{
        fetch(URI+"user",{
            method: 'GET',
            headers:{"Authorization":localStorage.getItem("token")}
        } ).then(result => result.json())
            .then(result =>{
                setName(result.username)
                setCredits(result.credit)
            }).catch(error => console.log(error))
    },
    
    getBets: (setData) =>{
        fetch(URI+"bets",{
            method: 'GET',
            headers:{"Authorization":localStorage.getItem("token")}
        } ).then(result =>result.json())
            .then(result => setData(result))
            .catch(error => console.log(error))
    },

    getCity: (name, setCity) =>{
        console.log("name: "+name.toString())
        fetch(URI.concat("city/"+name),{
            method: 'GET',
            headers:{"Authorization":localStorage.getItem("token")}
        }).then(result => result.json())
            .then(result => setCity(result))
            .catch(error => console.log(error))
    },

    getCityByID: (id, setCity) =>{
        fetch(URI.concat("city/id/"+id),{
            method: 'GET',
            headers:{"Authorization":localStorage.getItem("token")}
        }).then(result => result.json())
            .then(result => setCity(result))
            .catch(error => console.log(error))
    },

    getLeaderBoard: (setData) =>{
        fetch(URI+"user/leaderboard",{
            method: 'GET',
            headers:{"Authorization":localStorage.getItem("token")}
        } ).then(result => result.json())
            .then(result => setData(result))
            .catch(error => console.log(error))
    }
}

export default RainUserAPI