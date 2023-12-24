import React from "react";
import { addPost, getUserPosts } from "@/entities/post/api/postApi";
import { getUser } from "@/entities/user/api/userApi";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useParams } from "react-router-dom";
import { PostsList } from "@/widgets/PostsList";
import UserProfile from "@/widgets/UserProfile/ui";
import Title from "@/shared/ui/title";
import Button from "@/shared/ui/button";
import Modal from "@/shared/ui/modal";
import { UploaderImage } from "@/shared/ui/uploader";
import Input from "@/shared/ui/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";

type Props = {
  description: string;
  tags: string
}

export const UserPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const userLoading = useAppSelector((state) => state.userSlice.user.loading)
  // const postLoading = useAppSelector(state => state.postSlice.userPosts.loading)
  const [isOpen, setIsOpen] = React.useState(false)
  const [image, setImage] = React.useState<File | any>();
  const { register, handleSubmit } = useForm<Props>();
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    dispatch(getUser(String(id)));
    dispatch(getUserPosts(String(id)));
  }, []);

  const onSubmit: SubmitHandler<Props> = async (value) => {
    setIsLoading(true)
    const formData = new FormData()
    formData.append("user", id!);
    for (let index = 0; index < image.length; index++) {
      formData.append(`image_${index + 1}`, image[index]);
    }
    formData.append("description", value.description)
    formData.append("tags", value.tags)
    formData.append("is_commentable", 'False')
    await dispatch(addPost(formData))
    setIsOpen(false)
    setIsLoading(false)
  }

  return (
    <div className="flex items-start justify-between">
      {userLoading ? <>Loading...</> : <>
      <div className="relative basis-[25%] h-screen">
        <UserProfile />
      </div>
      <div className="basis-[73%]">
      <div className="flex items-center justify-between">
        <Title size="large">Посты</Title>
        <Button
          onClick={() => {
            setIsOpen(true);
            // dispatch(getChannels(1));
          }}
          height="min"
        >
          Добавить историю
        </Button>
      </div>
        <PostsList cols={4} type={"user"} />
      </div>
      </>}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <UploaderImage setImageUpload={setImage} type={"multiple"} />
        <Input className="mb-2" register={register} name="description" placeholder="Описание" />
        <Input register={register} name="tags" placeholder="Тэги" />
        <Button isLoading={isLoading} onClick={handleSubmit(onSubmit)} className="mt-2 w-full">Сохранить</Button>
      </Modal>
    </div>
  );
};
