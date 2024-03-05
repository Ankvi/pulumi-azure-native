export const RefillPolicy = {
    /**
     * A refill policy that standby pool is automatically refilled to maintain maxReadyCapacity.
     */
    Always: "always",
} as const;

/**
 * Specifies refill policy of the pool.
 */
export type RefillPolicy = (typeof RefillPolicy)[keyof typeof RefillPolicy];

export const VirtualMachineState = {
    /**
     * The virtual machine is up and running.
     */
    Running: "Running",
    /**
     * The virtual machine has released the lease on the underlying hardware and is powered off.
     */
    Deallocated: "Deallocated",
} as const;

/**
 * Specifies the desired state of virtual machines in the pool.
 */
export type VirtualMachineState = (typeof VirtualMachineState)[keyof typeof VirtualMachineState];
