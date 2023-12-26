import { getChannels } from "@/entities/channel/api/channelApi";
import { HistoryImageUpload, HistoryVideoUpload } from "@/entities/history";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import Button from "@/shared/ui/button";
import Modal from "@/shared/ui/modal";
import Title from "@/shared/ui/title";
import { HistoryList } from "@/widgets/HistoryList";
import React from "react";

export const HistoryPage = () => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = React.useState(false);
  
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
      <HistoryList />
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="flex overflow-x-auto">
          <HistoryImageUpload setIsOpen={setIsOpen} />
          <HistoryVideoUpload setIsOpen={setIsOpen} />
        </div>
      </Modal>
    </section>
  );
};
