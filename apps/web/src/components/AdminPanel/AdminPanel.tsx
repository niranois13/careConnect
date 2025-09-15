import { ProfessionsList } from './ProfessionsList.tsx'
import { UserList } from "./UserList.tsx";

export default function AdminPanel() {
  return (
    <>
      <div className="flex flex-col gap-x-5 gap-y-5 m-2">
        <UserList />
        <ProfessionsList />
      </div>
    </>
  )
}
