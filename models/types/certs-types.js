import { gql } from "apollo-server-express";

const tiposCert = gql`
    type Cert {
        id: ID!
        institute: String
        instituteUrl: String
        certTitle: String
        certUrl: String
    }    

    type Query {
        Certs(
            institute: String
            instituteUrl: String
            certTitle: String
            certUrl: String
        ): [Cert]    
    }
`;

export { tiposCert };
