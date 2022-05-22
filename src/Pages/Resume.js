import React from 'react';
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import './assets/css/custom.css';

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function removeTextLayerOffset() {
    const textLayers = document.querySelectorAll(
      '.react-pdf__Page__textContent'
    );
    textLayers.forEach((layer) => {
      const { style } = layer;
      style.top = '0';
      style.left = '0';
      style.transform = '';
    });
  }

  return (
    <div>
      <div class="p-0 pt-2 ps-md-3">
        <h1><i class="fa-solid fa-briefcase" id="ico-color"></i> Resume</h1>
      </div>
      <hr/>
      <div class="position-absolute start-50 translate-middle-x mt-2">
        <Document file="Abdullah Akbar Resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} scale="1.5" onLoadSuccess={removeTextLayerOffset} />
        </Document>
      </div>
      <div class="position-absolute bottom-0 start-50 translate-middle-x mb-2">
      <a href="Abdullah Akbar Resume.pdf" target="_blank" rel="noreferrer noopener"><button type="button" class="btn btn-custom">Download</button></a>
      </div>
    </div>
  );
};

export default Resume;