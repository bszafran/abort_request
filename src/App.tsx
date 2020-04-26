import React from "react"
import styled from "styled-components/macro"
import UserList from "./userList/UserList"

const AppContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`

function App() {
  return (
    <AppContainer>
      <UserList />
    </AppContainer>
  )
}

export default App
