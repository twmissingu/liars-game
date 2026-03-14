/**
 * Code Geass: Liar's Game - 入口文件
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 导入全局样式
import './styles/global.css';
import './styles/responsive.css';

// 渲染应用
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// Deploy trigger Sat Mar 14 10:23:30 PM CST 2026
