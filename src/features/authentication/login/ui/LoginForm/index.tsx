import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import React from "react";
import { useForm } from "react-hook-form";
import { BiUser } from "react-icons/bi";
import { RiLock2Line } from "react-icons/ri";
import { loginThunk } from "../../model/login";
import Button from "@/shared/ui/button";
import Input from "@/shared/ui/input";

type FormProps = {
  username: string;
  password: string;
};

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const { handleSubmit, register } = useForm<FormProps>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const onSubmitHandler = React.useCallback(
    async ({ username, password }: FormProps) => {
      setIsLoading(true);
      await dispatch(loginThunk({ username, password }));
      setIsLoading(false);
    },
    []
  );

  return (
    <form
      className="bg-white flex flex-col p-10 gap-y-4 rounded-md 
      max-w-[90%] w-full sm:max-w-md"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <div>
        <div className="flex items-center gap-x-1 mb-2">
          <RiLock2Line className="text-lg" />
          <p>Username:</p>
        </div>
        
        <Input register={register} name="username" />
      </div>
      <div>
        <div className="flex items-center gap-x-1 mb-2">
          <BiUser className="text-lg" />
          <p>Username:</p>
        </div>
       <Input register={register} name="password" />
      </div>
      <Button isLoading={isLoading}>Войти</Button>
    </form>
  );
};
