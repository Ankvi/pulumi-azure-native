import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a managed instance.
 */
export function getManagedInstance(args: GetManagedInstanceArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedInstanceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql/v20230501preview:getManagedInstance", {
        "expand": args.expand,
        "managedInstanceName": args.managedInstanceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManagedInstanceArgs {
    /**
     * The child resources to include in the response.
     */
    expand?: string;
    /**
     * The name of the managed instance.
     */
    managedInstanceName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
}

/**
 * An Azure SQL managed instance.
 */
export interface GetManagedInstanceResult {
    /**
     * Administrator username for the managed instance. Can only be specified when the managed instance is being created (and is required for creation).
     */
    readonly administratorLogin?: string;
    /**
     * The Azure Active Directory administrator of the instance. This can only be used at instance create time. If used for instance update, it will be ignored or it will result in an error. For updates individual APIs will need to be used.
     */
    readonly administrators?: types.outputs.ManagedInstanceExternalAdministratorResponse;
    /**
     * The managed instance's authentication metadata lookup mode.
     */
    readonly authenticationMetadata?: string;
    /**
     * Collation of the managed instance.
     */
    readonly collation?: string;
    /**
     * Specifies the point in time (ISO8601 format) of the Managed Instance creation.
     */
    readonly createTime: string;
    /**
     * The storage account type used to store backups for this instance. The options are Local (LocallyRedundantStorage), Zone (ZoneRedundantStorage), Geo (GeoRedundantStorage) and GeoZone(GeoZoneRedundantStorage)
     */
    readonly currentBackupStorageRedundancy: string;
    /**
     * Specifies the internal format of instance databases specific to the SQL engine version.
     */
    readonly databaseFormat?: string;
    /**
     * The Dns Zone that the managed instance is in.
     */
    readonly dnsZone: string;
    /**
     * Status of external governance.
     */
    readonly externalGovernanceStatus: string;
    /**
     * The fully qualified domain name of the managed instance.
     */
    readonly fullyQualifiedDomainName: string;
    /**
     * Hybrid secondary usage. Possible values are 'Active' (default value) and 'Passive' (customer uses the secondary as Passive DR).
     */
    readonly hybridSecondaryUsage?: string;
    /**
     * Hybrid secondary usage detected. Possible values are 'Active' (customer does not meet the requirements to use the secondary as Passive DR) and 'Passive' (customer meets the requirements to use the secondary as Passive DR).
     */
    readonly hybridSecondaryUsageDetected: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * The Azure Active Directory identity of the managed instance.
     */
    readonly identity?: types.outputs.ResourceIdentityResponse;
    /**
     * The Id of the instance pool this managed server belongs to.
     */
    readonly instancePoolId?: string;
    /**
     * Whether or not this is a GPv2 variant of General Purpose edition.
     */
    readonly isGeneralPurposeV2?: boolean;
    /**
     * A CMK URI of the key to use for encryption.
     */
    readonly keyId?: string;
    /**
     * The license type. Possible values are 'LicenseIncluded' (regular price inclusive of a new SQL license) and 'BasePrice' (discounted AHB price for bringing your own SQL licenses).
     */
    readonly licenseType?: string;
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Specifies maintenance configuration id to apply to this managed instance.
     */
    readonly maintenanceConfigurationId?: string;
    /**
     * Minimal TLS version. Allowed values: 'None', '1.0', '1.1', '1.2'
     */
    readonly minimalTlsVersion?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Weather or not Managed Instance is freemium.
     */
    readonly pricingModel?: string;
    /**
     * The resource id of a user assigned identity to be used by default.
     */
    readonly primaryUserAssignedIdentityId?: string;
    /**
     * List of private endpoint connections on a managed instance.
     */
    readonly privateEndpointConnections: types.outputs.ManagedInstancePecPropertyResponse[];
    /**
     * Provisioning state of managed instance.
     */
    readonly provisioningState: string;
    /**
     * Connection type used for connecting to the instance.
     */
    readonly proxyOverride?: string;
    /**
     * Whether or not the public data endpoint is enabled.
     */
    readonly publicDataEndpointEnabled?: boolean;
    /**
     * The storage account type to be used to store backups for this instance. The options are Local (LocallyRedundantStorage), Zone (ZoneRedundantStorage), Geo (GeoRedundantStorage) and GeoZone(GeoZoneRedundantStorage)
     */
    readonly requestedBackupStorageRedundancy?: string;
    /**
     * The managed instance's service principal.
     */
    readonly servicePrincipal?: types.outputs.ServicePrincipalResponse;
    /**
     * Managed instance SKU. Allowed values for sku.name: GP_Gen5, GP_G8IM, GP_G8IH, BC_Gen5, BC_G8IM, BC_G8IH
     */
    readonly sku?: types.outputs.SkuResponse;
    /**
     * The state of the managed instance.
     */
    readonly state: string;
    /**
     * Storage IOps. Minimum value: 120. Maximum value: 120000. Increments of 1 IOps allowed only. Maximum value depends on the selected hardware family and number of vCores.
     */
    readonly storageIOps?: number;
    /**
     * Storage size in GB. Minimum value: 32. Maximum value: 16384. Increments of 32 GB allowed only. Maximum value depends on the selected hardware family and number of vCores.
     */
    readonly storageSizeInGB?: number;
    /**
     * Storage throughput in MBps. Minimum value: 25. Maximum value: 4000. Increments of 1 MBps allowed only. Maximum value depends on the selected hardware family and number of vCores.
     */
    readonly storageThroughputMBps?: number;
    /**
     * Subnet resource ID for the managed instance.
     */
    readonly subnetId?: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Id of the timezone. Allowed values are timezones supported by Windows.
     * Windows keeps details on supported timezones, including the id, in registry under
     * KEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Time Zones.
     * You can get those registry values via SQL Server by querying SELECT name AS timezone_id FROM sys.time_zone_info.
     * List of Ids can also be obtained by executing [System.TimeZoneInfo]::GetSystemTimeZones() in PowerShell.
     * An example of valid timezone id is "Pacific Standard Time" or "W. Europe Standard Time".
     */
    readonly timezoneId?: string;
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * The number of vCores. Allowed values: 8, 16, 24, 32, 40, 64, 80.
     */
    readonly vCores?: number;
    /**
     * Virtual cluster resource id for the Managed Instance.
     */
    readonly virtualClusterId: string;
    /**
     * Whether or not the multi-az is enabled.
     */
    readonly zoneRedundant?: boolean;
}
/**
 * Gets a managed instance.
 */
export function getManagedInstanceOutput(args: GetManagedInstanceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagedInstanceResult> {
    return pulumi.output(args).apply((a: any) => getManagedInstance(a, opts))
}

export interface GetManagedInstanceOutputArgs {
    /**
     * The child resources to include in the response.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the managed instance.
     */
    managedInstanceName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
}