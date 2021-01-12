import { lazy, Suspense } from "react";
import { ThemeProvider } from "@material-ui/styles";
import classes from './App.module.scss';
import theme from '../theme/Theme';
import { Card, CardContent, Typography } from '@material-ui/core';
import { messages } from '../utilities/Constants';

const Header = lazy(() => import('../components/header/Header'))
const Table = lazy(() => import('../components/table/TableComponent'))
const Footer = lazy(() => import('../components/footer/Footer'))

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.content}>
        <Suspense fallback={<h6>{messages.loadingHeader}</h6>}>
          <Header />
          <Suspense fallback={<h6>{messages.loadingContents}</h6>}>
            <Typography variant="h4">{messages.tableHeading}</Typography>
            <Card>
              <CardContent>
                <Table />
              </CardContent>
            </Card>
          </Suspense>
        </Suspense>
      </div>
      <Suspense fallback={<h6>{messages.loadingFooter}</h6>}>
        <Footer />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;