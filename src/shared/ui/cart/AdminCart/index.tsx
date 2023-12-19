type Props = {
  name: string;
  number: string;
  role: string;
  image: string;
};

export const AdminCart = ({ name, number, role, image }: Props) => {
  return (
    <div className="h-[270px] font-normal p-4 flex flex-col items-center bg-white rounded-md border-2 border-[#E8E8E8] cursor-pointer">
      <img className="rounded-full w-[100px] h-[100px]" src={image} alt={`${name} profile`} />
      <h1 className="text-[20px] mt-2">{name}</h1>
      <h3 className="text-[18px]">{number}</h3>
      <h3 className="text-[16px]">{role}</h3>
    </div>
  );
};