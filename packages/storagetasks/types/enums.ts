export const ManagedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const OnFailure = {
    Break: "break",
} as const;

export type OnFailure = (typeof OnFailure)[keyof typeof OnFailure];

export const OnSuccess = {
    Continue: "continue",
} as const;

export type OnSuccess = (typeof OnSuccess)[keyof typeof OnSuccess];

export const StorageTaskOperationName = {
    SetBlobTier: "SetBlobTier",
    SetBlobTags: "SetBlobTags",
    SetBlobImmutabilityPolicy: "SetBlobImmutabilityPolicy",
    SetBlobLegalHold: "SetBlobLegalHold",
    SetBlobExpiry: "SetBlobExpiry",
    DeleteBlob: "DeleteBlob",
    UndeleteBlob: "UndeleteBlob",
} as const;

export type StorageTaskOperationName = (typeof StorageTaskOperationName)[keyof typeof StorageTaskOperationName];
