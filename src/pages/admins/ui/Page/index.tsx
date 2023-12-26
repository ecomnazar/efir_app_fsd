import { addAdmin } from "@/entities/admin/api/adminApi";
import { PAdmin } from "@/entities/admin/api/types";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import Button from "@/shared/ui/button";
import Input from "@/shared/ui/input";
import Modal from "@/shared/ui/modal";
import Title from "@/shared/ui/title";
import { AdminsList } from "@/widgets/AdminsList";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormProps = {
  username: string;
  password: string;
  phone_number: string;
  gender: string;
  region: string;
}

export const AdminsPage = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [buttonLoading, setButtonLoading] = React.useState(false)
  const { register, handleSubmit } = useForm<FormProps>()
  const dispatch = useAppDispatch()

  const handleClose = () => {

  }

  const submitHandler: SubmitHandler<FormProps> = async (value) => {
    setButtonLoading(true)
    const data: PAdmin = {
      username: value.username,
      password: value.password,
      phone_number: value.phone_number,
      gender: value.gender,
      region: value.region
    }
    await dispatch(addAdmin(data))
    setButtonLoading(false)
    setIsOpen(false)
  }

  return (
    <section className="text-primary">
      <div className="flex items-center justify-between">
        <Title size="large">Админы</Title>
        <Button onClick={() => setIsOpen(true)} height="min">Добавить админа</Button>
      </div>
      <AdminsList />
      <Modal isOpen={isOpen} onClose={handleClose}>
        <Input className="mb-2" register={register} name={'username'} placeholder="Имя админа" />
        <Input className="mb-2" register={register} name={'password'} placeholder="Пароль" />
        <Input className="mb-2" register={register} name={'phone_number'} placeholder="Номер" />
        <Input className="mb-2" register={register} name={'gender'} placeholder="Пол" />
        <Input className="mb-2" register={register} name={'region'} placeholder="Регион" />
        <Button onClick={handleSubmit(submitHandler)} isLoading={buttonLoading} className="mt-2 w-full">Добавить</Button>
      </Modal>
    </section>
  );
};
