// const URI = "http://18.219.134.198:8080/api/";
const URI = "http://localhost:8080/api/";

const RainAdminApi ={
    getUsers: (setdata) =>{
        fetch(URI+"users",{
            method: 'GET',
            headers:{"Authorization":localStorage.getItem("token")}
        }).then(result => result.json())
        .then(result => setdata(result))
        .catch(error => console.log(error))
    },

    getUser: (id, setdata) =>{
        fetch(URI+"admin/user/"+id,{
            method: 'GET',
            headers:{"Authorization":localStorage.getItem("token")}
        }).then(result => result.json())
        .then(result => setdata(result))
        .catch(error => console.log(error))
    },

    deleteUser: (id) =>{
        fetch(URI+"users/"+id,{
            method: 'DELETE',
            headers:{"Authorization":localStorage.getItem("token")}
        }).then(response => {console.log(response); window.location.reload();})
    },

    editUser: (user) =>{
        fetch(URI+"users",{
            method: 'PUT',
            headers:{"Authorization":localStorage.getItem("token"), "Content-Type": "application/json"},
            body: JSON.stringify(user)
        }).then(response => console.log(response))
    },

    getBets: (setData) =>{
        fetch(URI+"admin/bets",{
            method: 'GET',
            headers:{"Authorization":localStorage.getItem("token")}
        }).then(result => result.json())
            .then(result => setData(result))
    },

    getBet: (id, setdata) =>{
        fetch(URI+"bets/"+id,{
            method: 'GET',
            headers:{"Authorization":localStorage.getItem("token")}
        }).then(result => result.json())
        .then(result => setdata(result))
        .catch(error => console.log(error))
    },

    deleteBet: (id) =>{
        fetch(URI+"bets/"+id,{
            method: 'DELETE',
            headers:{"Authorization":localStorage.getItem("token")}
        }).then(response => {console.log(response); window.location.reload()})
    },

    editBet: (bet) =>{
        fetch(URI+"bets",{
            method: 'PUT',
            headers:{"Authorization":localStorage.getItem("token"), "Content-Type": "application/json"},
            body: JSON.stringify(bet)
        }).then(response => console.log(response))
    }


}

export default RainAdminApi