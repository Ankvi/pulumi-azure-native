import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Response for POST requests that return single SharedAccessAuthorizationRule.
 *
 * Uses Azure REST API version 2023-01-01-preview. In version 1.x of the Azure Native provider, it used API version 2017-04-01.
 *
 * Other available API versions: 2017-04-01, 2023-09-01, 2023-10-01-preview.
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
     * Deprecated - only for compatibility.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * SharedAccessAuthorizationRule properties.
     */
    public readonly properties!: pulumi.Output<types.outputs.SharedAccessAuthorizationRulePropertiesResponse>;
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
            resourceInputs["authorizationRuleName"] = args ? args.authorizationRuleName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["namespaceName"] = args ? args.namespaceName : undefined;
            resourceInputs["notificationHubName"] = args ? args.notificationHubName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
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
     * SharedAccessAuthorizationRule properties.
     */
    properties?: pulumi.Input<types.inputs.SharedAccessAuthorizationRulePropertiesArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Deprecated - only for compatibility.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}