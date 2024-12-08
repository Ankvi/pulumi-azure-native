import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about the specified relationship Link.
 * Azure REST API version: 2017-04-26.
 */
export function getRelationshipLink(args: GetRelationshipLinkArgs, opts?: pulumi.InvokeOptions): Promise<GetRelationshipLinkResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:customerinsights:getRelationshipLink", {
        "hubName": args.hubName,
        "relationshipLinkName": args.relationshipLinkName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetRelationshipLinkArgs {
    /**
     * The name of the hub.
     */
    hubName: string;
    /**
     * The name of the relationship link.
     */
    relationshipLinkName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * The relationship link resource format.
 */
export interface GetRelationshipLinkResult {
    /**
     * Localized descriptions for the Relationship Link.
     */
    readonly description?: {[key: string]: string};
    /**
     * Localized display name for the Relationship Link.
     */
    readonly displayName?: {[key: string]: string};
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * The InteractionType associated with the Relationship Link.
     */
    readonly interactionType: string;
    /**
     * The name of the Relationship Link.
     */
    readonly linkName: string;
    /**
     * The mappings between Interaction and Relationship fields.
     */
    readonly mappings?: types.outputs.RelationshipLinkFieldMappingResponse[];
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The property references for the Profile of the Relationship.
     */
    readonly profilePropertyReferences: types.outputs.ParticipantProfilePropertyReferenceResponse[];
    /**
     * Provisioning state.
     */
    readonly provisioningState: string;
    /**
     * The property references for the Related Profile of the Relationship.
     */
    readonly relatedProfilePropertyReferences: types.outputs.ParticipantProfilePropertyReferenceResponse[];
    /**
     * The relationship guid id.
     */
    readonly relationshipGuidId: string;
    /**
     * The Relationship associated with the Link.
     */
    readonly relationshipName: string;
    /**
     * The hub name.
     */
    readonly tenantId: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets information about the specified relationship Link.
 * Azure REST API version: 2017-04-26.
 */
export function getRelationshipLinkOutput(args: GetRelationshipLinkOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetRelationshipLinkResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:customerinsights:getRelationshipLink", {
        "hubName": args.hubName,
        "relationshipLinkName": args.relationshipLinkName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetRelationshipLinkOutputArgs {
    /**
     * The name of the hub.
     */
    hubName: pulumi.Input<string>;
    /**
     * The name of the relationship link.
     */
    relationshipLinkName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}