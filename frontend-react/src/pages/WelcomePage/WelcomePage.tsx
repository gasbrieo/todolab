import Button from "@/components/Button";
import Card from "@/components/Card";
import CardActions from "@/components/CardActions";
import CardContent from "@/components/CardContent";
import Typography from "@/components/Typography";
import { useAuthStore } from "@/stores/authStore";

import "./WelcomePage.scss";

const WelcomePage = () => {
  const login = useAuthStore((state) => state.login);

  return (
    <div className="welcome-page">
      <div className="welcome-page__logo">
        <img
          src="/vite.svg"
          alt="Logo"
          className="welcome-page__logo-img"
        />
        <span className="welcome-page__logo-text">TodoLab</span>
      </div>
      <Card className="welcome-page__card">
        <CardContent>
          <Typography variant="h5">Welcome!</Typography>
          <Typography
            variant="body2"
            className="welcome-page__description"
          >
            A fullstack To-Do application built with different technologies.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            onClick={login}
          >
            Login
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default WelcomePage;
