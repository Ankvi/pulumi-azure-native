import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Description of a Namespace AuthorizationRules.
 */
export class NamespaceAuthorizationRule extends pulumi.CustomResource {
    /**
     * Get an existing NamespaceAuthorizationRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NamespaceAuthorizationRule {
        return new NamespaceAuthorizationRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:notificationhubs/v20170401:NamespaceAuthorizationRule';

    /**
     * Returns true if the given object is an instance of NamespaceAuthorizationRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NamespaceAuthorizationRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NamespaceAuthorizationRule.__pulumiType;
    }

    /**
     * A string that describes the claim type
     */
    public /*out*/ readonly claimType!: pulumi.Output<string>;
    /**
     * A string that describes the claim value
     */
    public /*out*/ readonly claimValue!: pulumi.Output<string>;
    /**
     * The created time for this rule
     */
    public /*out*/ readonly createdTime!: pulumi.Output<string>;
    /**
     * A string that describes the authorization rule.
     */
    public /*out*/ readonly keyName!: pulumi.Output<string>;
    /**
     * Resource location
     */
    public /*out*/ readonly location!: pulumi.Output<string | undefined>;
    /**
     * The last modified time for this rule
     */
    public /*out*/ readonly modifiedTime!: pulumi.Output<string>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * A base64-encoded 256-bit primary key for signing and validating the SAS token.
     */
    public /*out*/ readonly primaryKey!: pulumi.Output<string>;
    /**
     * The revision number for the rule
     */
    public /*out*/ readonly revision!: pulumi.Output<number>;
    /**
     * The rights associated with the rule.
     */
    public /*out*/ readonly rights!: pulumi.Output<string[] | undefined>;
    /**
     * A base64-encoded 256-bit primary key for signing and validating the SAS token.
     */
    public /*out*/ readonly secondaryKey!: pulumi.Output<string>;
    /**
     * The sku of the created namespace
     */
    public /*out*/ readonly sku!: pulumi.Output<types.outputs.SkuResponse | undefined>;
    /**
     * Resource tags
     */
    public /*out*/ readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a NamespaceAuthorizationRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NamespaceAuthorizationRuleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.namespaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'namespaceName'");
            }
            if ((!args || args.properties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'properties'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["authorizationRuleName"] = args ? args.authorizationRuleName : undefined;
            resourceInputs["namespaceName"] = args ? args.namespaceName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["claimType"] = undefined /*out*/;
            resourceInputs["claimValue"] = undefined /*out*/;
            resourceInputs["createdTime"] = undefined /*out*/;
            resourceInputs["keyName"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["modifiedTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["primaryKey"] = undefined /*out*/;
            resourceInputs["revision"] = undefined /*out*/;
            resourceInputs["rights"] = undefined /*out*/;
            resourceInputs["secondaryKey"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["claimType"] = undefined /*out*/;
            resourceInputs["claimValue"] = undefined /*out*/;
            resourceInputs["createdTime"] = undefined /*out*/;
            resourceInputs["keyName"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["modifiedTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["primaryKey"] = undefined /*out*/;
            resourceInputs["revision"] = undefined /*out*/;
            resourceInputs["rights"] = undefined /*out*/;
            resourceInputs["secondaryKey"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:notificationhubs:NamespaceAuthorizationRule" }, { type: "azure-native:notificationhubs/v20160301:NamespaceAuthorizationRule" }, { type: "azure-native:notificationhubs/v20230101preview:NamespaceAuthorizationRule" }, { type: "azure-native:notificationhubs/v20230901:NamespaceAuthorizationRule" }, { type: "azure-native:notificationhubs/v20231001preview:NamespaceAuthorizationRule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(NamespaceAuthorizationRule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a NamespaceAuthorizationRule resource.
 */
export interface NamespaceAuthorizationRuleArgs {
    /**
     * Authorization Rule Name.
     */
    authorizationRuleName?: pulumi.Input<string>;
    /**
     * The namespace name.
     */
    namespaceName: pulumi.Input<string>;
    /**
     * Properties of the Namespace AuthorizationRules.
     */
    properties: pulumi.Input<types.inputs.SharedAccessAuthorizationRulePropertiesArgs>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
