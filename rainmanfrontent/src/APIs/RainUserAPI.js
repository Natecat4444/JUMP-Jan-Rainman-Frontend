const URI = "http://localhost:8080/api/";

const RainUserAPI = {
    getToken: (setData) =>{
        fetch( URI+"authenticate", {
            method: 'POST',
            body:JSON.stringify(setData),
            headers: {"Content-Type": "application/json"}
        } ).then( response => {console.log(response)}) 
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
            console.log(data)
        })
    }
}

export default RainUserAPI