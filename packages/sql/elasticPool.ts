import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An elastic pool.
 *
 * Uses Azure REST API version 2021-11-01. In version 1.x of the Azure Native provider, it used API version 2020-11-01-preview.
 *
 * Other available API versions: 2014-04-01, 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01, 2023-08-01-preview, 2024-05-01-preview.
 */
export class ElasticPool extends pulumi.CustomResource {
    /**
     * Get an existing ElasticPool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ElasticPool {
        return new ElasticPool(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sql:ElasticPool';

    /**
     * Returns true if the given object is an instance of ElasticPool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ElasticPool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ElasticPool.__pulumiType;
    }

    /**
     * The creation date of the elastic pool (ISO8601 format).
     */
    public /*out*/ readonly creationDate!: pulumi.Output<string>;
    /**
     * The number of secondary replicas associated with the elastic pool that are used to provide high availability. Applicable only to Hyperscale elastic pools.
     */
    public readonly highAvailabilityReplicaCount!: pulumi.Output<number | undefined>;
    /**
     * Kind of elastic pool. This is metadata used for the Azure portal experience.
     */
    public /*out*/ readonly kind!: pulumi.Output<string>;
    /**
     * The license type to apply for this elastic pool.
     */
    public readonly licenseType!: pulumi.Output<string | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Maintenance configuration id assigned to the elastic pool. This configuration defines the period when the maintenance updates will will occur.
     */
    public readonly maintenanceConfigurationId!: pulumi.Output<string | undefined>;
    /**
     * The storage limit for the database elastic pool in bytes.
     */
    public readonly maxSizeBytes!: pulumi.Output<number | undefined>;
    /**
     * Minimal capacity that serverless pool will not shrink below, if not paused
     */
    public readonly minCapacity!: pulumi.Output<number | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The per database settings for the elastic pool.
     */
    public readonly perDatabaseSettings!: pulumi.Output<types.outputs.ElasticPoolPerDatabaseSettingsResponse | undefined>;
    /**
     * The elastic pool SKU.
     * 
     * The list of SKUs may vary by region and support offer. To determine the SKUs (including the SKU name, tier/edition, family, and capacity) that are available to your subscription in an Azure region, use the `Capabilities_ListByLocation` REST API or the following command:
     * 
     * ```azurecli
     * az sql elastic-pool list-editions -l <location> -o table
     * ````
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse | undefined>;
    /**
     * The state of the elastic pool.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Whether or not this elastic pool is zone redundant, which means the replicas of this elastic pool will be spread across multiple availability zones.
     */
    public readonly zoneRedundant!: pulumi.Output<boolean | undefined>;

    /**
     * Create a ElasticPool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ElasticPoolArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverName'");
            }
            resourceInputs["elasticPoolName"] = args ? args.elasticPoolName : undefined;
            resourceInputs["highAvailabilityReplicaCount"] = args ? args.highAvailabilityReplicaCount : undefined;
            resourceInputs["licenseType"] = args ? args.licenseType : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["maintenanceConfigurationId"] = args ? args.maintenanceConfigurationId : undefined;
            resourceInputs["maxSizeBytes"] = args ? args.maxSizeBytes : undefined;
            resourceInputs["minCapacity"] = args ? args.minCapacity : undefined;
            resourceInputs["perDatabaseSettings"] = args ? args.perDatabaseSettings : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["zoneRedundant"] = args ? args.zoneRedundant : undefined;
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["highAvailabilityReplicaCount"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["licenseType"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["maintenanceConfigurationId"] = undefined /*out*/;
            resourceInputs["maxSizeBytes"] = undefined /*out*/;
            resourceInputs["minCapacity"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["perDatabaseSettings"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["zoneRedundant"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql/v20140401:ElasticPool" }, { type: "azure-native:sql/v20171001preview:ElasticPool" }, { type: "azure-native:sql/v20200202preview:ElasticPool" }, { type: "azure-native:sql/v20200801preview:ElasticPool" }, { type: "azure-native:sql/v20201101preview:ElasticPool" }, { type: "azure-native:sql/v20210201preview:ElasticPool" }, { type: "azure-native:sql/v20210501preview:ElasticPool" }, { type: "azure-native:sql/v20210801preview:ElasticPool" }, { type: "azure-native:sql/v20211101:ElasticPool" }, { type: "azure-native:sql/v20211101preview:ElasticPool" }, { type: "azure-native:sql/v20220201preview:ElasticPool" }, { type: "azure-native:sql/v20220501preview:ElasticPool" }, { type: "azure-native:sql/v20220801preview:ElasticPool" }, { type: "azure-native:sql/v20221101preview:ElasticPool" }, { type: "azure-native:sql/v20230201preview:ElasticPool" }, { type: "azure-native:sql/v20230501preview:ElasticPool" }, { type: "azure-native:sql/v20230801:ElasticPool" }, { type: "azure-native:sql/v20230801preview:ElasticPool" }, { type: "azure-native:sql/v20240501preview:ElasticPool" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ElasticPool.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ElasticPool resource.
 */
export interface ElasticPoolArgs {
    /**
     * The name of the elastic pool.
     */
    elasticPoolName?: pulumi.Input<string>;
    /**
     * The number of secondary replicas associated with the elastic pool that are used to provide high availability. Applicable only to Hyperscale elastic pools.
     */
    highAvailabilityReplicaCount?: pulumi.Input<number>;
    /**
     * The license type to apply for this elastic pool.
     */
    licenseType?: pulumi.Input<string | types.enums.ElasticPoolLicenseType>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * Maintenance configuration id assigned to the elastic pool. This configuration defines the period when the maintenance updates will will occur.
     */
    maintenanceConfigurationId?: pulumi.Input<string>;
    /**
     * The storage limit for the database elastic pool in bytes.
     */
    maxSizeBytes?: pulumi.Input<number>;
    /**
     * Minimal capacity that serverless pool will not shrink below, if not paused
     */
    minCapacity?: pulumi.Input<number>;
    /**
     * The per database settings for the elastic pool.
     */
    perDatabaseSettings?: pulumi.Input<types.inputs.ElasticPoolPerDatabaseSettingsArgs>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
    /**
     * The elastic pool SKU.
     * 
     * The list of SKUs may vary by region and support offer. To determine the SKUs (including the SKU name, tier/edition, family, and capacity) that are available to your subscription in an Azure region, use the `Capabilities_ListByLocation` REST API or the following command:
     * 
     * ```azurecli
     * az sql elastic-pool list-editions -l <location> -o table
     * ````
     */
    sku?: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Whether or not this elastic pool is zone redundant, which means the replicas of this elastic pool will be spread across multiple availability zones.
     */
    zoneRedundant?: pulumi.Input<boolean>;
}