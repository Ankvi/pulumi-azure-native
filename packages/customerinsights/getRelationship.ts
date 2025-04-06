import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about the specified relationship.
 *
 * Uses Azure REST API version 2017-04-26.
 */
export function getRelationship(args: GetRelationshipArgs, opts?: pulumi.InvokeOptions): Promise<GetRelationshipResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:customerinsights:getRelationship", {
        "hubName": args.hubName,
        "relationshipName": args.relationshipName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetRelationshipArgs {
    /**
     * The name of the hub.
     */
    hubName: string;
    /**
     * The name of the relationship.
     */
    relationshipName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * The relationship resource format.
 */
export interface GetRelationshipResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The Relationship Cardinality.
     */
    readonly cardinality?: string;
    /**
     * Localized descriptions for the Relationship.
     */
    readonly description?: {[key: string]: string};
    /**
     * Localized display name for the Relationship.
     */
    readonly displayName?: {[key: string]: string};
    /**
     * The expiry date time in UTC.
     */
    readonly expiryDateTimeUtc?: string;
    /**
     * The properties of the Relationship.
     */
    readonly fields?: types.outputs.PropertyDefinitionResponse[];
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Optional property to be used to map fields in profile to their strong ids in related profile.
     */
    readonly lookupMappings?: types.outputs.RelationshipTypeMappingResponse[];
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Profile type.
     */
    readonly profileType: string;
    /**
     * Provisioning state.
     */
    readonly provisioningState: string;
    /**
     * Related profile being referenced.
     */
    readonly relatedProfileType: string;
    /**
     * The relationship guid id.
     */
    readonly relationshipGuidId: string;
    /**
     * The Relationship name.
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
 * Gets information about the specified relationship.
 *
 * Uses Azure REST API version 2017-04-26.
 */
export function getRelationshipOutput(args: GetRelationshipOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetRelationshipResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:customerinsights:getRelationship", {
        "hubName": args.hubName,
        "relationshipName": args.relationshipName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetRelationshipOutputArgs {
    /**
     * The name of the hub.
     */
    hubName: pulumi.Input<string>;
    /**
     * The name of the relationship.
     */
    relationshipName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}