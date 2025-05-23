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
 * The properties that determine the run agent configuration.
 */
export interface AgentPropertiesResponse {
    /**
     * The CPU configuration in terms of number of cores required for the run.
     */
    cpu?: number;
}

/**
 * The properties of the archive package source.
 */
export interface ArchivePackageSourcePropertiesResponse {
    /**
     * The type of package source for a archive.
     */
    type?: string;
    /**
     * The external repository url.
     */
    url?: string;
}

/**
 * The properties of a run argument.
 */
export interface ArgumentResponse {
    /**
     * Flag to indicate whether the argument represents a secret and want to be removed from build logs.
     */
    isSecret?: boolean;
    /**
     * The name of the argument.
     */
    name: string;
    /**
     * The value of the argument.
     */
    value: string;
}
/**
 * argumentResponseProvideDefaults sets the appropriate defaults for ArgumentResponse
 */
export function argumentResponseProvideDefaults(val: ArgumentResponse): ArgumentResponse {
    return {
        ...val,
        isSecret: (val.isSecret) ?? false,
    };
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
 * The authorization properties for accessing the source code repository.
 */
export interface AuthInfoResponse {
    /**
     * Time in seconds that the token remains valid
     */
    expiresIn?: number;
    /**
     * The refresh token used to refresh the access token.
     */
    refreshToken?: string;
    /**
     * The scope of the access token.
     */
    scope?: string;
    /**
     * The access token used to access the source control provider.
     */
    token: string;
    /**
     * The type of Auth token.
     */
    tokenType: string;
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
 * Properties that describe a base image dependency.
 */
export interface BaseImageDependencyResponse {
    /**
     * The sha256-based digest of the image manifest.
     */
    digest?: string;
    /**
     * The registry login server.
     */
    registry?: string;
    /**
     * The repository name.
     */
    repository?: string;
    /**
     * The tag name.
     */
    tag?: string;
    /**
     * The type of the base image dependency.
     */
    type?: string;
}

/**
 * The trigger based on base image dependency.
 */
export interface BaseImageTriggerResponse {
    /**
     * The type of the auto trigger for base image dependency updates.
     */
    baseImageTriggerType: string;
    /**
     * The name of the trigger.
     */
    name: string;
    /**
     * The current status of trigger.
     */
    status?: string;
    /**
     * The endpoint URL for receiving update triggers.
     */
    updateTriggerEndpoint?: string;
    /**
     * Type of Payload body for Base image update triggers.
     */
    updateTriggerPayloadType?: string;
}
/**
 * baseImageTriggerResponseProvideDefaults sets the appropriate defaults for BaseImageTriggerResponse
 */
export function baseImageTriggerResponseProvideDefaults(val: BaseImageTriggerResponse): BaseImageTriggerResponse {
    return {
        ...val,
        status: (val.status) ?? "Enabled",
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

/**
 * The parameters that describes a set of credentials that will be used when a run is invoked.
 */
export interface CredentialsResponse {
    /**
     * Describes the credential parameters for accessing other custom registries. The key
     * for the dictionary item will be the registry login server (myregistry.azurecr.io) and
     * the value of the item will be the registry credentials for accessing the registry.
     */
    customRegistries?: {[key: string]: CustomRegistryCredentialsResponse};
    /**
     * Describes the credential parameters for accessing the source registry.
     */
    sourceRegistry?: SourceRegistryCredentialsResponse;
}

/**
 * Describes the credentials that will be used to access a custom registry during a run.
 */
export interface CustomRegistryCredentialsResponse {
    /**
     * Indicates the managed identity assigned to the custom credential. If a user-assigned identity
     * this value is the Client ID. If a system-assigned identity, the value will be `system`. In
     * the case of a system-assigned identity, the Client ID will be determined by the runner. This
     * identity may be used to authenticate to key vault to retrieve credentials or it may be the only 
     * source of authentication used for accessing the registry.
     */
    identity?: string;
    /**
     * The password for logging into the custom registry. The password is a secret 
     * object that allows multiple ways of providing the value for it.
     */
    password?: SecretObjectResponse;
    /**
     * The username for logging into the custom registry.
     */
    userName?: SecretObjectResponse;
}

/**
 * The parameters for a docker quick build.
 */
export interface DockerBuildRequestResponse {
    /**
     * The machine configuration of the run agent.
     */
    agentConfiguration?: AgentPropertiesResponse;
    /**
     * The dedicated agent pool for the run.
     */
    agentPoolName?: string;
    /**
     * The collection of override arguments to be used when executing the run.
     */
    arguments?: ArgumentResponse[];
    /**
     * The properties that describes a set of credentials that will be used when this run is invoked.
     */
    credentials?: CredentialsResponse;
    /**
     * The Docker file path relative to the source location.
     */
    dockerFilePath: string;
    /**
     * The fully qualified image names including the repository and tag.
     */
    imageNames?: string[];
    /**
     * The value that indicates whether archiving is enabled for the run or not.
     */
    isArchiveEnabled?: boolean;
    /**
     * The value of this property indicates whether the image built should be pushed to the registry or not.
     */
    isPushEnabled?: boolean;
    /**
     * The template that describes the repository and tag information for run log artifact.
     */
    logTemplate?: string;
    /**
     * The value of this property indicates whether the image cache is enabled or not.
     */
    noCache?: boolean;
    /**
     * The platform properties against which the run has to happen.
     */
    platform: PlatformPropertiesResponse;
    /**
     * The URL(absolute or relative) of the source context. It can be an URL to a tar or git repository.
     * If it is relative URL, the relative path should be obtained from calling listBuildSourceUploadUrl API.
     */
    sourceLocation?: string;
    /**
     * The name of the target build stage for the docker build.
     */
    target?: string;
    /**
     * Run timeout in seconds.
     */
    timeout?: number;
    /**
     * The type of the run request.
     * Expected value is 'DockerBuildRequest'.
     */
    type: "DockerBuildRequest";
}
/**
 * dockerBuildRequestResponseProvideDefaults sets the appropriate defaults for DockerBuildRequestResponse
 */
export function dockerBuildRequestResponseProvideDefaults(val: DockerBuildRequestResponse): DockerBuildRequestResponse {
    return {
        ...val,
        isArchiveEnabled: (val.isArchiveEnabled) ?? false,
        isPushEnabled: (val.isPushEnabled) ?? true,
        noCache: (val.noCache) ?? false,
        timeout: (val.timeout) ?? 3600,
    };
}

/**
 * The Docker build step.
 */
export interface DockerBuildStepResponse {
    /**
     * The collection of override arguments to be used when executing this build step.
     */
    arguments?: ArgumentResponse[];
    /**
     * List of base image dependencies for a step.
     */
    baseImageDependencies: BaseImageDependencyResponse[];
    /**
     * The token (git PAT or SAS token of storage account blob) associated with the context for a step.
     */
    contextAccessToken?: string;
    /**
     * The URL(absolute or relative) of the source context for the task step.
     */
    contextPath?: string;
    /**
     * The Docker file path relative to the source context.
     */
    dockerFilePath: string;
    /**
     * The fully qualified image names including the repository and tag.
     */
    imageNames?: string[];
    /**
     * The value of this property indicates whether the image built should be pushed to the registry or not.
     */
    isPushEnabled?: boolean;
    /**
     * The value of this property indicates whether the image cache is enabled or not.
     */
    noCache?: boolean;
    /**
     * The name of the target build stage for the docker build.
     */
    target?: string;
    /**
     * The type of the step.
     * Expected value is 'Docker'.
     */
    type: "Docker";
}
/**
 * dockerBuildStepResponseProvideDefaults sets the appropriate defaults for DockerBuildStepResponse
 */
export function dockerBuildStepResponseProvideDefaults(val: DockerBuildStepResponse): DockerBuildStepResponse {
    return {
        ...val,
        isPushEnabled: (val.isPushEnabled) ?? true,
        noCache: (val.noCache) ?? false,
    };
}

/**
 * The parameters for a quick task run request.
 */
export interface EncodedTaskRunRequestResponse {
    /**
     * The machine configuration of the run agent.
     */
    agentConfiguration?: AgentPropertiesResponse;
    /**
     * The dedicated agent pool for the run.
     */
    agentPoolName?: string;
    /**
     * The properties that describes a set of credentials that will be used when this run is invoked.
     */
    credentials?: CredentialsResponse;
    /**
     * Base64 encoded value of the template/definition file content.
     */
    encodedTaskContent: string;
    /**
     * Base64 encoded value of the parameters/values file content.
     */
    encodedValuesContent?: string;
    /**
     * The value that indicates whether archiving is enabled for the run or not.
     */
    isArchiveEnabled?: boolean;
    /**
     * The template that describes the repository and tag information for run log artifact.
     */
    logTemplate?: string;
    /**
     * The platform properties against which the run has to happen.
     */
    platform: PlatformPropertiesResponse;
    /**
     * The URL(absolute or relative) of the source context. It can be an URL to a tar or git repository.
     * If it is relative URL, the relative path should be obtained from calling listBuildSourceUploadUrl API.
     */
    sourceLocation?: string;
    /**
     * Run timeout in seconds.
     */
    timeout?: number;
    /**
     * The type of the run request.
     * Expected value is 'EncodedTaskRunRequest'.
     */
    type: "EncodedTaskRunRequest";
    /**
     * The collection of overridable values that can be passed when running a task.
     */
    values?: SetValueResponse[];
}
/**
 * encodedTaskRunRequestResponseProvideDefaults sets the appropriate defaults for EncodedTaskRunRequestResponse
 */
export function encodedTaskRunRequestResponseProvideDefaults(val: EncodedTaskRunRequestResponse): EncodedTaskRunRequestResponse {
    return {
        ...val,
        isArchiveEnabled: (val.isArchiveEnabled) ?? false,
        timeout: (val.timeout) ?? 3600,
    };
}

/**
 * The properties of a encoded task step.
 */
export interface EncodedTaskStepResponse {
    /**
     * List of base image dependencies for a step.
     */
    baseImageDependencies: BaseImageDependencyResponse[];
    /**
     * The token (git PAT or SAS token of storage account blob) associated with the context for a step.
     */
    contextAccessToken?: string;
    /**
     * The URL(absolute or relative) of the source context for the task step.
     */
    contextPath?: string;
    /**
     * Base64 encoded value of the template/definition file content.
     */
    encodedTaskContent: string;
    /**
     * Base64 encoded value of the parameters/values file content.
     */
    encodedValuesContent?: string;
    /**
     * The type of the step.
     * Expected value is 'EncodedTask'.
     */
    type: "EncodedTask";
    /**
     * The collection of overridable values that can be passed when running a task.
     */
    values?: SetValueResponse[];
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
 * The request parameters for a scheduling run against a task file.
 */
export interface FileTaskRunRequestResponse {
    /**
     * The machine configuration of the run agent.
     */
    agentConfiguration?: AgentPropertiesResponse;
    /**
     * The dedicated agent pool for the run.
     */
    agentPoolName?: string;
    /**
     * The properties that describes a set of credentials that will be used when this run is invoked.
     */
    credentials?: CredentialsResponse;
    /**
     * The value that indicates whether archiving is enabled for the run or not.
     */
    isArchiveEnabled?: boolean;
    /**
     * The template that describes the repository and tag information for run log artifact.
     */
    logTemplate?: string;
    /**
     * The platform properties against which the run has to happen.
     */
    platform: PlatformPropertiesResponse;
    /**
     * The URL(absolute or relative) of the source context. It can be an URL to a tar or git repository.
     * If it is relative URL, the relative path should be obtained from calling listBuildSourceUploadUrl API.
     */
    sourceLocation?: string;
    /**
     * The template/definition file path relative to the source.
     */
    taskFilePath: string;
    /**
     * Run timeout in seconds.
     */
    timeout?: number;
    /**
     * The type of the run request.
     * Expected value is 'FileTaskRunRequest'.
     */
    type: "FileTaskRunRequest";
    /**
     * The collection of overridable values that can be passed when running a task.
     */
    values?: SetValueResponse[];
    /**
     * The values/parameters file path relative to the source.
     */
    valuesFilePath?: string;
}
/**
 * fileTaskRunRequestResponseProvideDefaults sets the appropriate defaults for FileTaskRunRequestResponse
 */
export function fileTaskRunRequestResponseProvideDefaults(val: FileTaskRunRequestResponse): FileTaskRunRequestResponse {
    return {
        ...val,
        isArchiveEnabled: (val.isArchiveEnabled) ?? false,
        timeout: (val.timeout) ?? 3600,
    };
}

/**
 * The properties of a task step.
 */
export interface FileTaskStepResponse {
    /**
     * List of base image dependencies for a step.
     */
    baseImageDependencies: BaseImageDependencyResponse[];
    /**
     * The token (git PAT or SAS token of storage account blob) associated with the context for a step.
     */
    contextAccessToken?: string;
    /**
     * The URL(absolute or relative) of the source context for the task step.
     */
    contextPath?: string;
    /**
     * The task template/definition file path relative to the source context.
     */
    taskFilePath: string;
    /**
     * The type of the step.
     * Expected value is 'FileTask'.
     */
    type: "FileTask";
    /**
     * The collection of overridable values that can be passed when running a task.
     */
    values?: SetValueResponse[];
    /**
     * The task values/parameters file path relative to the source context.
     */
    valuesFilePath?: string;
}

/**
 * The garbage collection properties of the connected registry.
 */
export interface GarbageCollectionPropertiesResponse {
    /**
     * Indicates whether garbage collection is enabled for the connected registry.
     */
    enabled?: boolean;
    /**
     * The cron expression indicating the schedule that the connected registry will run garbage collection.
     */
    schedule?: string;
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
 * Properties for a registry image.
 */
export interface ImageDescriptorResponse {
    /**
     * The sha256-based digest of the image manifest.
     */
    digest?: string;
    /**
     * The registry login server.
     */
    registry?: string;
    /**
     * The repository name.
     */
    repository?: string;
    /**
     * The tag name.
     */
    tag?: string;
}

/**
 * The image update trigger that caused a build.
 */
export interface ImageUpdateTriggerResponse {
    /**
     * The unique ID of the trigger.
     */
    id?: string;
    /**
     * The list of image updates that caused the build.
     */
    images?: ImageDescriptorResponse[];
    /**
     * The timestamp when the image update happened.
     */
    timestamp?: string;
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

export interface OverrideTaskStepPropertiesResponse {
    /**
     * Gets or sets the collection of override arguments to be used when
     * executing a build step.
     */
    arguments?: ArgumentResponse[];
    /**
     * The source context against which run has to be queued.
     */
    contextPath?: string;
    /**
     * The file against which run has to be queued.
     */
    file?: string;
    /**
     * The name of the target build stage for the docker build.
     */
    target?: string;
    /**
     * Base64 encoded update trigger token that will be attached with the base image trigger webhook.
     */
    updateTriggerToken?: string;
    /**
     * The collection of overridable values that can be passed when running a Task.
     */
    values?: SetValueResponse[];
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
 * The platform properties against which the run has to happen.
 */
export interface PlatformPropertiesResponse {
    /**
     * The OS architecture.
     */
    architecture?: string;
    /**
     * The operating system type required for the run.
     */
    os: string;
    /**
     * Variant of the CPU.
     */
    variant?: string;
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
 * Run resource properties
 */
export interface RunResponse {
    /**
     * The machine configuration of the run agent.
     */
    agentConfiguration?: AgentPropertiesResponse;
    /**
     * The dedicated agent pool for the run.
     */
    agentPoolName?: string;
    /**
     * The time the run was scheduled.
     */
    createTime?: string;
    /**
     * The list of custom registries that were logged in during this run.
     */
    customRegistries?: string[];
    /**
     * The time the run finished.
     */
    finishTime?: string;
    /**
     * The resource ID.
     */
    id: string;
    /**
     * The image update trigger that caused the run. This is applicable if the task has base image trigger configured.
     */
    imageUpdateTrigger?: ImageUpdateTriggerResponse;
    /**
     * The value that indicates whether archiving is enabled or not.
     */
    isArchiveEnabled?: boolean;
    /**
     * The last updated time for the run.
     */
    lastUpdatedTime?: string;
    /**
     * The image description for the log artifact.
     */
    logArtifact: ImageDescriptorResponse;
    /**
     * The name of the resource.
     */
    name: string;
    /**
     * The list of all images that were generated from the run. This is applicable if the run generates base image dependencies.
     */
    outputImages?: ImageDescriptorResponse[];
    /**
     * The platform properties against which the run will happen.
     */
    platform?: PlatformPropertiesResponse;
    /**
     * The provisioning state of a run.
     */
    provisioningState?: string;
    /**
     * The error message received from backend systems after the run is scheduled.
     */
    runErrorMessage: string;
    /**
     * The unique identifier for the run.
     */
    runId?: string;
    /**
     * The type of run.
     */
    runType?: string;
    /**
     * The scope of the credentials that were used to login to the source registry during this run.
     */
    sourceRegistryAuth?: string;
    /**
     * The source trigger that caused the run.
     */
    sourceTrigger?: SourceTriggerDescriptorResponse;
    /**
     * The time the run started.
     */
    startTime?: string;
    /**
     * The current status of the run.
     */
    status?: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    systemData: SystemDataResponse;
    /**
     * The task against which run was scheduled.
     */
    task?: string;
    /**
     * The timer trigger that caused the run.
     */
    timerTrigger?: TimerTriggerDescriptorResponse;
    /**
     * The type of the resource.
     */
    type: string;
    /**
     * The update trigger token passed for the Run.
     */
    updateTriggerToken?: string;
}
/**
 * runResponseProvideDefaults sets the appropriate defaults for RunResponse
 */
export function runResponseProvideDefaults(val: RunResponse): RunResponse {
    return {
        ...val,
        isArchiveEnabled: (val.isArchiveEnabled) ?? false,
    };
}

/**
 * Describes the properties of a secret object value.
 */
export interface SecretObjectResponse {
    /**
     * The type of the secret object which determines how the value of the secret object has to be
     * interpreted.
     */
    type?: string;
    /**
     * The value of the secret. The format of this value will be determined
     * based on the type of the secret object. If the type is Opaque, the value will be
     * used as is without any modification.
     */
    value?: string;
}

/**
 * The properties of a overridable value that can be passed to a task template.
 */
export interface SetValueResponse {
    /**
     * Flag to indicate whether the value represents a secret or not.
     */
    isSecret?: boolean;
    /**
     * The name of the overridable value.
     */
    name: string;
    /**
     * The overridable value.
     */
    value: string;
}
/**
 * setValueResponseProvideDefaults sets the appropriate defaults for SetValueResponse
 */
export function setValueResponseProvideDefaults(val: SetValueResponse): SetValueResponse {
    return {
        ...val,
        isSecret: (val.isSecret) ?? false,
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
 * The properties of the source code repository.
 */
export interface SourcePropertiesResponse {
    /**
     * The branch name of the source code.
     */
    branch?: string;
    /**
     * The full URL to the source code repository
     */
    repositoryUrl: string;
    /**
     * The authorization properties for accessing the source code repository and to set up
     * webhooks for notifications.
     */
    sourceControlAuthProperties?: AuthInfoResponse;
    /**
     * The type of source control service.
     */
    sourceControlType: string;
}

/**
 * Describes the credential parameters for accessing the source registry.
 */
export interface SourceRegistryCredentialsResponse {
    /**
     * The authentication mode which determines the source registry login scope. The credentials for the source registry
     * will be generated using the given scope. These credentials will be used to login to
     * the source registry during the run.
     */
    loginMode?: string;
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
 * The source trigger that caused a run.
 */
export interface SourceTriggerDescriptorResponse {
    /**
     * The branch name in the repository.
     */
    branchName?: string;
    /**
     * The unique ID that identifies a commit.
     */
    commitId?: string;
    /**
     * The event type of the trigger.
     */
    eventType?: string;
    /**
     * The unique ID of the trigger.
     */
    id?: string;
    /**
     * The source control provider type.
     */
    providerType?: string;
    /**
     * The unique ID that identifies pull request.
     */
    pullRequestId?: string;
    /**
     * The repository URL.
     */
    repositoryUrl?: string;
}

/**
 * The properties of a source based trigger.
 */
export interface SourceTriggerResponse {
    /**
     * The name of the trigger.
     */
    name: string;
    /**
     * The properties that describes the source(code) for the task.
     */
    sourceRepository: SourcePropertiesResponse;
    /**
     * The source event corresponding to the trigger.
     */
    sourceTriggerEvents: string[];
    /**
     * The current status of trigger.
     */
    status?: string;
}
/**
 * sourceTriggerResponseProvideDefaults sets the appropriate defaults for SourceTriggerResponse
 */
export function sourceTriggerResponseProvideDefaults(val: SourceTriggerResponse): SourceTriggerResponse {
    return {
        ...val,
        status: (val.status) ?? "Enabled",
    };
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
 * The parameters for a task run request.
 */
export interface TaskRunRequestResponse {
    /**
     * The dedicated agent pool for the run.
     */
    agentPoolName?: string;
    /**
     * The value that indicates whether archiving is enabled for the run or not.
     */
    isArchiveEnabled?: boolean;
    /**
     * The template that describes the repository and tag information for run log artifact.
     */
    logTemplate?: string;
    /**
     * Set of overridable parameters that can be passed when running a Task.
     */
    overrideTaskStepProperties?: OverrideTaskStepPropertiesResponse;
    /**
     * The resource ID of task against which run has to be queued.
     */
    taskId: string;
    /**
     * The type of the run request.
     * Expected value is 'TaskRunRequest'.
     */
    type: "TaskRunRequest";
}
/**
 * taskRunRequestResponseProvideDefaults sets the appropriate defaults for TaskRunRequestResponse
 */
export function taskRunRequestResponseProvideDefaults(val: TaskRunRequestResponse): TaskRunRequestResponse {
    return {
        ...val,
        isArchiveEnabled: (val.isArchiveEnabled) ?? false,
    };
}

export interface TimerTriggerDescriptorResponse {
    /**
     * The occurrence that triggered the run.
     */
    scheduleOccurrence?: string;
    /**
     * The timer trigger name that caused the run.
     */
    timerTriggerName?: string;
}

/**
 * The properties of a timer trigger.
 */
export interface TimerTriggerResponse {
    /**
     * The name of the trigger.
     */
    name: string;
    /**
     * The CRON expression for the task schedule
     */
    schedule: string;
    /**
     * The current status of trigger.
     */
    status?: string;
}
/**
 * timerTriggerResponseProvideDefaults sets the appropriate defaults for TimerTriggerResponse
 */
export function timerTriggerResponseProvideDefaults(val: TimerTriggerResponse): TimerTriggerResponse {
    return {
        ...val,
        status: (val.status) ?? "Enabled",
    };
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
 * The properties of a trigger.
 */
export interface TriggerPropertiesResponse {
    /**
     * The trigger based on base image dependencies.
     */
    baseImageTrigger?: BaseImageTriggerResponse;
    /**
     * The collection of triggers based on source code repository.
     */
    sourceTriggers?: SourceTriggerResponse[];
    /**
     * The collection of timer triggers.
     */
    timerTriggers?: TimerTriggerResponse[];
}
/**
 * triggerPropertiesResponseProvideDefaults sets the appropriate defaults for TriggerPropertiesResponse
 */
export function triggerPropertiesResponseProvideDefaults(val: TriggerPropertiesResponse): TriggerPropertiesResponse {
    return {
        ...val,
        baseImageTrigger: (val.baseImageTrigger ? baseImageTriggerResponseProvideDefaults(val.baseImageTrigger) : undefined),
    };
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
