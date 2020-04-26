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
    const abortController = new AbortController()

    GET(
      "users",
      abortController.signal,
      search && { first_name: search }
    ).then((response) => setUsers(response.data))

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

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) =>
    setSearch(event.target.value)

  return (
    <UserListContainer>
      <Header>
        <h1>User list</h1>
        <input value={search} onChange={onSearchChange} />
      </Header>

      {users.map((user, index) => (
        <UserEntry key={user.id} orderNumber={index + 1} user={user} />
      ))}
    </UserListContainer>
  )
}

export default UserList
