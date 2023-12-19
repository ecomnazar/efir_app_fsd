import React from "react";
import clsx from "clsx";
import { Loading } from "@/shared/ui/loading"

type Props = {
  isLoading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'submit';
  height?: 'min' | 'mid' | 'max';
  className?: string;
};

const Button = ({ isLoading, children, disabled, onClick, type, height='mid', className }: Props) => {
  return (
    <button 
        onClick={onClick}
        disabled={disabled || isLoading}
        type={type}
        className={clsx("bg-primary text-white cursor-pointer rounded-md relative font-medium px-8", className, {
            ['opacity-70']: disabled || isLoading,
            ['h-[45px] text-[15px]']: height === 'min',
            ['h-[50px] text-[16px]']: height === 'mid',
            ['h-[60px]']: height === 'max',
        })}
    >
        {isLoading ? <Loading /> : children}
    </button>
  );
};

export default Button;
