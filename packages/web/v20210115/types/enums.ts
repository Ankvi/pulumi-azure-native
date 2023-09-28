export const LoadBalancingMode = {
    None: "None",
    Web: "Web",
    Publishing: "Publishing",
    Web_Publishing: "Web, Publishing",
} as const;

/**
 * Specifies which endpoints to serve internally in the Virtual Network for the App Service Environment.
 */
export type LoadBalancingMode = (typeof LoadBalancingMode)[keyof typeof LoadBalancingMode];
