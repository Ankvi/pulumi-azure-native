import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The API entity reference.
 */
export interface ApiEntityReferenceArgs {
    /**
     * The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/...
     */
    id?: pulumi.Input<string | undefined>;
}

/**
 * Application Gateway the CG profile will use to interact with CGs in a backend pool
 */
export interface ApplicationGatewayArgs {
    /**
     * List of Application Gateway Backend Address Pools.
     */
    backendAddressPools?: pulumi.Input<pulumi.Input<ApplicationGatewayBackendAddressPoolArgs>[] | undefined>;
    /**
     * The Application Gateway ARM resource Id.
     */
    resource?: pulumi.Input<string | undefined>;
}

/**
 * NGroups application gateway backend address pool
 */
export interface ApplicationGatewayBackendAddressPoolArgs {
    /**
     * The application gateway backend address pool ARM resource Id.
     */
    resource?: pulumi.Input<string | undefined>;
}

/**
 * The properties of the Azure File volume. Azure File shares are mounted as volumes.
 */
export interface AzureFileVolumeArgs {
    /**
     * The flag indicating whether the Azure File shared mounted as a volume is read-only.
     */
    readOnly?: pulumi.Input<boolean | undefined>;
    /**
     * The name of the Azure File share to be mounted as a volume.
     */
    shareName: pulumi.Input<string>;
    /**
     * The storage account access key used to access the Azure File share.
     */
    storageAccountKey?: pulumi.Input<string | undefined>;
    /**
     * The reference to the storage account access key used to access the Azure File share.
     */
    storageAccountKeyReference?: pulumi.Input<string | undefined>;
    /**
     * The name of the storage account that contains the Azure File share.
     */
    storageAccountName: pulumi.Input<string>;
}

/**
 * The properties for confidential container group
 */
export interface ConfidentialComputePropertiesArgs {
    /**
     * The base64 encoded confidential compute enforcement policy
     */
    ccePolicy?: pulumi.Input<string | undefined>;
}

/**
 * The container config map.
 */
export interface ConfigMapArgs {
    /**
     * The key value pairs dictionary in the config map.
     */
    keyValuePairs?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
}

/**
 * A container instance.
 */
export interface ContainerArgs {
    /**
     * The commands to execute within the container instance in exec form.
     */
    command?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The config map.
     */
    configMap?: pulumi.Input<ConfigMapArgs | undefined>;
    /**
     * The environment variables to set in the container instance.
     */
    environmentVariables?: pulumi.Input<pulumi.Input<EnvironmentVariableArgs>[] | undefined>;
    /**
     * The name of the image used to create the container instance.
     */
    image?: pulumi.Input<string | undefined>;
    /**
     * The liveness probe.
     */
    livenessProbe?: pulumi.Input<ContainerProbeArgs | undefined>;
    /**
     * The user-provided name of the container instance.
     */
    name: pulumi.Input<string>;
    /**
     * The exposed ports on the container instance.
     */
    ports?: pulumi.Input<pulumi.Input<ContainerPortArgs>[] | undefined>;
    /**
     * The readiness probe.
     */
    readinessProbe?: pulumi.Input<ContainerProbeArgs | undefined>;
    /**
     * The resource requirements of the container instance.
     */
    resources?: pulumi.Input<ResourceRequirementsArgs | undefined>;
    /**
     * The container security properties.
     */
    securityContext?: pulumi.Input<SecurityContextDefinitionArgs | undefined>;
    /**
     * The volume mounts available to the container instance.
     */
    volumeMounts?: pulumi.Input<pulumi.Input<VolumeMountArgs>[] | undefined>;
}

/**
 * The container execution command, for liveness or readiness probe
 */
