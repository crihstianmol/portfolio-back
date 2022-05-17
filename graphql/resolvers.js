import { blogResolvers } from '../models/resolvers/blog-resolvers.js';
import { certResolvers } from '../models/resolvers/certs-resolvers.js';

export const resolvers = [
  blogResolvers,
  certResolvers
];
