import { GoHeartFill } from "react-icons/go";

type Props = {
  type: "video" | "image";
  content: string;
  description: string;
  likes: number;
  onClick?: () => void;
};

export const PostCart = ({ type, content, description, likes, onClick }: Props) => {
  return (
    <div onClick={onClick} className="rounded-md cursor-pointer">
      <div className="aspect-square bg-primary rounded-md overflow-hidden">
        {type === "video" ? (
          <video
            className="w-full h-full object-cover object-center"
            src={content}
          ></video>
        ) : (
          <img
            className="w-full h-full object-cover object-center"
            src={content}
            alt=""
          />
        )}
      </div>
      {/* <div className="bg-white p-2 rounded-md mt-2">
        <div className="flex items-center justify-between">
          <h1>{description.substring(0, 15)}...</h1>
          <div className="flex items-center justify-between gap-x-1">
            <p>{likes}</p>
            <GoHeartFill color="red" />
          </div>
        </div>
      </div> */}
    </div>
  );
};