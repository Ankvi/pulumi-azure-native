import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Data Lake Store account information.
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
    public static readonly __pulumiType = 'azure-native:datalakestore/v20161101:Account';

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
     * The unique identifier associated with this Data Lake Store account.
     */
    public /*out*/ readonly accountId!: pulumi.Output<string>;
    /**
     * The account creation time.
     */
    public /*out*/ readonly creationTime!: pulumi.Output<string>;
    /**
     * The commitment tier in use for the current month.
     */
    public /*out*/ readonly currentTier!: pulumi.Output<string>;
    /**
     * The default owner group for all new folders and files created in the Data Lake Store account.
     */
    public readonly defaultGroup!: pulumi.Output<string>;
    /**
     * The Key Vault encryption configuration.
     */
    public readonly encryptionConfig!: pulumi.Output<types.outputs.datalakestore.v20161101.EncryptionConfigResponse>;
    /**
     * The current state of encryption provisioning for this Data Lake Store account.
     */
    public /*out*/ readonly encryptionProvisioningState!: pulumi.Output<string>;
    /**
     * The current state of encryption for this Data Lake Store account.
     */
    public readonly encryptionState!: pulumi.Output<string>;
    /**
     * The full CName endpoint for this account.
     */
    public /*out*/ readonly endpoint!: pulumi.Output<string>;
    /**
     * The current state of allowing or disallowing IPs originating within Azure through the firewall. If the firewall is disabled, this is not enforced.
     */
    public readonly firewallAllowAzureIps!: pulumi.Output<string>;
    /**
     * The list of firewall rules associated with this Data Lake Store account.
     */
    public readonly firewallRules!: pulumi.Output<types.outputs.datalakestore.v20161101.FirewallRuleResponse[]>;
    /**
     * The current state of the IP address firewall for this Data Lake Store account.
     */
    public readonly firewallState!: pulumi.Output<string>;
    /**
     * The Key Vault encryption identity, if any.
     */
    public readonly identity!: pulumi.Output<types.outputs.datalakestore.v20161101.EncryptionIdentityResponse>;
    /**
     * The account last modified time.
     */
    public /*out*/ readonly lastModifiedTime!: pulumi.Output<string>;
    /**
     * The resource location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The commitment tier to use for next month.
     */
    public readonly newTier!: pulumi.Output<string>;
    /**
     * The provisioning status of the Data Lake Store account.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The state of the Data Lake Store account.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * The resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string}>;
    /**
     * The current state of the trusted identity provider feature for this Data Lake Store account.
     */
    public readonly trustedIdProviderState!: pulumi.Output<string>;
    /**
     * The list of trusted identity providers associated with this Data Lake Store account.
     */
    public readonly trustedIdProviders!: pulumi.Output<types.outputs.datalakestore.v20161101.TrustedIdProviderResponse[]>;
    /**
     * The resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The list of virtual network rules associated with this Data Lake Store account.
     */
    public readonly virtualNetworkRules!: pulumi.Output<types.outputs.datalakestore.v20161101.VirtualNetworkRuleResponse[]>;

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
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["defaultGroup"] = args ? args.defaultGroup : undefined;
            resourceInputs["encryptionConfig"] = args ? args.encryptionConfig : undefined;
            resourceInputs["encryptionState"] = args ? args.encryptionState : undefined;
            resourceInputs["firewallAllowAzureIps"] = args ? args.firewallAllowAzureIps : undefined;
            resourceInputs["firewallRules"] = args ? args.firewallRules : undefined;
            resourceInputs["firewallState"] = args ? args.firewallState : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["newTier"] = args ? args.newTier : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["trustedIdProviderState"] = args ? args.trustedIdProviderState : undefined;
            resourceInputs["trustedIdProviders"] = args ? args.trustedIdProviders : undefined;
            resourceInputs["virtualNetworkRules"] = args ? args.virtualNetworkRules : undefined;
            resourceInputs["accountId"] = undefined /*out*/;
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["currentTier"] = undefined /*out*/;
            resourceInputs["encryptionProvisioningState"] = undefined /*out*/;
            resourceInputs["endpoint"] = undefined /*out*/;
            resourceInputs["lastModifiedTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["accountId"] = undefined /*out*/;
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["currentTier"] = undefined /*out*/;
            resourceInputs["defaultGroup"] = undefined /*out*/;
            resourceInputs["encryptionConfig"] = undefined /*out*/;
            resourceInputs["encryptionProvisioningState"] = undefined /*out*/;
            resourceInputs["encryptionState"] = undefined /*out*/;
            resourceInputs["endpoint"] = undefined /*out*/;
            resourceInputs["firewallAllowAzureIps"] = undefined /*out*/;
            resourceInputs["firewallRules"] = undefined /*out*/;
            resourceInputs["firewallState"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["lastModifiedTime"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["newTier"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["trustedIdProviderState"] = undefined /*out*/;
            resourceInputs["trustedIdProviders"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualNetworkRules"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:datalakestore:Account" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Account.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Account resource.
 */
export interface AccountArgs {
    /**
     * The name of the Data Lake Store account.
     */
    accountName?: pulumi.Input<string>;
    /**
     * The default owner group for all new folders and files created in the Data Lake Store account.
     */
    defaultGroup?: pulumi.Input<string>;
    /**
     * The Key Vault encryption configuration.
     */
    encryptionConfig?: pulumi.Input<types.inputs.datalakestore.v20161101.EncryptionConfigArgs>;
    /**
     * The current state of encryption for this Data Lake Store account.
     */
    encryptionState?: pulumi.Input<types.enums.v20161101.EncryptionState>;
    /**
     * The current state of allowing or disallowing IPs originating within Azure through the firewall. If the firewall is disabled, this is not enforced.
     */
    firewallAllowAzureIps?: pulumi.Input<types.enums.v20161101.FirewallAllowAzureIpsState>;
    /**
     * The list of firewall rules associated with this Data Lake Store account.
     */
    firewallRules?: pulumi.Input<pulumi.Input<types.inputs.datalakestore.v20161101.CreateFirewallRuleWithAccountParametersArgs>[]>;
    /**
     * The current state of the IP address firewall for this Data Lake Store account.
     */
    firewallState?: pulumi.Input<types.enums.v20161101.FirewallState>;
    /**
     * The Key Vault encryption identity, if any.
     */
    identity?: pulumi.Input<types.inputs.datalakestore.v20161101.EncryptionIdentityArgs>;
    /**
     * The resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The commitment tier to use for next month.
     */
    newTier?: pulumi.Input<types.enums.v20161101.TierType>;
    /**
     * The name of the Azure resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The current state of the trusted identity provider feature for this Data Lake Store account.
     */
    trustedIdProviderState?: pulumi.Input<types.enums.v20161101.TrustedIdProviderState>;
    /**
     * The list of trusted identity providers associated with this Data Lake Store account.
     */
    trustedIdProviders?: pulumi.Input<pulumi.Input<types.inputs.datalakestore.v20161101.CreateTrustedIdProviderWithAccountParametersArgs>[]>;
    /**
     * The list of virtual network rules associated with this Data Lake Store account.
     */
    virtualNetworkRules?: pulumi.Input<pulumi.Input<types.inputs.datalakestore.v20161101.CreateVirtualNetworkRuleWithAccountParametersArgs>[]>;
}
