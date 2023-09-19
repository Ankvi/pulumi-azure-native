import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { BlobContainerArgs } from "./blobContainer";
export type BlobContainer = import("./blobContainer").BlobContainer;
export const BlobContainer: typeof import("./blobContainer").BlobContainer = null as any;
utilities.lazyLoad(exports, ["BlobContainer"], () => require("./blobContainer"));

export { BlobContainerImmutabilityPolicyArgs } from "./blobContainerImmutabilityPolicy";
export type BlobContainerImmutabilityPolicy = import("./blobContainerImmutabilityPolicy").BlobContainerImmutabilityPolicy;
export const BlobContainerImmutabilityPolicy: typeof import("./blobContainerImmutabilityPolicy").BlobContainerImmutabilityPolicy = null as any;
utilities.lazyLoad(exports, ["BlobContainerImmutabilityPolicy"], () => require("./blobContainerImmutabilityPolicy"));

export { BlobInventoryPolicyArgs } from "./blobInventoryPolicy";
export type BlobInventoryPolicy = import("./blobInventoryPolicy").BlobInventoryPolicy;
export const BlobInventoryPolicy: typeof import("./blobInventoryPolicy").BlobInventoryPolicy = null as any;
utilities.lazyLoad(exports, ["BlobInventoryPolicy"], () => require("./blobInventoryPolicy"));

export { BlobServicePropertiesArgs } from "./blobServiceProperties";
export type BlobServiceProperties = import("./blobServiceProperties").BlobServiceProperties;
export const BlobServiceProperties: typeof import("./blobServiceProperties").BlobServiceProperties = null as any;
utilities.lazyLoad(exports, ["BlobServiceProperties"], () => require("./blobServiceProperties"));

export { EncryptionScopeArgs } from "./encryptionScope";
export type EncryptionScope = import("./encryptionScope").EncryptionScope;
export const EncryptionScope: typeof import("./encryptionScope").EncryptionScope = null as any;
utilities.lazyLoad(exports, ["EncryptionScope"], () => require("./encryptionScope"));

export { FileServicePropertiesArgs } from "./fileServiceProperties";
export type FileServiceProperties = import("./fileServiceProperties").FileServiceProperties;
export const FileServiceProperties: typeof import("./fileServiceProperties").FileServiceProperties = null as any;
utilities.lazyLoad(exports, ["FileServiceProperties"], () => require("./fileServiceProperties"));

export { FileShareArgs } from "./fileShare";
export type FileShare = import("./fileShare").FileShare;
export const FileShare: typeof import("./fileShare").FileShare = null as any;
utilities.lazyLoad(exports, ["FileShare"], () => require("./fileShare"));

export { GetBlobContainerArgs, GetBlobContainerResult, GetBlobContainerOutputArgs } from "./getBlobContainer";
export const getBlobContainer: typeof import("./getBlobContainer").getBlobContainer = null as any;
export const getBlobContainerOutput: typeof import("./getBlobContainer").getBlobContainerOutput = null as any;
utilities.lazyLoad(exports, ["getBlobContainer","getBlobContainerOutput"], () => require("./getBlobContainer"));

export { GetBlobContainerImmutabilityPolicyArgs, GetBlobContainerImmutabilityPolicyResult, GetBlobContainerImmutabilityPolicyOutputArgs } from "./getBlobContainerImmutabilityPolicy";
export const getBlobContainerImmutabilityPolicy: typeof import("./getBlobContainerImmutabilityPolicy").getBlobContainerImmutabilityPolicy = null as any;
export const getBlobContainerImmutabilityPolicyOutput: typeof import("./getBlobContainerImmutabilityPolicy").getBlobContainerImmutabilityPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getBlobContainerImmutabilityPolicy","getBlobContainerImmutabilityPolicyOutput"], () => require("./getBlobContainerImmutabilityPolicy"));

export { GetBlobInventoryPolicyArgs, GetBlobInventoryPolicyResult, GetBlobInventoryPolicyOutputArgs } from "./getBlobInventoryPolicy";
export const getBlobInventoryPolicy: typeof import("./getBlobInventoryPolicy").getBlobInventoryPolicy = null as any;
export const getBlobInventoryPolicyOutput: typeof import("./getBlobInventoryPolicy").getBlobInventoryPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getBlobInventoryPolicy","getBlobInventoryPolicyOutput"], () => require("./getBlobInventoryPolicy"));

