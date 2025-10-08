import Dashboard from "./Dashboard/Page"
import AnotherPage from "./projects/Page"
import BottomPage from "./bottom/Page"
import HeroText from "./components/Herotext"
// import InteractiveBoxPage from "./components/InteractiveBoxPage"
import ToolsAndCoinPage from "./ToolsAndCoin/Page"
import Contactus from "./contactus/Page"
// import ShaderReminderPage from "./ShaderReminderPage/Page"
import WhatWeDo from "./WhatWeDo/Page"


export default function App({}) {
  return (
    <>
      <Dashboard />
      <HeroText/>
      <WhatWeDo/>
      <ToolsAndCoinPage/>
      <AnotherPage/>
      {/* <ShaderReminderPage/> */}
      {/* <InteractiveBoxPage/> */}
      <Contactus/>
      <BottomPage/>
     
    </>
  )
}


