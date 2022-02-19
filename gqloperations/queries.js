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

export const HOME_DATA = gql`

query Data {
  header {
    data {
      id
      attributes {
        head_title
        Mid_text
        Mid_About_Title
        Mid_About_Text
        Info_Title
        Info_Desc
        Great_Places_To_Visit_Title
      }
    }
  }
}

`
export const HOLIDAY_PACKAGE = gql`

query Attributes {
  holidayPackages {
    data {
      attributes {
        Heading
        Image {
          data {
            attributes {
              url
            }
          }
        }
        Description
      }
    }
  }
}

`
export const FOOTER_DATA = gql`

query Attributes {
  footer {
    data {
      attributes {
        Credit
        Number
        Email
        Address
        Whatsapp_Number
      }
    }
  }
}

`
export const FLIGHT_ABOUT = gql`

query Attributes {
  flightsAboutSection {
    data {
      attributes {
        title
        description
        title_two
        desc_two
      }
    }
  }
}


`
