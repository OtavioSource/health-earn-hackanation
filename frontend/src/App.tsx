
import Home from "./Home";
import OverviewPage from "./page/OverviewPage";
import { useUser } from "./UserContext";

function App() {

  const { user, setUser} = useUser();
  return(
  <>
      {user.isLoggedIn ? <OverviewPage /> : <Home />}
  </>
  )
}

export default App;