export interface ContainerExecArgs {
    /**
     * The commands to execute within the container.
     */
    command?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Container group diagnostic information.
 */
export interface ContainerGroupDiagnosticsArgs {
    /**
     * Container group log analytics information.
     */
    logAnalytics?: pulumi.Input<LogAnalyticsArgs | undefined>;
}

/**
 * Identity for the container group.
 */
export interface ContainerGroupIdentityArgs {
    /**
     * The type of identity used for the container group. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the container group.
     */
    type?: pulumi.Input<enums.ResourceIdentityType | undefined>;
    /**
     * The list of user identities associated with the container group.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * The container group profile reference.
 */
export interface ContainerGroupProfileReferenceDefinitionArgs {
    /**
     * The container group profile reference id.This will be an ARM resource id in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroupProfiles/{containerGroupProfileName}'.
     */
    id?: pulumi.Input<string | undefined>;
    /**
     * The container group profile reference revision.
     */
    revision?: pulumi.Input<number | undefined>;
}

/**
 * The object that contains a reference to a Container Group Profile and it's other related properties.
 */
export interface ContainerGroupProfileStubArgs {
    /**
     * Container Group properties which can be set while creating or updating the NGroups.
     */
    containerGroupProperties?: pulumi.Input<NGroupContainerGroupPropertiesArgs | undefined>;
    /**
     * A network profile for network settings of a ContainerGroupProfile.
     */
    networkProfile?: pulumi.Input<NetworkProfileArgs | undefined>;
    /**
     * A reference to the container group profile ARM resource hosted in ACI RP.
     */
    resource?: pulumi.Input<ApiEntityReferenceArgs | undefined>;
    /**
     * The revision of the CG profile is an optional property. If customer does not to provide a revision then NGroups will pickup the latest revision of CGProfile.
     */
    revision?: pulumi.Input<number | undefined>;
    /**
     * Storage profile for storage related settings of a container group profile.
     */
    storageProfile?: pulumi.Input<StorageProfileArgs | undefined>;
}

/**
 * Container group subnet information.
 */
export interface ContainerGroupSubnetIdArgs {
    /**
     * Resource ID of virtual network and subnet.
     */
    id: pulumi.Input<string>;
    /**
     * Friendly name for the subnet.
     */
    name?: pulumi.Input<string | undefined>;
}

/**
 * The container Http Get settings, for liveness or readiness probe
 */
export interface ContainerHttpGetArgs {
    /**
     * The HTTP headers.
     */
    httpHeaders?: pulumi.Input<pulumi.Input<HttpHeaderArgs>[] | undefined>;
    /**
     * The path to probe.
     */
    path?: pulumi.Input<string | undefined>;
    /**
     * The port number to probe.
     */
    port: pulumi.Input<number>;
    /**
     * The scheme.
     */
    scheme?: pulumi.Input<string | enums.Scheme | undefined>;
}

/**
 * The port exposed on the container instance.
 */
export interface ContainerPortArgs {
    /**
     * The port number exposed within the container group.
     */
    port: pulumi.Input<number>;
    /**
     * The protocol associated with the port.
     */
    protocol?: pulumi.Input<string | enums.ContainerNetworkProtocol | undefined>;
}

/**
 * The container probe, for liveness or readiness
 */
export interface ContainerProbeArgs {
    /**
     * The execution command to probe
     */
    exec?: pulumi.Input<ContainerExecArgs | undefined>;
    /**
     * The failure threshold.
     */
    failureThreshold?: pulumi.Input<number | undefined>;
    /**
     * The Http Get settings to probe
     */
    httpGet?: pulumi.Input<ContainerHttpGetArgs | undefined>;
    /**
     * The initial delay seconds.
     */
    initialDelaySeconds?: pulumi.Input<number | undefined>;
    /**
     * The period seconds.
     */
    periodSeconds?: pulumi.Input<number | undefined>;
    /**
     * The success threshold.
     */
    successThreshold?: pulumi.Input<number | undefined>;
    /**
     * The timeout seconds.
     */
    timeoutSeconds?: pulumi.Input<number | undefined>;
}

/**
 * Extension sidecars to be added to the deployment.
 */
export interface DeploymentExtensionSpecArgs {
    /**
     * Type of extension to be added.
     */
    extensionType: pulumi.Input<string>;
    /**
     * Name of the extension.
     */
    name: pulumi.Input<string>;
    /**
     * Protected settings for the extension.
     */
    protectedSettings?: any | undefined;
    /**
     * Settings for the extension.
     */
    settings?: any | undefined;
    /**
     * Version of the extension being used.
     */
    version: pulumi.Input<string>;
}

/**
 * DNS configuration for the container group.
 */
export interface DnsConfigurationArgs {
    /**
     * The DNS servers for the container group.
     */
    nameServers: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The DNS options for the container group.
     */
    options?: pulumi.Input<string | undefined>;
    /**
     * The DNS search domains for hostname lookup in the container group.
     */
    searchDomains?: pulumi.Input<string | undefined>;
}

/**
 * Describes the elastic profile of the NGroup
 */
export interface ElasticProfileArgs {
    /**
     * Container Groups are named on a generic guid based naming scheme/policy. Customer can modify naming policy to add prefix to CG names during scale out operation.
     */
    containerGroupNamingPolicy?: pulumi.Input<ElasticProfileContainerGroupNamingPolicyArgs | undefined>;
    desiredCount?: pulumi.Input<number | undefined>;
    /**
     * Flag that indicates whether desiredCount should be maintained when customer deletes SPECIFIC container groups (CGs) from the NGroups. In this case, new CGs will be created by NGroup to compensate for the specific deleted ones.
     */
    maintainDesiredCount?: pulumi.Input<boolean | undefined>;
}

/**
 * Container Groups are named on a generic guid based naming scheme/policy. Customer can modify naming policy to add prefix to CG names during scale out operation.
 */
export interface ElasticProfileContainerGroupNamingPolicyArgs {
    guidNamingPolicy?: pulumi.Input<ElasticProfileContainerGroupNamingPolicyGuidNamingPolicyArgs | undefined>;
}

export interface ElasticProfileContainerGroupNamingPolicyGuidNamingPolicyArgs {
    /**
     * The prefix can be used when there are tooling limitations (e.g. on the Azure portal where CGs from multiple NGroups exist in the same RG). The prefix with the suffixed resource name must still follow Azure resource naming guidelines.
     */
    prefix?: pulumi.Input<string | undefined>;
}

/**
 * The container group encryption properties.
 */
export interface EncryptionPropertiesArgs {
    /**
     * The keyvault managed identity.
     */
    identity?: pulumi.Input<string | undefined>;
    /**
     * The encryption key name.
     */
    keyName: pulumi.Input<string>;
    /**
     * The encryption key version.
     */
    keyVersion: pulumi.Input<string>;
    /**
     * The keyvault base url.
     */
    vaultBaseUrl: pulumi.Input<string>;
}

/**
 * The environment variable to set within the container instance.
 */
export interface EnvironmentVariableArgs {
    /**
     * The name of the environment variable.
     */
    name: pulumi.Input<string>;
    /**
     * The value of the secure environment variable.
     */
    secureValue?: pulumi.Input<string | undefined>;
    /**
     * The reference of the secure environment variable.
     */
    secureValueReference?: pulumi.Input<string | undefined>;
    /**
     * The value of the environment variable.
     */
    value?: pulumi.Input<string | undefined>;
}

/**
 * File shares that can be mounted on container groups.
 */
export interface FileShareArgs {
    name?: pulumi.Input<string | undefined>;
    properties?: pulumi.Input<FileSharePropertiesArgs | undefined>;
    resourceGroupName?: pulumi.Input<string | undefined>;
    storageAccountName?: pulumi.Input<string | undefined>;
}
/**
 * fileShareArgsProvideDefaults sets the appropriate defaults for FileShareArgs
 */
export function fileShareArgsProvideDefaults(val: FileShareArgs): FileShareArgs {
    return {
        ...val,
        properties: pulumi.output(val.properties).apply(v => v === undefined ? undefined : fileSharePropertiesArgsProvideDefaults(v)),
    };
}

export interface FileSharePropertiesArgs {
    /**
     * Access tier for specific share. GpV2 account can choose between TransactionOptimized (default), Hot, and Cool. FileStorage account can choose Premium. Learn more at: https://learn.microsoft.com/en-us/rest/api/storagerp/file-shares/create?tabs=HTTP#shareaccesstier
     */
    shareAccessTier?: pulumi.Input<enums.AzureFileShareAccessTier | undefined>;
    /**
     * Specifies how Container Groups can access the Azure file share i.e. all CG will share same Azure file share or going to have exclusive file share.
     */
    shareAccessType?: pulumi.Input<enums.AzureFileShareAccessType | undefined>;
}
/**
 * fileSharePropertiesArgsProvideDefaults sets the appropriate defaults for FileSharePropertiesArgs
 */
export function fileSharePropertiesArgsProvideDefaults(val: FileSharePropertiesArgs): FileSharePropertiesArgs {
    return {
        ...val,
        shareAccessTier: (val.shareAccessTier) ?? "TransactionOptimized",
    };
}

/**
 * Represents a volume that is populated with the contents of a git repository
 */
export interface GitRepoVolumeArgs {
    /**
     * Target directory name. Must not contain or start with '..'.  If '.' is supplied, the volume directory will be the git repository.  Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name.
     */
    directory?: pulumi.Input<string | undefined>;
    /**
     * Repository URL
     */
    repository: pulumi.Input<string>;
    /**
     * Commit hash for the specified revision.
     */
    revision?: pulumi.Input<string | undefined>;
}

/**
 * The GPU resource.
 */
export interface GpuResourceArgs {
    /**
     * The count of the GPU resource.
     */
    count: pulumi.Input<number>;
    /**
     * The SKU of the GPU resource.
     */
    sku: pulumi.Input<string | enums.GpuSku>;
}

/**
 * The HTTP header.
 */
export interface HttpHeaderArgs {
    /**
     * The header name.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * The header value.
     */
    value?: pulumi.Input<string | undefined>;
}

/**
 * Image registry credential.
 */
export interface ImageRegistryCredentialArgs {
    /**
     * The identity for the private registry.
     */
    identity?: pulumi.Input<string | undefined>;
    /**
     * The identity URL for the private registry.
     */
    identityUrl?: pulumi.Input<string | undefined>;
    /**
     * The password for the private registry.
     */
    password?: pulumi.Input<string | undefined>;
    /**
     * The reference for the private registry password.
     */
    passwordReference?: pulumi.Input<string | undefined>;
    /**
     * The Docker image registry server without a protocol such as "http" and "https".
     */
    server: pulumi.Input<string>;
    /**
     * The username for the private registry.
     */
    username?: pulumi.Input<string | undefined>;
}

/**
 * The init container definition.
 */
export interface InitContainerDefinitionArgs {
    /**
     * The command to execute within the init container in exec form.
     */
    command?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The environment variables to set in the init container.
     */
    environmentVariables?: pulumi.Input<pulumi.Input<EnvironmentVariableArgs>[] | undefined>;
    /**
     * The image of the init container.
     */
    image?: pulumi.Input<string | undefined>;
    /**
     * The name for the init container.
     */
    name: pulumi.Input<string>;
    /**
     * The container security properties.
     */
    securityContext?: pulumi.Input<SecurityContextDefinitionArgs | undefined>;
    /**
     * The volume mounts available to the init container.
     */
    volumeMounts?: pulumi.Input<pulumi.Input<VolumeMountArgs>[] | undefined>;
}

/**
 * IP address for the container group.
 */
export interface IpAddressArgs {
    /**
     * The value representing the security enum. The 'Unsecure' value is the default value if not selected and means the object's domain name label is not secured against subdomain takeover. The 'TenantReuse' value is the default value if selected and means the object's domain name label can be reused within the same tenant. The 'SubscriptionReuse' value means the object's domain name label can be reused within the same subscription. The 'ResourceGroupReuse' value means the object's domain name label can be reused within the same resource group. The 'NoReuse' value means the object's domain name label cannot be reused within the same resource group, subscription, or tenant.
     */
    autoGeneratedDomainNameLabelScope?: pulumi.Input<string | enums.DnsNameLabelReusePolicy | undefined>;
    /**
     * The Dns name label for the IP.
     */
    dnsNameLabel?: pulumi.Input<string | undefined>;
    /**
     * The IP exposed to the public internet.
     */
    ip?: pulumi.Input<string | undefined>;
    /**
     * The list of ports exposed on the container group.
     */
    ports: pulumi.Input<pulumi.Input<PortArgs>[]>;
    /**
     * Specifies if the IP is exposed to the public internet or private VNET.
     */
    type: pulumi.Input<string | enums.ContainerGroupIpAddressType>;
}
/**
 * ipAddressArgsProvideDefaults sets the appropriate defaults for IpAddressArgs
 */
export function ipAddressArgsProvideDefaults(val: IpAddressArgs): IpAddressArgs {
    return {
        ...val,
        autoGeneratedDomainNameLabelScope: (val.autoGeneratedDomainNameLabelScope) ?? "Unsecure",
    };
}

/**
 * LoadBalancer the CG profile will use to interact with CGs in a backend pool
 */
export interface LoadBalancerArgs {
    /**
     * List of Load Balancer Backend Address Pools.
     */
    backendAddressPools?: pulumi.Input<pulumi.Input<LoadBalancerBackendAddressPoolArgs>[] | undefined>;
}

/**
 * NGroups load balancer backend address pool
 */
export interface LoadBalancerBackendAddressPoolArgs {
    /**
     * The Load Balancer backend address pool ARM resource Id.
     */
    resource?: pulumi.Input<string | undefined>;
}

/**
 * Container group log analytics information.
 */
export interface LogAnalyticsArgs {
    /**
     * The log type to be used.
     */
    logType?: pulumi.Input<string | enums.LogAnalyticsLogType | undefined>;
    /**
     * Metadata for log analytics.
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * The workspace id for log analytics
     */
    workspaceId: pulumi.Input<string>;
    /**
     * The workspace key for log analytics
     */
    workspaceKey: pulumi.Input<string>;
    /**
     * The workspace resource id for log analytics
     */
    workspaceResourceId?: pulumi.Input<string | undefined>;
}

/**
 * Container properties that can be provided with NGroups object.
 */
export interface NGroupCGPropertyContainerArgs {
    /**
     * container name
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * container properties
     */
    properties?: pulumi.Input<NGroupCGPropertyContainerPropertiesArgs | undefined>;
}

/**
 * container properties
 */
export interface NGroupCGPropertyContainerPropertiesArgs {
    volumeMounts?: pulumi.Input<pulumi.Input<VolumeMountArgs>[] | undefined>;
}

/**
 * Contains information about the volumes that can be mounted by Containers in the Container Groups.
 */
export interface NGroupCGPropertyVolumeArgs {
    /**
     * The Azure File volume.
     */
    azureFile?: pulumi.Input<AzureFileVolumeArgs | undefined>;
    /**
     * The name of the volume.
     */
    name: pulumi.Input<string>;
}

/**
 * Container Group properties which can be set while creating or updating the NGroups.
 */
export interface NGroupContainerGroupPropertiesArgs {
    /**
     * Contains information about Container which can be set while creating or updating the NGroups.
     */
    containers?: pulumi.Input<pulumi.Input<NGroupCGPropertyContainerArgs>[] | undefined>;
    /**
     * Contains information about Virtual Network Subnet ARM Resource
     */
    subnetIds?: pulumi.Input<pulumi.Input<ContainerGroupSubnetIdArgs>[] | undefined>;
    /**
     * Contains information about the volumes that can be mounted by Containers in the Container Groups.
     */
    volumes?: pulumi.Input<pulumi.Input<NGroupCGPropertyVolumeArgs>[] | undefined>;
}

/**
 * Identity for the NGroup.
 */
export interface NGroupIdentityArgs {
    /**
     * The type of identity used for the NGroup. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the NGroup.
     */
    type?: pulumi.Input<enums.ResourceIdentityType | undefined>;
    /**
     * The list of user identities associated with the NGroup.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * A network profile for network settings of a ContainerGroupProfile. Used to manage load balancer and application gateway backend pools, specifically updating the IP addresses of CGs within the backend pool.
 */
export interface NetworkProfileArgs {
    /**
     * Application Gateway the CG profile will use to interact with CGs in a backend pool
     */
    applicationGateway?: pulumi.Input<ApplicationGatewayArgs | undefined>;
    /**
     * LoadBalancer the CG profile will use to interact with CGs in a backend pool
     */
    loadBalancer?: pulumi.Input<LoadBalancerArgs | undefined>;
}

/**
 * Provides options w.r.t allocation and management w.r.t certain placement policies. These utilize capabilities provided by the underlying Azure infrastructure. They are typically used for high availability scenarios. E.g., distributing CGs across fault domains.
 */
export interface PlacementProfileArgs {
    /**
     * The number of fault domains to be used to spread CGs in the NGroups resource. This can only be specified during NGroup creation and is immutable after that.
     */
    faultDomainCount?: pulumi.Input<number | undefined>;
}

/**
 * The port exposed on the container group.
 */
export interface PortArgs {
    /**
     * The port number.
     */
    port: pulumi.Input<number>;
    /**
     * The protocol associated with the port.
     */
    protocol?: pulumi.Input<string | enums.ContainerGroupNetworkProtocol | undefined>;
}

/**
 * The resource limits.
 */
export interface ResourceLimitsArgs {
    /**
     * The CPU limit of this container instance.
     */
    cpu?: pulumi.Input<number | undefined>;
    /**
     * The GPU limit of this container instance.
     */
    gpu?: pulumi.Input<GpuResourceArgs | undefined>;
    /**
     * The memory limit in GB of this container instance.
     */
    memoryInGB?: pulumi.Input<number | undefined>;
}

/**
 * The resource requests.
 */
export interface ResourceRequestsArgs {
    /**
     * The CPU request of this container instance.
     */
    cpu: pulumi.Input<number>;
    /**
     * The GPU request of this container instance.
     */
    gpu?: pulumi.Input<GpuResourceArgs | undefined>;
    /**
     * The memory request in GB of this container instance.
     */
    memoryInGB: pulumi.Input<number>;
}

/**
 * The resource requirements.
 */
export interface ResourceRequirementsArgs {
    /**
     * The resource limits of this container instance.
     */
    limits?: pulumi.Input<ResourceLimitsArgs | undefined>;
    /**
     * The resource requests of this container instance.
     */
    requests: pulumi.Input<ResourceRequestsArgs>;
}

/**
 * The capabilities to add or drop from a container.
 */
export interface SecurityContextCapabilitiesDefinitionArgs {
    /**
     * The capabilities to add to the container.
     */
    add?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The capabilities to drop from the container.
     */
    drop?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * The security context for the container.
 */
export interface SecurityContextDefinitionArgs {
    /**
     * A boolean value indicating whether the init process can elevate its privileges
     */
    allowPrivilegeEscalation?: pulumi.Input<boolean | undefined>;
    /**
     * The capabilities to add or drop from a container.
     */
    capabilities?: pulumi.Input<SecurityContextCapabilitiesDefinitionArgs | undefined>;
    /**
     * The flag to determine if the container permissions is elevated to Privileged.
     */
    privileged?: pulumi.Input<boolean | undefined>;
    /**
     * Sets the User GID for the container.
     */
    runAsGroup?: pulumi.Input<number | undefined>;
    /**
     * Sets the User UID for the container.
     */
    runAsUser?: pulumi.Input<number | undefined>;
    /**
     * a base64 encoded string containing the contents of the JSON in the seccomp profile
     */
    seccompProfile?: pulumi.Input<string | undefined>;
}

/**
 * The standby pool profile reference.
 */
export interface StandbyPoolProfileDefinitionArgs {
    /**
     * The flag to determine whether ACI should fail the create request if the container group can not be obtained from standby pool.
     */
    failContainerGroupCreateOnReuseFailure?: pulumi.Input<boolean | undefined>;
    /**
     * The standby pool profile reference id.This will be an ARM resource id in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyContainerGroupPools/{standbyPoolName}'.
     */
    id?: pulumi.Input<string | undefined>;
}

/**
 * Storage profile for storage related settings of a container group profile.
 */
export interface StorageProfileArgs {
    fileShares?: pulumi.Input<pulumi.Input<FileShareArgs>[] | undefined>;
}

/**
 * Used by the customer to specify the way to update the Container Groups in NGroup.
 */
export interface UpdateProfileArgs {
    /**
     * This profile allows the customers to customize the rolling update.
     */
    rollingUpdateProfile?: pulumi.Input<UpdateProfileRollingUpdateProfileArgs | undefined>;
    updateMode?: pulumi.Input<string | enums.NGroupUpdateMode | undefined>;
}

/**
 * This profile allows the customers to customize the rolling update.
 */
export interface UpdateProfileRollingUpdateProfileArgs {
    /**
     * Default is false. If set to true, the CGs will be updated in-place instead of creating new CG and deleting old ones.
     */
    inPlaceUpdate?: pulumi.Input<boolean | undefined>;
    /**
     * Maximum percentage of total Container Groups which can be updated simultaneously by rolling update in one batch.
     */
    maxBatchPercent?: pulumi.Input<number | undefined>;
    /**
     * Maximum percentage of the updated Container Groups which can be in unhealthy state after each batch is updated.
     */
    maxUnhealthyPercent?: pulumi.Input<number | undefined>;
    /**
     * The wait time between batches after completing the one batch of the rolling update and starting the next batch. The time duration should be specified in ISO 8601 format for duration.
     */
    pauseTimeBetweenBatches?: pulumi.Input<string | undefined>;
}

/**
 * The properties of the volume.
 */
export interface VolumeArgs {
    /**
     * The Azure File volume.
     */
    azureFile?: pulumi.Input<AzureFileVolumeArgs | undefined>;
    /**
     * The empty directory volume.
     */
    emptyDir?: any | undefined;
    /**
     * The git repo volume.
     */
    gitRepo?: pulumi.Input<GitRepoVolumeArgs | undefined>;
    /**
     * The name of the volume.
     */
    name: pulumi.Input<string>;
    /**
     * The secret volume.
     */
    secret?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * The secret reference volume.
     */
    secretReference?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
}

/**
 * The properties of the volume mount.
 */
export interface VolumeMountArgs {
    /**
     * The path within the container where the volume should be mounted. Must not contain colon (:).
     */
    mountPath: pulumi.Input<string>;
    /**
     * The name of the volume mount.
     */
    name: pulumi.Input<string>;
    /**
     * The flag indicating whether the volume mount is read-only.
     */
    readOnly?: pulumi.Input<boolean | undefined>;
}
