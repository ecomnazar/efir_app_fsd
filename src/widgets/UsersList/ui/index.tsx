import React from "react";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { getUsers } from "@/entities/user/api/userApi";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";
import { PaginationLoading } from "@/shared/ui/loading";
import { PostCart } from "@/entities/cart";
import { Link } from "react-router-dom";

export const UsersList = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.userSlice.users.data);
  const hasNext = useAppSelector((state) => state.userSlice.users.next);
  const [page, setPage] = React.useState(1);

  const fetchData = React.useCallback(async () => {
    await dispatch(getUsers(page));
    setPage((prev) => prev + 1);
  }, [page]);

  return (
    <>
      <div className="grid grid-cols-6 gap-2 mt-6">
        {users?.map((user) => {
          return (
            // <PostCart onClick={} type={"image"} content={user.avatar} description={user.username} likes={0} />
            <Link className="bg-primary" to={`/user/${user.id}`}>
              <h1>{user.username}</h1>
            </Link>
          );
        })}
      </div>
      <PaginationLoading hasNext={hasNext} onChange={fetchData} />
    </>
  );
};
