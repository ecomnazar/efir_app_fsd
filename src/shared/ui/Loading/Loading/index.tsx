import { RotatingLines } from "react-loader-spinner";

type Props = {
    color?: string;
}

export const Loading = ({ color='white' }: Props) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <RotatingLines
        strokeColor={color}
        strokeWidth="4"
        animationDuration="1"
        width="22"
        visible={true}
      />
    </div>
  );
};
