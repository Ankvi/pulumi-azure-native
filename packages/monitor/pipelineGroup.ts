import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A pipeline group definition.
 *
 * Uses Azure REST API version 2023-10-01-preview.
 *
 * Other available API versions: 2024-10-01-preview.
 */
export class PipelineGroup extends pulumi.CustomResource {
    /**
     * Get an existing PipelineGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PipelineGroup {
        return new PipelineGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:monitor:PipelineGroup';

    /**
     * Returns true if the given object is an instance of PipelineGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PipelineGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PipelineGroup.__pulumiType;
    }

    /**
     * The exporters specified for a pipeline group instance.
     */
    public readonly exporters!: pulumi.Output<types.outputs.ExporterResponse[]>;
    /**
     * The extended location for given pipeline group.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.AzureResourceManagerCommonTypesExtendedLocationResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Networking configurations for the pipeline group instance.
     */
    public readonly networkingConfigurations!: pulumi.Output<types.outputs.NetworkingConfigurationResponse[] | undefined>;
    /**
     * The processors specified for a pipeline group instance.
     */
    public readonly processors!: pulumi.Output<types.outputs.ProcessorResponse[]>;
    /**
     * The provisioning state of a pipeline group instance. Set to Succeeded if everything is healthy.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The receivers specified for a pipeline group instance.
     */
    public readonly receivers!: pulumi.Output<types.outputs.ReceiverResponse[]>;
    /**
     * Defines the amount of replicas of the pipeline group instance.
     */
    public readonly replicas!: pulumi.Output<number | undefined>;
    /**
     * The service section for a given pipeline group instance.
     */
    public readonly service!: pulumi.Output<types.outputs.ServiceResponse>;
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
     * Create a PipelineGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PipelineGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.exporters === undefined) && !opts.urn) {
                throw new Error("Missing required property 'exporters'");
            }
            if ((!args || args.processors === undefined) && !opts.urn) {
                throw new Error("Missing required property 'processors'");
            }
            if ((!args || args.receivers === undefined) && !opts.urn) {
                throw new Error("Missing required property 'receivers'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.service === undefined) && !opts.urn) {
                throw new Error("Missing required property 'service'");
            }
            resourceInputs["exporters"] = args ? args.exporters : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["networkingConfigurations"] = args ? args.networkingConfigurations : undefined;
            resourceInputs["pipelineGroupName"] = args ? args.pipelineGroupName : undefined;
            resourceInputs["processors"] = args ? args.processors : undefined;
            resourceInputs["receivers"] = args ? args.receivers : undefined;
            resourceInputs["replicas"] = args ? args.replicas : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["service"] = args ? args.service : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["exporters"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkingConfigurations"] = undefined /*out*/;
            resourceInputs["processors"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["receivers"] = undefined /*out*/;
            resourceInputs["replicas"] = undefined /*out*/;
            resourceInputs["service"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:monitor/v20231001preview:PipelineGroup" }, { type: "azure-native:monitor/v20241001preview:PipelineGroup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PipelineGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PipelineGroup resource.
 */
export interface PipelineGroupArgs {
    /**
     * The exporters specified for a pipeline group instance.
     */
    exporters: pulumi.Input<pulumi.Input<types.inputs.ExporterArgs>[]>;
    /**
     * The extended location for given pipeline group.
     */
    extendedLocation?: pulumi.Input<types.inputs.AzureResourceManagerCommonTypesExtendedLocationArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Networking configurations for the pipeline group instance.
     */
    networkingConfigurations?: pulumi.Input<pulumi.Input<types.inputs.NetworkingConfigurationArgs>[]>;
    /**
     * The name of pipeline group. The name is case insensitive.
     */
    pipelineGroupName?: pulumi.Input<string>;
    /**
     * The processors specified for a pipeline group instance.
     */
    processors: pulumi.Input<pulumi.Input<types.inputs.ProcessorArgs>[]>;
    /**
     * The receivers specified for a pipeline group instance.
     */
    receivers: pulumi.Input<pulumi.Input<types.inputs.ReceiverArgs>[]>;
    /**
     * Defines the amount of replicas of the pipeline group instance.
     */
    replicas?: pulumi.Input<number>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The service section for a given pipeline group instance.
     */
    service: pulumi.Input<types.inputs.ServiceArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}