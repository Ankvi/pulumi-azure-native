import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The task that has the ARM resource and task properties.
 * The task will have all information to schedule a run against it.
 */
export class Task extends pulumi.CustomResource {
    /**
     * Get an existing Task resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Task {
        return new Task(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:containerregistry/v20190401:Task';

    /**
     * Returns true if the given object is an instance of Task.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Task {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Task.__pulumiType;
    }

    /**
     * The machine configuration of the run agent.
     */
    public readonly agentConfiguration!: pulumi.Output<types.outputs.AgentPropertiesResponse | undefined>;
    /**
     * The creation date of task.
     */
    public /*out*/ readonly creationDate!: pulumi.Output<string>;
    /**
     * The properties that describes a set of credentials that will be used when this run is invoked.
     */
    public readonly credentials!: pulumi.Output<types.outputs.CredentialsResponse | undefined>;
    /**
     * Identity for the resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.IdentityPropertiesResponse | undefined>;
    /**
     * The location of the resource. This cannot be changed after the resource is created.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The platform properties against which the run has to happen.
     */
    public readonly platform!: pulumi.Output<types.outputs.PlatformPropertiesResponse>;
    /**
     * The provisioning state of the task.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The current status of task.
     */
    public readonly status!: pulumi.Output<string | undefined>;
    /**
     * The properties of a task step.
     */
    public readonly step!: pulumi.Output<types.outputs.DockerBuildStepResponse | types.outputs.EncodedTaskStepResponse | types.outputs.FileTaskStepResponse>;
    /**
     * The tags of the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Run timeout in seconds.
     */
    public readonly timeout!: pulumi.Output<number | undefined>;
    /**
     * The properties that describe all triggers for the task.
     */
    public readonly trigger!: pulumi.Output<types.outputs.TriggerPropertiesResponse | undefined>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Task resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TaskArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.platform === undefined) && !opts.urn) {
                throw new Error("Missing required property 'platform'");
            }
            if ((!args || args.registryName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'registryName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.step === undefined) && !opts.urn) {
                throw new Error("Missing required property 'step'");
            }
            resourceInputs["agentConfiguration"] = args ? args.agentConfiguration : undefined;
            resourceInputs["credentials"] = args ? args.credentials : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["platform"] = args ? args.platform : undefined;
            resourceInputs["registryName"] = args ? args.registryName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["step"] = args ? args.step : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["taskName"] = args ? args.taskName : undefined;
            resourceInputs["timeout"] = (args ? args.timeout : undefined) ?? 3600;
            resourceInputs["trigger"] = args ? (args.trigger ? pulumi.output(args.trigger).apply(types.inputs.triggerPropertiesArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["agentConfiguration"] = undefined /*out*/;
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["credentials"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["platform"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["step"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["timeout"] = undefined /*out*/;
            resourceInputs["trigger"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:containerregistry:Task" }, { type: "azure-native:containerregistry/v20180901:Task" }, { type: "azure-native:containerregistry/v20190601preview:Task" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Task.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Task resource.
 */
export interface TaskArgs {
    /**
     * The machine configuration of the run agent.
     */
    agentConfiguration?: pulumi.Input<types.inputs.AgentPropertiesArgs>;
    /**
     * The properties that describes a set of credentials that will be used when this run is invoked.
     */
    credentials?: pulumi.Input<types.inputs.CredentialsArgs>;
    /**
     * Identity for the resource.
     */
    identity?: pulumi.Input<types.inputs.IdentityPropertiesArgs>;
    /**
     * The location of the resource. This cannot be changed after the resource is created.
     */
    location?: pulumi.Input<string>;
    /**
     * The platform properties against which the run has to happen.
     */
    platform: pulumi.Input<types.inputs.PlatformPropertiesArgs>;
    /**
     * The name of the container registry.
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The current status of task.
     */
    status?: pulumi.Input<string | types.enums.TaskStatus>;
    /**
     * The properties of a task step.
     */
    step: pulumi.Input<types.inputs.DockerBuildStepArgs | types.inputs.EncodedTaskStepArgs | types.inputs.FileTaskStepArgs>;
    /**
     * The tags of the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the container registry task.
     */
    taskName?: pulumi.Input<string>;
    /**
     * Run timeout in seconds.
     */
    timeout?: pulumi.Input<number>;
    /**
     * The properties that describe all triggers for the task.
     */
    trigger?: pulumi.Input<types.inputs.TriggerPropertiesArgs>;
}
