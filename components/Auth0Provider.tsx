'use client'

import { Auth0Provider } from '@auth0/auth0-react'

export default function Providers({ children }: { children: React.ReactNode }) {
  const redirect_uri =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : ''

  return (
    <Auth0Provider
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      authorizationParams={{
        redirect_uri,
      }}
    >
      {children}
    </Auth0Provider>
  )
}
