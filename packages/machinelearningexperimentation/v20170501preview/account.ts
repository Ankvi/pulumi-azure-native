import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An object that represents a machine learning team account.
 */
export class Account extends pulumi.CustomResource {
    /**
     * Get an existing Account resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Account {
        return new Account(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:machinelearningexperimentation/v20170501preview:Account';

    /**
     * Returns true if the given object is an instance of Account.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Account {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Account.__pulumiType;
    }

    /**
     * The immutable id associated with this team account.
     */
    public /*out*/ readonly accountId!: pulumi.Output<string>;
    /**
     * The creation date of the machine learning team account in ISO8601 format.
     */
    public /*out*/ readonly creationDate!: pulumi.Output<string>;
    /**
     * The description of this workspace.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The uri for this machine learning team account.
     */
    public /*out*/ readonly discoveryUri!: pulumi.Output<string>;
    /**
     * The friendly name for this workspace. This will be the workspace name in the arm id when the workspace object gets created
     */
    public readonly friendlyName!: pulumi.Output<string | undefined>;
    /**
     * The fully qualified arm id of the user key vault.
     */
    public readonly keyVaultId!: pulumi.Output<string>;
    /**
     * The location of the resource. This cannot be changed after the resource is created.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The current deployment state of team account resource. The provisioningState is to indicate states for resource provisioning.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The no of users/seats who can access this team account. This property defines the charge on the team account.
     */
    public readonly seats!: pulumi.Output<string | undefined>;
    /**
     * The properties of the storage account for the machine learning team account.
     */
    public readonly storageAccount!: pulumi.Output<types.outputs.StorageAccountPropertiesResponse>;
    /**
     * The tags of the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The fully qualified arm id of the vso account to be used for this team account.
     */
    public readonly vsoAccountId!: pulumi.Output<string>;

    /**
     * Create a Account resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AccountArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.keyVaultId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'keyVaultId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.storageAccount === undefined) && !opts.urn) {
                throw new Error("Missing required property 'storageAccount'");
            }
            if ((!args || args.vsoAccountId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vsoAccountId'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["friendlyName"] = args ? args.friendlyName : undefined;
            resourceInputs["keyVaultId"] = args ? args.keyVaultId : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["seats"] = args ? args.seats : undefined;
            resourceInputs["storageAccount"] = args ? args.storageAccount : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vsoAccountId"] = args ? args.vsoAccountId : undefined;
            resourceInputs["accountId"] = undefined /*out*/;
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["discoveryUri"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["accountId"] = undefined /*out*/;
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["discoveryUri"] = undefined /*out*/;
            resourceInputs["friendlyName"] = undefined /*out*/;
            resourceInputs["keyVaultId"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["seats"] = undefined /*out*/;
            resourceInputs["storageAccount"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vsoAccountId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:machinelearningexperimentation:Account" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Account.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Account resource.
 */
export interface AccountArgs {
    /**
     * The name of the machine learning team account.
     */
    accountName?: pulumi.Input<string>;
    /**
     * The description of this workspace.
     */
    description?: pulumi.Input<string>;
    /**
     * The friendly name for this workspace. This will be the workspace name in the arm id when the workspace object gets created
     */
    friendlyName?: pulumi.Input<string>;
    /**
     * The fully qualified arm id of the user key vault.
     */
    keyVaultId: pulumi.Input<string>;
    /**
     * The location of the resource. This cannot be changed after the resource is created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group to which the machine learning team account belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The no of users/seats who can access this team account. This property defines the charge on the team account.
     */
    seats?: pulumi.Input<string>;
    /**
     * The properties of the storage account for the machine learning team account.
     */
    storageAccount: pulumi.Input<types.inputs.StorageAccountPropertiesArgs>;
    /**
     * The tags of the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The fully qualified arm id of the vso account to be used for this team account.
     */
    vsoAccountId: pulumi.Input<string>;
}