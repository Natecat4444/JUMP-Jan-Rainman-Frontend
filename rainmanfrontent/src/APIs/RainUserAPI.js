const URI = "http://localhost:8080/api/users";

const RainUserAPI = {
    getToken: (setData) =>{
        fetch( URI )
            .then( result => result.json() )
            .then( result => console.log(result ))
            .catch(error => console.log(error) )
    },

    createAccount: (user) =>{
        fetch( URI, {
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