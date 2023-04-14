import React, { useEffect, useState } from "react";
const url = "http://localhost/my_rezume/login.php";
import axios from "axios";
import { InputField } from "../component/simpleInput";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
function Admin({ setUser }) {
    const { getValues, handleSubmit, formState: { errors }, control } = useForm();
//   const [user, setUser] = useState("");
//   const [password, setPassword] = useState("");
    const navigate = useHistory();

  const onSubmit = (e) => {
    axios
      .post(url, {
        user_name: e?.user_name,
        password: e?.password,
      })
      .then((res) => {
        if (res.data?.code == 0) {
            navigate.push("/index.html");
            setUser(res?.data);
        } else if (res.data?.code == -1) {
        }
      })
      .catch((err) => {
        
      });
    };
    
    useEffect(() => {
        setUser("");
    }, [])
    
  return (
    <div>
    <div class="wrapper">
        <div class="logo">
            <img src="https://scontent.flhe3-2.fna.fbcdn.net/v/t1.6435-1/133861705_447109636451294_8888440567338811075_n.jpg?stp=dst-jpg_p160x160&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEdhrO5lUCTRTjgQ4rcvZ4CWrrsQvQsnuxauuxC9Cye7FeDi9mRv8JFwfoCjVYsXR1zCMcn7D2bsvXhqkOIx1y0&_nc_ohc=JPk7CiCVGlwAX9eVzES&_nc_oc=AQksPFoG7u4vc5H9Uq0smgp-JISzk4H_wwFNQeTOIkkmDbGnHNbNaWBY0y5FwBkX1yo&_nc_ht=scontent.flhe3-2.fna&oh=00_AfDpGtoDORXJfuSBJoKYb900WIbNGNEg-adBsrIoEoYn0g&oe=6460C78E" alt="" />
        </div>
        <div class="text-center mt-4 name">
            Rezume
        </div>
        <form class="p-3 mt-3" onSubmit={handleSubmit(onSubmit)}>
            {errors?.user_name ? <div class=" text-danger text-center" role="alert">{errors?.user_name?.message}</div> :''}
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <InputField
                    control={control}
                    name="user_name"
                    title="Username"
                    type="text"
                    rules={{ required: "Username is required" }}
                    errors={errors}
                    placeholder="Enter your username"
                />
            </div>
            {errors?.password ? <div class=" text-danger text-center" role="alert">{errors?.password?.message}</div> :''}
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <InputField
                    control={control}
                    name="password"
                    title="Password"
                    type="password"
                    rules={{ required: "Password is required" }}
                    errors={errors}
                    placeholder="Enter your password"
                />
            </div>
            <button onClick={handleSubmit(onSubmit)} class="btn mt-3">Login</button>
        </form>
    </div>
</div>
  );
}
export default Admin;
