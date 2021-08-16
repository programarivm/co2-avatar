import React from 'react';
import { useSelector } from 'react-redux';
import Test from './Test.js';
import Result from './Result.js';

const TakeTest = () => {
  const state = useSelector(state => state);

  return (
    <div>
      {state.test.result ? <Result /> : <Test />}
    </div>
  );
}

export default TakeTest;
