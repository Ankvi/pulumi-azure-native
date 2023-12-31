import * as pulumi from "@pulumi/pulumi";
    /**
     * Defines a delta health policy used to evaluate the health of an application or one of its child entities when upgrading the cluster.
     */
    export interface ApplicationDeltaHealthPolicyResponse {
        /**
         * The delta health policy used by default to evaluate the health of a service type when upgrading the cluster.
         */
        defaultServiceTypeDeltaHealthPolicy?: ServiceTypeDeltaHealthPolicyResponse;
        /**
         * The map with service type delta health policy per service type name. The map is empty by default.
         */
        serviceTypeDeltaHealthPolicies?: {[key: string]: ServiceTypeDeltaHealthPolicyResponse};
    }
    /**
     * applicationDeltaHealthPolicyResponseProvideDefaults sets the appropriate defaults for ApplicationDeltaHealthPolicyResponse
     */
    export function applicationDeltaHealthPolicyResponseProvideDefaults(val: ApplicationDeltaHealthPolicyResponse): ApplicationDeltaHealthPolicyResponse {
        return {
            ...val,
            defaultServiceTypeDeltaHealthPolicy: (val.defaultServiceTypeDeltaHealthPolicy ? serviceTypeDeltaHealthPolicyResponseProvideDefaults(val.defaultServiceTypeDeltaHealthPolicy) : undefined),
        };
    }

    /**
     * Defines a health policy used to evaluate the health of an application or one of its children entities.
     */
    export interface ApplicationHealthPolicyResponse {
        /**
         * The health policy used by default to evaluate the health of a service type.
         */
        defaultServiceTypeHealthPolicy?: ServiceTypeHealthPolicyResponse;
        /**
         * The map with service type health policy per service type name. The map is empty by default.
         */
        serviceTypeHealthPolicies?: {[key: string]: ServiceTypeHealthPolicyResponse};
    }
    /**
     * applicationHealthPolicyResponseProvideDefaults sets the appropriate defaults for ApplicationHealthPolicyResponse
     */
    export function applicationHealthPolicyResponseProvideDefaults(val: ApplicationHealthPolicyResponse): ApplicationHealthPolicyResponse {
        return {
            ...val,
            defaultServiceTypeHealthPolicy: (val.defaultServiceTypeHealthPolicy ? serviceTypeHealthPolicyResponseProvideDefaults(val.defaultServiceTypeHealthPolicy) : undefined),
        };
    }

    export interface ApplicationTypeVersionsCleanupPolicyResponse {
        /**
         * Number of unused versions per application type to keep.
         */
        maxUnusedVersionsToKeep: number;
    }

    /**
     * The settings to enable AAD authentication on the cluster.
     */
    export interface AzureActiveDirectoryResponse {
        /**
         * Azure active directory client application id.
         */
        clientApplication?: string;
        /**
         * Azure active directory cluster application id.
         */
        clusterApplication?: string;
        /**
         * Azure active directory tenant id.
         */
        tenantId?: string;
    }

    /**
     * Describes the certificate details.
     */
    export interface CertificateDescriptionResponse {
        /**
         * Thumbprint of the primary certificate.
         */
        thumbprint: string;
        /**
         * Thumbprint of the secondary certificate.
         */
        thumbprintSecondary?: string;
        /**
         * The local certificate store location.
         */
        x509StoreName?: string;
    }

    /**
     * Describes the client certificate details using common name.
     */
    export interface ClientCertificateCommonNameResponse {
        /**
         * The common name of the client certificate.
         */
        certificateCommonName: string;
        /**
         * The issuer thumbprint of the client certificate.
         */
        certificateIssuerThumbprint: string;
        /**
         * Indicates if the client certificate has admin access to the cluster. Non admin clients can perform only read only operations on the cluster.
         */
        isAdmin: boolean;
    }

    /**
     * Describes the client certificate details using thumbprint.
     */
    export interface ClientCertificateThumbprintResponse {
        /**
         * The thumbprint of the client certificate.
         */
        certificateThumbprint: string;
        /**
         * Indicates if the client certificate has admin access to the cluster. Non admin clients can perform only read only operations on the cluster.
         */
        isAdmin: boolean;
    }

    /**
     * Defines a health policy used to evaluate the health of the cluster or of a cluster node.
     */
    export interface ClusterHealthPolicyResponse {
        /**
         * Defines the application health policy map used to evaluate the health of an application or one of its children entities.
         */
        applicationHealthPolicies?: {[key: string]: ApplicationHealthPolicyResponse};
        /**
         * The maximum allowed percentage of unhealthy applications before reporting an error. For example, to allow 10% of applications to be unhealthy, this value would be 10.
         *
         * The percentage represents the maximum tolerated percentage of applications that can be unhealthy before the cluster is considered in error.
         * If the percentage is respected but there is at least one unhealthy application, the health is evaluated as Warning.
         * This is calculated by dividing the number of unhealthy applications over the total number of application instances in the cluster, excluding applications of application types that are included in the ApplicationTypeHealthPolicyMap.
         * The computation rounds up to tolerate one failure on small numbers of applications. Default percentage is zero.
         */
        maxPercentUnhealthyApplications?: number;
        /**
         * The maximum allowed percentage of unhealthy nodes before reporting an error. For example, to allow 10% of nodes to be unhealthy, this value would be 10.
         *
         * The percentage represents the maximum tolerated percentage of nodes that can be unhealthy before the cluster is considered in error.
         * If the percentage is respected but there is at least one unhealthy node, the health is evaluated as Warning.
         * The percentage is calculated by dividing the number of unhealthy nodes over the total number of nodes in the cluster.
         * The computation rounds up to tolerate one failure on small numbers of nodes. Default percentage is zero.
         *
         * In large clusters, some nodes will always be down or out for repairs, so this percentage should be configured to tolerate that.
         */
        maxPercentUnhealthyNodes?: number;
    }
    /**
     * clusterHealthPolicyResponseProvideDefaults sets the appropriate defaults for ClusterHealthPolicyResponse
     */
    export function clusterHealthPolicyResponseProvideDefaults(val: ClusterHealthPolicyResponse): ClusterHealthPolicyResponse {
        return {
            ...val,
            maxPercentUnhealthyApplications: (val.maxPercentUnhealthyApplications) ?? 0,
            maxPercentUnhealthyNodes: (val.maxPercentUnhealthyNodes) ?? 0,
        };
    }

    /**
     * Describes the delta health policies for the cluster upgrade.
     */
    export interface ClusterUpgradeDeltaHealthPolicyResponse {
        /**
         * Defines the application delta health policy map used to evaluate the health of an application or one of its child entities when upgrading the cluster.
         */
        applicationDeltaHealthPolicies?: {[key: string]: ApplicationDeltaHealthPolicyResponse};
        /**
         * The maximum allowed percentage of applications health degradation allowed during cluster upgrades.
         * The delta is measured between the state of the applications at the beginning of upgrade and the state of the applications at the time of the health evaluation.
         * The check is performed after every upgrade domain upgrade completion to make sure the global state of the cluster is within tolerated limits. System services are not included in this.
         */
        maxPercentDeltaUnhealthyApplications: number;
        /**
         * The maximum allowed percentage of nodes health degradation allowed during cluster upgrades.
         * The delta is measured between the state of the nodes at the beginning of upgrade and the state of the nodes at the time of the health evaluation.
         * The check is performed after every upgrade domain upgrade completion to make sure the global state of the cluster is within tolerated limits.
         */
        maxPercentDeltaUnhealthyNodes: number;
        /**
         * The maximum allowed percentage of upgrade domain nodes health degradation allowed during cluster upgrades.
         * The delta is measured between the state of the upgrade domain nodes at the beginning of upgrade and the state of the upgrade domain nodes at the time of the health evaluation.
         * The check is performed after every upgrade domain upgrade completion for all completed upgrade domains to make sure the state of the upgrade domains is within tolerated limits.
         */
        maxPercentUpgradeDomainDeltaUnhealthyNodes: number;
    }

    /**
     * Describes the policy used when upgrading the cluster.
     */
    export interface ClusterUpgradePolicyResponse {
        /**
         * The cluster delta health policy used when upgrading the cluster.
         */
        deltaHealthPolicy?: ClusterUpgradeDeltaHealthPolicyResponse;
        /**
         * If true, then processes are forcefully restarted during upgrade even when the code version has not changed (the upgrade only changes configuration or data).
         */
        forceRestart?: boolean;
        /**
         * The amount of time to retry health evaluation when the application or cluster is unhealthy before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
         */
        healthCheckRetryTimeout: string;
        /**
         * The amount of time that the application or cluster must remain healthy before the upgrade proceeds to the next upgrade domain. The duration can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
         */
        healthCheckStableDuration: string;
        /**
         * The length of time to wait after completing an upgrade domain before performing health checks. The duration can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
         */
        healthCheckWaitDuration: string;
        /**
         * The cluster health policy used when upgrading the cluster.
         */
        healthPolicy: ClusterHealthPolicyResponse;
        /**
         * The amount of time each upgrade domain has to complete before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
         */
        upgradeDomainTimeout: string;
        /**
         * The maximum amount of time to block processing of an upgrade domain and prevent loss of availability when there are unexpected issues. When this timeout expires, processing of the upgrade domain will proceed regardless of availability loss issues. The timeout is reset at the start of each upgrade domain. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
         */
        upgradeReplicaSetCheckTimeout: string;
        /**
         * The amount of time the overall upgrade has to complete before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
         */
        upgradeTimeout: string;
    }
    /**
     * clusterUpgradePolicyResponseProvideDefaults sets the appropriate defaults for ClusterUpgradePolicyResponse
     */
    export function clusterUpgradePolicyResponseProvideDefaults(val: ClusterUpgradePolicyResponse): ClusterUpgradePolicyResponse {
        return {
            ...val,
            healthPolicy: clusterHealthPolicyResponseProvideDefaults(val.healthPolicy),
        };
    }

    /**
     * The detail of the Service Fabric runtime version result
     */
    export interface ClusterVersionDetailsResponse {
        /**
         * The Service Fabric runtime version of the cluster.
         */
        codeVersion?: string;
        /**
         * Indicates if this version is for Windows or Linux operating system.
         */
        environment?: string;
        /**
         * The date of expiry of support of the version.
         */
        supportExpiryUtc?: string;
    }

    /**
     * The storage account information for storing Service Fabric diagnostic logs.
     */
    export interface DiagnosticsStorageAccountConfigResponse {
        /**
         * The blob endpoint of the azure storage account.
         */
        blobEndpoint: string;
        /**
         * The protected diagnostics storage key name.
         */
        protectedAccountKeyName: string;
        /**
         * The secondary protected diagnostics storage key name. If one of the storage account keys is rotated the cluster will fallback to using the other.
         */
        protectedAccountKeyName2?: string;
        /**
         * The queue endpoint of the azure storage account.
         */
        queueEndpoint: string;
        /**
         * The Azure storage account name.
         */
        storageAccountName: string;
        /**
         * The table endpoint of the azure storage account.
         */
        tableEndpoint: string;
    }

    /**
     * Port range details
     */
    export interface EndpointRangeDescriptionResponse {
        /**
         * End port of a range of ports
         */
        endPort: number;
        /**
         * Starting port of a range of ports
         */
        startPort: number;
    }

    /**
     * Describes a node type in the cluster, each node type represents sub set of nodes in the cluster.
     */
    export interface NodeTypeDescriptionResponse {
        /**
         * The range of ports from which cluster assigned port to Service Fabric applications.
         */
        applicationPorts?: EndpointRangeDescriptionResponse;
        /**
         * The capacity tags applied to the nodes in the node type, the cluster resource manager uses these tags to understand how much resource a node has.
         */
        capacities?: {[key: string]: string};
        /**
         * The TCP cluster management endpoint port.
         */
        clientConnectionEndpointPort: number;
        /**
         * The durability level of the node type. Learn about [DurabilityLevel](https://docs.microsoft.com/azure/service-fabric/service-fabric-cluster-capacity).
         *
         *   - Bronze - No privileges. This is the default.
         *   - Silver - The infrastructure jobs can be paused for a duration of 10 minutes per UD.
         *   - Gold - The infrastructure jobs can be paused for a duration of 2 hours per UD. Gold durability can be enabled only on full node VM skus like D15_V2, G5 etc.
         */
        durabilityLevel?: string;
        /**
         * The range of ephemeral ports that nodes in this node type should be configured with.
         */
        ephemeralPorts?: EndpointRangeDescriptionResponse;
        /**
         * The HTTP cluster management endpoint port.
         */
        httpGatewayEndpointPort: number;
        /**
         * The node type on which system services will run. Only one node type should be marked as primary. Primary node type cannot be deleted or changed for existing clusters.
         */
        isPrimary: boolean;
        /**
         * The name of the node type.
         */
        name: string;
        /**
         * The placement tags applied to nodes in the node type, which can be used to indicate where certain services (workload) should run.
         */
        placementProperties?: {[key: string]: string};
        /**
         * The endpoint used by reverse proxy.
         */
        reverseProxyEndpointPort?: number;
        /**
         * The number of nodes in the node type. This count should match the capacity property in the corresponding VirtualMachineScaleSet resource.
         */
        vmInstanceCount: number;
    }

    /**
     * Describes the server certificate details using common name.
     */
    export interface ServerCertificateCommonNameResponse {
        /**
         * The common name of the server certificate.
         */
        certificateCommonName: string;
        /**
         * The issuer thumbprint of the server certificate.
         */
        certificateIssuerThumbprint: string;
    }

    /**
     * Describes a list of server certificates referenced by common name that are used to secure the cluster.
     */
    export interface ServerCertificateCommonNamesResponse {
        /**
         * The list of server certificates referenced by common name that are used to secure the cluster.
         */
        commonNames?: ServerCertificateCommonNameResponse[];
        /**
         * The local certificate store location.
         */
        x509StoreName?: string;
    }

    /**
     * Represents the delta health policy used to evaluate the health of services belonging to a service type when upgrading the cluster.
     */
    export interface ServiceTypeDeltaHealthPolicyResponse {
        /**
         * The maximum allowed percentage of services health degradation allowed during cluster upgrades.
         * The delta is measured between the state of the services at the beginning of upgrade and the state of the services at the time of the health evaluation.
         * The check is performed after every upgrade domain upgrade completion to make sure the global state of the cluster is within tolerated limits.
         */
        maxPercentDeltaUnhealthyServices?: number;
    }
    /**
     * serviceTypeDeltaHealthPolicyResponseProvideDefaults sets the appropriate defaults for ServiceTypeDeltaHealthPolicyResponse
     */
    export function serviceTypeDeltaHealthPolicyResponseProvideDefaults(val: ServiceTypeDeltaHealthPolicyResponse): ServiceTypeDeltaHealthPolicyResponse {
        return {
            ...val,
            maxPercentDeltaUnhealthyServices: (val.maxPercentDeltaUnhealthyServices) ?? 0,
        };
    }

    /**
     * Represents the health policy used to evaluate the health of services belonging to a service type.
     */
    export interface ServiceTypeHealthPolicyResponse {
        /**
         * The maximum percentage of services allowed to be unhealthy before your application is considered in error.
         */
        maxPercentUnhealthyServices?: number;
    }
    /**
     * serviceTypeHealthPolicyResponseProvideDefaults sets the appropriate defaults for ServiceTypeHealthPolicyResponse
     */
    export function serviceTypeHealthPolicyResponseProvideDefaults(val: ServiceTypeHealthPolicyResponse): ServiceTypeHealthPolicyResponse {
        return {
            ...val,
            maxPercentUnhealthyServices: (val.maxPercentUnhealthyServices) ?? 0,
        };
    }

    /**
     * Describes a parameter in fabric settings of the cluster.
     */
    export interface SettingsParameterDescriptionResponse {
        /**
         * The parameter name of fabric setting.
         */
        name: string;
        /**
         * The parameter value of fabric setting.
         */
        value: string;
    }

    /**
     * Describes a section in the fabric settings of the cluster.
     */
    export interface SettingsSectionDescriptionResponse {
        /**
         * The section name of the fabric settings.
         */
        name: string;
        /**
         * The collection of parameters in the section.
         */
        parameters: SettingsParameterDescriptionResponse[];
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
         * The type of identity that last modified the resource.
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