export { GetBlobServicePropertiesArgs, GetBlobServicePropertiesResult, GetBlobServicePropertiesOutputArgs } from "./getBlobServiceProperties";
export const getBlobServiceProperties: typeof import("./getBlobServiceProperties").getBlobServiceProperties = null as any;
export const getBlobServicePropertiesOutput: typeof import("./getBlobServiceProperties").getBlobServicePropertiesOutput = null as any;
utilities.lazyLoad(exports, ["getBlobServiceProperties","getBlobServicePropertiesOutput"], () => require("./getBlobServiceProperties"));

export { GetEncryptionScopeArgs, GetEncryptionScopeResult, GetEncryptionScopeOutputArgs } from "./getEncryptionScope";
export const getEncryptionScope: typeof import("./getEncryptionScope").getEncryptionScope = null as any;
export const getEncryptionScopeOutput: typeof import("./getEncryptionScope").getEncryptionScopeOutput = null as any;
utilities.lazyLoad(exports, ["getEncryptionScope","getEncryptionScopeOutput"], () => require("./getEncryptionScope"));

export { GetFileServicePropertiesArgs, GetFileServicePropertiesResult, GetFileServicePropertiesOutputArgs } from "./getFileServiceProperties";
export const getFileServiceProperties: typeof import("./getFileServiceProperties").getFileServiceProperties = null as any;
export const getFileServicePropertiesOutput: typeof import("./getFileServiceProperties").getFileServicePropertiesOutput = null as any;
utilities.lazyLoad(exports, ["getFileServiceProperties","getFileServicePropertiesOutput"], () => require("./getFileServiceProperties"));

export { GetFileShareArgs, GetFileShareResult, GetFileShareOutputArgs } from "./getFileShare";
export const getFileShare: typeof import("./getFileShare").getFileShare = null as any;
export const getFileShareOutput: typeof import("./getFileShare").getFileShareOutput = null as any;
utilities.lazyLoad(exports, ["getFileShare","getFileShareOutput"], () => require("./getFileShare"));

export { GetLocalUserArgs, GetLocalUserResult, GetLocalUserOutputArgs } from "./getLocalUser";
export const getLocalUser: typeof import("./getLocalUser").getLocalUser = null as any;
export const getLocalUserOutput: typeof import("./getLocalUser").getLocalUserOutput = null as any;
utilities.lazyLoad(exports, ["getLocalUser","getLocalUserOutput"], () => require("./getLocalUser"));

export { GetManagementPolicyArgs, GetManagementPolicyResult, GetManagementPolicyOutputArgs } from "./getManagementPolicy";
export const getManagementPolicy: typeof import("./getManagementPolicy").getManagementPolicy = null as any;
export const getManagementPolicyOutput: typeof import("./getManagementPolicy").getManagementPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getManagementPolicy","getManagementPolicyOutput"], () => require("./getManagementPolicy"));

export { GetObjectReplicationPolicyArgs, GetObjectReplicationPolicyResult, GetObjectReplicationPolicyOutputArgs } from "./getObjectReplicationPolicy";
export const getObjectReplicationPolicy: typeof import("./getObjectReplicationPolicy").getObjectReplicationPolicy = null as any;
export const getObjectReplicationPolicyOutput: typeof import("./getObjectReplicationPolicy").getObjectReplicationPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getObjectReplicationPolicy","getObjectReplicationPolicyOutput"], () => require("./getObjectReplicationPolicy"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { GetQueueArgs, GetQueueResult, GetQueueOutputArgs } from "./getQueue";
export const getQueue: typeof import("./getQueue").getQueue = null as any;
export const getQueueOutput: typeof import("./getQueue").getQueueOutput = null as any;
utilities.lazyLoad(exports, ["getQueue","getQueueOutput"], () => require("./getQueue"));

