import { createFileRoute } from '@tanstack/react-router'
import Hero from "../components/elements/Builder/Builder";


export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Hero />
  ;
}
