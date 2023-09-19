import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Single item in a List or Get AuthorizationRule operation
 */
export class WCFRelayAuthorizationRule extends pulumi.CustomResource {
    /**
     * Get an existing WCFRelayAuthorizationRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WCFRelayAuthorizationRule {
        return new WCFRelayAuthorizationRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:relay/v20211101:WCFRelayAuthorizationRule';

    /**
     * Returns true if the given object is an instance of WCFRelayAuthorizationRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WCFRelayAuthorizationRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WCFRelayAuthorizationRule.__pulumiType;
    }

    /**
     * The geo-location where the resource lives
     */
    public /*out*/ readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The rights associated with the rule.
     */
    public readonly rights!: pulumi.Output<string[]>;
    /**
     * The system meta data relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.EventHub/Namespaces" or "Microsoft.EventHub/Namespaces/EventHubs"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a WCFRelayAuthorizationRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WCFRelayAuthorizationRuleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.namespaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'namespaceName'");
            }
            if ((!args || args.relayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'relayName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.rights === undefined) && !opts.urn) {
                throw new Error("Missing required property 'rights'");
            }
            resourceInputs["authorizationRuleName"] = args ? args.authorizationRuleName : undefined;
            resourceInputs["namespaceName"] = args ? args.namespaceName : undefined;
            resourceInputs["relayName"] = args ? args.relayName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["rights"] = args ? args.rights : undefined;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["rights"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:relay:WCFRelayAuthorizationRule" }, { type: "azure-native:relay/v20160701:WCFRelayAuthorizationRule" }, { type: "azure-native:relay/v20170401:WCFRelayAuthorizationRule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WCFRelayAuthorizationRule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WCFRelayAuthorizationRule resource.
 */
export interface WCFRelayAuthorizationRuleArgs {
    /**
     * The authorization rule name.
     */
    authorizationRuleName?: pulumi.Input<string>;
    /**
     * The namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The relay name.
     */
    relayName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The rights associated with the rule.
     */
    rights: pulumi.Input<pulumi.Input<string | types.enums.AccessRights>[]>;
}
