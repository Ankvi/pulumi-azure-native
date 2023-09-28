export const Workload = {
    Production: "Production",
    DevTest: "DevTest",
} as const;

/**
 * The workload type of the subscription. It can be either Production or DevTest.
 */
export type Workload = (typeof Workload)[keyof typeof Workload];
