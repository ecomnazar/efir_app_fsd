import { getChannels } from "@/entities/channel/api/channelApi";
import {
  addHistoryImage,
  getHistories,
} from "@/entities/history/api/historyApi";
import { Selector } from "@/entities/selector";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";
import Button from "@/shared/ui/button";
import Input from "@/shared/ui/input";
import Modal from "@/shared/ui/modal";
import Title from "@/shared/ui/title";
import { UploaderImage } from "@/shared/ui/uploader";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormProps = {
  link: string;
};

export const HistoryPage = () => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = React.useState(false);
  const [image, setImage] = React.useState<File | any>();
  const { register, handleSubmit } = useForm<FormProps>();
  const channels = useAppSelector((state) => state.channelSlice.channels.data);
  const histories = useAppSelector((state) => state.historySlice.histories.data);
  
  const [selected, setSelected] = React.useState({
    name: "Выберите категорию",
    id: "",
  });

  React.useEffect(() => {
    dispatch(getHistories(1));
  }, []);

  const onSubmit: SubmitHandler<FormProps> = (value) => {
    const formData = new FormData();
    formData.append("type", "image");
    formData.append("link", value.link);
    formData.append("image", image);
    formData.append("channel", String(selected.id));
    dispatch(addHistoryImage(formData));
  };

  return (
    <section className="text-primary">
      <div className="flex items-center justify-between">
        <Title size="large">Истории</Title>
        <Button
          onClick={() => {
            setIsOpen(true);
            dispatch(getChannels(1));
          }}
          height="min"
        >
          Добавить историю
        </Button>
      </div>
      <div className="grid grid-cols-6 gap-4 mt-6">
        {histories.map((elem, i) => {
          return (
            <div
              key={i}
              className="bg-primary aspect-[9/16] w-full h-full rounded-md overflow-hidden"
            >
              {elem.type === "video" ? (
                <video controls src={elem.video}></video>
              ) : (
                <img
                  className="object-cover w-full h-full object-center"
                  src={elem.image}
                  alt=""
                />
              )}
            </div>
          );
        })}
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Selector selected={selected} items={channels} setSelected={setSelected} />
        <UploaderImage setImageUpload={setImage} type={"single"} />
        <Input register={register} name="link" placeholder="Ссылка на фото" />
        <Button onClick={handleSubmit(onSubmit)} className="mt-2 w-full">Сохранить</Button>
      </Modal>
    </section>
  );
};
