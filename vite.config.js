import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor libraries
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // Three.js and related libraries
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          // Animation libraries
          animations: ['framer-motion', 'react-parallax-tilt'],
          // Math and utility libraries
          utils: ['maath'],
        }
      }
    },
    // Optimize build settings
    sourcemap: false,
    minify: 'terser',
    chunkSizeWarningLimit: 1000,
    // Optimize asset handling
    assetsInlineLimit: 4096, 
  },
  // Optimize images or other assets
  assetsInclude: ['**/*.glb', '**/*.gltf', '**/*.hdr'],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },

  optimizeDeps: {
    include: ['framer-motion', 'react-parallax-tilt', 'three']
  }
})