import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The profile resource format.
 *
 * Uses Azure REST API version 2017-04-26. In version 1.x of the Azure Native provider, it used API version 2017-04-26.
 */
export class Profile extends pulumi.CustomResource {
    /**
     * Get an existing Profile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Profile {
        return new Profile(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:customerinsights:Profile';

    /**
     * Returns true if the given object is an instance of Profile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Profile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Profile.__pulumiType;
    }

    /**
     * The api entity set name. This becomes the odata entity set name for the entity Type being referred in this object.
     */
    public readonly apiEntitySetName!: pulumi.Output<string | undefined>;
    /**
     * The attributes for the Type.
     */
    public readonly attributes!: pulumi.Output<{[key: string]: string[]} | undefined>;
    /**
     * Localized descriptions for the property.
     */
    public readonly description!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Localized display names for the property.
     */
    public readonly displayName!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Type of entity.
     */
    public readonly entityType!: pulumi.Output<string | undefined>;
    /**
     * The properties of the Profile.
     */
    public readonly fields!: pulumi.Output<types.outputs.PropertyDefinitionResponse[] | undefined>;
    /**
     * The instance count.
     */
    public readonly instancesCount!: pulumi.Output<number | undefined>;
    /**
     * Large Image associated with the Property or EntityType.
     */
    public readonly largeImage!: pulumi.Output<string | undefined>;
    /**
     * The last changed time for the type definition.
     */
    public /*out*/ readonly lastChangedUtc!: pulumi.Output<string>;
    /**
     * Any custom localized attributes for the Type.
     */
    public readonly localizedAttributes!: pulumi.Output<{[key: string]: {[key: string]: string}} | undefined>;
    /**
     * Medium Image associated with the Property or EntityType.
     */
    public readonly mediumImage!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The schema org link. This helps ACI identify and suggest semantic models.
     */
    public readonly schemaItemTypeLink!: pulumi.Output<string | undefined>;
    /**
     * Small Image associated with the Property or EntityType.
     */
    public readonly smallImage!: pulumi.Output<string | undefined>;
    /**
     * The strong IDs.
     */
    public readonly strongIds!: pulumi.Output<types.outputs.StrongIdResponse[] | undefined>;
    /**
     * The hub name.
     */
    public /*out*/ readonly tenantId!: pulumi.Output<string>;
    /**
     * The timestamp property name. Represents the time when the interaction or profile update happened.
     */
    public readonly timestampFieldName!: pulumi.Output<string | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The name of the entity.
     */
    public readonly typeName!: pulumi.Output<string | undefined>;

    /**
     * Create a Profile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProfileArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.hubName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hubName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["apiEntitySetName"] = args ? args.apiEntitySetName : undefined;
            resourceInputs["attributes"] = args ? args.attributes : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["entityType"] = args ? args.entityType : undefined;
            resourceInputs["fields"] = args ? args.fields : undefined;
            resourceInputs["hubName"] = args ? args.hubName : undefined;
            resourceInputs["instancesCount"] = args ? args.instancesCount : undefined;
            resourceInputs["largeImage"] = args ? args.largeImage : undefined;
            resourceInputs["localizedAttributes"] = args ? args.localizedAttributes : undefined;
            resourceInputs["mediumImage"] = args ? args.mediumImage : undefined;
            resourceInputs["profileName"] = args ? args.profileName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["schemaItemTypeLink"] = args ? args.schemaItemTypeLink : undefined;
            resourceInputs["smallImage"] = args ? args.smallImage : undefined;
            resourceInputs["strongIds"] = args ? args.strongIds : undefined;
            resourceInputs["timestampFieldName"] = args ? args.timestampFieldName : undefined;
            resourceInputs["typeName"] = args ? args.typeName : undefined;
            resourceInputs["lastChangedUtc"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["apiEntitySetName"] = undefined /*out*/;
            resourceInputs["attributes"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["entityType"] = undefined /*out*/;
            resourceInputs["fields"] = undefined /*out*/;
            resourceInputs["instancesCount"] = undefined /*out*/;
            resourceInputs["largeImage"] = undefined /*out*/;
            resourceInputs["lastChangedUtc"] = undefined /*out*/;
            resourceInputs["localizedAttributes"] = undefined /*out*/;
            resourceInputs["mediumImage"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["schemaItemTypeLink"] = undefined /*out*/;
            resourceInputs["smallImage"] = undefined /*out*/;
            resourceInputs["strongIds"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["timestampFieldName"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["typeName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:customerinsights/v20170101:Profile" }, { type: "azure-native:customerinsights/v20170426:Profile" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Profile.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Profile resource.
 */
export interface ProfileArgs {
    /**
     * The api entity set name. This becomes the odata entity set name for the entity Type being referred in this object.
     */
    apiEntitySetName?: pulumi.Input<string>;
    /**
     * The attributes for the Type.
     */
    attributes?: pulumi.Input<{[key: string]: pulumi.Input<pulumi.Input<string>[]>}>;
    /**
     * Localized descriptions for the property.
     */
    description?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Localized display names for the property.
     */
    displayName?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Type of entity.
     */
    entityType?: pulumi.Input<types.enums.EntityTypes>;
    /**
     * The properties of the Profile.
     */
    fields?: pulumi.Input<pulumi.Input<types.inputs.PropertyDefinitionArgs>[]>;
    /**
     * The name of the hub.
     */
    hubName: pulumi.Input<string>;
    /**
     * The instance count.
     */
    instancesCount?: pulumi.Input<number>;
    /**
     * Large Image associated with the Property or EntityType.
     */
    largeImage?: pulumi.Input<string>;
    /**
     * Any custom localized attributes for the Type.
     */
    localizedAttributes?: pulumi.Input<{[key: string]: pulumi.Input<{[key: string]: pulumi.Input<string>}>}>;
    /**
     * Medium Image associated with the Property or EntityType.
     */
    mediumImage?: pulumi.Input<string>;
    /**
     * The name of the profile.
     */
    profileName?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The schema org link. This helps ACI identify and suggest semantic models.
     */
    schemaItemTypeLink?: pulumi.Input<string>;
    /**
     * Small Image associated with the Property or EntityType.
     */
    smallImage?: pulumi.Input<string>;
    /**
     * The strong IDs.
     */
    strongIds?: pulumi.Input<pulumi.Input<types.inputs.StrongIdArgs>[]>;
    /**
     * The timestamp property name. Represents the time when the interaction or profile update happened.
     */
    timestampFieldName?: pulumi.Input<string>;
    /**
     * The name of the entity.
     */
    typeName?: pulumi.Input<string>;
}