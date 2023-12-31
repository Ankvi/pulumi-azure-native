import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
