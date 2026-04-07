import { createFileRoute } from '@tanstack/react-router'
import Hero from "../components/elements/Hero/Hero";


export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Hero />
  ;
}
