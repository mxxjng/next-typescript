import React, { useState } from 'react';

interface Props {
  message: string;
}

const Vim: React.FC<Props> = ({ message }) => {
  const [data, setData] = useState(0);
  return (
    <div>
      <p>hi im writing this component with vim its so cool</p>
      <p>{message}</p>
    </div>
  );
};
export default Vim;
