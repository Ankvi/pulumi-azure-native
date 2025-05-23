import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Class representing a Kusto cluster.
 *
 * Uses Azure REST API version 2024-04-13. In version 2.x of the Azure Native provider, it used API version 2022-12-29.
 *
 * Other available API versions: 2018-09-07-preview, 2019-01-21, 2019-05-15, 2019-09-07, 2019-11-09, 2020-02-15, 2020-06-14, 2020-09-18, 2021-01-01, 2021-08-27, 2022-02-01, 2022-07-07, 2022-11-11, 2022-12-29, 2023-05-02, 2023-08-15. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native kusto [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Cluster extends pulumi.CustomResource {
    /**
     * Get an existing Cluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Cluster {
        return new Cluster(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:kusto:Cluster';

    /**
     * Returns true if the given object is an instance of Cluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Cluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Cluster.__pulumiType;
    }

    /**
     * The cluster's accepted audiences.
     */
    public readonly acceptedAudiences!: pulumi.Output<types.outputs.AcceptedAudiencesResponse[] | undefined>;
    /**
     * List of allowed FQDNs(Fully Qualified Domain Name) for egress from Cluster.
     */
    public readonly allowedFqdnList!: pulumi.Output<string[] | undefined>;
    /**
     * The list of ips in the format of CIDR allowed to connect to the cluster.
     */
    public readonly allowedIpRangeList!: pulumi.Output<string[] | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * List of callout policies for egress from Cluster.
     */
    public readonly calloutPolicies!: pulumi.Output<types.outputs.CalloutPolicyResponse[] | undefined>;
    /**
     * The cluster data ingestion URI.
     */
    public /*out*/ readonly dataIngestionUri!: pulumi.Output<string>;
    /**
     * A boolean value that indicates if the cluster could be automatically stopped (due to lack of data or no activity for many days).
     */
    public readonly enableAutoStop!: pulumi.Output<boolean | undefined>;
    /**
     * A boolean value that indicates if the cluster's disks are encrypted.
     */
    public readonly enableDiskEncryption!: pulumi.Output<boolean | undefined>;
    /**
     * A boolean value that indicates if double encryption is enabled.
     */
    public readonly enableDoubleEncryption!: pulumi.Output<boolean | undefined>;
    /**
     * A boolean value that indicates if the purge operations are enabled.
     */
    public readonly enablePurge!: pulumi.Output<boolean | undefined>;
    /**
     * A boolean value that indicates if the streaming ingest is enabled.
     */
    public readonly enableStreamingIngest!: pulumi.Output<boolean | undefined>;
    /**
     * The engine type
     */
    public readonly engineType!: pulumi.Output<string | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The identity of the cluster, if configured.
     */
    public readonly identity!: pulumi.Output<types.outputs.IdentityResponse | undefined>;
    /**
     * KeyVault properties for the cluster encryption.
     */
    public readonly keyVaultProperties!: pulumi.Output<types.outputs.KeyVaultPropertiesResponse | undefined>;
    /**
     * List of the cluster's language extensions.
     */
    public readonly languageExtensions!: pulumi.Output<types.outputs.LanguageExtensionsListResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Properties of the peer cluster involved in a migration to/from this cluster.
     */
    public /*out*/ readonly migrationCluster!: pulumi.Output<types.outputs.MigrationClusterPropertiesResponse>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Optimized auto scale definition.
     */
    public readonly optimizedAutoscale!: pulumi.Output<types.outputs.OptimizedAutoscaleResponse | undefined>;
    /**
     * A list of private endpoint connections.
     */
    public /*out*/ readonly privateEndpointConnections!: pulumi.Output<types.outputs.PrivateEndpointConnectionResponse[]>;
    /**
     * The provisioned state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Indicates what public IP type to create - IPv4 (default), or DualStack (both IPv4 and IPv6)
     */
    public readonly publicIPType!: pulumi.Output<string | undefined>;
    /**
     * Public network access to the cluster is enabled by default. When disabled, only private endpoint connection to the cluster is allowed
     */
    public readonly publicNetworkAccess!: pulumi.Output<string | undefined>;
    /**
     * Whether or not to restrict outbound network access.  Value is optional but if passed in, must be 'Enabled' or 'Disabled'
     */
    public readonly restrictOutboundNetworkAccess!: pulumi.Output<string | undefined>;
    /**
     * The SKU of the cluster.
     */
    public readonly sku!: pulumi.Output<types.outputs.AzureSkuResponse>;
    /**
     * The state of the resource.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * The reason for the cluster's current state.
     */
    public /*out*/ readonly stateReason!: pulumi.Output<string>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The cluster's external tenants.
     */
    public readonly trustedExternalTenants!: pulumi.Output<types.outputs.TrustedExternalTenantResponse[] | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The cluster URI.
     */
    public /*out*/ readonly uri!: pulumi.Output<string>;
    /**
     * Virtual network definition.
     */
    public readonly virtualNetworkConfiguration!: pulumi.Output<types.outputs.VirtualNetworkConfigurationResponse | undefined>;
    /**
     * Indicates whether the cluster is zonal or non-zonal.
     */
    public /*out*/ readonly zoneStatus!: pulumi.Output<string>;
    /**
     * The availability zones of the cluster.
     */
    public readonly zones!: pulumi.Output<string[] | undefined>;

    /**
     * Create a Cluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClusterArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sku === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sku'");
            }
            resourceInputs["acceptedAudiences"] = args ? args.acceptedAudiences : undefined;
            resourceInputs["allowedFqdnList"] = args ? args.allowedFqdnList : undefined;
            resourceInputs["allowedIpRangeList"] = args ? args.allowedIpRangeList : undefined;
            resourceInputs["calloutPolicies"] = args ? args.calloutPolicies : undefined;
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["enableAutoStop"] = (args ? args.enableAutoStop : undefined) ?? true;
            resourceInputs["enableDiskEncryption"] = (args ? args.enableDiskEncryption : undefined) ?? false;
            resourceInputs["enableDoubleEncryption"] = (args ? args.enableDoubleEncryption : undefined) ?? false;
            resourceInputs["enablePurge"] = (args ? args.enablePurge : undefined) ?? false;
            resourceInputs["enableStreamingIngest"] = (args ? args.enableStreamingIngest : undefined) ?? false;
            resourceInputs["engineType"] = (args ? args.engineType : undefined) ?? "V3";
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["keyVaultProperties"] = args ? args.keyVaultProperties : undefined;
            resourceInputs["languageExtensions"] = args ? args.languageExtensions : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["optimizedAutoscale"] = args ? args.optimizedAutoscale : undefined;
            resourceInputs["publicIPType"] = (args ? args.publicIPType : undefined) ?? "IPv4";
            resourceInputs["publicNetworkAccess"] = (args ? args.publicNetworkAccess : undefined) ?? "Enabled";
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["restrictOutboundNetworkAccess"] = (args ? args.restrictOutboundNetworkAccess : undefined) ?? "Disabled";
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["trustedExternalTenants"] = args ? args.trustedExternalTenants : undefined;
            resourceInputs["virtualClusterGraduationProperties"] = args ? args.virtualClusterGraduationProperties : undefined;
            resourceInputs["virtualNetworkConfiguration"] = args ? (args.virtualNetworkConfiguration ? pulumi.output(args.virtualNetworkConfiguration).apply(types.inputs.virtualNetworkConfigurationArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["zones"] = args ? args.zones : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["dataIngestionUri"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["migrationCluster"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["stateReason"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uri"] = undefined /*out*/;
            resourceInputs["zoneStatus"] = undefined /*out*/;
        } else {
            resourceInputs["acceptedAudiences"] = undefined /*out*/;
            resourceInputs["allowedFqdnList"] = undefined /*out*/;
            resourceInputs["allowedIpRangeList"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["calloutPolicies"] = undefined /*out*/;
            resourceInputs["dataIngestionUri"] = undefined /*out*/;
            resourceInputs["enableAutoStop"] = undefined /*out*/;
            resourceInputs["enableDiskEncryption"] = undefined /*out*/;
            resourceInputs["enableDoubleEncryption"] = undefined /*out*/;
            resourceInputs["enablePurge"] = undefined /*out*/;
            resourceInputs["enableStreamingIngest"] = undefined /*out*/;
            resourceInputs["engineType"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["keyVaultProperties"] = undefined /*out*/;
            resourceInputs["languageExtensions"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["migrationCluster"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["optimizedAutoscale"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicIPType"] = undefined /*out*/;
            resourceInputs["publicNetworkAccess"] = undefined /*out*/;
            resourceInputs["restrictOutboundNetworkAccess"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["stateReason"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["trustedExternalTenants"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uri"] = undefined /*out*/;
            resourceInputs["virtualNetworkConfiguration"] = undefined /*out*/;
            resourceInputs["zoneStatus"] = undefined /*out*/;
            resourceInputs["zones"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:kusto/v20170907privatepreview:Cluster" }, { type: "azure-native:kusto/v20180907preview:Cluster" }, { type: "azure-native:kusto/v20190121:Cluster" }, { type: "azure-native:kusto/v20190515:Cluster" }, { type: "azure-native:kusto/v20190907:Cluster" }, { type: "azure-native:kusto/v20191109:Cluster" }, { type: "azure-native:kusto/v20200215:Cluster" }, { type: "azure-native:kusto/v20200614:Cluster" }, { type: "azure-native:kusto/v20200918:Cluster" }, { type: "azure-native:kusto/v20210101:Cluster" }, { type: "azure-native:kusto/v20210827:Cluster" }, { type: "azure-native:kusto/v20220201:Cluster" }, { type: "azure-native:kusto/v20220707:Cluster" }, { type: "azure-native:kusto/v20221111:Cluster" }, { type: "azure-native:kusto/v20221229:Cluster" }, { type: "azure-native:kusto/v20230502:Cluster" }, { type: "azure-native:kusto/v20230815:Cluster" }, { type: "azure-native:kusto/v20240413:Cluster" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Cluster.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Cluster resource.
 */
export interface ClusterArgs {
    /**
     * The cluster's accepted audiences.
     */
    acceptedAudiences?: pulumi.Input<pulumi.Input<types.inputs.AcceptedAudiencesArgs>[]>;
    /**
     * List of allowed FQDNs(Fully Qualified Domain Name) for egress from Cluster.
     */
    allowedFqdnList?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The list of ips in the format of CIDR allowed to connect to the cluster.
     */
    allowedIpRangeList?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of callout policies for egress from Cluster.
     */
    calloutPolicies?: pulumi.Input<pulumi.Input<types.inputs.CalloutPolicyArgs>[]>;
    /**
     * The name of the Kusto cluster.
     */
    clusterName?: pulumi.Input<string>;
    /**
     * A boolean value that indicates if the cluster could be automatically stopped (due to lack of data or no activity for many days).
     */
    enableAutoStop?: pulumi.Input<boolean>;
    /**
     * A boolean value that indicates if the cluster's disks are encrypted.
     */
    enableDiskEncryption?: pulumi.Input<boolean>;
    /**
     * A boolean value that indicates if double encryption is enabled.
     */
    enableDoubleEncryption?: pulumi.Input<boolean>;
    /**
     * A boolean value that indicates if the purge operations are enabled.
     */
    enablePurge?: pulumi.Input<boolean>;
    /**
     * A boolean value that indicates if the streaming ingest is enabled.
     */
    enableStreamingIngest?: pulumi.Input<boolean>;
    /**
     * The engine type
     */
    engineType?: pulumi.Input<string | types.enums.EngineType>;
    /**
     * The identity of the cluster, if configured.
     */
    identity?: pulumi.Input<types.inputs.IdentityArgs>;
    /**
     * KeyVault properties for the cluster encryption.
     */
    keyVaultProperties?: pulumi.Input<types.inputs.KeyVaultPropertiesArgs>;
    /**
     * List of the cluster's language extensions.
     */
    languageExtensions?: pulumi.Input<types.inputs.LanguageExtensionsListArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Optimized auto scale definition.
     */
    optimizedAutoscale?: pulumi.Input<types.inputs.OptimizedAutoscaleArgs>;
    /**
     * Indicates what public IP type to create - IPv4 (default), or DualStack (both IPv4 and IPv6)
     */
    publicIPType?: pulumi.Input<string | types.enums.PublicIPType>;
    /**
     * Public network access to the cluster is enabled by default. When disabled, only private endpoint connection to the cluster is allowed
     */
    publicNetworkAccess?: pulumi.Input<string | types.enums.PublicNetworkAccess>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Whether or not to restrict outbound network access.  Value is optional but if passed in, must be 'Enabled' or 'Disabled'
     */
    restrictOutboundNetworkAccess?: pulumi.Input<string | types.enums.ClusterNetworkAccessFlag>;
    /**
     * The SKU of the cluster.
     */
    sku: pulumi.Input<types.inputs.AzureSkuArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The cluster's external tenants.
     */
    trustedExternalTenants?: pulumi.Input<pulumi.Input<types.inputs.TrustedExternalTenantArgs>[]>;
    /**
     * Virtual Cluster graduation properties
     */
    virtualClusterGraduationProperties?: pulumi.Input<string>;
    /**
     * Virtual network definition.
     */
    virtualNetworkConfiguration?: pulumi.Input<types.inputs.VirtualNetworkConfigurationArgs>;
    /**
     * The availability zones of the cluster.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}