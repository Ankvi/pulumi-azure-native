import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The API entity reference.
 */
export interface ApiEntityReferenceResponse {
    /**
     * The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/...
     */
    id?: string;
}

/**
 * NGroups application gateway backend address pool
 */
export interface ApplicationGatewayBackendAddressPoolResponse {
    /**
     * The application gateway backend address pool ARM resource Id.
     */
    resource?: string;
}

/**
 * Application Gateway the CG profile will use to interact with CGs in a backend pool
 */
export interface ApplicationGatewayResponse {
    /**
     * List of Application Gateway Backend Address Pools.
     */
    backendAddressPools?: ApplicationGatewayBackendAddressPoolResponse[];
    /**
     * The Application Gateway ARM resource Id.
     */
    resource?: string;
}

/**
 * The properties of the Azure File volume. Azure File shares are mounted as volumes.
 */
export interface AzureFileVolumeResponse {
    /**
     * The flag indicating whether the Azure File shared mounted as a volume is read-only.
     */
    readOnly?: boolean;
    /**
     * The name of the Azure File share to be mounted as a volume.
     */
    shareName: string;
    /**
     * The storage account access key used to access the Azure File share.
     */
    storageAccountKey?: string;
    /**
     * The reference to the storage account access key used to access the Azure File share.
     */
    storageAccountKeyReference?: string;
    /**
     * The name of the storage account that contains the Azure File share.
     */
    storageAccountName: string;
}

/**
 * The properties for confidential container group
 */
export interface ConfidentialComputePropertiesResponse {
    /**
     * The base64 encoded confidential compute enforcement policy
     */
    ccePolicy?: string;
}

/**
 * The container config map.
 */
export interface ConfigMapResponse {
    /**
     * The key value pairs dictionary in the config map.
     */
    keyValuePairs?: {[key: string]: string};
}

/**
 * The container execution command, for liveness or readiness probe
 */
export interface ContainerExecResponse {
    /**
     * The commands to execute within the container.
     */
    command?: string[];
}

/**
 * Container group diagnostic information.
 */
export interface ContainerGroupDiagnosticsResponse {
    /**
     * Container group log analytics information.
     */
    logAnalytics?: LogAnalyticsResponse;
}

/**
 * Identity for the container group.
 */
export interface ContainerGroupIdentityResponse {
    /**
     * The principal id of the container group identity. This property will only be provided for a system assigned identity.
     */
    principalId: string;
    /**
     * The tenant id associated with the container group. This property will only be provided for a system assigned identity.
     */
    tenantId: string;
    /**
     * The type of identity used for the container group. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the container group.
     */
    type?: string;
    /**
     * The list of user identities associated with the container group.
     */
    userAssignedIdentities?: {[key: string]: UserAssignedIdentitiesResponse};
}

/**
 * The container group profile reference.
 */
export interface ContainerGroupProfileReferenceDefinitionResponse {
    /**
     * The container group profile reference id.This will be an ARM resource id in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroupProfiles/{containerGroupProfileName}'.
     */
    id?: string;
    /**
     * The container group profile reference revision.
     */
    revision?: number;
}

/**
 * The object that contains a reference to a Container Group Profile and it's other related properties.
 */
export interface ContainerGroupProfileStubResponse {
    /**
     *  Container Group properties which can be set while creating or updating the NGroups.
     */
    containerGroupProperties?: NGroupContainerGroupPropertiesResponse;
    /**
     * A network profile for network settings of a ContainerGroupProfile.
     */
    networkProfile?: NetworkProfileResponse;
    /**
     * A reference to the container group profile ARM resource hosted in ACI RP.
     */
    resource?: ApiEntityReferenceResponse;
    /**
     * The revision of the CG profile is an optional property. If customer does not to provide a revision then NGroups will pickup the latest revision of CGProfile.
     */
    revision?: number;
    /**
     * Storage profile for storage related settings of a container group profile.
     */
    storageProfile?: StorageProfileResponse;
}

/**
 * The instance view of the container group. Only valid in response.
 */
export interface ContainerGroupPropertiesResponseInstanceView {
    /**
     * The events of this container group.
     */
    events: EventResponse[];
    /**
     * The state of the container group. Only valid in response.
     */
    state: string;
}

/**
 * Container group subnet information.
 */
