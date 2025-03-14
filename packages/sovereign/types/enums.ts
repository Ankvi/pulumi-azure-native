export const FirewallCreationOptions = {
    /**
     * Select 'None' value to skip Firewall deployment.
     */
    None: "None",
    /**
     * Select 'Standard' value to deploy the Firewall Standard SKU.
     */
    Standard: "Standard",
    /**
     * Select 'Premium' value to deploy the Firewall Premium SKU.
     */
    Premium: "Premium",
} as const;

/**
 * Parameter used for deploying a Firewall: Select 'No' to skip deployment, 'Standard' to deploy the Standard SKU, or 'Premium' to deploy the Premium SKU.
 */
export type FirewallCreationOptions = (typeof FirewallCreationOptions)[keyof typeof FirewallCreationOptions];

export const ManagedIdentityResourceType = {
    /**
     * System assigned managed identity.
     */
    SystemAssigned: "SystemAssigned",
    /**
     * User assigned managed identity.
     */
    UserAssigned: "UserAssigned",
} as const;

/**
 * The type of managed identity.
 */
export type ManagedIdentityResourceType = (typeof ManagedIdentityResourceType)[keyof typeof ManagedIdentityResourceType];

export const ManagedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

/**
 * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
 */
export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const ResourceCreationOptions = {
    /**
     * Value to create a new resource.
     */
    Yes: "Yes",
    /**
     * Value to not create a new resource.
     */
    No: "No",
    /**
     * Value to use an existing resource.
     */
    UseExisting: "UseExisting",
} as const;

/**
 * Parameter used to deploy a log analytics workspace: Select 'Yes' to enable deployment, 'No' to skip it, or 'Existing' to reuse an existing log analytics workspace.
 */
export type ResourceCreationOptions = (typeof ResourceCreationOptions)[keyof typeof ResourceCreationOptions];

export const ResourceType = {
    /**
     * Value when customer wants to provide a custom naming convention for Azure Firewall.
     */
    AzureFirewalls: "azureFirewalls",
    /**
     * Value when customer wants to provide a custom naming convention for Log Analytics workspace.
     */
    Workspaces: "workspaces",
    /**
     * Value when customer wants to provide a custom naming convention for automation account.
     */
    AutomationAccounts: "automationAccounts",
    /**
     * Value when customer wants to provide a custom naming convention for dashboard.
     */
    Dashboards: "dashboards",
    /**
     * Value when customer wants to provide a custom naming convention for managed identity.
     */
    UserAssignedIdentities: "userAssignedIdentities",
    /**
     * Value when customer wants to provide a custom naming convention for Bastion.
     */
    BastionHosts: "bastionHosts",
    /**
     * Value when customer wants to provide a custom naming convention for DDoS protection plan.
     */
    DdosProtectionPlans: "ddosProtectionPlans",
    /**
     * Value when customer wants to provide a custom naming convention for Bastion NSG.
     */
    NetworkSecurityGroups: "networkSecurityGroups",
    /**
     * Value when customer wants to provide a custom naming convention for virtual network.
     */
    VirtualNetworks: "virtualNetworks",
    /**
     * Value when customer wants to provide a custom naming convention for route table.
     */
    RouteTables: "routeTables",
} as const;

/**
 * The type of the resource.
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];
