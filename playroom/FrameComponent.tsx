import React from 'react';

export default function FrameComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      id="FrameStart"
      style={{
        padding: '20px',
        margin: '0 auto',
        maxWidth: '1200px',
      }}
    >
      {children}
    </div>
  );
}

// import React from 'react';
// // import { Theme, themes } from './theme';
// // import { AppProvider } from './components';
// import './playroom.css';

// const FrameComponent: React.FC = ({ children }) => (
//   <div>
//     <div id="FrameStart">{children}</div>
//   </div>
// );

// export default FrameComponent;
