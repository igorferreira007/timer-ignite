import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default.ts"
import { GlobalStyle } from "./styles/global.ts"
import { Router } from "./Router.tsx"
import { BrowserRouter } from "react-router-dom"
import { CyclesContextProvider } from "./contexts/CyclesContext.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
)
