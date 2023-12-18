type Props = {
    image: string;
    name: string;
    number: string;
    onClick?: () => void;
}

export const Cart = ({ image, name, number, onClick }: Props) => {
  return (
    <div onClick={onClick} className="h-[200px] font-normal p-4 flex flex-col items-center bg-white rounded-md border-2 border-[#E8E8E8] cursor-pointer">
      <img
        className="rounded-full w-[100px] h-[100px]"
        src={image}
        alt={`${name} profile`}
      />
      <h1 className="text-[16px] mt-2">{name}</h1>
      <h3 className="text-[15px]">{number}</h3>
      <h3 className="text-[16px]"></h3>
    </div>
  )
}