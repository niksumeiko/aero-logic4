/// <reference types="vitest" />
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import tailwindcss from '@tailwindcss/vite';
import dotenv from 'dotenv';

dotenv.config();
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const env = loadEnv(mode, process.cwd(), '');
    return {
        plugins: [
            tanstackRouter({
                target: 'react',
                autoCodeSplitting: true,
            }),
            react(),
            tailwindcss(),
        ],
        server: {
            port: 5173,
        },
        test: {
            include: ['**/*.test.ts'],
            reportsDirectory: 'coverage',
            // globals: true,
            environment: 'node',
        },
        define: {
            // 'process.env.API_URL': JSON.stringify(env.API_URL),
        },
    };
});
