import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The task run that has the ARM resource and properties.
 * The task run will have the information of request and result of a run.
 *
 * Uses Azure REST API version 2019-06-01-preview. In version 2.x of the Azure Native provider, it used API version 2019-06-01-preview.
 *
 * Other available API versions: 2025-03-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native containerregistry [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class TaskRun extends pulumi.CustomResource {
    /**
     * Get an existing TaskRun resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): TaskRun {
        return new TaskRun(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:containerregistry:TaskRun';

    /**
     * Returns true if the given object is an instance of TaskRun.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TaskRun {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TaskRun.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * How the run should be forced to rerun even if the run request configuration has not changed
     */
    public readonly forceUpdateTag!: pulumi.Output<string | undefined>;
    /**
     * Identity for the resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.IdentityPropertiesResponse | undefined>;
    /**
     * The location of the resource
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of this task run
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The request (parameters) for the run
     */
    public readonly runRequest!: pulumi.Output<types.outputs.DockerBuildRequestResponse | types.outputs.EncodedTaskRunRequestResponse | types.outputs.FileTaskRunRequestResponse | types.outputs.TaskRunRequestResponse | undefined>;
    /**
     * The result of this task run
     */
    public /*out*/ readonly runResult!: pulumi.Output<types.outputs.RunResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a TaskRun resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TaskRunArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.registryName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'registryName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["forceUpdateTag"] = args ? args.forceUpdateTag : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["registryName"] = args ? args.registryName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["runRequest"] = args ? args.runRequest : undefined;
            resourceInputs["taskRunName"] = args ? args.taskRunName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["runResult"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["forceUpdateTag"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["runRequest"] = undefined /*out*/;
            resourceInputs["runResult"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:containerregistry/v20190601preview:TaskRun" }, { type: "azure-native:containerregistry/v20250301preview:TaskRun" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(TaskRun.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a TaskRun resource.
 */
export interface TaskRunArgs {
    /**
     * How the run should be forced to rerun even if the run request configuration has not changed
     */
    forceUpdateTag?: pulumi.Input<string>;
    /**
     * Identity for the resource.
     */
    identity?: pulumi.Input<types.inputs.IdentityPropertiesArgs>;
    /**
     * The location of the resource
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the container registry.
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The request (parameters) for the run
     */
    runRequest?: pulumi.Input<types.inputs.DockerBuildRequestArgs | types.inputs.EncodedTaskRunRequestArgs | types.inputs.FileTaskRunRequestArgs | types.inputs.TaskRunRequestArgs>;
    /**
     * The name of the task run.
     */
    taskRunName?: pulumi.Input<string>;
}