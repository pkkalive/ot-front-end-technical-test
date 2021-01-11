import React, {lazy, Suspense} from "react";
import { ThemeProvider } from "@material-ui/styles";
import classes from './App.module.scss';
import theme from '../theme/Theme';
import { Card, CardContent } from '@material-ui/core';

const Header = lazy(() => import('../components/header/Header'))
const Table = lazy(() => import('../components/table/TableComponent'))
const Footer = lazy(() => import('../components/footer/Footer'))

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.content}>
        <Suspense fallback={<h6>Loading header...</h6>}>
          <Header />
          <Suspense fallback={<h6>Loading items...</h6>}>
            <Card>
              <CardContent>
                <Table />
              </CardContent>
            </Card>
          </Suspense>
        </Suspense>
      </div>
      <Suspense fallback={<h6>Loading footer...</h6>}>
        <Footer />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;