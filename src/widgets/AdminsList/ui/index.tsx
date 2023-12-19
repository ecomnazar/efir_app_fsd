import { getAdmins } from '@/entities/admin/api/adminApi';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector';
import { AdminCart } from '@/shared/ui/cart';
import React from 'react'

export const AdminsList = () => {
    const dispatch = useAppDispatch()
    const admins = useAppSelector(state => state.adminSlice.admins.data)

    console.log(admins);
    
    React.useEffect(() => {
        dispatch(getAdmins())
    }, [])

  return (
    <div className="grid grid-cols-4 gap-6 mt-6">
        {admins?.map((admin) => {
          return (
            <AdminCart
              key={admin.id}
              name={admin.username}
              number={admin.phone_number}
              role={''}
              image={''}
            />
          );
        })}
      </div>
  )
}