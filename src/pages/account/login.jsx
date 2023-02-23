import {getSession} from "../../lib/session"
const axios = require('axios');
const minUsername = 3;
const maxUsername = 24;
const minPassword = 6;
const maxPassword = 20;
export default function(){
    

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

        if (
            verifyLenght("Username",data.username,minUsername,maxUsername)&&
            verifyLenght("Password",data.password,minPassword,maxPassword)
        ){
            axios.get('/api/account',{
                params:{
                    filters:{
                        email:data.email,
                        password:data.password,
                    }
                }
            })
            .then(function (response) {
                console.log("res: "+response.data.message)
                })
            .catch(function (error) {
                console.log("err: "+error.response.data.message)
              })
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
                <h1 style={{
                    color:"white",
                    fontSize:'50px',
                    fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                    
                }}>D R U L</h1>
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
                            <h1>Log in</h1>
                            <small className="form-text text-muted">Rhythm of the beats of your heart</small>
                            <div style={{textAlign:'left'}}>
                                <div className="form-group">
                                    <label >Username</label>
                                    <input maxLength={maxUsername} name='username' type="text" className="form-control" id="inputUsername" aria-describedby="emailHelp" placeholder="Enter username"></input>
                                    <small style={{color:'red'}} id="smallUsername"></small>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input maxLength={maxPassword} name='password' type="password" className="form-control" id="password" aria-describedby="emailHelp" placeholder="Enter password"></input>
                                    <small style={{color:'red'}} id="smallPassword"></small>
                                </div>
                                <br></br>
                                <button id="submitButton" style={{width:'100%'}} type="submit" className="btn btn-primary">Enter</button>
                            </div>
                            <a href="./register">Sign up</a>
                        </form>
                    </div>
                </div>
        </div>
    )
}