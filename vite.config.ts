import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

export default defineConfig({
  plugins: [react()],
  base: "/mon_site/", // ⚠️ nom EXACT du repo GitHub
})
