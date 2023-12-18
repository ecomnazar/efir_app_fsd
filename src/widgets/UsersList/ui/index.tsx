import React from "react";
import { Cart } from "@/entities/cart";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { getUsers } from "@/entities/user/api/userApi";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";
import Loading from "@/shared/ui/Loading";
import { InView } from "react-intersection-observer";

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
      <div className="grid grid-cols-3 gap-2 mt-6">
        {users.map((user) => {
          return <Cart key={user.id} image={""} name={user.username} number={user.phone_number} />;
        })}
      </div>

      {/* pagination */}

      {hasNext && (
        <InView as="div" onChange={() => fetchData()}>
          <div className="relative h-[100px]">
            <Loading color="#25262D" />
          </div>
        </InView>
      )}
    </>
  );
};
