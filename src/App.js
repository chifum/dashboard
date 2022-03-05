import Header from "./components/Header";
import { DashboardProvider } from './context/DashboardContext';
// import Page from "./components/Page";
// import '../src/assets/Page.css'

function App() {
  return (
    <DashboardProvider>
      <div className="App">
        {/* <Page /> */}
        <Header />
      </div>
    </DashboardProvider>
  );
}

export default App;