export interface ContainerGroupSubnetIdResponse {
    /**
     * Resource ID of virtual network and subnet.
     */
    id: string;
    /**
     * Friendly name for the subnet.
     */
    name?: string;
}

/**
 * The container Http Get settings, for liveness or readiness probe
 */
export interface ContainerHttpGetResponse {
    /**
     * The HTTP headers.
     */
    httpHeaders?: HttpHeaderResponse[];
    /**
     * The path to probe.
     */
    path?: string;
    /**
     * The port number to probe.
     */
    port: number;
    /**
     * The scheme.
     */
    scheme?: string;
}

/**
 * The port exposed on the container instance.
 */
export interface ContainerPortResponse {
    /**
     * The port number exposed within the container group.
     */
    port: number;
    /**
     * The protocol associated with the port.
     */
    protocol?: string;
}

/**
 * The container probe, for liveness or readiness
 */
export interface ContainerProbeResponse {
    /**
     * The execution command to probe
     */
    exec?: ContainerExecResponse;
    /**
     * The failure threshold.
     */
    failureThreshold?: number;
    /**
     * The Http Get settings to probe
     */
    httpGet?: ContainerHttpGetResponse;
    /**
     * The initial delay seconds.
     */
    initialDelaySeconds?: number;
    /**
     * The period seconds.
     */
    periodSeconds?: number;
    /**
     * The success threshold.
     */
    successThreshold?: number;
    /**
     * The timeout seconds.
     */
    timeoutSeconds?: number;
}

/**
 * The instance view of the container instance. Only valid in response.
 */
export interface ContainerPropertiesResponseInstanceView {
    /**
     * Current container instance state.
     */
    currentState: ContainerStateResponse;
    /**
     * The events of the container instance.
     */
    events: EventResponse[];
    /**
     * Previous container instance state.
     */
    previousState: ContainerStateResponse;
    /**
     * The number of times that the container instance has been restarted.
     */
    restartCount: number;
}

/**
 * A container instance.
 */
export interface ContainerResponse {
    /**
     * The commands to execute within the container instance in exec form.
     */
    command?: string[];
    /**
     * The config map.
     */
    configMap?: ConfigMapResponse;
    /**
     * The environment variables to set in the container instance.
     */
    environmentVariables?: EnvironmentVariableResponse[];
    /**
     * The name of the image used to create the container instance.
     */
    image?: string;
    /**
     * The instance view of the container instance. Only valid in response.
     */
    instanceView: ContainerPropertiesResponseInstanceView;
    /**
     * The liveness probe.
     */
    livenessProbe?: ContainerProbeResponse;
    /**
     * The user-provided name of the container instance.
     */
    name: string;
    /**
     * The exposed ports on the container instance.
     */
    ports?: ContainerPortResponse[];
    /**
     * The readiness probe.
     */
    readinessProbe?: ContainerProbeResponse;
    /**
     * The resource requirements of the container instance.
     */
    resources?: ResourceRequirementsResponse;
    /**
     * The container security properties.
     */
    securityContext?: SecurityContextDefinitionResponse;
    /**
     * The volume mounts available to the container instance.
     */
    volumeMounts?: VolumeMountResponse[];
}

/**
 * The container instance state.
 */
export interface ContainerStateResponse {
    /**
     * The human-readable status of the container instance state.
     */
    detailStatus: string;
    /**
     * The container instance exit codes correspond to those from the `docker run` command.
     */
    exitCode: number;
    /**
     * The date-time when the container instance state finished.
     */
    finishTime: string;
    /**
     * The date-time when the container instance state started.
     */
    startTime: string;
    /**
     * The state of the container instance.
     */
    state: string;
}

/**
 * Extension sidecars to be added to the deployment.
 */
export interface DeploymentExtensionSpecResponse {
    /**
     * Type of extension to be added.
     */
    extensionType: string;
    /**
     * Name of the extension.
     */
    name: string;
    /**
     * Protected settings for the extension.
     */
    protectedSettings?: any;
    /**
     * Settings for the extension.
     */
    settings?: any;
    /**
     * Version of the extension being used.
     */
    version: string;
}

/**
 * DNS configuration for the container group.
 */
