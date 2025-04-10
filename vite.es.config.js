import { defineConfig } from 'vite';

// Configuration pour le `.mjs` (ESModules)
const esConfig = defineConfig({
    resolve: {
        alias: {
        }, 
    },
    optimizeDeps: {
       include: ['jquery', 'jquery-ui']
    },
    build: {
        target: 'esnext',  // Active `Top-level await`
        outDir: 'dist',  // Forcer la sortie du `.mjs` dans `/dist/`
        lib: {
            entry: './src/index.js',
            name: 'hopesform',
            fileName: 'hopesform',
            formats: ['es']
        },
        rollupOptions: {
            external: ['fs', 'path'],
            output: {
                dir: 'dist',
                inlineDynamicImports: true,
                exports: 'named'
            }
        },
        cssCodeSplit: false // Gestion propre des CSS        
    }
});

// Exporte les deux configurations
export default esConfig;