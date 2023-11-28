import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An object that represents an export pipeline for a container registry.
 */
export class ExportPipeline extends pulumi.CustomResource {
    /**
     * Get an existing ExportPipeline resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ExportPipeline {
        return new ExportPipeline(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:containerregistry/v20230801preview:ExportPipeline';

    /**
     * Returns true if the given object is an instance of ExportPipeline.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ExportPipeline {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ExportPipeline.__pulumiType;
    }

    /**
     * The identity of the export pipeline.
     */
    public readonly identity!: pulumi.Output<types.outputs.IdentityPropertiesResponse | undefined>;
    /**
     * The location of the export pipeline.
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
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The target properties of the export pipeline.
     */
    public readonly target!: pulumi.Output<types.outputs.ExportPipelineTargetPropertiesResponse>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ExportPipeline resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ExportPipelineArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.registryName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'registryName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.target === undefined) && !opts.urn) {
                throw new Error("Missing required property 'target'");
            }
            resourceInputs["exportPipelineName"] = args ? args.exportPipelineName : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["options"] = args ? args.options : undefined;
            resourceInputs["registryName"] = args ? args.registryName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["target"] = args ? args.target : undefined;
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
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["target"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:containerregistry:ExportPipeline" }, { type: "azure-native:containerregistry/v20191201preview:ExportPipeline" }, { type: "azure-native:containerregistry/v20201101preview:ExportPipeline" }, { type: "azure-native:containerregistry/v20210601preview:ExportPipeline" }, { type: "azure-native:containerregistry/v20210801preview:ExportPipeline" }, { type: "azure-native:containerregistry/v20211201preview:ExportPipeline" }, { type: "azure-native:containerregistry/v20220201preview:ExportPipeline" }, { type: "azure-native:containerregistry/v20230101preview:ExportPipeline" }, { type: "azure-native:containerregistry/v20230601preview:ExportPipeline" }, { type: "azure-native:containerregistry/v20231101preview:ExportPipeline" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ExportPipeline.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ExportPipeline resource.
 */
export interface ExportPipelineArgs {
    /**
     * The name of the export pipeline.
     */
    exportPipelineName?: pulumi.Input<string>;
    /**
     * The identity of the export pipeline.
     */
    identity?: pulumi.Input<types.inputs.IdentityPropertiesArgs>;
    /**
     * The location of the export pipeline.
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
     * The target properties of the export pipeline.
     */
    target: pulumi.Input<types.inputs.ExportPipelineTargetPropertiesArgs>;
}