export interface DnsConfigurationResponse {
    /**
     * The DNS servers for the container group.
     */
    nameServers: string[];
    /**
     * The DNS options for the container group.
     */
    options?: string;
    /**
     * The DNS search domains for hostname lookup in the container group.
     */
    searchDomains?: string;
}

/**
 * Describes the elastic profile of the NGroup
 */
export interface ElasticProfileResponse {
    /**
     * Container Groups are named on a generic guid based naming scheme/policy. Customer can modify naming policy to add prefix to CG names during scale out operation.
     */
    containerGroupNamingPolicy?: ElasticProfileResponseContainerGroupNamingPolicy;
    desiredCount?: number;
    /**
     * Flag that indicates whether desiredCount should be maintained when customer deletes SPECIFIC container groups (CGs) from the NGroups. In this case, new CGs will be created by NGroup to compensate for the specific deleted ones.
     */
    maintainDesiredCount?: boolean;
}

/**
 * Container Groups are named on a generic guid based naming scheme/policy. Customer can modify naming policy to add prefix to CG names during scale out operation.
 */
export interface ElasticProfileResponseContainerGroupNamingPolicy {
    guidNamingPolicy?: ElasticProfileResponseGuidNamingPolicy;
}

export interface ElasticProfileResponseGuidNamingPolicy {
    /**
     * The prefix can be used when there are tooling limitations (e.g. on the Azure portal where CGs from multiple NGroups exist in the same RG). The prefix with the suffixed resource name must still follow Azure resource naming guidelines.
     */
    prefix?: string;
}

/**
 * The container group encryption properties.
 */
export interface EncryptionPropertiesResponse {
    /**
     * The keyvault managed identity.
     */
    identity?: string;
    /**
     * The encryption key name.
     */
    keyName: string;
    /**
     * The encryption key version.
     */
    keyVersion: string;
    /**
     * The keyvault base url.
     */
    vaultBaseUrl: string;
}

/**
 * The environment variable to set within the container instance.
 */
export interface EnvironmentVariableResponse {
    /**
     * The name of the environment variable.
     */
    name: string;
    /**
     * The value of the secure environment variable.
     */
    secureValue?: string;
    /**
     * The reference of the secure environment variable.
     */
    secureValueReference?: string;
    /**
     * The value of the environment variable.
     */
    value?: string;
}

/**
 * A container group or container instance event.
 */
export interface EventResponse {
    /**
     * The count of the event.
     */
    count: number;
    /**
     * The date-time of the earliest logged event.
     */
    firstTimestamp: string;
    /**
     * The date-time of the latest logged event.
     */
    lastTimestamp: string;
    /**
     * The event message.
     */
    message: string;
    /**
     * The event name.
     */
    name: string;
    /**
     * The event type.
     */
    type: string;
}

/**
 * File shares that can be mounted on container groups.
 */
export interface FileShareResponse {
    name?: string;
    properties?: FileShareResponseProperties;
    resourceGroupName?: string;
    storageAccountName?: string;
}
/**
 * fileShareResponseProvideDefaults sets the appropriate defaults for FileShareResponse
 */
export function fileShareResponseProvideDefaults(val: FileShareResponse): FileShareResponse {
    return {
        ...val,
        properties: (val.properties ? fileShareResponsePropertiesProvideDefaults(val.properties) : undefined),
    };
}

export interface FileShareResponseProperties {
    /**
     * Access tier for specific share. GpV2 account can choose between TransactionOptimized (default), Hot, and Cool. FileStorage account can choose Premium. Learn more at: https://learn.microsoft.com/en-us/rest/api/storagerp/file-shares/create?tabs=HTTP#shareaccesstier
     */
    shareAccessTier?: string;
    /**
     *  Specifies how Container Groups can access the Azure file share i.e. all CG will share same Azure file share or going to have exclusive file share.
     */
    shareAccessType?: string;
}
/**
 * fileShareResponsePropertiesProvideDefaults sets the appropriate defaults for FileShareResponseProperties
 */
export function fileShareResponsePropertiesProvideDefaults(val: FileShareResponseProperties): FileShareResponseProperties {
    return {
        ...val,
        shareAccessTier: (val.shareAccessTier) ?? "TransactionOptimized",
    };
}

/**
 * Represents a volume that is populated with the contents of a git repository
 */
