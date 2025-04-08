import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Response for POST requests that return single SharedAccessAuthorizationRule.
 *
 * Uses Azure REST API version 2023-10-01-preview. In version 2.x of the Azure Native provider, it used API version 2023-01-01-preview.
 *
 * Other available API versions: 2023-01-01-preview, 2023-09-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native notificationhubs [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class NotificationHubAuthorizationRule extends pulumi.CustomResource {
    /**
     * Get an existing NotificationHubAuthorizationRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NotificationHubAuthorizationRule {
        return new NotificationHubAuthorizationRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:notificationhubs:NotificationHubAuthorizationRule';

    /**
     * Returns true if the given object is an instance of NotificationHubAuthorizationRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NotificationHubAuthorizationRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NotificationHubAuthorizationRule.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Gets a string that describes the claim type
     */
    public /*out*/ readonly claimType!: pulumi.Output<string>;
    /**
     * Gets a string that describes the claim value
     */
    public /*out*/ readonly claimValue!: pulumi.Output<string>;
    /**
     * Gets the created time for this rule
     */
    public /*out*/ readonly createdTime!: pulumi.Output<string>;
    /**
     * Gets a string that describes the authorization rule.
     */
    public /*out*/ readonly keyName!: pulumi.Output<string>;
    /**
     * Deprecated - only for compatibility.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Gets the last modified time for this rule
     */
    public /*out*/ readonly modifiedTime!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Gets a base64-encoded 256-bit primary key for signing and
     * validating the SAS token.
     */
    public readonly primaryKey!: pulumi.Output<string | undefined>;
    /**
     * Gets the revision number for the rule
     */
    public /*out*/ readonly revision!: pulumi.Output<number>;
    /**
     * Gets or sets the rights associated with the rule.
     */
    public readonly rights!: pulumi.Output<string[]>;
    /**
     * Gets a base64-encoded 256-bit primary key for signing and
     * validating the SAS token.
     */
    public readonly secondaryKey!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Deprecated - only for compatibility.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a NotificationHubAuthorizationRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NotificationHubAuthorizationRuleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.namespaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'namespaceName'");
            }
            if ((!args || args.notificationHubName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'notificationHubName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.rights === undefined) && !opts.urn) {
                throw new Error("Missing required property 'rights'");
            }
            resourceInputs["authorizationRuleName"] = args ? args.authorizationRuleName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["namespaceName"] = args ? args.namespaceName : undefined;
            resourceInputs["notificationHubName"] = args ? args.notificationHubName : undefined;
            resourceInputs["primaryKey"] = args ? args.primaryKey : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["rights"] = args ? args.rights : undefined;
            resourceInputs["secondaryKey"] = args ? args.secondaryKey : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["claimType"] = undefined /*out*/;
            resourceInputs["claimValue"] = undefined /*out*/;
            resourceInputs["createdTime"] = undefined /*out*/;
            resourceInputs["keyName"] = undefined /*out*/;
            resourceInputs["modifiedTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["revision"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
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
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:notificationhubs/v20160301:NotificationHubAuthorizationRule" }, { type: "azure-native:notificationhubs/v20170401:NotificationHubAuthorizationRule" }, { type: "azure-native:notificationhubs/v20230101preview:NotificationHubAuthorizationRule" }, { type: "azure-native:notificationhubs/v20230901:NotificationHubAuthorizationRule" }, { type: "azure-native:notificationhubs/v20231001preview:NotificationHubAuthorizationRule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(NotificationHubAuthorizationRule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a NotificationHubAuthorizationRule resource.
 */
export interface NotificationHubAuthorizationRuleArgs {
    /**
     * Authorization Rule Name
     */
    authorizationRuleName?: pulumi.Input<string>;
    /**
     * Deprecated - only for compatibility.
     */
    location?: pulumi.Input<string>;
    /**
     * Namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * Notification Hub name
     */
    notificationHubName: pulumi.Input<string>;
    /**
     * Gets a base64-encoded 256-bit primary key for signing and
     * validating the SAS token.
     */
    primaryKey?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Gets or sets the rights associated with the rule.
     */
    rights: pulumi.Input<pulumi.Input<string | types.enums.AccessRights>[]>;
    /**
     * Gets a base64-encoded 256-bit primary key for signing and
     * validating the SAS token.
     */
    secondaryKey?: pulumi.Input<string>;
    /**
     * Deprecated - only for compatibility.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}