import Button from "@/shared/ui/Button"
import { AdminCart } from "@/shared/ui/Сart"

export const AdminsPage = () => {
    return (
      <section className="text-primary text-3xl font-bold">
        <div className="flex items-center justify-between">
          <h1>Админы</h1>
          <Button height="min">Добавить админа</Button>
        </div>
        <div className="grid grid-cols-4 gap-6 mt-6">
          {Array.from({ length: 20 }).map(() => {
            return (
              <AdminCart name={"замат Азаматов"} number={"+99361234355"} role={"Super Admin"} image={"/images/image.png"} />
            )
          })}
        </div>
      </section>
    )
  }