import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Workload group operations for a sql pool
 * Azure REST API version: 2021-06-01. Prior API version in Azure Native 1.x: 2021-03-01.
 *
 * Other available API versions: 2021-06-01-preview.
 */
export class SqlPoolWorkloadGroup extends pulumi.CustomResource {
    /**
     * Get an existing SqlPoolWorkloadGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SqlPoolWorkloadGroup {
        return new SqlPoolWorkloadGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:synapse:SqlPoolWorkloadGroup';

    /**
     * Returns true if the given object is an instance of SqlPoolWorkloadGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SqlPoolWorkloadGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SqlPoolWorkloadGroup.__pulumiType;
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
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The workload group query execution timeout.
     */
    public readonly queryExecutionTimeout!: pulumi.Output<number | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SqlPoolWorkloadGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SqlPoolWorkloadGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
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
            if ((!args || args.sqlPoolName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sqlPoolName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["importance"] = args ? args.importance : undefined;
            resourceInputs["maxResourcePercent"] = args ? args.maxResourcePercent : undefined;
            resourceInputs["maxResourcePercentPerRequest"] = args ? args.maxResourcePercentPerRequest : undefined;
            resourceInputs["minResourcePercent"] = args ? args.minResourcePercent : undefined;
            resourceInputs["minResourcePercentPerRequest"] = args ? args.minResourcePercentPerRequest : undefined;
            resourceInputs["queryExecutionTimeout"] = args ? args.queryExecutionTimeout : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sqlPoolName"] = args ? args.sqlPoolName : undefined;
            resourceInputs["workloadGroupName"] = args ? args.workloadGroupName : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
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
        const aliasOpts = { aliases: [{ type: "azure-native:synapse/v20190601preview:SqlPoolWorkloadGroup" }, { type: "azure-native:synapse/v20201201:SqlPoolWorkloadGroup" }, { type: "azure-native:synapse/v20210301:SqlPoolWorkloadGroup" }, { type: "azure-native:synapse/v20210401preview:SqlPoolWorkloadGroup" }, { type: "azure-native:synapse/v20210501:SqlPoolWorkloadGroup" }, { type: "azure-native:synapse/v20210601:SqlPoolWorkloadGroup" }, { type: "azure-native:synapse/v20210601preview:SqlPoolWorkloadGroup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SqlPoolWorkloadGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SqlPoolWorkloadGroup resource.
 */
export interface SqlPoolWorkloadGroupArgs {
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
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * SQL pool name
     */
    sqlPoolName: pulumi.Input<string>;
    /**
     * The name of the workload group.
     */
    workloadGroupName?: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}