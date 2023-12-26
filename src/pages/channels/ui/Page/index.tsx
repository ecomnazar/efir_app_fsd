import { getCategories } from "@/entities/category/api/categoryApi";
import { addChannel } from "@/entities/channel/api/channelApi";
import { Selector } from "@/entities/selector";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";
import Button from "@/shared/ui/button";
import Input from "@/shared/ui/input";
import Modal from "@/shared/ui/modal";
import Title from "@/shared/ui/title";
import { UploaderImage } from "@/shared/ui/uploader";
import { ChannelsList } from "@/widgets/ChannelsList";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormProps = {
  name: string;
};

export const ChannelsPage = () => {
  const dispatch = useAppDispatch()
  const [image, setImage] = React.useState<File | any>();
  const { register, handleSubmit } = useForm<FormProps>();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false)
  const [selected, setSelected] = React.useState({
    name: "Выберите категорию",
    id: "",
  });
  const categories = useAppSelector((state) => state.categorySlice.categories.data);

  const onSubmit: SubmitHandler<FormProps> = async (value) => {
    setIsLoading(true)
    const formData = new FormData()
    formData.append("name", value.name)
    formData.append("avatar", image)
    formData.append("category", selected.id)
    await dispatch(addChannel(formData))
    setIsOpen(false)
    setIsLoading(false)
  };

  return (
    <section className="text-primary">
      <div className="flex items-center justify-between">
        <Title size="large">Каналы</Title>
        <Button
          onClick={() => {
            setIsOpen(true);
            dispatch(getCategories())
          }}
          height="min"
        >
          Добавить канал
        </Button>
      </div>
      <ChannelsList />
      
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Selector
          selected={selected}
          items={categories}
          setSelected={setSelected}
        />
        <UploaderImage setImageUpload={setImage} type={"single"} />
        <Input register={register} name="name" placeholder="Название канала" />
        <Button isLoading={isLoading} onClick={handleSubmit(onSubmit)} className="mt-2 w-full">Сохранить</Button>
      </Modal>
    </section>
  );
};
