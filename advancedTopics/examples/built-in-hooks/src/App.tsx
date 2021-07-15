import { UseState } from './components/UseState'
import { UseRef } from './components/UseRef'
import { UseEffect } from './components/UseEffect'
import { UseContext } from './components/UseContext'
import { Card } from './components/Card'

function App() {
  return (
    <div>
      <Card title={'useState'}>
        <UseState />
      </Card>
      
      <Card title={'useRef'}>
        <UseRef />
      </Card>
      
      <Card title={'useEffect'}>
        <UseEffect />
      </Card>
      
      <Card title={'useContext'}>
        <UseContext />
      </Card>
    </div>
  );
}

export default App;