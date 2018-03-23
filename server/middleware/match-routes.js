import {matchRoutes} from 'react-router-config';

const handleRoutes = ({routes, render}) => ({
  req,
}) => matchRoutes(routes, req.url)
  .map(render);

export default handleRoutes;
