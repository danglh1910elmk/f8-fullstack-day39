import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/f8-fullstack-day39",
    // cấu hình dùng đường dẫn tuyệt đối
    resolve: {
        alias: {
            // eslint-disable-next-line no-undef
            "@": path.resolve(__dirname, "src"),
        },
    },
});
