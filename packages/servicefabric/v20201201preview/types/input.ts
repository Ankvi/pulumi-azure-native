import * as pulumi from "@pulumi/pulumi";
    /**
     * Defines a delta health policy used to evaluate the health of an application or one of its child entities when upgrading the cluster.
     */
    export interface ApplicationDeltaHealthPolicyArgs {
        /**
         * The delta health policy used by default to evaluate the health of a service type when upgrading the cluster.
         */
        defaultServiceTypeDeltaHealthPolicy?: pulumi.Input<ServiceTypeDeltaHealthPolicyArgs>;
        /**
         * The map with service type delta health policy per service type name. The map is empty by default.
         */
        serviceTypeDeltaHealthPolicies?: pulumi.Input<{[key: string]: pulumi.Input<ServiceTypeDeltaHealthPolicyArgs>}>;
    }
    /**
     * applicationDeltaHealthPolicyArgsProvideDefaults sets the appropriate defaults for ApplicationDeltaHealthPolicyArgs
     */
    export function applicationDeltaHealthPolicyArgsProvideDefaults(val: ApplicationDeltaHealthPolicyArgs): ApplicationDeltaHealthPolicyArgs {
        return {
            ...val,
            defaultServiceTypeDeltaHealthPolicy: (val.defaultServiceTypeDeltaHealthPolicy ? pulumi.output(val.defaultServiceTypeDeltaHealthPolicy).apply(serviceTypeDeltaHealthPolicyArgsProvideDefaults) : undefined),
        };
    }

    /**
     * Defines a health policy used to evaluate the health of an application or one of its children entities.
     */
    export interface ApplicationHealthPolicyArgs {
        /**
         * The health policy used by default to evaluate the health of a service type.
         */
        defaultServiceTypeHealthPolicy?: pulumi.Input<ServiceTypeHealthPolicyArgs>;
        /**
         * The map with service type health policy per service type name. The map is empty by default.
         */
        serviceTypeHealthPolicies?: pulumi.Input<{[key: string]: pulumi.Input<ServiceTypeHealthPolicyArgs>}>;
    }
    /**
     * applicationHealthPolicyArgsProvideDefaults sets the appropriate defaults for ApplicationHealthPolicyArgs
     */
    export function applicationHealthPolicyArgsProvideDefaults(val: ApplicationHealthPolicyArgs): ApplicationHealthPolicyArgs {
        return {
            ...val,
            defaultServiceTypeHealthPolicy: (val.defaultServiceTypeHealthPolicy ? pulumi.output(val.defaultServiceTypeHealthPolicy).apply(serviceTypeHealthPolicyArgsProvideDefaults) : undefined),
        };
    }

    export interface ApplicationTypeVersionsCleanupPolicyArgs {
        /**
         * Number of unused versions per application type to keep.
         */
        maxUnusedVersionsToKeep: pulumi.Input<number>;
    }

    /**
     * The settings to enable AAD authentication on the cluster.
     */
    export interface AzureActiveDirectoryArgs {
        /**
         * Azure active directory client application id.
         */
        clientApplication?: pulumi.Input<string>;
        /**
         * Azure active directory cluster application id.
         */
        clusterApplication?: pulumi.Input<string>;
        /**
         * Azure active directory tenant id.
         */
        tenantId?: pulumi.Input<string>;
    }

    /**
     * Describes the certificate details.
     */
    export interface CertificateDescriptionArgs {
        /**
         * Thumbprint of the primary certificate.
         */
        thumbprint: pulumi.Input<string>;
        /**
         * Thumbprint of the secondary certificate.
         */
        thumbprintSecondary?: pulumi.Input<string>;
        /**
         * The local certificate store location.
         */
        x509StoreName?: pulumi.Input<string>;
    }

    /**
     * Describes the client certificate details using common name.
     */
    export interface ClientCertificateCommonNameArgs {
        /**
         * The common name of the client certificate.
         */
        certificateCommonName: pulumi.Input<string>;
        /**
         * The issuer thumbprint of the client certificate.
         */
        certificateIssuerThumbprint: pulumi.Input<string>;
        /**
         * Indicates if the client certificate has admin access to the cluster. Non admin clients can perform only read only operations on the cluster.
         */
        isAdmin: pulumi.Input<boolean>;
    }

    /**
     * Describes the client certificate details using thumbprint.
     */
    export interface ClientCertificateThumbprintArgs {
        /**
         * The thumbprint of the client certificate.
         */
        certificateThumbprint: pulumi.Input<string>;
        /**
         * Indicates if the client certificate has admin access to the cluster. Non admin clients can perform only read only operations on the cluster.
         */
        isAdmin: pulumi.Input<boolean>;
    }

    /**
     * Defines a health policy used to evaluate the health of the cluster or of a cluster node.
     */
    export interface ClusterHealthPolicyArgs {
        /**
         * Defines the application health policy map used to evaluate the health of an application or one of its children entities.
         */
        applicationHealthPolicies?: pulumi.Input<{[key: string]: pulumi.Input<ApplicationHealthPolicyArgs>}>;
        /**
         * The maximum allowed percentage of unhealthy applications before reporting an error. For example, to allow 10% of applications to be unhealthy, this value would be 10.
         *
         * The percentage represents the maximum tolerated percentage of applications that can be unhealthy before the cluster is considered in error.
         * If the percentage is respected but there is at least one unhealthy application, the health is evaluated as Warning.
         * This is calculated by dividing the number of unhealthy applications over the total number of application instances in the cluster, excluding applications of application types that are included in the ApplicationTypeHealthPolicyMap.
         * The computation rounds up to tolerate one failure on small numbers of applications. Default percentage is zero.
         */
        maxPercentUnhealthyApplications?: pulumi.Input<number>;
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
        maxPercentUnhealthyNodes?: pulumi.Input<number>;
    }
    /**
     * clusterHealthPolicyArgsProvideDefaults sets the appropriate defaults for ClusterHealthPolicyArgs
     */
    export function clusterHealthPolicyArgsProvideDefaults(val: ClusterHealthPolicyArgs): ClusterHealthPolicyArgs {
        return {
            ...val,
            maxPercentUnhealthyApplications: (val.maxPercentUnhealthyApplications) ?? 0,
            maxPercentUnhealthyNodes: (val.maxPercentUnhealthyNodes) ?? 0,
        };
    }

    /**
     * Describes the delta health policies for the cluster upgrade.
     */
    export interface ClusterUpgradeDeltaHealthPolicyArgs {
        /**
         * Defines the application delta health policy map used to evaluate the health of an application or one of its child entities when upgrading the cluster.
         */
        applicationDeltaHealthPolicies?: pulumi.Input<{[key: string]: pulumi.Input<ApplicationDeltaHealthPolicyArgs>}>;
        /**
         * The maximum allowed percentage of applications health degradation allowed during cluster upgrades.
         * The delta is measured between the state of the applications at the beginning of upgrade and the state of the applications at the time of the health evaluation.
         * The check is performed after every upgrade domain upgrade completion to make sure the global state of the cluster is within tolerated limits. System services are not included in this.
         */
        maxPercentDeltaUnhealthyApplications: pulumi.Input<number>;
        /**
         * The maximum allowed percentage of nodes health degradation allowed during cluster upgrades.
         * The delta is measured between the state of the nodes at the beginning of upgrade and the state of the nodes at the time of the health evaluation.
         * The check is performed after every upgrade domain upgrade completion to make sure the global state of the cluster is within tolerated limits.
         */
        maxPercentDeltaUnhealthyNodes: pulumi.Input<number>;
        /**
         * The maximum allowed percentage of upgrade domain nodes health degradation allowed during cluster upgrades.
         * The delta is measured between the state of the upgrade domain nodes at the beginning of upgrade and the state of the upgrade domain nodes at the time of the health evaluation.
         * The check is performed after every upgrade domain upgrade completion for all completed upgrade domains to make sure the state of the upgrade domains is within tolerated limits.
         */
        maxPercentUpgradeDomainDeltaUnhealthyNodes: pulumi.Input<number>;
    }

    /**
     * Describes the policy used when upgrading the cluster.
     */
    export interface ClusterUpgradePolicyArgs {
        /**
         * The cluster delta health policy used when upgrading the cluster.
         */
        deltaHealthPolicy?: pulumi.Input<ClusterUpgradeDeltaHealthPolicyArgs>;
        /**
         * If true, then processes are forcefully restarted during upgrade even when the code version has not changed (the upgrade only changes configuration or data).
         */
        forceRestart?: pulumi.Input<boolean>;
        /**
         * The amount of time to retry health evaluation when the application or cluster is unhealthy before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
         */
        healthCheckRetryTimeout: pulumi.Input<string>;
        /**
         * The amount of time that the application or cluster must remain healthy before the upgrade proceeds to the next upgrade domain. The duration can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
         */
        healthCheckStableDuration: pulumi.Input<string>;
        /**
         * The length of time to wait after completing an upgrade domain before performing health checks. The duration can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
         */
        healthCheckWaitDuration: pulumi.Input<string>;
        /**
         * The cluster health policy used when upgrading the cluster.
         */
        healthPolicy: pulumi.Input<ClusterHealthPolicyArgs>;
        /**
         * The amount of time each upgrade domain has to complete before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
         */
        upgradeDomainTimeout: pulumi.Input<string>;
        /**
         * The maximum amount of time to block processing of an upgrade domain and prevent loss of availability when there are unexpected issues. When this timeout expires, processing of the upgrade domain will proceed regardless of availability loss issues. The timeout is reset at the start of each upgrade domain. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
         */
        upgradeReplicaSetCheckTimeout: pulumi.Input<string>;
        /**
         * The amount of time the overall upgrade has to complete before the upgrade rolls back. The timeout can be in either hh:mm:ss or in d.hh:mm:ss.ms format.
         */
        upgradeTimeout: pulumi.Input<string>;
    }
    /**
     * clusterUpgradePolicyArgsProvideDefaults sets the appropriate defaults for ClusterUpgradePolicyArgs
     */
    export function clusterUpgradePolicyArgsProvideDefaults(val: ClusterUpgradePolicyArgs): ClusterUpgradePolicyArgs {
        return {
            ...val,
            healthPolicy: pulumi.output(val.healthPolicy).apply(clusterHealthPolicyArgsProvideDefaults),
        };
    }

    /**
     * The storage account information for storing Service Fabric diagnostic logs.
     */
    export interface DiagnosticsStorageAccountConfigArgs {
        /**
         * The blob endpoint of the azure storage account.
         */
        blobEndpoint: pulumi.Input<string>;
        /**
         * The protected diagnostics storage key name.
         */
        protectedAccountKeyName: pulumi.Input<string>;
        /**
         * The secondary protected diagnostics storage key name. If one of the storage account keys is rotated the cluster will fallback to using the other.
         */
        protectedAccountKeyName2?: pulumi.Input<string>;
        /**
         * The queue endpoint of the azure storage account.
         */
        queueEndpoint: pulumi.Input<string>;
        /**
         * The Azure storage account name.
         */
        storageAccountName: pulumi.Input<string>;
        /**
         * The table endpoint of the azure storage account.
         */
        tableEndpoint: pulumi.Input<string>;
    }

    /**
     * Port range details
     */
    export interface EndpointRangeDescriptionArgs {
        /**
         * End port of a range of ports
         */
        endPort: pulumi.Input<number>;
        /**
         * Starting port of a range of ports
         */
        startPort: pulumi.Input<number>;
    }

    /**
     * Describes a node type in the cluster, each node type represents sub set of nodes in the cluster.
     */
    export interface NodeTypeDescriptionArgs {
        /**
         * The range of ports from which cluster assigned port to Service Fabric applications.
         */
        applicationPorts?: pulumi.Input<EndpointRangeDescriptionArgs>;
        /**
         * The capacity tags applied to the nodes in the node type, the cluster resource manager uses these tags to understand how much resource a node has.
         */
        capacities?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * The TCP cluster management endpoint port.
         */
        clientConnectionEndpointPort: pulumi.Input<number>;
        /**
         * The durability level of the node type. Learn about [DurabilityLevel](https://docs.microsoft.com/azure/service-fabric/service-fabric-cluster-capacity).
         *
         *   - Bronze - No privileges. This is the default.
         *   - Silver - The infrastructure jobs can be paused for a duration of 10 minutes per UD.
         *   - Gold - The infrastructure jobs can be paused for a duration of 2 hours per UD. Gold durability can be enabled only on full node VM skus like D15_V2, G5 etc.
         */
        durabilityLevel?: pulumi.Input<string>;
        /**
         * The range of ephemeral ports that nodes in this node type should be configured with.
         */
        ephemeralPorts?: pulumi.Input<EndpointRangeDescriptionArgs>;
        /**
         * The HTTP cluster management endpoint port.
         */
        httpGatewayEndpointPort: pulumi.Input<number>;
        /**
         * The node type on which system services will run. Only one node type should be marked as primary. Primary node type cannot be deleted or changed for existing clusters.
         */
        isPrimary: pulumi.Input<boolean>;
        /**
         * The name of the node type.
         */
        name: pulumi.Input<string>;
        /**
         * The placement tags applied to nodes in the node type, which can be used to indicate where certain services (workload) should run.
         */
        placementProperties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * The endpoint used by reverse proxy.
         */
        reverseProxyEndpointPort?: pulumi.Input<number>;
        /**
         * The number of nodes in the node type. This count should match the capacity property in the corresponding VirtualMachineScaleSet resource.
         */
        vmInstanceCount: pulumi.Input<number>;
    }

    /**
     * Describes the server certificate details using common name.
     */
    export interface ServerCertificateCommonNameArgs {
        /**
         * The common name of the server certificate.
         */
        certificateCommonName: pulumi.Input<string>;
        /**
         * The issuer thumbprint of the server certificate.
         */
        certificateIssuerThumbprint: pulumi.Input<string>;
    }

    /**
     * Describes a list of server certificates referenced by common name that are used to secure the cluster.
     */
    export interface ServerCertificateCommonNamesArgs {
        /**
         * The list of server certificates referenced by common name that are used to secure the cluster.
         */
        commonNames?: pulumi.Input<pulumi.Input<ServerCertificateCommonNameArgs>[]>;
        /**
         * The local certificate store location.
         */
        x509StoreName?: pulumi.Input<string>;
    }

    /**
     * Represents the delta health policy used to evaluate the health of services belonging to a service type when upgrading the cluster.
     */
    export interface ServiceTypeDeltaHealthPolicyArgs {
        /**
         * The maximum allowed percentage of services health degradation allowed during cluster upgrades.
         * The delta is measured between the state of the services at the beginning of upgrade and the state of the services at the time of the health evaluation.
         * The check is performed after every upgrade domain upgrade completion to make sure the global state of the cluster is within tolerated limits.
         */
        maxPercentDeltaUnhealthyServices?: pulumi.Input<number>;
    }
    /**
     * serviceTypeDeltaHealthPolicyArgsProvideDefaults sets the appropriate defaults for ServiceTypeDeltaHealthPolicyArgs
     */
    export function serviceTypeDeltaHealthPolicyArgsProvideDefaults(val: ServiceTypeDeltaHealthPolicyArgs): ServiceTypeDeltaHealthPolicyArgs {
        return {
            ...val,
            maxPercentDeltaUnhealthyServices: (val.maxPercentDeltaUnhealthyServices) ?? 0,
        };
    }

    /**
     * Represents the health policy used to evaluate the health of services belonging to a service type.
     */
    export interface ServiceTypeHealthPolicyArgs {
        /**
         * The maximum percentage of services allowed to be unhealthy before your application is considered in error.
         */
        maxPercentUnhealthyServices?: pulumi.Input<number>;
    }
    /**
     * serviceTypeHealthPolicyArgsProvideDefaults sets the appropriate defaults for ServiceTypeHealthPolicyArgs
     */
    export function serviceTypeHealthPolicyArgsProvideDefaults(val: ServiceTypeHealthPolicyArgs): ServiceTypeHealthPolicyArgs {
        return {
            ...val,
            maxPercentUnhealthyServices: (val.maxPercentUnhealthyServices) ?? 0,
        };
    }

    /**
     * Describes a parameter in fabric settings of the cluster.
     */
    export interface SettingsParameterDescriptionArgs {
        /**
         * The parameter name of fabric setting.
         */
        name: pulumi.Input<string>;
        /**
         * The parameter value of fabric setting.
         */
        value: pulumi.Input<string>;
    }

    /**
     * Describes a section in the fabric settings of the cluster.
     */
    export interface SettingsSectionDescriptionArgs {
        /**
         * The section name of the fabric settings.
         */
        name: pulumi.Input<string>;
        /**
         * The collection of parameters in the section.
         */
        parameters: pulumi.Input<pulumi.Input<SettingsParameterDescriptionArgs>[]>;
    }
