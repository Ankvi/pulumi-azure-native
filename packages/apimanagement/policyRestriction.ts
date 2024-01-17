import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Policy restriction contract details.
 * Azure REST API version: 2023-05-01-preview.
 */
export class PolicyRestriction extends pulumi.CustomResource {
    /**
     * Get an existing PolicyRestriction resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PolicyRestriction {
        return new PolicyRestriction(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement:PolicyRestriction';

    /**
     * Returns true if the given object is an instance of PolicyRestriction.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PolicyRestriction {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PolicyRestriction.__pulumiType;
    }

    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Indicates if base policy should be enforced for the policy document.
     */
    public readonly requireBase!: pulumi.Output<string | undefined>;
    /**
     * Path to the policy document.
     */
    public readonly scope!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a PolicyRestriction resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PolicyRestrictionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["policyRestrictionId"] = args ? args.policyRestrictionId : undefined;
            resourceInputs["requireBase"] = (args ? args.requireBase : undefined) ?? "false";
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["requireBase"] = undefined /*out*/;
            resourceInputs["scope"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement/v20230501preview:PolicyRestriction" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PolicyRestriction.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PolicyRestriction resource.
 */
export interface PolicyRestrictionArgs {
    /**
     * Policy restrictions after an entity level
     */
    policyRestrictionId?: pulumi.Input<string>;
    /**
     * Indicates if base policy should be enforced for the policy document.
     */
    requireBase?: pulumi.Input<string | types.enums.PolicyRestrictionRequireBase>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Path to the policy document.
     */
    scope?: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}