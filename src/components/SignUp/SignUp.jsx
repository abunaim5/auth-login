
const SignUp = () => {
    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);
    }


    return (
        <div className="flex items-center justify-center h-screen">
            <form onSubmit={handleRegister} className="space-y-4">
                <input className="px-3 py-2 border" type="text" name="name" id="" placeholder="Full Name" />
                <br />
                <input className="px-3 py-2 border" type="email" name="email" id="" placeholder="Email" required />
                <br />
                <input className="px-3 py-2 border" type="password" name="password" id="" placeholder="password" required />
                <br />
                <input className="btn btn-primary" type="submit" value="Register" id="" />
            </form>
        </div>
    );
};

export default SignUp;