import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The properties that determine the run agent configuration.
 */
export interface AgentPropertiesArgs {
    /**
     * The CPU configuration in terms of number of cores required for the run.
     */
    cpu?: pulumi.Input<number>;
}

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
 * The properties of a run argument.
 */
export interface ArgumentArgs {
    /**
     * Flag to indicate whether the argument represents a secret and want to be removed from build logs.
     */
    isSecret?: pulumi.Input<boolean>;
    /**
     * The name of the argument.
     */
    name: pulumi.Input<string>;
    /**
     * The value of the argument.
     */
    value: pulumi.Input<string>;
}
/**
 * argumentArgsProvideDefaults sets the appropriate defaults for ArgumentArgs
 */
export function argumentArgsProvideDefaults(val: ArgumentArgs): ArgumentArgs {
    return {
        ...val,
        isSecret: (val.isSecret) ?? false,
    };
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
 * The authorization properties for accessing the source code repository.
 */
export interface AuthInfoArgs {
    /**
     * Time in seconds that the token remains valid
     */
    expiresIn?: pulumi.Input<number>;
    /**
     * The refresh token used to refresh the access token.
     */
    refreshToken?: pulumi.Input<string>;
    /**
     * The scope of the access token.
     */
    scope?: pulumi.Input<string>;
    /**
     * The access token used to access the source control provider.
     */
    token: pulumi.Input<string>;
    /**
     * The type of Auth token.
     */
    tokenType: pulumi.Input<string | enums.TokenType>;
}

/**
 * The trigger based on base image dependency.
 */
export interface BaseImageTriggerArgs {
    /**
     * The type of the auto trigger for base image dependency updates.
     */
    baseImageTriggerType: pulumi.Input<string | enums.BaseImageTriggerType>;
    /**
     * The name of the trigger.
     */
    name: pulumi.Input<string>;
    /**
     * The current status of trigger.
     */
    status?: pulumi.Input<string | enums.TriggerStatus>;
    /**
     * The endpoint URL for receiving update triggers.
     */
    updateTriggerEndpoint?: pulumi.Input<string>;
    /**
     * Type of Payload body for Base image update triggers.
     */
    updateTriggerPayloadType?: pulumi.Input<string | enums.UpdateTriggerPayloadType>;
}
/**
 * baseImageTriggerArgsProvideDefaults sets the appropriate defaults for BaseImageTriggerArgs
 */
export function baseImageTriggerArgsProvideDefaults(val: BaseImageTriggerArgs): BaseImageTriggerArgs {
    return {
        ...val,
        status: (val.status) ?? "Enabled",
    };
}

/**
 * The parameters that describes a set of credentials that will be used when a run is invoked.
 */
export interface CredentialsArgs {
    /**
     * Describes the credential parameters for accessing other custom registries. The key
     * for the dictionary item will be the registry login server (myregistry.azurecr.io) and
     * the value of the item will be the registry credentials for accessing the registry.
     */
    customRegistries?: pulumi.Input<{[key: string]: pulumi.Input<CustomRegistryCredentialsArgs>}>;
    /**
     * Describes the credential parameters for accessing the source registry.
     */
    sourceRegistry?: pulumi.Input<SourceRegistryCredentialsArgs>;
}

/**
 * Describes the credentials that will be used to access a custom registry during a run.
 */
export interface CustomRegistryCredentialsArgs {
    /**
     * Indicates the managed identity assigned to the custom credential. If a user-assigned identity
     * this value is the Client ID. If a system-assigned identity, the value will be `system`. In
     * the case of a system-assigned identity, the Client ID will be determined by the runner. This
     * identity may be used to authenticate to key vault to retrieve credentials or it may be the only 
     * source of authentication used for accessing the registry.
     */
    identity?: pulumi.Input<string>;
    /**
     * The password for logging into the custom registry. The password is a secret 
     * object that allows multiple ways of providing the value for it.
     */
    password?: pulumi.Input<SecretObjectArgs>;
    /**
     * The username for logging into the custom registry.
     */
    userName?: pulumi.Input<SecretObjectArgs>;
}

/**
 * The parameters for a docker quick build.
 */
export interface DockerBuildRequestArgs {
    /**
     * The machine configuration of the run agent.
     */
    agentConfiguration?: pulumi.Input<AgentPropertiesArgs>;
    /**
     * The dedicated agent pool for the run.
     */
    agentPoolName?: pulumi.Input<string>;
    /**
     * The collection of override arguments to be used when executing the run.
     */
    arguments?: pulumi.Input<pulumi.Input<ArgumentArgs>[]>;
    /**
     * The properties that describes a set of credentials that will be used when this run is invoked.
     */
    credentials?: pulumi.Input<CredentialsArgs>;
    /**
     * The Docker file path relative to the source location.
     */
    dockerFilePath: pulumi.Input<string>;
    /**
     * The fully qualified image names including the repository and tag.
     */
    imageNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The value that indicates whether archiving is enabled for the run or not.
     */
    isArchiveEnabled?: pulumi.Input<boolean>;
    /**
     * The value of this property indicates whether the image built should be pushed to the registry or not.
     */
    isPushEnabled?: pulumi.Input<boolean>;
    /**
     * The template that describes the repository and tag information for run log artifact.
     */
    logTemplate?: pulumi.Input<string>;
    /**
     * The value of this property indicates whether the image cache is enabled or not.
     */
    noCache?: pulumi.Input<boolean>;
    /**
     * The platform properties against which the run has to happen.
     */
    platform: pulumi.Input<PlatformPropertiesArgs>;
    /**
     * The URL(absolute or relative) of the source context. It can be an URL to a tar or git repository.
     * If it is relative URL, the relative path should be obtained from calling listBuildSourceUploadUrl API.
     */
    sourceLocation?: pulumi.Input<string>;
    /**
     * The name of the target build stage for the docker build.
     */
    target?: pulumi.Input<string>;
    /**
     * Run timeout in seconds.
     */
    timeout?: pulumi.Input<number>;
    /**
     * The type of the run request.
     * Expected value is 'DockerBuildRequest'.
     */
    type: pulumi.Input<"DockerBuildRequest">;
}
/**
 * dockerBuildRequestArgsProvideDefaults sets the appropriate defaults for DockerBuildRequestArgs
 */
export function dockerBuildRequestArgsProvideDefaults(val: DockerBuildRequestArgs): DockerBuildRequestArgs {
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
export interface DockerBuildStepArgs {
    /**
     * The collection of override arguments to be used when executing this build step.
     */
    arguments?: pulumi.Input<pulumi.Input<ArgumentArgs>[]>;
    /**
     * The token (git PAT or SAS token of storage account blob) associated with the context for a step.
     */
    contextAccessToken?: pulumi.Input<string>;
    /**
     * The URL(absolute or relative) of the source context for the task step.
     */
    contextPath?: pulumi.Input<string>;
    /**
     * The Docker file path relative to the source context.
     */
    dockerFilePath: pulumi.Input<string>;
    /**
     * The fully qualified image names including the repository and tag.
     */
    imageNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The value of this property indicates whether the image built should be pushed to the registry or not.
     */
    isPushEnabled?: pulumi.Input<boolean>;
    /**
     * The value of this property indicates whether the image cache is enabled or not.
     */
    noCache?: pulumi.Input<boolean>;
    /**
     * The name of the target build stage for the docker build.
     */
    target?: pulumi.Input<string>;
    /**
     * The type of the step.
     * Expected value is 'Docker'.
     */
    type: pulumi.Input<"Docker">;
}
/**
 * dockerBuildStepArgsProvideDefaults sets the appropriate defaults for DockerBuildStepArgs
 */
export function dockerBuildStepArgsProvideDefaults(val: DockerBuildStepArgs): DockerBuildStepArgs {
    return {
        ...val,
        isPushEnabled: (val.isPushEnabled) ?? true,
        noCache: (val.noCache) ?? false,
    };
}

/**
 * The parameters for a quick task run request.
 */
export interface EncodedTaskRunRequestArgs {
    /**
     * The machine configuration of the run agent.
     */
    agentConfiguration?: pulumi.Input<AgentPropertiesArgs>;
    /**
     * The dedicated agent pool for the run.
     */
    agentPoolName?: pulumi.Input<string>;
    /**
     * The properties that describes a set of credentials that will be used when this run is invoked.
     */
    credentials?: pulumi.Input<CredentialsArgs>;
    /**
     * Base64 encoded value of the template/definition file content.
     */
    encodedTaskContent: pulumi.Input<string>;
    /**
     * Base64 encoded value of the parameters/values file content.
     */
    encodedValuesContent?: pulumi.Input<string>;
    /**
     * The value that indicates whether archiving is enabled for the run or not.
     */
    isArchiveEnabled?: pulumi.Input<boolean>;
    /**
     * The template that describes the repository and tag information for run log artifact.
     */
    logTemplate?: pulumi.Input<string>;
    /**
     * The platform properties against which the run has to happen.
     */
    platform: pulumi.Input<PlatformPropertiesArgs>;
    /**
     * The URL(absolute or relative) of the source context. It can be an URL to a tar or git repository.
     * If it is relative URL, the relative path should be obtained from calling listBuildSourceUploadUrl API.
     */
    sourceLocation?: pulumi.Input<string>;
    /**
     * Run timeout in seconds.
     */
    timeout?: pulumi.Input<number>;
    /**
     * The type of the run request.
     * Expected value is 'EncodedTaskRunRequest'.
     */
    type: pulumi.Input<"EncodedTaskRunRequest">;
    /**
     * The collection of overridable values that can be passed when running a task.
     */
    values?: pulumi.Input<pulumi.Input<SetValueArgs>[]>;
}
/**
 * encodedTaskRunRequestArgsProvideDefaults sets the appropriate defaults for EncodedTaskRunRequestArgs
 */
export function encodedTaskRunRequestArgsProvideDefaults(val: EncodedTaskRunRequestArgs): EncodedTaskRunRequestArgs {
    return {
        ...val,
        isArchiveEnabled: (val.isArchiveEnabled) ?? false,
        timeout: (val.timeout) ?? 3600,
    };
}

/**
 * The properties of a encoded task step.
 */
export interface EncodedTaskStepArgs {
    /**
     * The token (git PAT or SAS token of storage account blob) associated with the context for a step.
     */
    contextAccessToken?: pulumi.Input<string>;
    /**
     * The URL(absolute or relative) of the source context for the task step.
     */
    contextPath?: pulumi.Input<string>;
    /**
     * Base64 encoded value of the template/definition file content.
     */
    encodedTaskContent: pulumi.Input<string>;
    /**
     * Base64 encoded value of the parameters/values file content.
     */
    encodedValuesContent?: pulumi.Input<string>;
    /**
     * The type of the step.
     * Expected value is 'EncodedTask'.
     */
    type: pulumi.Input<"EncodedTask">;
    /**
     * The collection of overridable values that can be passed when running a task.
     */
    values?: pulumi.Input<pulumi.Input<SetValueArgs>[]>;
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
 * The request parameters for a scheduling run against a task file.
 */
export interface FileTaskRunRequestArgs {
    /**
     * The machine configuration of the run agent.
     */
    agentConfiguration?: pulumi.Input<AgentPropertiesArgs>;
    /**
     * The dedicated agent pool for the run.
     */
    agentPoolName?: pulumi.Input<string>;
    /**
     * The properties that describes a set of credentials that will be used when this run is invoked.
     */
    credentials?: pulumi.Input<CredentialsArgs>;
    /**
     * The value that indicates whether archiving is enabled for the run or not.
     */
    isArchiveEnabled?: pulumi.Input<boolean>;
    /**
     * The template that describes the repository and tag information for run log artifact.
     */
    logTemplate?: pulumi.Input<string>;
    /**
     * The platform properties against which the run has to happen.
     */
    platform: pulumi.Input<PlatformPropertiesArgs>;
    /**
     * The URL(absolute or relative) of the source context. It can be an URL to a tar or git repository.
     * If it is relative URL, the relative path should be obtained from calling listBuildSourceUploadUrl API.
     */
    sourceLocation?: pulumi.Input<string>;
    /**
     * The template/definition file path relative to the source.
     */
    taskFilePath: pulumi.Input<string>;
    /**
     * Run timeout in seconds.
     */
    timeout?: pulumi.Input<number>;
    /**
     * The type of the run request.
     * Expected value is 'FileTaskRunRequest'.
     */
    type: pulumi.Input<"FileTaskRunRequest">;
    /**
     * The collection of overridable values that can be passed when running a task.
     */
    values?: pulumi.Input<pulumi.Input<SetValueArgs>[]>;
    /**
     * The values/parameters file path relative to the source.
     */
    valuesFilePath?: pulumi.Input<string>;
}
/**
 * fileTaskRunRequestArgsProvideDefaults sets the appropriate defaults for FileTaskRunRequestArgs
 */
export function fileTaskRunRequestArgsProvideDefaults(val: FileTaskRunRequestArgs): FileTaskRunRequestArgs {
    return {
        ...val,
        isArchiveEnabled: (val.isArchiveEnabled) ?? false,
        timeout: (val.timeout) ?? 3600,
    };
}

/**
 * The properties of a task step.
 */
export interface FileTaskStepArgs {
    /**
     * The token (git PAT or SAS token of storage account blob) associated with the context for a step.
     */
    contextAccessToken?: pulumi.Input<string>;
    /**
     * The URL(absolute or relative) of the source context for the task step.
     */
    contextPath?: pulumi.Input<string>;
    /**
     * The task template/definition file path relative to the source context.
     */
    taskFilePath: pulumi.Input<string>;
    /**
     * The type of the step.
     * Expected value is 'FileTask'.
     */
    type: pulumi.Input<"FileTask">;
    /**
     * The collection of overridable values that can be passed when running a task.
     */
    values?: pulumi.Input<pulumi.Input<SetValueArgs>[]>;
    /**
     * The task values/parameters file path relative to the source context.
     */
    valuesFilePath?: pulumi.Input<string>;
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

export interface OverrideTaskStepPropertiesArgs {
    /**
     * Gets or sets the collection of override arguments to be used when
     * executing a build step.
     */
    arguments?: pulumi.Input<pulumi.Input<ArgumentArgs>[]>;
    /**
     * The source context against which run has to be queued.
     */
    contextPath?: pulumi.Input<string>;
    /**
     * The file against which run has to be queued.
     */
    file?: pulumi.Input<string>;
    /**
     * The name of the target build stage for the docker build.
     */
    target?: pulumi.Input<string>;
    /**
     * Base64 encoded update trigger token that will be attached with the base image trigger webhook.
     */
    updateTriggerToken?: pulumi.Input<string>;
    /**
     * The collection of overridable values that can be passed when running a Task.
     */
    values?: pulumi.Input<pulumi.Input<SetValueArgs>[]>;
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
 * The platform properties against which the run has to happen.
 */
export interface PlatformPropertiesArgs {
    /**
     * The OS architecture.
     */
    architecture?: pulumi.Input<string | enums.Architecture>;
    /**
     * The operating system type required for the run.
     */
    os: pulumi.Input<string | enums.OS>;
    /**
     * Variant of the CPU.
     */
    variant?: pulumi.Input<string | enums.Variant>;
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
 * Describes the properties of a secret object value.
 */
export interface SecretObjectArgs {
    /**
     * The type of the secret object which determines how the value of the secret object has to be
     * interpreted.
     */
    type?: pulumi.Input<string | enums.SecretObjectType>;
    /**
     * The value of the secret. The format of this value will be determined
     * based on the type of the secret object. If the type is Opaque, the value will be
     * used as is without any modification.
     */
    value?: pulumi.Input<string>;
}

/**
 * The properties of a overridable value that can be passed to a task template.
 */
export interface SetValueArgs {
    /**
     * Flag to indicate whether the value represents a secret or not.
     */
    isSecret?: pulumi.Input<boolean>;
    /**
     * The name of the overridable value.
     */
    name: pulumi.Input<string>;
    /**
     * The overridable value.
     */
    value: pulumi.Input<string>;
}
/**
 * setValueArgsProvideDefaults sets the appropriate defaults for SetValueArgs
 */
export function setValueArgsProvideDefaults(val: SetValueArgs): SetValueArgs {
    return {
        ...val,
        isSecret: (val.isSecret) ?? false,
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
 * The properties of the source code repository.
 */
export interface SourcePropertiesArgs {
    /**
     * The branch name of the source code.
     */
    branch?: pulumi.Input<string>;
    /**
     * The full URL to the source code repository
     */
    repositoryUrl: pulumi.Input<string>;
    /**
     * The authorization properties for accessing the source code repository and to set up
     * webhooks for notifications.
     */
    sourceControlAuthProperties?: pulumi.Input<AuthInfoArgs>;
    /**
     * The type of source control service.
     */
    sourceControlType: pulumi.Input<string | enums.SourceControlType>;
}

/**
 * Describes the credential parameters for accessing the source registry.
 */
export interface SourceRegistryCredentialsArgs {
    /**
     * The authentication mode which determines the source registry login scope. The credentials for the source registry
     * will be generated using the given scope. These credentials will be used to login to
     * the source registry during the run.
     */
    loginMode?: pulumi.Input<string | enums.SourceRegistryLoginMode>;
}

/**
 * The properties of a source based trigger.
 */
export interface SourceTriggerArgs {
    /**
     * The name of the trigger.
     */
    name: pulumi.Input<string>;
    /**
     * The properties that describes the source(code) for the task.
     */
    sourceRepository: pulumi.Input<SourcePropertiesArgs>;
    /**
     * The source event corresponding to the trigger.
     */
    sourceTriggerEvents: pulumi.Input<pulumi.Input<string | enums.SourceTriggerEvent>[]>;
    /**
     * The current status of trigger.
     */
    status?: pulumi.Input<string | enums.TriggerStatus>;
}
/**
 * sourceTriggerArgsProvideDefaults sets the appropriate defaults for SourceTriggerArgs
 */
export function sourceTriggerArgsProvideDefaults(val: SourceTriggerArgs): SourceTriggerArgs {
    return {
        ...val,
        status: (val.status) ?? "Enabled",
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
 * The parameters for a task run request.
 */
export interface TaskRunRequestArgs {
    /**
     * The dedicated agent pool for the run.
     */
    agentPoolName?: pulumi.Input<string>;
    /**
     * The value that indicates whether archiving is enabled for the run or not.
     */
    isArchiveEnabled?: pulumi.Input<boolean>;
    /**
     * The template that describes the repository and tag information for run log artifact.
     */
    logTemplate?: pulumi.Input<string>;
    /**
     * Set of overridable parameters that can be passed when running a Task.
     */
    overrideTaskStepProperties?: pulumi.Input<OverrideTaskStepPropertiesArgs>;
    /**
     * The resource ID of task against which run has to be queued.
     */
    taskId: pulumi.Input<string>;
    /**
     * The type of the run request.
     * Expected value is 'TaskRunRequest'.
     */
    type: pulumi.Input<"TaskRunRequest">;
}
/**
 * taskRunRequestArgsProvideDefaults sets the appropriate defaults for TaskRunRequestArgs
 */
export function taskRunRequestArgsProvideDefaults(val: TaskRunRequestArgs): TaskRunRequestArgs {
    return {
        ...val,
        isArchiveEnabled: (val.isArchiveEnabled) ?? false,
    };
}

/**
 * The properties of a timer trigger.
 */
export interface TimerTriggerArgs {
    /**
     * The name of the trigger.
     */
    name: pulumi.Input<string>;
    /**
     * The CRON expression for the task schedule
     */
    schedule: pulumi.Input<string>;
    /**
     * The current status of trigger.
     */
    status?: pulumi.Input<string | enums.TriggerStatus>;
}
/**
 * timerTriggerArgsProvideDefaults sets the appropriate defaults for TimerTriggerArgs
 */
export function timerTriggerArgsProvideDefaults(val: TimerTriggerArgs): TimerTriggerArgs {
    return {
        ...val,
        status: (val.status) ?? "Enabled",
    };
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
 * The properties of a trigger.
 */
export interface TriggerPropertiesArgs {
    /**
     * The trigger based on base image dependencies.
     */
    baseImageTrigger?: pulumi.Input<BaseImageTriggerArgs>;
    /**
     * The collection of triggers based on source code repository.
     */
    sourceTriggers?: pulumi.Input<pulumi.Input<SourceTriggerArgs>[]>;
    /**
     * The collection of timer triggers.
     */
    timerTriggers?: pulumi.Input<pulumi.Input<TimerTriggerArgs>[]>;
}
/**
 * triggerPropertiesArgsProvideDefaults sets the appropriate defaults for TriggerPropertiesArgs
 */
export function triggerPropertiesArgsProvideDefaults(val: TriggerPropertiesArgs): TriggerPropertiesArgs {
    return {
        ...val,
        baseImageTrigger: (val.baseImageTrigger ? pulumi.output(val.baseImageTrigger).apply(baseImageTriggerArgsProvideDefaults) : undefined),
    };
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











