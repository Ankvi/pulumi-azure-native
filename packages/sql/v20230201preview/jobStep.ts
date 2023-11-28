import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A job step.
 */
export class JobStep extends pulumi.CustomResource {
    /**
     * Get an existing JobStep resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): JobStep {
        return new JobStep(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sql/v20230201preview:JobStep';

    /**
     * Returns true if the given object is an instance of JobStep.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is JobStep {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === JobStep.__pulumiType;
    }

    /**
     * The action payload of the job step.
     */
    public readonly action!: pulumi.Output<types.outputs.JobStepActionResponse>;
    /**
     * The resource ID of the job credential that will be used to connect to the targets.
     */
    public readonly credential!: pulumi.Output<string>;
    /**
     * Execution options for the job step.
     */
    public readonly executionOptions!: pulumi.Output<types.outputs.JobStepExecutionOptionsResponse | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Output destination properties of the job step.
     */
    public readonly output!: pulumi.Output<types.outputs.JobStepOutputResponse | undefined>;
    /**
     * The job step's index within the job. If not specified when creating the job step, it will be created as the last step. If not specified when updating the job step, the step id is not modified.
     */
    public readonly stepId!: pulumi.Output<number | undefined>;
    /**
     * The resource ID of the target group that the job step will be executed on.
     */
    public readonly targetGroup!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a JobStep resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: JobStepArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.action === undefined) && !opts.urn) {
                throw new Error("Missing required property 'action'");
            }
            if ((!args || args.credential === undefined) && !opts.urn) {
                throw new Error("Missing required property 'credential'");
            }
            if ((!args || args.jobAgentName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'jobAgentName'");
            }
            if ((!args || args.jobName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'jobName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverName'");
            }
            if ((!args || args.targetGroup === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetGroup'");
            }
            resourceInputs["action"] = args ? (args.action ? pulumi.output(args.action).apply(types.inputs.jobStepActionArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["credential"] = args ? args.credential : undefined;
            resourceInputs["executionOptions"] = args ? (args.executionOptions ? pulumi.output(args.executionOptions).apply(types.inputs.jobStepExecutionOptionsArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["jobAgentName"] = args ? args.jobAgentName : undefined;
            resourceInputs["jobName"] = args ? args.jobName : undefined;
            resourceInputs["output"] = args ? (args.output ? pulumi.output(args.output).apply(types.inputs.jobStepOutputArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["stepId"] = args ? args.stepId : undefined;
            resourceInputs["stepName"] = args ? args.stepName : undefined;
            resourceInputs["targetGroup"] = args ? args.targetGroup : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["action"] = undefined /*out*/;
            resourceInputs["credential"] = undefined /*out*/;
            resourceInputs["executionOptions"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["output"] = undefined /*out*/;
            resourceInputs["stepId"] = undefined /*out*/;
            resourceInputs["targetGroup"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql:JobStep" }, { type: "azure-native:sql/v20170301preview:JobStep" }, { type: "azure-native:sql/v20200202preview:JobStep" }, { type: "azure-native:sql/v20200801preview:JobStep" }, { type: "azure-native:sql/v20201101preview:JobStep" }, { type: "azure-native:sql/v20210201preview:JobStep" }, { type: "azure-native:sql/v20210501preview:JobStep" }, { type: "azure-native:sql/v20210801preview:JobStep" }, { type: "azure-native:sql/v20211101:JobStep" }, { type: "azure-native:sql/v20211101preview:JobStep" }, { type: "azure-native:sql/v20220201preview:JobStep" }, { type: "azure-native:sql/v20220501preview:JobStep" }, { type: "azure-native:sql/v20220801preview:JobStep" }, { type: "azure-native:sql/v20221101preview:JobStep" }, { type: "azure-native:sql/v20230501preview:JobStep" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(JobStep.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a JobStep resource.
 */
export interface JobStepArgs {
    /**
     * The action payload of the job step.
     */
    action: pulumi.Input<types.inputs.JobStepActionArgs>;
    /**
     * The resource ID of the job credential that will be used to connect to the targets.
     */
    credential: pulumi.Input<string>;
    /**
     * Execution options for the job step.
     */
    executionOptions?: pulumi.Input<types.inputs.JobStepExecutionOptionsArgs>;
    /**
     * The name of the job agent.
     */
    jobAgentName: pulumi.Input<string>;
    /**
     * The name of the job.
     */
    jobName: pulumi.Input<string>;
    /**
     * Output destination properties of the job step.
     */
    output?: pulumi.Input<types.inputs.JobStepOutputArgs>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
    /**
     * The job step's index within the job. If not specified when creating the job step, it will be created as the last step. If not specified when updating the job step, the step id is not modified.
     */
    stepId?: pulumi.Input<number>;
    /**
     * The name of the job step.
     */
    stepName?: pulumi.Input<string>;
    /**
     * The resource ID of the target group that the job step will be executed on.
     */
    targetGroup: pulumi.Input<string>;
}
