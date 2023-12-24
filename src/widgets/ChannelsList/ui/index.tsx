import React from "react";
// import { Cart } from "@/entities/cart";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";
import { getChannels } from "@/entities/channel/api/channelApi";
import { PaginationLoading } from "@/shared/ui/loading";
import { Link } from "react-router-dom";

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
            <Link key={channel.id} className="bg-primary text-white aspect-square rounded-md flex flex-col justify-center items-center p-2" to={`/channel/${channel.id}`}>
              <img src={channel.avatar ? channel.avatar : "/images/empty.jpeg"} className="rounded-full object-cover w-[100px] h-[100px] p-1 bg-white" alt="" />
              <h1>{channel.name}</h1>
              {/* <h2>{channel.category}</h2> */}
            </Link>
          );
        })}
      </div>
      <PaginationLoading hasNext={hasNext} onChange={fetchData} />
    </>
  );
};