export interface GitRepoVolumeResponse {
    /**
     * Target directory name. Must not contain or start with '..'.  If '.' is supplied, the volume directory will be the git repository.  Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name.
     */
    directory?: string;
    /**
     * Repository URL
     */
    repository: string;
    /**
     * Commit hash for the specified revision.
     */
    revision?: string;
}

/**
 * The GPU resource.
 */
export interface GpuResourceResponse {
    /**
     * The count of the GPU resource.
     */
    count: number;
    /**
     * The SKU of the GPU resource.
     */
    sku: string;
}

/**
 * The HTTP header.
 */
export interface HttpHeaderResponse {
    /**
     * The header name.
     */
    name?: string;
    /**
     * The header value.
     */
    value?: string;
}

/**
 * Image registry credential.
 */
export interface ImageRegistryCredentialResponse {
    /**
     * The identity for the private registry.
     */
    identity?: string;
    /**
     * The identity URL for the private registry.
     */
    identityUrl?: string;
    /**
     * The password for the private registry.
     */
    password?: string;
    /**
     * The reference for the private registry password.
     */
    passwordReference?: string;
    /**
     * The Docker image registry server without a protocol such as "http" and "https".
     */
    server: string;
    /**
     * The username for the private registry.
     */
    username?: string;
}

/**
 * The init container definition.
 */
export interface InitContainerDefinitionResponse {
    /**
     * The command to execute within the init container in exec form.
     */
    command?: string[];
    /**
     * The environment variables to set in the init container.
     */
    environmentVariables?: EnvironmentVariableResponse[];
    /**
     * The image of the init container.
     */
    image?: string;
    /**
     * The instance view of the init container. Only valid in response.
     */
    instanceView: InitContainerPropertiesDefinitionResponseInstanceView;
    /**
     * The name for the init container.
     */
    name: string;
    /**
     * The container security properties.
     */
    securityContext?: SecurityContextDefinitionResponse;
    /**
     * The volume mounts available to the init container.
     */
    volumeMounts?: VolumeMountResponse[];
}

/**
 * The instance view of the init container. Only valid in response.
 */
export interface InitContainerPropertiesDefinitionResponseInstanceView {
    /**
     * The current state of the init container.
     */
    currentState: ContainerStateResponse;
    /**
     * The events of the init container.
     */
    events: EventResponse[];
    /**
     * The previous state of the init container.
     */
    previousState: ContainerStateResponse;
    /**
     * The number of times that the init container has been restarted.
     */
    restartCount: number;
}

/**
 * IP address for the container group.
 */
export interface IpAddressResponse {
    /**
     * The value representing the security enum. The 'Unsecure' value is the default value if not selected and means the object's domain name label is not secured against subdomain takeover. The 'TenantReuse' value is the default value if selected and means the object's domain name label can be reused within the same tenant. The 'SubscriptionReuse' value means the object's domain name label can be reused within the same subscription. The 'ResourceGroupReuse' value means the object's domain name label can be reused within the same resource group. The 'NoReuse' value means the object's domain name label cannot be reused within the same resource group, subscription, or tenant.
     */
    autoGeneratedDomainNameLabelScope?: string;
    /**
     * The Dns name label for the IP.
     */
    dnsNameLabel?: string;
    /**
     * The FQDN for the IP.
     */
    fqdn: string;
    /**
     * The IP exposed to the public internet.
     */
    ip?: string;
    /**
     * The list of ports exposed on the container group.
     */
    ports: PortResponse[];
    /**
     * Specifies if the IP is exposed to the public internet or private VNET.
     */
    type: string;
}
/**
 * ipAddressResponseProvideDefaults sets the appropriate defaults for IpAddressResponse
 */
export function ipAddressResponseProvideDefaults(val: IpAddressResponse): IpAddressResponse {
    return {
        ...val,
        autoGeneratedDomainNameLabelScope: (val.autoGeneratedDomainNameLabelScope) ?? "Unsecure",
    };
}

/**
 * NGroups load balancer backend address pool
 */
export interface LoadBalancerBackendAddressPoolResponse {
    /**
     * The Load Balancer backend address pool ARM resource Id.
     */
    resource?: string;
}

/**
 * LoadBalancer the CG profile will use to interact with CGs in a backend pool
 */
export interface LoadBalancerResponse {
    /**
     * List of Load Balancer Backend Address Pools.
     */
    backendAddressPools?: LoadBalancerBackendAddressPoolResponse[];
}

