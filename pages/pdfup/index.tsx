import axios from 'axios';
import { saveAs } from 'file-saver';
import React, { ChangeEvent } from 'react';

const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    // アップロードされたファイルを取得
    const pdfFile = event.target.files && event.target.files[0];
    if (!pdfFile) return;
  
    // FormDataオブジェクトを作成し、PDFファイルを追加
    const formData = new FormData();
    formData.append('pdf', pdfFile);
  
    // APIリクエストを送信し、変換されたExcelファイルをblobとして受け取る
    const response = await axios.post('/api/convert_pdf_to_excel/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`,
      },
      responseType: 'blob',
    });
  
    // BlobをExcelファイルとして保存
    const blob = new Blob([response.data], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
    saveAs(blob, 'converted.xlsx');
  };
  

const index = () => {
  return (
    <div>
      <input type="file" accept="application/pdf" onChange={handleFileUpload} />
    </div>
  );
};

export default index;
