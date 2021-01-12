import { lazy, Suspense } from "react";
import { ThemeProvider } from "@material-ui/styles";
import classes from './App.module.scss';
import theme from '../theme/Theme';
import { Card, CardContent, Typography } from '@material-ui/core';
import { titles } from '../utilities/Constants';

const Header = lazy(() => import('../components/header/Header'))
const Table = lazy(() => import('../components/table/TableComponent'))
const Footer = lazy(() => import('../components/footer/Footer'))

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.content}>
        <Suspense fallback={<h6>{titles.loadingHeader}</h6>}>
          <Header />
          <Suspense fallback={<h6>{titles.loadingContents}</h6>}>
            <Typography variant="h4">{titles.tableHeading}</Typography>
            <Card>
              <CardContent>
                <Table />
              </CardContent>
            </Card>
          </Suspense>
        </Suspense>
      </div>
      <Suspense fallback={<h6>{titles.loadingFooter}</h6>}>
        <Footer />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;