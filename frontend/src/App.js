import styled from 'styled-components';
import bg from './img/bg.png'
import { MainLayout } from './styles/Layout';
import Orb from './Components/Orb/Orb'
import Navigation from './Components/Navigation/navigation';
import React, {useState,useMemo} from 'react';
import Dashboard from './Components/Dashboard/dashboard';
import Incomes from './Components/Income/income';
import Expenses from './Components/Expenses/expenses';
import { useGlobalContext } from './context/globalContext';

function App() {
  const [active,setActive] = React.useState(1)

  const global = useGlobalContext()
     
  

  const obrMemo = useMemo(() => {
    return <Orb />
  },[])

  const displayData = ()=> {
    switch(active) {
      case 1:
        return <Dashboard/> 
      case 2:
        return <Dashboard/>
      case 3:
        return <Incomes/>
      case 4:
        return <Expenses/>
      default:
        return <Dashboard/>
    }
  }
  return (
    <AppStyled bg = {bg} className="App">
     { obrMemo }
      <MainLayout>
        <Navigation active={active} setActive = {setActive} />
        <main>
          {displayData}
        </main>
      </MainLayout>
    </AppStyled>
  );
}


const AppStyled = styled.div`

height: 100vh;
background-image: url(${props => props.bg});
position: relative;
main{
  flex: 1;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #FFFFFF;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  overflow-x: hidden;
  &::-webkit-scrollbar{
    width: 0;
  }
}

`;
export default App;
