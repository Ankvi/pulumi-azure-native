import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a Kusto cluster.
 */
export function getCluster(args: GetClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetClusterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:kusto/v20230502:getCluster", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetClusterArgs {
    /**
     * The name of the Kusto cluster.
     */
    clusterName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Class representing a Kusto cluster.
 */
export interface GetClusterResult {
    /**
     * The cluster's accepted audiences.
     */
    readonly acceptedAudiences?: types.outputs.AcceptedAudiencesResponse[];
    /**
     * List of allowed FQDNs(Fully Qualified Domain Name) for egress from Cluster.
     */
    readonly allowedFqdnList?: string[];
    /**
     * The list of ips in the format of CIDR allowed to connect to the cluster.
     */
    readonly allowedIpRangeList?: string[];
    /**
     * The cluster data ingestion URI.
     */
    readonly dataIngestionUri: string;
    /**
     * A boolean value that indicates if the cluster could be automatically stopped (due to lack of data or no activity for many days).
     */
    readonly enableAutoStop?: boolean;
    /**
     * A boolean value that indicates if the cluster's disks are encrypted.
     */
    readonly enableDiskEncryption?: boolean;
    /**
     * A boolean value that indicates if double encryption is enabled.
     */
    readonly enableDoubleEncryption?: boolean;
    /**
     * A boolean value that indicates if the purge operations are enabled.
     */
    readonly enablePurge?: boolean;
    /**
     * A boolean value that indicates if the streaming ingest is enabled.
     */
    readonly enableStreamingIngest?: boolean;
    /**
     * The engine type
     */
    readonly engineType?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The identity of the cluster, if configured.
     */
    readonly identity?: types.outputs.IdentityResponse;
    /**
     * KeyVault properties for the cluster encryption.
     */
    readonly keyVaultProperties?: types.outputs.KeyVaultPropertiesResponse;
    /**
     * List of the cluster's language extensions.
     */
    readonly languageExtensions?: types.outputs.LanguageExtensionsListResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Properties of the peer cluster involved in a migration to/from this cluster.
     */
    readonly migrationCluster: types.outputs.MigrationClusterPropertiesResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Optimized auto scale definition.
     */
    readonly optimizedAutoscale?: types.outputs.OptimizedAutoscaleResponse;
    /**
     * A list of private endpoint connections.
     */
    readonly privateEndpointConnections: types.outputs.PrivateEndpointConnectionResponse[];
    /**
     * The provisioned state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Indicates what public IP type to create - IPv4 (default), or DualStack (both IPv4 and IPv6)
     */
    readonly publicIPType?: string;
    /**
     * Public network access to the cluster is enabled by default. When disabled, only private endpoint connection to the cluster is allowed
     */
    readonly publicNetworkAccess?: string;
    /**
     * Whether or not to restrict outbound network access.  Value is optional but if passed in, must be 'Enabled' or 'Disabled'
     */
    readonly restrictOutboundNetworkAccess?: string;
    /**
     * The SKU of the cluster.
     */
    readonly sku: types.outputs.AzureSkuResponse;
    /**
     * The state of the resource.
     */
    readonly state: string;
    /**
     * The reason for the cluster's current state.
     */
    readonly stateReason: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The cluster's external tenants.
     */
    readonly trustedExternalTenants?: types.outputs.TrustedExternalTenantResponse[];
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * The cluster URI.
     */
    readonly uri: string;
    /**
     * Virtual network definition.
     */
    readonly virtualNetworkConfiguration?: types.outputs.VirtualNetworkConfigurationResponse;
    /**
     * The availability zones of the cluster.
     */
    readonly zones?: string[];
}
/**
 * Gets a Kusto cluster.
 */
export function getClusterOutput(args: GetClusterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetClusterResult> {
    return pulumi.output(args).apply((a: any) => getCluster(a, opts))
}

export interface GetClusterOutputArgs {
    /**
     * The name of the Kusto cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
