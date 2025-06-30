import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router";

// import { HooksApp } from './HooksApp';
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWithCustonHook } from './01-useState/CounterWithCustonHook';
// import { SimpleForm } from './02-useEfectt/SimpleForm';
// import { FormWithCustonHook } from './02-useEfectt/FormWithCustonHook';
// import { MultipleCustonHooks } from './03-examples/MultipleCustonHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Layout } from './05-useLayoutEfecct/Layout';
// import { Memorize } from './06-memos/Memorize';
// import { MemoHook } from './06-memos/MemoHook';
// import { CallbackHook } from './06-memos/CallbackHook';
// import { Padre } from './07-tarea-memo/Padre';
// import './08-useReducer/intro-reducer';
// import { TodoApp } from './08-useReducer/TodoApp';
import { MainApp } from './09-useContex/index';


//
import './index.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  {/* // <StrictMode> */}
    < MainApp/>
  {/* // </StrictMode>, */}
</BrowserRouter>
)
