import { getChannels } from "@/entities/channel/api/channelApi";
import { addHistoryImage, getHistories } from "@/entities/history/api/historyApi";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";
import Button from "@/shared/ui/button";
import Input from "@/shared/ui/input";
import Modal from "@/shared/ui/modal";
import Title from "@/shared/ui/title";
import { Listbox } from "@headlessui/react";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormProps = {
  link: string;
}

export const HistoryPage = () => {
  const dispatch = useAppDispatch()
  const [isOpen, setIsOpen] = React.useState(false)
  const [image, setImage] = React.useState('')
  const [previewImage, setPreviewImage] = React.useState<Blob | MediaSource | any>()
  const { register, handleSubmit } = useForm<FormProps>()
  const channels = useAppSelector((state) => state.channelSlice.channels.data)
  const histories = useAppSelector((state) => state.historySlice.histories.data)

  console.log(histories)

  React.useEffect(() => {
    dispatch(getHistories(1))
  }, [])

  const [selected, setSelected] = React.useState({name: 'Не выбран'})
  
  const onSelectImage = (img: any) => {
    if (img) {
      setPreviewImage(URL.createObjectURL(img))
      setImage(img)
    }
    // dispatch(getChannels(1))
    dispatch(getHistories(1))
  }

  const onSubmit: SubmitHandler<FormProps> = (value) => {
    const formData = new FormData()
    formData.append('type', 'video')
    formData.append('link', value.link)
    formData.append('video', image)
    formData.append('channel', String(selected.id))
    
    dispatch(addHistoryImage(formData))
  }

  return (
    <section className="text-primary">
      <div className="flex items-center justify-between">
        <Title size="large">Истории</Title>
        <Button onClick={() => {
          setIsOpen(true)
          dispatch(getChannels(1))
        }} height="min">Добавить историю</Button>
      </div>
      <div className="grid grid-cols-6 gap-4 mt-6">
        {histories.map((elem, i) => {
          return (
            <div
              key={i}
              className="bg-primary aspect-[9/16] w-full h-full rounded-md overflow-hidden"
            >
              {elem.type === 'video' ? <video controls src={elem.video}></video> : <img className="object-cover w-full h-full object-center" src={elem.image} alt="" />}
            </div>
          );
        })}
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-primary text-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none  sm:text-sm">
            <span className="block truncate">{selected?.name}</span>
          </Listbox.Button>
        
            <Listbox.Options className=" mt-1 max-h-60 w-full overflow-auto rounded-md bg-primary py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {channels.map((channel, channelIdx) => (
                <Listbox.Option
                  key={channelIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4  ${
                      active ? 'bg-white text-primary' : 'bg-primary text-white'
                    }`
                  }
                  value={channel}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {channel.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
        </div>
      </Listbox>


        <input type="file" onChange={(e) => onSelectImage(e.target.files[0])} />
        {/* <img className="p-1 bg-primary" src={previewImage} alt="" /> */}
        <Input register={register} name="link" placeholder="Ссылка на фото" />
        <Button onClick={handleSubmit(onSubmit)} className="mt-2 w-full">Сохранить</Button>
      </Modal>
    </section>
  );
};
