import { defineConfig } from "vite";
import { meteor } from "meteor-vite/plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        meteor({
            clientEntry: "imports/entrypoint/vite.tsx",
        }),
        react({
            jsxRuntime: "automatic",
        }),
    ],
});
