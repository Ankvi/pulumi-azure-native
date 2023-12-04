import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An Azure SQL managed instance.
 */
export class ManagedInstance extends pulumi.CustomResource {
    /**
     * Get an existing ManagedInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ManagedInstance {
        return new ManagedInstance(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sql/v20230501preview:ManagedInstance';

    /**
     * Returns true if the given object is an instance of ManagedInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ManagedInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ManagedInstance.__pulumiType;
    }

    /**
     * Administrator username for the managed instance. Can only be specified when the managed instance is being created (and is required for creation).
     */
    public readonly administratorLogin!: pulumi.Output<string | undefined>;
    /**
     * The Azure Active Directory administrator of the instance. This can only be used at instance create time. If used for instance update, it will be ignored or it will result in an error. For updates individual APIs will need to be used.
     */
    public readonly administrators!: pulumi.Output<types.outputs.ManagedInstanceExternalAdministratorResponse | undefined>;
    /**
     * The managed instance's authentication metadata lookup mode.
     */
    public readonly authenticationMetadata!: pulumi.Output<string | undefined>;
    /**
     * Collation of the managed instance.
     */
    public readonly collation!: pulumi.Output<string | undefined>;
    /**
     * Specifies the point in time (ISO8601 format) of the Managed Instance creation.
     */
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    /**
     * The storage account type used to store backups for this instance. The options are Local (LocallyRedundantStorage), Zone (ZoneRedundantStorage), Geo (GeoRedundantStorage) and GeoZone(GeoZoneRedundantStorage)
     */
    public /*out*/ readonly currentBackupStorageRedundancy!: pulumi.Output<string>;
    /**
     * Specifies the internal format of instance databases specific to the SQL engine version.
     */
    public readonly databaseFormat!: pulumi.Output<string | undefined>;
    /**
     * The Dns Zone that the managed instance is in.
     */
    public /*out*/ readonly dnsZone!: pulumi.Output<string>;
    /**
     * Status of external governance.
     */
    public /*out*/ readonly externalGovernanceStatus!: pulumi.Output<string>;
    /**
     * The fully qualified domain name of the managed instance.
     */
    public /*out*/ readonly fullyQualifiedDomainName!: pulumi.Output<string>;
    /**
     * Hybrid secondary usage. Possible values are 'Active' (default value) and 'Passive' (customer uses the secondary as Passive DR).
     */
    public readonly hybridSecondaryUsage!: pulumi.Output<string | undefined>;
    /**
     * Hybrid secondary usage detected. Possible values are 'Active' (customer does not meet the requirements to use the secondary as Passive DR) and 'Passive' (customer meets the requirements to use the secondary as Passive DR).
     */
    public /*out*/ readonly hybridSecondaryUsageDetected!: pulumi.Output<string>;
    /**
     * The Azure Active Directory identity of the managed instance.
     */
    public readonly identity!: pulumi.Output<types.outputs.ResourceIdentityResponse | undefined>;
    /**
     * The Id of the instance pool this managed server belongs to.
     */
    public readonly instancePoolId!: pulumi.Output<string | undefined>;
    /**
     * Whether or not this is a GPv2 variant of General Purpose edition.
     */
    public readonly isGeneralPurposeV2!: pulumi.Output<boolean | undefined>;
    /**
     * A CMK URI of the key to use for encryption.
     */
    public readonly keyId!: pulumi.Output<string | undefined>;
    /**
     * The license type. Possible values are 'LicenseIncluded' (regular price inclusive of a new SQL license) and 'BasePrice' (discounted AHB price for bringing your own SQL licenses).
     */
    public readonly licenseType!: pulumi.Output<string | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Specifies maintenance configuration id to apply to this managed instance.
     */
    public readonly maintenanceConfigurationId!: pulumi.Output<string | undefined>;
    /**
     * Minimal TLS version. Allowed values: 'None', '1.0', '1.1', '1.2'
     */
    public readonly minimalTlsVersion!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Weather or not Managed Instance is freemium.
     */
    public readonly pricingModel!: pulumi.Output<string | undefined>;
    /**
     * The resource id of a user assigned identity to be used by default.
     */
    public readonly primaryUserAssignedIdentityId!: pulumi.Output<string | undefined>;
    /**
     * List of private endpoint connections on a managed instance.
     */
    public /*out*/ readonly privateEndpointConnections!: pulumi.Output<types.outputs.ManagedInstancePecPropertyResponse[]>;
    /**
     * Provisioning state of managed instance.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Connection type used for connecting to the instance.
     */
    public readonly proxyOverride!: pulumi.Output<string | undefined>;
    /**
     * Whether or not the public data endpoint is enabled.
     */
    public readonly publicDataEndpointEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * The storage account type to be used to store backups for this instance. The options are Local (LocallyRedundantStorage), Zone (ZoneRedundantStorage), Geo (GeoRedundantStorage) and GeoZone(GeoZoneRedundantStorage)
     */
    public readonly requestedBackupStorageRedundancy!: pulumi.Output<string | undefined>;
    /**
     * The managed instance's service principal.
     */
    public readonly servicePrincipal!: pulumi.Output<types.outputs.ServicePrincipalResponse | undefined>;
    /**
     * Managed instance SKU. Allowed values for sku.name: GP_Gen5, GP_G8IM, GP_G8IH, BC_Gen5, BC_G8IM, BC_G8IH
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse | undefined>;
    /**
     * The state of the managed instance.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * Storage IOps. Minimum value: 120. Maximum value: 120000. Increments of 1 IOps allowed only. Maximum value depends on the selected hardware family and number of vCores.
     */
    public readonly storageIOps!: pulumi.Output<number | undefined>;
    /**
     * Storage size in GB. Minimum value: 32. Maximum value: 16384. Increments of 32 GB allowed only. Maximum value depends on the selected hardware family and number of vCores.
     */
    public readonly storageSizeInGB!: pulumi.Output<number | undefined>;
    /**
     * Storage throughput in MBps. Minimum value: 25. Maximum value: 4000. Increments of 1 MBps allowed only. Maximum value depends on the selected hardware family and number of vCores.
     */
    public readonly storageThroughputMBps!: pulumi.Output<number | undefined>;
    /**
     * Subnet resource ID for the managed instance.
     */
    public readonly subnetId!: pulumi.Output<string | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Id of the timezone. Allowed values are timezones supported by Windows.
     * Windows keeps details on supported timezones, including the id, in registry under
     * KEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Time Zones.
     * You can get those registry values via SQL Server by querying SELECT name AS timezone_id FROM sys.time_zone_info.
     * List of Ids can also be obtained by executing [System.TimeZoneInfo]::GetSystemTimeZones() in PowerShell.
     * An example of valid timezone id is "Pacific Standard Time" or "W. Europe Standard Time".
     */
    public readonly timezoneId!: pulumi.Output<string | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The number of vCores. Allowed values: 8, 16, 24, 32, 40, 64, 80.
     */
    public readonly vCores!: pulumi.Output<number | undefined>;
    /**
     * Virtual cluster resource id for the Managed Instance.
     */
    public /*out*/ readonly virtualClusterId!: pulumi.Output<string>;
    /**
     * Whether or not the multi-az is enabled.
     */
    public readonly zoneRedundant!: pulumi.Output<boolean | undefined>;

