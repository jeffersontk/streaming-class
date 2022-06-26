import { ReactElement } from "react"
import { Router } from "./Router"
import { client } from './lib/apollo'
import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"

export const App = (): ReactElement => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}
