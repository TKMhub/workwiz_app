import axios from 'axios';
import { saveAs } from 'file-saver';

async function handleFileUpload(event) {
  const pdfFile = event.target.files[0];
  const formData = new FormData();
  formData.append('pdf', pdfFile);

  const response = await axios.post('/api/convert_pdf_to_excel/', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
    },
    responseType: 'blob'
  });

  const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  saveAs(blob, 'converted.xlsx');
}

// ファイルアップロード用のコンポーネントを作


import React from 'react';

const index = () => {
  return (
    <div>
      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileUpload}
      />
    </div>
  );
}

export default index