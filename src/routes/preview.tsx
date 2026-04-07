import { createFileRoute } from '@tanstack/react-router'
import UiNavbar from '../components/Ui/Navbar/UiNavbar'

export const Route = createFileRoute('/preview')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div><UiNavbar /></div>
}
