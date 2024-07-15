import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // server: {
  //   port: 5174, // 設定固定端口
  //   host: true  // 允許本地和網絡訪問
  // }
});
