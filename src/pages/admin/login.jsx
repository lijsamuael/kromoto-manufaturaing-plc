import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {auth} from "../../firebase-config"
import {  signInWithEmailAndPassword   } from 'firebase/auth';


export default function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            console.log("login successfully");
            const user = userCredential.user;
            navigate("/admin"); // Redirect to /admin
            console.log(user);
          })
          .catch((error) => {
            console.log("unable to login");
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
      };

    useEffect(() => {
        // console.log(email, password)
    }, [email])

    return(
        <div class="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat" 
        style={{backgroundImage: `url('https://images.unsplash.com/photo-1499123785106-343e69e68db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80')`}}
        >
  <div class="rounded-xl bg-gray-800  px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
    <div class="text-white">
      <div class="mb-8 flex flex-col iems-center">
        <img src="/images/logo-white.png" width="400" alt="" srcset="" />
        <span class="text-gray-300 pt-8">Enter Login Details to enter as administrator</span>
      </div>
      <form className="text-gray-dark2" action="#">
        <div class="mb-4 text-lg">
          <input onChange={(e) => setEmail(e.target.value)} class="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="name" placeholder="Enter your email" />
        </div>

        <div class="mb-4 text-lg">
          <input onChange={(e) => setPassword(e.target.value)} class="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="Password" name="name" placeholder="Enter your password" />
        </div>
        <div onClick={onLogin} class="mt-8 flex justify-center text-lg text-black">
          <button type="submit" class="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-success-light4">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
    )
}