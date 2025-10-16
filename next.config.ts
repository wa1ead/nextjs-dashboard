import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Disabled cacheComponents due to compatibility issues with current app structure
  // Re-enable when the feature is more stable or after refactoring components
  experimental: {
    // cacheComponents: true,
  } as any,
};

export default nextConfig;
