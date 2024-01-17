import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Key Vault Access Policy for managing policies on existing vaults.
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
    public static readonly __pulumiType = 'azure-native:keyvault:AccessPolicy';

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
     * The definition of the access policy.
     */
    public readonly policy!: pulumi.Output<types.outputs.AccessPolicyEntry | undefined>;
    /**
     * Name of the resource group that contains the vault.
     */
    public readonly resourceGroupName!: pulumi.Output<string | undefined>;
    /**
     * Name of the Key Vault.
     */
    public readonly vaultName!: pulumi.Output<string | undefined>;

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
            if ((!args || args.policy === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policy'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.vaultName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vaultName'");
            }
            resourceInputs["policy"] = args ? args.policy : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["vaultName"] = args ? args.vaultName : undefined;
        } else {
            resourceInputs["policy"] = undefined /*out*/;
            resourceInputs["resourceGroupName"] = undefined /*out*/;
            resourceInputs["vaultName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AccessPolicy.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AccessPolicy resource.
 */
export interface AccessPolicyArgs {
    /**
     * The definition of the access policy.
     */
    policy: pulumi.Input<types.inputs.AccessPolicyEntryArgs>;
    /**
     * Name of the resource group that contains the vault.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the Key Vault.
     */
    vaultName: pulumi.Input<string>;
}