import { Cart } from '@/entities/cart'

export const UserCart = () => {
  const handleCart = () => {}
  return (
    <Cart onClick={handleCart} image={"/images/image.png"} name={""} number={""} />
  )
}