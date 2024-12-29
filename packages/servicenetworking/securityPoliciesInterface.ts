import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * SecurityPolicy Subresource of Traffic Controller.
 * Azure REST API version: 2024-05-01-preview.
 *
 * Other available API versions: 2025-01-01.
 */
export class SecurityPoliciesInterface extends pulumi.CustomResource {
    /**
     * Get an existing SecurityPoliciesInterface resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SecurityPoliciesInterface {
        return new SecurityPoliciesInterface(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:servicenetworking:SecurityPoliciesInterface';

    /**
     * Returns true if the given object is an instance of SecurityPoliciesInterface.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SecurityPoliciesInterface {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SecurityPoliciesInterface.__pulumiType;
    }

    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Type of the Traffic Controller Security Policy
     */
    public /*out*/ readonly policyType!: pulumi.Output<string>;
    /**
     * Provisioning State of Traffic Controller SecurityPolicy Resource
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
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
     * Web Application Firewall Policy of the Traffic Controller Security Policy
     */
    public readonly wafPolicy!: pulumi.Output<types.outputs.WafPolicyResponse | undefined>;

    /**
     * Create a SecurityPoliciesInterface resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SecurityPoliciesInterfaceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.trafficControllerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'trafficControllerName'");
            }
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["securityPolicyName"] = args ? args.securityPolicyName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["trafficControllerName"] = args ? args.trafficControllerName : undefined;
            resourceInputs["wafPolicy"] = args ? args.wafPolicy : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["policyType"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["policyType"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["wafPolicy"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:servicenetworking/v20240501preview:SecurityPoliciesInterface" }, { type: "azure-native:servicenetworking/v20250101:SecurityPoliciesInterface" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SecurityPoliciesInterface.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SecurityPoliciesInterface resource.
 */
export interface SecurityPoliciesInterfaceArgs {
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * SecurityPolicy
     */
    securityPolicyName?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * traffic controller name for path
     */
    trafficControllerName: pulumi.Input<string>;
    /**
     * Web Application Firewall Policy of the Traffic Controller Security Policy
     */
    wafPolicy?: pulumi.Input<types.inputs.WafPolicyArgs>;
}