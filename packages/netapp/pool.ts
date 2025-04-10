import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Capacity pool resource
 *
 * Uses Azure REST API version 2022-11-01. In version 1.x of the Azure Native provider, it used API version 2020-12-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-05-01, 2023-05-01-preview, 2023-07-01, 2023-07-01-preview, 2023-11-01, 2023-11-01-preview, 2024-01-01, 2024-03-01, 2024-03-01-preview, 2024-05-01, 2024-05-01-preview, 2024-07-01, 2024-07-01-preview, 2024-09-01, 2024-09-01-preview.
 */
export class Pool extends pulumi.CustomResource {
    /**
     * Get an existing Pool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Pool {
        return new Pool(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:netapp:Pool';

    /**
     * Returns true if the given object is an instance of Pool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Pool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Pool.__pulumiType;
    }

    /**
     * If enabled (true) the pool can contain cool Access enabled volumes.
     */
    public readonly coolAccess!: pulumi.Output<boolean | undefined>;
    /**
     * Encryption type of the capacity pool, set encryption type for data at rest for this pool and all volumes in it. This value can only be set when creating new pool.
     */
    public readonly encryptionType!: pulumi.Output<string | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * UUID v4 used to identify the Pool
     */
    public /*out*/ readonly poolId!: pulumi.Output<string>;
    /**
     * Azure lifecycle management
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The qos type of the pool
     */
    public readonly qosType!: pulumi.Output<string | undefined>;
    /**
     * The service level of the file system
     */
    public readonly serviceLevel!: pulumi.Output<string>;
    /**
     * Provisioned size of the pool (in bytes). Allowed values are in 1TiB chunks (value must be multiply of 4398046511104).
     */
    public readonly size!: pulumi.Output<number>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Total throughput of pool in MiB/s
     */
    public /*out*/ readonly totalThroughputMibps!: pulumi.Output<number>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Utilized throughput of pool in MiB/s
     */
    public /*out*/ readonly utilizedThroughputMibps!: pulumi.Output<number>;

    /**
     * Create a Pool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PoolArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceLevel === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceLevel'");
            }
            if ((!args || args.size === undefined) && !opts.urn) {
                throw new Error("Missing required property 'size'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["coolAccess"] = (args ? args.coolAccess : undefined) ?? false;
            resourceInputs["encryptionType"] = (args ? args.encryptionType : undefined) ?? "Single";
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["poolName"] = args ? args.poolName : undefined;
            resourceInputs["qosType"] = (args ? args.qosType : undefined) ?? "Auto";
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceLevel"] = args ? args.serviceLevel : undefined;
            resourceInputs["size"] = (args ? args.size : undefined) ?? 4398046511104;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["poolId"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["totalThroughputMibps"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["utilizedThroughputMibps"] = undefined /*out*/;
        } else {
            resourceInputs["coolAccess"] = undefined /*out*/;
            resourceInputs["encryptionType"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["poolId"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["qosType"] = undefined /*out*/;
            resourceInputs["serviceLevel"] = undefined /*out*/;
            resourceInputs["size"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["totalThroughputMibps"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["utilizedThroughputMibps"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:netapp/v20170815:Pool" }, { type: "azure-native:netapp/v20190501:Pool" }, { type: "azure-native:netapp/v20190601:Pool" }, { type: "azure-native:netapp/v20190701:Pool" }, { type: "azure-native:netapp/v20190801:Pool" }, { type: "azure-native:netapp/v20191001:Pool" }, { type: "azure-native:netapp/v20191101:Pool" }, { type: "azure-native:netapp/v20200201:Pool" }, { type: "azure-native:netapp/v20200301:Pool" }, { type: "azure-native:netapp/v20200501:Pool" }, { type: "azure-native:netapp/v20200601:Pool" }, { type: "azure-native:netapp/v20200701:Pool" }, { type: "azure-native:netapp/v20200801:Pool" }, { type: "azure-native:netapp/v20200901:Pool" }, { type: "azure-native:netapp/v20201101:Pool" }, { type: "azure-native:netapp/v20201201:Pool" }, { type: "azure-native:netapp/v20210201:Pool" }, { type: "azure-native:netapp/v20210401:Pool" }, { type: "azure-native:netapp/v20210401preview:Pool" }, { type: "azure-native:netapp/v20210601:Pool" }, { type: "azure-native:netapp/v20210801:Pool" }, { type: "azure-native:netapp/v20211001:Pool" }, { type: "azure-native:netapp/v20220101:Pool" }, { type: "azure-native:netapp/v20220301:Pool" }, { type: "azure-native:netapp/v20220501:Pool" }, { type: "azure-native:netapp/v20220901:Pool" }, { type: "azure-native:netapp/v20221101:Pool" }, { type: "azure-native:netapp/v20221101preview:Pool" }, { type: "azure-native:netapp/v20230501:Pool" }, { type: "azure-native:netapp/v20230501preview:Pool" }, { type: "azure-native:netapp/v20230701:Pool" }, { type: "azure-native:netapp/v20230701preview:Pool" }, { type: "azure-native:netapp/v20231101:Pool" }, { type: "azure-native:netapp/v20231101preview:Pool" }, { type: "azure-native:netapp/v20240101:Pool" }, { type: "azure-native:netapp/v20240301:Pool" }, { type: "azure-native:netapp/v20240301preview:Pool" }, { type: "azure-native:netapp/v20240501:Pool" }, { type: "azure-native:netapp/v20240501preview:Pool" }, { type: "azure-native:netapp/v20240701:Pool" }, { type: "azure-native:netapp/v20240701preview:Pool" }, { type: "azure-native:netapp/v20240901:Pool" }, { type: "azure-native:netapp/v20240901preview:Pool" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Pool.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Pool resource.
 */
export interface PoolArgs {
    /**
     * The name of the NetApp account
     */
    accountName: pulumi.Input<string>;
    /**
     * If enabled (true) the pool can contain cool Access enabled volumes.
     */
    coolAccess?: pulumi.Input<boolean>;
    /**
     * Encryption type of the capacity pool, set encryption type for data at rest for this pool and all volumes in it. This value can only be set when creating new pool.
     */
    encryptionType?: pulumi.Input<string | types.enums.EncryptionType>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the capacity pool
     */
    poolName?: pulumi.Input<string>;
    /**
     * The qos type of the pool
     */
    qosType?: pulumi.Input<string | types.enums.QosType>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The service level of the file system
     */
    serviceLevel: pulumi.Input<string | types.enums.ServiceLevel>;
    /**
     * Provisioned size of the pool (in bytes). Allowed values are in 1TiB chunks (value must be multiply of 4398046511104).
     */
    size: pulumi.Input<number>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}