    /**
     * Create a ManagedInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagedInstanceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["administratorLogin"] = args ? args.administratorLogin : undefined;
            resourceInputs["administratorLoginPassword"] = args ? args.administratorLoginPassword : undefined;
            resourceInputs["administrators"] = args ? args.administrators : undefined;
            resourceInputs["authenticationMetadata"] = args ? args.authenticationMetadata : undefined;
            resourceInputs["collation"] = args ? args.collation : undefined;
            resourceInputs["databaseFormat"] = args ? args.databaseFormat : undefined;
            resourceInputs["dnsZonePartner"] = args ? args.dnsZonePartner : undefined;
            resourceInputs["hybridSecondaryUsage"] = args ? args.hybridSecondaryUsage : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["instancePoolId"] = args ? args.instancePoolId : undefined;
            resourceInputs["isGeneralPurposeV2"] = args ? args.isGeneralPurposeV2 : undefined;
            resourceInputs["keyId"] = args ? args.keyId : undefined;
            resourceInputs["licenseType"] = args ? args.licenseType : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["maintenanceConfigurationId"] = args ? args.maintenanceConfigurationId : undefined;
            resourceInputs["managedInstanceCreateMode"] = args ? args.managedInstanceCreateMode : undefined;
            resourceInputs["managedInstanceName"] = args ? args.managedInstanceName : undefined;
            resourceInputs["minimalTlsVersion"] = args ? args.minimalTlsVersion : undefined;
            resourceInputs["pricingModel"] = args ? args.pricingModel : undefined;
            resourceInputs["primaryUserAssignedIdentityId"] = args ? args.primaryUserAssignedIdentityId : undefined;
            resourceInputs["proxyOverride"] = args ? args.proxyOverride : undefined;
            resourceInputs["publicDataEndpointEnabled"] = args ? args.publicDataEndpointEnabled : undefined;
            resourceInputs["requestedBackupStorageRedundancy"] = args ? args.requestedBackupStorageRedundancy : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["restorePointInTime"] = args ? args.restorePointInTime : undefined;
            resourceInputs["servicePrincipal"] = args ? args.servicePrincipal : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["sourceManagedInstanceId"] = args ? args.sourceManagedInstanceId : undefined;
            resourceInputs["storageIOps"] = args ? args.storageIOps : undefined;
            resourceInputs["storageSizeInGB"] = args ? args.storageSizeInGB : undefined;
            resourceInputs["storageThroughputMBps"] = args ? args.storageThroughputMBps : undefined;
            resourceInputs["subnetId"] = args ? args.subnetId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timezoneId"] = args ? args.timezoneId : undefined;
            resourceInputs["vCores"] = args ? args.vCores : undefined;
            resourceInputs["zoneRedundant"] = args ? args.zoneRedundant : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["currentBackupStorageRedundancy"] = undefined /*out*/;
            resourceInputs["dnsZone"] = undefined /*out*/;
            resourceInputs["externalGovernanceStatus"] = undefined /*out*/;
            resourceInputs["fullyQualifiedDomainName"] = undefined /*out*/;
            resourceInputs["hybridSecondaryUsageDetected"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualClusterId"] = undefined /*out*/;
        } else {
            resourceInputs["administratorLogin"] = undefined /*out*/;
            resourceInputs["administrators"] = undefined /*out*/;
            resourceInputs["authenticationMetadata"] = undefined /*out*/;
            resourceInputs["collation"] = undefined /*out*/;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["currentBackupStorageRedundancy"] = undefined /*out*/;
            resourceInputs["databaseFormat"] = undefined /*out*/;
            resourceInputs["dnsZone"] = undefined /*out*/;
            resourceInputs["externalGovernanceStatus"] = undefined /*out*/;
            resourceInputs["fullyQualifiedDomainName"] = undefined /*out*/;
            resourceInputs["hybridSecondaryUsage"] = undefined /*out*/;
            resourceInputs["hybridSecondaryUsageDetected"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["instancePoolId"] = undefined /*out*/;
            resourceInputs["isGeneralPurposeV2"] = undefined /*out*/;
            resourceInputs["keyId"] = undefined /*out*/;
            resourceInputs["licenseType"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["maintenanceConfigurationId"] = undefined /*out*/;
            resourceInputs["minimalTlsVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["pricingModel"] = undefined /*out*/;
            resourceInputs["primaryUserAssignedIdentityId"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["proxyOverride"] = undefined /*out*/;
            resourceInputs["publicDataEndpointEnabled"] = undefined /*out*/;
            resourceInputs["requestedBackupStorageRedundancy"] = undefined /*out*/;
            resourceInputs["servicePrincipal"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["storageIOps"] = undefined /*out*/;
            resourceInputs["storageSizeInGB"] = undefined /*out*/;
            resourceInputs["storageThroughputMBps"] = undefined /*out*/;
            resourceInputs["subnetId"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["timezoneId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vCores"] = undefined /*out*/;
            resourceInputs["virtualClusterId"] = undefined /*out*/;
            resourceInputs["zoneRedundant"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql:ManagedInstance" }, { type: "azure-native:sql/v20150501preview:ManagedInstance" }, { type: "azure-native:sql/v20180601preview:ManagedInstance" }, { type: "azure-native:sql/v20200202preview:ManagedInstance" }, { type: "azure-native:sql/v20200801preview:ManagedInstance" }, { type: "azure-native:sql/v20201101preview:ManagedInstance" }, { type: "azure-native:sql/v20210201preview:ManagedInstance" }, { type: "azure-native:sql/v20210501preview:ManagedInstance" }, { type: "azure-native:sql/v20210801preview:ManagedInstance" }, { type: "azure-native:sql/v20211101:ManagedInstance" }, { type: "azure-native:sql/v20211101preview:ManagedInstance" }, { type: "azure-native:sql/v20220201preview:ManagedInstance" }, { type: "azure-native:sql/v20220501preview:ManagedInstance" }, { type: "azure-native:sql/v20220801preview:ManagedInstance" }, { type: "azure-native:sql/v20221101preview:ManagedInstance" }, { type: "azure-native:sql/v20230201preview:ManagedInstance" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ManagedInstance.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ManagedInstance resource.
 */
export interface ManagedInstanceArgs {
    /**
     * Administrator username for the managed instance. Can only be specified when the managed instance is being created (and is required for creation).
     */
    administratorLogin?: pulumi.Input<string>;
    /**
     * The administrator login password (required for managed instance creation).
     */
    administratorLoginPassword?: pulumi.Input<string>;
    /**
     * The Azure Active Directory administrator of the instance. This can only be used at instance create time. If used for instance update, it will be ignored or it will result in an error. For updates individual APIs will need to be used.
     */
    administrators?: pulumi.Input<types.inputs.ManagedInstanceExternalAdministratorArgs>;
    /**
     * The managed instance's authentication metadata lookup mode.
     */
    authenticationMetadata?: pulumi.Input<string | types.enums.AuthMetadataLookupModes>;
    /**
     * Collation of the managed instance.
     */
    collation?: pulumi.Input<string>;
    /**
     * Specifies the internal format of instance databases specific to the SQL engine version.
     */
    databaseFormat?: pulumi.Input<string | types.enums.ManagedInstanceDatabaseFormat>;
    /**
     * The resource id of another managed instance whose DNS zone this managed instance will share after creation.
     */
    dnsZonePartner?: pulumi.Input<string>;
    /**
     * Hybrid secondary usage. Possible values are 'Active' (default value) and 'Passive' (customer uses the secondary as Passive DR).
     */
    hybridSecondaryUsage?: pulumi.Input<string | types.enums.HybridSecondaryUsage>;
    /**
     * The Azure Active Directory identity of the managed instance.
     */
    identity?: pulumi.Input<types.inputs.ResourceIdentityArgs>;
    /**
     * The Id of the instance pool this managed server belongs to.
     */
    instancePoolId?: pulumi.Input<string>;
    /**
     * Whether or not this is a GPv2 variant of General Purpose edition.
     */
    isGeneralPurposeV2?: pulumi.Input<boolean>;
    /**
     * A CMK URI of the key to use for encryption.
     */
    keyId?: pulumi.Input<string>;
    /**
     * The license type. Possible values are 'LicenseIncluded' (regular price inclusive of a new SQL license) and 'BasePrice' (discounted AHB price for bringing your own SQL licenses).
     */
    licenseType?: pulumi.Input<string | types.enums.ManagedInstanceLicenseType>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies maintenance configuration id to apply to this managed instance.
     */
    maintenanceConfigurationId?: pulumi.Input<string>;
    /**
     * Specifies the mode of database creation.
     * 
     * Default: Regular instance creation.
     * 
     * Restore: Creates an instance by restoring a set of backups to specific point in time. RestorePointInTime and SourceManagedInstanceId must be specified.
     */
    managedInstanceCreateMode?: pulumi.Input<string | types.enums.ManagedServerCreateMode>;
    /**
     * The name of the managed instance.
     */
    managedInstanceName?: pulumi.Input<string>;
    /**
     * Minimal TLS version. Allowed values: 'None', '1.0', '1.1', '1.2'
     */
    minimalTlsVersion?: pulumi.Input<string>;
    /**
     * Weather or not Managed Instance is freemium.
     */
    pricingModel?: pulumi.Input<string | types.enums.FreemiumType>;
    /**
     * The resource id of a user assigned identity to be used by default.
     */
    primaryUserAssignedIdentityId?: pulumi.Input<string>;
    /**
     * Connection type used for connecting to the instance.
     */
    proxyOverride?: pulumi.Input<string | types.enums.ManagedInstanceProxyOverride>;
    /**
     * Whether or not the public data endpoint is enabled.
     */
    publicDataEndpointEnabled?: pulumi.Input<boolean>;
    /**
     * The storage account type to be used to store backups for this instance. The options are Local (LocallyRedundantStorage), Zone (ZoneRedundantStorage), Geo (GeoRedundantStorage) and GeoZone(GeoZoneRedundantStorage)
     */
    requestedBackupStorageRedundancy?: pulumi.Input<string | types.enums.BackupStorageRedundancy>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database.
     */
    restorePointInTime?: pulumi.Input<string>;
    /**
     * The managed instance's service principal.
     */
    servicePrincipal?: pulumi.Input<types.inputs.ServicePrincipalArgs>;
    /**
     * Managed instance SKU. Allowed values for sku.name: GP_Gen5, GP_G8IM, GP_G8IH, BC_Gen5, BC_G8IM, BC_G8IH
     */
    sku?: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * The resource identifier of the source managed instance associated with create operation of this instance.
     */
    sourceManagedInstanceId?: pulumi.Input<string>;
    /**
     * Storage IOps. Minimum value: 120. Maximum value: 120000. Increments of 1 IOps allowed only. Maximum value depends on the selected hardware family and number of vCores.
     */
    storageIOps?: pulumi.Input<number>;
    /**
     * Storage size in GB. Minimum value: 32. Maximum value: 16384. Increments of 32 GB allowed only. Maximum value depends on the selected hardware family and number of vCores.
     */
    storageSizeInGB?: pulumi.Input<number>;
    /**
     * Storage throughput in MBps. Minimum value: 25. Maximum value: 4000. Increments of 1 MBps allowed only. Maximum value depends on the selected hardware family and number of vCores.
     */
    storageThroughputMBps?: pulumi.Input<number>;
    /**
     * Subnet resource ID for the managed instance.
     */
    subnetId?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Id of the timezone. Allowed values are timezones supported by Windows.
     * Windows keeps details on supported timezones, including the id, in registry under
     * KEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Time Zones.
     * You can get those registry values via SQL Server by querying SELECT name AS timezone_id FROM sys.time_zone_info.
     * List of Ids can also be obtained by executing [System.TimeZoneInfo]::GetSystemTimeZones() in PowerShell.
     * An example of valid timezone id is "Pacific Standard Time" or "W. Europe Standard Time".
     */
    timezoneId?: pulumi.Input<string>;
    /**
     * The number of vCores. Allowed values: 8, 16, 24, 32, 40, 64, 80.
     */
    vCores?: pulumi.Input<number>;
    /**
     * Whether or not the multi-az is enabled.
     */
    zoneRedundant?: pulumi.Input<boolean>;
}