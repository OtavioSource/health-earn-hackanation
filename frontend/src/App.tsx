
import Home from "./Home";
import OverviewPage from "./OverviewPage";
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