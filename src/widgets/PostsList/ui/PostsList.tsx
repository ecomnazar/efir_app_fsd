import { PostCart } from "@/entities/cart";
import { deletePost, getPost, getPosts } from "@/entities/post/api/postApi";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";
import Button from "@/shared/ui/button";
import { Loading, PaginationLoading } from "@/shared/ui/loading";
import Modal from "@/shared/ui/modal";
import Title from "@/shared/ui/title";
import React from "react";
import { Props } from ".";
import { ProfileNavigationButton } from "@/features/button";

export const PostsList = ({ cols = 6 }: Props) => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.postSlice.posts.data);
  const post = useAppSelector((state) => state.postSlice.post.data);
  const postLoading = useAppSelector((state) => state.postSlice.post.loading);
  const hasNext = useAppSelector((state) => state.postSlice.posts.next);
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  const [loadingDeleteButton, setLoadingDeleteButton] = React.useState(false);
  const [page, setPage] = React.useState(1);

  const fetchData = React.useCallback(async () => {
    await dispatch(getPosts(page));
    setPage((prev) => prev + 1);
  }, [page]);

  const handleClick = (id: string) => {
    dispatch(getPost(id));
    setIsOpenModal(true);
  };

  const handleDelete = async () => {
    setLoadingDeleteButton(true);
    await dispatch(deletePost(post?.id));
    setLoadingDeleteButton(false);
    setIsOpenModal(false);
  };

  return (
    <>
      <div className={`grid grid-cols-${cols} gap-2 mt-6`}>
        {posts?.map((post) => {
          return (
            <PostCart
              key={post.id}
              description={post.description}
              likes={post.likes}
              content={post.type === "video" ? String(post.video) : post.images[0]}
              type={post.type === "video" ? "video" : "image"}
              onClick={() => handleClick(post.id)} />
          );
        })}
      </div>
      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
        {post && postLoading ? (
          <div className="h-[200px] relative">
            <Loading color="#25262D" />
          </div>
        ) : (
          <div>
            <Title className="mb-4">
              {post.description ? post.description : "Нету описания"}
            </Title>
            {post.type === "video" ? (
              <video className="w-full" src={post.video} controls />
            ) : (
              <img
                className="w-full"
                src={post.images && post.images[0]}
                alt="" />
            )}
            <Title size="small">Тэги: {post.tags}</Title>
            <Title size="small">Лайки: {post.likes}</Title>
            <Button
              isLoading={loadingDeleteButton}
              className="bg-[#DC676C] w-full mt-2"
              onClick={handleDelete}
            >
              Удалить
            </Button>
            <ProfileNavigationButton id={post?.user?.id} />
          </div>
        )}
      </Modal>
      <PaginationLoading hasNext={hasNext} onChange={fetchData} />
    </>
  );
};
