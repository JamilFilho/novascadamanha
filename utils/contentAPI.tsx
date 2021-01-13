import { GraphQLClient } from 'graphql-request';

const { API_TOKEN } = process.env

const Graphcms = new GraphQLClient(
    `https://api-eu-central-1.graphcms.com/v2/${API_TOKEN}/master`
);

export default Graphcms