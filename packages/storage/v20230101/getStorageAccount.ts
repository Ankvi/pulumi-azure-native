import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns the properties for the specified storage account including but not limited to name, SKU name, location, and account status. The ListKeys operation should be used to retrieve storage keys.
 */
export function getStorageAccount(args: GetStorageAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetStorageAccountResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storage/v20230101:getStorageAccount", {
        "accountName": args.accountName,
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetStorageAccountArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    accountName: string;
    /**
     * May be used to expand the properties within account's properties. By default, data is not included when fetching properties. Currently we only support geoReplicationStats and blobRestoreStatus.
     */
    expand?: string;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The storage account.
 */
export interface GetStorageAccountResult {
    /**
     * Required for storage accounts where kind = BlobStorage. The access tier is used for billing. The 'Premium' access tier is the default value for premium block blobs storage account type and it cannot be changed for the premium block blobs storage account type.
     */
    readonly accessTier: string;
    /**
     * If customer initiated account migration is in progress, the value will be true else it will be null.
     */
    readonly accountMigrationInProgress: boolean;
    /**
     * Allow or disallow public access to all blobs or containers in the storage account. The default interpretation is false for this property.
     */
    readonly allowBlobPublicAccess?: boolean;
    /**
     * Allow or disallow cross AAD tenant object replication. Set this property to true for new or existing accounts only if object replication policies will involve storage accounts in different AAD tenants. The default interpretation is false for new accounts to follow best security practices by default.
     */
    readonly allowCrossTenantReplication?: boolean;
    /**
     * Indicates whether the storage account permits requests to be authorized with the account access key via Shared Key. If false, then all requests, including shared access signatures, must be authorized with Azure Active Directory (Azure AD). The default value is null, which is equivalent to true.
     */
    readonly allowSharedKeyAccess?: boolean;
    /**
     * Restrict copy to and from Storage Accounts within an AAD tenant or with Private Links to the same VNet.
     */
    readonly allowedCopyScope?: string;
    /**
     * Provides the identity based authentication settings for Azure Files.
     */
    readonly azureFilesIdentityBasedAuthentication?: types.outputs.AzureFilesIdentityBasedAuthenticationResponse;
    /**
     * Blob restore status
     */
    readonly blobRestoreStatus: types.outputs.BlobRestoreStatusResponse;
    /**
     * Gets the creation date and time of the storage account in UTC.
     */
    readonly creationTime: string;
    /**
     * Gets the custom domain the user assigned to this storage account.
     */
    readonly customDomain: types.outputs.CustomDomainResponse;
    /**
     * A boolean flag which indicates whether the default authentication is OAuth or not. The default interpretation is false for this property.
     */
    readonly defaultToOAuthAuthentication?: boolean;
    /**
     * Allows you to specify the type of endpoint. Set this to AzureDNSZone to create a large number of accounts in a single subscription, which creates accounts in an Azure DNS Zone and the endpoint URL will have an alphanumeric DNS Zone identifier.
     */
    readonly dnsEndpointType?: string;
    /**
     * Allows https traffic only to storage service if sets to true.
     */
    readonly enableHttpsTrafficOnly?: boolean;
    /**
     * NFS 3.0 protocol support enabled if set to true.
     */
    readonly enableNfsV3?: boolean;
    /**
     * Encryption settings to be used for server-side encryption for the storage account.
     */
    readonly encryption: types.outputs.EncryptionResponse;
    /**
     * The extendedLocation of the resource.
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
    /**
     * If the failover is in progress, the value will be true, otherwise, it will be null.
     */
    readonly failoverInProgress: boolean;
    /**
     * Geo Replication Stats
     */
    readonly geoReplicationStats: types.outputs.GeoReplicationStatsResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The identity of the resource.
     */
    readonly identity?: types.outputs.IdentityResponse;
    /**
     * The property is immutable and can only be set to true at the account creation time. When set to true, it enables object level immutability for all the containers in the account by default.
     */
    readonly immutableStorageWithVersioning?: types.outputs.ImmutableStorageAccountResponse;
    /**
     * Account HierarchicalNamespace enabled if sets to true.
     */
    readonly isHnsEnabled?: boolean;
    /**
     * Enables local users feature, if set to true
     */
    readonly isLocalUserEnabled?: boolean;
    /**
     * Enables Secure File Transfer Protocol, if set to true
     */
    readonly isSftpEnabled?: boolean;
    /**
     * This property will be set to true or false on an event of ongoing migration. Default value is null.
     */
    readonly isSkuConversionBlocked: boolean;
    /**
     * Storage account keys creation time.
     */
    readonly keyCreationTime: types.outputs.KeyCreationTimeResponse;
    /**
     * KeyPolicy assigned to the storage account.
     */
    readonly keyPolicy: types.outputs.KeyPolicyResponse;
    /**
     * Gets the Kind.
     */
    readonly kind: string;
    /**
     * Allow large file shares if sets to Enabled. It cannot be disabled once it is enabled.
     */
    readonly largeFileSharesState?: string;
    /**
     * Gets the timestamp of the most recent instance of a failover to the secondary location. Only the most recent timestamp is retained. This element is not returned if there has never been a failover instance. Only available if the accountType is Standard_GRS or Standard_RAGRS.
     */
    readonly lastGeoFailoverTime: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Set the minimum TLS version to be permitted on requests to storage. The default interpretation is TLS 1.0 for this property.
     */
    readonly minimumTlsVersion?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Network rule set
     */
    readonly networkRuleSet: types.outputs.NetworkRuleSetResponse;
    /**
     * Gets the URLs that are used to perform a retrieval of a public blob, queue, or table object. Note that Standard_ZRS and Premium_LRS accounts only return the blob endpoint.
     */
    readonly primaryEndpoints: types.outputs.EndpointsResponse;
    /**
     * Gets the location of the primary data center for the storage account.
     */
    readonly primaryLocation: string;
    /**
     * List of private endpoint connection associated with the specified storage account
     */
    readonly privateEndpointConnections: types.outputs.PrivateEndpointConnectionResponse[];
    /**
     * Gets the status of the storage account at the time the operation was called.
     */
    readonly provisioningState: string;
    /**
     * Allow or disallow public network access to Storage Account. Value is optional but if passed in, must be 'Enabled' or 'Disabled'.
     */
    readonly publicNetworkAccess?: string;
    /**
     * Maintains information about the network routing choice opted by the user for data transfer
     */
    readonly routingPreference?: types.outputs.RoutingPreferenceResponse;
    /**
     * SasPolicy assigned to the storage account.
     */
    readonly sasPolicy: types.outputs.SasPolicyResponse;
    /**
     * Gets the URLs that are used to perform a retrieval of a public blob, queue, or table object from the secondary location of the storage account. Only available if the SKU name is Standard_RAGRS.
     */
    readonly secondaryEndpoints: types.outputs.EndpointsResponse;
    /**
     * Gets the location of the geo-replicated secondary for the storage account. Only available if the accountType is Standard_GRS or Standard_RAGRS.
     */
    readonly secondaryLocation: string;
    /**
     * Gets the SKU.
     */
    readonly sku: types.outputs.SkuResponse;
    /**
     * Gets the status indicating whether the primary location of the storage account is available or unavailable.
     */
    readonly statusOfPrimary: string;
    /**
     * Gets the status indicating whether the secondary location of the storage account is available or unavailable. Only available if the SKU name is Standard_GRS or Standard_RAGRS.
     */
    readonly statusOfSecondary: string;
    /**
     * This property is readOnly and is set by server during asynchronous storage account sku conversion operations.
     */
    readonly storageAccountSkuConversionStatus?: types.outputs.StorageAccountSkuConversionStatusResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Returns the properties for the specified storage account including but not limited to name, SKU name, location, and account status. The ListKeys operation should be used to retrieve storage keys.
 */
export function getStorageAccountOutput(args: GetStorageAccountOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStorageAccountResult> {
    return pulumi.output(args).apply((a: any) => getStorageAccount(a, opts))
}

export interface GetStorageAccountOutputArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    accountName: pulumi.Input<string>;
    /**
     * May be used to expand the properties within account's properties. By default, data is not included when fetching properties. Currently we only support geoReplicationStats and blobRestoreStatus.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
