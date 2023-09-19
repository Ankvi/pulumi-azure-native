import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
