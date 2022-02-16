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
        user_tickets {
          data {
            id
            attributes {
              Arrival
              Depart
              Date
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