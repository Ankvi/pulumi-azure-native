import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The storage account.
 */
export class StorageAccount extends pulumi.CustomResource {
    /**
     * Get an existing StorageAccount resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): StorageAccount {
        return new StorageAccount(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:storage/v20230101:StorageAccount';

    /**
     * Returns true if the given object is an instance of StorageAccount.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StorageAccount {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StorageAccount.__pulumiType;
    }

    /**
     * Required for storage accounts where kind = BlobStorage. The access tier is used for billing. The 'Premium' access tier is the default value for premium block blobs storage account type and it cannot be changed for the premium block blobs storage account type.
     */
    public readonly accessTier!: pulumi.Output<string>;
    /**
     * If customer initiated account migration is in progress, the value will be true else it will be null.
     */
    public /*out*/ readonly accountMigrationInProgress!: pulumi.Output<boolean>;
    /**
     * Allow or disallow public access to all blobs or containers in the storage account. The default interpretation is false for this property.
     */
    public readonly allowBlobPublicAccess!: pulumi.Output<boolean | undefined>;
    /**
     * Allow or disallow cross AAD tenant object replication. Set this property to true for new or existing accounts only if object replication policies will involve storage accounts in different AAD tenants. The default interpretation is false for new accounts to follow best security practices by default.
     */
    public readonly allowCrossTenantReplication!: pulumi.Output<boolean | undefined>;
    /**
     * Indicates whether the storage account permits requests to be authorized with the account access key via Shared Key. If false, then all requests, including shared access signatures, must be authorized with Azure Active Directory (Azure AD). The default value is null, which is equivalent to true.
     */
    public readonly allowSharedKeyAccess!: pulumi.Output<boolean | undefined>;
    /**
     * Restrict copy to and from Storage Accounts within an AAD tenant or with Private Links to the same VNet.
     */
    public readonly allowedCopyScope!: pulumi.Output<string | undefined>;
    /**
     * Provides the identity based authentication settings for Azure Files.
     */
    public readonly azureFilesIdentityBasedAuthentication!: pulumi.Output<types.outputs.AzureFilesIdentityBasedAuthenticationResponse | undefined>;
    /**
     * Blob restore status
     */
    public /*out*/ readonly blobRestoreStatus!: pulumi.Output<types.outputs.BlobRestoreStatusResponse>;
    /**
     * Gets the creation date and time of the storage account in UTC.
     */
    public /*out*/ readonly creationTime!: pulumi.Output<string>;
    /**
     * Gets the custom domain the user assigned to this storage account.
     */
    public readonly customDomain!: pulumi.Output<types.outputs.CustomDomainResponse>;
    /**
     * A boolean flag which indicates whether the default authentication is OAuth or not. The default interpretation is false for this property.
     */
    public readonly defaultToOAuthAuthentication!: pulumi.Output<boolean | undefined>;
    /**
     * Allows you to specify the type of endpoint. Set this to AzureDNSZone to create a large number of accounts in a single subscription, which creates accounts in an Azure DNS Zone and the endpoint URL will have an alphanumeric DNS Zone identifier.
     */
    public readonly dnsEndpointType!: pulumi.Output<string | undefined>;
    /**
     * Allows https traffic only to storage service if sets to true.
     */
    public readonly enableHttpsTrafficOnly!: pulumi.Output<boolean | undefined>;
    /**
     * NFS 3.0 protocol support enabled if set to true.
     */
    public readonly enableNfsV3!: pulumi.Output<boolean | undefined>;
    /**
     * Encryption settings to be used for server-side encryption for the storage account.
     */
    public readonly encryption!: pulumi.Output<types.outputs.EncryptionResponse>;
    /**
     * The extendedLocation of the resource.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse | undefined>;
    /**
     * If the failover is in progress, the value will be true, otherwise, it will be null.
     */
    public /*out*/ readonly failoverInProgress!: pulumi.Output<boolean>;
    /**
     * Geo Replication Stats
     */
    public /*out*/ readonly geoReplicationStats!: pulumi.Output<types.outputs.GeoReplicationStatsResponse>;
    /**
     * The identity of the resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.IdentityResponse | undefined>;
    /**
     * The property is immutable and can only be set to true at the account creation time. When set to true, it enables object level immutability for all the containers in the account by default.
     */
    public readonly immutableStorageWithVersioning!: pulumi.Output<types.outputs.ImmutableStorageAccountResponse | undefined>;
    /**
     * Account HierarchicalNamespace enabled if sets to true.
     */
    public readonly isHnsEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * Enables local users feature, if set to true
     */
    public readonly isLocalUserEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * Enables Secure File Transfer Protocol, if set to true
     */
    public readonly isSftpEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * This property will be set to true or false on an event of ongoing migration. Default value is null.
     */
    public /*out*/ readonly isSkuConversionBlocked!: pulumi.Output<boolean>;
    /**
     * Storage account keys creation time.
     */
    public /*out*/ readonly keyCreationTime!: pulumi.Output<types.outputs.KeyCreationTimeResponse>;
    /**
     * KeyPolicy assigned to the storage account.
     */
    public readonly keyPolicy!: pulumi.Output<types.outputs.KeyPolicyResponse>;
    /**
     * Gets the Kind.
     */
    public readonly kind!: pulumi.Output<string>;
    /**
     * Allow large file shares if sets to Enabled. It cannot be disabled once it is enabled.
     */
    public readonly largeFileSharesState!: pulumi.Output<string | undefined>;
    /**
     * Gets the timestamp of the most recent instance of a failover to the secondary location. Only the most recent timestamp is retained. This element is not returned if there has never been a failover instance. Only available if the accountType is Standard_GRS or Standard_RAGRS.
     */
    public /*out*/ readonly lastGeoFailoverTime!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Set the minimum TLS version to be permitted on requests to storage. The default interpretation is TLS 1.0 for this property.
     */
    public readonly minimumTlsVersion!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Network rule set
     */
    public readonly networkRuleSet!: pulumi.Output<types.outputs.NetworkRuleSetResponse>;
    /**
     * Gets the URLs that are used to perform a retrieval of a public blob, queue, or table object. Note that Standard_ZRS and Premium_LRS accounts only return the blob endpoint.
     */
    public /*out*/ readonly primaryEndpoints!: pulumi.Output<types.outputs.EndpointsResponse>;
    /**
     * Gets the location of the primary data center for the storage account.
     */
    public /*out*/ readonly primaryLocation!: pulumi.Output<string>;
    /**
     * List of private endpoint connection associated with the specified storage account
     */
    public /*out*/ readonly privateEndpointConnections!: pulumi.Output<types.outputs.PrivateEndpointConnectionResponse[]>;
    /**
     * Gets the status of the storage account at the time the operation was called.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Allow or disallow public network access to Storage Account. Value is optional but if passed in, must be 'Enabled' or 'Disabled'.
     */
    public readonly publicNetworkAccess!: pulumi.Output<string | undefined>;
    /**
     * Maintains information about the network routing choice opted by the user for data transfer
     */
    public readonly routingPreference!: pulumi.Output<types.outputs.RoutingPreferenceResponse | undefined>;
    /**
     * SasPolicy assigned to the storage account.
     */
    public readonly sasPolicy!: pulumi.Output<types.outputs.SasPolicyResponse>;
    /**
     * Gets the URLs that are used to perform a retrieval of a public blob, queue, or table object from the secondary location of the storage account. Only available if the SKU name is Standard_RAGRS.
     */
    public /*out*/ readonly secondaryEndpoints!: pulumi.Output<types.outputs.EndpointsResponse>;
    /**
     * Gets the location of the geo-replicated secondary for the storage account. Only available if the accountType is Standard_GRS or Standard_RAGRS.
     */
    public /*out*/ readonly secondaryLocation!: pulumi.Output<string>;
    /**
     * Gets the SKU.
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse>;
    /**
     * Gets the status indicating whether the primary location of the storage account is available or unavailable.
     */
    public /*out*/ readonly statusOfPrimary!: pulumi.Output<string>;
    /**
     * Gets the status indicating whether the secondary location of the storage account is available or unavailable. Only available if the SKU name is Standard_GRS or Standard_RAGRS.
     */
    public /*out*/ readonly statusOfSecondary!: pulumi.Output<string>;
    /**
     * This property is readOnly and is set by server during asynchronous storage account sku conversion operations.
     */
    public /*out*/ readonly storageAccountSkuConversionStatus!: pulumi.Output<types.outputs.StorageAccountSkuConversionStatusResponse | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a StorageAccount resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StorageAccountArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sku === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sku'");
            }
            resourceInputs["accessTier"] = args ? args.accessTier : undefined;
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["allowBlobPublicAccess"] = args ? args.allowBlobPublicAccess : undefined;
            resourceInputs["allowCrossTenantReplication"] = args ? args.allowCrossTenantReplication : undefined;
            resourceInputs["allowSharedKeyAccess"] = args ? args.allowSharedKeyAccess : undefined;
            resourceInputs["allowedCopyScope"] = args ? args.allowedCopyScope : undefined;
            resourceInputs["azureFilesIdentityBasedAuthentication"] = args ? args.azureFilesIdentityBasedAuthentication : undefined;
            resourceInputs["customDomain"] = args ? args.customDomain : undefined;
            resourceInputs["defaultToOAuthAuthentication"] = args ? args.defaultToOAuthAuthentication : undefined;
            resourceInputs["dnsEndpointType"] = args ? args.dnsEndpointType : undefined;
            resourceInputs["enableHttpsTrafficOnly"] = args ? args.enableHttpsTrafficOnly : undefined;
            resourceInputs["enableNfsV3"] = args ? args.enableNfsV3 : undefined;
            resourceInputs["encryption"] = args ? (args.encryption ? pulumi.output(args.encryption).apply(types.inputs.encryptionArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["immutableStorageWithVersioning"] = args ? args.immutableStorageWithVersioning : undefined;
            resourceInputs["isHnsEnabled"] = args ? args.isHnsEnabled : undefined;
            resourceInputs["isLocalUserEnabled"] = args ? args.isLocalUserEnabled : undefined;
            resourceInputs["isSftpEnabled"] = args ? args.isSftpEnabled : undefined;
            resourceInputs["keyPolicy"] = args ? args.keyPolicy : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["largeFileSharesState"] = args ? args.largeFileSharesState : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["minimumTlsVersion"] = args ? args.minimumTlsVersion : undefined;
            resourceInputs["networkRuleSet"] = args ? (args.networkRuleSet ? pulumi.output(args.networkRuleSet).apply(types.inputs.networkRuleSetArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["publicNetworkAccess"] = args ? args.publicNetworkAccess : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["routingPreference"] = args ? args.routingPreference : undefined;
            resourceInputs["sasPolicy"] = args ? (args.sasPolicy ? pulumi.output(args.sasPolicy).apply(types.inputs.sasPolicyArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["accountMigrationInProgress"] = undefined /*out*/;
            resourceInputs["blobRestoreStatus"] = undefined /*out*/;
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["failoverInProgress"] = undefined /*out*/;
            resourceInputs["geoReplicationStats"] = undefined /*out*/;
            resourceInputs["isSkuConversionBlocked"] = undefined /*out*/;
            resourceInputs["keyCreationTime"] = undefined /*out*/;
            resourceInputs["lastGeoFailoverTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["primaryEndpoints"] = undefined /*out*/;
            resourceInputs["primaryLocation"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["secondaryEndpoints"] = undefined /*out*/;
            resourceInputs["secondaryLocation"] = undefined /*out*/;
            resourceInputs["statusOfPrimary"] = undefined /*out*/;
            resourceInputs["statusOfSecondary"] = undefined /*out*/;
            resourceInputs["storageAccountSkuConversionStatus"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["accessTier"] = undefined /*out*/;
            resourceInputs["accountMigrationInProgress"] = undefined /*out*/;
            resourceInputs["allowBlobPublicAccess"] = undefined /*out*/;
            resourceInputs["allowCrossTenantReplication"] = undefined /*out*/;
            resourceInputs["allowSharedKeyAccess"] = undefined /*out*/;
            resourceInputs["allowedCopyScope"] = undefined /*out*/;
            resourceInputs["azureFilesIdentityBasedAuthentication"] = undefined /*out*/;
            resourceInputs["blobRestoreStatus"] = undefined /*out*/;
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["customDomain"] = undefined /*out*/;
            resourceInputs["defaultToOAuthAuthentication"] = undefined /*out*/;
            resourceInputs["dnsEndpointType"] = undefined /*out*/;
            resourceInputs["enableHttpsTrafficOnly"] = undefined /*out*/;
            resourceInputs["enableNfsV3"] = undefined /*out*/;
            resourceInputs["encryption"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["failoverInProgress"] = undefined /*out*/;
            resourceInputs["geoReplicationStats"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["immutableStorageWithVersioning"] = undefined /*out*/;
            resourceInputs["isHnsEnabled"] = undefined /*out*/;
            resourceInputs["isLocalUserEnabled"] = undefined /*out*/;
            resourceInputs["isSftpEnabled"] = undefined /*out*/;
            resourceInputs["isSkuConversionBlocked"] = undefined /*out*/;
            resourceInputs["keyCreationTime"] = undefined /*out*/;
            resourceInputs["keyPolicy"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["largeFileSharesState"] = undefined /*out*/;
            resourceInputs["lastGeoFailoverTime"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["minimumTlsVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkRuleSet"] = undefined /*out*/;
            resourceInputs["primaryEndpoints"] = undefined /*out*/;
            resourceInputs["primaryLocation"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicNetworkAccess"] = undefined /*out*/;
            resourceInputs["routingPreference"] = undefined /*out*/;
            resourceInputs["sasPolicy"] = undefined /*out*/;
            resourceInputs["secondaryEndpoints"] = undefined /*out*/;
            resourceInputs["secondaryLocation"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["statusOfPrimary"] = undefined /*out*/;
            resourceInputs["statusOfSecondary"] = undefined /*out*/;
            resourceInputs["storageAccountSkuConversionStatus"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:storage:StorageAccount" }, { type: "azure-native:storage/v20150501preview:StorageAccount" }, { type: "azure-native:storage/v20150615:StorageAccount" }, { type: "azure-native:storage/v20160101:StorageAccount" }, { type: "azure-native:storage/v20160501:StorageAccount" }, { type: "azure-native:storage/v20161201:StorageAccount" }, { type: "azure-native:storage/v20170601:StorageAccount" }, { type: "azure-native:storage/v20171001:StorageAccount" }, { type: "azure-native:storage/v20180201:StorageAccount" }, { type: "azure-native:storage/v20180301preview:StorageAccount" }, { type: "azure-native:storage/v20180701:StorageAccount" }, { type: "azure-native:storage/v20181101:StorageAccount" }, { type: "azure-native:storage/v20190401:StorageAccount" }, { type: "azure-native:storage/v20190601:StorageAccount" }, { type: "azure-native:storage/v20200801preview:StorageAccount" }, { type: "azure-native:storage/v20210101:StorageAccount" }, { type: "azure-native:storage/v20210201:StorageAccount" }, { type: "azure-native:storage/v20210401:StorageAccount" }, { type: "azure-native:storage/v20210601:StorageAccount" }, { type: "azure-native:storage/v20210801:StorageAccount" }, { type: "azure-native:storage/v20210901:StorageAccount" }, { type: "azure-native:storage/v20220501:StorageAccount" }, { type: "azure-native:storage/v20220901:StorageAccount" }, { type: "azure-native:storage/v20230401:StorageAccount" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(StorageAccount.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a StorageAccount resource.
 */
export interface StorageAccountArgs {
    /**
     * Required for storage accounts where kind = BlobStorage. The access tier is used for billing. The 'Premium' access tier is the default value for premium block blobs storage account type and it cannot be changed for the premium block blobs storage account type.
     */
    accessTier?: pulumi.Input<types.enums.AccessTier>;
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    accountName?: pulumi.Input<string>;
    /**
     * Allow or disallow public access to all blobs or containers in the storage account. The default interpretation is false for this property.
     */
    allowBlobPublicAccess?: pulumi.Input<boolean>;
    /**
     * Allow or disallow cross AAD tenant object replication. Set this property to true for new or existing accounts only if object replication policies will involve storage accounts in different AAD tenants. The default interpretation is false for new accounts to follow best security practices by default.
     */
    allowCrossTenantReplication?: pulumi.Input<boolean>;
    /**
     * Indicates whether the storage account permits requests to be authorized with the account access key via Shared Key. If false, then all requests, including shared access signatures, must be authorized with Azure Active Directory (Azure AD). The default value is null, which is equivalent to true.
     */
    allowSharedKeyAccess?: pulumi.Input<boolean>;
    /**
     * Restrict copy to and from Storage Accounts within an AAD tenant or with Private Links to the same VNet.
     */
    allowedCopyScope?: pulumi.Input<string | types.enums.AllowedCopyScope>;
    /**
     * Provides the identity based authentication settings for Azure Files.
     */
    azureFilesIdentityBasedAuthentication?: pulumi.Input<types.inputs.AzureFilesIdentityBasedAuthenticationArgs>;
    /**
     * User domain assigned to the storage account. Name is the CNAME source. Only one custom domain is supported per storage account at this time. To clear the existing custom domain, use an empty string for the custom domain name property.
     */
    customDomain?: pulumi.Input<types.inputs.CustomDomainArgs>;
    /**
     * A boolean flag which indicates whether the default authentication is OAuth or not. The default interpretation is false for this property.
     */
    defaultToOAuthAuthentication?: pulumi.Input<boolean>;
    /**
     * Allows you to specify the type of endpoint. Set this to AzureDNSZone to create a large number of accounts in a single subscription, which creates accounts in an Azure DNS Zone and the endpoint URL will have an alphanumeric DNS Zone identifier.
     */
    dnsEndpointType?: pulumi.Input<string | types.enums.DnsEndpointType>;
    /**
     * Allows https traffic only to storage service if sets to true. The default value is true since API version 2019-04-01.
     */
    enableHttpsTrafficOnly?: pulumi.Input<boolean>;
    /**
     * NFS 3.0 protocol support enabled if set to true.
     */
    enableNfsV3?: pulumi.Input<boolean>;
    /**
     * Encryption settings to be used for server-side encryption for the storage account.
     */
    encryption?: pulumi.Input<types.inputs.EncryptionArgs>;
    /**
     * Optional. Set the extended location of the resource. If not set, the storage account will be created in Azure main region. Otherwise it will be created in the specified extended location
     */
    extendedLocation?: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * The identity of the resource.
     */
    identity?: pulumi.Input<types.inputs.IdentityArgs>;
    /**
     * The property is immutable and can only be set to true at the account creation time. When set to true, it enables object level immutability for all the new containers in the account by default.
     */
    immutableStorageWithVersioning?: pulumi.Input<types.inputs.ImmutableStorageAccountArgs>;
    /**
     * Account HierarchicalNamespace enabled if sets to true.
     */
    isHnsEnabled?: pulumi.Input<boolean>;
    /**
     * Enables local users feature, if set to true
     */
    isLocalUserEnabled?: pulumi.Input<boolean>;
    /**
     * Enables Secure File Transfer Protocol, if set to true
     */
    isSftpEnabled?: pulumi.Input<boolean>;
    /**
     * KeyPolicy assigned to the storage account.
     */
    keyPolicy?: pulumi.Input<types.inputs.KeyPolicyArgs>;
    /**
     * Required. Indicates the type of storage account.
     */
    kind: pulumi.Input<string | types.enums.Kind>;
    /**
     * Allow large file shares if sets to Enabled. It cannot be disabled once it is enabled.
     */
    largeFileSharesState?: pulumi.Input<string | types.enums.LargeFileSharesState>;
    /**
     * Required. Gets or sets the location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo region is specified on update, the request will succeed.
     */
    location?: pulumi.Input<string>;
    /**
     * Set the minimum TLS version to be permitted on requests to storage. The default interpretation is TLS 1.0 for this property.
     */
    minimumTlsVersion?: pulumi.Input<string | types.enums.MinimumTlsVersion>;
    /**
     * Network rule set
     */
    networkRuleSet?: pulumi.Input<types.inputs.NetworkRuleSetArgs>;
    /**
     * Allow or disallow public network access to Storage Account. Value is optional but if passed in, must be 'Enabled' or 'Disabled'.
     */
    publicNetworkAccess?: pulumi.Input<string | types.enums.PublicNetworkAccess>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Maintains information about the network routing choice opted by the user for data transfer
     */
    routingPreference?: pulumi.Input<types.inputs.RoutingPreferenceArgs>;
    /**
     * SasPolicy assigned to the storage account.
     */
    sasPolicy?: pulumi.Input<types.inputs.SasPolicyArgs>;
    /**
     * Required. Gets or sets the SKU name.
     */
    sku: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * Gets or sets a list of key value pairs that describe the resource. These tags can be used for viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key with a length no greater than 128 characters and a value with a length no greater than 256 characters.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}