export const AzureSkuName = {
    Standard_DS13_v2_1TB_PS: "Standard_DS13_v2+1TB_PS",
    Standard_DS13_v2_2TB_PS: "Standard_DS13_v2+2TB_PS",
    Standard_DS14_v2_3TB_PS: "Standard_DS14_v2+3TB_PS",
    Standard_DS14_v2_4TB_PS: "Standard_DS14_v2+4TB_PS",
    Standard_D13_v2: "Standard_D13_v2",
    Standard_D14_v2: "Standard_D14_v2",
    Standard_L8s: "Standard_L8s",
    Standard_L16s: "Standard_L16s",
    Standard_L8s_v2: "Standard_L8s_v2",
    Standard_L16s_v2: "Standard_L16s_v2",
    Standard_D11_v2: "Standard_D11_v2",
    Standard_D12_v2: "Standard_D12_v2",
    Standard_L4s: "Standard_L4s",
    Dev_No_SLA_Standard_D11_v2: "Dev(No SLA)_Standard_D11_v2",
    Standard_E64i_v3: "Standard_E64i_v3",
    Standard_E80ids_v4: "Standard_E80ids_v4",
    Standard_E2a_v4: "Standard_E2a_v4",
    Standard_E4a_v4: "Standard_E4a_v4",
    Standard_E8a_v4: "Standard_E8a_v4",
    Standard_E16a_v4: "Standard_E16a_v4",
    Standard_E8as_v4_1TB_PS: "Standard_E8as_v4+1TB_PS",
    Standard_E8as_v4_2TB_PS: "Standard_E8as_v4+2TB_PS",
    Standard_E16as_v4_3TB_PS: "Standard_E16as_v4+3TB_PS",
    Standard_E16as_v4_4TB_PS: "Standard_E16as_v4+4TB_PS",
    Dev_No_SLA_Standard_E2a_v4: "Dev(No SLA)_Standard_E2a_v4",
} as const;

/**
 * SKU name.
 */
export type AzureSkuName = (typeof AzureSkuName)[keyof typeof AzureSkuName];

export const AzureSkuTier = {
    Basic: "Basic",
    Standard: "Standard",
} as const;

/**
 * SKU tier.
 */
export type AzureSkuTier = (typeof AzureSkuTier)[keyof typeof AzureSkuTier];

export const DatabasePrincipalRole = {
    Admin: "Admin",
    Ingestor: "Ingestor",
    Monitor: "Monitor",
    User: "User",
    UnrestrictedViewer: "UnrestrictedViewer",
    Viewer: "Viewer",
} as const;

/**
 * Database principal role.
 */
export type DatabasePrincipalRole = (typeof DatabasePrincipalRole)[keyof typeof DatabasePrincipalRole];

export const EngineType = {
    V2: "V2",
    V3: "V3",
} as const;

/**
 * The engine type
 */
export type EngineType = (typeof EngineType)[keyof typeof EngineType];

export const PrincipalType = {
    App: "App",
    Group: "Group",
    User: "User",
} as const;

/**
 * Principal type.
 */
export type PrincipalType = (typeof PrincipalType)[keyof typeof PrincipalType];
