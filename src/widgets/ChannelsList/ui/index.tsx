import { Cart } from '@/entities/cart';

export const ChannelsList = () => {
  return (
    <div className="grid grid-cols-6 gap-2 mt-6">
      {Array.from({ length: 20 }).map(() => {
        return <Cart image={"/images/image.png"} name={""} number={""} />
      })}
    </div>
  )
}