export { GetQueueServicePropertiesArgs, GetQueueServicePropertiesResult, GetQueueServicePropertiesOutputArgs } from "./getQueueServiceProperties";
export const getQueueServiceProperties: typeof import("./getQueueServiceProperties").getQueueServiceProperties = null as any;
export const getQueueServicePropertiesOutput: typeof import("./getQueueServiceProperties").getQueueServicePropertiesOutput = null as any;
utilities.lazyLoad(exports, ["getQueueServiceProperties","getQueueServicePropertiesOutput"], () => require("./getQueueServiceProperties"));

export { GetStorageAccountArgs, GetStorageAccountResult, GetStorageAccountOutputArgs } from "./getStorageAccount";
export const getStorageAccount: typeof import("./getStorageAccount").getStorageAccount = null as any;
export const getStorageAccountOutput: typeof import("./getStorageAccount").getStorageAccountOutput = null as any;
utilities.lazyLoad(exports, ["getStorageAccount","getStorageAccountOutput"], () => require("./getStorageAccount"));

export { GetTableArgs, GetTableResult, GetTableOutputArgs } from "./getTable";
export const getTable: typeof import("./getTable").getTable = null as any;
export const getTableOutput: typeof import("./getTable").getTableOutput = null as any;
utilities.lazyLoad(exports, ["getTable","getTableOutput"], () => require("./getTable"));

export { GetTableServicePropertiesArgs, GetTableServicePropertiesResult, GetTableServicePropertiesOutputArgs } from "./getTableServiceProperties";
export const getTableServiceProperties: typeof import("./getTableServiceProperties").getTableServiceProperties = null as any;
export const getTableServicePropertiesOutput: typeof import("./getTableServiceProperties").getTableServicePropertiesOutput = null as any;
utilities.lazyLoad(exports, ["getTableServiceProperties","getTableServicePropertiesOutput"], () => require("./getTableServiceProperties"));

export { ListLocalUserKeysArgs, ListLocalUserKeysResult, ListLocalUserKeysOutputArgs } from "./listLocalUserKeys";
export const listLocalUserKeys: typeof import("./listLocalUserKeys").listLocalUserKeys = null as any;
export const listLocalUserKeysOutput: typeof import("./listLocalUserKeys").listLocalUserKeysOutput = null as any;
utilities.lazyLoad(exports, ["listLocalUserKeys","listLocalUserKeysOutput"], () => require("./listLocalUserKeys"));

export { ListStorageAccountKeysArgs, ListStorageAccountKeysResult, ListStorageAccountKeysOutputArgs } from "./listStorageAccountKeys";
export const listStorageAccountKeys: typeof import("./listStorageAccountKeys").listStorageAccountKeys = null as any;
export const listStorageAccountKeysOutput: typeof import("./listStorageAccountKeys").listStorageAccountKeysOutput = null as any;
utilities.lazyLoad(exports, ["listStorageAccountKeys","listStorageAccountKeysOutput"], () => require("./listStorageAccountKeys"));

export { ListStorageAccountSASArgs, ListStorageAccountSASResult, ListStorageAccountSASOutputArgs } from "./listStorageAccountSAS";
export const listStorageAccountSAS: typeof import("./listStorageAccountSAS").listStorageAccountSAS = null as any;
export const listStorageAccountSASOutput: typeof import("./listStorageAccountSAS").listStorageAccountSASOutput = null as any;
utilities.lazyLoad(exports, ["listStorageAccountSAS","listStorageAccountSASOutput"], () => require("./listStorageAccountSAS"));

export { ListStorageAccountServiceSASArgs, ListStorageAccountServiceSASResult, ListStorageAccountServiceSASOutputArgs } from "./listStorageAccountServiceSAS";
export const listStorageAccountServiceSAS: typeof import("./listStorageAccountServiceSAS").listStorageAccountServiceSAS = null as any;
export const listStorageAccountServiceSASOutput: typeof import("./listStorageAccountServiceSAS").listStorageAccountServiceSASOutput = null as any;
utilities.lazyLoad(exports, ["listStorageAccountServiceSAS","listStorageAccountServiceSASOutput"], () => require("./listStorageAccountServiceSAS"));

export { LocalUserArgs } from "./localUser";
export type LocalUser = import("./localUser").LocalUser;
export const LocalUser: typeof import("./localUser").LocalUser = null as any;
utilities.lazyLoad(exports, ["LocalUser"], () => require("./localUser"));

