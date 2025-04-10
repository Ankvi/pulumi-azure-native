import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * PrivateLink Policy configuration object.
 *
 * Uses Azure REST API version 2020-03-01. In version 1.x of the Azure Native provider, it used API version 2020-03-01.
 */
export class PrivateLinkForAzureAd extends pulumi.CustomResource {
    /**
     * Get an existing PrivateLinkForAzureAd resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PrivateLinkForAzureAd {
        return new PrivateLinkForAzureAd(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:aadiam:PrivateLinkForAzureAd';

    /**
     * Returns true if the given object is an instance of PrivateLinkForAzureAd.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PrivateLinkForAzureAd {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PrivateLinkForAzureAd.__pulumiType;
    }

    /**
     * Flag indicating whether all tenants are allowed
     */
    public readonly allTenants!: pulumi.Output<boolean | undefined>;
    /**
     * Name of this resource.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * Guid of the owner tenant
     */
    public readonly ownerTenantId!: pulumi.Output<string | undefined>;
    /**
     * Name of the resource group
     */
    public readonly resourceGroup!: pulumi.Output<string | undefined>;
    /**
     * Name of the private link policy resource
     */
    public readonly resourceName!: pulumi.Output<string | undefined>;
    /**
     * Subscription Identifier
     */
    public readonly subscriptionId!: pulumi.Output<string | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The list of tenantIds.
     */
    public readonly tenants!: pulumi.Output<string[] | undefined>;
    /**
     * Type of this resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a PrivateLinkForAzureAd resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrivateLinkForAzureAdArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["allTenants"] = args ? args.allTenants : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["ownerTenantId"] = args ? args.ownerTenantId : undefined;
            resourceInputs["policyName"] = args ? args.policyName : undefined;
            resourceInputs["resourceGroup"] = args ? args.resourceGroup : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["subscriptionId"] = args ? args.subscriptionId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tenants"] = args ? args.tenants : undefined;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["allTenants"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["ownerTenantId"] = undefined /*out*/;
            resourceInputs["resourceGroup"] = undefined /*out*/;
            resourceInputs["resourceName"] = undefined /*out*/;
            resourceInputs["subscriptionId"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["tenants"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:aadiam/v20200301:PrivateLinkForAzureAd" }, { type: "azure-native:aadiam/v20200301:privateLinkForAzureAd" }, { type: "azure-native:aadiam/v20200301preview:PrivateLinkForAzureAd" }, { type: "azure-native:aadiam/v20200301preview:privateLinkForAzureAd" }, { type: "azure-native:aadiam:privateLinkForAzureAd" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PrivateLinkForAzureAd.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PrivateLinkForAzureAd resource.
 */
export interface PrivateLinkForAzureAdArgs {
    /**
     * Flag indicating whether all tenants are allowed
     */
    allTenants?: pulumi.Input<boolean>;
    /**
     * Name of this resource.
     */
    name?: pulumi.Input<string>;
    /**
     * Guid of the owner tenant
     */
    ownerTenantId?: pulumi.Input<string>;
    /**
     * The name of the private link policy in Azure AD.
     */
    policyName?: pulumi.Input<string>;
    /**
     * Name of the resource group
     */
    resourceGroup?: pulumi.Input<string>;
    /**
     * Name of an Azure resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the private link policy resource
     */
    resourceName?: pulumi.Input<string>;
    /**
     * Subscription Identifier
     */
    subscriptionId?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The list of tenantIds.
     */
    tenants?: pulumi.Input<pulumi.Input<string>[]>;
}