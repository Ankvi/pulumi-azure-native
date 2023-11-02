import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Access policies help define the authentication rules, and control access to specific video resources.
 * Azure REST API version: 2021-11-01-preview. Prior API version in Azure Native 1.x: 2021-05-01-preview.
 */
export class AccessPolicy extends pulumi.CustomResource {
    /**
     * Get an existing AccessPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AccessPolicy {
        return new AccessPolicy(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:videoanalyzer:AccessPolicy';

    /**
     * Returns true if the given object is an instance of AccessPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AccessPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AccessPolicy.__pulumiType;
    }

    /**
     * Authentication method to be used when validating client API access.
     */
    public readonly authentication!: pulumi.Output<types.outputs.JwtAuthenticationResponse | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Defines the access level granted by this policy.
     */
    public readonly role!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a AccessPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AccessPolicyArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accessPolicyName"] = args ? args.accessPolicyName : undefined;
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["authentication"] = args ? args.authentication : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["role"] = args ? args.role : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["authentication"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["role"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:videoanalyzer/v20210501preview:AccessPolicy" }, { type: "azure-native:videoanalyzer/v20211101preview:AccessPolicy" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AccessPolicy.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AccessPolicy resource.
 */
export interface AccessPolicyArgs {
    /**
     * The Access Policy name.
     */
    accessPolicyName?: pulumi.Input<string>;
    /**
     * The Azure Video Analyzer account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * Authentication method to be used when validating client API access.
     */
    authentication?: pulumi.Input<types.inputs.JwtAuthenticationArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Defines the access level granted by this policy.
     */
    role?: pulumi.Input<string | types.enums.AccessPolicyRole>;
}
