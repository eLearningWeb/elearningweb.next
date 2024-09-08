'use client'
import React, { useState } from 'react';

export default function FileUploader() {
  const [fileContent, setFileContent] = useState<string | ArrayBuffer | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFileContent(reader.result);
      };
      reader.readAsText(file); // Read the file as text
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {fileContent && <pre>{fileContent.toString()}</pre>}
    </div>
  );
}