import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace elasticsan {
    /**
     * Iscsi target information
     */
    export interface IscsiTargetInfoResponse {
        /**
         * State of the operation on the resource.
         */
        provisioningState: string;
        /**
         * Operational status of the iSCSI Target.
         */
        status?: string;
        /**
         * iSCSI Target IQN (iSCSI Qualified Name); example: "iqn.2005-03.org.iscsi:server".
         */
        targetIqn: string;
        /**
         * iSCSI Target Portal Host Name
         */
        targetPortalHostname: string;
        /**
         * iSCSI Target Portal Port
         */
        targetPortalPort: number;
    }

    /**
     * A set of rules governing the network accessibility.
     */
    export interface NetworkRuleSetResponse {
        /**
         * The list of virtual network rules.
         */
        virtualNetworkRules?: VirtualNetworkRuleResponse[];
    }

    /**
     * Response for PrivateEndpoint
     */
    export interface PrivateEndpointResponse {
        /**
         * The ARM identifier for Private Endpoint
         */
        id: string;
    }

    /**
     * Response for Private Link Service Connection state
     */
    export interface PrivateLinkServiceConnectionStateResponse {
        /**
         * A message indicating if changes on the service provider require any updates on the consumer.
         */
        actionsRequired?: string;
        /**
         * The reason for approval/rejection of the connection.
         */
        description?: string;
        /**
         * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
         */
        status?: string;
    }

    /**
     * The SKU name. Required for account creation; optional for update.
     */
    export interface SkuResponse {
        /**
         * The sku name.
         */
        name: string;
        /**
         * The sku tier.
         */
        tier?: string;
    }

    /**
     * Data source used when creating the volume.
     */
    export interface SourceCreationDataResponse {
        /**
         * This enumerates the possible sources of a volume creation.
         */
        createSource?: string;
        /**
         * If createOption is Copy, this is the ARM id of the source snapshot or disk. If createOption is Restore, this is the ARM-like id of the source disk restore point.
         */
        sourceUri?: string;
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

    /**
     * Virtual Network rule.
     */
    export interface VirtualNetworkRuleResponse {
        /**
         * The action of virtual network rule.
         */
        action?: string;
        /**
         * Gets the state of virtual network rule.
         */
        state: string;
        /**
         * Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName}.
         */
        virtualNetworkResourceId: string;
    }
    /**
     * virtualNetworkRuleResponseProvideDefaults sets the appropriate defaults for VirtualNetworkRuleResponse
     */
    export function virtualNetworkRuleResponseProvideDefaults(val: VirtualNetworkRuleResponse): VirtualNetworkRuleResponse {
        return {
            ...val,
            action: (val.action) ?? "Allow",
        };
    }

    export namespace v20211120preview {
        /**
         * Iscsi target information
         */
        export interface IscsiTargetInfoResponse {
            /**
             * State of the operation on the resource.
             */
            provisioningState: string;
            /**
             * Operational status of the iSCSI Target.
             */
            status?: string;
            /**
             * iSCSI Target IQN (iSCSI Qualified Name); example: "iqn.2005-03.org.iscsi:server".
             */
            targetIqn: string;
            /**
             * iSCSI Target Portal Host Name
             */
            targetPortalHostname: string;
            /**
             * iSCSI Target Portal Port
             */
            targetPortalPort: number;
        }

        /**
         * A set of rules governing the network accessibility.
         */
        export interface NetworkRuleSetResponse {
            /**
             * The list of virtual network rules.
             */
            virtualNetworkRules?: v20211120preview.VirtualNetworkRuleResponse[];
        }

        /**
         * The SKU name. Required for account creation; optional for update.
         */
        export interface SkuResponse {
            /**
             * The sku name.
             */
            name: string;
            /**
             * The sku tier.
             */
            tier?: string;
        }

        /**
         * Data source used when creating the volume.
         */
        export interface SourceCreationDataResponse {
            /**
             * This enumerates the possible sources of a volume creation.
             */
            createSource?: string;
            /**
             * If createOption is Copy, this is the ARM id of the source snapshot or disk. If createOption is Restore, this is the ARM-like id of the source disk restore point.
             */
            sourceUri?: string;
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

        /**
         * Virtual Network rule.
         */
        export interface VirtualNetworkRuleResponse {
            /**
             * The action of virtual network rule.
             */
            action?: string;
            /**
             * Gets the state of virtual network rule.
             */
            state: string;
            /**
             * Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName}.
             */
            virtualNetworkResourceId: string;
        }
        /**
         * virtualNetworkRuleResponseProvideDefaults sets the appropriate defaults for VirtualNetworkRuleResponse
         */
        export function virtualNetworkRuleResponseProvideDefaults(val: VirtualNetworkRuleResponse): VirtualNetworkRuleResponse {
            return {
                ...val,
                action: (val.action) ?? "Allow",
            };
        }

    }

    export namespace v20221201preview {
        /**
         * Iscsi target information
         */
        export interface IscsiTargetInfoResponse {
            /**
             * State of the operation on the resource.
             */
            provisioningState: string;
            /**
             * Operational status of the iSCSI Target.
             */
            status?: string;
            /**
             * iSCSI Target IQN (iSCSI Qualified Name); example: "iqn.2005-03.org.iscsi:server".
             */
            targetIqn: string;
            /**
             * iSCSI Target Portal Host Name
             */
            targetPortalHostname: string;
            /**
             * iSCSI Target Portal Port
             */
            targetPortalPort: number;
        }

        /**
         * A set of rules governing the network accessibility.
         */
        export interface NetworkRuleSetResponse {
            /**
             * The list of virtual network rules.
             */
            virtualNetworkRules?: v20221201preview.VirtualNetworkRuleResponse[];
        }

        /**
         *  Response for PrivateEndpoint Connection object
         */
        export interface PrivateEndpointConnectionResponse {
            /**
             *  List of resources private endpoint is mapped
             */
            groupIds?: string[];
            /**
             * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
             */
            id: string;
            /**
             * The name of the resource
             */
            name: string;
            /**
             * Private Endpoint resource
             */
            privateEndpoint?: v20221201preview.PrivateEndpointResponse;
            /**
             * Private Link Service Connection State.
             */
            privateLinkServiceConnectionState: v20221201preview.PrivateLinkServiceConnectionStateResponse;
            /**
             * Provisioning State of Private Endpoint connection resource
             */
            provisioningState: string;
            /**
             * Azure Resource Manager metadata containing createdBy and modifiedBy information.
             */
            systemData: v20221201preview.SystemDataResponse;
            /**
             * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
             */
            type: string;
        }

        /**
         * Response for PrivateEndpoint
         */
        export interface PrivateEndpointResponse {
            /**
             * The ARM identifier for Private Endpoint
             */
            id: string;
        }

        /**
         * Response for Private Link Service Connection state
         */
        export interface PrivateLinkServiceConnectionStateResponse {
            /**
             * A message indicating if changes on the service provider require any updates on the consumer.
             */
            actionsRequired?: string;
            /**
             * The reason for approval/rejection of the connection.
             */
            description?: string;
            /**
             * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
             */
            status?: string;
        }

        /**
         * The SKU name. Required for account creation; optional for update.
         */
        export interface SkuResponse {
            /**
             * The sku name.
             */
            name: string;
            /**
             * The sku tier.
             */
            tier?: string;
        }

        /**
         * Data source used when creating the volume.
         */
        export interface SourceCreationDataResponse {
            /**
             * This enumerates the possible sources of a volume creation.
             */
            createSource?: string;
            /**
             * If createOption is Copy, this is the ARM id of the source snapshot or disk. If createOption is Restore, this is the ARM-like id of the source disk restore point.
             */
            sourceUri?: string;
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

        /**
         * Virtual Network rule.
         */
        export interface VirtualNetworkRuleResponse {
            /**
             * The action of virtual network rule.
             */
            action?: string;
            /**
             * Gets the state of virtual network rule.
             */
            state: string;
            /**
             * Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName}.
             */
            virtualNetworkResourceId: string;
        }
        /**
         * virtualNetworkRuleResponseProvideDefaults sets the appropriate defaults for VirtualNetworkRuleResponse
         */
        export function virtualNetworkRuleResponseProvideDefaults(val: VirtualNetworkRuleResponse): VirtualNetworkRuleResponse {
            return {
                ...val,
                action: (val.action) ?? "Allow",
            };
        }

    }
}
