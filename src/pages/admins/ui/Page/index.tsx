import Button from "@/shared/ui/Button"
import Title from "@/shared/ui/Title"
import { AdminCart } from "@/shared/ui/Сart"

export const AdminsPage = () => {
    return (
      <section className="text-primary">
        <div className="flex items-center justify-between">
          {/* <h1>Админы</h1> */}
          <Title size="large">Админы</Title>
          <Button height="min">Добавить админа</Button>
        </div>
        <div className="grid grid-cols-4 gap-6 mt-6">
          {Array.from({ length: 20 }).map(() => {
            return (
              <AdminCart key={Math.random()} name={"замат Азаматов"} number={"+99361234355"} role={"Super Admin"} image={"/images/image.png"} />
            )
          })}
        </div>
      </section>
    )
  }