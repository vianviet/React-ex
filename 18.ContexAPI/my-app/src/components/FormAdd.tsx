import React, { useContext } from 'react'
import { Path, useForm, UseFormRegister } from 'react-hook-form';
import { dataContextType, TableContext } from '../Context/ContextProvider';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


interface IFormValues {
  name: string;
  age: number;
  address : string;
  email : string;
  gender : string;
};
// type InputProps = {
//   label: Path<IFormValues>;
//   register: UseFormRegister<IFormValues>;
//   required: boolean;
// };

// const schema = yup.object({
//   name: yup.string().required(),
//   age: yup.number().positive().integer().required(),
//   address : yup.string().required(),
//   email : yup.string().required(),
//   gender : yup.string().required()
// }).required();

// const Input = ({ label, register, required } : InputProps ) => (
//   <>
//     <label>{label}</label>
//     <input {...register(label, { required })} />
//   </>
// );
// const Select = React.forwardRef
// <HTMLSelectElement,{ label: string } & ReturnType<UseFormRegister<IFormValues>>>(({ onChange, onBlur, name, label }, ref) => (
//   <>
//     <label>{label}</label>
//     <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
//       <option value="male">Male</option>
//       <option value="female">female</option>
//     </select>
//   </>
// ));

const FormAdd = () => {
    const {data, saveData} = useContext(TableContext) as dataContextType;
    const { register, handleSubmit, formState: { errors } } = useForm<IFormValues>();
    console.log(errors)
    const onFinish = (values: any) => {
        console.log('Success:', values);
        const key = data.length + 1;
        const result = {...values, key}
        saveData(result)
    };
  return (
    <form className='d-flex flex-column column-gap-10 width-50vh' onSubmit={handleSubmit(onFinish)}>
      {/* <Input label="name" register={register} required />
      {errors.name && <span className='color-red'>Input your name</span>}
      <Input label="age" register={register} required />
      {errors.age && <span className='color-red'>Input your age</span>}
      <Input label="address" register={register} required />
      {errors.address && <span className='color-red'>Input your address</span>}
      <Select label="gender" {...register("gender")} />
      {errors.gender && <span className='color-red'>Choose your gender</span>} */}


      <input type="text" placeholder='name' {...register("name", {minLength : 6, maxLength : 10, required : true})} />
      {errors.name?.type === 'required' && <span className='color-red'>name must not empty</span>}
      {errors.name?.type === 'minLength'&& <span className='color-red'>name must not less than 6 characters</span>}
      {errors.name?.type === 'maxLength'&& <span className='color-red'>name must not more than 10 characters</span>}

      <input type="text" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
      {errors.email?.type === 'required'&& <span className='color-red'>email must not empty</span>}
      {errors.email?.type === 'pattern'&& <span className='color-red'>only email</span>}

      <input type="text" placeholder='age' {...register("age", {max : 100, required : true})} />
      {errors.age?.type === 'required' && <span className='color-red'>age must not empty</span>}
      {errors.age?.type === 'max'&& <span className='color-red'>age must no bigger than 100 </span>}

      <input type="text" placeholder='address' {...register("address", {minLength : 10, maxLength : 100, required : true})}/>
      {errors.address?.type === "required" && <span className='color-red'>address must not empty</span>}
      {errors.address?.type === 'minLength'&& <span className='color-red'>address must not less than 10 characters</span>}
      {errors.address?.type === 'maxLength'&& <span className='color-red'>address must not more than 100 characters</span>}

      <select {...register("gender",{required : true})} defaultValue="">
        <option value=""></option>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
      {errors.gender && <span className='color-red'>Select your gender</span>}

      <button type="submit" >Add</button>
    </form>
  )
}

export default FormAdd