import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        open: true,
        allowedHosts: ['nitinb.botsetgo.com'],
        proxy: {
            '/v1': {
                target: 'https://bbm.botsetgo.com',
                changeOrigin: true, // Ensures the origin is updated to the target's domain
                configure: (proxy, options) => {
                    // Customize the proxy configuration to add the original host
                    proxy.on('proxyReq', (proxyReq, req, res) => {
                        proxyReq.setHeader('X-Original-Host', req.headers['host'])
                    })
                }
            },
            '/asset': {
                target: 'https://bbm.botsetgo.com',
                changeOrigin: true, // Ensures the origin is updated to the target's domain
                configure: (proxy, options) => {
                    // Customize the proxy configuration to add the original host
                    proxy.on('proxyReq', (proxyReq, req, res) => {
                        proxyReq.setHeader('X-Original-Host', req.headers['host'])
                    })
                }
            }
        }
    },
    build: {
        rollupOptions: {
            output: {
                assetFileNames: 'agency-assets/[name].[hash][extname]', // Change "my-assets" to your desired folder name
                // Specify the folder for JavaScript chunks
                chunkFileNames: 'agency-assets/[name].[hash].js',
                // Specify the folder for the main JavaScript entry files
                entryFileNames: 'agency-assets/[name].[hash].js'
            }
        }
    }
})
