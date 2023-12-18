import Button from "@/shared/ui/Button";
import Title from "@/shared/ui/Title";
import { AdminsList } from "@/widgets/AdminsList";

export const AdminsPage = () => {
  return (
    <section className="text-primary">
      <div className="flex items-center justify-between">
        {/* <h1>Админы</h1> */}
        <Title size="large">Админы</Title>
        <Button height="min">Добавить админа</Button>
      </div>
      <AdminsList />
    </section>
  );
};
