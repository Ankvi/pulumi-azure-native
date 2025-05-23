import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A Big Data pool
 *
 * Uses Azure REST API version 2021-06-01. In version 2.x of the Azure Native provider, it used API version 2021-06-01.
 *
 * Other available API versions: 2021-04-01-preview, 2021-05-01, 2021-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native synapse [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class BigDataPool extends pulumi.CustomResource {
    /**
     * Get an existing BigDataPool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): BigDataPool {
        return new BigDataPool(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:synapse:BigDataPool';

    /**
     * Returns true if the given object is an instance of BigDataPool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BigDataPool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BigDataPool.__pulumiType;
    }

    /**
     * Auto-pausing properties
     */
    public readonly autoPause!: pulumi.Output<types.outputs.AutoPausePropertiesResponse | undefined>;
    /**
     * Auto-scaling properties
     */
    public readonly autoScale!: pulumi.Output<types.outputs.AutoScalePropertiesResponse | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The cache size
     */
    public readonly cacheSize!: pulumi.Output<number | undefined>;
    /**
     * The time when the Big Data pool was created.
     */
    public /*out*/ readonly creationDate!: pulumi.Output<string>;
    /**
     * List of custom libraries/packages associated with the spark pool.
     */
    public readonly customLibraries!: pulumi.Output<types.outputs.LibraryInfoResponse[] | undefined>;
    /**
     * The default folder where Spark logs will be written.
     */
    public readonly defaultSparkLogFolder!: pulumi.Output<string | undefined>;
    /**
     * Dynamic Executor Allocation
     */
    public readonly dynamicExecutorAllocation!: pulumi.Output<types.outputs.DynamicExecutorAllocationResponse | undefined>;
    /**
     * Whether autotune is required or not.
     */
    public readonly isAutotuneEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * Whether compute isolation is required or not.
     */
    public readonly isComputeIsolationEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * The time when the Big Data pool was updated successfully.
     */
    public /*out*/ readonly lastSucceededTimestamp!: pulumi.Output<string>;
    /**
     * Library version requirements
     */
    public readonly libraryRequirements!: pulumi.Output<types.outputs.LibraryRequirementsResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The number of nodes in the Big Data pool.
     */
    public readonly nodeCount!: pulumi.Output<number | undefined>;
    /**
     * The level of compute power that each node in the Big Data pool has.
     */
    public readonly nodeSize!: pulumi.Output<string | undefined>;
    /**
     * The kind of nodes that the Big Data pool provides.
     */
    public readonly nodeSizeFamily!: pulumi.Output<string | undefined>;
    /**
     * The state of the Big Data pool.
     */
    public readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * Whether session level packages enabled.
     */
    public readonly sessionLevelPackagesEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * Spark configuration file to specify additional properties
     */
    public readonly sparkConfigProperties!: pulumi.Output<types.outputs.SparkConfigPropertiesResponse | undefined>;
    /**
     * The Spark events folder
     */
    public readonly sparkEventsFolder!: pulumi.Output<string | undefined>;
    /**
     * The Apache Spark version.
     */
    public readonly sparkVersion!: pulumi.Output<string | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a BigDataPool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BigDataPoolArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["autoPause"] = args ? args.autoPause : undefined;
            resourceInputs["autoScale"] = args ? args.autoScale : undefined;
            resourceInputs["bigDataPoolName"] = args ? args.bigDataPoolName : undefined;
            resourceInputs["cacheSize"] = args ? args.cacheSize : undefined;
            resourceInputs["customLibraries"] = args ? args.customLibraries : undefined;
            resourceInputs["defaultSparkLogFolder"] = args ? args.defaultSparkLogFolder : undefined;
            resourceInputs["dynamicExecutorAllocation"] = args ? args.dynamicExecutorAllocation : undefined;
            resourceInputs["force"] = args ? args.force : undefined;
            resourceInputs["isAutotuneEnabled"] = args ? args.isAutotuneEnabled : undefined;
            resourceInputs["isComputeIsolationEnabled"] = args ? args.isComputeIsolationEnabled : undefined;
            resourceInputs["libraryRequirements"] = args ? args.libraryRequirements : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["nodeCount"] = args ? args.nodeCount : undefined;
            resourceInputs["nodeSize"] = args ? args.nodeSize : undefined;
            resourceInputs["nodeSizeFamily"] = args ? args.nodeSizeFamily : undefined;
            resourceInputs["provisioningState"] = args ? args.provisioningState : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sessionLevelPackagesEnabled"] = args ? args.sessionLevelPackagesEnabled : undefined;
            resourceInputs["sparkConfigProperties"] = args ? args.sparkConfigProperties : undefined;
            resourceInputs["sparkEventsFolder"] = args ? args.sparkEventsFolder : undefined;
            resourceInputs["sparkVersion"] = args ? args.sparkVersion : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["lastSucceededTimestamp"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["autoPause"] = undefined /*out*/;
            resourceInputs["autoScale"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["cacheSize"] = undefined /*out*/;
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["customLibraries"] = undefined /*out*/;
            resourceInputs["defaultSparkLogFolder"] = undefined /*out*/;
            resourceInputs["dynamicExecutorAllocation"] = undefined /*out*/;
            resourceInputs["isAutotuneEnabled"] = undefined /*out*/;
            resourceInputs["isComputeIsolationEnabled"] = undefined /*out*/;
            resourceInputs["lastSucceededTimestamp"] = undefined /*out*/;
            resourceInputs["libraryRequirements"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nodeCount"] = undefined /*out*/;
            resourceInputs["nodeSize"] = undefined /*out*/;
            resourceInputs["nodeSizeFamily"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sessionLevelPackagesEnabled"] = undefined /*out*/;
            resourceInputs["sparkConfigProperties"] = undefined /*out*/;
            resourceInputs["sparkEventsFolder"] = undefined /*out*/;
            resourceInputs["sparkVersion"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:synapse/v20190601preview:BigDataPool" }, { type: "azure-native:synapse/v20201201:BigDataPool" }, { type: "azure-native:synapse/v20210301:BigDataPool" }, { type: "azure-native:synapse/v20210401preview:BigDataPool" }, { type: "azure-native:synapse/v20210501:BigDataPool" }, { type: "azure-native:synapse/v20210601:BigDataPool" }, { type: "azure-native:synapse/v20210601preview:BigDataPool" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(BigDataPool.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a BigDataPool resource.
 */
export interface BigDataPoolArgs {
    /**
     * Auto-pausing properties
     */
    autoPause?: pulumi.Input<types.inputs.AutoPausePropertiesArgs>;
    /**
     * Auto-scaling properties
     */
    autoScale?: pulumi.Input<types.inputs.AutoScalePropertiesArgs>;
    /**
     * Big Data pool name
     */
    bigDataPoolName?: pulumi.Input<string>;
    /**
     * The cache size
     */
    cacheSize?: pulumi.Input<number>;
    /**
     * List of custom libraries/packages associated with the spark pool.
     */
    customLibraries?: pulumi.Input<pulumi.Input<types.inputs.LibraryInfoArgs>[]>;
    /**
     * The default folder where Spark logs will be written.
     */
    defaultSparkLogFolder?: pulumi.Input<string>;
    /**
     * Dynamic Executor Allocation
     */
    dynamicExecutorAllocation?: pulumi.Input<types.inputs.DynamicExecutorAllocationArgs>;
    /**
     * Whether to stop any running jobs in the Big Data pool
     */
    force?: pulumi.Input<boolean>;
    /**
     * Whether autotune is required or not.
     */
    isAutotuneEnabled?: pulumi.Input<boolean>;
    /**
     * Whether compute isolation is required or not.
     */
    isComputeIsolationEnabled?: pulumi.Input<boolean>;
    /**
     * Library version requirements
     */
    libraryRequirements?: pulumi.Input<types.inputs.LibraryRequirementsArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The number of nodes in the Big Data pool.
     */
    nodeCount?: pulumi.Input<number>;
    /**
     * The level of compute power that each node in the Big Data pool has.
     */
    nodeSize?: pulumi.Input<string | types.enums.NodeSize>;
    /**
     * The kind of nodes that the Big Data pool provides.
     */
    nodeSizeFamily?: pulumi.Input<string | types.enums.NodeSizeFamily>;
    /**
     * The state of the Big Data pool.
     */
    provisioningState?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Whether session level packages enabled.
     */
    sessionLevelPackagesEnabled?: pulumi.Input<boolean>;
    /**
     * Spark configuration file to specify additional properties
     */
    sparkConfigProperties?: pulumi.Input<types.inputs.SparkConfigPropertiesArgs>;
    /**
     * The Spark events folder
     */
    sparkEventsFolder?: pulumi.Input<string>;
    /**
     * The Apache Spark version.
     */
    sparkVersion?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}