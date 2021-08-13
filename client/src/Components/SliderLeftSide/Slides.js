import React from 'react';

function Slides({ SlideContent = [] }) {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {SlideContent.map((e) => {
          return (
            <div
              key={e.SlideName}
              style={{
                fontSize: '20px',
                cursor: 'pointer',
                marginBottom: '30px',
                lineHeight: '24px',
              }}
              className="onHover-List"
            >
              <span style={{ fontSize: '27px' }}>{e.Logo}</span>
              <p style={{ fontWeight: 'bold', display: 'inline', margin: '0px 20px' }}>
                {e.SlideName}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Slides;
