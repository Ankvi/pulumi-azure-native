import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Tunnel Policy maps domains to target endpoints to process traffic over the tunnelling protocol.
 *
 * Uses Azure REST API version 2024-06-01-preview. In version 2.x of the Azure Native provider, it used API version 2024-06-01-preview.
 */
export class TunnelPolicy extends pulumi.CustomResource {
    /**
     * Get an existing TunnelPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): TunnelPolicy {
        return new TunnelPolicy(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:cdn:TunnelPolicy';

    /**
     * Returns true if the given object is an instance of TunnelPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TunnelPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TunnelPolicy.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    public /*out*/ readonly deploymentStatus!: pulumi.Output<string>;
    /**
     * Domains referenced by this tunnel policy.
     */
    public readonly domains!: pulumi.Output<types.outputs.ActivatedResourceReferenceResponse[]>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning status
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Read only system data
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Target Groups referenced by this tunnel policy.
     */
    public readonly targetGroups!: pulumi.Output<types.outputs.ResourceReferenceResponse[] | undefined>;
    /**
     * Protocol this tunnel will use for allowing traffic to backends.
     */
    public readonly tunnelType!: pulumi.Output<string | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a TunnelPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TunnelPolicyArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.domains === undefined) && !opts.urn) {
                throw new Error("Missing required property 'domains'");
            }
            if ((!args || args.profileName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'profileName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["domains"] = args ? args.domains : undefined;
            resourceInputs["profileName"] = args ? args.profileName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["targetGroups"] = args ? args.targetGroups : undefined;
            resourceInputs["tunnelPolicyName"] = args ? args.tunnelPolicyName : undefined;
            resourceInputs["tunnelType"] = args ? args.tunnelType : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["deploymentStatus"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["deploymentStatus"] = undefined /*out*/;
            resourceInputs["domains"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["targetGroups"] = undefined /*out*/;
            resourceInputs["tunnelType"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:cdn/v20240601preview:TunnelPolicy" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(TunnelPolicy.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a TunnelPolicy resource.
 */
export interface TunnelPolicyArgs {
    /**
     * Domains referenced by this tunnel policy.
     */
    domains: pulumi.Input<pulumi.Input<types.inputs.ActivatedResourceReferenceArgs>[]>;
    /**
     * Name of the Azure Front Door Standard or Azure Front Door Premium which is unique within the resource group.
     */
    profileName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Target Groups referenced by this tunnel policy.
     */
    targetGroups?: pulumi.Input<pulumi.Input<types.inputs.ResourceReferenceArgs>[]>;
    /**
     * Name of the Tunnel Policy under the profile.
     */
    tunnelPolicyName?: pulumi.Input<string>;
    /**
     * Protocol this tunnel will use for allowing traffic to backends.
     */
    tunnelType?: pulumi.Input<string | types.enums.TunnelType>;
}