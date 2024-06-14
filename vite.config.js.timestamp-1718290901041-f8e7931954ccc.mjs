// vite.config.js
import { defineConfig, loadEnv } from "file:///Users/kim0n0/myDev/2_TEMPLATES/Landing_Page/node_modules/vite/dist/node/index.js";
import react from "file:///Users/kim0n0/myDev/2_TEMPLATES/Landing_Page/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    // vite config for env variables
    define: {
      __EMAILJS_SERVICE_ID__: JSON.stringify(env.EMAILJS_SERVICE_ID),
      __EMAILJS_TEMPLATE_ID__: JSON.stringify(env.EMAILJS_TEMPLATE_ID),
      __EMAILJS_PUBLIC_KEY__: JSON.stringify(env.EMAILJS_PUBLIC_KEY),
      __GOOGLE_MAPS_KEY__: JSON.stringify(env.GOOGLE_MAPS_KEY)
    },
    plugins: [react()]
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMva2ltMG4wL215RGV2LzJfVEVNUExBVEVTL0xhbmRpbmdfUGFnZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2tpbTBuMC9teURldi8yX1RFTVBMQVRFUy9MYW5kaW5nX1BhZ2Uvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2tpbTBuMC9teURldi8yX1RFTVBMQVRFUy9MYW5kaW5nX1BhZ2Uvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcsIGxvYWRFbnYgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IGNvbW1hbmQsIG1vZGUgfSkgPT4ge1xuICAgIC8vIExvYWQgZW52IGZpbGUgYmFzZWQgb24gYG1vZGVgIGluIHRoZSBjdXJyZW50IHdvcmtpbmcgZGlyZWN0b3J5LlxuICAgIC8vIFNldCB0aGUgdGhpcmQgcGFyYW1ldGVyIHRvICcnIHRvIGxvYWQgYWxsIGVudiByZWdhcmRsZXNzIG9mIHRoZSBgVklURV9gIHByZWZpeC5cbiAgICBjb25zdCBlbnYgPSBsb2FkRW52KG1vZGUsIHByb2Nlc3MuY3dkKCksIFwiXCIpO1xuICAgIHJldHVybiB7XG4gICAgICAgIC8vIHZpdGUgY29uZmlnIGZvciBlbnYgdmFyaWFibGVzXG4gICAgICAgIGRlZmluZToge1xuICAgICAgICAgICAgX19FTUFJTEpTX1NFUlZJQ0VfSURfXzogSlNPTi5zdHJpbmdpZnkoZW52LkVNQUlMSlNfU0VSVklDRV9JRCksXG4gICAgICAgICAgICBfX0VNQUlMSlNfVEVNUExBVEVfSURfXzogSlNPTi5zdHJpbmdpZnkoZW52LkVNQUlMSlNfVEVNUExBVEVfSUQpLFxuICAgICAgICAgICAgX19FTUFJTEpTX1BVQkxJQ19LRVlfXzogSlNPTi5zdHJpbmdpZnkoZW52LkVNQUlMSlNfUFVCTElDX0tFWSksXG4gICAgICAgICAgICBfX0dPT0dMRV9NQVBTX0tFWV9fOiBKU09OLnN0cmluZ2lmeShlbnYuR09PR0xFX01BUFNfS0VZKSxcbiAgICAgICAgfSxcbiAgICAgICAgcGx1Z2luczogW3JlYWN0KCldLFxuICAgIH07XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBc1QsU0FBUyxjQUFjLGVBQWU7QUFDNVYsT0FBTyxXQUFXO0FBR2xCLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsU0FBUyxLQUFLLE1BQU07QUFHL0MsUUFBTSxNQUFNLFFBQVEsTUFBTSxRQUFRLElBQUksR0FBRyxFQUFFO0FBQzNDLFNBQU87QUFBQTtBQUFBLElBRUgsUUFBUTtBQUFBLE1BQ0osd0JBQXdCLEtBQUssVUFBVSxJQUFJLGtCQUFrQjtBQUFBLE1BQzdELHlCQUF5QixLQUFLLFVBQVUsSUFBSSxtQkFBbUI7QUFBQSxNQUMvRCx3QkFBd0IsS0FBSyxVQUFVLElBQUksa0JBQWtCO0FBQUEsTUFDN0QscUJBQXFCLEtBQUssVUFBVSxJQUFJLGVBQWU7QUFBQSxJQUMzRDtBQUFBLElBQ0EsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ3JCO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
