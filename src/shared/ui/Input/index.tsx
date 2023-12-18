import clsx from "clsx";

type Props = {
    register?: any;
    name: string;
    placeholder?: string;
    className?: string;
}

const Input = ({ register, name, placeholder, className }: Props) => {
  return (
    <input {...register(name)} className={clsx('bg-secondary h-[45px] px-3 w-full outline-primary rounded-md', className)} type='text' placeholder={placeholder} />
  )
}

export default Input