/**
 * Container group log analytics information.
 */
export interface LogAnalyticsResponse {
    /**
     * The log type to be used.
     */
    logType?: string;
    /**
     * Metadata for log analytics.
     */
    metadata?: {[key: string]: string};
    /**
     * The workspace id for log analytics
     */
    workspaceId: string;
    /**
     * The workspace key for log analytics
     */
    workspaceKey: string;
    /**
     * The workspace resource id for log analytics
     */
    workspaceResourceId?: string;
}

/**
 * Container properties that can be provided with NGroups object.
 */
export interface NGroupCGPropertyContainerResponse {
    /**
     * container name
     */
    name?: string;
    /**
     * container properties
     */
    properties?: NGroupCGPropertyContainerResponseProperties;
}

/**
 * container properties
 */
export interface NGroupCGPropertyContainerResponseProperties {
    volumeMounts?: VolumeMountResponse[];
}

/**
 * Contains information about the volumes that can be mounted by Containers in the Container Groups.
 */
export interface NGroupCGPropertyVolumeResponse {
    /**
     * The Azure File volume.
     */
    azureFile?: AzureFileVolumeResponse;
    /**
     * The name of the volume.
     */
    name: string;
}

/**
 * Container Group properties which can be set while creating or updating the NGroups.
 */
export interface NGroupContainerGroupPropertiesResponse {
    /**
     * Contains information about Container which can be set while creating or updating the NGroups.
     */
    containers?: NGroupCGPropertyContainerResponse[];
    /**
     * Contains information about Virtual Network Subnet ARM Resource
     */
    subnetIds?: ContainerGroupSubnetIdResponse[];
    /**
     * Contains information about the volumes that can be mounted by Containers in the Container Groups.
     */
    volumes?: NGroupCGPropertyVolumeResponse[];
}

/**
 * Identity for the NGroup.
 */
export interface NGroupIdentityResponse {
    /**
     * The principal id of the NGroup identity. This property will only be provided for a system assigned identity.
     */
    principalId: string;
    /**
     * The tenant id associated with the NGroup. This property will only be provided for a system assigned identity.
     */
    tenantId: string;
    /**
     * The type of identity used for the NGroup. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the NGroup.
     */
    type?: string;
    /**
     * The list of user identities associated with the NGroup.
     */
    userAssignedIdentities?: {[key: string]: UserAssignedIdentitiesResponse};
}

/**
 * A network profile for network settings of a ContainerGroupProfile. Used to manage load balancer and application gateway backend pools, specifically updating the IP addresses of CGs within the backend pool.
 */
export interface NetworkProfileResponse {
    /**
     * Application Gateway the CG profile will use to interact with CGs in a backend pool
     */
    applicationGateway?: ApplicationGatewayResponse;
    /**
     * LoadBalancer the CG profile will use to interact with CGs in a backend pool
     */
    loadBalancer?: LoadBalancerResponse;
}

/**
 * Provides options w.r.t allocation and management w.r.t certain placement policies. These utilize capabilities provided by the underlying Azure infrastructure. They are typically used for high availability scenarios. E.g., distributing CGs across fault domains.
 */
export interface PlacementProfileResponse {
    /**
     * The number of fault domains to be used to spread CGs in the NGroups resource. This can only be specified during NGroup creation and is immutable after that.
     */
    faultDomainCount?: number;
}

/**
 * The port exposed on the container group.
 */
export interface PortResponse {
    /**
     * The port number.
     */
    port: number;
    /**
     * The protocol associated with the port.
     */
    protocol?: string;
}

/**
 * The resource limits.
 */
export interface ResourceLimitsResponse {
    /**
     * The CPU limit of this container instance.
     */
    cpu?: number;
    /**
     * The GPU limit of this container instance.
     */
    gpu?: GpuResourceResponse;
    /**
     * The memory limit in GB of this container instance.
     */
    memoryInGB?: number;
}

/**
 * The resource requests.
 */
export interface ResourceRequestsResponse {
    /**
     * The CPU request of this container instance.
     */
    cpu: number;
    /**
     * The GPU request of this container instance.
     */
    gpu?: GpuResourceResponse;
    /**
     * The memory request in GB of this container instance.
     */
    memoryInGB: number;
}

