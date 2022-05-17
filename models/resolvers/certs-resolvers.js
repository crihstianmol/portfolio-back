import { CertModel } from "../schema/certs-schema.js";

const certResolvers = {
  Query: {
    Certs: async (root, args) => {
      let filtro = {}
      if (args.institute) {
        filtro.institute = args.institute
      }
      if (args.instituteUrl) {
        filtro.instituteUrl = args.instituteUrl
      }
      if (args.certTitle) {
        filtro.certTitle = args.certTitle
      }
      if (args.certUrl) {
        filtro.certUrl = args.certUrl
      }
      const certList = await CertModel.find(filtro);
      return certList;
    },
  },
};

export { certResolvers };
