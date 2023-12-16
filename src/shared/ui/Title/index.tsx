import clsx from 'clsx';
import React from 'react'

type Props = {
    children: React.ReactNode;
    className?: string;
    size?: 'small' | 'medium' | 'large' | 'xl';
}

const Title = ({ children, className, size='large' }: Props) => {
  return (
    <h1 className={clsx(className, {
        ['text-xl']: size === 'small',
        ['text-2xl']: size === 'medium',
        ['text-3xl font-bold']: size === 'large',
        ['text-4xl']: size === 'xl',
    })}>{children}</h1>
  )
}

export default Title