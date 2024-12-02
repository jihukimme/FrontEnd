import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import ThemeModeProvider from './components/theme/provider/ThemeModeProvider';
import ToggleTheme from './components/theme/toggle/ToggleTheme';
import Layout from './layout/Layout';
import { GlobalStyle } from './styles/GlobalStyle.style';

function App() {
  return (
    <ThemeModeProvider>
      <GlobalStyle />
      <ToggleTheme />
      <Router>
        <Layout />
      </Router>
    </ThemeModeProvider>
  );
}

export default App;
