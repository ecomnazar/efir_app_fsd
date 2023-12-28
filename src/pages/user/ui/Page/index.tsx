import React from "react";
import { getUserPosts } from "@/entities/post/api/postApi";
import { getUser } from "@/entities/user/api/userApi";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { PostsList } from "@/widgets/PostsList";
import UserProfile from "@/widgets/UserProfile/ui";
import Title from "@/shared/ui/title";
import Button from "@/shared/ui/button";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";
import { useParams } from "react-router-dom";
import { AddImagePostModal, AddVideoPostModal } from "@/entities/post";



export const UserPage = () => {
  const dispatch = useAppDispatch();
  
  // id need to get data from specific user
  const { id } = useParams();

  // loading needs to show <Loading /> component
  const userLoading = useAppSelector((state) => state.userSlice.user.loading);
  const postLoading = useAppSelector(state => state.postSlice.userPosts.loading)

  // to show modal
  const [isOpenImageUploadModal, setIsOpenImageUploadModal] = React.useState(false)
  const [isOpenVideoUploadModal, setIsOpenVideoUploadModal] = React.useState(false)

  // get user data in render
  React.useEffect(() => {
    dispatch(getUser(String(id)));
    dispatch(getUserPosts(String(id)));
  }, []);

  return (
    <div className="flex items-start justify-between">
      {userLoading && postLoading ? (
        <>Loading...</>
      ) : (
        <>
          <div className="relative basis-[25%] h-screen">
            <UserProfile />
          </div>
          <div className="basis-[73%] relative min-h-screen">
            <div className="flex items-center justify-between">
              <Title size="large">Посты</Title>
             <div className="flex items-center gap-x-2">
             <Button
                onClick={() => {
                  setIsOpenVideoUploadModal(true);
                }}
                height="min"
              >
                Добавить видео
              </Button>
              <Button
                onClick={() => {
                  setIsOpenImageUploadModal(true);
                }}
                height="min"
              >
                Добавить фото
              </Button>
             </div>
            </div>
            <PostsList cols={4} type={"user"} />
          </div>
        </>
      )}
      <AddImagePostModal isOpen={isOpenImageUploadModal} setIsOpen={setIsOpenImageUploadModal} />
      <AddVideoPostModal isOpen={isOpenVideoUploadModal} setIsOpen={setIsOpenVideoUploadModal} />
    </div>
  );
};
