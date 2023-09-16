import * as pulumi from "@pulumi/pulumi";
export namespace resourcehealth {
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

    export namespace v20221001 {
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
            info?: v20221001.KeyValueItemResponse[];
            /**
             * The name of the resource
             */
            name: string;
            /**
             * Azure Resource Manager metadata containing createdBy and modifiedBy information.
             */
            systemData: v20221001.SystemDataResponse;
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

    }

    export namespace v20221001preview {
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
            info?: v20221001preview.KeyValueItemResponse[];
            /**
             * The name of the resource
             */
            name: string;
            /**
             * Azure Resource Manager metadata containing createdBy and modifiedBy information.
             */
            systemData: v20221001preview.SystemDataResponse;
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

    }

    export namespace v20230701preview {
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
            info?: v20230701preview.KeyValueItemResponse[];
            /**
             * End time of maintenance for the impacted resource.
             */
            maintenanceEndTime: string;
            /**
             * Start time of maintenance for the impacted resource.
             */
            maintenanceStartTime: string;
            /**
             * The name of the resource
             */
            name: string;
            /**
             * Resource group name of the impacted resource.
             */
            resourceGroup: string;
            /**
             * Resource name of the impacted resource.
             */
            resourceName: string;
            /**
             * Status of the impacted resource.
             */
            status: string;
            /**
             * Azure Resource Manager metadata containing createdBy and modifiedBy information.
             */
            systemData: v20230701preview.SystemDataResponse;
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

    }
}
