import { InView } from "react-intersection-observer";
import { Loading } from "@/shared/ui/Loading"

type Props = {
    hasNext: boolean;
    onChange: () => void;
}

export const PaginationLoading = ({ hasNext, onChange }: Props) => {
  return (
    hasNext && (
        <InView as="div" onChange={onChange}>
          <div className="relative h-[100px]">
            <Loading color="#25262D" />
          </div>
        </InView>
      )
  )
}