import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The relationship link resource format.
 * Azure REST API version: 2017-04-26. Prior API version in Azure Native 1.x: 2017-04-26.
 *
 * Other available API versions: 2017-01-01.
 */
export class RelationshipLink extends pulumi.CustomResource {
    /**
     * Get an existing RelationshipLink resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RelationshipLink {
        return new RelationshipLink(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:customerinsights:RelationshipLink';

    /**
     * Returns true if the given object is an instance of RelationshipLink.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RelationshipLink {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RelationshipLink.__pulumiType;
    }

    /**
     * Localized descriptions for the Relationship Link.
     */
    public readonly description!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Localized display name for the Relationship Link.
     */
    public readonly displayName!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The InteractionType associated with the Relationship Link.
     */
    public readonly interactionType!: pulumi.Output<string>;
    /**
     * The name of the Relationship Link.
     */
    public /*out*/ readonly linkName!: pulumi.Output<string>;
    /**
     * The mappings between Interaction and Relationship fields.
     */
    public readonly mappings!: pulumi.Output<types.outputs.RelationshipLinkFieldMappingResponse[] | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The property references for the Profile of the Relationship.
     */
    public readonly profilePropertyReferences!: pulumi.Output<types.outputs.ParticipantProfilePropertyReferenceResponse[]>;
    /**
     * Provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The property references for the Related Profile of the Relationship.
     */
    public readonly relatedProfilePropertyReferences!: pulumi.Output<types.outputs.ParticipantProfilePropertyReferenceResponse[]>;
    /**
     * The relationship guid id.
     */
    public /*out*/ readonly relationshipGuidId!: pulumi.Output<string>;
    /**
     * The Relationship associated with the Link.
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
     * Create a RelationshipLink resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RelationshipLinkArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.hubName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hubName'");
            }
            if ((!args || args.interactionType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'interactionType'");
            }
            if ((!args || args.profilePropertyReferences === undefined) && !opts.urn) {
                throw new Error("Missing required property 'profilePropertyReferences'");
            }
            if ((!args || args.relatedProfilePropertyReferences === undefined) && !opts.urn) {
                throw new Error("Missing required property 'relatedProfilePropertyReferences'");
            }
            if ((!args || args.relationshipName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'relationshipName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["hubName"] = args ? args.hubName : undefined;
            resourceInputs["interactionType"] = args ? args.interactionType : undefined;
            resourceInputs["mappings"] = args ? args.mappings : undefined;
            resourceInputs["profilePropertyReferences"] = args ? args.profilePropertyReferences : undefined;
            resourceInputs["relatedProfilePropertyReferences"] = args ? args.relatedProfilePropertyReferences : undefined;
            resourceInputs["relationshipLinkName"] = args ? args.relationshipLinkName : undefined;
            resourceInputs["relationshipName"] = args ? args.relationshipName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["linkName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["relationshipGuidId"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["interactionType"] = undefined /*out*/;
            resourceInputs["linkName"] = undefined /*out*/;
            resourceInputs["mappings"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["profilePropertyReferences"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["relatedProfilePropertyReferences"] = undefined /*out*/;
            resourceInputs["relationshipGuidId"] = undefined /*out*/;
            resourceInputs["relationshipName"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:customerinsights/v20170101:RelationshipLink" }, { type: "azure-native:customerinsights/v20170426:RelationshipLink" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(RelationshipLink.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a RelationshipLink resource.
 */
export interface RelationshipLinkArgs {
    /**
     * Localized descriptions for the Relationship Link.
     */
    description?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Localized display name for the Relationship Link.
     */
    displayName?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the hub.
     */
    hubName: pulumi.Input<string>;
    /**
     * The InteractionType associated with the Relationship Link.
     */
    interactionType: pulumi.Input<string>;
    /**
     * The mappings between Interaction and Relationship fields.
     */
    mappings?: pulumi.Input<pulumi.Input<types.inputs.RelationshipLinkFieldMappingArgs>[]>;
    /**
     * The property references for the Profile of the Relationship.
     */
    profilePropertyReferences: pulumi.Input<pulumi.Input<types.inputs.ParticipantProfilePropertyReferenceArgs>[]>;
    /**
     * The property references for the Related Profile of the Relationship.
     */
    relatedProfilePropertyReferences: pulumi.Input<pulumi.Input<types.inputs.ParticipantProfilePropertyReferenceArgs>[]>;
    /**
     * The name of the relationship link.
     */
    relationshipLinkName?: pulumi.Input<string>;
    /**
     * The Relationship associated with the Link.
     */
    relationshipName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
