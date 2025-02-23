import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The NSP access rule resource
 * Azure REST API version: 2024-06-01-preview.
 */
export class NetworkSecurityPerimeterAccessRule extends pulumi.CustomResource {
    /**
     * Get an existing NetworkSecurityPerimeterAccessRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NetworkSecurityPerimeterAccessRule {
        return new NetworkSecurityPerimeterAccessRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:NetworkSecurityPerimeterAccessRule';

    /**
     * Returns true if the given object is an instance of NetworkSecurityPerimeterAccessRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkSecurityPerimeterAccessRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkSecurityPerimeterAccessRule.__pulumiType;
    }

    /**
     * Inbound address prefixes (IPv4/IPv6)
     */
    public readonly addressPrefixes!: pulumi.Output<string[] | undefined>;
    /**
     * Direction that specifies whether the access rules is inbound/outbound.
     */
    public readonly direction!: pulumi.Output<string | undefined>;
    /**
     * Outbound rules email address format.
     */
    public readonly emailAddresses!: pulumi.Output<string[] | undefined>;
    /**
     * Outbound rules fully qualified domain name format.
     */
    public readonly fullyQualifiedDomainNames!: pulumi.Output<string[] | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Rule specified by the perimeter id.
     */
    public /*out*/ readonly networkSecurityPerimeters!: pulumi.Output<types.outputs.PerimeterBasedAccessRuleResponse[]>;
    /**
     * Outbound rules phone number format.
     */
    public readonly phoneNumbers!: pulumi.Output<string[] | undefined>;
    /**
     * The provisioning state of the scope assignment resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Inbound rules service tag names.
     */
    public readonly serviceTags!: pulumi.Output<string[] | undefined>;
    /**
     * List of subscription ids
     */
    public readonly subscriptions!: pulumi.Output<types.outputs.SubscriptionIdResponse[] | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a NetworkSecurityPerimeterAccessRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkSecurityPerimeterAccessRuleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.networkSecurityPerimeterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkSecurityPerimeterName'");
            }
            if ((!args || args.profileName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'profileName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accessRuleName"] = args ? args.accessRuleName : undefined;
            resourceInputs["addressPrefixes"] = args ? args.addressPrefixes : undefined;
            resourceInputs["direction"] = args ? args.direction : undefined;
            resourceInputs["emailAddresses"] = args ? args.emailAddresses : undefined;
            resourceInputs["fullyQualifiedDomainNames"] = args ? args.fullyQualifiedDomainNames : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["networkSecurityPerimeterName"] = args ? args.networkSecurityPerimeterName : undefined;
            resourceInputs["phoneNumbers"] = args ? args.phoneNumbers : undefined;
            resourceInputs["profileName"] = args ? args.profileName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceTags"] = args ? args.serviceTags : undefined;
            resourceInputs["subscriptions"] = args ? args.subscriptions : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkSecurityPerimeters"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["addressPrefixes"] = undefined /*out*/;
            resourceInputs["direction"] = undefined /*out*/;
            resourceInputs["emailAddresses"] = undefined /*out*/;
            resourceInputs["fullyQualifiedDomainNames"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkSecurityPerimeters"] = undefined /*out*/;
            resourceInputs["phoneNumbers"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["serviceTags"] = undefined /*out*/;
            resourceInputs["subscriptions"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20210201preview:NetworkSecurityPerimeterAccessRule" }, { type: "azure-native:network/v20230701preview:NetworkSecurityPerimeterAccessRule" }, { type: "azure-native:network/v20230801preview:NetworkSecurityPerimeterAccessRule" }, { type: "azure-native:network/v20240601preview:NetworkSecurityPerimeterAccessRule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(NetworkSecurityPerimeterAccessRule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a NetworkSecurityPerimeterAccessRule resource.
 */
export interface NetworkSecurityPerimeterAccessRuleArgs {
    /**
     * The name of the NSP access rule.
     */
    accessRuleName?: pulumi.Input<string>;
    /**
     * Inbound address prefixes (IPv4/IPv6)
     */
    addressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Direction that specifies whether the access rules is inbound/outbound.
     */
    direction?: pulumi.Input<string | types.enums.AccessRuleDirection>;
    /**
     * Outbound rules email address format.
     */
    emailAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Outbound rules fully qualified domain name format.
     */
    fullyQualifiedDomainNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the network security perimeter.
     */
    networkSecurityPerimeterName: pulumi.Input<string>;
    /**
     * Outbound rules phone number format.
     */
    phoneNumbers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the NSP profile.
     */
    profileName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Inbound rules service tag names.
     */
    serviceTags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of subscription ids
     */
    subscriptions?: pulumi.Input<pulumi.Input<types.inputs.SubscriptionIdArgs>[]>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}