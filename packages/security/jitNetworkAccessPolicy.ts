import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Uses Azure REST API version 2020-01-01. In version 2.x of the Azure Native provider, it used API version 2020-01-01.
 */
export class JitNetworkAccessPolicy extends pulumi.CustomResource {
    /**
     * Get an existing JitNetworkAccessPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): JitNetworkAccessPolicy {
        return new JitNetworkAccessPolicy(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:security:JitNetworkAccessPolicy';

    /**
     * Returns true if the given object is an instance of JitNetworkAccessPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is JitNetworkAccessPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === JitNetworkAccessPolicy.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Kind of the resource
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Location where the resource is stored
     */
    public /*out*/ readonly location!: pulumi.Output<string>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Gets the provisioning state of the Just-in-Time policy.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    public readonly requests!: pulumi.Output<types.outputs.JitNetworkAccessRequestResponse[] | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Configurations for Microsoft.Compute/virtualMachines resource type.
     */
    public readonly virtualMachines!: pulumi.Output<types.outputs.JitNetworkAccessPolicyVirtualMachineResponse[]>;

    /**
     * Create a JitNetworkAccessPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: JitNetworkAccessPolicyArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.ascLocation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ascLocation'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.virtualMachines === undefined) && !opts.urn) {
                throw new Error("Missing required property 'virtualMachines'");
            }
            resourceInputs["ascLocation"] = args ? args.ascLocation : undefined;
            resourceInputs["jitNetworkAccessPolicyName"] = args ? args.jitNetworkAccessPolicyName : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["requests"] = args ? args.requests : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["virtualMachines"] = args ? args.virtualMachines : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["requests"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualMachines"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:security/v20150601preview:JitNetworkAccessPolicy" }, { type: "azure-native:security/v20200101:JitNetworkAccessPolicy" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(JitNetworkAccessPolicy.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a JitNetworkAccessPolicy resource.
 */
export interface JitNetworkAccessPolicyArgs {
    /**
     * The location where ASC stores the data of the subscription. can be retrieved from Get locations
     */
    ascLocation: pulumi.Input<string>;
    /**
     * Name of a Just-in-Time access configuration policy.
     */
    jitNetworkAccessPolicyName?: pulumi.Input<string>;
    /**
     * Kind of the resource
     */
    kind?: pulumi.Input<string>;
    requests?: pulumi.Input<pulumi.Input<types.inputs.JitNetworkAccessRequestArgs>[]>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Configurations for Microsoft.Compute/virtualMachines resource type.
     */
    virtualMachines: pulumi.Input<pulumi.Input<types.inputs.JitNetworkAccessPolicyVirtualMachineArgs>[]>;
}