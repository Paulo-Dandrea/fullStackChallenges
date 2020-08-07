import React from 'react';
<<<<<<< HEAD
import TrafficSignal from './TrafficSignal';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/index';

export default function App() {
  return (
    <Provider store={store}>
      <TrafficSignal />
    </Provider>
=======
import Cars from './Cars';
import './App.css';

export default function App() {
  return (
    <Cars/>
>>>>>>> exercise-two
  );
}
