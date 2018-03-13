import {matchRoutes} from 'react-router-config';
console.log('module', matchRoutes);

const handleRoutes = ({routes, render}) => ({
  req,
  res,
}) => {
  return matchRoutes(routes, req.url)
    .map(render);
}

export default handleRoutes;
