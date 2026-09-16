import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {registerSchema} from "./validation";


const defoltValues = {
    email: "",
    password: "",
    confirmPassword: "",
}

const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        formState:{errors}
    } = useForm({
        resolver: zodResolver(registerSchema),
        defaultValue: defoltValues,
        });

    const onMySubmit = (data) => {
        console.log("Данні форми входу", data);
    }

    return (
        <>
            <h1 className="text-center">Реєстрація на сайт</h1>
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
                    <label htmlFor="Password">Password</label>
                    <input type="Password"
                           className="form-control"
                           id="Password"
                           {...register("password")}
                           aria-describedby="PasswordHelp"/>
                    {errors.password && <span className="text-danger">{errors.password.message}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="ConfirmPassword">Повторіть Password</label>
                    <input type="Password"
                           className="form-control"
                           id="confirmPassword"
                           {...register("confirmPassword")}
                           aria-describedby="confirmPasswordHelp"/>
                    {errors.password && <span className="text-danger">{errors.confirmPassword.message}</span>}
                </div>
                <input type="submit" className="btn btn-dark" value="Реєстрація" />
            </form>
        </>
    )
}
export default RegisterPage;