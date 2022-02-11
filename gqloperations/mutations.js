import { gql } from "@apollo/client";



export const REGISTER_USER = gql`

mutation Register($input: UsersPermissionsRegisterInput!) {
    register(input: $input) {
      jwt
      user {
        id
        username
        email
        confirmed
        blocked
      }
    }
  }

`


export const LOGIN_USER = gql  `

mutation Login($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
      user {
        id
      username
      email
      confirmed
      blocked
      }
      
    }
  }


`