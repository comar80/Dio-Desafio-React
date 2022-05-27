import React from 'react'
import GithubProvider from './providers/github-provider'
import { ResetCSS } from './global/resetCSS'
import GithubApp from './App'

function Providers() {
  return (
      <main>

    <GithubProvider>
      <ResetCSS />
      <GithubApp />
    </GithubProvider>
      </main>
  )
}

export default Providers