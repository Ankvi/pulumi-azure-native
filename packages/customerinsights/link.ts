import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The link resource format.
 *
 * Uses Azure REST API version 2017-04-26. In version 2.x of the Azure Native provider, it used API version 2017-04-26.
 */
export class Link extends pulumi.CustomResource {
    /**
     * Get an existing Link resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Link {
        return new Link(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:customerinsights:Link';

    /**
     * Returns true if the given object is an instance of Link.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Link {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Link.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Localized descriptions for the Link.
     */
    public readonly description!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Localized display name for the Link.
     */
    public readonly displayName!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The link name.
     */
    public readonly linkName!: pulumi.Output<string>;
    /**
     * The set of properties mappings between the source and target Types.
     */
    public readonly mappings!: pulumi.Output<types.outputs.TypePropertiesMappingResponse[] | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Determines whether this link is supposed to create or delete instances if Link is NOT Reference Only.
     */
    public readonly operationType!: pulumi.Output<string | undefined>;
    /**
     * The properties that represent the participating profile.
     */
    public readonly participantPropertyReferences!: pulumi.Output<types.outputs.ParticipantPropertyReferenceResponse[]>;
    /**
     * Provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Indicating whether the link is reference only link. This flag is ignored if the Mappings are defined. If the mappings are not defined and it is set to true, links processing will not create or update profiles.
     */
    public readonly referenceOnly!: pulumi.Output<boolean | undefined>;
    /**
     * Type of source entity.
     */
    public readonly sourceEntityType!: pulumi.Output<string>;
    /**
     * Name of the source Entity Type.
     */
    public readonly sourceEntityTypeName!: pulumi.Output<string>;
    /**
     * Type of target entity.
     */
    public readonly targetEntityType!: pulumi.Output<string>;
    /**
     * Name of the target Entity Type.
     */
    public readonly targetEntityTypeName!: pulumi.Output<string>;
    /**
     * The hub name.
     */
    public /*out*/ readonly tenantId!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Link resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LinkArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.hubName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hubName'");
            }
            if ((!args || args.participantPropertyReferences === undefined) && !opts.urn) {
                throw new Error("Missing required property 'participantPropertyReferences'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sourceEntityType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourceEntityType'");
            }
            if ((!args || args.sourceEntityTypeName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourceEntityTypeName'");
            }
            if ((!args || args.targetEntityType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetEntityType'");
            }
            if ((!args || args.targetEntityTypeName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetEntityTypeName'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["hubName"] = args ? args.hubName : undefined;
            resourceInputs["linkName"] = args ? args.linkName : undefined;
            resourceInputs["mappings"] = args ? args.mappings : undefined;
            resourceInputs["operationType"] = args ? args.operationType : undefined;
            resourceInputs["participantPropertyReferences"] = args ? args.participantPropertyReferences : undefined;
            resourceInputs["referenceOnly"] = args ? args.referenceOnly : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sourceEntityType"] = args ? args.sourceEntityType : undefined;
            resourceInputs["sourceEntityTypeName"] = args ? args.sourceEntityTypeName : undefined;
            resourceInputs["targetEntityType"] = args ? args.targetEntityType : undefined;
            resourceInputs["targetEntityTypeName"] = args ? args.targetEntityTypeName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["linkName"] = undefined /*out*/;
            resourceInputs["mappings"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["operationType"] = undefined /*out*/;
            resourceInputs["participantPropertyReferences"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["referenceOnly"] = undefined /*out*/;
            resourceInputs["sourceEntityType"] = undefined /*out*/;
            resourceInputs["sourceEntityTypeName"] = undefined /*out*/;
            resourceInputs["targetEntityType"] = undefined /*out*/;
            resourceInputs["targetEntityTypeName"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:customerinsights/v20170101:Link" }, { type: "azure-native:customerinsights/v20170426:Link" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Link.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Link resource.
 */
export interface LinkArgs {
    /**
     * Localized descriptions for the Link.
     */
    description?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Localized display name for the Link.
     */
    displayName?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the hub.
     */
    hubName: pulumi.Input<string>;
    /**
     * The name of the link.
     */
    linkName?: pulumi.Input<string>;
    /**
     * The set of properties mappings between the source and target Types.
     */
    mappings?: pulumi.Input<pulumi.Input<types.inputs.TypePropertiesMappingArgs>[]>;
    /**
     * Determines whether this link is supposed to create or delete instances if Link is NOT Reference Only.
     */
    operationType?: pulumi.Input<types.enums.InstanceOperationType>;
    /**
     * The properties that represent the participating profile.
     */
    participantPropertyReferences: pulumi.Input<pulumi.Input<types.inputs.ParticipantPropertyReferenceArgs>[]>;
    /**
     * Indicating whether the link is reference only link. This flag is ignored if the Mappings are defined. If the mappings are not defined and it is set to true, links processing will not create or update profiles.
     */
    referenceOnly?: pulumi.Input<boolean>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Type of source entity.
     */
    sourceEntityType: pulumi.Input<types.enums.EntityType>;
    /**
     * Name of the source Entity Type.
     */
    sourceEntityTypeName: pulumi.Input<string>;
    /**
     * Type of target entity.
     */
    targetEntityType: pulumi.Input<types.enums.EntityType>;
    /**
     * Name of the target Entity Type.
     */
    targetEntityTypeName: pulumi.Input<string>;
}