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

export const POST_CONTACT = gql`

mutation CreateContact($data: ContactInput!) {
  createContact(data: $data) {
    data {
      attributes {
        Name
        Email
        Subject
        Message
      }
    }
  }
}


`

export const POST_ORDER_IN_BACKEND = gql`

mutation CreateUserTicket($data: UserTicketInput!) {
  createUserTicket(data: $data) {
    data {
      attributes {
        First_Name
        Last_Name
        Email
        Number
        Address
        ZIP
        Ticket_Purchased
      }
    }
  }
}

`

export const UPLOAD_KYC = gql`

mutation UpdateUsersPermissionsUser($updateUsersPermissionsUserId: ID!, $data: UsersPermissionsUserInput!) {
  updateUsersPermissionsUser(id: $updateUsersPermissionsUserId, data: $data) {
    data {
      attributes {
        username
        email
        Aadhar_Card
        Pan_Card
      }
    }
  }
}

`