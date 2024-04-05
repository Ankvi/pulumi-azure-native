import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Workload group operations for a data warehouse
 */
export class WorkloadGroup extends pulumi.CustomResource {
    /**
     * Get an existing WorkloadGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WorkloadGroup {
        return new WorkloadGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sql/v20230501preview:WorkloadGroup';

    /**
     * Returns true if the given object is an instance of WorkloadGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WorkloadGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WorkloadGroup.__pulumiType;
    }

    /**
     * The workload group importance level.
     */
    public readonly importance!: pulumi.Output<string | undefined>;
    /**
     * The workload group cap percentage resource.
     */
    public readonly maxResourcePercent!: pulumi.Output<number>;
    /**
     * The workload group request maximum grant percentage.
     */
    public readonly maxResourcePercentPerRequest!: pulumi.Output<number | undefined>;
    /**
     * The workload group minimum percentage resource.
     */
    public readonly minResourcePercent!: pulumi.Output<number>;
    /**
     * The workload group request minimum grant percentage.
     */
    public readonly minResourcePercentPerRequest!: pulumi.Output<number>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The workload group query execution timeout.
     */
    public readonly queryExecutionTimeout!: pulumi.Output<number | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a WorkloadGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkloadGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.databaseName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'databaseName'");
            }
            if ((!args || args.maxResourcePercent === undefined) && !opts.urn) {
                throw new Error("Missing required property 'maxResourcePercent'");
            }
            if ((!args || args.minResourcePercent === undefined) && !opts.urn) {
                throw new Error("Missing required property 'minResourcePercent'");
            }
            if ((!args || args.minResourcePercentPerRequest === undefined) && !opts.urn) {
                throw new Error("Missing required property 'minResourcePercentPerRequest'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverName'");
            }
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["importance"] = args ? args.importance : undefined;
            resourceInputs["maxResourcePercent"] = args ? args.maxResourcePercent : undefined;
            resourceInputs["maxResourcePercentPerRequest"] = args ? args.maxResourcePercentPerRequest : undefined;
            resourceInputs["minResourcePercent"] = args ? args.minResourcePercent : undefined;
            resourceInputs["minResourcePercentPerRequest"] = args ? args.minResourcePercentPerRequest : undefined;
            resourceInputs["queryExecutionTimeout"] = args ? args.queryExecutionTimeout : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["workloadGroupName"] = args ? args.workloadGroupName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["importance"] = undefined /*out*/;
            resourceInputs["maxResourcePercent"] = undefined /*out*/;
            resourceInputs["maxResourcePercentPerRequest"] = undefined /*out*/;
            resourceInputs["minResourcePercent"] = undefined /*out*/;
            resourceInputs["minResourcePercentPerRequest"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["queryExecutionTimeout"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql:WorkloadGroup" }, { type: "azure-native:sql/v20190601preview:WorkloadGroup" }, { type: "azure-native:sql/v20200202preview:WorkloadGroup" }, { type: "azure-native:sql/v20200801preview:WorkloadGroup" }, { type: "azure-native:sql/v20201101preview:WorkloadGroup" }, { type: "azure-native:sql/v20210201preview:WorkloadGroup" }, { type: "azure-native:sql/v20210501preview:WorkloadGroup" }, { type: "azure-native:sql/v20210801preview:WorkloadGroup" }, { type: "azure-native:sql/v20211101:WorkloadGroup" }, { type: "azure-native:sql/v20211101preview:WorkloadGroup" }, { type: "azure-native:sql/v20220201preview:WorkloadGroup" }, { type: "azure-native:sql/v20220501preview:WorkloadGroup" }, { type: "azure-native:sql/v20220801preview:WorkloadGroup" }, { type: "azure-native:sql/v20221101preview:WorkloadGroup" }, { type: "azure-native:sql/v20230201preview:WorkloadGroup" }, { type: "azure-native:sql/v20230801preview:WorkloadGroup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WorkloadGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WorkloadGroup resource.
 */
export interface WorkloadGroupArgs {
    /**
     * The name of the database.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The workload group importance level.
     */
    importance?: pulumi.Input<string>;
    /**
     * The workload group cap percentage resource.
     */
    maxResourcePercent: pulumi.Input<number>;
    /**
     * The workload group request maximum grant percentage.
     */
    maxResourcePercentPerRequest?: pulumi.Input<number>;
    /**
     * The workload group minimum percentage resource.
     */
    minResourcePercent: pulumi.Input<number>;
    /**
     * The workload group request minimum grant percentage.
     */
    minResourcePercentPerRequest: pulumi.Input<number>;
    /**
     * The workload group query execution timeout.
     */
    queryExecutionTimeout?: pulumi.Input<number>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
    /**
     * The name of the workload group.
     */
    workloadGroupName?: pulumi.Input<string>;
}