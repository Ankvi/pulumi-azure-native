import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Defines web application firewall policy.
 * Azure REST API version: 2022-05-01. Prior API version in Azure Native 1.x: 2020-11-01
 */
export class Policy extends pulumi.CustomResource {
    /**
     * Get an existing Policy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Policy {
        return new Policy(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:Policy';

    /**
     * Returns true if the given object is an instance of Policy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Policy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Policy.__pulumiType;
    }

    /**
     * Describes custom rules inside the policy.
     */
    public readonly customRules!: pulumi.Output<types.outputs.network.CustomRuleListResponse | undefined>;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * Describes Frontend Endpoints associated with this Web Application Firewall policy.
     */
    public /*out*/ readonly frontendEndpointLinks!: pulumi.Output<types.outputs.network.FrontendEndpointLinkResponse[]>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Describes managed rules inside the policy.
     */
    public readonly managedRules!: pulumi.Output<types.outputs.network.ManagedRuleSetListResponse | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Describes settings for the policy.
     */
    public readonly policySettings!: pulumi.Output<types.outputs.network.FrontDoorPolicySettingsResponse | undefined>;
    /**
     * Provisioning state of the policy.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    public /*out*/ readonly resourceState!: pulumi.Output<string>;
    /**
     * Describes Routing Rules associated with this Web Application Firewall policy.
     */
    public /*out*/ readonly routingRuleLinks!: pulumi.Output<types.outputs.network.RoutingRuleLinkResponse[]>;
    /**
     * Describes Security Policy associated with this Web Application Firewall policy.
     */
    public /*out*/ readonly securityPolicyLinks!: pulumi.Output<types.outputs.network.SecurityPolicyLinkResponse[]>;
    /**
     * The pricing tier of web application firewall policy. Defaults to Classic_AzureFrontDoor if not specified.
     */
    public readonly sku!: pulumi.Output<types.outputs.network.SkuResponse | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Policy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PolicyArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["customRules"] = args ? args.customRules : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["managedRules"] = args ? args.managedRules : undefined;
            resourceInputs["policyName"] = args ? args.policyName : undefined;
            resourceInputs["policySettings"] = args ? args.policySettings : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["frontendEndpointLinks"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceState"] = undefined /*out*/;
            resourceInputs["routingRuleLinks"] = undefined /*out*/;
            resourceInputs["securityPolicyLinks"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["customRules"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["frontendEndpointLinks"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["managedRules"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["policySettings"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceState"] = undefined /*out*/;
            resourceInputs["routingRuleLinks"] = undefined /*out*/;
            resourceInputs["securityPolicyLinks"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20190301:Policy" }, { type: "azure-native:network/v20191001:Policy" }, { type: "azure-native:network/v20200401:Policy" }, { type: "azure-native:network/v20201101:Policy" }, { type: "azure-native:network/v20210601:Policy" }, { type: "azure-native:network/v20220501:Policy" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Policy.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Policy resource.
 */
export interface PolicyArgs {
    /**
     * Describes custom rules inside the policy.
     */
    customRules?: pulumi.Input<types.inputs.network.CustomRuleListArgs>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * Describes managed rules inside the policy.
     */
    managedRules?: pulumi.Input<types.inputs.network.ManagedRuleSetListArgs>;
    /**
     * The name of the Web Application Firewall Policy.
     */
    policyName?: pulumi.Input<string>;
    /**
     * Describes settings for the policy.
     */
    policySettings?: pulumi.Input<types.inputs.network.FrontDoorPolicySettingsArgs>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The pricing tier of web application firewall policy. Defaults to Classic_AzureFrontDoor if not specified.
     */
    sku?: pulumi.Input<types.inputs.network.SkuArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
