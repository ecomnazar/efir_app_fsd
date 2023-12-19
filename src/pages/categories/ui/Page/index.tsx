import React from "react";
import Title from "@/shared/ui/title";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { addCategory, deleteCategory, getCategories, updateCategory } from "@/entities/category/api/categoryApi";
import Button from "@/shared/ui/button";
import Modal from "@/shared/ui/modal";
import Input from "@/shared/ui/input";
import { SubmitHandler, useForm } from "react-hook-form";

type FormProps = {
  text: string;
}

export const CategoriesPage = () => {
  const categories = useAppSelector((state) => state.categorySlice.categories.data);
  const [text, setText] = React.useState('')
  const [isOpen, setIsOpen] = React.useState(false);
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<FormProps>()
  const [buttonLoading, setButtonLoading] = React.useState(false)

  React.useEffect(() => {
    dispatch(getCategories());
  }, []);

  const handleDelete = (id: string) => {
    dispatch(deleteCategory(id))
  }

  const handleSave = (id: string) => {
      dispatch(updateCategory({ id, name: text }))
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleAddCategory: SubmitHandler<FormProps> = async (value) => {
    setButtonLoading(true)
    await dispatch(addCategory(value.text))
    setButtonLoading(false)
    setIsOpen(false)
  }

  return (
    <section className="text-primary">
      <div className="flex items-center justify-between">
        <Title size="large">Категории</Title>
        <Button onClick={() => setIsOpen(true)} height="min">Добавить категорию</Button>
      </div>
      <ul className="mt-6">
        {categories.map((category) => {
          return (
            <li key={category.id} className="bg-primary text-white rounded-md flex items-center justify-between p-4 mb-2">
              {/* <p>{category.name}</p> */}
              <input onChange={(e) => setText(e.target.value)} className="bg-transparent p" type="text" defaultValue={category.name} />
              <div className="flex items-center gap-x-2">
                <button onClick={() => handleDelete(category.id)} className="py-2 px-4 rounded-md bg-red-500">Удалить</button>
                <button onClick={() => handleSave(category.id)} className="py-2 px-4 rounded-md bg-green-500">Сохранить</button>
              </div>
            </li>
          );
        })}
      </ul>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <Input register={register} name={'text'} />
        <Button onClick={handleSubmit(handleAddCategory)} isLoading={buttonLoading} className="mt-2 w-full">Добавить</Button>
      </Modal>
    </section>
  );
};
