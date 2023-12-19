import Title from "@/shared/ui/title";
import { PostsList } from "@/widgets/PostsList";

export const PostsPage = () => {
  return (
    <section className="text-primary">
      <Title size="large">Посты</Title>
      <PostsList cols={6} type={"all"} />
    </section>
  );
};
