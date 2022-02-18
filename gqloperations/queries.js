import { gql } from "@apollo/client";



export const FILTER_TICKETS = gql`

query FlightTickets($filters: FlightTicketFiltersInput) {
    flightTickets(filters: $filters) {
      data {
        id
        attributes {
          Depart_place
          Depart
          Arrival_place
          Arrival
          Price
          Date
        }
      }
      
    }
  }


`

export const GET_USER = gql `


query Me {
  me {
    id
    username
    email
    confirmed
    blocked
  }
}





`

export const GET_ALL_FLIGHTS = gql `


query FlightTickets {
  flightTickets {
    data {
      id
      attributes {
        Depart_place
        Depart
        Arrival_place
        Arrival
        Date
        Price
        Extra_info
        
      }
    }
    
  }
}




`

export const GET_INDIVIDUAL_TICKET = gql`

query UsersPermissionsUser($usersPermissionsUserId: ID) {
  usersPermissionsUser(id: $usersPermissionsUserId) {
    data {
      attributes {
        username
        email
        Pan_Card
        Aadhar_Card
        user_tickets {
          data {
           
            attributes {
             Ticket_Purchased
              PDF {
                data {
                  id
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`

export const CHEKING_CRED = gql`

query UsersPermissionsUser($usersPermissionsUserId: ID) {
  usersPermissionsUser(id: $usersPermissionsUserId) {
    data {
      id
      attributes {
        Aadhar_Card
        Pan_Card
        username
        email
      }
    }
  }
}


`