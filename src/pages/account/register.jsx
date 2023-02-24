const axios = require('axios');
const minUsername = 3;
const maxUsername = 24;
const minEmail = 3;
const maxEmail = 254;
const minPassword = 6;
const maxPassword = 20;
const defaultButtonColor = 'blue'
export default function Register(){
    
    const verifyLenght = (fieldName,dataField,min,max)=>{
        var ob = document.querySelector("#small"+fieldName)
        if (dataField.length<min){
            ob.innerHTML = `The ${fieldName} must be at least ${min} characters long`
            return false;
        }
        else if(dataField.length>max){
            ob.innerHTML = `The ${fieldName} must have a maximum of ${max} characters`
            return false;
        }
        else{
            ob.innerHTML = ''
            return true;
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        const button = document.querySelector("#submitButton");
        button.style.backgroundColor = defaultButtonColor

        if (
            verifyLenght("Username",data.username,minUsername,maxUsername)&&
            verifyLenght("Email",data.email,minEmail,maxEmail)&&
            verifyLenght("Password",data.password,minPassword,maxPassword)
        ){
            if(data.terms=="on"){
                document.querySelector("#smallTerms").innerHTML = "";

                button.disabled = true;
                button.innerHTML = "Sending..."
                axios.post('/api/account',{
                    email:data.email,
                    password:data.password,
                })
                .then(function (response) {
                    button.innerHTML = response.data.message;
                    })
                .catch(function (error) {
                    button.disabled = false;
                    button.style.backgroundColor = 'red'
                    button.innerHTML = error.response.data.message;
                  })
            }else{
                document.querySelector("#smallTerms").innerHTML = "You need to accept the terms";
            }
        }
    }
    
    return (
        <div style={{
                width:'100vw',
                height:'100vh',
                backgroundColor:'#2f3640'
            }}>
            <div className="d-flex justify-content-center" style={{
                padding:'50px',
            }}>
                <a href="../" type="button"  style={{
                    color:"white",
                    fontSize:'50px',
                    fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                    border:'none',
                    backgroundColor:'transparent',
                    textDecoration:'none'
                }}>D R U L</a>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="d-flex justify-content-center" style={{
                        backgroundColor:'white',
                        width:'450px',
                        borderRadius: '25px',
                        padding:'25px',
                        fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                        lineHeight:'35px'
                    }}>
                        <form onSubmit={handleSubmit} style={{width:'100%',textAlign:'center'}}>
                            <h1>Sign up</h1>
                            <small className="form-text text-muted">Rhythm of the beats of your heart</small>
                            <div style={{textAlign:'left'}}>
                                <div className="form-group">
                                    <label >Username</label>
                                    <input maxLength={maxUsername} name='username' type="text" className="form-control" id="inputUsername" aria-describedby="emailHelp" placeholder="Enter username"></input>
                                    <small style={{color:'red'}} id="smallUsername"></small>
                                </div>
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input maxLength={maxEmail} name='email' type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email"></input>
                                    <small style={{color:'red'}} id="smallEmail"></small>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input maxLength={maxPassword} name='password' type="password" className="form-control" id="password" aria-describedby="emailHelp" placeholder="Enter password"></input>
                                    <small style={{color:'red'}} id="smallPassword"></small>
                                </div>
                                <div className="form-check">
                                    <input name='terms' type="checkbox" className="form-check-input" id="terms"></input>
                                    <label className="form-check-label" >I accept the Terms of Service and the Privacy Policy.</label>
                                    <br></br>
                                    <small style={{color:'red'}} id="smallTerms"></small>
                                </div>
                                <br></br>
                                <button id="submitButton" style={{width:'100%',backgroundColor:defaultButtonColor}} type="submit" className="btn btn-primary">Create your account</button>
                            </div>
                            <a href="./login">Log in</a>
                        </form>
                    </div>
                </div>
        </div>
    )
}