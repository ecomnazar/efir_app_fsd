import { getUserPosts } from "@/entities/post/api/postApi";
import { getUser } from "@/entities/user/api/userApi";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";
import Title from "@/shared/ui/title";
import React from "react";
import { useParams } from "react-router-dom";
import { GoHeartFill } from "react-icons/go";
import { PostCart } from "@/entities/cart";

export const UserPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userSlice.user.data);
  const userPosts = useAppSelector((state) => state.postSlice.userPosts.data);

  React.useEffect(() => {
    dispatch(getUser(String(id)));
    dispatch(getUserPosts(String(id)));
  }, []);

  console.log(user);
  console.log(userPosts);

  return (
    <div className="flex items-start justify-between">
      <div className="basis-[25%]">
        <img src={user?.avatar} className="aspect-square object-cover object-center rounded-md" alt="" />
        <Title size="medium">Имя: {user?.username}</Title>
        <Title size="medium">Номер: {user?.phone_number}</Title>
        <Title size="medium">Город: {user?.city?.name}</Title>
        <Title size="medium">Дата создания: 12 11 2023</Title>
        <Title size="medium">Премиум: имеется</Title>
      </div>
      <div className="basis-[73%] grid grid-cols-4 gap-4">
        {userPosts?.map((post) => {
          return (
            // <PostCart type={"video"} content={""} description={""} likes={0} />
            null
          );
        })}
      </div>
    </div>
  );
};
