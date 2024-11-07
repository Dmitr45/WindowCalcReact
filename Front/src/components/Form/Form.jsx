import styles from "./styles.module.css";
import {useAppContext} from  "../../context/ContextProvider";
import { useForm } from "react-hook-form";








export default function Form(){ 

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();


      const onSubmit = (data) => console.log(data)

      console.log(watch("example")) // watch input value by passing the name of it



      return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input key={1} defaultValue="test" {...register("example")} />
    
          {/* include validation with required or other standard HTML validation rules */}
          <input key={2} {...register("exampleRequired", { required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
    
          <input key={3} type="submit" />
        </form>
      )
}