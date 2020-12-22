import styled from "styled-components"

export const LayoutWrapper = styled.div`
  font: 15px / 24px Lato, -apple-system, system-ui, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  margin: 0 auto;
  max-width: ${({isHome}) => (isHome ? '100vw' : '960px')};
  box-sizing: border-box;
  padding: ${({isHome}) => (isHome ? 'none' : '0 20px 40px 20px')};
`
