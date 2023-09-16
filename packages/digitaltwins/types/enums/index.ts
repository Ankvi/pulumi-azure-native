// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

// Export sub-modules:
import * as v20201201 from "./v20201201";
import * as v20230131 from "./v20230131";

export {
    v20201201,
    v20230131,
};

export const AuthenticationType = {
    KeyBased: "KeyBased",
    IdentityBased: "IdentityBased",
} as const;

export type AuthenticationType = (typeof AuthenticationType)[keyof typeof AuthenticationType];

export const ConnectionType = {
    AzureDataExplorer: "AzureDataExplorer",
} as const;

export type ConnectionType = (typeof ConnectionType)[keyof typeof ConnectionType];

export const DigitalTwinsIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

export type DigitalTwinsIdentityType = (typeof DigitalTwinsIdentityType)[keyof typeof DigitalTwinsIdentityType];

export const EndpointType = {
    EventHub: "EventHub",
    EventGrid: "EventGrid",
    ServiceBus: "ServiceBus",
} as const;

export type EndpointType = (typeof EndpointType)[keyof typeof EndpointType];

export const IdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
} as const;

export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

export const PrivateLinkServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
    Disconnected: "Disconnected",
} as const;

export type PrivateLinkServiceConnectionStatus = (typeof PrivateLinkServiceConnectionStatus)[keyof typeof PrivateLinkServiceConnectionStatus];

export const PublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const RecordPropertyAndItemRemovals = {
    True: "true",
    False: "false",
} as const;

export type RecordPropertyAndItemRemovals = (typeof RecordPropertyAndItemRemovals)[keyof typeof RecordPropertyAndItemRemovals];
