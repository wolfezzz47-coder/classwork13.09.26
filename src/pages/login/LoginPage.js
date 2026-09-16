import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {loginSchema} from "./validation";

const defoltValues = {
    email: "",
    password: ""
}

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState:{errors}
    } = useForm({
        resolver: zodResolver(loginSchema),
        defaultValue: defoltValues,
        });

    const onMySubmit = (data) => {
        console.log("Данні форми входу", data);
    }

    return (
        <>
            <h1 className="text-center">Вхід на сайт</h1>
            <form className={"col-md-6 offset-md-3"} onSubmit={handleSubmit(onMySubmit)}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email"
                           className="form-control"
                           id="email"
                           {...register("email")}
                           aria-describedby="emailHelp"/>
                    {errors.email && <span className="text-danger">{errors.email.message}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1">Password</label>
                    <input type="Password"
                           className="form-control"
                           id="Password"
                           {...register("password")}
                           aria-describedby="PasswordHelp"/>
                    {errors.password && <span className="text-danger">{errors.password.message}</span>}
                </div>
                <input type="submit" className="btn btn-dark" value="Вхід" />
            </form>
        </>
    )
}
export default LoginPage;