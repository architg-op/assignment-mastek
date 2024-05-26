import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MyApp from './components/MyApp';
import ViewTable from './components/ViewTable';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main>
        <MyApp />
        <ViewTable />
      </main>
    </ThemeProvider>
  );
}
