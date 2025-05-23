import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Response for ElasticSan request.
 *
 * Uses Azure REST API version 2024-05-01. In version 2.x of the Azure Native provider, it used API version 2021-11-20-preview.
 *
 * Other available API versions: 2021-11-20-preview, 2022-12-01-preview, 2023-01-01, 2024-06-01-preview, 2024-07-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native elasticsan [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class ElasticSan extends pulumi.CustomResource {
    /**
     * Get an existing ElasticSan resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ElasticSan {
        return new ElasticSan(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:elasticsan:ElasticSan';

    /**
     * Returns true if the given object is an instance of ElasticSan.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ElasticSan {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ElasticSan.__pulumiType;
    }

    /**
     * Logical zone for Elastic San resource; example: ["1"].
     */
    public readonly availabilityZones!: pulumi.Output<string[] | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Base size of the Elastic San appliance in TiB.
     */
    public readonly baseSizeTiB!: pulumi.Output<number>;
    /**
     * Extended size of the Elastic San appliance in TiB.
     */
    public readonly extendedCapacitySizeTiB!: pulumi.Output<number>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The list of Private Endpoint Connections.
     */
    public /*out*/ readonly privateEndpointConnections!: pulumi.Output<types.outputs.PrivateEndpointConnectionResponse[]>;
    /**
     * State of the operation on the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Allow or disallow public network access to ElasticSan. Value is optional but if passed in, must be 'Enabled' or 'Disabled'.
     */
    public readonly publicNetworkAccess!: pulumi.Output<string | undefined>;
    /**
     * resource sku
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Total Provisioned IOPS of the Elastic San appliance.
     */
    public /*out*/ readonly totalIops!: pulumi.Output<number>;
    /**
     * Total Provisioned MBps Elastic San appliance.
     */
    public /*out*/ readonly totalMBps!: pulumi.Output<number>;
    /**
     * Total size of the Elastic San appliance in TB.
     */
    public /*out*/ readonly totalSizeTiB!: pulumi.Output<number>;
    /**
     * Total size of the provisioned Volumes in GiB.
     */
    public /*out*/ readonly totalVolumeSizeGiB!: pulumi.Output<number>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Total number of volume groups in this Elastic San appliance.
     */
    public /*out*/ readonly volumeGroupCount!: pulumi.Output<number>;

    /**
     * Create a ElasticSan resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ElasticSanArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.baseSizeTiB === undefined) && !opts.urn) {
                throw new Error("Missing required property 'baseSizeTiB'");
            }
            if ((!args || args.extendedCapacitySizeTiB === undefined) && !opts.urn) {
                throw new Error("Missing required property 'extendedCapacitySizeTiB'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sku === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sku'");
            }
            resourceInputs["availabilityZones"] = args ? args.availabilityZones : undefined;
            resourceInputs["baseSizeTiB"] = args ? args.baseSizeTiB : undefined;
            resourceInputs["elasticSanName"] = args ? args.elasticSanName : undefined;
            resourceInputs["extendedCapacitySizeTiB"] = args ? args.extendedCapacitySizeTiB : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["publicNetworkAccess"] = args ? args.publicNetworkAccess : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["totalIops"] = undefined /*out*/;
            resourceInputs["totalMBps"] = undefined /*out*/;
            resourceInputs["totalSizeTiB"] = undefined /*out*/;
            resourceInputs["totalVolumeSizeGiB"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["volumeGroupCount"] = undefined /*out*/;
        } else {
            resourceInputs["availabilityZones"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["baseSizeTiB"] = undefined /*out*/;
            resourceInputs["extendedCapacitySizeTiB"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicNetworkAccess"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["totalIops"] = undefined /*out*/;
            resourceInputs["totalMBps"] = undefined /*out*/;
            resourceInputs["totalSizeTiB"] = undefined /*out*/;
            resourceInputs["totalVolumeSizeGiB"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["volumeGroupCount"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:elasticsan/v20211120preview:ElasticSan" }, { type: "azure-native:elasticsan/v20221201preview:ElasticSan" }, { type: "azure-native:elasticsan/v20230101:ElasticSan" }, { type: "azure-native:elasticsan/v20240501:ElasticSan" }, { type: "azure-native:elasticsan/v20240601preview:ElasticSan" }, { type: "azure-native:elasticsan/v20240701preview:ElasticSan" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ElasticSan.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ElasticSan resource.
 */
export interface ElasticSanArgs {
    /**
     * Logical zone for Elastic San resource; example: ["1"].
     */
    availabilityZones?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Base size of the Elastic San appliance in TiB.
     */
    baseSizeTiB: pulumi.Input<number>;
    /**
     * The name of the ElasticSan.
     */
    elasticSanName?: pulumi.Input<string>;
    /**
     * Extended size of the Elastic San appliance in TiB.
     */
    extendedCapacitySizeTiB: pulumi.Input<number>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Allow or disallow public network access to ElasticSan. Value is optional but if passed in, must be 'Enabled' or 'Disabled'.
     */
    publicNetworkAccess?: pulumi.Input<string | types.enums.PublicNetworkAccess>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * resource sku
     */
    sku: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}