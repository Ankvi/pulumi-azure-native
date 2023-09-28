export const HybridLicenseType = {
    None: "None",
    AzureHybridBenefit: "AzureHybridBenefit",
} as const;

/**
 * Specifies that the image or disk that is being used was licensed on-premises. <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-hybrid-use-benefit-licensing?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json)
 */
export type HybridLicenseType = (typeof HybridLicenseType)[keyof typeof HybridLicenseType];

export const ManagedIdentityType = {
    None: "None",
    UserAssigned: "UserAssigned",
    SystemAssigned: "SystemAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

/**
 * The identity type
 */
export type ManagedIdentityType = (typeof ManagedIdentityType)[keyof typeof ManagedIdentityType];
