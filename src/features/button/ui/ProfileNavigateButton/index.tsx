import Button from '@/shared/ui/button'
import { useNavigate } from 'react-router-dom'

export const ProfileNavigationButton = ({id}: { id: string }) => {
  const navigate = useNavigate()

  const handleClick = () => {
      navigate(`/user/${id}`)
  }

  return <Button onClick={handleClick} className="w-full mt-2">Профиль</Button>
  
}