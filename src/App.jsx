import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './features/counter/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  console.log('Check increment:', increment);
  return (
    <>
      <h5>Welcome Count Project </h5>
      <h4>{count} </h4>
      <button onClick={() => dispatch(increment(1))}>
        {' '}
        Add the new values{' '}
      </button>
      <button onClick={() => dispatch(decrement(1))}>
        {' '}
        Decrement the new values{' '}
      </button>
    </>
  );
}

export default App;
