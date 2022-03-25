import React from 'react'

function SignUp(){
    return( 
        <div>
            <form>
                <label>Username:<input type="text" /></label> <br />
                <label>First Name:<input type="text" /></label> <br />
                <label>Last Name:<input type="text" /></label> <br />
                <label>Password:<input type="password"/></label> <br />
                <input type="submit" value="Create Account" />
            </form>
        </div>
    )
}

export default SignUp;