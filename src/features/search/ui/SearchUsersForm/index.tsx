import { Search } from "@/entities/search";
import { SubmitHandler, useForm } from "react-hook-form";

type FormProps = {
  text: string;
};

export const SearchUsersForm = () => {
  const { register, handleSubmit } = useForm<FormProps>();

  const onSubmitHandler: SubmitHandler<FormProps> = (value) => {
    console.log(value);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="bg-primary w-[300px] p-[3px] h-[45px] rounded-md flex items-center justify-between gap-x-1"
    >
      <Search
        register={register}
        name={"text"}
        placeholder="Поиск пользователя"
      />
    </form>
  );
};
