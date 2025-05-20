import Hello from './Hello.jsx'
import Hello2 from './Hello2.jsx'
import Hello3 from './Hello3.jsx'
import './App.jsx'

function App() {
  const divStyle = { 
    color: 'tomato', 
    fontSize: '30px' 
}
  
  return (
    <>
      <h1>Hello React!</h1>
      <h2>첫 번째 Component</h2>
      <App2/>
      <div style = {{height:20, width:200, color :'red'}}>
        점심 메뉴는 무엇이였나요?
      </div>
      <div style = {divStyle}>
        저는 쌀과자, 연단빵, 커피를 먹었습니다.
      </div>
      <div className="App-header"> 
        링크 CSS 적용하기
      </div>
      <Hello />
      <Hello2 firstName="이" lastName="김" />
      <Hello2 firstName="삼" lastName="김" />
      <Hello3 firstName="사" lastName="김" />
      
    </>
  )
}

function App2() {
  return (
    <>
      <h1>안녕하세요.</h1>
    </>
  )
}

export default App