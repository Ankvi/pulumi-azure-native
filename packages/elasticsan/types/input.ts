import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace elasticsan {
    /**
     * A set of rules governing the network accessibility.
     */
    export interface NetworkRuleSetArgs {
        /**
         * The list of virtual network rules.
         */
        virtualNetworkRules?: pulumi.Input<pulumi.Input<VirtualNetworkRuleArgs>[]>;
    }

    /**
     * Response for Private Link Service Connection state
     */
    export interface PrivateLinkServiceConnectionStateArgs {
        /**
         * A message indicating if changes on the service provider require any updates on the consumer.
         */
        actionsRequired?: pulumi.Input<string>;
        /**
         * The reason for approval/rejection of the connection.
         */
        description?: pulumi.Input<string>;
        /**
         * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
         */
        status?: pulumi.Input<string | enums.PrivateEndpointServiceConnectionStatus>;
    }

    /**
     * The SKU name. Required for account creation; optional for update.
     */
    export interface SkuArgs {
        /**
         * The sku name.
         */
        name: pulumi.Input<string | enums.SkuName>;
        /**
         * The sku tier.
         */
        tier?: pulumi.Input<string | enums.SkuTier>;
    }

    /**
     * Data source used when creating the volume.
     */
    export interface SourceCreationDataArgs {
        /**
         * This enumerates the possible sources of a volume creation.
         */
        createSource?: pulumi.Input<enums.VolumeCreateOption>;
        /**
         * If createOption is Copy, this is the ARM id of the source snapshot or disk. If createOption is Restore, this is the ARM-like id of the source disk restore point.
         */
        sourceUri?: pulumi.Input<string>;
    }

    /**
     * Virtual Network rule.
     */
    export interface VirtualNetworkRuleArgs {
        /**
         * The action of virtual network rule.
         */
        action?: pulumi.Input<enums.Action>;
        /**
         * Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName}.
         */
        virtualNetworkResourceId: pulumi.Input<string>;
    }
    /**
     * virtualNetworkRuleArgsProvideDefaults sets the appropriate defaults for VirtualNetworkRuleArgs
     */
    export function virtualNetworkRuleArgsProvideDefaults(val: VirtualNetworkRuleArgs): VirtualNetworkRuleArgs {
        return {
            ...val,
            action: (val.action) ?? "Allow",
        };
    }

    export namespace v20211120preview {
        /**
         * A set of rules governing the network accessibility.
         */
        export interface NetworkRuleSetArgs {
            /**
             * The list of virtual network rules.
             */
            virtualNetworkRules?: pulumi.Input<pulumi.Input<v20211120preview.VirtualNetworkRuleArgs>[]>;
        }

        /**
         * The SKU name. Required for account creation; optional for update.
         */
        export interface SkuArgs {
            /**
             * The sku name.
             */
            name: pulumi.Input<string | enums.v20211120preview.SkuName>;
            /**
             * The sku tier.
             */
            tier?: pulumi.Input<string | enums.v20211120preview.SkuTier>;
        }

        /**
         * Data source used when creating the volume.
         */
        export interface SourceCreationDataArgs {
            /**
             * This enumerates the possible sources of a volume creation.
             */
            createSource?: pulumi.Input<enums.v20211120preview.VolumeCreateOption>;
            /**
             * If createOption is Copy, this is the ARM id of the source snapshot or disk. If createOption is Restore, this is the ARM-like id of the source disk restore point.
             */
            sourceUri?: pulumi.Input<string>;
        }

        /**
         * Virtual Network rule.
         */
        export interface VirtualNetworkRuleArgs {
            /**
             * The action of virtual network rule.
             */
            action?: pulumi.Input<enums.v20211120preview.Action>;
            /**
             * Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName}.
             */
            virtualNetworkResourceId: pulumi.Input<string>;
        }
        /**
         * virtualNetworkRuleArgsProvideDefaults sets the appropriate defaults for VirtualNetworkRuleArgs
         */
        export function virtualNetworkRuleArgsProvideDefaults(val: VirtualNetworkRuleArgs): VirtualNetworkRuleArgs {
            return {
                ...val,
                action: (val.action) ?? "Allow",
            };
        }

    }

    export namespace v20221201preview {
        /**
         * A set of rules governing the network accessibility.
         */
        export interface NetworkRuleSetArgs {
            /**
             * The list of virtual network rules.
             */
            virtualNetworkRules?: pulumi.Input<pulumi.Input<v20221201preview.VirtualNetworkRuleArgs>[]>;
        }

        /**
         * Response for Private Link Service Connection state
         */
        export interface PrivateLinkServiceConnectionStateArgs {
            /**
             * A message indicating if changes on the service provider require any updates on the consumer.
             */
            actionsRequired?: pulumi.Input<string>;
            /**
             * The reason for approval/rejection of the connection.
             */
            description?: pulumi.Input<string>;
            /**
             * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
             */
            status?: pulumi.Input<string | enums.v20221201preview.PrivateEndpointServiceConnectionStatus>;
        }

        /**
         * The SKU name. Required for account creation; optional for update.
         */
        export interface SkuArgs {
            /**
             * The sku name.
             */
            name: pulumi.Input<string | enums.v20221201preview.SkuName>;
            /**
             * The sku tier.
             */
            tier?: pulumi.Input<string | enums.v20221201preview.SkuTier>;
        }

        /**
         * Data source used when creating the volume.
         */
        export interface SourceCreationDataArgs {
            /**
             * This enumerates the possible sources of a volume creation.
             */
            createSource?: pulumi.Input<enums.v20221201preview.VolumeCreateOption>;
            /**
             * If createOption is Copy, this is the ARM id of the source snapshot or disk. If createOption is Restore, this is the ARM-like id of the source disk restore point.
             */
            sourceUri?: pulumi.Input<string>;
        }

        /**
         * Virtual Network rule.
         */
        export interface VirtualNetworkRuleArgs {
            /**
             * The action of virtual network rule.
             */
            action?: pulumi.Input<enums.v20221201preview.Action>;
            /**
             * Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName}.
             */
            virtualNetworkResourceId: pulumi.Input<string>;
        }
        /**
         * virtualNetworkRuleArgsProvideDefaults sets the appropriate defaults for VirtualNetworkRuleArgs
         */
        export function virtualNetworkRuleArgsProvideDefaults(val: VirtualNetworkRuleArgs): VirtualNetworkRuleArgs {
            return {
                ...val,
                action: (val.action) ?? "Allow",
            };
        }

    }
}
