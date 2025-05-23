import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Workload classifier operations for a data warehouse
 *
 * Uses Azure REST API version 2021-06-01. In version 2.x of the Azure Native provider, it used API version 2021-06-01.
 *
 * Other available API versions: 2021-04-01-preview, 2021-05-01, 2021-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native synapse [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class SqlPoolWorkloadClassifier extends pulumi.CustomResource {
    /**
     * Get an existing SqlPoolWorkloadClassifier resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SqlPoolWorkloadClassifier {
        return new SqlPoolWorkloadClassifier(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:synapse:SqlPoolWorkloadClassifier';

    /**
     * Returns true if the given object is an instance of SqlPoolWorkloadClassifier.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SqlPoolWorkloadClassifier {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SqlPoolWorkloadClassifier.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
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
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The workload classifier start time for classification.
     */
    public readonly startTime!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SqlPoolWorkloadClassifier resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SqlPoolWorkloadClassifierArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.memberName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'memberName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sqlPoolName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sqlPoolName'");
            }
            if ((!args || args.workloadGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workloadGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["context"] = args ? args.context : undefined;
            resourceInputs["endTime"] = args ? args.endTime : undefined;
            resourceInputs["importance"] = args ? args.importance : undefined;
            resourceInputs["label"] = args ? args.label : undefined;
            resourceInputs["memberName"] = args ? args.memberName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sqlPoolName"] = args ? args.sqlPoolName : undefined;
            resourceInputs["startTime"] = args ? args.startTime : undefined;
            resourceInputs["workloadClassifierName"] = args ? args.workloadClassifierName : undefined;
            resourceInputs["workloadGroupName"] = args ? args.workloadGroupName : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
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
        const aliasOpts = { aliases: [{ type: "azure-native:synapse/v20190601preview:SqlPoolWorkloadClassifier" }, { type: "azure-native:synapse/v20201201:SqlPoolWorkloadClassifier" }, { type: "azure-native:synapse/v20210301:SqlPoolWorkloadClassifier" }, { type: "azure-native:synapse/v20210401preview:SqlPoolWorkloadClassifier" }, { type: "azure-native:synapse/v20210501:SqlPoolWorkloadClassifier" }, { type: "azure-native:synapse/v20210601:SqlPoolWorkloadClassifier" }, { type: "azure-native:synapse/v20210601preview:SqlPoolWorkloadClassifier" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SqlPoolWorkloadClassifier.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SqlPoolWorkloadClassifier resource.
 */
export interface SqlPoolWorkloadClassifierArgs {
    /**
     * The workload classifier context.
     */
    context?: pulumi.Input<string>;
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
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * SQL pool name
     */
    sqlPoolName: pulumi.Input<string>;
    /**
     * The workload classifier start time for classification.
     */
    startTime?: pulumi.Input<string>;
    /**
     * The name of the workload classifier.
     */
    workloadClassifierName?: pulumi.Input<string>;
    /**
     * The name of the workload group.
     */
    workloadGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}