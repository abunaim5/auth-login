import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [success, setSuccess] = useState('');
    const [signUpError, setSignUpError] = useState('');
    const [showPass, setShowPass] = useState(false);


    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;

        console.log(terms);

        setSuccess('');
        setSignUpError('');

        if (password.length < 8) {
            setSignUpError('Password should be 8 character or long');
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setSignUpError('Password should contain minimum 1 uppercase letter');
            return;
        }
        if(!terms){
            setSignUpError('You forget to check our terms and conditions');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess('Profile created successfully');
                updateProfile(user, { displayName: name })
                    .then(() => {
                        console.log('Profile updated');
                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
            .catch(error => {
                const errorMessage = error.message;
                setSignUpError(errorMessage);
            })

        console.log(name, email, password);
    }


    return (
        <div className="flex items-center justify-center h-screen flex-col w-[207px] mx-auto">
            <form onSubmit={handleRegister} className="space-y-4 mb-3">
                <input className="px-3 py-2 border" type="text" name="name" id="iName" placeholder="Full Name" />
                <br />
                <input className="px-3 py-2 border" type="email" name="email" id="iEmail" placeholder="Email" required />
                <br />
                <div className="relative"><input className="px-3 py-2 border" type={showPass ? 'text' : 'password'} name="password" id="iPassword" placeholder="password" required /><span onClick={() => setShowPass(!showPass)} className="absolute top-[14px] right-2 cursor-pointer">{showPass ? <FaEyeSlash /> : <FaEye />}</span></div>
                <br />
                <input type="checkbox" name="terms" id="iCheckBox" /> <span>Accept our terms and conditions.</span>
                <br />
                <input className="btn btn-primary w-full" type="submit" value="Register" id="iButton" />
            </form>
            <p>Already have an account? Please <Link className="hover:underline text-blue-600" to='/login'>LogIn</Link></p>
            {
                success && <p className="text-green-600">{success}</p>
            }
            {
                signUpError && <p className="text-red-600">{signUpError}</p>
            }

        </div>
    );
};

export default SignUp;