import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An object that represents an import pipeline for a container registry.
 * Azure REST API version: 2023-01-01-preview. Prior API version in Azure Native 1.x: 2020-11-01-preview.
 *
 * Other available API versions: 2023-06-01-preview, 2023-08-01-preview.
 */
export class ImportPipeline extends pulumi.CustomResource {
    /**
     * Get an existing ImportPipeline resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ImportPipeline {
        return new ImportPipeline(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:containerregistry:ImportPipeline';

    /**
     * Returns true if the given object is an instance of ImportPipeline.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ImportPipeline {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ImportPipeline.__pulumiType;
    }

    /**
     * The identity of the import pipeline.
     */
    public readonly identity!: pulumi.Output<types.outputs.IdentityPropertiesResponse | undefined>;
    /**
     * The location of the import pipeline.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The list of all options configured for the pipeline.
     */
    public readonly options!: pulumi.Output<string[] | undefined>;
    /**
     * The provisioning state of the pipeline at the time the operation was called.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The source properties of the import pipeline.
     */
    public readonly source!: pulumi.Output<types.outputs.ImportPipelineSourcePropertiesResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The properties that describe the trigger of the import pipeline.
     */
    public readonly trigger!: pulumi.Output<types.outputs.PipelineTriggerPropertiesResponse | undefined>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ImportPipeline resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ImportPipelineArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.registryName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'registryName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.source === undefined) && !opts.urn) {
                throw new Error("Missing required property 'source'");
            }
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["importPipelineName"] = args ? args.importPipelineName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["options"] = args ? args.options : undefined;
            resourceInputs["registryName"] = args ? args.registryName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["source"] = args ? (args.source ? pulumi.output(args.source).apply(types.inputs.importPipelineSourcePropertiesArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["trigger"] = args ? (args.trigger ? pulumi.output(args.trigger).apply(types.inputs.pipelineTriggerPropertiesArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["options"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["source"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["trigger"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:containerregistry/v20191201preview:ImportPipeline" }, { type: "azure-native:containerregistry/v20201101preview:ImportPipeline" }, { type: "azure-native:containerregistry/v20210601preview:ImportPipeline" }, { type: "azure-native:containerregistry/v20210801preview:ImportPipeline" }, { type: "azure-native:containerregistry/v20211201preview:ImportPipeline" }, { type: "azure-native:containerregistry/v20220201preview:ImportPipeline" }, { type: "azure-native:containerregistry/v20230101preview:ImportPipeline" }, { type: "azure-native:containerregistry/v20230601preview:ImportPipeline" }, { type: "azure-native:containerregistry/v20230801preview:ImportPipeline" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ImportPipeline.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ImportPipeline resource.
 */
export interface ImportPipelineArgs {
    /**
     * The identity of the import pipeline.
     */
    identity?: pulumi.Input<types.inputs.IdentityPropertiesArgs>;
    /**
     * The name of the import pipeline.
     */
    importPipelineName?: pulumi.Input<string>;
    /**
     * The location of the import pipeline.
     */
    location?: pulumi.Input<string>;
    /**
     * The list of all options configured for the pipeline.
     */
    options?: pulumi.Input<pulumi.Input<string | types.enums.PipelineOptions>[]>;
    /**
     * The name of the container registry.
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The source properties of the import pipeline.
     */
    source: pulumi.Input<types.inputs.ImportPipelineSourcePropertiesArgs>;
    /**
     * The properties that describe the trigger of the import pipeline.
     */
    trigger?: pulumi.Input<types.inputs.PipelineTriggerPropertiesArgs>;
}
