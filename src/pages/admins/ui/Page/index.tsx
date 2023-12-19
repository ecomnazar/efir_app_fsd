import Button from "@/shared/ui/button";
import Title from "@/shared/ui/title";
import { AdminsList } from "@/widgets/AdminsList";

export const AdminsPage = () => {
  return (
    <section className="text-primary">
      <div className="flex items-center justify-between">
        <Title size="large">Админы</Title>
        <Button height="min">Добавить админа</Button>
      </div>
      <AdminsList />
    </section>
  );
};
