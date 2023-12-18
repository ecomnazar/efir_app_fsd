import { SearchUsersForm } from "@/features/search";
import Title from "@/shared/ui/Title";
import { UserCart } from "@/shared/ui/Сart";
import { useForm } from "react-hook-form";

export const UsersPage = () => {
  return (
    <section className="text-primary">
      <div className="flex items-center justify-between">
        <Title size="large">Пользователи</Title>
        <SearchUsersForm />
      </div>
      <div className="grid grid-cols-6 gap-2 mt-6">
        {Array.from({ length: 20 }).map(() => {
          return <UserCart name={"Nazar Jumayew"} number={"+99361234355"} role={"premium"} image={"/images/image.png"} />
        })}
      </div>
    </section>
  );
};
