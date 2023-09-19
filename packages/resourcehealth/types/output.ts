import * as pulumi from "@pulumi/pulumi";
/**
 * Impacted resource for an event.
 */
export interface EventImpactedResourceResponse {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    id: string;
    /**
     * Additional information.
     */
    info?: KeyValueItemResponse[];
    /**
     * The name of the resource
     */
    name: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    systemData: SystemDataResponse;
    /**
     * Impacted resource region name.
     */
    targetRegion: string;
    /**
     * Identity for resource within Microsoft cloud.
     */
    targetResourceId: string;
    /**
     * Resource type within Microsoft cloud.
     */
    targetResourceType: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    type: string;
}

/**
 * Key value tuple.
 */
export interface KeyValueItemResponse {
    /**
     * Key of tuple.
     */
    key: string;
    /**
     * Value of tuple.
     */
    value: string;
}

/**
 * Metadata pertaining to creation and last modification of the resource.
 */
export interface SystemDataResponse {
    /**
     * The timestamp of resource creation (UTC).
     */
    createdAt?: string;
    /**
     * The identity that created the resource.
     */
    createdBy?: string;
    /**
     * The type of identity that created the resource.
     */
    createdByType?: string;
    /**
     * The timestamp of resource last modification (UTC)
     */
    lastModifiedAt?: string;
    /**
     * The identity that last modified the resource.
     */
    lastModifiedBy?: string;
    /**
     * The type of identity that last modified the resource.
     */
    lastModifiedByType?: string;
}


