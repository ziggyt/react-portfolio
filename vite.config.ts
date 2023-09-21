import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import Markdown from 'vite-plugin-md'

export default defineConfig({
    base: '/',
    plugins: [
        react(),
        Markdown(),
    ],
    assetsInclude: ['**/*.md', '*.md', '.md']
})
