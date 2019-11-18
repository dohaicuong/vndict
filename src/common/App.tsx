import React from "react"

import { makeStyles, Theme } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Paper from "@material-ui/core/Paper"
import AppBar from 'components/AppBar'

import ThemeProvider from './ThemeProvider'
import Routes from './Routes'

const App: React.FC = () => {
  const classes = useStyles({})

  return (
    <ThemeProvider>
      <Container fixed>
        <Paper className={classes.paper}>
          <AppBar />
          <Container>
            <Routes />
          </Container>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default App;

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    paddingBottom: theme.spacing(6)
  }
}))