import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Information about the container service backing the cluster
     */
    export interface AcsClusterPropertiesResponse {
        /**
         * The number of agent nodes in the Container Service. This can be changed to scale the cluster.
         */
        agentCount?: number;
        /**
         * The Azure VM size of the agent VM nodes. This cannot be changed once the cluster is created. This list is non exhaustive; refer to https://docs.microsoft.com/en-us/azure/virtual-machines/windows/sizes for the possible VM sizes.
         */
        agentVmSize?: string;
        /**
         * The FQDN of the cluster. 
         */
        clusterFqdn: string;
        /**
         * The number of master nodes in the container service.
         */
        masterCount?: number;
        /**
         * Orchestrator specific properties
         */
        orchestratorProperties?: KubernetesClusterPropertiesResponse;
        /**
         * Type of orchestrator. It cannot be changed once the cluster is created.
         */
        orchestratorType: string;
        /**
         * The system services deployed to the cluster
         */
        systemServices?: SystemServiceResponse[];
    }
    /**
     * acsClusterPropertiesResponseProvideDefaults sets the appropriate defaults for AcsClusterPropertiesResponse
     */
    export function acsClusterPropertiesResponseProvideDefaults(val: AcsClusterPropertiesResponse): AcsClusterPropertiesResponse {
        return {
            ...val,
            agentCount: (val.agentCount) ?? 2,
            agentVmSize: (val.agentVmSize) ?? "Standard_D3_v2",
            masterCount: (val.masterCount) ?? 1,
        };
    }

    /**
     * AppInsights credentials.
     */
    export interface AppInsightsCredentialsResponse {
        /**
         * The AppInsights application ID.
         */
        appId?: string;
        /**
         * The AppInsights instrumentation key. This is not returned in response of GET/PUT on the resource. To see this please call listKeys API.
         */
        instrumentationKey?: string;
    }

    /**
     * Properties of App Insights.
     */
    export interface AppInsightsPropertiesResponse {
        /**
         * ARM resource ID of the App Insights.
         */
        resourceId?: string;
    }

    /**
     * AutoScale configuration properties.
     */
    export interface AutoScaleConfigurationResponse {
        /**
         * The maximum number of replicas for each service.
         */
        maxReplicas?: number;
        /**
         * The minimum number of replicas for each service.
         */
        minReplicas?: number;
        /**
         * Refresh period in seconds.
         */
        refreshPeriodInSeconds?: number;
        /**
         * If auto-scale is enabled for all services. Each service can turn it off individually.
         */
        status?: string;
        /**
         * The target utilization.
         */
        targetUtilization?: number;
    }
    /**
     * autoScaleConfigurationResponseProvideDefaults sets the appropriate defaults for AutoScaleConfigurationResponse
     */
    export function autoScaleConfigurationResponseProvideDefaults(val: AutoScaleConfigurationResponse): AutoScaleConfigurationResponse {
        return {
            ...val,
            maxReplicas: (val.maxReplicas) ?? 100,
            minReplicas: (val.minReplicas) ?? 1,
            status: (val.status) ?? "Disabled",
        };
    }

    /**
     * Information about the Azure Container Registry which contains the images deployed to the cluster.
     */
    export interface ContainerRegistryCredentialsResponse {
        /**
         * The ACR login server name. User name is the first part of the FQDN.
         */
        loginServer: string;
        /**
         * The ACR primary password.
         */
        password: string;
        /**
         * The ACR secondary password.
         */
        password2: string;
        /**
         * The ACR login username.
         */
        username: string;
    }

    /**
     * Properties of Azure Container Registry.
     */
    export interface ContainerRegistryPropertiesResponse {
        /**
         * ARM resource ID of the Azure Container Registry used to store Docker images for web services in the cluster. If not provided one will be created. This cannot be changed once the cluster is created.
         */
        resourceId?: string;
    }

    /**
     * Information about the Azure Container Registry which contains the images deployed to the cluster.
     */
    export interface ContainerServiceCredentialsResponse {
        /**
         * The ACS kube config file.
         */
        acsKubeConfig: string;
        /**
         * The ACR image pull secret name which was created in Kubernetes.
         */
        imagePullSecretName: string;
        /**
         * Service principal configuration used by Kubernetes.
         */
        servicePrincipalConfiguration: ServicePrincipalPropertiesResponse;
    }

    /**
     * Error detail information.
     */
    export interface ErrorDetailResponse {
        /**
         * Error code.
         */
        code: string;
        /**
         * Error message.
         */
        message: string;
    }

    /**
     * Error response information.
     */
    export interface ErrorResponseResponse {
        /**
         * Error code.
         */
        code: string;
        /**
         * An array of error detail objects.
         */
        details?: ErrorDetailResponse[];
        /**
         * Error message.
         */
        message: string;
    }

    /**
     * Wrapper for error response to follow ARM guidelines.
     */
    export interface ErrorResponseWrapperResponse {
        /**
         * The error response.
         */
        error?: ErrorResponseResponse;
    }

    /**
     * Global configuration for services in the cluster.
     */
    export interface GlobalServiceConfigurationResponse {
        /**
         * The auto-scale configuration
         */
        autoScale?: AutoScaleConfigurationResponse;
        /**
         * The configuration ETag for updates.
         */
        etag?: string;
        /**
         * Optional global authorization keys for all user services deployed in cluster. These are used if the service does not have auth keys.
         */
        serviceAuth?: ServiceAuthConfigurationResponse;
        /**
         * The SSL configuration properties
         */
        ssl?: SslConfigurationResponse;
    }
    /**
     * globalServiceConfigurationResponseProvideDefaults sets the appropriate defaults for GlobalServiceConfigurationResponse
     */
    export function globalServiceConfigurationResponseProvideDefaults(val: GlobalServiceConfigurationResponse): GlobalServiceConfigurationResponse {
        return {
            ...val,
            autoScale: (val.autoScale ? autoScaleConfigurationResponseProvideDefaults(val.autoScale) : undefined),
            ssl: (val.ssl ? sslConfigurationResponseProvideDefaults(val.ssl) : undefined),
        };
    }

    /**
     * Kubernetes cluster specific properties
     */
    export interface KubernetesClusterPropertiesResponse {
        /**
         * The Azure Service Principal used by Kubernetes
         */
        servicePrincipal?: ServicePrincipalPropertiesResponse;
    }

    /**
     * Global service auth configuration properties. These are the data-plane authorization keys and are used if a service doesn't define it's own.
     */
    export interface ServiceAuthConfigurationResponse {
        /**
         * The primary auth key hash. This is not returned in response of GET/PUT on the resource.. To see this please call listKeys API.
         */
        primaryAuthKeyHash: string;
        /**
         * The secondary auth key hash. This is not returned in response of GET/PUT on the resource.. To see this please call listKeys API.
         */
        secondaryAuthKeyHash: string;
    }

    /**
     * The Azure service principal used by Kubernetes for configuring load balancers
     */
    export interface ServicePrincipalPropertiesResponse {
        /**
         * The service principal client ID
         */
        clientId: string;
        /**
         * The service principal secret. This is not returned in response of GET/PUT on the resource. To see this please call listKeys.
         */
        secret: string;
    }

    /**
     * SSL configuration. If configured data-plane calls to user services will be exposed over SSL only.
     */
    export interface SslConfigurationResponse {
        /**
         * The SSL cert data in PEM format.
         */
        cert?: string;
        /**
         * The CName of the certificate.
         */
        cname?: string;
        /**
         * The SSL key data in PEM format. This is not returned in response of GET/PUT on the resource. To see this please call listKeys API.
         */
        key?: string;
        /**
         * SSL status. Allowed values are Enabled and Disabled.
         */
        status?: string;
    }
    /**
     * sslConfigurationResponseProvideDefaults sets the appropriate defaults for SslConfigurationResponse
     */
    export function sslConfigurationResponseProvideDefaults(val: SslConfigurationResponse): SslConfigurationResponse {
        return {
            ...val,
            status: (val.status) ?? "Enabled",
        };
    }

    /**
     * Access information for the storage account.
     */
    export interface StorageAccountCredentialsResponse {
        /**
         * The primary key of the storage account.
         */
        primaryKey: string;
        /**
         * The ARM resource ID of the storage account.
         */
        resourceId: string;
        /**
         * The secondary key of the storage account.
         */
        secondaryKey: string;
    }

    /**
     * Properties of Storage Account.
     */
    export interface StorageAccountPropertiesResponse {
        /**
         * ARM resource ID of the Azure Storage Account to store CLI specific files. If not provided one will be created. This cannot be changed once the cluster is created.
         */
        resourceId?: string;
    }

    /**
     * Information about a system service deployed in the cluster
     */
    export interface SystemServiceResponse {
        /**
         * The public IP address of the system service
         */
        publicIpAddress: string;
        /**
         * The system service type
         */
        systemServiceType: string;
        /**
         * The state of the system service
         */
        version: string;
    }
