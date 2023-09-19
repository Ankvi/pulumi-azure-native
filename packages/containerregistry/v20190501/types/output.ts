import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * IP rule with specific IP or IP range in CIDR format.
     */
    export interface IPRuleResponse {
        /**
         * The action of IP ACL rule.
         */
        action?: string;
        /**
         * Specifies the IP or IP range in CIDR format. Only IPV4 address is allowed.
         */
        iPAddressOrRange: string;
    }
    /**
     * ipruleResponseProvideDefaults sets the appropriate defaults for IPRuleResponse
     */
    export function ipruleResponseProvideDefaults(val: IPRuleResponse): IPRuleResponse {
        return {
            ...val,
            action: (val.action) ?? "Allow",
        };
    }

    /**
     * The network rule set for a container registry.
     */
    export interface NetworkRuleSetResponse {
        /**
         * The default action of allow or deny when no other rules match.
         */
        defaultAction: string;
        /**
         * The IP ACL rules.
         */
        ipRules?: IPRuleResponse[];
        /**
         * The virtual network rules.
         */
        virtualNetworkRules?: VirtualNetworkRuleResponse[];
    }
    /**
     * networkRuleSetResponseProvideDefaults sets the appropriate defaults for NetworkRuleSetResponse
     */
    export function networkRuleSetResponseProvideDefaults(val: NetworkRuleSetResponse): NetworkRuleSetResponse {
        return {
            ...val,
            defaultAction: (val.defaultAction) ?? "Allow",
        };
    }

    /**
     * The policies for a container registry.
     */
    export interface PoliciesResponse {
        /**
         * The quarantine policy for a container registry.
         */
        quarantinePolicy?: QuarantinePolicyResponse;
        /**
         * The retention policy for a container registry.
         */
        retentionPolicy?: RetentionPolicyResponse;
        /**
         * The content trust policy for a container registry.
         */
        trustPolicy?: TrustPolicyResponse;
    }
    /**
     * policiesResponseProvideDefaults sets the appropriate defaults for PoliciesResponse
     */
    export function policiesResponseProvideDefaults(val: PoliciesResponse): PoliciesResponse {
        return {
            ...val,
            quarantinePolicy: (val.quarantinePolicy ? quarantinePolicyResponseProvideDefaults(val.quarantinePolicy) : undefined),
            retentionPolicy: (val.retentionPolicy ? retentionPolicyResponseProvideDefaults(val.retentionPolicy) : undefined),
            trustPolicy: (val.trustPolicy ? trustPolicyResponseProvideDefaults(val.trustPolicy) : undefined),
        };
    }

    /**
     * The quarantine policy for a container registry.
     */
    export interface QuarantinePolicyResponse {
        /**
         * The value that indicates whether the policy is enabled or not.
         */
        status?: string;
    }
    /**
     * quarantinePolicyResponseProvideDefaults sets the appropriate defaults for QuarantinePolicyResponse
     */
    export function quarantinePolicyResponseProvideDefaults(val: QuarantinePolicyResponse): QuarantinePolicyResponse {
        return {
            ...val,
            status: (val.status) ?? "disabled",
        };
    }

    /**
     * The login password for the container registry.
     */
    export interface RegistryPasswordResponse {
        /**
         * The password name.
         */
        name?: string;
        /**
         * The password value.
         */
        value?: string;
    }

    /**
     * The retention policy for a container registry.
     */
    export interface RetentionPolicyResponse {
        /**
         * The number of days to retain an untagged manifest after which it gets purged.
         */
        days?: number;
        /**
         * The timestamp when the policy was last updated.
         */
        lastUpdatedTime: string;
        /**
         * The value that indicates whether the policy is enabled or not.
         */
        status?: string;
    }
    /**
     * retentionPolicyResponseProvideDefaults sets the appropriate defaults for RetentionPolicyResponse
     */
    export function retentionPolicyResponseProvideDefaults(val: RetentionPolicyResponse): RetentionPolicyResponse {
        return {
            ...val,
            days: (val.days) ?? 7,
            status: (val.status) ?? "disabled",
        };
    }

    /**
     * The SKU of a container registry.
     */
    export interface SkuResponse {
        /**
         * The SKU name of the container registry. Required for registry creation.
         */
        name: string;
        /**
         * The SKU tier based on the SKU name.
         */
        tier: string;
    }

    /**
     * The status of an Azure resource at the time the operation was called.
     */
    export interface StatusResponse {
        /**
         * The short label for the status.
         */
        displayStatus: string;
        /**
         * The detailed message for the status, including alerts and error messages.
         */
        message: string;
        /**
         * The timestamp when the status was changed to the current value.
         */
        timestamp: string;
    }

    /**
     * The properties of a storage account for a container registry. Only applicable to Classic SKU.
     */
    export interface StorageAccountPropertiesResponse {
        /**
         * The resource ID of the storage account.
         */
        id: string;
    }

    /**
     * The content trust policy for a container registry.
     */
    export interface TrustPolicyResponse {
        /**
         * The value that indicates whether the policy is enabled or not.
         */
        status?: string;
        /**
         * The type of trust policy.
         */
        type?: string;
    }
    /**
     * trustPolicyResponseProvideDefaults sets the appropriate defaults for TrustPolicyResponse
     */
    export function trustPolicyResponseProvideDefaults(val: TrustPolicyResponse): TrustPolicyResponse {
        return {
            ...val,
            status: (val.status) ?? "disabled",
            type: (val.type) ?? "Notary",
        };
    }

    /**
     * Virtual network rule.
     */
    export interface VirtualNetworkRuleResponse {
        /**
         * The action of virtual network rule.
         */
        action?: string;
        /**
         * Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName}.
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
