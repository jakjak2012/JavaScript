import React, { useState } from  'react';
    
    
const UserForm = () => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2){
            setFirstNameError("First Name must be at least 2 characters!")
        } else{
            setFirstNameError("");
        }
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 2){
            setLastNameError("Last Name must be at least 2 characters!")
        } else{
            setLastNameError("");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 4){
            setEmailError("Email must be at least 4 characters!")
        } else{
            setEmailError("");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8){
            setPasswordError("Password must be at least 8 characters!")
        } else{
            setPasswordError("");
        }
        if(e.target.value !== confirmPassword) {
            setConfirmPasswordError("Passwords do not match")
        } else {
            setConfirmPasswordError("");
        }
    }
        const handleConfirmPassword = (e) => {
            setConfirmPassword(e.target.value);
            if(e.target.value.length < 8){
                setConfirmPasswordError("Password must be at least 8 characters!")
            } else{
                setConfirmPasswordError("");
            }
            if(e.target.value !== password) {
                setConfirmPasswordError("Passwords do not match")
            } else {
                setConfirmPasswordError("");
            }
        }   
    
    return(
        
            <><form onSubmit={ (e) => e.preventDefault() }>
            <div>
                <label>First Name: </label>
                <input type="text" value={firstName} onChange={handleFirstName} />
                {
                    firstNameError ?
                    <p style={{color:'red'}}>{ firstNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" value={lastName} onChange={handleLastName} />
                {
                    lastNameError ?
                    <p style={{color:'red'}}>{ lastNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email: </label>
                <input type="email" value={email} onChange={handleEmail} />
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={handlePassword} />
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" value={confirmPassword} onChange={handleConfirmPassword} />
                {
                    confirmPasswordError ?
                    <p style={{color:'red'}}>{ confirmPasswordError }</p> :
                    ''
                }
            </div>
            </form>
            <div>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </>
    );
};
    
export default UserForm;