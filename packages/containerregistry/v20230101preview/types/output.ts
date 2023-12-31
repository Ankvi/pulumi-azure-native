import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The activation properties of the connected registry.
     */
    export interface ActivationPropertiesResponse {
        /**
         * The activation status of the connected registry.
         */
        status: string;
    }

    /**
     * The agent that initiated the event. For most situations, this could be from the authorization context of the request.
     */
    export interface ActorResponse {
        /**
         * The subject or username associated with the request context that generated the event.
         */
        name?: string;
    }

    /**
     * Authentication credential stored for an upstream.
     */
    export interface AuthCredentialResponse {
        /**
         * This provides data pertaining to the health of the auth credential.
         */
        credentialHealth: CredentialHealthResponse;
        /**
         * The name of the credential.
         */
        name?: string;
        /**
         * KeyVault Secret URI for accessing the password.
         */
        passwordSecretIdentifier?: string;
        /**
         * KeyVault Secret URI for accessing the username.
         */
        usernameSecretIdentifier?: string;
    }

    /**
     * The policy for using ARM audience token for a container registry.
     */
    export interface AzureADAuthenticationAsArmPolicyResponse {
        /**
         * The value that indicates whether the policy is enabled or not.
         */
        status?: string;
    }
    /**
     * azureADAuthenticationAsArmPolicyResponseProvideDefaults sets the appropriate defaults for AzureADAuthenticationAsArmPolicyResponse
     */
    export function azureADAuthenticationAsArmPolicyResponseProvideDefaults(val: AzureADAuthenticationAsArmPolicyResponse): AzureADAuthenticationAsArmPolicyResponse {
        return {
            ...val,
            status: (val.status) ?? "enabled",
        };
    }

    /**
     * The health of the auth credential.
     */
    export interface CredentialHealthResponse {
        /**
         * Error code representing the health check error.
         */
        errorCode?: string;
        /**
         * Descriptive message representing the health check error.
         */
        errorMessage?: string;
        /**
         * The health status of credential.
         */
        status?: string;
    }

    export interface EncryptionPropertyResponse {
        /**
         * Key vault properties.
         */
        keyVaultProperties?: KeyVaultPropertiesResponse;
        /**
         * Indicates whether or not the encryption is enabled for container registry.
         */
        status?: string;
    }

    /**
     * The content of the event request message.
     */
    export interface EventContentResponse {
        /**
         * The action that encompasses the provided event.
         */
        action?: string;
        /**
         * The agent that initiated the event. For most situations, this could be from the authorization context of the request.
         */
        actor?: ActorResponse;
        /**
         * The event ID.
         */
        id?: string;
        /**
         * The request that generated the event.
         */
        request?: RequestResponse;
        /**
         * The registry node that generated the event. Put differently, while the actor initiates the event, the source generates it.
         */
        source?: SourceResponse;
        /**
         * The target of the event.
         */
        target?: TargetResponse;
        /**
         * The time at which the event occurred.
         */
        timestamp?: string;
    }

    /**
     * The event request message sent to the service URI.
     */
    export interface EventRequestMessageResponse {
        /**
         * The content of the event request message.
         */
        content?: EventContentResponse;
        /**
         * The headers of the event request message.
         */
        headers?: {[key: string]: string};
        /**
         * The HTTP method used to send the event request message.
         */
        method?: string;
        /**
         * The URI used to send the event request message.
         */
        requestUri?: string;
        /**
         * The HTTP message version.
         */
        version?: string;
    }

    /**
     * The event for a webhook.
     */
    export interface EventResponse {
        /**
         * The event request message sent to the service URI.
         */
        eventRequestMessage?: EventRequestMessageResponse;
        /**
         * The event response message received from the service URI.
         */
        eventResponseMessage?: EventResponseMessageResponse;
        /**
         * The event ID.
         */
        id?: string;
    }

    /**
     * The event response message received from the service URI.
     */
    export interface EventResponseMessageResponse {
        /**
         * The content of the event response message.
         */
        content?: string;
        /**
         * The headers of the event response message.
         */
        headers?: {[key: string]: string};
        /**
         * The reason phrase of the event response message.
         */
        reasonPhrase?: string;
        /**
         * The status code of the event response message.
         */
        statusCode?: string;
        /**
         * The HTTP message version.
         */
        version?: string;
    }

    /**
     * The properties of the export pipeline target.
     */
    export interface ExportPipelineTargetPropertiesResponse {
        /**
         * They key vault secret uri to obtain the target storage SAS token.
         */
        keyVaultUri: string;
        /**
         * The type of target for the export pipeline.
         */
        type?: string;
        /**
         * The target uri of the export pipeline.
         * When 'AzureStorageBlob': "https://accountName.blob.core.windows.net/containerName/blobName"
         * When 'AzureStorageBlobContainer':  "https://accountName.blob.core.windows.net/containerName"
         */
        uri?: string;
    }

    /**
     * The export policy for a container registry.
     */
    export interface ExportPolicyResponse {
        /**
         * The value that indicates whether the policy is enabled or not.
         */
        status?: string;
    }
    /**
     * exportPolicyResponseProvideDefaults sets the appropriate defaults for ExportPolicyResponse
     */
    export function exportPolicyResponseProvideDefaults(val: ExportPolicyResponse): ExportPolicyResponse {
        return {
            ...val,
            status: (val.status) ?? "enabled",
        };
    }

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
     * Managed identity for the resource.
     */
    export interface IdentityPropertiesResponse {
        /**
         * The principal ID of resource identity.
         */
        principalId?: string;
        /**
         * The tenant ID of resource.
         */
        tenantId?: string;
        /**
         * The identity type.
         */
        type?: string;
        /**
         * The list of user identities associated with the resource. The user identity 
         * dictionary key references will be ARM resource ids in the form: 
         * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/
         *     providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentities?: {[key: string]: UserIdentityPropertiesResponse};
    }

    /**
     * The properties of the import pipeline source.
     */
    export interface ImportPipelineSourcePropertiesResponse {
        /**
         * They key vault secret uri to obtain the source storage SAS token.
         */
        keyVaultUri: string;
        /**
         * The type of source for the import pipeline.
         */
        type?: string;
        /**
         * The source uri of the import pipeline.
         * When 'AzureStorageBlob': "https://accountName.blob.core.windows.net/containerName/blobName"
         * When 'AzureStorageBlobContainer': "https://accountName.blob.core.windows.net/containerName"
         */
        uri?: string;
    }
    /**
     * importPipelineSourcePropertiesResponseProvideDefaults sets the appropriate defaults for ImportPipelineSourcePropertiesResponse
     */
    export function importPipelineSourcePropertiesResponseProvideDefaults(val: ImportPipelineSourcePropertiesResponse): ImportPipelineSourcePropertiesResponse {
        return {
            ...val,
            type: (val.type) ?? "AzureStorageBlobContainer",
        };
    }

    export interface KeyVaultPropertiesResponse {
        /**
         * The client id of the identity which will be used to access key vault.
         */
        identity?: string;
        /**
         * Key vault uri to access the encryption key.
         */
        keyIdentifier?: string;
        /**
         * Auto key rotation status for a CMK enabled registry.
         */
        keyRotationEnabled: boolean;
        /**
         * Timestamp of the last successful key rotation.
         */
        lastKeyRotationTimestamp: string;
        /**
         * The fully qualified key identifier that includes the version of the key that is actually used for encryption.
         */
        versionedKeyIdentifier: string;
    }

    /**
     * The logging properties of the connected registry.
     */
    export interface LoggingPropertiesResponse {
        /**
         * Indicates whether audit logs are enabled on the connected registry.
         */
        auditLogStatus?: string;
        /**
         * The verbosity of logs persisted on the connected registry.
         */
        logLevel?: string;
    }
    /**
     * loggingPropertiesResponseProvideDefaults sets the appropriate defaults for LoggingPropertiesResponse
     */
    export function loggingPropertiesResponseProvideDefaults(val: LoggingPropertiesResponse): LoggingPropertiesResponse {
        return {
            ...val,
            auditLogStatus: (val.auditLogStatus) ?? "Disabled",
            logLevel: (val.logLevel) ?? "Information",
        };
    }

    /**
     * The login server properties of the connected registry.
     */
    export interface LoginServerPropertiesResponse {
        /**
         * The host of the connected registry. Can be FQDN or IP.
         */
        host: string;
        /**
         * The TLS properties of the connected registry login server.
         */
        tls: TlsPropertiesResponse;
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
     * The properties of the connected registry parent.
     */
    export interface ParentPropertiesResponse {
        /**
         * The resource ID of the parent to which the connected registry will be associated.
         */
        id?: string;
        /**
         * The sync properties of the connected registry with its parent.
         */
        syncProperties: SyncPropertiesResponse;
    }

    /**
     * The request properties provided for a pipeline run.
     */
    export interface PipelineRunRequestResponse {
        /**
         * List of source artifacts to be transferred by the pipeline. 
         * Specify an image by repository ('hello-world'). This will use the 'latest' tag.
         * Specify an image by tag ('hello-world:latest').
         * Specify an image by sha256-based manifest digest ('hello-world@sha256:abc123').
         */
        artifacts?: string[];
        /**
         * The digest of the tar used to transfer the artifacts.
         */
        catalogDigest?: string;
        /**
         * The resource ID of the pipeline to run.
         */
        pipelineResourceId?: string;
        /**
         * The source properties of the pipeline run.
         */
        source?: PipelineRunSourcePropertiesResponse;
        /**
         * The target properties of the pipeline run.
         */
        target?: PipelineRunTargetPropertiesResponse;
    }
    /**
     * pipelineRunRequestResponseProvideDefaults sets the appropriate defaults for PipelineRunRequestResponse
     */
    export function pipelineRunRequestResponseProvideDefaults(val: PipelineRunRequestResponse): PipelineRunRequestResponse {
        return {
            ...val,
            source: (val.source ? pipelineRunSourcePropertiesResponseProvideDefaults(val.source) : undefined),
            target: (val.target ? pipelineRunTargetPropertiesResponseProvideDefaults(val.target) : undefined),
        };
    }

    /**
     * The response properties returned for a pipeline run.
     */
    export interface PipelineRunResponseResponse {
        /**
         * The digest of the tar used to transfer the artifacts.
         */
        catalogDigest?: string;
        /**
         * The time the pipeline run finished.
         */
        finishTime?: string;
        /**
         * The artifacts imported in the pipeline run.
         */
        importedArtifacts?: string[];
        /**
         * The detailed error message for the pipeline run in the case of failure.
         */
        pipelineRunErrorMessage?: string;
        /**
         * The current progress of the copy operation.
         */
        progress?: ProgressPropertiesResponse;
        /**
         * The source of the pipeline run.
         */
        source?: ImportPipelineSourcePropertiesResponse;
        /**
         * The time the pipeline run started.
         */
        startTime?: string;
        /**
         * The current status of the pipeline run.
         */
        status?: string;
        /**
         * The target of the pipeline run.
         */
        target?: ExportPipelineTargetPropertiesResponse;
        /**
         * The trigger that caused the pipeline run.
         */
        trigger?: PipelineTriggerDescriptorResponse;
    }
    /**
     * pipelineRunResponseResponseProvideDefaults sets the appropriate defaults for PipelineRunResponseResponse
     */
    export function pipelineRunResponseResponseProvideDefaults(val: PipelineRunResponseResponse): PipelineRunResponseResponse {
        return {
            ...val,
            source: (val.source ? importPipelineSourcePropertiesResponseProvideDefaults(val.source) : undefined),
        };
    }

    export interface PipelineRunSourcePropertiesResponse {
        /**
         * The name of the source.
         */
        name?: string;
        /**
         * The type of the source.
         */
        type?: string;
    }
    /**
     * pipelineRunSourcePropertiesResponseProvideDefaults sets the appropriate defaults for PipelineRunSourcePropertiesResponse
     */
    export function pipelineRunSourcePropertiesResponseProvideDefaults(val: PipelineRunSourcePropertiesResponse): PipelineRunSourcePropertiesResponse {
        return {
            ...val,
            type: (val.type) ?? "AzureStorageBlob",
        };
    }

    export interface PipelineRunTargetPropertiesResponse {
        /**
         * The name of the target.
         */
        name?: string;
        /**
         * The type of the target.
         */
        type?: string;
    }
    /**
     * pipelineRunTargetPropertiesResponseProvideDefaults sets the appropriate defaults for PipelineRunTargetPropertiesResponse
     */
    export function pipelineRunTargetPropertiesResponseProvideDefaults(val: PipelineRunTargetPropertiesResponse): PipelineRunTargetPropertiesResponse {
        return {
            ...val,
            type: (val.type) ?? "AzureStorageBlob",
        };
    }

    export interface PipelineSourceTriggerDescriptorResponse {
        /**
         * The timestamp when the source update happened.
         */
        timestamp?: string;
    }

    export interface PipelineSourceTriggerPropertiesResponse {
        /**
         * The current status of the source trigger.
         */
        status: string;
    }
    /**
     * pipelineSourceTriggerPropertiesResponseProvideDefaults sets the appropriate defaults for PipelineSourceTriggerPropertiesResponse
     */
    export function pipelineSourceTriggerPropertiesResponseProvideDefaults(val: PipelineSourceTriggerPropertiesResponse): PipelineSourceTriggerPropertiesResponse {
        return {
            ...val,
            status: (val.status) ?? "Enabled",
        };
    }

    export interface PipelineTriggerDescriptorResponse {
        /**
         * The source trigger that caused the pipeline run.
         */
        sourceTrigger?: PipelineSourceTriggerDescriptorResponse;
    }

    export interface PipelineTriggerPropertiesResponse {
        /**
         * The source trigger properties of the pipeline.
         */
        sourceTrigger?: PipelineSourceTriggerPropertiesResponse;
    }
    /**
     * pipelineTriggerPropertiesResponseProvideDefaults sets the appropriate defaults for PipelineTriggerPropertiesResponse
     */
    export function pipelineTriggerPropertiesResponseProvideDefaults(val: PipelineTriggerPropertiesResponse): PipelineTriggerPropertiesResponse {
        return {
            ...val,
            sourceTrigger: (val.sourceTrigger ? pipelineSourceTriggerPropertiesResponseProvideDefaults(val.sourceTrigger) : undefined),
        };
    }

    /**
     * The policies for a container registry.
     */
    export interface PoliciesResponse {
        /**
         * The policy for using ARM audience token for a container registry.
         */
        azureADAuthenticationAsArmPolicy?: AzureADAuthenticationAsArmPolicyResponse;
        /**
         * The export policy for a container registry.
         */
        exportPolicy?: ExportPolicyResponse;
        /**
         * The quarantine policy for a container registry.
         */
        quarantinePolicy?: QuarantinePolicyResponse;
        /**
         * The retention policy for a container registry.
         */
        retentionPolicy?: RetentionPolicyResponse;
        /**
         * The soft delete policy for a container registry.
         */
        softDeletePolicy?: SoftDeletePolicyResponse;
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
            azureADAuthenticationAsArmPolicy: (val.azureADAuthenticationAsArmPolicy ? azureADAuthenticationAsArmPolicyResponseProvideDefaults(val.azureADAuthenticationAsArmPolicy) : undefined),
            exportPolicy: (val.exportPolicy ? exportPolicyResponseProvideDefaults(val.exportPolicy) : undefined),
            quarantinePolicy: (val.quarantinePolicy ? quarantinePolicyResponseProvideDefaults(val.quarantinePolicy) : undefined),
            retentionPolicy: (val.retentionPolicy ? retentionPolicyResponseProvideDefaults(val.retentionPolicy) : undefined),
            softDeletePolicy: (val.softDeletePolicy ? softDeletePolicyResponseProvideDefaults(val.softDeletePolicy) : undefined),
            trustPolicy: (val.trustPolicy ? trustPolicyResponseProvideDefaults(val.trustPolicy) : undefined),
        };
    }

    /**
     * An object that represents a private endpoint connection for a container registry.
     */
    export interface PrivateEndpointConnectionResponse {
        /**
         * The resource ID.
         */
        id: string;
        /**
         * The name of the resource.
         */
        name: string;
        /**
         * The resource of private endpoint.
         */
        privateEndpoint?: PrivateEndpointResponse;
        /**
         * A collection of information about the state of the connection between service consumer and provider.
         */
        privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateResponse;
        /**
         * The provisioning state of private endpoint connection resource.
         */
        provisioningState: string;
        /**
         * Metadata pertaining to creation and last modification of the resource.
         */
        systemData: SystemDataResponse;
        /**
         * The type of the resource.
         */
        type: string;
    }

    /**
     * The Private Endpoint resource.
     */
    export interface PrivateEndpointResponse {
        /**
         * This is private endpoint resource created with Microsoft.Network resource provider.
         */
        id?: string;
    }

    /**
     * The state of a private link service connection.
     */
    export interface PrivateLinkServiceConnectionStateResponse {
        /**
         * A message indicating if changes on the service provider require any updates on the consumer.
         */
        actionsRequired?: string;
        /**
         * The description for connection status. For example if connection is rejected it can indicate reason for rejection.
         */
        description?: string;
        /**
         * The private link service connection status.
         */
        status?: string;
    }

    export interface ProgressPropertiesResponse {
        /**
         * The percentage complete of the copy operation.
         */
        percentage?: string;
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
     * The request that generated the event.
     */
    export interface RequestResponse {
        /**
         * The IP or hostname and possibly port of the client connection that initiated the event. This is the RemoteAddr from the standard http request.
         */
        addr?: string;
        /**
         * The externally accessible hostname of the registry instance, as specified by the http host header on incoming requests.
         */
        host?: string;
        /**
         * The ID of the request that initiated the event.
         */
        id?: string;
        /**
         * The request method that generated the event.
         */
        method?: string;
        /**
         * The user agent header of the request.
         */
        useragent?: string;
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
     * The soft delete policy for a container registry
     */
    export interface SoftDeletePolicyResponse {
        /**
         * The timestamp when the policy was last updated.
         */
        lastUpdatedTime: string;
        /**
         * The number of days after which a soft-deleted item is permanently deleted.
         */
        retentionDays?: number;
        /**
         * The value that indicates whether the policy is enabled or not.
         */
        status?: string;
    }
    /**
     * softDeletePolicyResponseProvideDefaults sets the appropriate defaults for SoftDeletePolicyResponse
     */
    export function softDeletePolicyResponseProvideDefaults(val: SoftDeletePolicyResponse): SoftDeletePolicyResponse {
        return {
            ...val,
            retentionDays: (val.retentionDays) ?? 7,
            status: (val.status) ?? "disabled",
        };
    }

    /**
     * The registry node that generated the event. Put differently, while the actor initiates the event, the source generates it.
     */
    export interface SourceResponse {
        /**
         * The IP or hostname and the port of the registry node that generated the event. Generally, this will be resolved by os.Hostname() along with the running port.
         */
        addr?: string;
        /**
         * The running instance of an application. Changes after each restart.
         */
        instanceID?: string;
    }

    /**
     * The status detail properties of the connected registry.
     */
    export interface StatusDetailPropertiesResponse {
        /**
         * The code of the status.
         */
        code: string;
        /**
         * The correlation ID of the status.
         */
        correlationId: string;
        /**
         * The description of the status.
         */
        description: string;
        /**
         * The timestamp of the status.
         */
        timestamp: string;
        /**
         * The component of the connected registry corresponding to the status.
         */
        type: string;
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
     * The sync properties of the connected registry with its parent.
     */
    export interface SyncPropertiesResponse {
        /**
         * The gateway endpoint used by the connected registry to communicate with its parent.
         */
        gatewayEndpoint: string;
        /**
         * The last time a sync occurred between the connected registry and its parent.
         */
        lastSyncTime: string;
        /**
         * The period of time for which a message is available to sync before it is expired. Specify the duration using the format P[n]Y[n]M[n]DT[n]H[n]M[n]S as per ISO8601.
         */
        messageTtl: string;
        /**
         * The cron expression indicating the schedule that the connected registry will sync with its parent.
         */
        schedule?: string;
        /**
         * The time window during which sync is enabled for each schedule occurrence. Specify the duration using the format P[n]Y[n]M[n]DT[n]H[n]M[n]S as per ISO8601.
         */
        syncWindow?: string;
        /**
         * The resource ID of the ACR token used to authenticate the connected registry to its parent during sync.
         */
        tokenId: string;
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
         * The timestamp of resource modification (UTC).
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
     * The target of the event.
     */
    export interface TargetResponse {
        /**
         * The digest of the content, as defined by the Registry V2 HTTP API Specification.
         */
        digest?: string;
        /**
         * The number of bytes of the content. Same as Size field.
         */
        length?: number;
        /**
         * The MIME type of the referenced object.
         */
        mediaType?: string;
        /**
         * The name of the artifact.
         */
        name?: string;
        /**
         * The repository name.
         */
        repository?: string;
        /**
         * The number of bytes of the content. Same as Length field.
         */
        size?: number;
        /**
         * The tag name.
         */
        tag?: string;
        /**
         * The direct URL to the content.
         */
        url?: string;
        /**
         * The version of the artifact.
         */
        version?: string;
    }

    /**
     * The TLS certificate properties of the connected registry login server.
     */
    export interface TlsCertificatePropertiesResponse {
        /**
         * Indicates the location of the certificates.
         */
        location: string;
        /**
         * The type of certificate location.
         */
        type: string;
    }

    /**
     * The TLS properties of the connected registry login server.
     */
    export interface TlsPropertiesResponse {
        /**
         * The certificate used to configure HTTPS for the login server.
         */
        certificate: TlsCertificatePropertiesResponse;
        /**
         * Indicates whether HTTPS is enabled for the login server.
         */
        status: string;
    }

    /**
     * The properties of a certificate used for authenticating a token.
     */
    export interface TokenCertificateResponse {
        /**
         * Base 64 encoded string of the public certificate1 in PEM format that will be used for authenticating the token.
         */
        encodedPemCertificate?: string;
        /**
         * The expiry datetime of the certificate.
         */
        expiry?: string;
        name?: string;
        /**
         * The thumbprint of the certificate.
         */
        thumbprint?: string;
    }

    /**
     * The properties of the credentials that can be used for authenticating the token.
     */
    export interface TokenCredentialsPropertiesResponse {
        certificates?: TokenCertificateResponse[];
        passwords?: TokenPasswordResponse[];
    }

    /**
     * The password that will be used for authenticating the token of a container registry.
     */
    export interface TokenPasswordResponse {
        /**
         * The creation datetime of the password.
         */
        creationTime?: string;
        /**
         * The expiry datetime of the password.
         */
        expiry?: string;
        /**
         * The password name "password1" or "password2"
         */
        name?: string;
        /**
         * The password value.
         */
        value: string;
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

    export interface UserIdentityPropertiesResponse {
        /**
         * The client id of user assigned identity.
         */
        clientId?: string;
        /**
         * The principal id of user assigned identity.
         */
        principalId?: string;
    }
