import React from 'react'
import Botones from '../components/Botones'
// import Result from '../containers/Result'
// import Numbers from '../containers/Numbers'
// import Operations from './Operations'

var Buttons = ["7", "8", "9", "+", "4", "5", "6", "-",
  "3", "2", "1", "*", "0", ".", "=", "/"];

const App = () => (
  <div>
    {/* <Result />
    <Numbers />
    <Operations /> */}
    <div class="container">
      <div class="row">
        <div class="col-md-3"></div>
        <div id="Calculadora" class="col-md-6">
          <div class="panel panel-primary" style="margin-top: 10%;">
            <div class="panel-heading">Calculadora</div>
            <div class="panel-body">
              <div class="col-md-12" style="margin-bottom: 10px;">
                <div id="idCalculadora">
                  <Botones data={Buttons}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3"></div>
      </div>
    </div>
  </div>
)

export default App
