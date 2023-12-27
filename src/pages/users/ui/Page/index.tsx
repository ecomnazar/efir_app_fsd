import { addUser } from "@/entities/user/api/userApi";
import { SearchUsersForm } from "@/features/search";
import { API_ENDPOINTS, instance } from "@/shared/api";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import Button from "@/shared/ui/button";
import Input from "@/shared/ui/input";
import Modal from "@/shared/ui/modal";
import Title from "@/shared/ui/title";
import { UploaderImage } from "@/shared/ui/uploader";
import { UsersList } from "@/widgets/UsersList";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormProps = {
  username: string;
  region: string;
  city: string;
  bio: string;
  address: string;
  avatar: string;
  is_channel: string;
}

export const UsersPage = () => {
  const { register, handleSubmit } = useForm<FormProps>() 
  const [isOpen, setIsOpen] = React.useState(false)
  const [buttonLoading, setButtonLoading] = React.useState(false)
  const [image, setImage] = React.useState<File | any>();
  const dispatch = useAppDispatch()

  const submitHandler: SubmitHandler<FormProps> = async (value) => {
    setButtonLoading(true)
    // 

    const formData = new FormData()
    formData.append('username', value.username)
    formData.append('region', value.region)
    formData.append('city', value.city)
    formData.append('bio', value.bio)
    formData.append('address', value.address)
    formData.append('is_channel', 'True')
    formData.append('avatar', image)
    
    await dispatch(addUser(formData))

    setButtonLoading(false)
    setIsOpen(false)
  }

  React.useEffect(() => {
    const getData = async () => {
      const response = await instance.get(`${API_ENDPOINTS.AUTH}/regions`)
      const response2 = await instance.get(`${API_ENDPOINTS.AUTH}/cities`)
      console.log(response.data);
      console.log(response2.data);
      return response.data
    }
    getData()
  }, [])

  return (
    <section className="text-primary">
      <div className="flex items-center justify-between">
        <Title size="large">Пользователи</Title>
        <div className="flex items-center gap-x-2">
        <SearchUsersForm />
        <Button onClick={() => setIsOpen(true)} height="min">Добавить канал</Button>
        </div>
      </div>
      <UsersList />
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Input className="mb-2" register={register} name={'username'} placeholder="Имя пользователя" />
        <Input className="mb-2" register={register} name={'region'} placeholder="Регион" />
        <Input className="mb-2" register={register} name={'city'} placeholder="Город" />
        <Input className="mb-2" register={register} name={'bio'} placeholder="Био" />
        <Input className="mb-2" register={register} name={'address'} placeholder="Адрес" />
        <UploaderImage setImageUpload={setImage} type="single" />
        <Button onClick={handleSubmit(submitHandler)} isLoading={buttonLoading} className="mt-2 w-full">Добавить</Button>
      </Modal>
    </section>
  );
};
