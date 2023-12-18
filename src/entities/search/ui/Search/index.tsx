import Input from "@/shared/ui/Input";
import { IoSearch } from "react-icons/io5";

type Props = {
  register: any;
  name: string;
  placeholder?: string;
};

export const Search = ({ register, name, placeholder }: Props) => {
  return (
    <>
      <Input
        register={register}
        name={name}
        className="h-full"
        placeholder={placeholder}
      />
      <button
        type="submit"
        className="w-[18.5%] hover:bg-white h-full rounded-md hover:bg-opacity-20"
      >
        <IoSearch className="text-white text-2xl mx-auto" />
      </button>
    </>
  );
};
