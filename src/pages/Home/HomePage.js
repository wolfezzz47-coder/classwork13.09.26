import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {homeSchema} from "./validation";
import "./HomePage.css"

const defoltValues = {
    name: "",
    price: "",
    manufacturer: "",
    category: "",
}

const HomePage = () => {
    const {
        register,
        handleSubmit,
        formState:{errors}
    } = useForm({
        resolver: zodResolver(homeSchema),
        defaultValue: defoltValues,
    });

    const onMySubmit = (data) => {
        console.log("Данні форми входу", data);
    }
    return (
        <>
            <div className="Home-Page">
            <h1 className="text-center">створення продукту</h1>
            <form className={"col-md-6 offset-md-3"} onSubmit={handleSubmit(onMySubmit)}>
                <div className="mb-3">
                    <label htmlFor="exampleInputname">name</label>
                    <input type="name"
                           className="form-control"
                           id="name"
                           {...register("name")}
                           aria-describedby="nameHelp"/>
                    {errors.name && <span className="text-danger">{errors.name.message}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="price">price</label>
                    <input type="price"
                           className="form-control"
                           id="price"
                           {...register("price")}
                           aria-describedby="priceHelp"/>
                    {errors.price && <span className="text-danger">{errors.price.message}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputmanufacturer">manufacturer</label>
                    <input type="manufacturer"
                           className="form-control"
                           id="manufacturer"
                           {...register("manufacturer")}
                           aria-describedby="manufacturerHelp"/>
                    {errors.manufacturer && <span className="text-danger">{errors.manufacturer.message}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputcategory">category</label>
                    <input type="category"
                           className="form-control"
                           id="category"
                           {...register("category")}
                           aria-describedby="categoryHelp"/>
                    {errors.category && <span className="text-danger">{errors.category.message}</span>}
                </div>
                <input type="submit" className="btn btn-dark" value="створити" />
            </form>
            </div>
        </>
    )
}

export default HomePage;