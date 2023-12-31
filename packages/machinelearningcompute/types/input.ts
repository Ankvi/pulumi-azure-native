import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Information about the container service backing the cluster
 */
export interface AcsClusterPropertiesArgs {
    /**
     * The number of agent nodes in the Container Service. This can be changed to scale the cluster.
     */
    agentCount?: pulumi.Input<number>;
    /**
     * The Azure VM size of the agent VM nodes. This cannot be changed once the cluster is created. This list is non exhaustive; refer to https://docs.microsoft.com/en-us/azure/virtual-machines/windows/sizes for the possible VM sizes.
     */
    agentVmSize?: pulumi.Input<string | enums.AgentVMSizeTypes>;
    /**
     * The number of master nodes in the container service.
     */
    masterCount?: pulumi.Input<number>;
    /**
     * Orchestrator specific properties
     */
    orchestratorProperties?: pulumi.Input<KubernetesClusterPropertiesArgs>;
    /**
     * Type of orchestrator. It cannot be changed once the cluster is created.
     */
    orchestratorType: pulumi.Input<string | enums.OrchestratorType>;
    /**
     * The system services deployed to the cluster
     */
    systemServices?: pulumi.Input<pulumi.Input<SystemServiceArgs>[]>;
}
/**
 * acsClusterPropertiesArgsProvideDefaults sets the appropriate defaults for AcsClusterPropertiesArgs
 */
export function acsClusterPropertiesArgsProvideDefaults(val: AcsClusterPropertiesArgs): AcsClusterPropertiesArgs {
    return {
        ...val,
        agentCount: (val.agentCount) ?? 2,
        agentVmSize: (val.agentVmSize) ?? "Standard_D3_v2",
        masterCount: (val.masterCount) ?? 1,
    };
}

/**
 * Properties of App Insights.
 */
export interface AppInsightsPropertiesArgs {
    /**
     * ARM resource ID of the App Insights.
     */
    resourceId?: pulumi.Input<string>;
}

/**
 * AutoScale configuration properties.
 */
export interface AutoScaleConfigurationArgs {
    /**
     * The maximum number of replicas for each service.
     */
    maxReplicas?: pulumi.Input<number>;
    /**
     * The minimum number of replicas for each service.
     */
    minReplicas?: pulumi.Input<number>;
    /**
     * Refresh period in seconds.
     */
    refreshPeriodInSeconds?: pulumi.Input<number>;
    /**
     * If auto-scale is enabled for all services. Each service can turn it off individually.
     */
    status?: pulumi.Input<string | enums.Status>;
    /**
     * The target utilization.
     */
    targetUtilization?: pulumi.Input<number>;
}
/**
 * autoScaleConfigurationArgsProvideDefaults sets the appropriate defaults for AutoScaleConfigurationArgs
 */
export function autoScaleConfigurationArgsProvideDefaults(val: AutoScaleConfigurationArgs): AutoScaleConfigurationArgs {
    return {
        ...val,
        maxReplicas: (val.maxReplicas) ?? 100,
        minReplicas: (val.minReplicas) ?? 1,
        status: (val.status) ?? "Disabled",
    };
}

/**
 * Properties of Azure Container Registry.
 */
export interface ContainerRegistryPropertiesArgs {
    /**
     * ARM resource ID of the Azure Container Registry used to store Docker images for web services in the cluster. If not provided one will be created. This cannot be changed once the cluster is created.
     */
    resourceId?: pulumi.Input<string>;
}

/**
 * Global configuration for services in the cluster.
 */
export interface GlobalServiceConfigurationArgs {
    /**
     * The auto-scale configuration
     */
    autoScale?: pulumi.Input<AutoScaleConfigurationArgs>;
    /**
     * The configuration ETag for updates.
     */
    etag?: pulumi.Input<string>;
    /**
     * Optional global authorization keys for all user services deployed in cluster. These are used if the service does not have auth keys.
     */
    serviceAuth?: pulumi.Input<ServiceAuthConfigurationArgs>;
    /**
     * The SSL configuration properties
     */
    ssl?: pulumi.Input<SslConfigurationArgs>;
}
/**
 * globalServiceConfigurationArgsProvideDefaults sets the appropriate defaults for GlobalServiceConfigurationArgs
 */
export function globalServiceConfigurationArgsProvideDefaults(val: GlobalServiceConfigurationArgs): GlobalServiceConfigurationArgs {
    return {
        ...val,
        autoScale: (val.autoScale ? pulumi.output(val.autoScale).apply(autoScaleConfigurationArgsProvideDefaults) : undefined),
        ssl: (val.ssl ? pulumi.output(val.ssl).apply(sslConfigurationArgsProvideDefaults) : undefined),
    };
}

/**
 * Kubernetes cluster specific properties
 */
export interface KubernetesClusterPropertiesArgs {
    /**
     * The Azure Service Principal used by Kubernetes
     */
    servicePrincipal?: pulumi.Input<ServicePrincipalPropertiesArgs>;
}

/**
 * Global service auth configuration properties. These are the data-plane authorization keys and are used if a service doesn't define it's own.
 */
export interface ServiceAuthConfigurationArgs {
    /**
     * The primary auth key hash. This is not returned in response of GET/PUT on the resource.. To see this please call listKeys API.
     */
    primaryAuthKeyHash: pulumi.Input<string>;
    /**
     * The secondary auth key hash. This is not returned in response of GET/PUT on the resource.. To see this please call listKeys API.
     */
    secondaryAuthKeyHash: pulumi.Input<string>;
}

/**
 * The Azure service principal used by Kubernetes for configuring load balancers
 */
export interface ServicePrincipalPropertiesArgs {
    /**
     * The service principal client ID
     */
    clientId: pulumi.Input<string>;
    /**
     * The service principal secret. This is not returned in response of GET/PUT on the resource. To see this please call listKeys.
     */
    secret: pulumi.Input<string>;
}

/**
 * SSL configuration. If configured data-plane calls to user services will be exposed over SSL only.
 */
export interface SslConfigurationArgs {
    /**
     * The SSL cert data in PEM format.
     */
    cert?: pulumi.Input<string>;
    /**
     * The CName of the certificate.
     */
    cname?: pulumi.Input<string>;
    /**
     * The SSL key data in PEM format. This is not returned in response of GET/PUT on the resource. To see this please call listKeys API.
     */
    key?: pulumi.Input<string>;
    /**
     * SSL status. Allowed values are Enabled and Disabled.
     */
    status?: pulumi.Input<string | enums.Status>;
}
/**
 * sslConfigurationArgsProvideDefaults sets the appropriate defaults for SslConfigurationArgs
 */
export function sslConfigurationArgsProvideDefaults(val: SslConfigurationArgs): SslConfigurationArgs {
    return {
        ...val,
        status: (val.status) ?? "Enabled",
    };
}

/**
 * Properties of Storage Account.
 */
export interface StorageAccountPropertiesArgs {
    /**
     * ARM resource ID of the Azure Storage Account to store CLI specific files. If not provided one will be created. This cannot be changed once the cluster is created.
     */
    resourceId?: pulumi.Input<string>;
}

/**
 * Information about a system service deployed in the cluster
 */
export interface SystemServiceArgs {
    /**
     * The system service type
     */
    systemServiceType: pulumi.Input<string | enums.SystemServiceType>;
}
