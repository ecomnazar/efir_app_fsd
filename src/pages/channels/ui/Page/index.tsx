import Title from "@/shared/ui/title"
import { ChannelsList } from "@/widgets/ChannelsList"

export const ChannelsPage = () => {
    return (
      <section className="text-primary">
        <Title size="large">Каналы</Title>
        <ChannelsList />
      </section>
    )
  }