import React from "react";
import { getUserPosts } from "@/entities/post/api/postApi";
import { getUser } from "@/entities/user/api/userApi";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useParams } from "react-router-dom";
import { PostsList } from "@/widgets/PostsList";
import UserProfile from "@/widgets/UserProfile/ui";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";

export const UserPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const userLoading = false
  // const postLoading = useAppSelector(state => state.postSlice.userPosts.loading)
  const postLoading = false

  React.useEffect(() => {
    dispatch(getUser(String(id)));
    dispatch(getUserPosts(String(id)));
  }, []);

  return (
    <div className="flex items-start justify-between">
      {userLoading && postLoading ? <>Loading...</> : <>
      <div className="relative basis-[25%] h-screen">
        <UserProfile />
      </div>
      <div className="basis-[73%]">
        <PostsList cols={4} type={"user"} />
      </div>
      </>}
      
    </div>
  );
};
