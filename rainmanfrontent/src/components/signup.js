import React from 'react'

function SignUp(){
    return( 
        <div>
            <form>
                <label>Username:<input type="text" /></label> <br />
                <label>First Name:<input type="text" /></label>
                <label>Last Name:<input type="text" /></label>
                <label>Password:<input type="password"/></label> <br />
            </form>
        </div>
    )
}

export default SignUp;