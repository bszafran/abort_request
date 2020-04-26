import React, { useState, useEffect, ChangeEvent } from "react"
import styled from "styled-components/macro"
import { GET } from "../common/api/client"
import { User } from "./model"
import UserEntry from "./UserEntry"

const UserListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Header = styled.header`
  margin-bottom: 25px;
`

const useUsersState = () => {
  const [users, setUsers] = useState<User[]>([])
  const [search, setSearch] = useState<string>("")

  useEffect(() => {
    GET("users").then((response) => setUsers(response.data))
  }, [])

  useEffect(() => {
    const abortController = new AbortController()

    if (search.length > 0) {
      GET("users", abortController.signal).then((response) =>
        setUsers(response.data)
      )
    }

    return () => abortController.abort()
  }, [search])

  return {
    users,
    search,
    setSearch,
  }
}

const UserList = () => {
  const { users, search, setSearch } = useUsersState()

  return (
    <UserListContainer>
      <Header>
        <h1>User list</h1>
        <input
          value={search}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setSearch(event.target.value)
          }
        />
      </Header>

      {users.map((user, index) => (
        <UserEntry key={user.id} orderNumber={index + 1} user={user} />
      ))}
    </UserListContainer>
  )
}

export default UserList
