import React, { useRef } from 'react'

const FileUploader = (onFileSelect) => {
    const fileInput = useRef(null);

    const handleFileInput = (event) => {
      onFileSelect(event.target.files[0])
    }
  return (
    <div>
      <input type="file" onChange={handleFileInput} />
      <button onClick={e => fileInput.current && fileInput.current.click()} />
    </div>
  )
}

export default FileUploader