import { useAppSelector } from '@/shared/lib/hooks/useAppSelector';
import Title from '@/shared/ui/title'

const UserProfile = () => {
    const user = useAppSelector((state) => state.userSlice.user.data);
    return (
    <>
        <img src={user?.avatar} className="aspect-square object-cover object-center rounded-md" alt="" />
        <Title size="medium">Имя: {user?.username}</Title>
        <Title size="medium">Номер: {user?.phone_number}</Title>
        <Title size="medium">Город: {user?.city?.name}</Title>
        <Title size="medium">Дата создания: 12 11 2023</Title>
        <Title size="medium">Премиум: имеется</Title>
    </>
  )
}

export default UserProfile