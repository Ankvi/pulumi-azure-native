import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Dapr Component Resiliency Policy.
 * Azure REST API version: 2023-08-01-preview.
 *
 * Other available API versions: 2023-11-02-preview, 2024-02-02-preview, 2024-08-02-preview.
 */
export class DaprComponentResiliencyPolicy extends pulumi.CustomResource {
    /**
     * Get an existing DaprComponentResiliencyPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DaprComponentResiliencyPolicy {
        return new DaprComponentResiliencyPolicy(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:app:DaprComponentResiliencyPolicy';

    /**
     * Returns true if the given object is an instance of DaprComponentResiliencyPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DaprComponentResiliencyPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DaprComponentResiliencyPolicy.__pulumiType;
    }

    /**
     * The optional inbound component resiliency policy configuration
     */
    public readonly inboundPolicy!: pulumi.Output<types.outputs.DaprComponentResiliencyPolicyConfigurationResponse | undefined>;
    /**
     * The name of the resource
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The optional outbound component resiliency policy configuration
     */
    public readonly outboundPolicy!: pulumi.Output<types.outputs.DaprComponentResiliencyPolicyConfigurationResponse | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DaprComponentResiliencyPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DaprComponentResiliencyPolicyArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.componentName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'componentName'");
            }
            if ((!args || args.environmentName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'environmentName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["componentName"] = args ? args.componentName : undefined;
            resourceInputs["environmentName"] = args ? args.environmentName : undefined;
            resourceInputs["inboundPolicy"] = args ? args.inboundPolicy : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["outboundPolicy"] = args ? args.outboundPolicy : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["inboundPolicy"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["outboundPolicy"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:app/v20230801preview:DaprComponentResiliencyPolicy" }, { type: "azure-native:app/v20231102preview:DaprComponentResiliencyPolicy" }, { type: "azure-native:app/v20240202preview:DaprComponentResiliencyPolicy" }, { type: "azure-native:app/v20240802preview:DaprComponentResiliencyPolicy" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DaprComponentResiliencyPolicy.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DaprComponentResiliencyPolicy resource.
 */
export interface DaprComponentResiliencyPolicyArgs {
    /**
     * Name of the Dapr Component.
     */
    componentName: pulumi.Input<string>;
    /**
     * Name of the Managed Environment.
     */
    environmentName: pulumi.Input<string>;
    /**
     * The optional inbound component resiliency policy configuration
     */
    inboundPolicy?: pulumi.Input<types.inputs.DaprComponentResiliencyPolicyConfigurationArgs>;
    /**
     * Name of the Dapr Component Resiliency Policy.
     */
    name?: pulumi.Input<string>;
    /**
     * The optional outbound component resiliency policy configuration
     */
    outboundPolicy?: pulumi.Input<types.inputs.DaprComponentResiliencyPolicyConfigurationArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}