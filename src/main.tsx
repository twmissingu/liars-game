/**
 * Code Geass: Liar's Game - 入口文件
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 导入全局样式
import './styles/global.css';

// 渲染应用
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
