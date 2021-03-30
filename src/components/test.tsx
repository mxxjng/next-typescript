import * as React from 'react';

const Test: React.FC = () => {
  const [state, setState] = React.useState(false);

  return (
    <div
      onClick={() => setState(!state)}
      className={`${state ? `bg-primary` : `bg-white`} block md:flex `}
    >
      <p className="text-primary">Test</p>
      <p>Tes1</p>
    </div>
  );
};
export default Test;
