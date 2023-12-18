import { SearchUsersForm } from "@/features/search";
import Title from "@/shared/ui/Title";
import { UsersList } from "@/widgets/UsersList";

export const UsersPage = () => {
  return (
    <section className="text-primary">
      <div className="flex items-center justify-between">
        <Title size="large">Пользователи</Title>
        <SearchUsersForm />
      </div>
      <UsersList />
    </section>
  );
};
