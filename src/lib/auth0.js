import { Auth0NextApi } from '@auth0/nextjs-auth0';

export default Auth0NextApi({
    secret: process.env.local.AUTH0_SECRET,
    baseURL: process.env.local.AUTHO_BASE_URL,
    issuerBaseURL: process.env.local.AUTH0_ISSUER_BASE_URL,
    clientID: process.env.local.AUTHO_CLIENT_ID,
    cientSecret: process.env.local.AUTH0_CLIENT_SECRET,
});