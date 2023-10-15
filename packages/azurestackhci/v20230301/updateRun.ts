import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Details of an Update run
 */
export class UpdateRun extends pulumi.CustomResource {
    /**
     * Get an existing UpdateRun resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): UpdateRun {
        return new UpdateRun(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:azurestackhci/v20230301:UpdateRun';

    /**
     * Returns true if the given object is an instance of UpdateRun.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is UpdateRun {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === UpdateRun.__pulumiType;
    }

    /**
     * More detailed description of the step.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Duration of the update run.
     */
    public readonly duration!: pulumi.Output<string | undefined>;
    /**
     * When the step reached a terminal state.
     */
    public readonly endTimeUtc!: pulumi.Output<string | undefined>;
    /**
     * Error message, specified if the step is in a failed state.
     */
    public readonly errorMessage!: pulumi.Output<string | undefined>;
    /**
     * Timestamp of the most recently completed step in the update run.
     */
    public readonly lastUpdatedTime!: pulumi.Output<string | undefined>;
    /**
     * Completion time of this step or the last completed sub-step.
     */
    public readonly lastUpdatedTimeUtc!: pulumi.Output<string | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state of the UpdateRuns proxy resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * When the step started, or empty if it has not started executing.
     */
    public readonly startTimeUtc!: pulumi.Output<string | undefined>;
    /**
     * State of the update run.
     */
    public readonly state!: pulumi.Output<string | undefined>;
    /**
     * Status of the step, bubbled up from the ECE action plan for installation attempts. Values are: 'Success', 'Error', 'InProgress', and 'Unknown status'.
     */
    public readonly status!: pulumi.Output<string | undefined>;
    /**
     * Recursive model for child steps of this step.
     */
    public readonly steps!: pulumi.Output<types.outputs.StepResponse[] | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Timestamp of the update run was started.
     */
    public readonly timeStarted!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a UpdateRun resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: UpdateRunArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.clusterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.updateName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'updateName'");
            }
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["duration"] = args ? args.duration : undefined;
            resourceInputs["endTimeUtc"] = args ? args.endTimeUtc : undefined;
            resourceInputs["errorMessage"] = args ? args.errorMessage : undefined;
            resourceInputs["lastUpdatedTime"] = args ? args.lastUpdatedTime : undefined;
            resourceInputs["lastUpdatedTimeUtc"] = args ? args.lastUpdatedTimeUtc : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["startTimeUtc"] = args ? args.startTimeUtc : undefined;
            resourceInputs["state"] = args ? args.state : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["steps"] = args ? args.steps : undefined;
            resourceInputs["timeStarted"] = args ? args.timeStarted : undefined;
            resourceInputs["updateName"] = args ? args.updateName : undefined;
            resourceInputs["updateRunName"] = args ? args.updateRunName : undefined;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["duration"] = undefined /*out*/;
            resourceInputs["endTimeUtc"] = undefined /*out*/;
            resourceInputs["errorMessage"] = undefined /*out*/;
            resourceInputs["lastUpdatedTime"] = undefined /*out*/;
            resourceInputs["lastUpdatedTimeUtc"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["startTimeUtc"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["steps"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["timeStarted"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:azurestackhci:UpdateRun" }, { type: "azure-native:azurestackhci/v20221201:UpdateRun" }, { type: "azure-native:azurestackhci/v20221215preview:UpdateRun" }, { type: "azure-native:azurestackhci/v20230201:UpdateRun" }, { type: "azure-native:azurestackhci/v20230601:UpdateRun" }, { type: "azure-native:azurestackhci/v20230801:UpdateRun" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(UpdateRun.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a UpdateRun resource.
 */
export interface UpdateRunArgs {
    /**
     * The name of the cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * More detailed description of the step.
     */
    description?: pulumi.Input<string>;
    /**
     * Duration of the update run.
     */
    duration?: pulumi.Input<string>;
    /**
     * When the step reached a terminal state.
     */
    endTimeUtc?: pulumi.Input<string>;
    /**
     * Error message, specified if the step is in a failed state.
     */
    errorMessage?: pulumi.Input<string>;
    /**
     * Timestamp of the most recently completed step in the update run.
     */
    lastUpdatedTime?: pulumi.Input<string>;
    /**
     * Completion time of this step or the last completed sub-step.
     */
    lastUpdatedTimeUtc?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Name of the step.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * When the step started, or empty if it has not started executing.
     */
    startTimeUtc?: pulumi.Input<string>;
    /**
     * State of the update run.
     */
    state?: pulumi.Input<string | types.enums.UpdateRunPropertiesState>;
    /**
     * Status of the step, bubbled up from the ECE action plan for installation attempts. Values are: 'Success', 'Error', 'InProgress', and 'Unknown status'.
     */
    status?: pulumi.Input<string>;
    /**
     * Recursive model for child steps of this step.
     */
    steps?: pulumi.Input<pulumi.Input<types.inputs.StepArgs>[]>;
    /**
     * Timestamp of the update run was started.
     */
    timeStarted?: pulumi.Input<string>;
    /**
     * The name of the Update
     */
    updateName: pulumi.Input<string>;
    /**
     * The name of the Update Run
     */
    updateRunName?: pulumi.Input<string>;
}
