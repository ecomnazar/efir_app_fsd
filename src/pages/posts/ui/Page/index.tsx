import { getPosts } from "@/entities/post/api/postApi";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import Title from "@/shared/ui/title";
import { PostsList } from "@/widgets/PostsList";
import React from "react";

export const PostsPage = () => {
  const dispatch = useAppDispatch()
  const [page, setPage] = React.useState(1)


  const getData = async () => {
    await dispatch(getPosts(page))
    // setPage((prev) => prev + 1)
  }
  
  const handleScroll = (e: any) => {
    console.log("top: " + e.target.documentElement.scrollTop)
  }

  React.useEffect(() => {
    document.addEventListener('scroll', handleScroll)
    getData()
    return () => {
      // window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section className="text-primary">
      <Title size="large">Посты</Title>
      <PostsList cols={1} type={"all"} />
    </section>
  );
};
