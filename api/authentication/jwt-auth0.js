import jwt from 'express-jwt';
// import jwtAuthz from 'express-jwt-authz';
import jwksRsa from 'jwks-rsa';
import config from '../config';

const {domain, audience} = config.get('auth0');

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${domain}/.well-known/jwks.json`,
  }),
  audience,
  issuer: domain,
  algorithms: ['RS256'],
});

export default checkJwt;
