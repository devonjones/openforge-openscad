/* eslint-env node */
import { copy } from 'esbuild-plugin-copy';
import { replace } from 'esbuild-plugin-replace';

let defaultCorsProxy = 'http://localhost:8888/';

export default (opt_options) => {
  const corsProxy =
    process.env.CORSPROXY || opt_options?.corsProxyUrl || defaultCorsProxy;

  return {
    entryPoints: ['src/index.tsx', 'src/index.html'],
    bundle: true,
    outdir: 'dist',
    minify: process.env.NODE_ENV === 'production',
    sourcemap: process.env.NODE_ENV !== 'production',
    target: 'es2022',
    logLevel: 'info',
    loader: {
      '.html': 'copy',
      '.woff': 'file',
      '.woff2': 'file',
      '.3mf': 'copy',
    },
    plugins: [
      copy({
        resolveFrom: 'cwd',
        assets: [
          {
            from: [
              './public/*.png',
              './public/*.ico',
              './public/*.webmanifest',
              './public/*.ttf',
            ],
            to: ['./dist'],
          },
          {
            from: ['./public/scad/**/*'],
            to: ['./dist/scad'],
          },
        ],
        watch: true,
      }),
      replace({
        __CORSPROXY: corsProxy,
        __TRACKER_SNIPPET: process.env.TRACKER_SNIPPET || '',
        __GITHUB_ISSUE_URL: process.env.GH_ISSUE_URL || '',
        __GITHUB_REPO_URL: process.env.GH_REPO_URL || '',
        __WEBSITE_URL: process.env.WEBSITE_URL || 'http://localhost:8000/',
      }),
    ],
  };
};
