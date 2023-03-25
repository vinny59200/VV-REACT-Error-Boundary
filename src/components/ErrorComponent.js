import React, { useEffect } from 'react';

function ErrorComponent() {
  useEffect(() => {
    // Throw a runtime exception
    throw new Error('This is a runtime exception!');
  }, []);

  return <h1>Hello, World!</h1>;
}

export default ErrorComponent;
