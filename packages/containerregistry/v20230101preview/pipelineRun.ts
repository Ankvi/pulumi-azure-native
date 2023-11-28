import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An object that represents a pipeline run for a container registry.
 */
export class PipelineRun extends pulumi.CustomResource {
    /**
     * Get an existing PipelineRun resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PipelineRun {
        return new PipelineRun(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:containerregistry/v20230101preview:PipelineRun';

    /**
     * Returns true if the given object is an instance of PipelineRun.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PipelineRun {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PipelineRun.__pulumiType;
    }

    /**
     * How the pipeline run should be forced to recreate even if the pipeline run configuration has not changed.
     */
    public readonly forceUpdateTag!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of a pipeline run.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The request parameters for a pipeline run.
     */
    public readonly request!: pulumi.Output<types.outputs.PipelineRunRequestResponse | undefined>;
    /**
     * The response of a pipeline run.
     */
    public /*out*/ readonly response!: pulumi.Output<types.outputs.PipelineRunResponseResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a PipelineRun resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PipelineRunArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["pipelineRunName"] = args ? args.pipelineRunName : undefined;
            resourceInputs["registryName"] = args ? args.registryName : undefined;
            resourceInputs["request"] = args ? (args.request ? pulumi.output(args.request).apply(types.inputs.pipelineRunRequestArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["response"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["forceUpdateTag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["request"] = undefined /*out*/;
            resourceInputs["response"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:containerregistry:PipelineRun" }, { type: "azure-native:containerregistry/v20191201preview:PipelineRun" }, { type: "azure-native:containerregistry/v20201101preview:PipelineRun" }, { type: "azure-native:containerregistry/v20210601preview:PipelineRun" }, { type: "azure-native:containerregistry/v20210801preview:PipelineRun" }, { type: "azure-native:containerregistry/v20211201preview:PipelineRun" }, { type: "azure-native:containerregistry/v20220201preview:PipelineRun" }, { type: "azure-native:containerregistry/v20230601preview:PipelineRun" }, { type: "azure-native:containerregistry/v20230801preview:PipelineRun" }, { type: "azure-native:containerregistry/v20231101preview:PipelineRun" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PipelineRun.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PipelineRun resource.
 */
export interface PipelineRunArgs {
    /**
     * How the pipeline run should be forced to recreate even if the pipeline run configuration has not changed.
     */
    forceUpdateTag?: pulumi.Input<string>;
    /**
     * The name of the pipeline run.
     */
    pipelineRunName?: pulumi.Input<string>;
    /**
     * The name of the container registry.
     */
    registryName: pulumi.Input<string>;
    /**
     * The request parameters for a pipeline run.
     */
    request?: pulumi.Input<types.inputs.PipelineRunRequestArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
