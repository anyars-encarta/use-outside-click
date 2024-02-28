import { useRef, useState } from 'react';
import UseOutsideClick from '.';

const UseOnClickOutsideTest = () => {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  UseOutsideClick(ref, () => setShowContent(false));

  return (
    <div>
      {
            showContent
              ? (
                <div ref={ref}>
                  <h1>This is a Random Content</h1>
                  <p>
                    Please click outside of this to close this.
                    It won&apos;t close if you click inside of this content.
                  </p>
                </div>
              )
              : <button type="button" onClick={() => setShowContent(true)}>Show Content</button>
        }
    </div>
  );
};

export default UseOnClickOutsideTest;
