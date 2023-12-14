import { FieldValues, UseFormRegister } from 'react-hook-form'

type Props = {
    register: any;
    name: string;
}

const Input = ({ register, name }: Props) => {
  return (
    <input {...register(name)} className='bg-secondary h-[45px] px-3 w-full outline-primary rounded-md' type='text' />
  )
}

export default Input