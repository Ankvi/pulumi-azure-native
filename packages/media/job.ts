import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A Job resource type. The progress and state can be obtained by polling a Job or subscribing to events using EventGrid.
 * Azure REST API version: 2022-07-01. Prior API version in Azure Native 1.x: 2020-05-01.
 */
export class Job extends pulumi.CustomResource {
    /**
     * Get an existing Job resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Job {
        return new Job(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:media:Job';

    /**
     * Returns true if the given object is an instance of Job.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Job {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Job.__pulumiType;
    }

    /**
     * Customer provided key, value pairs that will be returned in Job and JobOutput state events.
     */
    public readonly correlationData!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The UTC date and time when the customer has created the Job, in 'YYYY-MM-DDThh:mm:ssZ' format.
     */
    public /*out*/ readonly created!: pulumi.Output<string>;
    /**
     * Optional customer supplied description of the Job.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The UTC date and time at which this Job finished processing.
     */
    public /*out*/ readonly endTime!: pulumi.Output<string>;
    /**
     * The inputs for the Job.
     */
    public readonly input!: pulumi.Output<types.outputs.JobInputAssetResponse | types.outputs.JobInputClipResponse | types.outputs.JobInputHttpResponse | types.outputs.JobInputSequenceResponse | types.outputs.JobInputsResponse>;
    /**
     * The UTC date and time when the customer has last updated the Job, in 'YYYY-MM-DDThh:mm:ssZ' format.
     */
    public /*out*/ readonly lastModified!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The outputs for the Job.
     */
    public readonly outputs!: pulumi.Output<types.outputs.JobOutputAssetResponse[]>;
    /**
     * Priority with which the job should be processed. Higher priority jobs are processed before lower priority jobs. If not set, the default is normal.
     */
    public readonly priority!: pulumi.Output<string | undefined>;
    /**
     * The UTC date and time at which this Job began processing.
     */
    public /*out*/ readonly startTime!: pulumi.Output<string>;
    /**
     * The current state of the job.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * The system metadata relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Job resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: JobArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.input === undefined) && !opts.urn) {
                throw new Error("Missing required property 'input'");
            }
            if ((!args || args.outputs === undefined) && !opts.urn) {
                throw new Error("Missing required property 'outputs'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.transformName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'transformName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["correlationData"] = args ? args.correlationData : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["input"] = args ? args.input : undefined;
            resourceInputs["jobName"] = args ? args.jobName : undefined;
            resourceInputs["outputs"] = args ? args.outputs : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["transformName"] = args ? args.transformName : undefined;
            resourceInputs["created"] = undefined /*out*/;
            resourceInputs["endTime"] = undefined /*out*/;
            resourceInputs["lastModified"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["startTime"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["correlationData"] = undefined /*out*/;
            resourceInputs["created"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["endTime"] = undefined /*out*/;
            resourceInputs["input"] = undefined /*out*/;
            resourceInputs["lastModified"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["outputs"] = undefined /*out*/;
            resourceInputs["priority"] = undefined /*out*/;
            resourceInputs["startTime"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:media/v20180330preview:Job" }, { type: "azure-native:media/v20180601preview:Job" }, { type: "azure-native:media/v20180701:Job" }, { type: "azure-native:media/v20200501:Job" }, { type: "azure-native:media/v20210601:Job" }, { type: "azure-native:media/v20211101:Job" }, { type: "azure-native:media/v20220501preview:Job" }, { type: "azure-native:media/v20220701:Job" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Job.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Job resource.
 */
export interface JobArgs {
    /**
     * The Media Services account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * Customer provided key, value pairs that will be returned in Job and JobOutput state events.
     */
    correlationData?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Optional customer supplied description of the Job.
     */
    description?: pulumi.Input<string>;
    /**
     * The inputs for the Job.
     */
    input: pulumi.Input<types.inputs.JobInputAssetArgs | types.inputs.JobInputClipArgs | types.inputs.JobInputHttpArgs | types.inputs.JobInputSequenceArgs | types.inputs.JobInputsArgs>;
    /**
     * The Job name.
     */
    jobName?: pulumi.Input<string>;
    /**
     * The outputs for the Job.
     */
    outputs: pulumi.Input<pulumi.Input<types.inputs.JobOutputAssetArgs>[]>;
    /**
     * Priority with which the job should be processed. Higher priority jobs are processed before lower priority jobs. If not set, the default is normal.
     */
    priority?: pulumi.Input<string | types.enums.Priority>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Transform name.
     */
    transformName: pulumi.Input<string>;
}
