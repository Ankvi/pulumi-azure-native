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

export const Region = {
    /**
     * Region: East US
     */
    Eastus: "eastus",
    /**
     * Region: Central US
     */
    Centralus: "centralus",
    /**
     * Region: West US
     */
    Westus: "westus",
    /**
     * Region: West Europe
     */
    Westeurope: "westeurope",
    /**
     * Region: Japan East
     */
    Japaneast: "japaneast",
    /**
     * Region: Korea Central
     */
    Koreacentral: "koreacentral",
} as const;

/**
 * The region of the instance
 */
export type Region = (typeof Region)[keyof typeof Region];

export const SingleSignOnStates = {
    /**
     * Initial state of the SSO resource
     */
    Initial: "Initial",
    /**
     * State of the SSO resource when it is enabled
     */
    Enable: "Enable",
    /**
     * State of the SSO resource when it is disabled
     */
    Disable: "Disable",
} as const;

/**
 * State of the Single Sign On for the resource
 */
export type SingleSignOnStates = (typeof SingleSignOnStates)[keyof typeof SingleSignOnStates];

export const SingleSignOnType = {
    /**
     * Security Assertion Markup Language (SAML) based Single Sign-On
     */
    Saml: "Saml",
    /**
     * OpenID Connect based Single Sign-On.
     */
    OpenId: "OpenId",
} as const;

/**
 * Type of Single Sign-On mechanism being used
 */
export type SingleSignOnType = (typeof SingleSignOnType)[keyof typeof SingleSignOnType];
