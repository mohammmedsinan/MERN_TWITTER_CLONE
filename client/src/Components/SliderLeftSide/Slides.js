import React from 'react';
import { useHistory } from 'react-router-dom';

function Slides({ SlideContent = [] }) {
  const history = useHistory();
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
              onClick={() => history.push(e.PathUrl)}
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
