import React from "react";
import { Cart } from "@/entities/cart";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";
import { getChannels } from "@/entities/channel/api/channelApi";
import { PaginationLoading } from "@/shared/ui/Loading";

export const ChannelsList = () => {
  const dispatch = useAppDispatch();
  const channels = useAppSelector((state) => state.channelSlice.channels.data);
  const hasNext = useAppSelector((state) => state.channelSlice.channels.next);
  const [page, setPage] = React.useState(1);

  const fetchData = React.useCallback(async () => {
    await dispatch(getChannels(page));
    setPage((prev) => prev + 1);
  }, [page]);

  return (
    <>
      <div className="grid grid-cols-6 gap-2 mt-6">
        {channels?.map((channel) => {
          return (
            <Cart
              key={channel.id}
              image={"/images/image.png"}
              name={channel.name}
              number={""}
            />
          );
        })}
      </div>
      <PaginationLoading hasNext={hasNext} onChange={fetchData} />
    </>
  );
};
