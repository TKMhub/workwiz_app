import { ChangeEvent, useState } from 'react';

const index = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      alert('ファイルが選択されていません');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (response.status === 200) {
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'output.xlsx');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } else {
      alert('エラーが発生しました');
    }
  };

  return (
    <div>
      <h1>PDFファイルをアップロードしてExcelファイルに変換</h1>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <button onClick={handleSubmit}>アップロード</button>
    </div>
  );
};

export default index;
