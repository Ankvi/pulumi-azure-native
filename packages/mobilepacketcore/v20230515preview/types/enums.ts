export const NetworkFunctionAdministrativeState = {
    /**
     * Resource has been commissioned
     */
    Commissioned: "Commissioned",
    /**
     * Resource has been decommissioned
     */
    Decommissioned: "Decommissioned",
} as const;

export type NetworkFunctionAdministrativeState = (typeof NetworkFunctionAdministrativeState)[keyof typeof NetworkFunctionAdministrativeState];

export const NetworkFunctionType = {
    /**
     * Access and Mobility Function
     */
    AMF: "AMF",
    /**
     * Session Management Function
     */
    SMF: "SMF",
    /**
     * User Plane Function
     */
    UPF: "UPF",
    /**
     * Network Repository Function
     */
    NRF: "NRF",
    /**
     * Network Slice Selection Function
     */
    NSSF: "NSSF",
    /**
     * Mobility Management Entity
     */
    MME: "MME",
    /**
     * System Architecture Evolution Gateway Control Plane, control and user plane separation (CUPS) architecture
     */
    SaegwControlPlane: "SaegwControlPlane",
    /**
     * System Architecture Evolution Gateway User Plane, control and user plane separation (CUPS) architecture
     */
    SaegwUserPlane: "SaegwUserPlane",
    /**
     * System Architecture Evolution Gateway.  This combines the Serving Gateway (SGW) and the Packet Data Network Gateway (PGW) functionality
     */
    Saegw: "Saegw",
    /**
     * Evolved Packet Data Gateway
     */
    EPDG: "ePDG",
    /**
     * Non-3GPP Interworking Function
     */
    N3IWF: "N3IWF",
    /**
     * Remote Platform As A Service Components
     */
    RemotePaaS: "RemotePaaS",
    /**
     * Element Management System
     */
    EMS: "EMS",
    /**
     * Operations and Policy Manager
     */
    OperationsPolicyManager: "OperationsPolicyManager",
} as const;

export type NetworkFunctionType = (typeof NetworkFunctionType)[keyof typeof NetworkFunctionType];

export const SkuDefinitions = {
    /**
     * Azure Lab SKU
     */
    AzureLab: "AzureLab",
    /**
     * Azure Production SKU
     */
    AzureProduction: "AzureProduction",
    /**
     * Nexus Lab SKU
     */
    NexusLab: "NexusLab",
    /**
     * Nexus Production SKU
     */
    NexusProduction: "NexusProduction",
} as const;

export type SkuDefinitions = (typeof SkuDefinitions)[keyof typeof SkuDefinitions];
