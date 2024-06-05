import React from 'react';

//import Week2Component from './components';
// import React from 'react';
import { MyComponentWithoutJSX, MyComponentWithJSX, MyFunctionComponent, MyClassComponent } from './components';

function App() {
  return (
    <div>
      <MyComponentWithoutJSX />
      <MyComponentWithJSX />
      <MyFunctionComponent />
      <MyClassComponent />
    </div>
  );
}
export default App;