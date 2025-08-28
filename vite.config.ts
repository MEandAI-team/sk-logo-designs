import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Map imports like "@radix-ui/react-slot@1.1.2" -> "@radix-ui/react-slot"
function stripVersionPlugin() {
  return {
    name: 'strip-version-specifiers',
    enforce: 'pre' as const,
    resolveId(this: any, source: string, importer?: string, options?: any) {
      // Ignore relative/absolute/virtual ids
      if (source.startsWith('.') || source.startsWith('/') || source.startsWith('\u0000')) return null
      // Match scoped or unscoped package names that end with @x.y.z
      const match = source.match(/^(@[^/]+\/[^^@/]+|[^@/][^@]*)(?:@\d+\.\d+\.\d+)$/)
      if (match) {
        const bare = match[1]
        return this.resolve(bare, importer, { ...options, skipSelf: true })
      }
      return null
    },
  }
}

// Resolve figma:asset/* to a tiny placeholder data URL. You can later replace with real assets.
function figmaAssetPlugin() {
  return {
    name: 'figma-asset-resolver',
    enforce: 'pre' as const,
    resolveId(source: string) {
      if (source.startsWith('figma:asset/')) {
        return `\0${source}`
      }
      return null
    },
    load(id: string) {
      if (id.startsWith('\u0000figma:asset/')) {
        // 1x1 transparent PNG
        const dataUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4nGNgYGD4DwABBgEA1x2HrgAAAABJRU5ErkJggg=='
        return `export default ${JSON.stringify(dataUrl)};`
      }
      return null
    },
  }
}

export default defineConfig({
  base: '/',
  plugins: [figmaAssetPlugin(), stripVersionPlugin(), react()],
})