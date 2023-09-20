export const AuthenticationMethod = {
    None: "None",
    Cassandra: "Cassandra",
} as const;

export type AuthenticationMethod = (typeof AuthenticationMethod)[keyof typeof AuthenticationMethod];

export const ManagedCassandraProvisioningState = {
    Creating: "Creating",
    Updating: "Updating",
    Deleting: "Deleting",
    Succeeded: "Succeeded",
    Failed: "Failed",
    Canceled: "Canceled",
} as const;

export type ManagedCassandraProvisioningState = (typeof ManagedCassandraProvisioningState)[keyof typeof ManagedCassandraProvisioningState];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
    None: "None",
} as const;

export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];