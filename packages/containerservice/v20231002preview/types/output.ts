import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * For schedules like: 'recur every month on the 15th' or 'recur every 3 months on the 20th'.
     */
    export interface AbsoluteMonthlyScheduleResponse {
        /**
         * The date of the month.
         */
        dayOfMonth: number;
        /**
         * Specifies the number of months between each set of occurrences.
         */
        intervalMonths: number;
    }

    export interface AgentPoolArtifactStreamingProfileResponse {
        /**
         * Artifact streaming speeds up the cold-start of containers on a node through on-demand image loading. To use this feature, container images must also enable artifact streaming on ACR. If not specified, the default is false.
         */
        enabled?: boolean;
    }

    export interface AgentPoolGPUProfileResponse {
        /**
         * The default value is true when the vmSize of the agent pool contains a GPU, false otherwise. GPU Driver Installation can only be set true when VM has an associated GPU resource. Setting this field to false prevents automatic GPU driver installation. In that case, in order for the GPU to be usable, the user must perform GPU driver installation themselves.
         */
        installGPUDriver?: boolean;
    }

    /**
     * Network settings of an agent pool.
     */
    export interface AgentPoolNetworkProfileResponse {
        /**
         * The port ranges that are allowed to access. The specified ranges are allowed to overlap.
         */
        allowedHostPorts?: PortRangeResponse[];
        /**
         * The IDs of the application security groups which agent pool will associate when created.
         */
        applicationSecurityGroups?: string[];
        /**
         * IPTags of instance-level public IPs.
         */
        nodePublicIPTags?: IPTagResponse[];
    }

    /**
     * The security settings of an agent pool.
     */
    export interface AgentPoolSecurityProfileResponse {
        /**
         * SSH access method of an agent pool.
         */
        sshAccess?: string;
    }

    /**
     * Settings for upgrading an agentpool
     */
    export interface AgentPoolUpgradeSettingsResponse {
        /**
         * The amount of time (in minutes) to wait on eviction of pods and graceful termination per node. This eviction wait time honors waiting on pod disruption budgets. If this time is exceeded, the upgrade fails. If not specified, the default is 30 minutes.
         */
        drainTimeoutInMinutes?: number;
        /**
         * This can either be set to an integer (e.g. '5') or a percentage (e.g. '50%'). If a percentage is specified, it is the percentage of the total agent pool size at the time of the upgrade. For percentages, fractional nodes are rounded up. If not specified, the default is 1. For more information, including best practices, see: https://docs.microsoft.com/azure/aks/upgrade-cluster#customize-node-surge-upgrade
         */
        maxSurge?: string;
        /**
         * The amount of time (in minutes) to wait after draining a node and before reimaging it and moving on to next node. If not specified, the default is 0 minutes.
         */
        nodeSoakDurationInMinutes?: number;
    }

    /**
     * The Windows agent pool's specific profile.
     */
    export interface AgentPoolWindowsProfileResponse {
        /**
         * The default value is false. Outbound NAT can only be disabled if the cluster outboundType is NAT Gateway and the Windows agent pool does not have node public IP enabled.
         */
        disableOutboundNat?: boolean;
    }

    /**
     * Azure Key Vault key management service settings for the security profile.
     */
    export interface AzureKeyVaultKmsResponse {
        /**
         * Whether to enable Azure Key Vault key management service. The default is false.
         */
        enabled?: boolean;
        /**
         * Identifier of Azure Key Vault key. See [key identifier format](https://docs.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates#vault-name-and-object-name) for more details. When Azure Key Vault key management service is enabled, this field is required and must be a valid key identifier. When Azure Key Vault key management service is disabled, leave the field empty.
         */
        keyId?: string;
        /**
         * Network access of key vault. The possible values are `Public` and `Private`. `Public` means the key vault allows public access from all networks. `Private` means the key vault disables public access and enables private link. The default value is `Public`.
         */
        keyVaultNetworkAccess?: string;
        /**
         * Resource ID of key vault. When keyVaultNetworkAccess is `Private`, this field is required and must be a valid resource ID. When keyVaultNetworkAccess is `Public`, leave the field empty.
         */
        keyVaultResourceId?: string;
    }
    /**
     * azureKeyVaultKmsResponseProvideDefaults sets the appropriate defaults for AzureKeyVaultKmsResponse
     */
    export function azureKeyVaultKmsResponseProvideDefaults(val: AzureKeyVaultKmsResponse): AzureKeyVaultKmsResponse {
        return {
            ...val,
            keyVaultNetworkAccess: (val.keyVaultNetworkAccess) ?? "Public",
        };
    }

    /**
     * Settings for upgrading a cluster.
     */
    export interface ClusterUpgradeSettingsResponse {
        /**
         * Settings for overrides.
         */
        overrideSettings?: UpgradeOverrideSettingsResponse;
    }

    /**
     * Profile for Linux VMs in the container service cluster.
     */
    export interface ContainerServiceLinuxProfileResponse {
        /**
         * The administrator username to use for Linux VMs.
         */
        adminUsername: string;
        /**
         * The SSH configuration for Linux-based VMs running on Azure.
         */
        ssh: ContainerServiceSshConfigurationResponse;
    }

    /**
     * Profile of network configuration.
     */
    export interface ContainerServiceNetworkProfileResponse {
        /**
         * An IP address assigned to the Kubernetes DNS service. It must be within the Kubernetes service address range specified in serviceCidr.
         */
        dnsServiceIP?: string;
        /**
         * IP families are used to determine single-stack or dual-stack clusters. For single-stack, the expected value is IPv4. For dual-stack, the expected values are IPv4 and IPv6.
         */
        ipFamilies?: string[];
        /**
         * Holds configuration customizations for kube-proxy. Any values not defined will use the kube-proxy defaulting behavior. See https://v<version>.docs.kubernetes.io/docs/reference/command-line-tools-reference/kube-proxy/ where <version> is represented by a <major version>-<minor version> string. Kubernetes version 1.23 would be '1-23'.
         */
        kubeProxyConfig?: ContainerServiceNetworkProfileResponseKubeProxyConfig;
        /**
         * Profile of the cluster load balancer.
         */
        loadBalancerProfile?: ManagedClusterLoadBalancerProfileResponse;
        /**
         * The default is 'standard'. See [Azure Load Balancer SKUs](https://docs.microsoft.com/azure/load-balancer/skus) for more information about the differences between load balancer SKUs.
         */
        loadBalancerSku?: string;
        /**
         * This addon can be used to configure network monitoring and generate network monitoring data in Prometheus format
         */
        monitoring?: NetworkMonitoringResponse;
        /**
         * Profile of the cluster NAT gateway.
         */
        natGatewayProfile?: ManagedClusterNATGatewayProfileResponse;
        /**
         * Network dataplane used in the Kubernetes cluster.
         */
        networkDataplane?: string;
        /**
         * This cannot be specified if networkPlugin is anything other than 'azure'.
         */
        networkMode?: string;
        /**
         * Network plugin used for building the Kubernetes network.
         */
        networkPlugin?: string;
        /**
         * Network plugin mode used for building the Kubernetes network.
         */
        networkPluginMode?: string;
        /**
         * Network policy used for building the Kubernetes network.
         */
        networkPolicy?: string;
        /**
         * This can only be set at cluster creation time and cannot be changed later. For more information see [egress outbound type](https://docs.microsoft.com/azure/aks/egress-outboundtype).
         */
        outboundType?: string;
        /**
         * A CIDR notation IP range from which to assign pod IPs when kubenet is used.
         */
        podCidr?: string;
        /**
         * One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking.
         */
        podCidrs?: string[];
        /**
         * A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges.
         */
        serviceCidr?: string;
        /**
         * One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking. They must not overlap with any Subnet IP ranges.
         */
        serviceCidrs?: string[];
    }
    /**
     * containerServiceNetworkProfileResponseProvideDefaults sets the appropriate defaults for ContainerServiceNetworkProfileResponse
     */
    export function containerServiceNetworkProfileResponseProvideDefaults(val: ContainerServiceNetworkProfileResponse): ContainerServiceNetworkProfileResponse {
        return {
            ...val,
            dnsServiceIP: (val.dnsServiceIP) ?? "10.0.0.10",
            loadBalancerProfile: (val.loadBalancerProfile ? managedClusterLoadBalancerProfileResponseProvideDefaults(val.loadBalancerProfile) : undefined),
            natGatewayProfile: (val.natGatewayProfile ? managedClusterNATGatewayProfileResponseProvideDefaults(val.natGatewayProfile) : undefined),
            outboundType: (val.outboundType) ?? "loadBalancer",
            podCidr: (val.podCidr) ?? "10.244.0.0/16",
            serviceCidr: (val.serviceCidr) ?? "10.0.0.0/16",
        };
    }

    /**
     * Holds configuration customizations for IPVS. May only be specified if 'mode' is set to 'IPVS'.
     */
    export interface ContainerServiceNetworkProfileResponseIpvsConfig {
        /**
         * IPVS scheduler, for more information please see http://www.linuxvirtualserver.org/docs/scheduling.html.
         */
        scheduler?: string;
        /**
         * The timeout value used for IPVS TCP sessions after receiving a FIN in seconds. Must be a positive integer value.
         */
        tcpFinTimeoutSeconds?: number;
        /**
         * The timeout value used for idle IPVS TCP sessions in seconds. Must be a positive integer value.
         */
        tcpTimeoutSeconds?: number;
        /**
         * The timeout value used for IPVS UDP packets in seconds. Must be a positive integer value.
         */
        udpTimeoutSeconds?: number;
    }

    /**
     * Holds configuration customizations for kube-proxy. Any values not defined will use the kube-proxy defaulting behavior. See https://v<version>.docs.kubernetes.io/docs/reference/command-line-tools-reference/kube-proxy/ where <version> is represented by a <major version>-<minor version> string. Kubernetes version 1.23 would be '1-23'.
     */
    export interface ContainerServiceNetworkProfileResponseKubeProxyConfig {
        /**
         * Whether to enable on kube-proxy on the cluster (if no 'kubeProxyConfig' exists, kube-proxy is enabled in AKS by default without these customizations).
         */
        enabled?: boolean;
        /**
         * Holds configuration customizations for IPVS. May only be specified if 'mode' is set to 'IPVS'.
         */
        ipvsConfig?: ContainerServiceNetworkProfileResponseIpvsConfig;
        /**
         * Specify which proxy mode to use ('IPTABLES' or 'IPVS')
         */
        mode?: string;
    }

    /**
     * SSH configuration for Linux-based VMs running on Azure.
     */
    export interface ContainerServiceSshConfigurationResponse {
        /**
         * The list of SSH public keys used to authenticate with Linux-based VMs. A maximum of 1 key may be specified.
         */
        publicKeys: ContainerServiceSshPublicKeyResponse[];
    }

    /**
     * Contains information about SSH certificate public key data.
     */
    export interface ContainerServiceSshPublicKeyResponse {
        /**
         * Certificate public key used to authenticate with VMs through SSH. The certificate must be in PEM format with or without headers.
         */
        keyData: string;
    }

    /**
     * Data used when creating a target resource from a source resource.
     */
    export interface CreationDataResponse {
        /**
         * This is the ARM ID of the source object to be used to create the target object.
         */
        sourceResourceId?: string;
    }

    /**
     * The credential result response.
     */
    export interface CredentialResultResponse {
        /**
         * The name of the credential.
         */
        name: string;
        /**
         * Base64-encoded Kubernetes configuration file.
         */
        value: string;
    }

    /**
     * For schedules like: 'recur every day' or 'recur every 3 days'.
     */
    export interface DailyScheduleResponse {
        /**
         * Specifies the number of days between each set of occurrences.
         */
        intervalDays: number;
    }

    /**
     * For example, between '2022-12-23' and '2023-01-05'.
     */
    export interface DateSpanResponse {
        /**
         * The end date of the date span.
         */
        end: string;
        /**
         * The start date of the date span.
         */
        start: string;
    }

    /**
     * Delegated resource properties - internal use only.
     */
    export interface DelegatedResourceResponse {
        /**
         * The source resource location - internal use only.
         */
        location?: string;
        /**
         * The delegation id of the referral delegation (optional) - internal use only.
         */
        referralResource?: string;
        /**
         * The ARM resource id of the delegated resource - internal use only.
         */
        resourceId?: string;
        /**
         * The tenant id of the delegated resource - internal use only.
         */
        tenantId?: string;
    }

    /**
     * The complex type of the extended location.
     */
    export interface ExtendedLocationResponse {
        /**
         * The name of the extended location.
         */
        name?: string;
        /**
         * The type of the extended location.
         */
        type?: string;
    }

    /**
     * The Guardrails profile.
     */
    export interface GuardrailsProfileResponse {
        /**
         * List of namespaces excluded from guardrails checks
         */
        excludedNamespaces?: string[];
        /**
         * The guardrails level to be used. By default, Guardrails is enabled for all namespaces except those that AKS excludes via systemExcludedNamespaces
         */
        level: string;
        /**
         * List of namespaces specified by AKS to be excluded from Guardrails
         */
        systemExcludedNamespaces: string[];
        /**
         * The version of constraints to use
         */
        version?: string;
    }

    /**
     * Contains the IPTag associated with the object.
     */
    export interface IPTagResponse {
        /**
         * The IP tag type. Example: RoutingPreference.
         */
        ipTagType?: string;
        /**
         * The value of the IP tag associated with the public IP. Example: Internet.
         */
        tag?: string;
    }

    /**
     * Istio Service Mesh Certificate Authority (CA) configuration. For now, we only support plugin certificates as described here https://aka.ms/asm-plugin-ca
     */
    export interface IstioCertificateAuthorityResponse {
        /**
         * Plugin certificates information for Service Mesh.
         */
        plugin?: IstioPluginCertificateAuthorityResponse;
    }

    /**
     * Istio components configuration.
     */
    export interface IstioComponentsResponse {
        /**
         * Istio egress gateways.
         */
        egressGateways?: IstioEgressGatewayResponse[];
        /**
         * Istio ingress gateways.
         */
        ingressGateways?: IstioIngressGatewayResponse[];
    }

    /**
     * Istio egress gateway configuration.
     */
    export interface IstioEgressGatewayResponse {
        /**
         * Whether to enable the egress gateway.
         */
        enabled: boolean;
        /**
         * NodeSelector for scheduling the egress gateway.
         */
        nodeSelector?: {[key: string]: string};
    }

    /**
     * Istio ingress gateway configuration. For now, we support up to one external ingress gateway named `aks-istio-ingressgateway-external` and one internal ingress gateway named `aks-istio-ingressgateway-internal`.
     */
    export interface IstioIngressGatewayResponse {
        /**
         * Whether to enable the ingress gateway.
         */
        enabled: boolean;
        /**
         * Mode of an ingress gateway.
         */
        mode: string;
    }

    /**
     * Plugin certificates information for Service Mesh.
     */
    export interface IstioPluginCertificateAuthorityResponse {
        /**
         * Certificate chain object name in Azure Key Vault.
         */
        certChainObjectName?: string;
        /**
         * Intermediate certificate object name in Azure Key Vault.
         */
        certObjectName?: string;
        /**
         * Intermediate certificate private key object name in Azure Key Vault.
         */
        keyObjectName?: string;
        /**
         * The resource ID of the Key Vault.
         */
        keyVaultId?: string;
        /**
         * Root certificate object name in Azure Key Vault.
         */
        rootCertObjectName?: string;
    }

    /**
     * Istio service mesh configuration.
     */
    export interface IstioServiceMeshResponse {
        /**
         * Istio Service Mesh Certificate Authority (CA) configuration. For now, we only support plugin certificates as described here https://aka.ms/asm-plugin-ca
         */
        certificateAuthority?: IstioCertificateAuthorityResponse;
        /**
         * Istio components configuration.
         */
        components?: IstioComponentsResponse;
        /**
         * The list of revisions of the Istio control plane. When an upgrade is not in progress, this holds one value. When canary upgrade is in progress, this can only hold two consecutive values. For more information, see: https://learn.microsoft.com/en-us/azure/aks/istio-upgrade
         */
        revisions?: string[];
    }

    /**
     * See [AKS custom node configuration](https://docs.microsoft.com/azure/aks/custom-node-configuration) for more details.
     */
    export interface KubeletConfigResponse {
        /**
         * Allowed list of unsafe sysctls or unsafe sysctl patterns (ending in `*`).
         */
        allowedUnsafeSysctls?: string[];
        /**
         * The maximum number of container log files that can be present for a container. The number must be ≥ 2.
         */
        containerLogMaxFiles?: number;
        /**
         * The maximum size (e.g. 10Mi) of container log file before it is rotated.
         */
        containerLogMaxSizeMB?: number;
        /**
         * The default is true.
         */
        cpuCfsQuota?: boolean;
        /**
         * The default is '100ms.' Valid values are a sequence of decimal numbers with an optional fraction and a unit suffix. For example: '300ms', '2h45m'. Supported units are 'ns', 'us', 'ms', 's', 'm', and 'h'.
         */
        cpuCfsQuotaPeriod?: string;
        /**
         * The default is 'none'. See [Kubernetes CPU management policies](https://kubernetes.io/docs/tasks/administer-cluster/cpu-management-policies/#cpu-management-policies) for more information. Allowed values are 'none' and 'static'.
         */
        cpuManagerPolicy?: string;
        /**
         * If set to true it will make the Kubelet fail to start if swap is enabled on the node.
         */
        failSwapOn?: boolean;
        /**
         * To disable image garbage collection, set to 100. The default is 85%
         */
        imageGcHighThreshold?: number;
        /**
         * This cannot be set higher than imageGcHighThreshold. The default is 80%
         */
        imageGcLowThreshold?: number;
        /**
         * The maximum number of processes per pod.
         */
        podMaxPids?: number;
        /**
         * For more information see [Kubernetes Topology Manager](https://kubernetes.io/docs/tasks/administer-cluster/topology-manager). The default is 'none'. Allowed values are 'none', 'best-effort', 'restricted', and 'single-numa-node'.
         */
        topologyManagerPolicy?: string;
    }

    /**
     * See [AKS custom node configuration](https://docs.microsoft.com/azure/aks/custom-node-configuration) for more details.
     */
    export interface LinuxOSConfigResponse {
        /**
         * The size in MB of a swap file that will be created on each node.
         */
        swapFileSizeMB?: number;
        /**
         * Sysctl settings for Linux agent nodes.
         */
        sysctls?: SysctlConfigResponse;
        /**
         * Valid values are 'always', 'defer', 'defer+madvise', 'madvise' and 'never'. The default is 'madvise'. For more information see [Transparent Hugepages](https://www.kernel.org/doc/html/latest/admin-guide/mm/transhuge.html#admin-guide-transhuge).
         */
        transparentHugePageDefrag?: string;
        /**
         * Valid values are 'always', 'madvise', and 'never'. The default is 'always'. For more information see [Transparent Hugepages](https://www.kernel.org/doc/html/latest/admin-guide/mm/transhuge.html#admin-guide-transhuge).
         */
        transparentHugePageEnabled?: string;
    }

    /**
     * Maintenance window used to configure scheduled auto-upgrade for a Managed Cluster.
     */
    export interface MaintenanceWindowResponse {
        /**
         * Length of maintenance window range from 4 to 24 hours.
         */
        durationHours: number;
        /**
         * Date ranges on which upgrade is not allowed. 'utcOffset' applies to this field. For example, with 'utcOffset: +02:00' and 'dateSpan' being '2022-12-23' to '2023-01-03', maintenance will be blocked from '2022-12-22 22:00' to '2023-01-03 22:00' in UTC time.
         */
        notAllowedDates?: DateSpanResponse[];
        /**
         * Recurrence schedule for the maintenance window.
         */
        schedule: ScheduleResponse;
        /**
         * The date the maintenance window activates. If the current date is before this date, the maintenance window is inactive and will not be used for upgrades. If not specified, the maintenance window will be active right away.
         */
        startDate?: string;
        /**
         * The start time of the maintenance window. Accepted values are from '00:00' to '23:59'. 'utcOffset' applies to this field. For example: '02:00' with 'utcOffset: +02:00' means UTC time '00:00'.
         */
        startTime: string;
        /**
         * The UTC offset in format +/-HH:mm. For example, '+05:30' for IST and '-07:00' for PST. If not specified, the default is '+00:00'.
         */
        utcOffset?: string;
    }
    /**
     * maintenanceWindowResponseProvideDefaults sets the appropriate defaults for MaintenanceWindowResponse
     */
    export function maintenanceWindowResponseProvideDefaults(val: MaintenanceWindowResponse): MaintenanceWindowResponse {
        return {
            ...val,
            durationHours: (val.durationHours) ?? 24,
        };
    }

    /**
     * For more details see [managed AAD on AKS](https://docs.microsoft.com/azure/aks/managed-aad).
     */
    export interface ManagedClusterAADProfileResponse {
        /**
         * The list of AAD group object IDs that will have admin role of the cluster.
         */
        adminGroupObjectIDs?: string[];
        /**
         * (DEPRECATED) The client AAD application ID. Learn more at https://aka.ms/aks/aad-legacy.
         */
        clientAppID?: string;
        /**
         * Whether to enable Azure RBAC for Kubernetes authorization.
         */
        enableAzureRBAC?: boolean;
        /**
         * Whether to enable managed AAD.
         */
        managed?: boolean;
        /**
         * (DEPRECATED) The server AAD application ID. Learn more at https://aka.ms/aks/aad-legacy.
         */
        serverAppID?: string;
        /**
         * (DEPRECATED) The server AAD application secret. Learn more at https://aka.ms/aks/aad-legacy.
         */
        serverAppSecret?: string;
        /**
         * The AAD tenant ID to use for authentication. If not specified, will use the tenant of the deployment subscription.
         */
        tenantID?: string;
    }

    /**
     * When enabling the operator, a set of AKS managed CRDs and controllers will be installed in the cluster. The operator automates the deployment of OSS models for inference and/or training purposes. It provides a set of preset models and enables distributed inference against them.
     */
    export interface ManagedClusterAIToolchainOperatorProfileResponse {
        /**
         * Indicates if AI toolchain operator  enabled or not.
         */
        enabled?: boolean;
    }

    /**
     * Access profile for managed cluster API server.
     */
    export interface ManagedClusterAPIServerAccessProfileResponse {
        /**
         * IP ranges are specified in CIDR format, e.g. 137.117.106.88/29. This feature is not compatible with clusters that use Public IP Per Node, or clusters that are using a Basic Load Balancer. For more information see [API server authorized IP ranges](https://docs.microsoft.com/azure/aks/api-server-authorized-ip-ranges).
         */
        authorizedIPRanges?: string[];
        /**
         * Whether to disable run command for the cluster or not.
         */
        disableRunCommand?: boolean;
        /**
         * For more details, see [Creating a private AKS cluster](https://docs.microsoft.com/azure/aks/private-clusters).
         */
        enablePrivateCluster?: boolean;
        /**
         * Whether to create additional public FQDN for private cluster or not.
         */
        enablePrivateClusterPublicFQDN?: boolean;
        /**
         * Whether to enable apiserver vnet integration for the cluster or not.
         */
        enableVnetIntegration?: boolean;
        /**
         * The default is System. For more details see [configure private DNS zone](https://docs.microsoft.com/azure/aks/private-clusters#configure-private-dns-zone). Allowed values are 'system' and 'none'.
         */
        privateDNSZone?: string;
        /**
         * It is required when: 1. creating a new cluster with BYO Vnet; 2. updating an existing cluster to enable apiserver vnet integration.
         */
        subnetId?: string;
    }

    /**
     * A Kubernetes add-on profile for a managed cluster.
     */
    export interface ManagedClusterAddonProfileResponse {
        /**
         * Key-value pairs for configuring an add-on.
         */
        config?: {[key: string]: string};
        /**
         * Whether the add-on is enabled or not.
         */
        enabled: boolean;
        /**
         * Information of user assigned identity used by this add-on.
         */
        identity: ManagedClusterAddonProfileResponseIdentity;
    }

    /**
     * Information of user assigned identity used by this add-on.
     */
    export interface ManagedClusterAddonProfileResponseIdentity {
        /**
         * The client ID of the user assigned identity.
         */
        clientId?: string;
        /**
         * The object ID of the user assigned identity.
         */
        objectId?: string;
        /**
         * The resource ID of the user assigned identity.
         */
        resourceId?: string;
    }

    /**
     * Profile for the container service agent pool.
     */
    export interface ManagedClusterAgentPoolProfileResponse {
        /**
         * Configuration for using artifact streaming on AKS.
         */
        artifactStreamingProfile?: AgentPoolArtifactStreamingProfileResponse;
        /**
         * The list of Availability zones to use for nodes. This can only be specified if the AgentPoolType property is 'VirtualMachineScaleSets'.
         */
        availabilityZones?: string[];
        /**
         * AKS will associate the specified agent pool with the Capacity Reservation Group.
         */
        capacityReservationGroupID?: string;
        /**
         * Number of agents (VMs) to host docker containers. Allowed values must be in the range of 0 to 1000 (inclusive) for user pools and in the range of 1 to 1000 (inclusive) for system pools. The default value is 1.
         */
        count?: number;
        /**
         * CreationData to be used to specify the source Snapshot ID if the node pool will be created/upgraded using a snapshot.
         */
        creationData?: CreationDataResponse;
        /**
         * If orchestratorVersion was a fully specified version <major.minor.patch>, this field will be exactly equal to it. If orchestratorVersion was <major.minor>, this field will contain the full <major.minor.patch> version being used.
         */
        currentOrchestratorVersion: string;
        /**
         * Whether to enable auto-scaler
         */
        enableAutoScaling?: boolean;
        /**
         * When set to true, AKS adds a label to the node indicating that the feature is enabled and deploys a daemonset along with host services to sync custom certificate authorities from user-provided list of base64 encoded certificates into node trust stores. Defaults to false.
         */
        enableCustomCATrust?: boolean;
        /**
         * This is only supported on certain VM sizes and in certain Azure regions. For more information, see: https://docs.microsoft.com/azure/aks/enable-host-encryption
         */
        enableEncryptionAtHost?: boolean;
        /**
         * See [Add a FIPS-enabled node pool](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#add-a-fips-enabled-node-pool-preview) for more details.
         */
        enableFIPS?: boolean;
        /**
         * Some scenarios may require nodes in a node pool to receive their own dedicated public IP addresses. A common scenario is for gaming workloads, where a console needs to make a direct connection to a cloud virtual machine to minimize hops. For more information see [assigning a public IP per node](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#assign-a-public-ip-per-node-for-your-node-pools). The default is false.
         */
        enableNodePublicIP?: boolean;
        /**
         * Whether to enable UltraSSD
         */
        enableUltraSSD?: boolean;
        /**
         * GPUInstanceProfile to be used to specify GPU MIG instance profile for supported GPU VM SKU.
         */
        gpuInstanceProfile?: string;
        /**
         * The GPU settings of an agent pool.
         */
        gpuProfile?: AgentPoolGPUProfileResponse;
        /**
         * This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}. For more information see [Azure dedicated hosts](https://docs.microsoft.com/azure/virtual-machines/dedicated-hosts).
         */
        hostGroupID?: string;
        /**
         * The Kubelet configuration on the agent pool nodes.
         */
        kubeletConfig?: KubeletConfigResponse;
        /**
         * Determines the placement of emptyDir volumes, container runtime data root, and Kubelet ephemeral storage.
         */
        kubeletDiskType?: string;
        /**
         * The OS configuration of Linux agent nodes.
         */
        linuxOSConfig?: LinuxOSConfigResponse;
        /**
         * The maximum number of nodes for auto-scaling
         */
        maxCount?: number;
        /**
         * The maximum number of pods that can run on a node.
         */
        maxPods?: number;
        /**
         * A base64-encoded string which will be written to /etc/motd after decoding. This allows customization of the message of the day for Linux nodes. It must not be specified for Windows nodes. It must be a static string (i.e., will be printed raw and not be executed as a script).
         */
        messageOfTheDay?: string;
        /**
         * The minimum number of nodes for auto-scaling
         */
        minCount?: number;
        /**
         * A cluster must have at least one 'System' Agent Pool at all times. For additional information on agent pool restrictions and best practices, see: https://docs.microsoft.com/azure/aks/use-system-pools
         */
        mode?: string;
        /**
         * Windows agent pool names must be 6 characters or less.
         */
        name: string;
        /**
         * Network-related settings of an agent pool.
         */
        networkProfile?: AgentPoolNetworkProfileResponse;
        /**
         * The version of node image
         */
        nodeImageVersion: string;
        /**
         * These taints will not be reconciled by AKS and can be removed with a kubectl call. This field can be modified after node pool is created, but nodes will not be recreated with new taints until another operation that requires recreation (e.g. node image upgrade) happens. These taints allow for required configuration to run before the node is ready to accept workloads, for example 'key1=value1:NoSchedule' that then can be removed with `kubectl taint nodes node1 key1=value1:NoSchedule-`
         */
        nodeInitializationTaints?: string[];
        /**
         * The node labels to be persisted across all nodes in agent pool.
         */
        nodeLabels?: {[key: string]: string};
        /**
         * This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPPrefixes/{publicIPPrefixName}
         */
        nodePublicIPPrefixID?: string;
        /**
         * The taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
         */
        nodeTaints?: string[];
        /**
         * Both patch version <major.minor.patch> and <major.minor> are supported. When <major.minor> is specified, the latest supported patch version is chosen automatically. Updating the agent pool with the same <major.minor> once it has been created will not trigger an upgrade, even if a newer patch version is available. As a best practice, you should upgrade all node pools in an AKS cluster to the same Kubernetes version. The node pool version must have the same major version as the control plane. The node pool minor version must be within two minor versions of the control plane version. The node pool version cannot be greater than the control plane version. For more information see [upgrading a node pool](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#upgrade-a-node-pool).
         */
        orchestratorVersion?: string;
        /**
         * OS Disk Size in GB to be used to specify the disk size for every machine in the master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
         */
        osDiskSizeGB?: number;
        /**
         * The default is 'Ephemeral' if the VM supports it and has a cache disk larger than the requested OSDiskSizeGB. Otherwise, defaults to 'Managed'. May not be changed after creation. For more information see [Ephemeral OS](https://docs.microsoft.com/azure/aks/cluster-configuration#ephemeral-os).
         */
        osDiskType?: string;
        /**
         * Specifies the OS SKU used by the agent pool. If not specified, the default is Ubuntu if OSType=Linux or Windows2019 if OSType=Windows. And the default Windows OSSKU will be changed to Windows2022 after Windows2019 is deprecated.
         */
        osSKU?: string;
        /**
         * The operating system type. The default is Linux.
         */
        osType?: string;
        /**
         * If omitted, pod IPs are statically assigned on the node subnet (see vnetSubnetID for more details). This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
         */
        podSubnetID?: string;
        /**
         * When an Agent Pool is first created it is initially Running. The Agent Pool can be stopped by setting this field to Stopped. A stopped Agent Pool stops all of its VMs and does not accrue billing charges. An Agent Pool can only be stopped if it is Running and provisioning state is Succeeded
         */
        powerState?: PowerStateResponse;
        /**
         * The current deployment or provisioning state.
         */
        provisioningState: string;
        /**
         * The ID for Proximity Placement Group.
         */
        proximityPlacementGroupID?: string;
        /**
         * This also effects the cluster autoscaler behavior. If not specified, it defaults to Delete.
         */
        scaleDownMode?: string;
        /**
         * This cannot be specified unless the scaleSetPriority is 'Spot'. If not specified, the default is 'Delete'.
         */
        scaleSetEvictionPolicy?: string;
        /**
         * The Virtual Machine Scale Set priority. If not specified, the default is 'Regular'.
         */
        scaleSetPriority?: string;
        /**
         * The security settings of an agent pool.
         */
        securityProfile?: AgentPoolSecurityProfileResponse;
        /**
         * Possible values are any decimal value greater than zero or -1 which indicates the willingness to pay any on-demand price. For more details on spot pricing, see [spot VMs pricing](https://docs.microsoft.com/azure/virtual-machines/spot-vms#pricing)
         */
        spotMaxPrice?: number;
        /**
         * The tags to be persisted on the agent pool virtual machine scale set.
         */
        tags?: {[key: string]: string};
        /**
         * The type of Agent Pool.
         */
        type?: string;
        /**
         * Settings for upgrading the agentpool
         */
        upgradeSettings?: AgentPoolUpgradeSettingsResponse;
        /**
         * The status of nodes in a VirtualMachines agent pool.
         */
        virtualMachineNodesStatus?: VirtualMachineNodesResponse[];
        /**
         * Specifications on VirtualMachines agent pool.
         */
        virtualMachinesProfile?: VirtualMachinesProfileResponse;
        /**
         * VM size availability varies by region. If a node contains insufficient compute resources (memory, cpu, etc) pods might fail to run correctly. For more details on restricted VM sizes, see: https://docs.microsoft.com/azure/aks/quotas-skus-regions
         */
        vmSize?: string;
        /**
         * If this is not specified, a VNET and subnet will be generated and used. If no podSubnetID is specified, this applies to nodes and pods, otherwise it applies to just nodes. This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
         */
        vnetSubnetID?: string;
        /**
         * The Windows agent pool's specific profile.
         */
        windowsProfile?: AgentPoolWindowsProfileResponse;
        /**
         * Determines the type of workload a node can run.
         */
        workloadRuntime?: string;
    }

    /**
     * Auto upgrade profile for a managed cluster.
     */
    export interface ManagedClusterAutoUpgradeProfileResponse {
        /**
         * The default is Unmanaged, but may change to either NodeImage or SecurityPatch at GA.
         */
        nodeOSUpgradeChannel?: string;
        /**
         * For more information see [setting the AKS cluster auto-upgrade channel](https://docs.microsoft.com/azure/aks/upgrade-cluster#set-auto-upgrade-channel).
         */
        upgradeChannel?: string;
    }

    /**
     * Application Monitoring Open Telemetry Metrics Profile for Kubernetes Application Container Metrics. Collects OpenTelemetry metrics through auto-instrumentation of the application using Azure Monitor OpenTelemetry based SDKs. See aka.ms/AzureMonitorApplicationMonitoring for an overview.
     */
    export interface ManagedClusterAzureMonitorProfileAppMonitoringOpenTelemetryMetricsResponse {
        /**
         * Indicates if Application Monitoring Open Telemetry Metrics is enabled or not.
         */
        enabled?: boolean;
    }

    /**
     * Application Monitoring Profile for Kubernetes Application Container. Collects application logs, metrics and traces through auto-instrumentation of the application using Azure Monitor OpenTelemetry based SDKs. See aka.ms/AzureMonitorApplicationMonitoring for an overview.
     */
    export interface ManagedClusterAzureMonitorProfileAppMonitoringResponse {
        /**
         * Indicates if Application Monitoring enabled or not.
         */
        enabled?: boolean;
    }

    /**
     * Azure Monitor Container Insights Profile for Kubernetes Events, Inventory and Container stdout & stderr logs etc. See aka.ms/AzureMonitorContainerInsights for an overview.
     */
    export interface ManagedClusterAzureMonitorProfileContainerInsightsResponse {
        /**
         * Indicates if Azure Monitor Container Insights Logs Addon is enabled or not.
         */
        enabled?: boolean;
        /**
         * Fully Qualified ARM Resource Id of Azure Log Analytics Workspace for storing Azure Monitor Container Insights Logs.
         */
        logAnalyticsWorkspaceResourceId?: string;
        /**
         * Windows Host Logs Profile for Kubernetes Windows Nodes Log Collection. Collects ETW, Event Logs and Text logs etc. See aka.ms/AzureMonitorContainerInsights for an overview.
         */
        windowsHostLogs?: ManagedClusterAzureMonitorProfileWindowsHostLogsResponse;
    }

    /**
     * Kube State Metrics for prometheus addon profile for the container service cluster
     */
    export interface ManagedClusterAzureMonitorProfileKubeStateMetricsResponse {
        /**
         * Comma-separated list of additional Kubernetes label keys that will be used in the resource's labels metric.
         */
        metricAnnotationsAllowList?: string;
        /**
         * Comma-separated list of Kubernetes annotations keys that will be used in the resource's labels metric. 
         */
        metricLabelsAllowlist?: string;
    }

    /**
     * Logs profile for the Azure Monitor Infrastructure and Application Logs. Collect out-of-the-box Kubernetes infrastructure & application logs to send to Azure Monitor. See aka.ms/AzureMonitorContainerInsights for an overview.
     */
    export interface ManagedClusterAzureMonitorProfileLogsResponse {
        /**
         * Application Monitoring Profile for Kubernetes Application Container. Collects application logs, metrics and traces through auto-instrumentation of the application using Azure Monitor OpenTelemetry based SDKs. See aka.ms/AzureMonitorApplicationMonitoring for an overview.
         */
        appMonitoring?: ManagedClusterAzureMonitorProfileAppMonitoringResponse;
        /**
         * Azure Monitor Container Insights Profile for Kubernetes Events, Inventory and Container stdout & stderr logs etc. See aka.ms/AzureMonitorContainerInsights for an overview.
         */
        containerInsights?: ManagedClusterAzureMonitorProfileContainerInsightsResponse;
    }

    /**
     * Metrics profile for the prometheus service addon
     */
    export interface ManagedClusterAzureMonitorProfileMetricsResponse {
        /**
         * Application Monitoring Open Telemetry Metrics Profile for Kubernetes Application Container Metrics. Collects OpenTelemetry metrics through auto-instrumentation of the application using Azure Monitor OpenTelemetry based SDKs. See aka.ms/AzureMonitorApplicationMonitoring for an overview.
         */
        appMonitoringOpenTelemetryMetrics?: ManagedClusterAzureMonitorProfileAppMonitoringOpenTelemetryMetricsResponse;
        /**
         * Whether to enable the Prometheus collector
         */
        enabled: boolean;
        /**
         * Kube State Metrics for prometheus addon profile for the container service cluster
         */
        kubeStateMetrics?: ManagedClusterAzureMonitorProfileKubeStateMetricsResponse;
    }

    /**
     * Prometheus addon profile for the container service cluster
     */
    export interface ManagedClusterAzureMonitorProfileResponse {
        /**
         * Logs profile for the Azure Monitor Infrastructure and Application Logs. Collect out-of-the-box Kubernetes infrastructure & application logs to send to Azure Monitor. See aka.ms/AzureMonitorContainerInsights for an overview.
         */
        logs?: ManagedClusterAzureMonitorProfileLogsResponse;
        /**
         * Metrics profile for the prometheus service addon
         */
        metrics?: ManagedClusterAzureMonitorProfileMetricsResponse;
    }

    /**
     * Windows Host Logs Profile for Kubernetes Windows Nodes Log Collection. Collects ETW, Event Logs and Text logs etc. See aka.ms/AzureMonitorContainerInsights for an overview.
     */
    export interface ManagedClusterAzureMonitorProfileWindowsHostLogsResponse {
        /**
         * Indicates if Windows Host Log Collection is enabled or not for Azure Monitor Container Insights Logs Addon.
         */
        enabled?: boolean;
    }

    /**
     * The cost analysis configuration for the cluster
     */
    export interface ManagedClusterCostAnalysisResponse {
        /**
         * The Managed Cluster sku.tier must be set to 'Standard' to enable this feature. Enabling this will add Kubernetes Namespace and Deployment details to the Cost Analysis views in the Azure portal. If not specified, the default is false. For more information see aka.ms/aks/docs/cost-analysis.
         */
        enabled?: boolean;
    }

    /**
     * Cluster HTTP proxy configuration.
     */
    export interface ManagedClusterHTTPProxyConfigResponse {
        /**
         * A read-only list of all endpoints for which traffic should not be sent to the proxy. This list is a superset of noProxy and values injected by AKS.
         */
        effectiveNoProxy: string[];
        /**
         * The HTTP proxy server endpoint to use.
         */
        httpProxy?: string;
        /**
         * The HTTPS proxy server endpoint to use.
         */
        httpsProxy?: string;
        /**
         * The endpoints that should not go through proxy.
         */
        noProxy?: string[];
        /**
         * Alternative CA cert to use for connecting to proxy servers.
         */
        trustedCa?: string;
    }

    /**
     * Identity for the managed cluster.
     */
    export interface ManagedClusterIdentityResponse {
        /**
         * The delegated identity resources assigned to this managed cluster. This can only be set by another Azure Resource Provider, and managed cluster only accept one delegated identity resource. Internal use only.
         */
        delegatedResources?: {[key: string]: DelegatedResourceResponse};
        /**
         * The principal id of the system assigned identity which is used by master components.
         */
        principalId: string;
        /**
         * The tenant id of the system assigned identity which is used by master components.
         */
        tenantId: string;
        /**
         * For more information see [use managed identities in AKS](https://docs.microsoft.com/azure/aks/use-managed-identity).
         */
        type?: string;
        /**
         * The keys must be ARM resource IDs in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentities?: {[key: string]: ManagedClusterIdentityResponseUserAssignedIdentities};
    }

    export interface ManagedClusterIdentityResponseUserAssignedIdentities {
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
     * Ingress profile for the container service cluster.
     */
    export interface ManagedClusterIngressProfileResponse {
        /**
         * Web App Routing settings for the ingress profile.
         */
        webAppRouting?: ManagedClusterIngressProfileWebAppRoutingResponse;
    }

    /**
     * Web App Routing settings for the ingress profile.
     */
    export interface ManagedClusterIngressProfileWebAppRoutingResponse {
        /**
         * Resource IDs of the DNS zones to be associated with the Web App Routing add-on. Used only when Web App Routing is enabled. Public and private DNS zones can be in different resource groups, but all public DNS zones must be in the same resource group and all private DNS zones must be in the same resource group.
         */
        dnsZoneResourceIds?: string[];
        /**
         * Whether to enable Web App Routing.
         */
        enabled?: boolean;
        /**
         * Managed identity of the Web Application Routing add-on. This is the identity that should be granted permissions, for example, to manage the associated Azure DNS resource and get certificates from Azure Key Vault. See [this overview of the add-on](https://learn.microsoft.com/en-us/azure/aks/web-app-routing?tabs=with-osm) for more instructions.
         */
        identity: UserAssignedIdentityResponse;
    }

    /**
     * Profile of the managed cluster load balancer.
     */
    export interface ManagedClusterLoadBalancerProfileResponse {
        /**
         * The desired number of allocated SNAT ports per VM. Allowed values are in the range of 0 to 64000 (inclusive). The default value is 0 which results in Azure dynamically allocating ports.
         */
        allocatedOutboundPorts?: number;
        /**
         * The type of the managed inbound Load Balancer BackendPool.
         */
        backendPoolType?: string;
        /**
         * The effective outbound IP resources of the cluster load balancer.
         */
        effectiveOutboundIPs?: ResourceReferenceResponse[];
        /**
         * Enable multiple standard load balancers per AKS cluster or not.
         */
        enableMultipleStandardLoadBalancers?: boolean;
        /**
         * Desired outbound flow idle timeout in minutes. Allowed values are in the range of 4 to 120 (inclusive). The default value is 30 minutes.
         */
        idleTimeoutInMinutes?: number;
        /**
         * Desired managed outbound IPs for the cluster load balancer.
         */
        managedOutboundIPs?: ManagedClusterLoadBalancerProfileResponseManagedOutboundIPs;
        /**
         * Desired outbound IP Prefix resources for the cluster load balancer.
         */
        outboundIPPrefixes?: ManagedClusterLoadBalancerProfileResponseOutboundIPPrefixes;
        /**
         * Desired outbound IP resources for the cluster load balancer.
         */
        outboundIPs?: ManagedClusterLoadBalancerProfileResponseOutboundIPs;
    }
    /**
     * managedClusterLoadBalancerProfileResponseProvideDefaults sets the appropriate defaults for ManagedClusterLoadBalancerProfileResponse
     */
    export function managedClusterLoadBalancerProfileResponseProvideDefaults(val: ManagedClusterLoadBalancerProfileResponse): ManagedClusterLoadBalancerProfileResponse {
        return {
            ...val,
            allocatedOutboundPorts: (val.allocatedOutboundPorts) ?? 0,
            backendPoolType: (val.backendPoolType) ?? "NodeIPConfiguration",
            idleTimeoutInMinutes: (val.idleTimeoutInMinutes) ?? 30,
            managedOutboundIPs: (val.managedOutboundIPs ? managedClusterLoadBalancerProfileResponseManagedOutboundIPsProvideDefaults(val.managedOutboundIPs) : undefined),
        };
    }

    /**
     * Desired managed outbound IPs for the cluster load balancer.
     */
    export interface ManagedClusterLoadBalancerProfileResponseManagedOutboundIPs {
        /**
         * The desired number of IPv4 outbound IPs created/managed by Azure for the cluster load balancer. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1. 
         */
        count?: number;
        /**
         * The desired number of IPv6 outbound IPs created/managed by Azure for the cluster load balancer. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 0 for single-stack and 1 for dual-stack. 
         */
        countIPv6?: number;
    }
    /**
     * managedClusterLoadBalancerProfileResponseManagedOutboundIPsProvideDefaults sets the appropriate defaults for ManagedClusterLoadBalancerProfileResponseManagedOutboundIPs
     */
    export function managedClusterLoadBalancerProfileResponseManagedOutboundIPsProvideDefaults(val: ManagedClusterLoadBalancerProfileResponseManagedOutboundIPs): ManagedClusterLoadBalancerProfileResponseManagedOutboundIPs {
        return {
            ...val,
            count: (val.count) ?? 1,
            countIPv6: (val.countIPv6) ?? 0,
        };
    }

    /**
     * Desired outbound IP Prefix resources for the cluster load balancer.
     */
    export interface ManagedClusterLoadBalancerProfileResponseOutboundIPPrefixes {
        /**
         * A list of public IP prefix resources.
         */
        publicIPPrefixes?: ResourceReferenceResponse[];
    }

    /**
     * Desired outbound IP resources for the cluster load balancer.
     */
    export interface ManagedClusterLoadBalancerProfileResponseOutboundIPs {
        /**
         * A list of public IP resources.
         */
        publicIPs?: ResourceReferenceResponse[];
    }

    /**
     * Profile of the managed outbound IP resources of the managed cluster.
     */
    export interface ManagedClusterManagedOutboundIPProfileResponse {
        /**
         * The desired number of outbound IPs created/managed by Azure. Allowed values must be in the range of 1 to 16 (inclusive). The default value is 1. 
         */
        count?: number;
    }
    /**
     * managedClusterManagedOutboundIPProfileResponseProvideDefaults sets the appropriate defaults for ManagedClusterManagedOutboundIPProfileResponse
     */
    export function managedClusterManagedOutboundIPProfileResponseProvideDefaults(val: ManagedClusterManagedOutboundIPProfileResponse): ManagedClusterManagedOutboundIPProfileResponse {
        return {
            ...val,
            count: (val.count) ?? 1,
        };
    }

    /**
     * The metrics profile for the ManagedCluster.
     */
    export interface ManagedClusterMetricsProfileResponse {
        /**
         * The cost analysis configuration for the cluster
         */
        costAnalysis?: ManagedClusterCostAnalysisResponse;
    }

    /**
     * Profile of the managed cluster NAT gateway.
     */
    export interface ManagedClusterNATGatewayProfileResponse {
        /**
         * The effective outbound IP resources of the cluster NAT gateway.
         */
        effectiveOutboundIPs?: ResourceReferenceResponse[];
        /**
         * Desired outbound flow idle timeout in minutes. Allowed values are in the range of 4 to 120 (inclusive). The default value is 4 minutes.
         */
        idleTimeoutInMinutes?: number;
        /**
         * Profile of the managed outbound IP resources of the cluster NAT gateway.
         */
        managedOutboundIPProfile?: ManagedClusterManagedOutboundIPProfileResponse;
    }
    /**
     * managedClusterNATGatewayProfileResponseProvideDefaults sets the appropriate defaults for ManagedClusterNATGatewayProfileResponse
     */
    export function managedClusterNATGatewayProfileResponseProvideDefaults(val: ManagedClusterNATGatewayProfileResponse): ManagedClusterNATGatewayProfileResponse {
        return {
            ...val,
            idleTimeoutInMinutes: (val.idleTimeoutInMinutes) ?? 4,
            managedOutboundIPProfile: (val.managedOutboundIPProfile ? managedClusterManagedOutboundIPProfileResponseProvideDefaults(val.managedOutboundIPProfile) : undefined),
        };
    }

    export interface ManagedClusterNodeProvisioningProfileResponse {
        /**
         * Once the mode it set to Auto, it cannot be changed back to Manual.
         */
        mode?: string;
    }

    /**
     * Node resource group lockdown profile for a managed cluster.
     */
    export interface ManagedClusterNodeResourceGroupProfileResponse {
        /**
         * The restriction level applied to the cluster's node resource group
         */
        restrictionLevel?: string;
    }

    /**
     * The OIDC issuer profile of the Managed Cluster.
     */
    export interface ManagedClusterOIDCIssuerProfileResponse {
        /**
         * Whether the OIDC issuer is enabled.
         */
        enabled?: boolean;
        /**
         * The OIDC issuer url of the Managed Cluster.
         */
        issuerURL: string;
    }

    /**
     * See [disable AAD Pod Identity for a specific Pod/Application](https://azure.github.io/aad-pod-identity/docs/configure/application_exception/) for more details.
     */
    export interface ManagedClusterPodIdentityExceptionResponse {
        /**
         * The name of the pod identity exception.
         */
        name: string;
        /**
         * The namespace of the pod identity exception.
         */
        namespace: string;
        /**
         * The pod labels to match.
         */
        podLabels: {[key: string]: string};
    }

    /**
     * See [use AAD pod identity](https://docs.microsoft.com/azure/aks/use-azure-ad-pod-identity) for more details on pod identity integration.
     */
    export interface ManagedClusterPodIdentityProfileResponse {
        /**
         * Running in Kubenet is disabled by default due to the security related nature of AAD Pod Identity and the risks of IP spoofing. See [using Kubenet network plugin with AAD Pod Identity](https://docs.microsoft.com/azure/aks/use-azure-ad-pod-identity#using-kubenet-network-plugin-with-azure-active-directory-pod-managed-identities) for more information.
         */
        allowNetworkPluginKubenet?: boolean;
        /**
         * Whether the pod identity addon is enabled.
         */
        enabled?: boolean;
        /**
         * The pod identities to use in the cluster.
         */
        userAssignedIdentities?: ManagedClusterPodIdentityResponse[];
        /**
         * The pod identity exceptions to allow.
         */
        userAssignedIdentityExceptions?: ManagedClusterPodIdentityExceptionResponse[];
    }

    /**
     * An error response from the pod identity provisioning.
     */
    export interface ManagedClusterPodIdentityProvisioningErrorBodyResponse {
        /**
         * An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
         */
        code?: string;
        /**
         * A list of additional details about the error.
         */
        details?: ManagedClusterPodIdentityProvisioningErrorBodyResponse[];
        /**
         * A message describing the error, intended to be suitable for display in a user interface.
         */
        message?: string;
        /**
         * The target of the particular error. For example, the name of the property in error.
         */
        target?: string;
    }

    /**
     * An error response from the pod identity provisioning.
     */
    export interface ManagedClusterPodIdentityProvisioningErrorResponse {
        /**
         * Details about the error.
         */
        error?: ManagedClusterPodIdentityProvisioningErrorBodyResponse;
    }

    /**
     * Details about the pod identity assigned to the Managed Cluster.
     */
    export interface ManagedClusterPodIdentityResponse {
        /**
         * The binding selector to use for the AzureIdentityBinding resource.
         */
        bindingSelector?: string;
        /**
         * The user assigned identity details.
         */
        identity: UserAssignedIdentityResponse;
        /**
         * The name of the pod identity.
         */
        name: string;
        /**
         * The namespace of the pod identity.
         */
        namespace: string;
        provisioningInfo: ManagedClusterPodIdentityResponseProvisioningInfo;
        /**
         * The current provisioning state of the pod identity.
         */
        provisioningState: string;
    }

    export interface ManagedClusterPodIdentityResponseProvisioningInfo {
        /**
         * Pod identity assignment error (if any).
         */
        error?: ManagedClusterPodIdentityProvisioningErrorResponse;
    }

    /**
     * managed cluster properties for snapshot, these properties are read only.
     */
    export interface ManagedClusterPropertiesForSnapshotResponse {
        /**
         * Whether the cluster has enabled Kubernetes Role-Based Access Control or not.
         */
        enableRbac?: boolean;
        /**
         * The current kubernetes version.
         */
        kubernetesVersion?: string;
        /**
         * The current network profile.
         */
        networkProfile: NetworkProfileForSnapshotResponse;
        /**
         * The current managed cluster sku.
         */
        sku?: ManagedClusterSKUResponse;
    }

    /**
     * Parameters to be applied to the cluster-autoscaler when enabled
     */
    export interface ManagedClusterPropertiesResponseAutoScalerProfile {
        /**
         * Valid values are 'true' and 'false'
         */
        balanceSimilarNodeGroups?: string;
        /**
         * If set to true, all daemonset pods on empty nodes will be evicted before deletion of the node. If the daemonset pod cannot be evicted another node will be chosen for scaling. If set to false, the node will be deleted without ensuring that daemonset pods are deleted or evicted.
         */
        daemonsetEvictionForEmptyNodes?: boolean;
        /**
         * If set to true, all daemonset pods on occupied nodes will be evicted before deletion of the node. If the daemonset pod cannot be evicted another node will be chosen for scaling. If set to false, the node will be deleted without ensuring that daemonset pods are deleted or evicted.
         */
        daemonsetEvictionForOccupiedNodes?: boolean;
        /**
         * Available values are: 'least-waste', 'most-pods', 'priority', 'random'.
         */
        expander?: string;
        /**
         * If set to true, the resources used by daemonset will be taken into account when making scaling down decisions.
         */
        ignoreDaemonsetsUtilization?: boolean;
        /**
         * The default is 10.
         */
        maxEmptyBulkDelete?: string;
        /**
         * The default is 600.
         */
        maxGracefulTerminationSec?: string;
        /**
         * The default is '15m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
         */
        maxNodeProvisionTime?: string;
        /**
         * The default is 45. The maximum is 100 and the minimum is 0.
         */
        maxTotalUnreadyPercentage?: string;
        /**
         * For scenarios like burst/batch scale where you don't want CA to act before the kubernetes scheduler could schedule all the pods, you can tell CA to ignore unscheduled pods before they're a certain age. The default is '0s'. Values must be an integer followed by a unit ('s' for seconds, 'm' for minutes, 'h' for hours, etc).
         */
        newPodScaleUpDelay?: string;
        /**
         * This must be an integer. The default is 3.
         */
        okTotalUnreadyCount?: string;
        /**
         * The default is '10m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
         */
        scaleDownDelayAfterAdd?: string;
        /**
         * The default is the scan-interval. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
         */
        scaleDownDelayAfterDelete?: string;
        /**
         * The default is '3m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
         */
        scaleDownDelayAfterFailure?: string;
        /**
         * The default is '10m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
         */
        scaleDownUnneededTime?: string;
        /**
         * The default is '20m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
         */
        scaleDownUnreadyTime?: string;
        /**
         * The default is '0.5'.
         */
        scaleDownUtilizationThreshold?: string;
        /**
         * The default is '10'. Values must be an integer number of seconds.
         */
        scanInterval?: string;
        /**
         * The default is true.
         */
        skipNodesWithLocalStorage?: string;
        /**
         * The default is true.
         */
        skipNodesWithSystemPods?: string;
    }

    /**
     * The SKU of a Managed Cluster.
     */
    export interface ManagedClusterSKUResponse {
        /**
         * The name of a managed cluster SKU.
         */
        name?: string;
        /**
         * If not specified, the default is 'Free'. See [AKS Pricing Tier](https://learn.microsoft.com/azure/aks/free-standard-pricing-tiers) for more details.
         */
        tier?: string;
    }

    /**
     * Microsoft Defender settings for the security profile.
     */
    export interface ManagedClusterSecurityProfileDefenderResponse {
        /**
         * Resource ID of the Log Analytics workspace to be associated with Microsoft Defender. When Microsoft Defender is enabled, this field is required and must be a valid workspace resource ID. When Microsoft Defender is disabled, leave the field empty.
         */
        logAnalyticsWorkspaceResourceId?: string;
        /**
         * Microsoft Defender threat detection for Cloud settings for the security profile.
         */
        securityMonitoring?: ManagedClusterSecurityProfileDefenderSecurityMonitoringResponse;
    }

    /**
     * Microsoft Defender settings for the security profile threat detection.
     */
    export interface ManagedClusterSecurityProfileDefenderSecurityMonitoringResponse {
        /**
         * Whether to enable Defender threat detection
         */
        enabled?: boolean;
    }

    /**
     * Image Cleaner removes unused images from nodes, freeing up disk space and helping to reduce attack surface area. Here are settings for the security profile.
     */
    export interface ManagedClusterSecurityProfileImageCleanerResponse {
        /**
         * Whether to enable Image Cleaner on AKS cluster.
         */
        enabled?: boolean;
        /**
         * Image Cleaner scanning interval in hours.
         */
        intervalHours?: number;
    }

    /**
     * Image integrity related settings for the security profile.
     */
    export interface ManagedClusterSecurityProfileImageIntegrityResponse {
        /**
         * Whether to enable image integrity. The default value is false.
         */
        enabled?: boolean;
    }

    /**
     * Node Restriction settings for the security profile.
     */
    export interface ManagedClusterSecurityProfileNodeRestrictionResponse {
        /**
         * Whether to enable Node Restriction
         */
        enabled?: boolean;
    }

    /**
     * Security profile for the container service cluster.
     */
    export interface ManagedClusterSecurityProfileResponse {
        /**
         * Azure Key Vault [key management service](https://kubernetes.io/docs/tasks/administer-cluster/kms-provider/) settings for the security profile.
         */
        azureKeyVaultKms?: AzureKeyVaultKmsResponse;
        /**
         * A list of up to 10 base64 encoded CAs that will be added to the trust store on nodes with the Custom CA Trust feature enabled. For more information see [Custom CA Trust Certificates](https://learn.microsoft.com/en-us/azure/aks/custom-certificate-authority)
         */
        customCATrustCertificates?: string[];
        /**
         * Microsoft Defender settings for the security profile.
         */
        defender?: ManagedClusterSecurityProfileDefenderResponse;
        /**
         * Image Cleaner settings for the security profile.
         */
        imageCleaner?: ManagedClusterSecurityProfileImageCleanerResponse;
        /**
         * Image integrity is a feature that works with Azure Policy to verify image integrity by signature. This will not have any effect unless Azure Policy is applied to enforce image signatures. See https://aka.ms/aks/image-integrity for how to use this feature via policy.
         */
        imageIntegrity?: ManagedClusterSecurityProfileImageIntegrityResponse;
        /**
         * [Node Restriction](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#noderestriction) settings for the security profile.
         */
        nodeRestriction?: ManagedClusterSecurityProfileNodeRestrictionResponse;
        /**
         * Workload identity settings for the security profile. Workload identity enables Kubernetes applications to access Azure cloud resources securely with Azure AD. See https://aka.ms/aks/wi for more details.
         */
        workloadIdentity?: ManagedClusterSecurityProfileWorkloadIdentityResponse;
    }
    /**
     * managedClusterSecurityProfileResponseProvideDefaults sets the appropriate defaults for ManagedClusterSecurityProfileResponse
     */
    export function managedClusterSecurityProfileResponseProvideDefaults(val: ManagedClusterSecurityProfileResponse): ManagedClusterSecurityProfileResponse {
        return {
            ...val,
            azureKeyVaultKms: (val.azureKeyVaultKms ? azureKeyVaultKmsResponseProvideDefaults(val.azureKeyVaultKms) : undefined),
        };
    }

    /**
     * Workload identity settings for the security profile.
     */
    export interface ManagedClusterSecurityProfileWorkloadIdentityResponse {
        /**
         * Whether to enable workload identity.
         */
        enabled?: boolean;
    }

    /**
     * Information about a service principal identity for the cluster to use for manipulating Azure APIs.
     */
    export interface ManagedClusterServicePrincipalProfileResponse {
        /**
         * The ID for the service principal.
         */
        clientId: string;
        /**
         * The secret password associated with the service principal in plain text.
         */
        secret?: string;
    }

    /**
     * AzureBlob CSI Driver settings for the storage profile.
     */
    export interface ManagedClusterStorageProfileBlobCSIDriverResponse {
        /**
         * Whether to enable AzureBlob CSI Driver. The default value is false.
         */
        enabled?: boolean;
    }

    /**
     * AzureDisk CSI Driver settings for the storage profile.
     */
    export interface ManagedClusterStorageProfileDiskCSIDriverResponse {
        /**
         * Whether to enable AzureDisk CSI Driver. The default value is true.
         */
        enabled?: boolean;
        /**
         * The version of AzureDisk CSI Driver. The default value is v1.
         */
        version?: string;
    }

    /**
     * AzureFile CSI Driver settings for the storage profile.
     */
    export interface ManagedClusterStorageProfileFileCSIDriverResponse {
        /**
         * Whether to enable AzureFile CSI Driver. The default value is true.
         */
        enabled?: boolean;
    }

    /**
     * Storage profile for the container service cluster.
     */
    export interface ManagedClusterStorageProfileResponse {
        /**
         * AzureBlob CSI Driver settings for the storage profile.
         */
        blobCSIDriver?: ManagedClusterStorageProfileBlobCSIDriverResponse;
        /**
         * AzureDisk CSI Driver settings for the storage profile.
         */
        diskCSIDriver?: ManagedClusterStorageProfileDiskCSIDriverResponse;
        /**
         * AzureFile CSI Driver settings for the storage profile.
         */
        fileCSIDriver?: ManagedClusterStorageProfileFileCSIDriverResponse;
        /**
         * Snapshot Controller settings for the storage profile.
         */
        snapshotController?: ManagedClusterStorageProfileSnapshotControllerResponse;
    }

    /**
     * Snapshot Controller settings for the storage profile.
     */
    export interface ManagedClusterStorageProfileSnapshotControllerResponse {
        /**
         * Whether to enable Snapshot Controller. The default value is true.
         */
        enabled?: boolean;
    }

    /**
     * Profile for Windows VMs in the managed cluster.
     */
    export interface ManagedClusterWindowsProfileResponse {
        /**
         * Specifies the password of the administrator account. <br><br> **Minimum-length:** 8 characters <br><br> **Max-length:** 123 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!"
         */
        adminPassword?: string;
        /**
         * Specifies the name of the administrator account. <br><br> **Restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length:** 1 character <br><br> **Max-length:** 20 characters
         */
        adminUsername: string;
        /**
         * For more details on CSI proxy, see the [CSI proxy GitHub repo](https://github.com/kubernetes-csi/csi-proxy).
         */
        enableCSIProxy?: boolean;
        /**
         * The Windows gMSA Profile in the Managed Cluster.
         */
        gmsaProfile?: WindowsGmsaProfileResponse;
        /**
         * The license type to use for Windows VMs. See [Azure Hybrid User Benefits](https://azure.microsoft.com/pricing/hybrid-benefit/faq/) for more details.
         */
        licenseType?: string;
    }

    /**
     * KEDA (Kubernetes Event-driven Autoscaling) settings for the workload auto-scaler profile.
     */
    export interface ManagedClusterWorkloadAutoScalerProfileKedaResponse {
        /**
         * Whether to enable KEDA.
         */
        enabled: boolean;
    }

    /**
     * Workload Auto-scaler profile for the managed cluster.
     */
    export interface ManagedClusterWorkloadAutoScalerProfileResponse {
        /**
         * KEDA (Kubernetes Event-driven Autoscaling) settings for the workload auto-scaler profile.
         */
        keda?: ManagedClusterWorkloadAutoScalerProfileKedaResponse;
        verticalPodAutoscaler?: ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponse;
    }
    /**
     * managedClusterWorkloadAutoScalerProfileResponseProvideDefaults sets the appropriate defaults for ManagedClusterWorkloadAutoScalerProfileResponse
     */
    export function managedClusterWorkloadAutoScalerProfileResponseProvideDefaults(val: ManagedClusterWorkloadAutoScalerProfileResponse): ManagedClusterWorkloadAutoScalerProfileResponse {
        return {
            ...val,
            verticalPodAutoscaler: (val.verticalPodAutoscaler ? managedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponseProvideDefaults(val.verticalPodAutoscaler) : undefined),
        };
    }

    export interface ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponse {
        /**
         * Whether VPA add-on is enabled and configured to scale AKS-managed add-ons.
         */
        addonAutoscaling?: string;
        /**
         * Whether to enable VPA add-on in cluster. Default value is false.
         */
        enabled: boolean;
    }
    /**
     * managedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponseProvideDefaults sets the appropriate defaults for ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponse
     */
    export function managedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponseProvideDefaults(val: ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponse): ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerResponse {
        return {
            ...val,
            addonAutoscaling: (val.addonAutoscaling) ?? "Disabled",
            enabled: (val.enabled) ?? false,
        };
    }

    /**
     * Specifications on number of machines.
     */
    export interface ManualScaleProfileResponse {
        /**
         * Number of nodes.
         */
        count?: number;
        /**
         * The list of allowed vm sizes. AKS will use the first available one when scaling. If a VM size is unavailable (e.g. due to quota or regional capacity reasons), AKS will use the next size.
         */
        sizes?: string[];
    }

    /**
     * This addon can be used to configure network monitoring and generate network monitoring data in Prometheus format
     */
    export interface NetworkMonitoringResponse {
        /**
         * Enable or disable the network monitoring plugin on the cluster
         */
        enabled?: boolean;
    }

    /**
     * network profile for managed cluster snapshot, these properties are read only.
     */
    export interface NetworkProfileForSnapshotResponse {
        /**
         * loadBalancerSku for managed cluster snapshot.
         */
        loadBalancerSku?: string;
        /**
         * networkMode for managed cluster snapshot.
         */
        networkMode?: string;
        /**
         * networkPlugin for managed cluster snapshot.
         */
        networkPlugin?: string;
        /**
         * NetworkPluginMode for managed cluster snapshot.
         */
        networkPluginMode?: string;
        /**
         * networkPolicy for managed cluster snapshot.
         */
        networkPolicy?: string;
    }

    /**
     * The port range.
     */
    export interface PortRangeResponse {
        /**
         * The maximum port that is included in the range. It should be ranged from 1 to 65535, and be greater than or equal to portStart.
         */
        portEnd?: number;
        /**
         * The minimum port that is included in the range. It should be ranged from 1 to 65535, and be less than or equal to portEnd.
         */
        portStart?: number;
        /**
         * The network protocol of the port.
         */
        protocol?: string;
    }

    /**
     * Describes the Power State of the cluster
     */
    export interface PowerStateResponse {
        /**
         * Tells whether the cluster is Running or Stopped
         */
        code?: string;
    }

    /**
     * Private endpoint which a connection belongs to.
     */
    export interface PrivateEndpointResponse {
        /**
         * The resource ID of the private endpoint
         */
        id?: string;
    }

    /**
     * A private link resource
     */
    export interface PrivateLinkResourceResponse {
        /**
         * The group ID of the resource.
         */
        groupId?: string;
        /**
         * The ID of the private link resource.
         */
        id?: string;
        /**
         * The name of the private link resource.
         */
        name?: string;
        /**
         * The private link service ID of the resource, this field is exposed only to NRP internally.
         */
        privateLinkServiceID: string;
        /**
         * The RequiredMembers of the resource
         */
        requiredMembers?: string[];
        /**
         * The resource type.
         */
        type?: string;
    }

    /**
     * The state of a private link service connection.
     */
    export interface PrivateLinkServiceConnectionStateResponse {
        /**
         * The private link service connection description.
         */
        description?: string;
        /**
         * The private link service connection status.
         */
        status?: string;
    }

    /**
     * For schedules like: 'recur every month on the first Monday' or 'recur every 3 months on last Friday'.
     */
    export interface RelativeMonthlyScheduleResponse {
        /**
         * Specifies on which day of the week the maintenance occurs.
         */
        dayOfWeek: string;
        /**
         * Specifies the number of months between each set of occurrences.
         */
        intervalMonths: number;
        /**
         * Specifies on which instance of the allowed days specified in daysOfWeek the maintenance occurs.
         */
        weekIndex: string;
    }

    /**
     * A reference to an Azure resource.
     */
    export interface ResourceReferenceResponse {
        /**
         * The fully qualified Azure resource id.
         */
        id?: string;
    }

    /**
     * Specifications on how to scale a VirtualMachines agent pool.
     */
    export interface ScaleProfileResponse {
        /**
         * Specifications on how to scale the VirtualMachines agent pool to a fixed size.
         */
        manual?: ManualScaleProfileResponse[];
    }

    /**
     * One and only one of the schedule types should be specified. Choose either 'daily', 'weekly', 'absoluteMonthly' or 'relativeMonthly' for your maintenance schedule.
     */
    export interface ScheduleResponse {
        /**
         * For schedules like: 'recur every month on the 15th' or 'recur every 3 months on the 20th'.
         */
        absoluteMonthly?: AbsoluteMonthlyScheduleResponse;
        /**
         * For schedules like: 'recur every day' or 'recur every 3 days'.
         */
        daily?: DailyScheduleResponse;
        /**
         * For schedules like: 'recur every month on the first Monday' or 'recur every 3 months on last Friday'.
         */
        relativeMonthly?: RelativeMonthlyScheduleResponse;
        /**
         * For schedules like: 'recur every Monday' or 'recur every 3 weeks on Wednesday'.
         */
        weekly?: WeeklyScheduleResponse;
    }

    /**
     * Service mesh profile for a managed cluster.
     */
    export interface ServiceMeshProfileResponse {
        /**
         * Istio service mesh configuration.
         */
        istio?: IstioServiceMeshResponse;
        /**
         * Mode of the service mesh.
         */
        mode: string;
    }

    /**
     * Sysctl settings for Linux agent nodes.
     */
    export interface SysctlConfigResponse {
        /**
         * Sysctl setting fs.aio-max-nr.
         */
        fsAioMaxNr?: number;
        /**
         * Sysctl setting fs.file-max.
         */
        fsFileMax?: number;
        /**
         * Sysctl setting fs.inotify.max_user_watches.
         */
        fsInotifyMaxUserWatches?: number;
        /**
         * Sysctl setting fs.nr_open.
         */
        fsNrOpen?: number;
        /**
         * Sysctl setting kernel.threads-max.
         */
        kernelThreadsMax?: number;
        /**
         * Sysctl setting net.core.netdev_max_backlog.
         */
        netCoreNetdevMaxBacklog?: number;
        /**
         * Sysctl setting net.core.optmem_max.
         */
        netCoreOptmemMax?: number;
        /**
         * Sysctl setting net.core.rmem_default.
         */
        netCoreRmemDefault?: number;
        /**
         * Sysctl setting net.core.rmem_max.
         */
        netCoreRmemMax?: number;
        /**
         * Sysctl setting net.core.somaxconn.
         */
        netCoreSomaxconn?: number;
        /**
         * Sysctl setting net.core.wmem_default.
         */
        netCoreWmemDefault?: number;
        /**
         * Sysctl setting net.core.wmem_max.
         */
        netCoreWmemMax?: number;
        /**
         * Sysctl setting net.ipv4.ip_local_port_range.
         */
        netIpv4IpLocalPortRange?: string;
        /**
         * Sysctl setting net.ipv4.neigh.default.gc_thresh1.
         */
        netIpv4NeighDefaultGcThresh1?: number;
        /**
         * Sysctl setting net.ipv4.neigh.default.gc_thresh2.
         */
        netIpv4NeighDefaultGcThresh2?: number;
        /**
         * Sysctl setting net.ipv4.neigh.default.gc_thresh3.
         */
        netIpv4NeighDefaultGcThresh3?: number;
        /**
         * Sysctl setting net.ipv4.tcp_fin_timeout.
         */
        netIpv4TcpFinTimeout?: number;
        /**
         * Sysctl setting net.ipv4.tcp_keepalive_probes.
         */
        netIpv4TcpKeepaliveProbes?: number;
        /**
         * Sysctl setting net.ipv4.tcp_keepalive_time.
         */
        netIpv4TcpKeepaliveTime?: number;
        /**
         * Sysctl setting net.ipv4.tcp_max_syn_backlog.
         */
        netIpv4TcpMaxSynBacklog?: number;
        /**
         * Sysctl setting net.ipv4.tcp_max_tw_buckets.
         */
        netIpv4TcpMaxTwBuckets?: number;
        /**
         * Sysctl setting net.ipv4.tcp_tw_reuse.
         */
        netIpv4TcpTwReuse?: boolean;
        /**
         * Sysctl setting net.ipv4.tcp_keepalive_intvl.
         */
        netIpv4TcpkeepaliveIntvl?: number;
        /**
         * Sysctl setting net.netfilter.nf_conntrack_buckets.
         */
        netNetfilterNfConntrackBuckets?: number;
        /**
         * Sysctl setting net.netfilter.nf_conntrack_max.
         */
        netNetfilterNfConntrackMax?: number;
        /**
         * Sysctl setting vm.max_map_count.
         */
        vmMaxMapCount?: number;
        /**
         * Sysctl setting vm.swappiness.
         */
        vmSwappiness?: number;
        /**
         * Sysctl setting vm.vfs_cache_pressure.
         */
        vmVfsCachePressure?: number;
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
     * Time in a week.
     */
    export interface TimeInWeekResponse {
        /**
         * The day of the week.
         */
        day?: string;
        /**
         * Each integer hour represents a time range beginning at 0m after the hour ending at the next hour (non-inclusive). 0 corresponds to 00:00 UTC, 23 corresponds to 23:00 UTC. Specifying [0, 1] means the 00:00 - 02:00 UTC time range.
         */
        hourSlots?: number[];
    }

    /**
     * For example, between 2021-05-25T13:00:00Z and 2021-05-25T14:00:00Z.
     */
    export interface TimeSpanResponse {
        /**
         * The end of a time span
         */
        end?: string;
        /**
         * The start of a time span
         */
        start?: string;
    }

    /**
     * Settings for overrides when upgrading a cluster.
     */
    export interface UpgradeOverrideSettingsResponse {
        /**
         * Whether to force upgrade the cluster. Note that this option instructs upgrade operation to bypass upgrade protections such as checking for deprecated API usage. Enable this option only with caution.
         */
        forceUpgrade?: boolean;
        /**
         * Until when the overrides are effective. Note that this only matches the start time of an upgrade, and the effectiveness won't change once an upgrade starts even if the `until` expires as upgrade proceeds. This field is not set by default. It must be set for the overrides to take effect.
         */
        until?: string;
    }

    /**
     * Details about a user assigned identity.
     */
    export interface UserAssignedIdentityResponse {
        /**
         * The client ID of the user assigned identity.
         */
        clientId?: string;
        /**
         * The object ID of the user assigned identity.
         */
        objectId?: string;
        /**
         * The resource ID of the user assigned identity.
         */
        resourceId?: string;
    }

    /**
     * Current status on a group of nodes of the same vm size.
     */
    export interface VirtualMachineNodesResponse {
        /**
         * Number of nodes.
         */
        count?: number;
        /**
         * The VM size of the agents used to host this group of nodes.
         */
        size?: string;
    }

    /**
     * Specifications on VirtualMachines agent pool.
     */
    export interface VirtualMachinesProfileResponse {
        /**
         * Specifications on how to scale a VirtualMachines agent pool.
         */
        scale?: ScaleProfileResponse;
    }

    /**
     * For schedules like: 'recur every Monday' or 'recur every 3 weeks on Wednesday'.
     */
    export interface WeeklyScheduleResponse {
        /**
         * Specifies on which day of the week the maintenance occurs.
         */
        dayOfWeek: string;
        /**
         * Specifies the number of weeks between each set of occurrences.
         */
        intervalWeeks: number;
    }

    /**
     * Windows gMSA Profile in the managed cluster.
     */
    export interface WindowsGmsaProfileResponse {
        /**
         * Specifies the DNS server for Windows gMSA. <br><br> Set it to empty if you have configured the DNS server in the vnet which is used to create the managed cluster.
         */
        dnsServer?: string;
        /**
         * Specifies whether to enable Windows gMSA in the managed cluster.
         */
        enabled?: boolean;
        /**
         * Specifies the root domain name for Windows gMSA. <br><br> Set it to empty if you have configured the DNS server in the vnet which is used to create the managed cluster.
         */
        rootDomainName?: string;
    }
