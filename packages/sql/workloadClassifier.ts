import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Workload classifier operations for a data warehouse
 * Azure REST API version: 2021-11-01. Prior API version in Azure Native 1.x: 2020-11-01-preview.
 *
 * Other available API versions: 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01-preview.
 */
export class WorkloadClassifier extends pulumi.CustomResource {
    /**
     * Get an existing WorkloadClassifier resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WorkloadClassifier {
        return new WorkloadClassifier(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sql:WorkloadClassifier';

    /**
     * Returns true if the given object is an instance of WorkloadClassifier.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WorkloadClassifier {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WorkloadClassifier.__pulumiType;
    }

    /**
     * The workload classifier context.
     */
    public readonly context!: pulumi.Output<string | undefined>;
    /**
     * The workload classifier end time for classification.
     */
    public readonly endTime!: pulumi.Output<string | undefined>;
    /**
     * The workload classifier importance.
     */
    public readonly importance!: pulumi.Output<string | undefined>;
    /**
     * The workload classifier label.
     */
    public readonly label!: pulumi.Output<string | undefined>;
    /**
     * The workload classifier member name.
     */
    public readonly memberName!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The workload classifier start time for classification.
     */
    public readonly startTime!: pulumi.Output<string | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a WorkloadClassifier resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkloadClassifierArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.databaseName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'databaseName'");
            }
            if ((!args || args.memberName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'memberName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverName'");
            }
            if ((!args || args.workloadGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workloadGroupName'");
            }
            resourceInputs["context"] = args ? args.context : undefined;
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["endTime"] = args ? args.endTime : undefined;
            resourceInputs["importance"] = args ? args.importance : undefined;
            resourceInputs["label"] = args ? args.label : undefined;
            resourceInputs["memberName"] = args ? args.memberName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["startTime"] = args ? args.startTime : undefined;
            resourceInputs["workloadClassifierName"] = args ? args.workloadClassifierName : undefined;
            resourceInputs["workloadGroupName"] = args ? args.workloadGroupName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["context"] = undefined /*out*/;
            resourceInputs["endTime"] = undefined /*out*/;
            resourceInputs["importance"] = undefined /*out*/;
            resourceInputs["label"] = undefined /*out*/;
            resourceInputs["memberName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["startTime"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql/v20190601preview:WorkloadClassifier" }, { type: "azure-native:sql/v20200202preview:WorkloadClassifier" }, { type: "azure-native:sql/v20200801preview:WorkloadClassifier" }, { type: "azure-native:sql/v20201101preview:WorkloadClassifier" }, { type: "azure-native:sql/v20210201preview:WorkloadClassifier" }, { type: "azure-native:sql/v20210501preview:WorkloadClassifier" }, { type: "azure-native:sql/v20210801preview:WorkloadClassifier" }, { type: "azure-native:sql/v20211101:WorkloadClassifier" }, { type: "azure-native:sql/v20211101preview:WorkloadClassifier" }, { type: "azure-native:sql/v20220201preview:WorkloadClassifier" }, { type: "azure-native:sql/v20220501preview:WorkloadClassifier" }, { type: "azure-native:sql/v20220801preview:WorkloadClassifier" }, { type: "azure-native:sql/v20221101preview:WorkloadClassifier" }, { type: "azure-native:sql/v20230201preview:WorkloadClassifier" }, { type: "azure-native:sql/v20230501preview:WorkloadClassifier" }, { type: "azure-native:sql/v20230801preview:WorkloadClassifier" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WorkloadClassifier.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WorkloadClassifier resource.
 */
export interface WorkloadClassifierArgs {
    /**
     * The workload classifier context.
     */
    context?: pulumi.Input<string>;
    /**
     * The name of the database.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The workload classifier end time for classification.
     */
    endTime?: pulumi.Input<string>;
    /**
     * The workload classifier importance.
     */
    importance?: pulumi.Input<string>;
    /**
     * The workload classifier label.
     */
    label?: pulumi.Input<string>;
    /**
     * The workload classifier member name.
     */
    memberName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
    /**
     * The workload classifier start time for classification.
     */
    startTime?: pulumi.Input<string>;
    /**
     * The name of the workload classifier to create/update.
     */
    workloadClassifierName?: pulumi.Input<string>;
    /**
     * The name of the workload group from which to receive the classifier from.
     */
    workloadGroupName: pulumi.Input<string>;
}