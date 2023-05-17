import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';

function LoadingPage() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div class="d-flex justify-content-center ">
  <div class="spinner-border" role="status">
    <span class="sr-only text-r">Loading...</span>
  </div>
</div>
  );
}

export default LoadingPage;