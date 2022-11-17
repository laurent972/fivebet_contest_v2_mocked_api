import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Profil from './Pages/Profil';
import LeaderBoard from './Pages/LeaderBoard';
import Loots from './Pages/Loots';
import './styles/index.scss';
import ParticipantRegister from "./Pages/ParticipantRegister";
import AddContestant from "./Pages/AddContestant";
import { LoginContext } from "./service/context";
import { useEffect, useMemo, useState } from "react";
import Notfound from "./Pages/Notfound";
import PrivateRoute from "./components/PrivateRoute";


function App() {

  const [loggedIn,setLoggedIn] = useState(null);
  const value = useMemo(()=>({loggedIn,setLoggedIn}), [loggedIn,setLoggedIn]);
 
  useEffect(()=>{
    if(localStorage.getItem('auth') !== null){
      setLoggedIn(true)
    }else{
      setLoggedIn(false)
    }
  },[])

  return (
    <div className="App content-global">
      <div className="container postion-relative">
      <LoginContext.Provider value={value}>
          <Routes>
                   <Route path="fivebet_contest_v2_mocked_api/" element={<Home />} />
                    <Route path="fivebet_contest_v2_mocked_api/leaderboard" element={<LeaderBoard />} />
                    <Route path="fivebet_contest_v2_mocked_api/loots" element={<Loots />} />
                    {/* <Route path="fivebet_contest_v2_mocked_api/" element={<PrivateRoute />}> */}
                      <Route path="fivebet_contest_v2_mocked_api/profil/:id" element={<Profil />} />
                      <Route path="fivebet_contest_v2_mocked_api/contestants" element={<ParticipantRegister />} />
                      <Route path="fivebet_contest_v2_mocked_api/add-contestant" element={<AddContestant /> }/>
                    {/* </Route> */}
                    <Route path="fivebet_contest_v2_mocked_api/*" element={<Notfound />}/> 
          </Routes>
        </LoginContext.Provider>
      </div>
    </div>
  );
}

export default App;
