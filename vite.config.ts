import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

export default defineConfig({
  plugins: [react()],
  base: "/issouf849/", // ⚠️ nom EXACT du repo GitHub
})
