import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import AppHeader from '~/components/AppHeader.tsx'

import { NextUIProvider } from '@nextui-org/react'
import { useRouter } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => {
    const router = useRouter()
    return (
      <NextUIProvider
        navigate={(to, options: any) => router.navigate({ to, ...options })}
        useHref={(to) => router.buildLocation({ to }).href}
      >
        <AppHeader />
        <Outlet />
        <TanStackRouterDevtools />
      </NextUIProvider>
    )
  }
})
