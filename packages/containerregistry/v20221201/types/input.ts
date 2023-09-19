import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    export interface EncryptionPropertyArgs {
        /**
         * Key vault properties.
         */
        keyVaultProperties?: pulumi.Input<KeyVaultPropertiesArgs>;
        /**
         * Indicates whether or not the encryption is enabled for container registry.
         */
        status?: pulumi.Input<string | enums.EncryptionStatus>;
    }

    /**
     * The export policy for a container registry.
     */
    export interface ExportPolicyArgs {
        /**
         * The value that indicates whether the policy is enabled or not.
         */
        status?: pulumi.Input<string | enums.ExportPolicyStatus>;
    }
    /**
     * exportPolicyArgsProvideDefaults sets the appropriate defaults for ExportPolicyArgs
     */
    export function exportPolicyArgsProvideDefaults(val: ExportPolicyArgs): ExportPolicyArgs {
        return {
            ...val,
            status: (val.status) ?? "enabled",
        };
    }

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
     * Managed identity for the resource.
     */
    export interface IdentityPropertiesArgs {
        /**
         * The principal ID of resource identity.
         */
        principalId?: pulumi.Input<string>;
        /**
         * The tenant ID of resource.
         */
        tenantId?: pulumi.Input<string>;
        /**
         * The identity type.
         */
        type?: pulumi.Input<enums.ResourceIdentityType>;
        /**
         * The list of user identities associated with the resource. The user identity 
         * dictionary key references will be ARM resource ids in the form: 
         * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/
         *     providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentities?: pulumi.Input<{[key: string]: pulumi.Input<UserIdentityPropertiesArgs>}>;
    }

    export interface KeyVaultPropertiesArgs {
        /**
         * The client id of the identity which will be used to access key vault.
         */
        identity?: pulumi.Input<string>;
        /**
         * Key vault uri to access the encryption key.
         */
        keyIdentifier?: pulumi.Input<string>;
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
         * The export policy for a container registry.
         */
        exportPolicy?: pulumi.Input<ExportPolicyArgs>;
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
            exportPolicy: (val.exportPolicy ? pulumi.output(val.exportPolicy).apply(exportPolicyArgsProvideDefaults) : undefined),
            quarantinePolicy: (val.quarantinePolicy ? pulumi.output(val.quarantinePolicy).apply(quarantinePolicyArgsProvideDefaults) : undefined),
            retentionPolicy: (val.retentionPolicy ? pulumi.output(val.retentionPolicy).apply(retentionPolicyArgsProvideDefaults) : undefined),
            trustPolicy: (val.trustPolicy ? pulumi.output(val.trustPolicy).apply(trustPolicyArgsProvideDefaults) : undefined),
        };
    }

    /**
     * The Private Endpoint resource.
     */
    export interface PrivateEndpointArgs {
        /**
         * This is private endpoint resource created with Microsoft.Network resource provider.
         */
        id?: pulumi.Input<string>;
    }

    /**
     * The state of a private link service connection.
     */
    export interface PrivateLinkServiceConnectionStateArgs {
        /**
         * A message indicating if changes on the service provider require any updates on the consumer.
         */
        actionsRequired?: pulumi.Input<string | enums.ActionsRequired>;
        /**
         * The description for connection status. For example if connection is rejected it can indicate reason for rejection.
         */
        description?: pulumi.Input<string>;
        /**
         * The private link service connection status.
         */
        status?: pulumi.Input<string | enums.ConnectionStatus>;
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
     * The properties of a certificate used for authenticating a token.
     */
    export interface TokenCertificateArgs {
        /**
         * Base 64 encoded string of the public certificate1 in PEM format that will be used for authenticating the token.
         */
        encodedPemCertificate?: pulumi.Input<string>;
        /**
         * The expiry datetime of the certificate.
         */
        expiry?: pulumi.Input<string>;
        name?: pulumi.Input<string | enums.TokenCertificateName>;
        /**
         * The thumbprint of the certificate.
         */
        thumbprint?: pulumi.Input<string>;
    }

    /**
     * The properties of the credentials that can be used for authenticating the token.
     */
    export interface TokenCredentialsPropertiesArgs {
        certificates?: pulumi.Input<pulumi.Input<TokenCertificateArgs>[]>;
        passwords?: pulumi.Input<pulumi.Input<TokenPasswordArgs>[]>;
    }

    /**
     * The password that will be used for authenticating the token of a container registry.
     */
    export interface TokenPasswordArgs {
        /**
         * The creation datetime of the password.
         */
        creationTime?: pulumi.Input<string>;
        /**
         * The expiry datetime of the password.
         */
        expiry?: pulumi.Input<string>;
        /**
         * The password name "password1" or "password2"
         */
        name?: pulumi.Input<string | enums.TokenPasswordName>;
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

    export interface UserIdentityPropertiesArgs {
        /**
         * The client id of user assigned identity.
         */
        clientId?: pulumi.Input<string>;
        /**
         * The principal id of user assigned identity.
         */
        principalId?: pulumi.Input<string>;
    }
