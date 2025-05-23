import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The relationship resource format.
 *
 * Uses Azure REST API version 2017-04-26. In version 2.x of the Azure Native provider, it used API version 2017-04-26.
 */
export class Relationship extends pulumi.CustomResource {
    /**
     * Get an existing Relationship resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Relationship {
        return new Relationship(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:customerinsights:Relationship';

    /**
     * Returns true if the given object is an instance of Relationship.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Relationship {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Relationship.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The Relationship Cardinality.
     */
    public readonly cardinality!: pulumi.Output<string | undefined>;
    /**
     * Localized descriptions for the Relationship.
     */
    public readonly description!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Localized display name for the Relationship.
     */
    public readonly displayName!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The expiry date time in UTC.
     */
    public readonly expiryDateTimeUtc!: pulumi.Output<string | undefined>;
    /**
     * The properties of the Relationship.
     */
    public readonly fields!: pulumi.Output<types.outputs.PropertyDefinitionResponse[] | undefined>;
    /**
     * Optional property to be used to map fields in profile to their strong ids in related profile.
     */
    public readonly lookupMappings!: pulumi.Output<types.outputs.RelationshipTypeMappingResponse[] | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Profile type.
     */
    public readonly profileType!: pulumi.Output<string>;
    /**
     * Provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Related profile being referenced.
     */
    public readonly relatedProfileType!: pulumi.Output<string>;
    /**
     * The relationship guid id.
     */
    public /*out*/ readonly relationshipGuidId!: pulumi.Output<string>;
    /**
     * The Relationship name.
     */
    public readonly relationshipName!: pulumi.Output<string>;
    /**
     * The hub name.
     */
    public /*out*/ readonly tenantId!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Relationship resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RelationshipArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.hubName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hubName'");
            }
            if ((!args || args.profileType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'profileType'");
            }
            if ((!args || args.relatedProfileType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'relatedProfileType'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["cardinality"] = args ? args.cardinality : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["expiryDateTimeUtc"] = args ? args.expiryDateTimeUtc : undefined;
            resourceInputs["fields"] = args ? args.fields : undefined;
            resourceInputs["hubName"] = args ? args.hubName : undefined;
            resourceInputs["lookupMappings"] = args ? args.lookupMappings : undefined;
            resourceInputs["profileType"] = args ? args.profileType : undefined;
            resourceInputs["relatedProfileType"] = args ? args.relatedProfileType : undefined;
            resourceInputs["relationshipName"] = args ? args.relationshipName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["relationshipGuidId"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["cardinality"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["expiryDateTimeUtc"] = undefined /*out*/;
            resourceInputs["fields"] = undefined /*out*/;
            resourceInputs["lookupMappings"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["profileType"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["relatedProfileType"] = undefined /*out*/;
            resourceInputs["relationshipGuidId"] = undefined /*out*/;
            resourceInputs["relationshipName"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:customerinsights/v20170101:Relationship" }, { type: "azure-native:customerinsights/v20170426:Relationship" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Relationship.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Relationship resource.
 */
export interface RelationshipArgs {
    /**
     * The Relationship Cardinality.
     */
    cardinality?: pulumi.Input<types.enums.CardinalityTypes>;
    /**
     * Localized descriptions for the Relationship.
     */
    description?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Localized display name for the Relationship.
     */
    displayName?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The expiry date time in UTC.
     */
    expiryDateTimeUtc?: pulumi.Input<string>;
    /**
     * The properties of the Relationship.
     */
    fields?: pulumi.Input<pulumi.Input<types.inputs.PropertyDefinitionArgs>[]>;
    /**
     * The name of the hub.
     */
    hubName: pulumi.Input<string>;
    /**
     * Optional property to be used to map fields in profile to their strong ids in related profile.
     */
    lookupMappings?: pulumi.Input<pulumi.Input<types.inputs.RelationshipTypeMappingArgs>[]>;
    /**
     * Profile type.
     */
    profileType: pulumi.Input<string>;
    /**
     * Related profile being referenced.
     */
    relatedProfileType: pulumi.Input<string>;
    /**
     * The name of the Relationship.
     */
    relationshipName?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}