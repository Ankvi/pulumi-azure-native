import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The properties of the Azure File volume. Azure File shares are mounted as volumes.
 */
export interface AzureFileVolumeArgs {
    /**
     * The flag indicating whether the Azure File shared mounted as a volume is read-only.
     */
    readOnly?: pulumi.Input<boolean>;
    /**
     * The name of the Azure File share to be mounted as a volume.
     */
    shareName: pulumi.Input<string>;
    /**
     * The storage account access key used to access the Azure File share.
     */
    storageAccountKey?: pulumi.Input<string>;
    /**
     * The reference to the storage account access key used to access the Azure File share.
     */
    storageAccountKeyReference?: pulumi.Input<string>;
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
    ccePolicy?: pulumi.Input<string>;
}

/**
 * The container config map.
 */
export interface ConfigMapArgs {
    /**
     * The key value pairs dictionary in the config map.
     */
    keyValuePairs?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * A container instance.
 */
export interface ContainerArgs {
    /**
     * The commands to execute within the container instance in exec form.
     */
    command?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The config map.
     */
    configMap?: pulumi.Input<ConfigMapArgs>;
    /**
     * The environment variables to set in the container instance.
     */
    environmentVariables?: pulumi.Input<pulumi.Input<EnvironmentVariableArgs>[]>;
    /**
     * The name of the image used to create the container instance.
     */
    image?: pulumi.Input<string>;
    /**
     * The liveness probe.
     */
    livenessProbe?: pulumi.Input<ContainerProbeArgs>;
    /**
     * The user-provided name of the container instance.
     */
    name: pulumi.Input<string>;
    /**
     * The exposed ports on the container instance.
     */
    ports?: pulumi.Input<pulumi.Input<ContainerPortArgs>[]>;
    /**
     * The readiness probe.
     */
    readinessProbe?: pulumi.Input<ContainerProbeArgs>;
    /**
     * The resource requirements of the container instance.
     */
    resources?: pulumi.Input<ResourceRequirementsArgs>;
    /**
     * The container security properties.
     */
    securityContext?: pulumi.Input<SecurityContextDefinitionArgs>;
    /**
     * The volume mounts available to the container instance.
     */
    volumeMounts?: pulumi.Input<pulumi.Input<VolumeMountArgs>[]>;
}

/**
 * The container execution command, for liveness or readiness probe
 */
export interface ContainerExecArgs {
    /**
     * The commands to execute within the container.
     */
    command?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Container group diagnostic information.
 */
export interface ContainerGroupDiagnosticsArgs {
    /**
     * Container group log analytics information.
     */
    logAnalytics?: pulumi.Input<LogAnalyticsArgs>;
}

/**
 * Identity for the container group.
 */
export interface ContainerGroupIdentityArgs {
    /**
     * The type of identity used for the container group. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the container group.
     */
    type?: pulumi.Input<enums.ResourceIdentityType>;
    /**
     * The list of user identities associated with the container group.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The container group profile reference.
 */
export interface ContainerGroupProfileReferenceDefinitionArgs {
    /**
     * The container group profile reference id.This will be an ARM resource id in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerInstance/containerGroupProfiles/{containerGroupProfileName}'.
     */
    id?: pulumi.Input<string>;
    /**
     * The container group profile reference revision.
     */
    revision?: pulumi.Input<number>;
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
    name?: pulumi.Input<string>;
}

/**
 * The container Http Get settings, for liveness or readiness probe
 */
export interface ContainerHttpGetArgs {
    /**
     * The HTTP headers.
     */
    httpHeaders?: pulumi.Input<pulumi.Input<HttpHeaderArgs>[]>;
    /**
     * The path to probe.
     */
    path?: pulumi.Input<string>;
    /**
     * The port number to probe.
     */
    port: pulumi.Input<number>;
    /**
     * The scheme.
     */
    scheme?: pulumi.Input<string | enums.Scheme>;
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
    protocol?: pulumi.Input<string | enums.ContainerNetworkProtocol>;
}

/**
 * The container probe, for liveness or readiness
 */
export interface ContainerProbeArgs {
    /**
     * The execution command to probe
     */
    exec?: pulumi.Input<ContainerExecArgs>;
    /**
     * The failure threshold.
     */
    failureThreshold?: pulumi.Input<number>;
    /**
     * The Http Get settings to probe
     */
    httpGet?: pulumi.Input<ContainerHttpGetArgs>;
    /**
     * The initial delay seconds.
     */
    initialDelaySeconds?: pulumi.Input<number>;
    /**
     * The period seconds.
     */
    periodSeconds?: pulumi.Input<number>;
    /**
     * The success threshold.
     */
    successThreshold?: pulumi.Input<number>;
    /**
     * The timeout seconds.
     */
    timeoutSeconds?: pulumi.Input<number>;
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
    protectedSettings?: any;
    /**
     * Settings for the extension.
     */
    settings?: any;
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
    options?: pulumi.Input<string>;
    /**
     * The DNS search domains for hostname lookup in the container group.
     */
    searchDomains?: pulumi.Input<string>;
}

/**
 * The container group encryption properties.
 */
export interface EncryptionPropertiesArgs {
    /**
     * The keyvault managed identity.
     */
    identity?: pulumi.Input<string>;
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
    secureValue?: pulumi.Input<string>;
    /**
     * The reference of the secure environment variable.
     */
    secureValueReference?: pulumi.Input<string>;
    /**
     * The value of the environment variable.
     */
    value?: pulumi.Input<string>;
}

/**
 * Represents a volume that is populated with the contents of a git repository
 */
export interface GitRepoVolumeArgs {
    /**
     * Target directory name. Must not contain or start with '..'.  If '.' is supplied, the volume directory will be the git repository.  Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name.
     */
    directory?: pulumi.Input<string>;
    /**
     * Repository URL
     */
    repository: pulumi.Input<string>;
    /**
     * Commit hash for the specified revision.
     */
    revision?: pulumi.Input<string>;
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
    name?: pulumi.Input<string>;
    /**
     * The header value.
     */
    value?: pulumi.Input<string>;
}

/**
 * Image registry credential.
 */
export interface ImageRegistryCredentialArgs {
    /**
     * The identity for the private registry.
     */
    identity?: pulumi.Input<string>;
    /**
     * The identity URL for the private registry.
     */
    identityUrl?: pulumi.Input<string>;
    /**
     * The password for the private registry.
     */
    password?: pulumi.Input<string>;
    /**
     * The reference for the private registry password.
     */
    passwordReference?: pulumi.Input<string>;
    /**
     * The Docker image registry server without a protocol such as "http" and "https".
     */
    server: pulumi.Input<string>;
    /**
     * The username for the private registry.
     */
    username?: pulumi.Input<string>;
}

/**
 * The init container definition.
 */
export interface InitContainerDefinitionArgs {
    /**
     * The command to execute within the init container in exec form.
     */
    command?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The environment variables to set in the init container.
     */
    environmentVariables?: pulumi.Input<pulumi.Input<EnvironmentVariableArgs>[]>;
    /**
     * The image of the init container.
     */
    image?: pulumi.Input<string>;
    /**
     * The name for the init container.
     */
    name: pulumi.Input<string>;
    /**
     * The container security properties.
     */
    securityContext?: pulumi.Input<SecurityContextDefinitionArgs>;
    /**
     * The volume mounts available to the init container.
     */
    volumeMounts?: pulumi.Input<pulumi.Input<VolumeMountArgs>[]>;
}

/**
 * IP address for the container group.
 */
export interface IpAddressArgs {
    /**
     * The value representing the security enum. The 'Unsecure' value is the default value if not selected and means the object's domain name label is not secured against subdomain takeover. The 'TenantReuse' value is the default value if selected and means the object's domain name label can be reused within the same tenant. The 'SubscriptionReuse' value means the object's domain name label can be reused within the same subscription. The 'ResourceGroupReuse' value means the object's domain name label can be reused within the same resource group. The 'NoReuse' value means the object's domain name label cannot be reused within the same resource group, subscription, or tenant.
     */
    autoGeneratedDomainNameLabelScope?: pulumi.Input<string | enums.DnsNameLabelReusePolicy>;
    /**
     * The Dns name label for the IP.
     */
    dnsNameLabel?: pulumi.Input<string>;
    /**
     * The IP exposed to the public internet.
     */
    ip?: pulumi.Input<string>;
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
 * Container group log analytics information.
 */
export interface LogAnalyticsArgs {
    /**
     * The log type to be used.
     */
    logType?: pulumi.Input<string | enums.LogAnalyticsLogType>;
    /**
     * Metadata for log analytics.
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
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
    workspaceResourceId?: pulumi.Input<string>;
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
    protocol?: pulumi.Input<string | enums.ContainerGroupNetworkProtocol>;
}

/**
 * The resource limits.
 */
export interface ResourceLimitsArgs {
    /**
     * The CPU limit of this container instance.
     */
    cpu?: pulumi.Input<number>;
    /**
     * The GPU limit of this container instance.
     */
    gpu?: pulumi.Input<GpuResourceArgs>;
    /**
     * The memory limit in GB of this container instance.
     */
    memoryInGB?: pulumi.Input<number>;
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
    gpu?: pulumi.Input<GpuResourceArgs>;
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
    limits?: pulumi.Input<ResourceLimitsArgs>;
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
    add?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The capabilities to drop from the container.
     */
    drop?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The security context for the container.
 */
export interface SecurityContextDefinitionArgs {
    /**
     * A boolean value indicating whether the init process can elevate its privileges
     */
    allowPrivilegeEscalation?: pulumi.Input<boolean>;
    /**
     * The capabilities to add or drop from a container.
     */
    capabilities?: pulumi.Input<SecurityContextCapabilitiesDefinitionArgs>;
    /**
     * The flag to determine if the container permissions is elevated to Privileged.
     */
    privileged?: pulumi.Input<boolean>;
    /**
     * Sets the User GID for the container.
     */
    runAsGroup?: pulumi.Input<number>;
    /**
     * Sets the User UID for the container.
     */
    runAsUser?: pulumi.Input<number>;
    /**
     * a base64 encoded string containing the contents of the JSON in the seccomp profile
     */
    seccompProfile?: pulumi.Input<string>;
}

/**
 * The standby pool profile reference.
 */
export interface StandbyPoolProfileDefinitionArgs {
    /**
     * The flag to determine whether ACI should fail the create request if the container group can not be obtained from standby pool.
     */
    failContainerGroupCreateOnReuseFailure?: pulumi.Input<boolean>;
    /**
     * The standby pool profile reference id.This will be an ARM resource id in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyContainerGroupPools/{standbyPoolName}'.
     */
    id?: pulumi.Input<string>;
}

/**
 * The properties of the volume.
 */
export interface VolumeArgs {
    /**
     * The Azure File volume.
     */
    azureFile?: pulumi.Input<AzureFileVolumeArgs>;
    /**
     * The empty directory volume.
     */
    emptyDir?: any;
    /**
     * The git repo volume.
     */
    gitRepo?: pulumi.Input<GitRepoVolumeArgs>;
    /**
     * The name of the volume.
     */
    name: pulumi.Input<string>;
    /**
     * The secret volume.
     */
    secret?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The secret reference volume.
     */
    secretReference?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
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
    readOnly?: pulumi.Input<boolean>;
}
