import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a managed instance.
 *
 * Uses Azure REST API version 2021-11-01.
 *
 * Other available API versions: 2021-02-01-preview, 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01, 2023-08-01-preview, 2024-05-01-preview.
 */
export function getManagedInstance(args: GetManagedInstanceArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedInstanceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql:getManagedInstance", {
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
     * The Azure Active Directory administrator of the server.
     */
    readonly administrators?: types.outputs.ManagedInstanceExternalAdministratorResponse;
    /**
     * Collation of the managed instance.
     */
    readonly collation?: string;
    /**
     * The storage account type used to store backups for this instance. The options are Local (LocallyRedundantStorage), Zone (ZoneRedundantStorage), Geo (GeoRedundantStorage) and GeoZone(GeoZoneRedundantStorage)
     */
    readonly currentBackupStorageRedundancy: string;
    /**
     * The Dns Zone that the managed instance is in.
     */
    readonly dnsZone: string;
    /**
     * The fully qualified domain name of the managed instance.
     */
    readonly fullyQualifiedDomainName: string;
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
     * The resource id of a user assigned identity to be used by default.
     */
    readonly primaryUserAssignedIdentityId?: string;
    /**
     * List of private endpoint connections on a managed instance.
     */
    readonly privateEndpointConnections: types.outputs.ManagedInstancePecPropertyResponse[];
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
     * Storage size in GB. Minimum value: 32. Maximum value: 16384. Increments of 32 GB allowed only. Maximum value depends on the selected hardware family and number of vCores.
     */
    readonly storageSizeInGB?: number;
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
     * Whether or not the multi-az is enabled.
     */
    readonly zoneRedundant?: boolean;
}
/**
 * Gets a managed instance.
 *
 * Uses Azure REST API version 2021-11-01.
 *
 * Other available API versions: 2021-02-01-preview, 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01, 2023-08-01-preview, 2024-05-01-preview.
 */
export function getManagedInstanceOutput(args: GetManagedInstanceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetManagedInstanceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:sql:getManagedInstance", {
        "expand": args.expand,
        "managedInstanceName": args.managedInstanceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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