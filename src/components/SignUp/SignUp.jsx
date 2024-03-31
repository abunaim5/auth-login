import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";

const SignUp = () => {
    const [success, setSuccess] = useState('');
    const [signUpError, setSignUpError] = useState('');


    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        setSuccess('');
        setSignUpError('');

        if (password.length < 8) {
            setSignUpError('Password should be 8 character or long');
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
                // console.log(signUpError);
            })

        console.log(name, email, password);
    }


    return (
        <div className="flex items-center justify-center h-screen flex-col">
            <form onSubmit={handleRegister} className="space-y-4 mb-3">
                <input className="px-3 py-2 border" type="text" name="name" id="iName" placeholder="Full Name" />
                <br />
                <input className="px-3 py-2 border" type="email" name="email" id="iEmail" placeholder="Email" required />
                <br />
                <input className="px-3 py-2 border" type="password" name="password" id="iPassword" placeholder="password" required />
                <br />
                <input className="btn btn-primary w-full" type="submit" value="Register" id="iButton" />
            </form>
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