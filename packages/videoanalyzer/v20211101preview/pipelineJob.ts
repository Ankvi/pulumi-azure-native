import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Pipeline job represents a unique instance of a batch topology, used for offline processing of selected portions of archived content.
 */
export class PipelineJob extends pulumi.CustomResource {
    /**
     * Get an existing PipelineJob resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PipelineJob {
        return new PipelineJob(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:videoanalyzer/v20211101preview:PipelineJob';

    /**
     * Returns true if the given object is an instance of PipelineJob.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PipelineJob {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PipelineJob.__pulumiType;
    }

    /**
     * An optional description for the pipeline.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Details about the error, in case the pipeline job fails.
     */
    public /*out*/ readonly error!: pulumi.Output<types.outputs.videoanalyzer.v20211101preview.PipelineJobErrorResponse>;
    /**
     * The date-time by when this pipeline job will be automatically deleted from your account.
     */
    public /*out*/ readonly expiration!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * List of the instance level parameter values for the user-defined topology parameters. A pipeline can only define or override parameters values for parameters which have been declared in the referenced topology. Topology parameters without a default value must be defined. Topology parameters with a default value can be optionally be overridden.
     */
    public readonly parameters!: pulumi.Output<types.outputs.videoanalyzer.v20211101preview.ParameterDefinitionResponse[] | undefined>;
    /**
     * Current state of the pipeline (read-only).
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.videoanalyzer.v20211101preview.SystemDataResponse>;
    /**
     * Reference to an existing pipeline topology. When activated, this pipeline job will process content according to the pipeline topology definition.
     */
    public readonly topologyName!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a PipelineJob resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PipelineJobArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.topologyName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'topologyName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["parameters"] = args ? args.parameters : undefined;
            resourceInputs["pipelineJobName"] = args ? args.pipelineJobName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["topologyName"] = args ? args.topologyName : undefined;
            resourceInputs["error"] = undefined /*out*/;
            resourceInputs["expiration"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["error"] = undefined /*out*/;
            resourceInputs["expiration"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["parameters"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["topologyName"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:videoanalyzer:PipelineJob" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PipelineJob.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PipelineJob resource.
 */
export interface PipelineJobArgs {
    /**
     * The Azure Video Analyzer account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * An optional description for the pipeline.
     */
    description?: pulumi.Input<string>;
    /**
     * List of the instance level parameter values for the user-defined topology parameters. A pipeline can only define or override parameters values for parameters which have been declared in the referenced topology. Topology parameters without a default value must be defined. Topology parameters with a default value can be optionally be overridden.
     */
    parameters?: pulumi.Input<pulumi.Input<types.inputs.videoanalyzer.v20211101preview.ParameterDefinitionArgs>[]>;
    /**
     * The pipeline job name.
     */
    pipelineJobName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Reference to an existing pipeline topology. When activated, this pipeline job will process content according to the pipeline topology definition.
     */
    topologyName: pulumi.Input<string>;
}
