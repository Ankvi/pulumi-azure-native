export const LoadBalancingMode = {
    None: "None",
    Web: "Web",
    Publishing: "Publishing",
    Web_Publishing: "Web, Publishing",
} as const;

export type LoadBalancingMode = (typeof LoadBalancingMode)[keyof typeof LoadBalancingMode];
