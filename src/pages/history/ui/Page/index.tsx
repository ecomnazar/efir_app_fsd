import { getChannels } from "@/entities/channel/api/channelApi";
import { HistoryImageUpload, HistoryVideoUpload } from "@/entities/history";
import { getHistories } from "@/entities/history/api/historyApi";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";
import Button from "@/shared/ui/button";
import Modal from "@/shared/ui/modal";
import Title from "@/shared/ui/title";
import React from "react";

export const HistoryPage = () => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = React.useState(false);
  const histories = useAppSelector(
    (state) => state.historySlice.histories.data
  );

  React.useEffect(() => {
    dispatch(getHistories(1));
  }, []);

  return (
    <section className="text-primary">
      <div className="flex items-center justify-between">
        <Title size="large">Истории</Title>
        <Button
          onClick={() => {
            setIsOpen(true);
            dispatch(getChannels(1));
          }}
          height="min"
        >
          Добавить историю
        </Button>
      </div>
      <div className="grid grid-cols-6 gap-4 mt-6">
        {histories.map((elem, i) => {
          return (
            <div
              key={i}
              className="bg-primary aspect-[9/16] w-full h-full rounded-md overflow-hidden"
            >
              {elem.type === "video" ? (
                <video controls src={elem.video}></video>
              ) : (
                <img
                  className="object-cover w-full h-full object-center"
                  src={elem.image}
                  alt=""
                />
              )}
            </div>
          );
        })}
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="flex overflow-x-auto">
          <HistoryImageUpload setIsOpen={setIsOpen} />
          <HistoryVideoUpload setIsOpen={setIsOpen} />
        </div>
      </Modal>
    </section>
  );
};
