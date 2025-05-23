import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Properties that define an Analytics item that is associated to an Application Insights component.
 *
 * Uses Azure REST API version 2015-05-01.
 */
export class AnalyticsItem extends pulumi.CustomResource {
    /**
     * Get an existing AnalyticsItem resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AnalyticsItem {
        return new AnalyticsItem(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:applicationinsights:AnalyticsItem';

    /**
     * Returns true if the given object is an instance of AnalyticsItem.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AnalyticsItem {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AnalyticsItem.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The content of this item
     */
    public readonly content!: pulumi.Output<string | undefined>;
    /**
     * The user-defined name of the item.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * A set of properties that can be defined in the context of a specific item type. Each type may have its own properties.
     */
    public readonly properties!: pulumi.Output<types.outputs.ApplicationInsightsComponentAnalyticsItemPropertiesResponse>;
    /**
     * Enum indicating if this item definition is owned by a specific user or is shared between all users with access to the Application Insights component.
     */
    public readonly scope!: pulumi.Output<string | undefined>;
    /**
     * Date and time in UTC when this item was created.
     */
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    /**
     * Date and time in UTC of the last modification that was made to this item.
     */
    public /*out*/ readonly timeModified!: pulumi.Output<string>;
    /**
     * Enum indicating the type of the Analytics item.
     */
    public readonly type!: pulumi.Output<string | undefined>;
    /**
     * This instance's version of the data model. This can change as new features are added.
     */
    public /*out*/ readonly version!: pulumi.Output<string>;

    /**
     * Create a AnalyticsItem resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AnalyticsItemArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.resourceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceName'");
            }
            if ((!args || args.scopePath === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scopePath'");
            }
            resourceInputs["content"] = args ? args.content : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["overrideItem"] = args ? args.overrideItem : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["scopePath"] = args ? args.scopePath : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["timeModified"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["content"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["scope"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["timeModified"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:applicationinsights/v20150501:AnalyticsItem" }, { type: "azure-native:insights/v20150501:AnalyticsItem" }, { type: "azure-native:insights:AnalyticsItem" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AnalyticsItem.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AnalyticsItem resource.
 */
export interface AnalyticsItemArgs {
    /**
     * The content of this item
     */
    content?: pulumi.Input<string>;
    /**
     * Internally assigned unique id of the item definition.
     */
    id?: pulumi.Input<string>;
    /**
     * The user-defined name of the item.
     */
    name?: pulumi.Input<string>;
    /**
     * Flag indicating whether or not to force save an item. This allows overriding an item if it already exists.
     */
    overrideItem?: pulumi.Input<boolean>;
    /**
     * A set of properties that can be defined in the context of a specific item type. Each type may have its own properties.
     */
    properties?: pulumi.Input<types.inputs.ApplicationInsightsComponentAnalyticsItemPropertiesArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Application Insights component resource.
     */
    resourceName: pulumi.Input<string>;
    /**
     * Enum indicating if this item definition is owned by a specific user or is shared between all users with access to the Application Insights component.
     */
    scope?: pulumi.Input<string | types.enums.ItemScope>;
    /**
     * Enum indicating if this item definition is owned by a specific user or is shared between all users with access to the Application Insights component.
     */
    scopePath: pulumi.Input<string>;
    /**
     * Enum indicating the type of the Analytics item.
     */
    type?: pulumi.Input<string | types.enums.ItemType>;
}