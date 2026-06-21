import { Outlet } from 'react-router-dom'
import BottomNav from './BottomNav'

function Layout() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <main className="pb-20">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  )
}

export default Layout
