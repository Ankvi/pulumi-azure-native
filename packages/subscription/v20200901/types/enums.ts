export const Workload = {
    Production: "Production",
    DevTest: "DevTest",
} as const;

export type Workload = (typeof Workload)[keyof typeof Workload];
