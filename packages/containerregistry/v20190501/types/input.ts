import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * IP rule with specific IP or IP range in CIDR format.
     */
    export interface IPRuleArgs {
        /**
         * The action of IP ACL rule.
         */
        action?: pulumi.Input<string | enums.Action>;
        /**
         * Specifies the IP or IP range in CIDR format. Only IPV4 address is allowed.
         */
        iPAddressOrRange: pulumi.Input<string>;
    }
    /**
     * ipruleArgsProvideDefaults sets the appropriate defaults for IPRuleArgs
     */
    export function ipruleArgsProvideDefaults(val: IPRuleArgs): IPRuleArgs {
        return {
            ...val,
            action: (val.action) ?? "Allow",
        };
    }

    /**
     * The network rule set for a container registry.
     */
    export interface NetworkRuleSetArgs {
        /**
         * The default action of allow or deny when no other rules match.
         */
        defaultAction: pulumi.Input<string | enums.DefaultAction>;
        /**
         * The IP ACL rules.
         */
        ipRules?: pulumi.Input<pulumi.Input<IPRuleArgs>[]>;
        /**
         * The virtual network rules.
         */
        virtualNetworkRules?: pulumi.Input<pulumi.Input<VirtualNetworkRuleArgs>[]>;
    }
    /**
     * networkRuleSetArgsProvideDefaults sets the appropriate defaults for NetworkRuleSetArgs
     */
    export function networkRuleSetArgsProvideDefaults(val: NetworkRuleSetArgs): NetworkRuleSetArgs {
        return {
            ...val,
            defaultAction: (val.defaultAction) ?? "Allow",
        };
    }

    /**
     * The policies for a container registry.
     */
    export interface PoliciesArgs {
        /**
         * The quarantine policy for a container registry.
         */
        quarantinePolicy?: pulumi.Input<QuarantinePolicyArgs>;
        /**
         * The retention policy for a container registry.
         */
        retentionPolicy?: pulumi.Input<RetentionPolicyArgs>;
        /**
         * The content trust policy for a container registry.
         */
        trustPolicy?: pulumi.Input<TrustPolicyArgs>;
    }
    /**
     * policiesArgsProvideDefaults sets the appropriate defaults for PoliciesArgs
     */
    export function policiesArgsProvideDefaults(val: PoliciesArgs): PoliciesArgs {
        return {
            ...val,
            quarantinePolicy: (val.quarantinePolicy ? pulumi.output(val.quarantinePolicy).apply(quarantinePolicyArgsProvideDefaults) : undefined),
            retentionPolicy: (val.retentionPolicy ? pulumi.output(val.retentionPolicy).apply(retentionPolicyArgsProvideDefaults) : undefined),
            trustPolicy: (val.trustPolicy ? pulumi.output(val.trustPolicy).apply(trustPolicyArgsProvideDefaults) : undefined),
        };
    }

    /**
     * The quarantine policy for a container registry.
     */
    export interface QuarantinePolicyArgs {
        /**
         * The value that indicates whether the policy is enabled or not.
         */
        status?: pulumi.Input<string | enums.PolicyStatus>;
    }
    /**
     * quarantinePolicyArgsProvideDefaults sets the appropriate defaults for QuarantinePolicyArgs
     */
    export function quarantinePolicyArgsProvideDefaults(val: QuarantinePolicyArgs): QuarantinePolicyArgs {
        return {
            ...val,
            status: (val.status) ?? "disabled",
        };
    }

    /**
     * The retention policy for a container registry.
     */
    export interface RetentionPolicyArgs {
        /**
         * The number of days to retain an untagged manifest after which it gets purged.
         */
        days?: pulumi.Input<number>;
        /**
         * The value that indicates whether the policy is enabled or not.
         */
        status?: pulumi.Input<string | enums.PolicyStatus>;
    }
    /**
     * retentionPolicyArgsProvideDefaults sets the appropriate defaults for RetentionPolicyArgs
     */
    export function retentionPolicyArgsProvideDefaults(val: RetentionPolicyArgs): RetentionPolicyArgs {
        return {
            ...val,
            days: (val.days) ?? 7,
            status: (val.status) ?? "disabled",
        };
    }

    /**
     * The SKU of a container registry.
     */
    export interface SkuArgs {
        /**
         * The SKU name of the container registry. Required for registry creation.
         */
        name: pulumi.Input<string | enums.SkuName>;
    }

    /**
     * The properties of a storage account for a container registry. Only applicable to Classic SKU.
     */
    export interface StorageAccountPropertiesArgs {
        /**
         * The resource ID of the storage account.
         */
        id: pulumi.Input<string>;
    }

    /**
     * The content trust policy for a container registry.
     */
    export interface TrustPolicyArgs {
        /**
         * The value that indicates whether the policy is enabled or not.
         */
        status?: pulumi.Input<string | enums.PolicyStatus>;
        /**
         * The type of trust policy.
         */
        type?: pulumi.Input<string | enums.TrustPolicyType>;
    }
    /**
     * trustPolicyArgsProvideDefaults sets the appropriate defaults for TrustPolicyArgs
     */
    export function trustPolicyArgsProvideDefaults(val: TrustPolicyArgs): TrustPolicyArgs {
        return {
            ...val,
            status: (val.status) ?? "disabled",
            type: (val.type) ?? "Notary",
        };
    }

    /**
     * Virtual network rule.
     */
    export interface VirtualNetworkRuleArgs {
        /**
         * The action of virtual network rule.
         */
        action?: pulumi.Input<string | enums.Action>;
        /**
         * Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName}.
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
