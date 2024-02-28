import { useState } from 'react'

const UseOnClickOutsideTest = () => {
    const [showContent, setShowContent] = useState(false);

    return (<div>
        {
            showContent ? 
            <div>
                <h1>This is a Random Content</h1>
                <p>Please click outside of this to close this. It won't close if you click inside of this content.</p>
            </div> : 
            <button onClick={() => setShowContent(true)}>Show Content</button>
        }
    </div>)
};

export default UseOnClickOutsideTest;