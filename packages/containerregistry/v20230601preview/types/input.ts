import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The properties of the archive package source.
     */
    export interface ArchivePackageSourcePropertiesArgs {
        /**
         * The type of package source for a archive.
         */
        type?: pulumi.Input<string | enums.PackageSourceType>;
        /**
         * The external repository url.
         */
        url?: pulumi.Input<string>;
    }

    /**
     * Authentication credential stored for an upstream.
     */
    export interface AuthCredentialArgs {
        /**
         * The name of the credential.
         */
        name?: pulumi.Input<string | enums.CredentialName>;
        /**
         * KeyVault Secret URI for accessing the password.
         */
        passwordSecretIdentifier?: pulumi.Input<string>;
        /**
         * KeyVault Secret URI for accessing the username.
         */
        usernameSecretIdentifier?: pulumi.Input<string>;
    }

    /**
     * The policy for using ARM audience token for a container registry.
     */
    export interface AzureADAuthenticationAsArmPolicyArgs {
        /**
         * The value that indicates whether the policy is enabled or not.
         */
        status?: pulumi.Input<string | enums.AzureADAuthenticationAsArmPolicyStatus>;
    }
    /**
     * azureADAuthenticationAsArmPolicyArgsProvideDefaults sets the appropriate defaults for AzureADAuthenticationAsArmPolicyArgs
     */
    export function azureADAuthenticationAsArmPolicyArgsProvideDefaults(val: AzureADAuthenticationAsArmPolicyArgs): AzureADAuthenticationAsArmPolicyArgs {
        return {
            ...val,
            status: (val.status) ?? "enabled",
        };
    }

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
     * The properties of the export pipeline target.
     */
    export interface ExportPipelineTargetPropertiesArgs {
        /**
         * They key vault secret uri to obtain the target storage SAS token.
         */
        keyVaultUri: pulumi.Input<string>;
        /**
         * The type of target for the export pipeline.
         */
        type?: pulumi.Input<string>;
        /**
         * The target uri of the export pipeline.
         * When 'AzureStorageBlob': "https://accountName.blob.core.windows.net/containerName/blobName"
         * When 'AzureStorageBlobContainer':  "https://accountName.blob.core.windows.net/containerName"
         */
        uri?: pulumi.Input<string>;
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
         * The identity type.
         */
        type?: pulumi.Input<enums.ResourceIdentityType>;
        /**
         * The list of user identities associated with the resource. The user identity 
         * dictionary key references will be ARM resource ids in the form: 
         * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/
         *     providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * The properties of the import pipeline source.
     */
    export interface ImportPipelineSourcePropertiesArgs {
        /**
         * They key vault secret uri to obtain the source storage SAS token.
         */
        keyVaultUri: pulumi.Input<string>;
        /**
         * The type of source for the import pipeline.
         */
        type?: pulumi.Input<string | enums.PipelineSourceType>;
        /**
         * The source uri of the import pipeline.
         * When 'AzureStorageBlob': "https://accountName.blob.core.windows.net/containerName/blobName"
         * When 'AzureStorageBlobContainer': "https://accountName.blob.core.windows.net/containerName"
         */
        uri?: pulumi.Input<string>;
    }
    /**
     * importPipelineSourcePropertiesArgsProvideDefaults sets the appropriate defaults for ImportPipelineSourcePropertiesArgs
     */
    export function importPipelineSourcePropertiesArgsProvideDefaults(val: ImportPipelineSourcePropertiesArgs): ImportPipelineSourcePropertiesArgs {
        return {
            ...val,
            type: (val.type) ?? "AzureStorageBlobContainer",
        };
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
     * The logging properties of the connected registry.
     */
    export interface LoggingPropertiesArgs {
        /**
         * Indicates whether audit logs are enabled on the connected registry.
         */
        auditLogStatus?: pulumi.Input<string | enums.AuditLogStatus>;
        /**
         * The verbosity of logs persisted on the connected registry.
         */
        logLevel?: pulumi.Input<string | enums.LogLevel>;
    }
    /**
     * loggingPropertiesArgsProvideDefaults sets the appropriate defaults for LoggingPropertiesArgs
     */
    export function loggingPropertiesArgsProvideDefaults(val: LoggingPropertiesArgs): LoggingPropertiesArgs {
        return {
            ...val,
            auditLogStatus: (val.auditLogStatus) ?? "Disabled",
            logLevel: (val.logLevel) ?? "Information",
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
     * The properties of the connected registry parent.
     */
    export interface ParentPropertiesArgs {
        /**
         * The resource ID of the parent to which the connected registry will be associated.
         */
        id?: pulumi.Input<string>;
        /**
         * The sync properties of the connected registry with its parent.
         */
        syncProperties: pulumi.Input<SyncPropertiesArgs>;
    }

    /**
     * The request properties provided for a pipeline run.
     */
    export interface PipelineRunRequestArgs {
        /**
         * List of source artifacts to be transferred by the pipeline. 
         * Specify an image by repository ('hello-world'). This will use the 'latest' tag.
         * Specify an image by tag ('hello-world:latest').
         * Specify an image by sha256-based manifest digest ('hello-world@sha256:abc123').
         */
        artifacts?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The digest of the tar used to transfer the artifacts.
         */
        catalogDigest?: pulumi.Input<string>;
        /**
         * The resource ID of the pipeline to run.
         */
        pipelineResourceId?: pulumi.Input<string>;
        /**
         * The source properties of the pipeline run.
         */
        source?: pulumi.Input<PipelineRunSourcePropertiesArgs>;
        /**
         * The target properties of the pipeline run.
         */
        target?: pulumi.Input<PipelineRunTargetPropertiesArgs>;
    }
    /**
     * pipelineRunRequestArgsProvideDefaults sets the appropriate defaults for PipelineRunRequestArgs
     */
    export function pipelineRunRequestArgsProvideDefaults(val: PipelineRunRequestArgs): PipelineRunRequestArgs {
        return {
            ...val,
            source: (val.source ? pulumi.output(val.source).apply(pipelineRunSourcePropertiesArgsProvideDefaults) : undefined),
            target: (val.target ? pulumi.output(val.target).apply(pipelineRunTargetPropertiesArgsProvideDefaults) : undefined),
        };
    }

    export interface PipelineRunSourcePropertiesArgs {
        /**
         * The name of the source.
         */
        name?: pulumi.Input<string>;
        /**
         * The type of the source.
         */
        type?: pulumi.Input<string | enums.PipelineRunSourceType>;
    }
    /**
     * pipelineRunSourcePropertiesArgsProvideDefaults sets the appropriate defaults for PipelineRunSourcePropertiesArgs
     */
    export function pipelineRunSourcePropertiesArgsProvideDefaults(val: PipelineRunSourcePropertiesArgs): PipelineRunSourcePropertiesArgs {
        return {
            ...val,
            type: (val.type) ?? "AzureStorageBlob",
        };
    }

    export interface PipelineRunTargetPropertiesArgs {
        /**
         * The name of the target.
         */
        name?: pulumi.Input<string>;
        /**
         * The type of the target.
         */
        type?: pulumi.Input<string | enums.PipelineRunTargetType>;
    }
    /**
     * pipelineRunTargetPropertiesArgsProvideDefaults sets the appropriate defaults for PipelineRunTargetPropertiesArgs
     */
    export function pipelineRunTargetPropertiesArgsProvideDefaults(val: PipelineRunTargetPropertiesArgs): PipelineRunTargetPropertiesArgs {
        return {
            ...val,
            type: (val.type) ?? "AzureStorageBlob",
        };
    }

    export interface PipelineSourceTriggerPropertiesArgs {
        /**
         * The current status of the source trigger.
         */
        status: pulumi.Input<string | enums.TriggerStatus>;
    }
    /**
     * pipelineSourceTriggerPropertiesArgsProvideDefaults sets the appropriate defaults for PipelineSourceTriggerPropertiesArgs
     */
    export function pipelineSourceTriggerPropertiesArgsProvideDefaults(val: PipelineSourceTriggerPropertiesArgs): PipelineSourceTriggerPropertiesArgs {
        return {
            ...val,
            status: (val.status) ?? "Enabled",
        };
    }

    export interface PipelineTriggerPropertiesArgs {
        /**
         * The source trigger properties of the pipeline.
         */
        sourceTrigger?: pulumi.Input<PipelineSourceTriggerPropertiesArgs>;
    }
    /**
     * pipelineTriggerPropertiesArgsProvideDefaults sets the appropriate defaults for PipelineTriggerPropertiesArgs
     */
    export function pipelineTriggerPropertiesArgsProvideDefaults(val: PipelineTriggerPropertiesArgs): PipelineTriggerPropertiesArgs {
        return {
            ...val,
            sourceTrigger: (val.sourceTrigger ? pulumi.output(val.sourceTrigger).apply(pipelineSourceTriggerPropertiesArgsProvideDefaults) : undefined),
        };
    }

    /**
     * The policies for a container registry.
     */
    export interface PoliciesArgs {
        /**
         * The policy for using ARM audience token for a container registry.
         */
        azureADAuthenticationAsArmPolicy?: pulumi.Input<AzureADAuthenticationAsArmPolicyArgs>;
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
         * The soft delete policy for a container registry.
         */
        softDeletePolicy?: pulumi.Input<SoftDeletePolicyArgs>;
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
            azureADAuthenticationAsArmPolicy: (val.azureADAuthenticationAsArmPolicy ? pulumi.output(val.azureADAuthenticationAsArmPolicy).apply(azureADAuthenticationAsArmPolicyArgsProvideDefaults) : undefined),
            exportPolicy: (val.exportPolicy ? pulumi.output(val.exportPolicy).apply(exportPolicyArgsProvideDefaults) : undefined),
            quarantinePolicy: (val.quarantinePolicy ? pulumi.output(val.quarantinePolicy).apply(quarantinePolicyArgsProvideDefaults) : undefined),
            retentionPolicy: (val.retentionPolicy ? pulumi.output(val.retentionPolicy).apply(retentionPolicyArgsProvideDefaults) : undefined),
            softDeletePolicy: (val.softDeletePolicy ? pulumi.output(val.softDeletePolicy).apply(softDeletePolicyArgsProvideDefaults) : undefined),
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
     * The soft delete policy for a container registry
     */
    export interface SoftDeletePolicyArgs {
        /**
         * The number of days after which a soft-deleted item is permanently deleted.
         */
        retentionDays?: pulumi.Input<number>;
        /**
         * The value that indicates whether the policy is enabled or not.
         */
        status?: pulumi.Input<string | enums.PolicyStatus>;
    }
    /**
     * softDeletePolicyArgsProvideDefaults sets the appropriate defaults for SoftDeletePolicyArgs
     */
    export function softDeletePolicyArgsProvideDefaults(val: SoftDeletePolicyArgs): SoftDeletePolicyArgs {
        return {
            ...val,
            retentionDays: (val.retentionDays) ?? 7,
            status: (val.status) ?? "disabled",
        };
    }

    /**
     * The sync properties of the connected registry with its parent.
     */
    export interface SyncPropertiesArgs {
        /**
         * The period of time for which a message is available to sync before it is expired. Specify the duration using the format P[n]Y[n]M[n]DT[n]H[n]M[n]S as per ISO8601.
         */
        messageTtl: pulumi.Input<string>;
        /**
         * The cron expression indicating the schedule that the connected registry will sync with its parent.
         */
        schedule?: pulumi.Input<string>;
        /**
         * The time window during which sync is enabled for each schedule occurrence. Specify the duration using the format P[n]Y[n]M[n]DT[n]H[n]M[n]S as per ISO8601.
         */
        syncWindow?: pulumi.Input<string>;
        /**
         * The resource ID of the ACR token used to authenticate the connected registry to its parent during sync.
         */
        tokenId: pulumi.Input<string>;
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
