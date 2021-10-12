import logo from './logo.svg';
import './App.css';
import './Css/MarketCssleft.css';
import './Css/MarketCssright.css';
import './Css/MarketCssCenter.css';
import './Css/CssRepository/MarketRepositorycenter.css'
import './Css/CssRepository/MarketRepositorysmail.css'
import MarketRouteleft from './Route/MarketRouteleft';
import MarketRoutecenter from './Route/MarketRoutecenter';
import MarketRouteright from './Route/MarketRouteright';

function App() {
  return (
    <div className="market-layout">
    <MarketRouteleft />
    <MarketRoutecenter />
    <MarketRouteright />
    </div>
  );
}

export default App;
