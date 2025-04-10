// import banner from 'vite-plugin-banner';
import { defineConfig } from 'vite';

// Configuration pour le `.umd.js` (CommonJS)
const umdConfig = defineConfig({
 /*   plugins: [    
        banner(`
Hopes Form (Free Edition) v1.0.0
(c) ${new Date().getFullYear()} Laurent REBIERE / Hopes Studio
MIT License - https://github.com/expert-solutions-clariprint/hopes-form
    `.trim())
    ], */
    publicDir: 'public',  // Utiliser un dossier public pour les assets statiques
    root: './',
    base: './',
    css: {
        devSourcemap: true   // Active les sourcemaps pour débugger les CSS
    },    
    resolve: {
        alias: {
        }, 
    },
    optimizeDeps: {
        exclude: ['vendors']
//        include: ['jquery', 'jquery-ui']
    },
    server: {
      //  open: true,  // Ouvre automatiquement le navigateur au démarrage
        host: "::",
        port: 8080,
  /*      fs: {
            allow: ['..'] // Autorise l'accès au répertoire parent (ex: `node_modules`)
        } */
    },
    preview: {
        host: "::",
        port: 8080,
    },
    build: {
      /*  commonjsOptions: {
            include: [/node_modules/]
        }, */
     //   target: 'es2015',  // 🔥 Format compatible avec UMD sans `await`
        target: 'esnext',  // Active `Top-level await`
        emptyOutDir: false,  // 🔥 Empêche la suppression du contenu de `/dist/`
        outDir: 'dist',    // Répertoire de sortie pour ton module compilé
        lib: {
            entry: './src/index.js',
            name: 'hopesform',
            fileName: (format) => `hopesform.${format}.js`,
            formats: ['umd']    // Ajoute le format `es` pour générer un `.mjs`
        }, 
        rollupOptions: {
            external: ['fs', 'path'],
            input: {
                main: './index.html'  // Ajoute l'entrée HTML principale
            },
            output: {
                banner: `
/*!
 * Hopes Form (Free Edition)
 * @version 1.0.0
 * @author Laurent REBIERE
 * @license MIT
 * @repository https://github.com/expert-solutions-clariprint/hopes-form
 */
    `.trim()
            }
        },
        cssCodeSplit: false // Gestion propre des CSS
    }
});

// Exporte les deux configurations
export default umdConfig;