import React from "react"
import styled from "styled-components/macro"
import { User } from "./model"

interface UserEntryProps {
  user: User
  orderNumber: number
}

const UserEntryContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const UserEntry = (props: UserEntryProps) => {
  return (
    <UserEntryContainer>
      {`${props.orderNumber}. ${props.user.first_name} ${props.user.email}`}
    </UserEntryContainer>
  )
}

export default UserEntry
