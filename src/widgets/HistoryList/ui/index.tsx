import { getHistories } from "@/entities/history/api/historyApi";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";
import React from "react";

export const HistoryList = () => {
  const dispatch = useAppDispatch();
  const histories = useAppSelector(
    (state) => state.historySlice.histories.data
  );

  React.useEffect(() => {
    dispatch(getHistories(1));
  }, []);

  console.log(histories);
  

  return (
    <div className="grid grid-cols-6 gap-4 mt-6">
      {histories.map((history, i) => {
        return (
          <div
            key={i}
            className="group bg-primary aspect-[9/16] relative w-full h-full rounded-md overflow-hidden"
          >
            {history.type === "video" ? (
              <video controls src={history.video}></video>
            ) : (
              <img
                className="object-cover w-full h-full object-center"
                src={history.image}
                alt=""
              />
            )}
            <a href={history.link} target="_blank" className="absolute bottom-[-50%] transition-all duration-500 group-hover:bottom-0 left-0 w-full h-[30px] flex justify-center items-center bg-primary text-white text-[10px]">{history.link}</a>
          </div>
        );
      })}
    </div>
  );
};