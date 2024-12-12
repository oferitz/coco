import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: Index
})

function Index() {
  return (
    <div className="p-2">
      <h1>Welcome To CoCo 🥥 Starter</h1>
    </div>
  )
}
