import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    // Load env file based on `mode` in the current working directory.
    // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
    const env = loadEnv(mode, process.cwd(), "");
    return {
        // vite config for env variables
        define: {
            __EMAILJS_SERVICE_ID__: JSON.stringify(env.EMAILJS_SERVICE_ID),
            __EMAILJS_TEMPLATE_ID__: JSON.stringify(env.EMAILJS_TEMPLATE_ID),
            __EMAILJS_TEMPLATE_CUSTOM_ID__: JSON.stringify(
                env.EMAILJS_TEMPLATE_CUSTOM_ID,
            ),
            __EMAILJS_PUBLIC_KEY__: JSON.stringify(env.EMAILJS_PUBLIC_KEY),
            __GOOGLE_MAPS_KEY__: JSON.stringify(env.GOOGLE_MAPS_KEY),
            __GOOGLE_RECAPTCHA2_SITEKEY__: JSON.stringify(env.GOOGLE_RECAPTCHA2_SITEKEY),
        },
        plugins: [react()],
        build: {
            /*
                node_modules is mostly the main reason for the large chunk problem, with this you're telling Vite to treat the used modules separately
            */
            rollupOptions: {
                output: {
                    manualChunks(id) {
                        if (id.includes('node_modules')) {
                            return id.toString().split('node_modules/')[1].split('/')[0].toString();
                        }
                    }
                }
            }
        }
    };
});
