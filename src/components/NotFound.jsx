import { Link, useRouteError } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";
const NotFound = () => {
  const error = useRouteError();
  return (
    <div id="error-page" className="flex flex-col p-20 items-center">
      <Typography variant="paragraph" className="font-poppins p-20 font-bold">
        Sorry, an unexpected error has occured
      </Typography>
      <Typography variant="h1" className="font-poppins">
        Page <i>{error.statusText || error.message}</i>
      </Typography>
      <Button className="m-5">
        <Link to="/">Home</Link>
      </Button>
    </div>
  );
};
export default NotFound;