export { ManagementPolicyArgs } from "./managementPolicy";
export type ManagementPolicy = import("./managementPolicy").ManagementPolicy;
export const ManagementPolicy: typeof import("./managementPolicy").ManagementPolicy = null as any;
utilities.lazyLoad(exports, ["ManagementPolicy"], () => require("./managementPolicy"));

export { ObjectReplicationPolicyArgs } from "./objectReplicationPolicy";
export type ObjectReplicationPolicy = import("./objectReplicationPolicy").ObjectReplicationPolicy;
export const ObjectReplicationPolicy: typeof import("./objectReplicationPolicy").ObjectReplicationPolicy = null as any;
utilities.lazyLoad(exports, ["ObjectReplicationPolicy"], () => require("./objectReplicationPolicy"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));

export { QueueArgs } from "./queue";
export type Queue = import("./queue").Queue;
export const Queue: typeof import("./queue").Queue = null as any;
utilities.lazyLoad(exports, ["Queue"], () => require("./queue"));

export { QueueServicePropertiesArgs } from "./queueServiceProperties";
export type QueueServiceProperties = import("./queueServiceProperties").QueueServiceProperties;
export const QueueServiceProperties: typeof import("./queueServiceProperties").QueueServiceProperties = null as any;
utilities.lazyLoad(exports, ["QueueServiceProperties"], () => require("./queueServiceProperties"));

export { StorageAccountArgs } from "./storageAccount";
export type StorageAccount = import("./storageAccount").StorageAccount;
export const StorageAccount: typeof import("./storageAccount").StorageAccount = null as any;
utilities.lazyLoad(exports, ["StorageAccount"], () => require("./storageAccount"));

export { TableArgs } from "./table";
export type Table = import("./table").Table;
export const Table: typeof import("./table").Table = null as any;
utilities.lazyLoad(exports, ["Table"], () => require("./table"));

export { TableServicePropertiesArgs } from "./tableServiceProperties";
export type TableServiceProperties = import("./tableServiceProperties").TableServiceProperties;
export const TableServiceProperties: typeof import("./tableServiceProperties").TableServiceProperties = null as any;
utilities.lazyLoad(exports, ["TableServiceProperties"], () => require("./tableServiceProperties"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:storage/v20220901:BlobContainer":
                return new BlobContainer(name, <any>undefined, { urn })
            case "azure-native:storage/v20220901:BlobContainerImmutabilityPolicy":
                return new BlobContainerImmutabilityPolicy(name, <any>undefined, { urn })
            case "azure-native:storage/v20220901:BlobInventoryPolicy":
                return new BlobInventoryPolicy(name, <any>undefined, { urn })
            case "azure-native:storage/v20220901:BlobServiceProperties":
                return new BlobServiceProperties(name, <any>undefined, { urn })
            case "azure-native:storage/v20220901:EncryptionScope":
                return new EncryptionScope(name, <any>undefined, { urn })
            case "azure-native:storage/v20220901:FileServiceProperties":
                return new FileServiceProperties(name, <any>undefined, { urn })
            case "azure-native:storage/v20220901:FileShare":
                return new FileShare(name, <any>undefined, { urn })
            case "azure-native:storage/v20220901:LocalUser":
                return new LocalUser(name, <any>undefined, { urn })
            case "azure-native:storage/v20220901:ManagementPolicy":
                return new ManagementPolicy(name, <any>undefined, { urn })
            case "azure-native:storage/v20220901:ObjectReplicationPolicy":
                return new ObjectReplicationPolicy(name, <any>undefined, { urn })
            case "azure-native:storage/v20220901:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:storage/v20220901:Queue":
                return new Queue(name, <any>undefined, { urn })
            case "azure-native:storage/v20220901:QueueServiceProperties":
                return new QueueServiceProperties(name, <any>undefined, { urn })
            case "azure-native:storage/v20220901:StorageAccount":
                return new StorageAccount(name, <any>undefined, { urn })
            case "azure-native:storage/v20220901:Table":
                return new Table(name, <any>undefined, { urn })
            case "azure-native:storage/v20220901:TableServiceProperties":
                return new TableServiceProperties(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "storage/v20220901", _module)
