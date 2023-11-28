import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A Pipeline resource belonging to an Instance resource.
 * Azure REST API version: 2023-10-04-preview.
 */
export class Pipeline extends pulumi.CustomResource {
    /**
     * Get an existing Pipeline resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Pipeline {
        return new Pipeline(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:iotoperationsdataprocessor:Pipeline';

    /**
     * Returns true if the given object is an instance of Pipeline.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Pipeline {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Pipeline.__pulumiType;
    }

    /**
     * Detailed description of the Pipeline.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Flag indicating whether the pipeline should be running or not.
     */
    public readonly enabled!: pulumi.Output<boolean>;
    /**
     * Edge location of the resource.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse>;
    /**
     * Information about where to pull input data from.
     */
    public readonly input!: pulumi.Output<types.outputs.PipelineInputResponse>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The status of the last operation.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Map of stage ids to stage configurations for all pipeline processing and output stages.
     */
    public readonly stages!: pulumi.Output<{[key: string]: types.outputs.PipelineStageResponse}>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Pipeline resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PipelineArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.enabled === undefined) && !opts.urn) {
                throw new Error("Missing required property 'enabled'");
            }
            if ((!args || args.extendedLocation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'extendedLocation'");
            }
            if ((!args || args.input === undefined) && !opts.urn) {
                throw new Error("Missing required property 'input'");
            }
            if ((!args || args.instanceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.stages === undefined) && !opts.urn) {
                throw new Error("Missing required property 'stages'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["input"] = args ? args.input : undefined;
            resourceInputs["instanceName"] = args ? args.instanceName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["pipelineName"] = args ? args.pipelineName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["stages"] = args ? args.stages : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["enabled"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["input"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["stages"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:iotoperationsdataprocessor/v20231004preview:Pipeline" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Pipeline.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Pipeline resource.
 */
export interface PipelineArgs {
    /**
     * Detailed description of the Pipeline.
     */
    description?: pulumi.Input<string>;
    /**
     * Flag indicating whether the pipeline should be running or not.
     */
    enabled: pulumi.Input<boolean>;
    /**
     * Edge location of the resource.
     */
    extendedLocation: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * Information about where to pull input data from.
     */
    input: pulumi.Input<types.inputs.PipelineInputArgs>;
    /**
     * Name of instance.
     */
    instanceName: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Name of pipeline
     */
    pipelineName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Map of stage ids to stage configurations for all pipeline processing and output stages.
     */
    stages: pulumi.Input<{[key: string]: pulumi.Input<types.inputs.PipelineStageArgs>}>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
