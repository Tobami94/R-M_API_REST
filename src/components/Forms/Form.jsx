import React from "react";


const Form = () => {

    return (<form>
<label  htmlFor="username">UserName:</label>
<input key="username" type="text" placeholder="username" name="username"></input>
<label  htmlFor="password">Password:</label>
<input key="password" type="password" placeholder="password" name="password"></input>
<button>Login</button>
    </form>
    )
};


export default Form;