/**
 * The resource requirements.
 */
export interface ResourceRequirementsResponse {
    /**
     * The resource limits of this container instance.
     */
    limits?: ResourceLimitsResponse;
    /**
     * The resource requests of this container instance.
     */
    requests: ResourceRequestsResponse;
}

/**
 * The capabilities to add or drop from a container.
 */
export interface SecurityContextCapabilitiesDefinitionResponse {
    /**
     * The capabilities to add to the container.
     */
    add?: string[];
    /**
     * The capabilities to drop from the container.
     */
    drop?: string[];
}

/**
 * The security context for the container.
 */
export interface SecurityContextDefinitionResponse {
    /**
     * A boolean value indicating whether the init process can elevate its privileges
     */
    allowPrivilegeEscalation?: boolean;
    /**
     * The capabilities to add or drop from a container.
     */
    capabilities?: SecurityContextCapabilitiesDefinitionResponse;
    /**
     * The flag to determine if the container permissions is elevated to Privileged.
     */
    privileged?: boolean;
    /**
     * Sets the User GID for the container.
     */
    runAsGroup?: number;
    /**
     * Sets the User UID for the container.
     */
    runAsUser?: number;
    /**
     * a base64 encoded string containing the contents of the JSON in the seccomp profile
     */
    seccompProfile?: string;
}

/**
 * The standby pool profile reference.
 */
export interface StandbyPoolProfileDefinitionResponse {
    /**
     * The flag to determine whether ACI should fail the create request if the container group can not be obtained from standby pool.
     */
    failContainerGroupCreateOnReuseFailure?: boolean;
    /**
     * The standby pool profile reference id.This will be an ARM resource id in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyContainerGroupPools/{standbyPoolName}'.
     */
    id?: string;
}

/**
 * Storage profile for storage related settings of a container group profile.
 */
export interface StorageProfileResponse {
    fileShares?: FileShareResponse[];
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
     * The timestamp of resource last modification (UTC)
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
 * Used by the customer to specify the way to update the Container Groups in NGroup.
 */
export interface UpdateProfileResponse {
    /**
     * This profile allows the customers to customize the rolling update.
     */
    rollingUpdateProfile?: UpdateProfileResponseRollingUpdateProfile;
    updateMode?: string;
}

/**
 * This profile allows the customers to customize the rolling update.
 */
export interface UpdateProfileResponseRollingUpdateProfile {
    /**
     * Default is false. If set to true, the CGs will be updated in-place instead of creating new CG and deleting old ones.
     */
    inPlaceUpdate?: boolean;
    /**
     * Maximum percentage of total Container Groups which can be updated simultaneously by rolling update in one batch.
     */
    maxBatchPercent?: number;
    /**
     * Maximum percentage of the updated Container Groups which can be in unhealthy state after each batch is updated.
     */
    maxUnhealthyPercent?: number;
    /**
     * The wait time between batches after completing the one batch of the rolling update and starting the next batch. The time duration should be specified in ISO 8601 format for duration.
     */
    pauseTimeBetweenBatches?: string;
}

/**
 * The list of user identities associated with the container group. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
 */
export interface UserAssignedIdentitiesResponse {
    /**
     * The client id of user assigned identity.
     */
    clientId: string;
    /**
     * The principal id of user assigned identity.
     */
    principalId: string;
}

/**
 * The properties of the volume mount.
 */
export interface VolumeMountResponse {
    /**
     * The path within the container where the volume should be mounted. Must not contain colon (:).
     */
    mountPath: string;
    /**
     * The name of the volume mount.
     */
    name: string;
    /**
     * The flag indicating whether the volume mount is read-only.
     */
    readOnly?: boolean;
}

/**
 * The properties of the volume.
 */
export interface VolumeResponse {
    /**
     * The Azure File volume.
     */
    azureFile?: AzureFileVolumeResponse;
    /**
     * The empty directory volume.
     */
    emptyDir?: any;
    /**
     * The git repo volume.
     */
    gitRepo?: GitRepoVolumeResponse;
    /**
     * The name of the volume.
     */
    name: string;
    /**
     * The secret volume.
     */
    secret?: {[key: string]: string};
    /**
     * The secret reference volume.
     */
    secretReference?: {[key: string]: string};
}
