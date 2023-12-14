import React from "react";
import Loading from "@/shared/ui/Loading";
import clsx from "clsx";

type Props = {
  isLoading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'submit'
};

const Button = ({ isLoading, children, disabled, onClick, type }: Props) => {
  return (
    <button 
        onClick={onClick}
        disabled={disabled || isLoading}
        type={type}
        className={clsx("bg-primary text-white cursor-pointer h-[50px] rounded-md relative", {
            ['opacity-70']: disabled || isLoading
        })}
    >
        {isLoading ? <Loading /> : children}
    </button>
  );
};

export default Button;
