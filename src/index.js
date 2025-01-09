import React from 'react';
import ReactDOM from 'react-dom/client';
import Mall from './mall.js';
import App from './App';
import './index.css';

function Saturday(conex) {
  return (
    <h2>
    저번주 토요일에는 친구들과 {conex.shop}스타필드 <Mall/>을 방문하여<br/> 쇼핑도 하고 식사도 하며 즐거운 시간을 보냈습니다.
  </h2>
)

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Saturday shop="스타필드"/>)

