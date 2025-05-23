import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The NSP access rule resource
 *
 * Uses Azure REST API version 2023-08-01-preview. In version 2.x of the Azure Native provider, it used API version 2021-02-01-preview.
 *
 * Other available API versions: 2021-02-01-preview, 2023-07-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class NspAccessRule extends pulumi.CustomResource {
    /**
     * Get an existing NspAccessRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NspAccessRule {
        return new NspAccessRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:NspAccessRule';

    /**
     * Returns true if the given object is an instance of NspAccessRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NspAccessRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NspAccessRule.__pulumiType;
    }

    /**
     * Inbound address prefixes (IPv4/IPv6)
     */
    public readonly addressPrefixes!: pulumi.Output<string[] | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
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
    public readonly name!: pulumi.Output<string>;
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
     * Create a NspAccessRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NspAccessRuleArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["networkSecurityPerimeterName"] = args ? args.networkSecurityPerimeterName : undefined;
            resourceInputs["phoneNumbers"] = args ? args.phoneNumbers : undefined;
            resourceInputs["profileName"] = args ? args.profileName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceTags"] = args ? args.serviceTags : undefined;
            resourceInputs["subscriptions"] = args ? args.subscriptions : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["networkSecurityPerimeters"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["addressPrefixes"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
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
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20210201preview:NspAccessRule" }, { type: "azure-native:network/v20230701preview:NspAccessRule" }, { type: "azure-native:network/v20230801preview:NspAccessRule" }, { type: "azure-native:network/v20240601preview:NspAccessRule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(NspAccessRule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a NspAccessRule resource.
 */
export interface NspAccessRuleArgs {
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
     * The name of the access rule that is unique within a profile. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
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