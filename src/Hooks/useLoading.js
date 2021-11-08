import React, { useState } from 'react';
import Spinner from '../Components/Loading';

const useSpinner = () => {
  const [spinnerVisible, setSpinnerVisible] = useState(false);
  const spinnerIcon = spinnerVisible ? <Spinner /> : null;

  return { spinnerIcon, setSpinnerVisible };
};

export default useSpinner;
