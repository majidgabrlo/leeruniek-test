import React from 'react'

function Note({content}) {
    
    return (
        <div data-testid="note-content" className="bg-white py-1 px-2 rounded mb-1">
            {content}
        </div>
    )
}

export default Note
