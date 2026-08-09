import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Access profile for the Fleet hub API server.
 */
export interface APIServerAccessProfileArgs {
    /**
     * Whether to create the Fleet hub as a private cluster or not.
     */
    enablePrivateCluster?: pulumi.Input<boolean | undefined>;
    /**
     * Whether to enable apiserver vnet integration for the Fleet hub or not.
     */
    enableVnetIntegration?: pulumi.Input<boolean | undefined>;
    /**
     * The subnet to be used when apiserver vnet integration is enabled. It is required when creating a new Fleet with BYO vnet.
     */
    subnetId?: pulumi.Input<string | undefined>;
}

/**
 * For schedules like: 'recur every month on the 15th' or 'recur every 3 months on the 20th'.
 */
export interface AbsoluteMonthlyScheduleArgs {
    /**
     * The date of the month.
     */
    dayOfMonth: pulumi.Input<number>;
    /**
     * Specifies the number of months between each set of occurrences.
     */
    intervalMonths: pulumi.Input<number>;
}

/**
 * Advanced Networking profile for enabling observability and security feature suite on a cluster. For more information see aka.ms/aksadvancednetworking.
 */
export interface AdvancedNetworkingArgs {
    /**
     * Indicates the enablement of Advanced Networking functionalities of observability and security on AKS clusters. When this is set to true, all observability and security features will be set to enabled unless explicitly disabled. If not specified, the default is false.
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * Observability profile to enable advanced network metrics and flow logs with historical contexts.
     */
    observability?: pulumi.Input<AdvancedNetworkingObservabilityArgs | undefined>;
    /**
     * Security profile to enable security features on cilium based cluster.
     */
    security?: pulumi.Input<AdvancedNetworkingSecurityArgs | undefined>;
}

/**
 * Observability profile to enable advanced network metrics and flow logs with historical contexts.
 */
export interface AdvancedNetworkingObservabilityArgs {
    /**
     * Indicates the enablement of Advanced Networking observability functionalities on clusters.
     */
    enabled?: pulumi.Input<boolean | undefined>;
}

/**
 * Security profile to enable security features on cilium based cluster.
 */
export interface AdvancedNetworkingSecurityArgs {
    /**
     * Enable advanced network policies. This allows users to configure Layer 7 network policies (FQDN, HTTP, Kafka). Policies themselves must be configured via the Cilium Network Policy resources, see https://docs.cilium.io/en/latest/security/policy/index.html. This can be enabled only on cilium-based clusters. If not specified, the default value is FQDN if security.enabled is set to true.
     */
    advancedNetworkPolicies?: pulumi.Input<string | enums.AdvancedNetworkPolicies | undefined>;
    /**
     * This feature allows user to configure network policy based on DNS (FQDN) names. It can be enabled only on cilium based clusters. If not specified, the default is false.
     */
    enabled?: pulumi.Input<boolean | undefined>;
}

/**
 * Profile of the managed cluster gateway agent pool.
 */
export interface AgentPoolGatewayProfileArgs {
    /**
     * The Gateway agent pool associates one public IPPrefix for each static egress gateway to provide public egress. The size of Public IPPrefix should be selected by the user. Each node in the agent pool is assigned with one IP from the IPPrefix. The IPPrefix size thus serves as a cap on the size of the Gateway agent pool. Due to Azure public IPPrefix size limitation, the valid value range is [28, 31] (/31 = 2 nodes/IPs, /30 = 4 nodes/IPs, /29 = 8 nodes/IPs, /28 = 16 nodes/IPs). The default value is 31.
     */
    publicIPPrefixSize?: pulumi.Input<number | undefined>;
}
/**
 * agentPoolGatewayProfileArgsProvideDefaults sets the appropriate defaults for AgentPoolGatewayProfileArgs
 */
export function agentPoolGatewayProfileArgsProvideDefaults(val: AgentPoolGatewayProfileArgs): AgentPoolGatewayProfileArgs {
    return {
        ...val,
        publicIPPrefixSize: (val.publicIPPrefixSize) ?? 31,
    };
}

/**
 * Network settings of an agent pool.
 */
export interface AgentPoolNetworkProfileArgs {
    /**
     * The port ranges that are allowed to access. The specified ranges are allowed to overlap.
     */
    allowedHostPorts?: pulumi.Input<pulumi.Input<PortRangeArgs>[] | undefined>;
    /**
     * The IDs of the application security groups which agent pool will associate when created.
     */
    applicationSecurityGroups?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * IPTags of instance-level public IPs.
     */
    nodePublicIPTags?: pulumi.Input<pulumi.Input<IPTagArgs>[] | undefined>;
}

/**
 * The security settings of an agent pool.
 */
export interface AgentPoolSecurityProfileArgs {
    /**
     * Secure Boot is a feature of Trusted Launch which ensures that only signed operating systems and drivers can boot. For more details, see aka.ms/aks/trustedlaunch.  If not specified, the default is false.
     */
    enableSecureBoot?: pulumi.Input<boolean | undefined>;
    /**
     * vTPM is a Trusted Launch feature for configuring a dedicated secure vault for keys and measurements held locally on the node. For more details, see aka.ms/aks/trustedlaunch. If not specified, the default is false.
     */
    enableVTPM?: pulumi.Input<boolean | undefined>;
    /**
     * SSH access method of an agent pool.
     */
    sshAccess?: pulumi.Input<string | enums.AgentPoolSSHAccess | undefined>;
}

/**
 * Settings for upgrading an agentpool
 */
export interface AgentPoolUpgradeSettingsArgs {
    /**
     * The drain timeout for a node. The amount of time (in minutes) to wait on eviction of pods and graceful termination per node. This eviction wait time honors waiting on pod disruption budgets. If this time is exceeded, the upgrade fails. If not specified, the default is 30 minutes.
     */
    drainTimeoutInMinutes?: pulumi.Input<number | undefined>;
    /**
     * The maximum number or percentage of nodes that are surged during upgrade. This can either be set to an integer (e.g. '5') or a percentage (e.g. '50%'). If a percentage is specified, it is the percentage of the total agent pool size at the time of the upgrade. For percentages, fractional nodes are rounded up. If not specified, the default is 10%. For more information, including best practices, see: https://learn.microsoft.com/en-us/azure/aks/upgrade-cluster
     */
    maxSurge?: pulumi.Input<string | undefined>;
    /**
     * The maximum number or percentage of nodes that can be simultaneously unavailable during upgrade. This can either be set to an integer (e.g. '1') or a percentage (e.g. '5%'). If a percentage is specified, it is the percentage of the total agent pool size at the time of the upgrade. For percentages, fractional nodes are rounded up. If not specified, the default is 0. For more information, including best practices, see: https://learn.microsoft.com/en-us/azure/aks/upgrade-cluster
     */
    maxUnavailable?: pulumi.Input<string | undefined>;
    /**
     * The soak duration for a node. The amount of time (in minutes) to wait after draining a node and before reimaging it and moving on to next node. If not specified, the default is 0 minutes.
     */
    nodeSoakDurationInMinutes?: pulumi.Input<number | undefined>;
    /**
     * Defines the behavior for undrainable nodes during upgrade. The most common cause of undrainable nodes is Pod Disruption Budgets (PDBs), but other issues, such as pod termination grace period is exceeding the remaining per-node drain timeout or pod is still being in a running state, can also cause undrainable nodes.
     */
    undrainableNodeBehavior?: pulumi.Input<string | enums.UndrainableNodeBehavior | undefined>;
}

/**
 * The Windows agent pool's specific profile.
 */
export interface AgentPoolWindowsProfileArgs {
    /**
     * Whether to disable OutboundNAT in windows nodes. The default value is false. Outbound NAT can only be disabled if the cluster outboundType is NAT Gateway and the Windows agent pool does not have node public IP enabled.
     */
    disableOutboundNat?: pulumi.Input<boolean | undefined>;
}

/**
 * Agent profile for the Fleet hub.
 */
export interface AgentProfileArgs {
    /**
     * The ID of the subnet which the Fleet hub node will join on startup. If this is not specified, a vnet and subnet will be generated and used.
     */
    subnetId?: pulumi.Input<string | undefined>;
    /**
     * The virtual machine size of the Fleet hub.
     */
    vmSize?: pulumi.Input<string | undefined>;
}

/**
 * The node image upgrade to be applied to the target clusters in auto upgrade.
 */
export interface AutoUpgradeNodeImageSelectionArgs {
    /**
     * The node image upgrade type.
     */
    type: pulumi.Input<string | enums.AutoUpgradeNodeImageSelectionType>;
}

/**
 * Azure Key Vault key management service settings for the security profile.
 */
export interface AzureKeyVaultKmsArgs {
    /**
     * Whether to enable Azure Key Vault key management service. The default is false.
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * Identifier of Azure Key Vault key. See [key identifier format](https://docs.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates#vault-name-and-object-name) for more details. When Azure Key Vault key management service is enabled, this field is required and must be a valid key identifier. When Azure Key Vault key management service is disabled, leave the field empty.
     */
    keyId?: pulumi.Input<string | undefined>;
    /**
     * Network access of the key vault. Network access of key vault. The possible values are `Public` and `Private`. `Public` means the key vault allows public access from all networks. `Private` means the key vault disables public access and enables private link. The default value is `Public`.
     */
    keyVaultNetworkAccess?: pulumi.Input<string | enums.KeyVaultNetworkAccessTypes | undefined>;
    /**
     * Resource ID of key vault. When keyVaultNetworkAccess is `Private`, this field is required and must be a valid resource ID. When keyVaultNetworkAccess is `Public`, leave the field empty.
     */
    keyVaultResourceId?: pulumi.Input<string | undefined>;
}
/**
 * azureKeyVaultKmsArgsProvideDefaults sets the appropriate defaults for AzureKeyVaultKmsArgs
 */
export function azureKeyVaultKmsArgsProvideDefaults(val: AzureKeyVaultKmsArgs): AzureKeyVaultKmsArgs {
    return {
        ...val,
        keyVaultNetworkAccess: (val.keyVaultNetworkAccess) ?? "Public",
    };
}

/**
 * Settings for upgrading a cluster.
 */
export interface ClusterUpgradeSettingsArgs {
    /**
     * Settings for overrides.
     */
    overrideSettings?: pulumi.Input<UpgradeOverrideSettingsArgs | undefined>;
}

/**
 * Profile for Linux VMs in the container service cluster.
 */
export interface ContainerServiceLinuxProfileArgs {
    /**
     * The administrator username to use for Linux VMs.
     */
    adminUsername: pulumi.Input<string>;
    /**
     * The SSH configuration for Linux-based VMs running on Azure.
     */
    ssh: pulumi.Input<ContainerServiceSshConfigurationArgs>;
}

/**
 * Profile of network configuration.
 */
export interface ContainerServiceNetworkProfileArgs {
    /**
     * Advanced Networking profile for enabling observability and security feature suite on a cluster. For more information see aka.ms/aksadvancednetworking.
     */
    advancedNetworking?: pulumi.Input<AdvancedNetworkingArgs | undefined>;
    /**
     * An IP address assigned to the Kubernetes DNS service. It must be within the Kubernetes service address range specified in serviceCidr.
     */
    dnsServiceIP?: pulumi.Input<string | undefined>;
    /**
     * The IP families used to specify IP versions available to the cluster. IP families are used to determine single-stack or dual-stack clusters. For single-stack, the expected value is IPv4. For dual-stack, the expected values are IPv4 and IPv6.
     */
    ipFamilies?: pulumi.Input<pulumi.Input<string | enums.IpFamily>[] | undefined>;
    /**
     * Profile of the cluster load balancer.
     */
    loadBalancerProfile?: pulumi.Input<ManagedClusterLoadBalancerProfileArgs | undefined>;
    /**
     * The load balancer sku for the managed cluster. The default is 'standard'. See [Azure Load Balancer SKUs](https://docs.microsoft.com/azure/load-balancer/skus) for more information about the differences between load balancer SKUs.
     */
    loadBalancerSku?: pulumi.Input<string | enums.LoadBalancerSku | undefined>;
    /**
     * Profile of the cluster NAT gateway.
     */
    natGatewayProfile?: pulumi.Input<ManagedClusterNATGatewayProfileArgs | undefined>;
    /**
     * Network dataplane used in the Kubernetes cluster.
     */
    networkDataplane?: pulumi.Input<string | enums.NetworkDataplane | undefined>;
    /**
     * The network mode Azure CNI is configured with. This cannot be specified if networkPlugin is anything other than 'azure'.
     */
    networkMode?: pulumi.Input<string | enums.NetworkMode | undefined>;
    /**
     * Network plugin used for building the Kubernetes network.
     */
    networkPlugin?: pulumi.Input<string | enums.NetworkPlugin | undefined>;
    /**
     * The mode the network plugin should use.
     */
    networkPluginMode?: pulumi.Input<string | enums.NetworkPluginMode | undefined>;
    /**
     * Network policy used for building the Kubernetes network.
     */
    networkPolicy?: pulumi.Input<string | enums.NetworkPolicy | undefined>;
    /**
     * The outbound (egress) routing method. This can only be set at cluster creation time and cannot be changed later. For more information see [egress outbound type](https://docs.microsoft.com/azure/aks/egress-outboundtype).
     */
    outboundType?: pulumi.Input<string | enums.OutboundType | undefined>;
    /**
     * A CIDR notation IP range from which to assign pod IPs when kubenet is used.
     */
    podCidr?: pulumi.Input<string | undefined>;
    /**
     * The CIDR notation IP ranges from which to assign pod IPs. One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking.
     */
    podCidrs?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges.
     */
    serviceCidr?: pulumi.Input<string | undefined>;
    /**
     * The CIDR notation IP ranges from which to assign service cluster IPs. One IPv4 CIDR is expected for single-stack networking. Two CIDRs, one for each IP family (IPv4/IPv6), is expected for dual-stack networking. They must not overlap with any Subnet IP ranges.
     */
    serviceCidrs?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The profile for Static Egress Gateway addon. For more details about Static Egress Gateway, see https://aka.ms/aks/static-egress-gateway.
     */
    staticEgressGatewayProfile?: pulumi.Input<ManagedClusterStaticEgressGatewayProfileArgs | undefined>;
}
/**
 * containerServiceNetworkProfileArgsProvideDefaults sets the appropriate defaults for ContainerServiceNetworkProfileArgs
 */
export function containerServiceNetworkProfileArgsProvideDefaults(val: ContainerServiceNetworkProfileArgs): ContainerServiceNetworkProfileArgs {
    return {
        ...val,
        dnsServiceIP: (val.dnsServiceIP) ?? "10.0.0.10",
        loadBalancerProfile: pulumi.output(val.loadBalancerProfile).apply(v => v === undefined ? undefined : managedClusterLoadBalancerProfileArgsProvideDefaults(v)),
        natGatewayProfile: pulumi.output(val.natGatewayProfile).apply(v => v === undefined ? undefined : managedClusterNATGatewayProfileArgsProvideDefaults(v)),
        outboundType: (val.outboundType) ?? "loadBalancer",
        podCidr: (val.podCidr) ?? "10.244.0.0/16",
        serviceCidr: (val.serviceCidr) ?? "10.0.0.0/16",
    };
}

/**
 * SSH configuration for Linux-based VMs running on Azure.
 */
export interface ContainerServiceSshConfigurationArgs {
    /**
     * The list of SSH public keys used to authenticate with Linux-based VMs. A maximum of 1 key may be specified.
     */
    publicKeys: pulumi.Input<pulumi.Input<ContainerServiceSshPublicKeyArgs>[]>;
}

/**
 * Contains information about SSH certificate public key data.
 */
export interface ContainerServiceSshPublicKeyArgs {
    /**
     * Certificate public key used to authenticate with VMs through SSH. The certificate must be in PEM format with or without headers.
     */
    keyData: pulumi.Input<string>;
}

/**
 * Data used when creating a target resource from a source resource.
 */
export interface CreationDataArgs {
    /**
     * This is the ARM ID of the source object to be used to create the target object.
     */
    sourceResourceId?: pulumi.Input<string | undefined>;
}

/**
 * For schedules like: 'recur every day' or 'recur every 3 days'.
 */
export interface DailyScheduleArgs {
    /**
     * Specifies the number of days between each set of occurrences.
     */
    intervalDays: pulumi.Input<number>;
}

/**
 * A date range. For example, between '2022-12-23' and '2023-01-05'.
 */
export interface DateSpanArgs {
    /**
     * The end date of the date span.
     */
    end: pulumi.Input<string>;
    /**
     * The start date of the date span.
     */
    start: pulumi.Input<string>;
}

/**
 * Delegated resource properties - internal use only.
 */
export interface DelegatedResourceArgs {
    /**
     * The source resource location - internal use only.
     */
    location?: pulumi.Input<string | undefined>;
    /**
     * The delegation id of the referral delegation (optional) - internal use only.
     */
    referralResource?: pulumi.Input<string | undefined>;
    /**
     * The ARM resource id of the delegated resource - internal use only.
     */
    resourceId?: pulumi.Input<string | undefined>;
    /**
     * The tenant id of the delegated resource - internal use only.
     */
    tenantId?: pulumi.Input<string | undefined>;
}

/**
 * The complex type of the extended location.
 */
export interface ExtendedLocationArgs {
    /**
     * The name of the extended location.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * The type of the extended location.
     */
    type?: pulumi.Input<string | enums.ExtendedLocationTypes | undefined>;
}

/**
 * The FleetHubProfile configures the fleet hub.
 */
export interface FleetHubProfileArgs {
    /**
     * The agent profile for the Fleet hub.
     */
    agentProfile?: pulumi.Input<AgentProfileArgs | undefined>;
    /**
     * The access profile for the Fleet hub API server.
     */
    apiServerAccessProfile?: pulumi.Input<APIServerAccessProfileArgs | undefined>;
    /**
     * DNS prefix used to create the FQDN for the Fleet hub.
     */
    dnsPrefix?: pulumi.Input<string | undefined>;
}

/**
 * The properties of a fleet managed namespace.
 */
export interface FleetManagedNamespacePropertiesArgs {
    /**
     * Action if the managed namespace with the same name already exists. Default is Never.
     */
    adoptionPolicy: pulumi.Input<string | enums.AdoptionPolicy>;
    /**
     * Delete options of a fleet managed namespace. Default is Keep.
     */
    deletePolicy: pulumi.Input<string | enums.DeletePolicy>;
    /**
     * The namespace properties for the fleet managed namespace.
     */
    managedNamespaceProperties?: pulumi.Input<ManagedNamespacePropertiesArgs | undefined>;
    /**
     * The profile of the propagation to create the namespace.
     */
    propagationPolicy?: pulumi.Input<PropagationPolicyArgs | undefined>;
}

/**
 * GPU settings for the Agent Pool.
 */
export interface GPUProfileArgs {
    /**
     * Whether to install GPU drivers. When it's not specified, default is Install.
     */
    driver?: pulumi.Input<string | enums.GPUDriver | undefined>;
}

/**
 * Contains the IPTag associated with the object.
 */
export interface IPTagArgs {
    /**
     * The IP tag type. Example: RoutingPreference.
     */
    ipTagType?: pulumi.Input<string | undefined>;
    /**
     * The value of the IP tag associated with the public IP. Example: Internet.
     */
    tag?: pulumi.Input<string | undefined>;
}

/**
 * Managed identity profile for the identity binding.
 */
export interface IdentityBindingManagedIdentityProfileArgs {
    /**
     * The resource ID of the managed identity.
     */
    resourceId: pulumi.Input<string>;
}

/**
 * IdentityBinding properties.
 */
export interface IdentityBindingPropertiesArgs {
    /**
     * Managed identity profile for the identity binding.
     */
    managedIdentity: pulumi.Input<IdentityBindingManagedIdentityProfileArgs>;
}

/**
 * Istio Service Mesh Certificate Authority (CA) configuration. For now, we only support plugin certificates as described here https://aka.ms/asm-plugin-ca
 */
export interface IstioCertificateAuthorityArgs {
    /**
     * Plugin certificates information for Service Mesh.
     */
    plugin?: pulumi.Input<IstioPluginCertificateAuthorityArgs | undefined>;
}

/**
 * Istio components configuration.
 */
export interface IstioComponentsArgs {
    /**
     * Istio egress gateways.
     */
    egressGateways?: pulumi.Input<pulumi.Input<IstioEgressGatewayArgs>[] | undefined>;
    /**
     * Istio ingress gateways.
     */
    ingressGateways?: pulumi.Input<pulumi.Input<IstioIngressGatewayArgs>[] | undefined>;
}

/**
 * Istio egress gateway configuration.
 */
export interface IstioEgressGatewayArgs {
    /**
     * Whether to enable the egress gateway.
     */
    enabled: pulumi.Input<boolean>;
    /**
     * Name of the gateway configuration custom resource for the Istio add-on egress gateway. Must be specified when enabling the Istio egress gateway. Must be deployed in the same namespace that the Istio egress gateway will be deployed in.
     */
    gatewayConfigurationName?: pulumi.Input<string | undefined>;
    /**
     * Name of the Istio add-on egress gateway.
     */
    name: pulumi.Input<string>;
    /**
     * Namespace that the Istio add-on egress gateway should be deployed in. If unspecified, the default is aks-istio-egress.
     */
    namespace?: pulumi.Input<string | undefined>;
}

/**
 * Istio ingress gateway configuration. For now, we support up to one external ingress gateway named `aks-istio-ingressgateway-external` and one internal ingress gateway named `aks-istio-ingressgateway-internal`.
 */
export interface IstioIngressGatewayArgs {
    /**
     * Whether to enable the ingress gateway.
     */
    enabled: pulumi.Input<boolean>;
    /**
     * Mode of an ingress gateway.
     */
    mode: pulumi.Input<string | enums.IstioIngressGatewayMode>;
}

/**
 * Plugin certificates information for Service Mesh.
 */
export interface IstioPluginCertificateAuthorityArgs {
    /**
     * Certificate chain object name in Azure Key Vault.
     */
    certChainObjectName?: pulumi.Input<string | undefined>;
    /**
     * Intermediate certificate object name in Azure Key Vault.
     */
    certObjectName?: pulumi.Input<string | undefined>;
    /**
     * Intermediate certificate private key object name in Azure Key Vault.
     */
    keyObjectName?: pulumi.Input<string | undefined>;
    /**
     * The resource ID of the Key Vault.
     */
    keyVaultId?: pulumi.Input<string | undefined>;
    /**
     * Root certificate object name in Azure Key Vault.
     */
    rootCertObjectName?: pulumi.Input<string | undefined>;
}

/**
 * Istio service mesh configuration.
 */
export interface IstioServiceMeshArgs {
    /**
     * Istio Service Mesh Certificate Authority (CA) configuration. For now, we only support plugin certificates as described here https://aka.ms/asm-plugin-ca
     */
    certificateAuthority?: pulumi.Input<IstioCertificateAuthorityArgs | undefined>;
    /**
     * Istio components configuration.
     */
    components?: pulumi.Input<IstioComponentsArgs | undefined>;
    /**
     * The list of revisions of the Istio control plane. When an upgrade is not in progress, this holds one value. When canary upgrade is in progress, this can only hold two consecutive values. For more information, see: https://learn.microsoft.com/en-us/azure/aks/istio-upgrade
     */
    revisions?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * The claim mapping expression for JWTAuthenticator.
 */
export interface JWTAuthenticatorClaimMappingExpressionArgs {
    /**
     * The CEL expression used to access token claims.
     */
    expression: pulumi.Input<string>;
}

/**
 * The claim mappings for JWTAuthenticator.
 */
export interface JWTAuthenticatorClaimMappingsArgs {
    /**
     * The expression to extract extra attribute from the token claims. When not provided, no extra attributes are extracted from the token claims.
     */
    extra?: pulumi.Input<pulumi.Input<JWTAuthenticatorExtraClaimMappingExpressionArgs>[] | undefined>;
    /**
     * The expression to extract groups attribute from the token claims. When not provided, no groups are extracted from the token claims.
     */
    groups?: pulumi.Input<JWTAuthenticatorClaimMappingExpressionArgs | undefined>;
    /**
     * The expression to extract uid attribute from the token claims. When not provided, no uid is extracted from the token claims.
     */
    uid?: pulumi.Input<JWTAuthenticatorClaimMappingExpressionArgs | undefined>;
    /**
     * The expression to extract username attribute from the token claims.
     */
    username: pulumi.Input<JWTAuthenticatorClaimMappingExpressionArgs>;
}

/**
 * The extra claim mapping expression for JWTAuthenticator.
 */
export interface JWTAuthenticatorExtraClaimMappingExpressionArgs {
    /**
     * The key of the extra attribute.
     */
    key: pulumi.Input<string>;
    /**
     * The CEL expression used to extract the value of the extra attribute.
     */
    valueExpression: pulumi.Input<string>;
}

/**
 * The OIDC issuer details for JWTAuthenticator.
 */
export interface JWTAuthenticatorIssuerArgs {
    /**
     * The set of acceptable audiences the JWT must be issued to. At least one is required. When multiple is set, AudienceMatchPolicy is used in API Server configuration.
     */
    audiences: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The issuer URL. The URL must begin with the scheme https and cannot contain a query string or fragment. This must match the "iss" claim in the presented JWT, and the issuer returned from discovery.
     */
    url: pulumi.Input<string>;
}

/**
 * The properties of JWTAuthenticator. For details on how to configure the properties of a JWT authenticator, please refer to the Kubernetes documentation: https://kubernetes.io/docs/reference/access-authn-authz/authentication/#using-authentication-configuration. Please note that not all fields available in the Kubernetes documentation are supported by AKS. For troubleshooting, please see https://aka.ms/aks-external-issuers-docs.
 */
export interface JWTAuthenticatorPropertiesArgs {
    /**
     * The mappings that define how user attributes are extracted from the token claims.
     */
    claimMappings: pulumi.Input<JWTAuthenticatorClaimMappingsArgs>;
    /**
     * The rules that are applied to validate token claims to authenticate users. All the expressions must evaluate to true for validation to succeed.
     */
    claimValidationRules?: pulumi.Input<pulumi.Input<JWTAuthenticatorValidationRuleArgs>[] | undefined>;
    /**
     * The JWT OIDC issuer details.
     */
    issuer: pulumi.Input<JWTAuthenticatorIssuerArgs>;
    /**
     * The rules that are applied to the mapped user before completing authentication. All the expressions must evaluate to true for validation to succeed.
     */
    userValidationRules?: pulumi.Input<pulumi.Input<JWTAuthenticatorValidationRuleArgs>[] | undefined>;
}

/**
 * The validation rule for JWTAuthenticator.
 */
export interface JWTAuthenticatorValidationRuleArgs {
    /**
     * The CEL expression used to validate the claim or attribute.
     */
    expression: pulumi.Input<string>;
    /**
     * The validation error message.
     */
    message?: pulumi.Input<string | undefined>;
}

/**
 * Kubelet configurations of agent nodes. See [AKS custom node configuration](https://docs.microsoft.com/azure/aks/custom-node-configuration) for more details.
 */
export interface KubeletConfigArgs {
    /**
     * Allowed list of unsafe sysctls or unsafe sysctl patterns (ending in `*`).
     */
    allowedUnsafeSysctls?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The maximum number of container log files that can be present for a container. The number must be ≥ 2.
     */
    containerLogMaxFiles?: pulumi.Input<number | undefined>;
    /**
     * The maximum size (e.g. 10Mi) of container log file before it is rotated.
     */
    containerLogMaxSizeMB?: pulumi.Input<number | undefined>;
    /**
     * If CPU CFS quota enforcement is enabled for containers that specify CPU limits. The default is true.
     */
    cpuCfsQuota?: pulumi.Input<boolean | undefined>;
    /**
     * The CPU CFS quota period value. The default is '100ms.' Valid values are a sequence of decimal numbers with an optional fraction and a unit suffix. For example: '300ms', '2h45m'. Supported units are 'ns', 'us', 'ms', 's', 'm', and 'h'.
     */
    cpuCfsQuotaPeriod?: pulumi.Input<string | undefined>;
    /**
     * The CPU Manager policy to use. The default is 'none'. See [Kubernetes CPU management policies](https://kubernetes.io/docs/tasks/administer-cluster/cpu-management-policies/#cpu-management-policies) for more information. Allowed values are 'none' and 'static'.
     */
    cpuManagerPolicy?: pulumi.Input<string | undefined>;
    /**
     * If set to true it will make the Kubelet fail to start if swap is enabled on the node.
     */
    failSwapOn?: pulumi.Input<boolean | undefined>;
    /**
     * The percent of disk usage after which image garbage collection is always run. To disable image garbage collection, set to 100. The default is 85%
     */
    imageGcHighThreshold?: pulumi.Input<number | undefined>;
    /**
     * The percent of disk usage before which image garbage collection is never run. This cannot be set higher than imageGcHighThreshold. The default is 80%
     */
    imageGcLowThreshold?: pulumi.Input<number | undefined>;
    /**
     * The maximum number of processes per pod.
     */
    podMaxPids?: pulumi.Input<number | undefined>;
    /**
     * The Topology Manager policy to use. For more information see [Kubernetes Topology Manager](https://kubernetes.io/docs/tasks/administer-cluster/topology-manager). The default is 'none'. Allowed values are 'none', 'best-effort', 'restricted', and 'single-numa-node'.
     */
    topologyManagerPolicy?: pulumi.Input<string | undefined>;
}

/**
 * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
 */
export interface LabelSelectorArgs {
    /**
     * matchExpressions is a list of label selector requirements. The requirements are ANDed.
     */
    matchExpressions?: pulumi.Input<pulumi.Input<LabelSelectorRequirementArgs>[] | undefined>;
    /**
     * matchLabels is an array of {key=value} pairs. A single {key=value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is `key`, the operator is `In`, and the values array contains only `value`. The requirements are ANDed.
     */
    matchLabels?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
 */
export interface LabelSelectorRequirementArgs {
    /**
     * key is the label key that the selector applies to.
     */
    key?: pulumi.Input<string | undefined>;
    /**
     * operator represents a key's relationship to a set of values. Valid operators are In and NotIn
     */
    operator?: pulumi.Input<string | enums.Operator | undefined>;
    /**
     * values is an array of string values, the values array must be non-empty.
     */
    values?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * OS configurations of Linux agent nodes. See [AKS custom node configuration](https://docs.microsoft.com/azure/aks/custom-node-configuration) for more details.
 */
export interface LinuxOSConfigArgs {
    /**
     * The size in MB of a swap file that will be created on each node.
     */
    swapFileSizeMB?: pulumi.Input<number | undefined>;
    /**
     * Sysctl settings for Linux agent nodes.
     */
    sysctls?: pulumi.Input<SysctlConfigArgs | undefined>;
    /**
     * Whether the kernel should make aggressive use of memory compaction to make more hugepages available. Valid values are 'always', 'defer', 'defer+madvise', 'madvise' and 'never'. The default is 'madvise'. For more information see [Transparent Hugepages](https://www.kernel.org/doc/html/latest/admin-guide/mm/transhuge.html#admin-guide-transhuge).
     */
    transparentHugePageDefrag?: pulumi.Input<string | undefined>;
    /**
     * Whether transparent hugepages are enabled. Valid values are 'always', 'madvise', and 'never'. The default is 'always'. For more information see [Transparent Hugepages](https://www.kernel.org/doc/html/latest/admin-guide/mm/transhuge.html#admin-guide-transhuge).
     */
    transparentHugePageEnabled?: pulumi.Input<string | undefined>;
}

/**
 * Overrides for localDNS profile.
 */
export interface LocalDNSOverrideArgs {
    /**
     * Cache max TTL in seconds. See [cache plugin](https://coredns.io/plugins/cache) for more information.
     */
    cacheDurationInSeconds?: pulumi.Input<number | undefined>;
    /**
     * Destination server for DNS queries to be forwarded from localDNS.
     */
    forwardDestination?: pulumi.Input<string | enums.LocalDNSForwardDestination | undefined>;
    /**
     * Forward policy for selecting upstream DNS server. See [forward plugin](https://coredns.io/plugins/forward) for more information.
     */
    forwardPolicy?: pulumi.Input<string | enums.LocalDNSForwardPolicy | undefined>;
    /**
     * Maximum number of concurrent queries. See [forward plugin](https://coredns.io/plugins/forward) for more information.
     */
    maxConcurrent?: pulumi.Input<number | undefined>;
    /**
     * Enforce TCP or prefer UDP protocol for connections from localDNS to upstream DNS server.
     */
    protocol?: pulumi.Input<string | enums.LocalDNSProtocol | undefined>;
    /**
     * Log level for DNS queries in localDNS.
     */
    queryLogging?: pulumi.Input<string | enums.LocalDNSQueryLogging | undefined>;
    /**
     * Policy for serving stale data. See [cache plugin](https://coredns.io/plugins/cache) for more information.
     */
    serveStale?: pulumi.Input<string | enums.LocalDNSServeStale | undefined>;
    /**
     * Serve stale duration in seconds. See [cache plugin](https://coredns.io/plugins/cache) for more information.
     */
    serveStaleDurationInSeconds?: pulumi.Input<number | undefined>;
}
/**
 * localDNSOverrideArgsProvideDefaults sets the appropriate defaults for LocalDNSOverrideArgs
 */
export function localDNSOverrideArgsProvideDefaults(val: LocalDNSOverrideArgs): LocalDNSOverrideArgs {
    return {
        ...val,
        cacheDurationInSeconds: (val.cacheDurationInSeconds) ?? 3600,
        forwardDestination: (val.forwardDestination) ?? "ClusterCoreDNS",
        forwardPolicy: (val.forwardPolicy) ?? "Sequential",
        maxConcurrent: (val.maxConcurrent) ?? 1000,
        protocol: (val.protocol) ?? "PreferUDP",
        queryLogging: (val.queryLogging) ?? "Error",
        serveStale: (val.serveStale) ?? "Immediate",
        serveStaleDurationInSeconds: (val.serveStaleDurationInSeconds) ?? 3600,
    };
}

/**
 * Configures the per-node local DNS, with VnetDNS and KubeDNS overrides. LocalDNS helps improve performance and reliability of DNS resolution in an AKS cluster. For more details see aka.ms/aks/localdns.
 */
export interface LocalDNSProfileArgs {
    /**
     * KubeDNS overrides apply to DNS traffic from pods with dnsPolicy:ClusterFirst (referred to as KubeDNS traffic).
     */
    kubeDNSOverrides?: pulumi.Input<{[key: string]: pulumi.Input<LocalDNSOverrideArgs>} | undefined>;
    /**
     * Mode of enablement for localDNS.
     */
    mode?: pulumi.Input<string | enums.LocalDNSMode | undefined>;
    /**
     * VnetDNS overrides apply to DNS traffic from pods with dnsPolicy:default or kubelet (referred to as VnetDNS traffic).
     */
    vnetDNSOverrides?: pulumi.Input<{[key: string]: pulumi.Input<LocalDNSOverrideArgs>} | undefined>;
}
/**
 * localDNSProfileArgsProvideDefaults sets the appropriate defaults for LocalDNSProfileArgs
 */
export function localDNSProfileArgsProvideDefaults(val: LocalDNSProfileArgs): LocalDNSProfileArgs {
    return {
        ...val,
        mode: (val.mode) ?? "Preferred",
    };
}

/**
 * Maintenance window used to configure scheduled auto-upgrade for a Managed Cluster.
 */
export interface MaintenanceWindowArgs {
    /**
     * Length of maintenance window range from 4 to 24 hours.
     */
    durationHours: pulumi.Input<number>;
    /**
     * Date ranges on which upgrade is not allowed. 'utcOffset' applies to this field. For example, with 'utcOffset: +02:00' and 'dateSpan' being '2022-12-23' to '2023-01-03', maintenance will be blocked from '2022-12-22 22:00' to '2023-01-03 22:00' in UTC time.
     */
    notAllowedDates?: pulumi.Input<pulumi.Input<DateSpanArgs>[] | undefined>;
    /**
     * Recurrence schedule for the maintenance window.
     */
    schedule: pulumi.Input<ScheduleArgs>;
    /**
     * The date the maintenance window activates. If the current date is before this date, the maintenance window is inactive and will not be used for upgrades. If not specified, the maintenance window will be active right away.
     */
    startDate?: pulumi.Input<string | undefined>;
    /**
     * The start time of the maintenance window. Accepted values are from '00:00' to '23:59'. 'utcOffset' applies to this field. For example: '02:00' with 'utcOffset: +02:00' means UTC time '00:00'.
     */
    startTime: pulumi.Input<string>;
    /**
     * The UTC offset in format +/-HH:mm. For example, '+05:30' for IST and '-07:00' for PST. If not specified, the default is '+00:00'.
     */
    utcOffset?: pulumi.Input<string | undefined>;
}
/**
 * maintenanceWindowArgsProvideDefaults sets the appropriate defaults for MaintenanceWindowArgs
 */
export function maintenanceWindowArgsProvideDefaults(val: MaintenanceWindowArgs): MaintenanceWindowArgs {
    return {
        ...val,
        durationHours: (val.durationHours) ?? 24,
    };
}

/**
 * AADProfile specifies attributes for Azure Active Directory integration. For more details see [managed AAD on AKS](https://docs.microsoft.com/azure/aks/managed-aad).
 */
export interface ManagedClusterAADProfileArgs {
    /**
     * The list of AAD group object IDs that will have admin role of the cluster.
     */
    adminGroupObjectIDs?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * (DEPRECATED) The client AAD application ID. Learn more at https://aka.ms/aks/aad-legacy.
     */
    clientAppID?: pulumi.Input<string | undefined>;
    /**
     * Whether to enable Azure RBAC for Kubernetes authorization.
     */
    enableAzureRBAC?: pulumi.Input<boolean | undefined>;
    /**
     * Whether to enable managed AAD.
     */
    managed?: pulumi.Input<boolean | undefined>;
    /**
     * (DEPRECATED) The server AAD application ID. Learn more at https://aka.ms/aks/aad-legacy.
     */
    serverAppID?: pulumi.Input<string | undefined>;
    /**
     * (DEPRECATED) The server AAD application secret. Learn more at https://aka.ms/aks/aad-legacy.
     */
    serverAppSecret?: pulumi.Input<string | undefined>;
    /**
     * The AAD tenant ID to use for authentication. If not specified, will use the tenant of the deployment subscription.
     */
    tenantID?: pulumi.Input<string | undefined>;
}

/**
 * When enabling the operator, a set of AKS managed CRDs and controllers will be installed in the cluster. The operator automates the deployment of OSS models for inference and/or training purposes. It provides a set of preset models and enables distributed inference against them.
 */
export interface ManagedClusterAIToolchainOperatorProfileArgs {
    /**
     * Whether to enable AI toolchain operator to the cluster. Indicates if AI toolchain operator  enabled or not.
     */
    enabled?: pulumi.Input<boolean | undefined>;
}

/**
 * Access profile for managed cluster API server.
 */
export interface ManagedClusterAPIServerAccessProfileArgs {
    /**
     * The IP ranges authorized to access the Kubernetes API server. IP ranges are specified in CIDR format, e.g. 137.117.106.88/29. This feature is not compatible with clusters that use Public IP Per Node, or clusters that are using a Basic Load Balancer. For more information see [API server authorized IP ranges](https://docs.microsoft.com/azure/aks/api-server-authorized-ip-ranges).
     */
    authorizedIPRanges?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Whether to disable run command for the cluster or not.
     */
    disableRunCommand?: pulumi.Input<boolean | undefined>;
    /**
     * Whether to create the cluster as a private cluster or not. For more details, see [Creating a private AKS cluster](https://docs.microsoft.com/azure/aks/private-clusters).
     */
    enablePrivateCluster?: pulumi.Input<boolean | undefined>;
    /**
     * Whether to create additional public FQDN for private cluster or not.
     */
    enablePrivateClusterPublicFQDN?: pulumi.Input<boolean | undefined>;
    /**
     * Whether to enable apiserver vnet integration for the cluster or not. See aka.ms/AksVnetIntegration for more details.
     */
    enableVnetIntegration?: pulumi.Input<boolean | undefined>;
    /**
     * The private DNS zone mode for the cluster. The default is System. For more details see [configure private DNS zone](https://docs.microsoft.com/azure/aks/private-clusters#configure-private-dns-zone). Allowed values are 'system' and 'none'.
     */
    privateDNSZone?: pulumi.Input<string | undefined>;
    /**
     * The subnet to be used when apiserver vnet integration is enabled. It is required when creating a new cluster with BYO Vnet, or when updating an existing cluster to enable apiserver vnet integration.
     */
    subnetId?: pulumi.Input<string | undefined>;
}

/**
 * A Kubernetes add-on profile for a managed cluster.
 */
export interface ManagedClusterAddonProfileArgs {
    /**
     * Key-value pairs for configuring an add-on.
     */
    config?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Whether the add-on is enabled or not.
     */
    enabled: pulumi.Input<boolean>;
}

/**
 * Profile for the container service agent pool.
 */
export interface ManagedClusterAgentPoolProfileArgs {
    /**
     * The list of Availability zones to use for nodes. This can only be specified if the AgentPoolType property is 'VirtualMachineScaleSets'.
     */
    availabilityZones?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * AKS will associate the specified agent pool with the Capacity Reservation Group.
     */
    capacityReservationGroupID?: pulumi.Input<string | undefined>;
    /**
     * Number of agents (VMs) to host docker containers. Allowed values must be in the range of 0 to 1000 (inclusive) for user pools and in the range of 1 to 1000 (inclusive) for system pools. The default value is 1.
     */
    count?: pulumi.Input<number | undefined>;
    /**
     * CreationData to be used to specify the source Snapshot ID if the node pool will be created/upgraded using a snapshot.
     */
    creationData?: pulumi.Input<CreationDataArgs | undefined>;
    /**
     * Whether to enable auto-scaler
     */
    enableAutoScaling?: pulumi.Input<boolean | undefined>;
    /**
     * Whether to enable host based OS and data drive encryption. This is only supported on certain VM sizes and in certain Azure regions. For more information, see: https://docs.microsoft.com/azure/aks/enable-host-encryption
     */
    enableEncryptionAtHost?: pulumi.Input<boolean | undefined>;
    /**
     * Whether to use a FIPS-enabled OS. See [Add a FIPS-enabled node pool](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#add-a-fips-enabled-node-pool-preview) for more details.
     */
    enableFIPS?: pulumi.Input<boolean | undefined>;
    /**
     * Whether each node is allocated its own public IP. Some scenarios may require nodes in a node pool to receive their own dedicated public IP addresses. A common scenario is for gaming workloads, where a console needs to make a direct connection to a cloud virtual machine to minimize hops. For more information see [assigning a public IP per node](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#assign-a-public-ip-per-node-for-your-node-pools). The default is false.
     */
    enableNodePublicIP?: pulumi.Input<boolean | undefined>;
    /**
     * Whether to enable UltraSSD
     */
    enableUltraSSD?: pulumi.Input<boolean | undefined>;
    /**
     * Profile specific to a managed agent pool in Gateway mode. This field cannot be set if agent pool mode is not Gateway.
     */
    gatewayProfile?: pulumi.Input<AgentPoolGatewayProfileArgs | undefined>;
    /**
     * GPUInstanceProfile to be used to specify GPU MIG instance profile for supported GPU VM SKU.
     */
    gpuInstanceProfile?: pulumi.Input<string | enums.GPUInstanceProfile | undefined>;
    /**
     * GPU settings for the Agent Pool.
     */
    gpuProfile?: pulumi.Input<GPUProfileArgs | undefined>;
    /**
     * The fully qualified resource ID of the Dedicated Host Group to provision virtual machines from, used only in creation scenario and not allowed to changed once set. This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}. For more information see [Azure dedicated hosts](https://docs.microsoft.com/azure/virtual-machines/dedicated-hosts).
     */
    hostGroupID?: pulumi.Input<string | undefined>;
    /**
     * The Kubelet configuration on the agent pool nodes.
     */
    kubeletConfig?: pulumi.Input<KubeletConfigArgs | undefined>;
    /**
     * Determines the placement of emptyDir volumes, container runtime data root, and Kubelet ephemeral storage.
     */
    kubeletDiskType?: pulumi.Input<string | enums.KubeletDiskType | undefined>;
    /**
     * The OS configuration of Linux agent nodes.
     */
    linuxOSConfig?: pulumi.Input<LinuxOSConfigArgs | undefined>;
    /**
     * Configures the per-node local DNS, with VnetDNS and KubeDNS overrides. LocalDNS helps improve performance and reliability of DNS resolution in an AKS cluster. For more details see aka.ms/aks/localdns.
     */
    localDNSProfile?: pulumi.Input<LocalDNSProfileArgs | undefined>;
    /**
     * The maximum number of nodes for auto-scaling
     */
    maxCount?: pulumi.Input<number | undefined>;
    /**
     * The maximum number of pods that can run on a node.
     */
    maxPods?: pulumi.Input<number | undefined>;
    /**
     * Message of the day for Linux nodes, base64-encoded. A base64-encoded string which will be written to /etc/motd after decoding. This allows customization of the message of the day for Linux nodes. It must not be specified for Windows nodes. It must be a static string (i.e., will be printed raw and not be executed as a script).
     */
    messageOfTheDay?: pulumi.Input<string | undefined>;
    /**
     * The minimum number of nodes for auto-scaling
     */
    minCount?: pulumi.Input<number | undefined>;
    /**
     * The mode of an agent pool. A cluster must have at least one 'System' Agent Pool at all times. For additional information on agent pool restrictions and best practices, see: https://docs.microsoft.com/azure/aks/use-system-pools
     */
    mode?: pulumi.Input<string | enums.AgentPoolMode | undefined>;
    /**
     * Unique name of the agent pool profile in the context of the subscription and resource group. Windows agent pool names must be 6 characters or less.
     */
    name: pulumi.Input<string>;
    /**
     * Network-related settings of an agent pool.
     */
    networkProfile?: pulumi.Input<AgentPoolNetworkProfileArgs | undefined>;
    /**
     * The node labels to be persisted across all nodes in agent pool.
     */
    nodeLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * The public IP prefix ID which VM nodes should use IPs from. This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPPrefixes/{publicIPPrefixName}
     */
    nodePublicIPPrefixID?: pulumi.Input<string | undefined>;
    /**
     * The taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
     */
    nodeTaints?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The version of Kubernetes specified by the user. Both patch version <major.minor.patch> (e.g. 1.20.13) and <major.minor> (e.g. 1.20) are supported. When <major.minor> is specified, the latest supported GA patch version is chosen automatically. Updating the cluster with the same <major.minor> once it has been created (e.g. 1.14.x -> 1.14) will not trigger an upgrade, even if a newer patch version is available. As a best practice, you should upgrade all node pools in an AKS cluster to the same Kubernetes version. The node pool version must have the same major version as the control plane. The node pool minor version must be within two minor versions of the control plane version. The node pool version cannot be greater than the control plane version. For more information see [upgrading a node pool](https://docs.microsoft.com/azure/aks/use-multiple-node-pools#upgrade-a-node-pool).
     */
    orchestratorVersion?: pulumi.Input<string | undefined>;
    /**
     * OS Disk Size in GB to be used to specify the disk size for every machine in the master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
     */
    osDiskSizeGB?: pulumi.Input<number | undefined>;
    /**
     * The OS disk type to be used for machines in the agent pool. The default is 'Ephemeral' if the VM supports it and has a cache disk larger than the requested OSDiskSizeGB. Otherwise, defaults to 'Managed'. May not be changed after creation. For more information see [Ephemeral OS](https://docs.microsoft.com/azure/aks/cluster-configuration#ephemeral-os).
     */
    osDiskType?: pulumi.Input<string | enums.OSDiskType | undefined>;
    /**
     * Specifies the OS SKU used by the agent pool. The default is Ubuntu if OSType is Linux. The default is Windows2019 when Kubernetes <= 1.24 or Windows2022 when Kubernetes >= 1.25 if OSType is Windows.
     */
    osSKU?: pulumi.Input<string | enums.OSSKU | undefined>;
    /**
     * The operating system type. The default is Linux.
     */
    osType?: pulumi.Input<string | enums.OSType | undefined>;
    /**
     * Pod IP Allocation Mode. The IP allocation mode for pods in the agent pool. Must be used with podSubnetId. The default is 'DynamicIndividual'.
     */
    podIPAllocationMode?: pulumi.Input<string | enums.PodIPAllocationMode | undefined>;
    /**
     * The ID of the subnet which pods will join when launched. If omitted, pod IPs are statically assigned on the node subnet (see vnetSubnetID for more details). This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
     */
    podSubnetID?: pulumi.Input<string | undefined>;
    /**
     * Whether the Agent Pool is running or stopped. When an Agent Pool is first created it is initially Running. The Agent Pool can be stopped by setting this field to Stopped. A stopped Agent Pool stops all of its VMs and does not accrue billing charges. An Agent Pool can only be stopped if it is Running and provisioning state is Succeeded
     */
    powerState?: pulumi.Input<PowerStateArgs | undefined>;
    /**
     * The ID for Proximity Placement Group.
     */
    proximityPlacementGroupID?: pulumi.Input<string | undefined>;
    /**
     * The scale down mode to use when scaling the Agent Pool. This also effects the cluster autoscaler behavior. If not specified, it defaults to Delete.
     */
    scaleDownMode?: pulumi.Input<string | enums.ScaleDownMode | undefined>;
    /**
     * The Virtual Machine Scale Set eviction policy to use. This cannot be specified unless the scaleSetPriority is 'Spot'. If not specified, the default is 'Delete'.
     */
    scaleSetEvictionPolicy?: pulumi.Input<string | enums.ScaleSetEvictionPolicy | undefined>;
    /**
     * The Virtual Machine Scale Set priority. If not specified, the default is 'Regular'.
     */
    scaleSetPriority?: pulumi.Input<string | enums.ScaleSetPriority | undefined>;
    /**
     * The security settings of an agent pool.
     */
    securityProfile?: pulumi.Input<AgentPoolSecurityProfileArgs | undefined>;
    /**
     * The max price (in US Dollars) you are willing to pay for spot instances. Possible values are any decimal value greater than zero or -1 which indicates default price to be up-to on-demand. Possible values are any decimal value greater than zero or -1 which indicates the willingness to pay any on-demand price. For more details on spot pricing, see [spot VMs pricing](https://docs.microsoft.com/azure/virtual-machines/spot-vms#pricing)
     */
    spotMaxPrice?: pulumi.Input<number | undefined>;
    /**
     * The tags to be persisted on the agent pool virtual machine scale set.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * The type of Agent Pool.
     */
    type?: pulumi.Input<string | enums.AgentPoolType | undefined>;
    /**
     * Settings for upgrading the agentpool
     */
    upgradeSettings?: pulumi.Input<AgentPoolUpgradeSettingsArgs | undefined>;
    /**
     * The status of nodes in a VirtualMachines agent pool.
     */
    virtualMachineNodesStatus?: pulumi.Input<pulumi.Input<VirtualMachineNodesArgs>[] | undefined>;
    /**
     * Specifications on VirtualMachines agent pool.
     */
    virtualMachinesProfile?: pulumi.Input<VirtualMachinesProfileArgs | undefined>;
    /**
     * The size of the agent pool VMs. VM size availability varies by region. If a node contains insufficient compute resources (memory, cpu, etc) pods might fail to run correctly. For more details on restricted VM sizes, see: https://docs.microsoft.com/azure/aks/quotas-skus-regions
     */
    vmSize?: pulumi.Input<string | undefined>;
    /**
     * The ID of the subnet which agent pool nodes and optionally pods will join on startup. If this is not specified, a VNET and subnet will be generated and used. If no podSubnetID is specified, this applies to nodes and pods, otherwise it applies to just nodes. This is of the form: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
     */
    vnetSubnetID?: pulumi.Input<string | undefined>;
    /**
     * The Windows agent pool's specific profile.
     */
    windowsProfile?: pulumi.Input<AgentPoolWindowsProfileArgs | undefined>;
    /**
     * Determines the type of workload a node can run.
     */
    workloadRuntime?: pulumi.Input<string | enums.WorkloadRuntime | undefined>;
}
/**
 * managedClusterAgentPoolProfileArgsProvideDefaults sets the appropriate defaults for ManagedClusterAgentPoolProfileArgs
 */
export function managedClusterAgentPoolProfileArgsProvideDefaults(val: ManagedClusterAgentPoolProfileArgs): ManagedClusterAgentPoolProfileArgs {
    return {
        ...val,
        gatewayProfile: pulumi.output(val.gatewayProfile).apply(v => v === undefined ? undefined : agentPoolGatewayProfileArgsProvideDefaults(v)),
        localDNSProfile: pulumi.output(val.localDNSProfile).apply(v => v === undefined ? undefined : localDNSProfileArgsProvideDefaults(v)),
    };
}

/**
 * Auto upgrade profile for a managed cluster.
 */
export interface ManagedClusterAutoUpgradeProfileArgs {
    /**
     * Node OS Upgrade Channel. Manner in which the OS on your nodes is updated. The default is NodeImage.
     */
    nodeOSUpgradeChannel?: pulumi.Input<string | enums.NodeOSUpgradeChannel | undefined>;
    /**
     * The upgrade channel for auto upgrade. The default is 'none'. For more information see [setting the AKS cluster auto-upgrade channel](https://docs.microsoft.com/azure/aks/upgrade-cluster#set-auto-upgrade-channel).
     */
    upgradeChannel?: pulumi.Input<string | enums.UpgradeChannel | undefined>;
}

/**
 * Azure Monitor addon profiles for monitoring the managed cluster.
 */
export interface ManagedClusterAzureMonitorProfileArgs {
    /**
     * Metrics profile for the Azure Monitor managed service for Prometheus addon. Collect out-of-the-box Kubernetes infrastructure metrics to send to an Azure Monitor Workspace and configure additional scraping for custom targets. See aka.ms/AzureManagedPrometheus for an overview.
     */
    metrics?: pulumi.Input<ManagedClusterAzureMonitorProfileMetricsArgs | undefined>;
}

/**
 * Kube State Metrics profile for the Azure Managed Prometheus addon. These optional settings are for the kube-state-metrics pod that is deployed with the addon. See aka.ms/AzureManagedPrometheus-optional-parameters for details.
 */
export interface ManagedClusterAzureMonitorProfileKubeStateMetricsArgs {
    /**
     * Comma-separated list of Kubernetes annotation keys that will be used in the resource's labels metric (Example: 'namespaces=[kubernetes.io/team,...],pods=[kubernetes.io/team],...'). By default the metric contains only resource name and namespace labels.
     */
    metricAnnotationsAllowList?: pulumi.Input<string | undefined>;
    /**
     * Comma-separated list of additional Kubernetes label keys that will be used in the resource's labels metric (Example: 'namespaces=[k8s-label-1,k8s-label-n,...],pods=[app],...'). By default the metric contains only resource name and namespace labels.
     */
    metricLabelsAllowlist?: pulumi.Input<string | undefined>;
}

/**
 * Metrics profile for the Azure Monitor managed service for Prometheus addon. Collect out-of-the-box Kubernetes infrastructure metrics to send to an Azure Monitor Workspace and configure additional scraping for custom targets. See aka.ms/AzureManagedPrometheus for an overview.
 */
export interface ManagedClusterAzureMonitorProfileMetricsArgs {
    /**
     * Whether to enable or disable the Azure Managed Prometheus addon for Prometheus monitoring. See aka.ms/AzureManagedPrometheus-aks-enable for details on enabling and disabling.
     */
    enabled: pulumi.Input<boolean>;
    /**
     * Kube State Metrics profile for the Azure Managed Prometheus addon. These optional settings are for the kube-state-metrics pod that is deployed with the addon. See aka.ms/AzureManagedPrometheus-optional-parameters for details.
     */
    kubeStateMetrics?: pulumi.Input<ManagedClusterAzureMonitorProfileKubeStateMetricsArgs | undefined>;
}

/**
 * The bootstrap profile.
 */
export interface ManagedClusterBootstrapProfileArgs {
    /**
     * The artifact source. The source where the artifacts are downloaded from.
     */
    artifactSource?: pulumi.Input<string | enums.ArtifactSource | undefined>;
    /**
     * The resource Id of Azure Container Registry. The registry must have private network access, premium SKU and zone redundancy.
     */
    containerRegistryId?: pulumi.Input<string | undefined>;
}
/**
 * managedClusterBootstrapProfileArgsProvideDefaults sets the appropriate defaults for ManagedClusterBootstrapProfileArgs
 */
export function managedClusterBootstrapProfileArgsProvideDefaults(val: ManagedClusterBootstrapProfileArgs): ManagedClusterBootstrapProfileArgs {
    return {
        ...val,
        artifactSource: (val.artifactSource) ?? "Direct",
    };
}

/**
 * The cost analysis configuration for the cluster
 */
export interface ManagedClusterCostAnalysisArgs {
    /**
     * Whether to enable cost analysis. The Managed Cluster sku.tier must be set to 'Standard' or 'Premium' to enable this feature. Enabling this will add Kubernetes Namespace and Deployment details to the Cost Analysis views in the Azure portal. If not specified, the default is false. For more information see aka.ms/aks/docs/cost-analysis.
     */
    enabled?: pulumi.Input<boolean | undefined>;
}

/**
 * Cluster HTTP proxy configuration.
 */
export interface ManagedClusterHTTPProxyConfigArgs {
    /**
     * The HTTP proxy server endpoint to use.
     */
    httpProxy?: pulumi.Input<string | undefined>;
    /**
     * The HTTPS proxy server endpoint to use.
     */
    httpsProxy?: pulumi.Input<string | undefined>;
    /**
     * The endpoints that should not go through proxy.
     */
    noProxy?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Alternative CA cert to use for connecting to proxy servers.
     */
    trustedCa?: pulumi.Input<string | undefined>;
}

/**
 * Identity for the managed cluster.
 */
export interface ManagedClusterIdentityArgs {
    /**
     * The delegated identity resources assigned to this managed cluster. This can only be set by another Azure Resource Provider, and managed cluster only accept one delegated identity resource. Internal use only.
     */
    delegatedResources?: pulumi.Input<{[key: string]: pulumi.Input<DelegatedResourceArgs>} | undefined>;
    /**
     * The type of identity used for the managed cluster. For more information see [use managed identities in AKS](https://docs.microsoft.com/azure/aks/use-managed-identity).
     */
    type?: pulumi.Input<enums.ResourceIdentityType | undefined>;
    /**
     * The user identity associated with the managed cluster. This identity will be used in control plane. Only one user assigned identity is allowed. The keys must be ARM resource IDs in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Ingress profile for the container service cluster.
 */
export interface ManagedClusterIngressProfileArgs {
    /**
     * App Routing settings for the ingress profile. You can find an overview and onboarding guide for this feature at https://learn.microsoft.com/en-us/azure/aks/app-routing?tabs=default%2Cdeploy-app-default.
     */
    webAppRouting?: pulumi.Input<ManagedClusterIngressProfileWebAppRoutingArgs | undefined>;
}

export interface ManagedClusterIngressProfileNginxArgs {
    /**
     * Ingress type for the default NginxIngressController custom resource
     */
    defaultIngressControllerType?: pulumi.Input<string | enums.NginxIngressControllerType | undefined>;
}

/**
 * Application Routing add-on settings for the ingress profile.
 */
export interface ManagedClusterIngressProfileWebAppRoutingArgs {
    /**
     * Resource IDs of the DNS zones to be associated with the Application Routing add-on. Used only when Application Routing add-on is enabled. Public and private DNS zones can be in different resource groups, but all public DNS zones must be in the same resource group and all private DNS zones must be in the same resource group.
     */
    dnsZoneResourceIds?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Whether to enable the Application Routing add-on.
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * Configuration for the default NginxIngressController. See more at https://learn.microsoft.com/en-us/azure/aks/app-routing-nginx-configuration#the-default-nginx-ingress-controller.
     */
    nginx?: pulumi.Input<ManagedClusterIngressProfileNginxArgs | undefined>;
}

/**
 * Profile of the managed cluster load balancer.
 */
export interface ManagedClusterLoadBalancerProfileArgs {
    /**
     * The desired number of allocated SNAT ports per VM. Allowed values are in the range of 0 to 64000 (inclusive). The default value is 0 which results in Azure dynamically allocating ports.
     */
    allocatedOutboundPorts?: pulumi.Input<number | undefined>;
    /**
     * The type of the managed inbound Load Balancer BackendPool.
     */
    backendPoolType?: pulumi.Input<string | enums.BackendPoolType | undefined>;
    /**
     * Enable multiple standard load balancers per AKS cluster or not.
     */
    enableMultipleStandardLoadBalancers?: pulumi.Input<boolean | undefined>;
    /**
     * Desired outbound flow idle timeout in minutes. Allowed values are in the range of 4 to 120 (inclusive). The default value is 30 minutes.
     */
    idleTimeoutInMinutes?: pulumi.Input<number | undefined>;
    /**
     * Desired managed outbound IPs for the cluster load balancer.
     */
    managedOutboundIPs?: pulumi.Input<ManagedClusterLoadBalancerProfileManagedOutboundIPsArgs | undefined>;
    /**
     * Desired outbound IP Prefix resources for the cluster load balancer.
     */
    outboundIPPrefixes?: pulumi.Input<ManagedClusterLoadBalancerProfileOutboundIPPrefixesArgs | undefined>;
    /**
     * Desired outbound IP resources for the cluster load balancer.
     */
    outboundIPs?: pulumi.Input<ManagedClusterLoadBalancerProfileOutboundIPsArgs | undefined>;
}
/**
 * managedClusterLoadBalancerProfileArgsProvideDefaults sets the appropriate defaults for ManagedClusterLoadBalancerProfileArgs
 */
export function managedClusterLoadBalancerProfileArgsProvideDefaults(val: ManagedClusterLoadBalancerProfileArgs): ManagedClusterLoadBalancerProfileArgs {
    return {
        ...val,
        allocatedOutboundPorts: (val.allocatedOutboundPorts) ?? 0,
        backendPoolType: (val.backendPoolType) ?? "NodeIPConfiguration",
        idleTimeoutInMinutes: (val.idleTimeoutInMinutes) ?? 30,
        managedOutboundIPs: pulumi.output(val.managedOutboundIPs).apply(v => v === undefined ? undefined : managedClusterLoadBalancerProfileManagedOutboundIPsArgsProvideDefaults(v)),
    };
}

/**
 * Desired managed outbound IPs for the cluster load balancer.
 */
export interface ManagedClusterLoadBalancerProfileManagedOutboundIPsArgs {
    /**
     * The desired number of IPv4 outbound IPs created/managed by Azure for the cluster load balancer. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.
     */
    count?: pulumi.Input<number | undefined>;
    /**
     * The desired number of IPv6 outbound IPs created/managed by Azure for the cluster load balancer. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 0 for single-stack and 1 for dual-stack.
     */
    countIPv6?: pulumi.Input<number | undefined>;
}
/**
 * managedClusterLoadBalancerProfileManagedOutboundIPsArgsProvideDefaults sets the appropriate defaults for ManagedClusterLoadBalancerProfileManagedOutboundIPsArgs
 */
export function managedClusterLoadBalancerProfileManagedOutboundIPsArgsProvideDefaults(val: ManagedClusterLoadBalancerProfileManagedOutboundIPsArgs): ManagedClusterLoadBalancerProfileManagedOutboundIPsArgs {
    return {
        ...val,
        count: (val.count) ?? 1,
        countIPv6: (val.countIPv6) ?? 0,
    };
}

/**
 * Desired outbound IP Prefix resources for the cluster load balancer.
 */
export interface ManagedClusterLoadBalancerProfileOutboundIPPrefixesArgs {
    /**
     * A list of public IP prefix resources.
     */
    publicIPPrefixes?: pulumi.Input<pulumi.Input<ResourceReferenceArgs>[] | undefined>;
}

/**
 * Desired outbound IP resources for the cluster load balancer.
 */
export interface ManagedClusterLoadBalancerProfileOutboundIPsArgs {
    /**
     * A list of public IP resources.
     */
    publicIPs?: pulumi.Input<pulumi.Input<ResourceReferenceArgs>[] | undefined>;
}

/**
 * Profile of the managed outbound IP resources of the managed cluster.
 */
export interface ManagedClusterManagedOutboundIPProfileArgs {
    /**
     * The desired number of outbound IPs created/managed by Azure. Allowed values must be in the range of 1 to 16 (inclusive). The default value is 1.
     */
    count?: pulumi.Input<number | undefined>;
}
/**
 * managedClusterManagedOutboundIPProfileArgsProvideDefaults sets the appropriate defaults for ManagedClusterManagedOutboundIPProfileArgs
 */
export function managedClusterManagedOutboundIPProfileArgsProvideDefaults(val: ManagedClusterManagedOutboundIPProfileArgs): ManagedClusterManagedOutboundIPProfileArgs {
    return {
        ...val,
        count: (val.count) ?? 1,
    };
}

/**
 * The metrics profile for the ManagedCluster.
 */
export interface ManagedClusterMetricsProfileArgs {
    /**
     * The configuration for detailed per-Kubernetes resource cost analysis.
     */
    costAnalysis?: pulumi.Input<ManagedClusterCostAnalysisArgs | undefined>;
}

/**
 * Profile of the managed cluster NAT gateway.
 */
export interface ManagedClusterNATGatewayProfileArgs {
    /**
     * Desired outbound flow idle timeout in minutes. Allowed values are in the range of 4 to 120 (inclusive). The default value is 4 minutes.
     */
    idleTimeoutInMinutes?: pulumi.Input<number | undefined>;
    /**
     * Profile of the managed outbound IP resources of the cluster NAT gateway.
     */
    managedOutboundIPProfile?: pulumi.Input<ManagedClusterManagedOutboundIPProfileArgs | undefined>;
}
/**
 * managedClusterNATGatewayProfileArgsProvideDefaults sets the appropriate defaults for ManagedClusterNATGatewayProfileArgs
 */
export function managedClusterNATGatewayProfileArgsProvideDefaults(val: ManagedClusterNATGatewayProfileArgs): ManagedClusterNATGatewayProfileArgs {
    return {
        ...val,
        idleTimeoutInMinutes: (val.idleTimeoutInMinutes) ?? 4,
        managedOutboundIPProfile: pulumi.output(val.managedOutboundIPProfile).apply(v => v === undefined ? undefined : managedClusterManagedOutboundIPProfileArgsProvideDefaults(v)),
    };
}

export interface ManagedClusterNodeProvisioningProfileArgs {
    /**
     * The set of default Karpenter NodePools (CRDs) configured for node provisioning. This field has no effect unless mode is 'Auto'. Warning: Changing this from Auto to None on an existing cluster will cause the default Karpenter NodePools to be deleted, which will drain and delete the nodes associated with those pools. It is strongly recommended to not do this unless there are idle nodes ready to take the pods evicted by that action. If not specified, the default is Auto. For more information see aka.ms/aks/nap#node-pools.
     */
    defaultNodePools?: pulumi.Input<string | enums.NodeProvisioningDefaultNodePools | undefined>;
    /**
     * The node provisioning mode. If not specified, the default is Manual.
     */
    mode?: pulumi.Input<string | enums.NodeProvisioningMode | undefined>;
}
/**
 * managedClusterNodeProvisioningProfileArgsProvideDefaults sets the appropriate defaults for ManagedClusterNodeProvisioningProfileArgs
 */
export function managedClusterNodeProvisioningProfileArgsProvideDefaults(val: ManagedClusterNodeProvisioningProfileArgs): ManagedClusterNodeProvisioningProfileArgs {
    return {
        ...val,
        defaultNodePools: (val.defaultNodePools) ?? "Auto",
    };
}

/**
 * Node resource group lockdown profile for a managed cluster.
 */
export interface ManagedClusterNodeResourceGroupProfileArgs {
    /**
     * The restriction level applied to the cluster's node resource group. If not specified, the default is 'Unrestricted'
     */
    restrictionLevel?: pulumi.Input<string | enums.RestrictionLevel | undefined>;
}

/**
 * The OIDC issuer profile of the Managed Cluster.
 */
export interface ManagedClusterOIDCIssuerProfileArgs {
    /**
     * Whether the OIDC issuer is enabled.
     */
    enabled?: pulumi.Input<boolean | undefined>;
}

/**
 * Details about the pod identity assigned to the Managed Cluster.
 */
export interface ManagedClusterPodIdentityArgs {
    /**
     * The binding selector to use for the AzureIdentityBinding resource.
     */
    bindingSelector?: pulumi.Input<string | undefined>;
    /**
     * The user assigned identity details.
     */
    identity: pulumi.Input<UserAssignedIdentityArgs>;
    /**
     * The name of the pod identity.
     */
    name: pulumi.Input<string>;
    /**
     * The namespace of the pod identity.
     */
    namespace: pulumi.Input<string>;
}

/**
 * A pod identity exception, which allows pods with certain labels to access the Azure Instance Metadata Service (IMDS) endpoint without being intercepted by the node-managed identity (NMI) server. See [disable AAD Pod Identity for a specific Pod/Application](https://azure.github.io/aad-pod-identity/docs/configure/application_exception/) for more details.
 */
export interface ManagedClusterPodIdentityExceptionArgs {
    /**
     * The name of the pod identity exception.
     */
    name: pulumi.Input<string>;
    /**
     * The namespace of the pod identity exception.
     */
    namespace: pulumi.Input<string>;
    /**
     * The pod labels to match.
     */
    podLabels: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The pod identity profile of the Managed Cluster. See [use AAD pod identity](https://docs.microsoft.com/azure/aks/use-azure-ad-pod-identity) for more details on pod identity integration.
 */
export interface ManagedClusterPodIdentityProfileArgs {
    /**
     * Whether pod identity is allowed to run on clusters with Kubenet networking. Running in Kubenet is disabled by default due to the security related nature of AAD Pod Identity and the risks of IP spoofing. See [using Kubenet network plugin with AAD Pod Identity](https://docs.microsoft.com/azure/aks/use-azure-ad-pod-identity#using-kubenet-network-plugin-with-azure-active-directory-pod-managed-identities) for more information.
     */
    allowNetworkPluginKubenet?: pulumi.Input<boolean | undefined>;
    /**
     * Whether the pod identity addon is enabled.
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * The pod identities to use in the cluster.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<ManagedClusterPodIdentityArgs>[] | undefined>;
    /**
     * The pod identity exceptions to allow.
     */
    userAssignedIdentityExceptions?: pulumi.Input<pulumi.Input<ManagedClusterPodIdentityExceptionArgs>[] | undefined>;
}

/**
 * Parameters to be applied to the cluster-autoscaler when enabled
 */
export interface ManagedClusterPropertiesAutoScalerProfileArgs {
    /**
     * Detects similar node pools and balances the number of nodes between them. Valid values are 'true' and 'false'
     */
    balanceSimilarNodeGroups?: pulumi.Input<string | undefined>;
    /**
     * DaemonSet pods will be gracefully terminated from empty nodes. If set to true, all daemonset pods on empty nodes will be evicted before deletion of the node. If the daemonset pod cannot be evicted another node will be chosen for scaling. If set to false, the node will be deleted without ensuring that daemonset pods are deleted or evicted.
     */
    daemonsetEvictionForEmptyNodes?: pulumi.Input<boolean | undefined>;
    /**
     * DaemonSet pods will be gracefully terminated from non-empty nodes. If set to true, all daemonset pods on occupied nodes will be evicted before deletion of the node. If the daemonset pod cannot be evicted another node will be chosen for scaling. If set to false, the node will be deleted without ensuring that daemonset pods are deleted or evicted.
     */
    daemonsetEvictionForOccupiedNodes?: pulumi.Input<boolean | undefined>;
    /**
     * The expander to use when scaling up. If not specified, the default is 'random'. See [expanders](https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#what-are-expanders) for more information.
     */
    expander?: pulumi.Input<string | enums.Expander | undefined>;
    /**
     * Should CA ignore DaemonSet pods when calculating resource utilization for scaling down. If set to true, the resources used by daemonset will be taken into account when making scaling down decisions.
     */
    ignoreDaemonsetsUtilization?: pulumi.Input<boolean | undefined>;
    /**
     * The maximum number of empty nodes that can be deleted at the same time. This must be a positive integer. The default is 10.
     */
    maxEmptyBulkDelete?: pulumi.Input<string | undefined>;
    /**
     * The maximum number of seconds the cluster autoscaler waits for pod termination when trying to scale down a node. The default is 600.
     */
    maxGracefulTerminationSec?: pulumi.Input<string | undefined>;
    /**
     * The maximum time the autoscaler waits for a node to be provisioned. The default is '15m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
     */
    maxNodeProvisionTime?: pulumi.Input<string | undefined>;
    /**
     * The maximum percentage of unready nodes in the cluster. After this percentage is exceeded, cluster autoscaler halts operations. The default is 45. The maximum is 100 and the minimum is 0.
     */
    maxTotalUnreadyPercentage?: pulumi.Input<string | undefined>;
    /**
     * Ignore unscheduled pods before they're a certain age. For scenarios like burst/batch scale where you don't want CA to act before the kubernetes scheduler could schedule all the pods, you can tell CA to ignore unscheduled pods before they're a certain age. The default is '0s'. Values must be an integer followed by a unit ('s' for seconds, 'm' for minutes, 'h' for hours, etc).
     */
    newPodScaleUpDelay?: pulumi.Input<string | undefined>;
    /**
     * The number of allowed unready nodes, irrespective of max-total-unready-percentage. This must be an integer. The default is 3.
     */
    okTotalUnreadyCount?: pulumi.Input<string | undefined>;
    /**
     * How long after scale up that scale down evaluation resumes. The default is '10m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
     */
    scaleDownDelayAfterAdd?: pulumi.Input<string | undefined>;
    /**
     * How long after node deletion that scale down evaluation resumes. The default is the scan-interval. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
     */
    scaleDownDelayAfterDelete?: pulumi.Input<string | undefined>;
    /**
     * How long after scale down failure that scale down evaluation resumes. The default is '3m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
     */
    scaleDownDelayAfterFailure?: pulumi.Input<string | undefined>;
    /**
     * How long a node should be unneeded before it is eligible for scale down. The default is '10m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
     */
    scaleDownUnneededTime?: pulumi.Input<string | undefined>;
    /**
     * How long an unready node should be unneeded before it is eligible for scale down. The default is '20m'. Values must be an integer followed by an 'm'. No unit of time other than minutes (m) is supported.
     */
    scaleDownUnreadyTime?: pulumi.Input<string | undefined>;
    /**
     * Node utilization level, defined as sum of requested resources divided by capacity, below which a node can be considered for scale down. The default is '0.5'.
     */
    scaleDownUtilizationThreshold?: pulumi.Input<string | undefined>;
    /**
     * How often cluster is reevaluated for scale up or down. The default is '10'. Values must be an integer number of seconds.
     */
    scanInterval?: pulumi.Input<string | undefined>;
    /**
     * If cluster autoscaler will skip deleting nodes with pods with local storage, for example, EmptyDir or HostPath. The default is true.
     */
    skipNodesWithLocalStorage?: pulumi.Input<string | undefined>;
    /**
     * If cluster autoscaler will skip deleting nodes with pods from kube-system (except for DaemonSet or mirror pods). The default is true.
     */
    skipNodesWithSystemPods?: pulumi.Input<string | undefined>;
}

/**
 * The SKU of a Managed Cluster.
 */
export interface ManagedClusterSKUArgs {
    /**
     * The name of a managed cluster SKU.
     */
    name?: pulumi.Input<string | enums.ManagedClusterSKUName | undefined>;
    /**
     * The tier of a managed cluster SKU. If not specified, the default is 'Free'. See [AKS Pricing Tier](https://learn.microsoft.com/azure/aks/free-standard-pricing-tiers) for more details.
     */
    tier?: pulumi.Input<string | enums.ManagedClusterSKUTier | undefined>;
}

/**
 * Security profile for the container service cluster.
 */
export interface ManagedClusterSecurityProfileArgs {
    /**
     * Azure Key Vault [key management service](https://kubernetes.io/docs/tasks/administer-cluster/kms-provider/) settings for the security profile.
     */
    azureKeyVaultKms?: pulumi.Input<AzureKeyVaultKmsArgs | undefined>;
    /**
     * A list of up to 10 base64 encoded CAs that will be added to the trust store on all nodes in the cluster. For more information see [Custom CA Trust Certificates](https://learn.microsoft.com/en-us/azure/aks/custom-certificate-authority).
     */
    customCATrustCertificates?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Microsoft Defender settings for the security profile.
     */
    defender?: pulumi.Input<ManagedClusterSecurityProfileDefenderArgs | undefined>;
    /**
     * Image Cleaner settings for the security profile.
     */
    imageCleaner?: pulumi.Input<ManagedClusterSecurityProfileImageCleanerArgs | undefined>;
    /**
     * Workload identity settings for the security profile. Workload identity enables Kubernetes applications to access Azure cloud resources securely with Azure AD. See https://aka.ms/aks/wi for more details.
     */
    workloadIdentity?: pulumi.Input<ManagedClusterSecurityProfileWorkloadIdentityArgs | undefined>;
}
/**
 * managedClusterSecurityProfileArgsProvideDefaults sets the appropriate defaults for ManagedClusterSecurityProfileArgs
 */
export function managedClusterSecurityProfileArgsProvideDefaults(val: ManagedClusterSecurityProfileArgs): ManagedClusterSecurityProfileArgs {
    return {
        ...val,
        azureKeyVaultKms: pulumi.output(val.azureKeyVaultKms).apply(v => v === undefined ? undefined : azureKeyVaultKmsArgsProvideDefaults(v)),
    };
}

/**
 * Microsoft Defender settings for the security profile.
 */
export interface ManagedClusterSecurityProfileDefenderArgs {
    /**
     * Resource ID of the Log Analytics workspace to be associated with Microsoft Defender. When Microsoft Defender is enabled, this field is required and must be a valid workspace resource ID. When Microsoft Defender is disabled, leave the field empty.
     */
    logAnalyticsWorkspaceResourceId?: pulumi.Input<string | undefined>;
    /**
     * Microsoft Defender threat detection for Cloud settings for the security profile.
     */
    securityMonitoring?: pulumi.Input<ManagedClusterSecurityProfileDefenderSecurityMonitoringArgs | undefined>;
}

/**
 * Microsoft Defender settings for the security profile threat detection.
 */
export interface ManagedClusterSecurityProfileDefenderSecurityMonitoringArgs {
    /**
     * Whether to enable Defender threat detection
     */
    enabled?: pulumi.Input<boolean | undefined>;
}

/**
 * Image Cleaner removes unused images from nodes, freeing up disk space and helping to reduce attack surface area. Here are settings for the security profile.
 */
export interface ManagedClusterSecurityProfileImageCleanerArgs {
    /**
     * Whether to enable Image Cleaner on AKS cluster.
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * Image Cleaner scanning interval in hours.
     */
    intervalHours?: pulumi.Input<number | undefined>;
}

/**
 * Workload identity settings for the security profile.
 */
export interface ManagedClusterSecurityProfileWorkloadIdentityArgs {
    /**
     * Whether to enable workload identity.
     */
    enabled?: pulumi.Input<boolean | undefined>;
}

/**
 * Information about a service principal identity for the cluster to use for manipulating Azure APIs.
 */
export interface ManagedClusterServicePrincipalProfileArgs {
    /**
     * The ID for the service principal.
     */
    clientId: pulumi.Input<string>;
    /**
     * The secret password associated with the service principal in plain text.
     */
    secret?: pulumi.Input<string | undefined>;
}

/**
 * The Static Egress Gateway addon configuration for the cluster.
 */
export interface ManagedClusterStaticEgressGatewayProfileArgs {
    /**
     * Enable Static Egress Gateway addon. Indicates if Static Egress Gateway addon is enabled or not.
     */
    enabled?: pulumi.Input<boolean | undefined>;
}

/**
 * Storage profile for the container service cluster.
 */
export interface ManagedClusterStorageProfileArgs {
    /**
     * AzureBlob CSI Driver settings for the storage profile.
     */
    blobCSIDriver?: pulumi.Input<ManagedClusterStorageProfileBlobCSIDriverArgs | undefined>;
    /**
     * AzureDisk CSI Driver settings for the storage profile.
     */
    diskCSIDriver?: pulumi.Input<ManagedClusterStorageProfileDiskCSIDriverArgs | undefined>;
    /**
     * AzureFile CSI Driver settings for the storage profile.
     */
    fileCSIDriver?: pulumi.Input<ManagedClusterStorageProfileFileCSIDriverArgs | undefined>;
    /**
     * Snapshot Controller settings for the storage profile.
     */
    snapshotController?: pulumi.Input<ManagedClusterStorageProfileSnapshotControllerArgs | undefined>;
}

/**
 * AzureBlob CSI Driver settings for the storage profile.
 */
export interface ManagedClusterStorageProfileBlobCSIDriverArgs {
    /**
     * Whether to enable AzureBlob CSI Driver. The default value is false.
     */
    enabled?: pulumi.Input<boolean | undefined>;
}

/**
 * AzureDisk CSI Driver settings for the storage profile.
 */
export interface ManagedClusterStorageProfileDiskCSIDriverArgs {
    /**
     * Whether to enable AzureDisk CSI Driver. The default value is true.
     */
    enabled?: pulumi.Input<boolean | undefined>;
}

/**
 * AzureFile CSI Driver settings for the storage profile.
 */
export interface ManagedClusterStorageProfileFileCSIDriverArgs {
    /**
     * Whether to enable AzureFile CSI Driver. The default value is true.
     */
    enabled?: pulumi.Input<boolean | undefined>;
}

/**
 * Snapshot Controller settings for the storage profile.
 */
export interface ManagedClusterStorageProfileSnapshotControllerArgs {
    /**
     * Whether to enable Snapshot Controller. The default value is true.
     */
    enabled?: pulumi.Input<boolean | undefined>;
}

/**
 * The update to be applied to the ManagedClusters.
 */
export interface ManagedClusterUpdateArgs {
    /**
     * The node image upgrade to be applied to the target nodes in update run.
     */
    nodeImageSelection?: pulumi.Input<NodeImageSelectionArgs | undefined>;
    /**
     * The upgrade to apply to the ManagedClusters.
     */
    upgrade: pulumi.Input<ManagedClusterUpgradeSpecArgs>;
}

/**
 * The upgrade to apply to a ManagedCluster.
 */
export interface ManagedClusterUpgradeSpecArgs {
    /**
     * The Kubernetes version to upgrade the member clusters to.
     */
    kubernetesVersion?: pulumi.Input<string | undefined>;
    /**
     * ManagedClusterUpgradeType is the type of upgrade to be applied.
     */
    type: pulumi.Input<string | enums.ManagedClusterUpgradeType>;
}

/**
 * Profile for Windows VMs in the managed cluster.
 */
export interface ManagedClusterWindowsProfileArgs {
    /**
     * Specifies the password of the administrator account. <br><br> **Minimum-length:** 8 characters <br><br> **Max-length:** 123 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!"
     */
    adminPassword?: pulumi.Input<string | undefined>;
    /**
     * Specifies the name of the administrator account. <br><br> **Restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length:** 1 character <br><br> **Max-length:** 20 characters
     */
    adminUsername: pulumi.Input<string>;
    /**
     * Whether to enable CSI proxy. For more details on CSI proxy, see the [CSI proxy GitHub repo](https://github.com/kubernetes-csi/csi-proxy).
     */
    enableCSIProxy?: pulumi.Input<boolean | undefined>;
    /**
     * The Windows gMSA Profile in the Managed Cluster.
     */
    gmsaProfile?: pulumi.Input<WindowsGmsaProfileArgs | undefined>;
    /**
     * The license type to use for Windows VMs. See [Azure Hybrid User Benefits](https://azure.microsoft.com/pricing/hybrid-benefit/faq/) for more details.
     */
    licenseType?: pulumi.Input<string | enums.LicenseType | undefined>;
}

/**
 * Workload Auto-scaler profile for the managed cluster.
 */
export interface ManagedClusterWorkloadAutoScalerProfileArgs {
    /**
     * KEDA (Kubernetes Event-driven Autoscaling) settings for the workload auto-scaler profile.
     */
    keda?: pulumi.Input<ManagedClusterWorkloadAutoScalerProfileKedaArgs | undefined>;
    /**
     * VPA (Vertical Pod Autoscaler) settings for the workload auto-scaler profile.
     */
    verticalPodAutoscaler?: pulumi.Input<ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgs | undefined>;
}
/**
 * managedClusterWorkloadAutoScalerProfileArgsProvideDefaults sets the appropriate defaults for ManagedClusterWorkloadAutoScalerProfileArgs
 */
export function managedClusterWorkloadAutoScalerProfileArgsProvideDefaults(val: ManagedClusterWorkloadAutoScalerProfileArgs): ManagedClusterWorkloadAutoScalerProfileArgs {
    return {
        ...val,
        verticalPodAutoscaler: pulumi.output(val.verticalPodAutoscaler).apply(v => v === undefined ? undefined : managedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgsProvideDefaults(v)),
    };
}

/**
 * KEDA (Kubernetes Event-driven Autoscaling) settings for the workload auto-scaler profile.
 */
export interface ManagedClusterWorkloadAutoScalerProfileKedaArgs {
    /**
     * Whether to enable KEDA.
     */
    enabled: pulumi.Input<boolean>;
}

/**
 * VPA (Vertical Pod Autoscaler) settings for the workload auto-scaler profile.
 */
export interface ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgs {
    /**
     * Whether to enable VPA. Default value is false.
     */
    enabled: pulumi.Input<boolean>;
}
/**
 * managedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgsProvideDefaults sets the appropriate defaults for ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgs
 */
export function managedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgsProvideDefaults(val: ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgs): ManagedClusterWorkloadAutoScalerProfileVerticalPodAutoscalerArgs {
    return {
        ...val,
        enabled: (val.enabled) ?? false,
    };
}

/**
 * The namespace properties for the fleet managed namespace.
 */
export interface ManagedNamespacePropertiesArgs {
    /**
     * The annotations for the fleet managed namespace.
     */
    annotations?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * The default network policy for the fleet managed namespace.
     */
    defaultNetworkPolicy?: pulumi.Input<enums.NetworkPolicy | undefined>;
    /**
     * The default resource quota for the fleet managed namespace.
     */
    defaultResourceQuota?: pulumi.Input<ResourceQuotaArgs | undefined>;
    /**
     * The labels for the fleet managed namespace.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
}

/**
 * Managed service identity (system assigned and/or user assigned identities)
 */
export interface ManagedServiceIdentityArgs {
    /**
     * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
     */
    type: pulumi.Input<string | enums.ManagedServiceIdentityType>;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Specifications on number of machines.
 */
export interface ManualScaleProfileArgs {
    /**
     * Number of nodes.
     */
    count?: pulumi.Input<number | undefined>;
    /**
     * VM size that AKS will use when creating and scaling e.g. 'Standard_E4s_v3', 'Standard_E16s_v3' or 'Standard_D16s_v5'.
     */
    size?: pulumi.Input<string | undefined>;
}

/**
 * Mesh membership properties of a managed cluster.
 */
export interface MeshMembershipPropertiesArgs {
    /**
     * The ARM resource id for the managed mesh member. This is of the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppLink/applinks/{appLinkName}/appLinkMembers/{appLinkMemberName}'. Visit https://aka.ms/applink for more information.
     */
    managedMeshID: pulumi.Input<string>;
}

/**
 * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
 */
export interface MetaV1LabelSelectorArgs {
    /**
     * matchExpressions is a list of label selector requirements. The requirements are ANDed.
     */
    matchExpressions?: pulumi.Input<pulumi.Input<MetaV1LabelSelectorRequirementArgs>[] | undefined>;
    /**
     * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
     */
    matchLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
}

/**
 * A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
 */
export interface MetaV1LabelSelectorRequirementArgs {
    /**
     * key is the label key that the selector applies to.
     */
    key: pulumi.Input<string>;
    /**
     * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
     */
    operator: pulumi.Input<string | enums.LabelSelectorOperator>;
    /**
     * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
     */
    values?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Properties of a namespace managed by ARM
 */
export interface NamespacePropertiesArgs {
    /**
     * Action if Kubernetes namespace with same name already exists.
     */
    adoptionPolicy?: pulumi.Input<string | enums.AdoptionPolicy | undefined>;
    /**
     * The annotations of managed namespace.
     */
    annotations?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * The default network policy enforced upon the namespace. Customers can have other Kubernetes network policy objects under the namespace. All the network policies will be enforced.
     */
    defaultNetworkPolicy?: pulumi.Input<NetworkPoliciesArgs | undefined>;
    /**
     * The default resource quota enforced upon the namespace. Customers can have other Kubernetes resource quota objects under the namespace. All the resource quotas will be enforced.
     */
    defaultResourceQuota?: pulumi.Input<ResourceQuotaArgs | undefined>;
    /**
     * Delete options of a namespace.
     */
    deletePolicy?: pulumi.Input<string | enums.DeletePolicy | undefined>;
    /**
     * The labels of managed namespace.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
}
/**
 * namespacePropertiesArgsProvideDefaults sets the appropriate defaults for NamespacePropertiesArgs
 */
export function namespacePropertiesArgsProvideDefaults(val: NamespacePropertiesArgs): NamespacePropertiesArgs {
    return {
        ...val,
        defaultNetworkPolicy: pulumi.output(val.defaultNetworkPolicy).apply(v => v === undefined ? undefined : networkPoliciesArgsProvideDefaults(v)),
    };
}

/**
 * Default network policy of the namespace, specifying ingress and egress rules.
 */
export interface NetworkPoliciesArgs {
    /**
     * Egress policy for the network.
     */
    egress?: pulumi.Input<string | enums.PolicyRule | undefined>;
    /**
     * Ingress policy for the network.
     */
    ingress?: pulumi.Input<string | enums.PolicyRule | undefined>;
}
/**
 * networkPoliciesArgsProvideDefaults sets the appropriate defaults for NetworkPoliciesArgs
 */
export function networkPoliciesArgsProvideDefaults(val: NetworkPoliciesArgs): NetworkPoliciesArgs {
    return {
        ...val,
        egress: (val.egress) ?? "AllowAll",
        ingress: (val.ingress) ?? "AllowSameNamespace",
    };
}

/**
 * The node image upgrade to be applied to the target nodes in update run.
 */
export interface NodeImageSelectionArgs {
    /**
     * The node image upgrade type.
     */
    type: pulumi.Input<string | enums.NodeImageSelectionType>;
}

/**
 * The configuration profile for default ClusterResourcePlacement for placement.
 */
export interface PlacementProfileArgs {
    /**
     * The default ClusterResourcePlacement policy configuration.
     */
    defaultClusterResourcePlacement?: pulumi.Input<PlacementV1ClusterResourcePlacementSpecArgs | undefined>;
}

/**
 * Affinity is a group of cluster affinity scheduling rules. More to be added.
 */
export interface PlacementV1AffinityArgs {
    /**
     * ClusterAffinity contains cluster affinity scheduling rules for the selected resources.
     */
    clusterAffinity?: pulumi.Input<PlacementV1ClusterAffinityArgs | undefined>;
}

/**
 * ClusterAffinity contains cluster affinity scheduling rules for the selected resources.
 */
export interface PlacementV1ClusterAffinityArgs {
    /**
     * If the affinity requirements specified by this field are not met at scheduling time, the resource will not be scheduled onto the cluster. If the affinity requirements specified by this field cease to be met at some point after the placement (e.g. due to an update), the system may or may not try to eventually remove the resource from the cluster.
     */
    requiredDuringSchedulingIgnoredDuringExecution?: pulumi.Input<PlacementV1ClusterSelectorArgs | undefined>;
}

/**
 * ClusterResourcePlacementSpec defines the desired state of ClusterResourcePlacement.
 */
export interface PlacementV1ClusterResourcePlacementSpecArgs {
    /**
     * Policy defines how to select member clusters to place the selected resources. If unspecified, all the joined member clusters are selected.
     */
    policy?: pulumi.Input<PlacementV1PlacementPolicyArgs | undefined>;
}

/**
 * ClusterSelector
 */
export interface PlacementV1ClusterSelectorArgs {
    /**
     * ClusterSelectorTerms is a list of cluster selector terms. The terms are `ORed`.
     */
    clusterSelectorTerms: pulumi.Input<pulumi.Input<PlacementV1ClusterSelectorTermArgs>[]>;
}

/**
 * ClusterSelectorTerm
 */
export interface PlacementV1ClusterSelectorTermArgs {
    /**
     * LabelSelector is a label query over all the joined member clusters. Clusters matching the query are selected. If you specify both label and property selectors in the same term, the results are AND'd.
     */
    labelSelector?: pulumi.Input<MetaV1LabelSelectorArgs | undefined>;
    /**
     * PropertySelector is a property query over all joined member clusters. Clusters matching the query are selected. If you specify both label and property selectors in the same term, the results are AND'd. At this moment, PropertySelector can only be used with `RequiredDuringSchedulingIgnoredDuringExecution` affinity terms. This field is beta-level; it is for the property-based scheduling feature and is only functional when a property provider is enabled in the deployment.
     */
    propertySelector?: pulumi.Input<PlacementV1PropertySelectorArgs | undefined>;
}

/**
 * PlacementPolicy contains the rules to select target member clusters to place the selected resources. Note that only clusters that are both joined and satisfying the rules will be selected. You can only specify at most one of the two fields: ClusterNames and Affinity. If none is specified, all the joined clusters are selected.
 */
export interface PlacementV1PlacementPolicyArgs {
    /**
     * Affinity contains cluster affinity scheduling rules. Defines which member clusters to place the selected resources. Only valid if the placement type is "PickAll" or "PickN".
     */
    affinity?: pulumi.Input<PlacementV1AffinityArgs | undefined>;
    /**
     * ClusterNames contains a list of names of MemberCluster to place the selected resources. Only valid if the placement type is "PickFixed"
     */
    clusterNames?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Type of placement. Can be "PickAll", "PickN" or "PickFixed". Default is PickAll.
     */
    placementType?: pulumi.Input<string | enums.PlacementType | undefined>;
    /**
     * If specified, the ClusterResourcePlacement's Tolerations. Tolerations cannot be updated or deleted. This field is beta-level and is for the taints and tolerations feature.
     */
    tolerations?: pulumi.Input<pulumi.Input<PlacementV1TolerationArgs>[] | undefined>;
}

/**
 * PropertySelector helps user specify property requirements when picking clusters for resource placement.
 */
export interface PlacementV1PropertySelectorArgs {
    /**
     * MatchExpressions is an array of PropertySelectorRequirements. The requirements are AND'd.
     */
    matchExpressions: pulumi.Input<pulumi.Input<PlacementV1PropertySelectorRequirementArgs>[]>;
}

/**
 * PropertySelectorRequirement is a specific property requirement when picking clusters for resource placement.
 */
export interface PlacementV1PropertySelectorRequirementArgs {
    /**
     * Name is the name of the property; it should be a Kubernetes label name.
     */
    name: pulumi.Input<string>;
    /**
     * Operator specifies the relationship between a cluster's observed value of the specified property and the values given in the requirement.
     */
    operator: pulumi.Input<string | enums.PropertySelectorOperator>;
    /**
     * Values are a list of values of the specified property which Fleet will compare against the observed values of individual member clusters in accordance with the given operator. At this moment, each value should be a Kubernetes quantity. For more information, see https://pkg.go.dev/k8s.io/apimachinery/pkg/api/resource#Quantity. If the operator is Gt (greater than), Ge (greater than or equal to), Lt (less than), or `Le` (less than or equal to), Eq (equal to), or Ne (ne), exactly one value must be specified in the list.
     */
    values: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Toleration allows ClusterResourcePlacement to tolerate any taint that matches the triple <key,value,effect> using the matching operator <operator>.
 */
export interface PlacementV1TolerationArgs {
    /**
     * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, only allowed value is NoSchedule.
     */
    effect?: pulumi.Input<string | enums.TaintEffect | undefined>;
    /**
     * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
     */
    key?: pulumi.Input<string | undefined>;
    /**
     * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a ClusterResourcePlacement can tolerate all taints of a particular category.
     */
    operator?: pulumi.Input<string | enums.TolerationOperator | undefined>;
    /**
     * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
     */
    value?: pulumi.Input<string | undefined>;
}

/**
 * The port range.
 */
export interface PortRangeArgs {
    /**
     * The maximum port that is included in the range. It should be ranged from 1 to 65535, and be greater than or equal to portStart.
     */
    portEnd?: pulumi.Input<number | undefined>;
    /**
     * The minimum port that is included in the range. It should be ranged from 1 to 65535, and be less than or equal to portEnd.
     */
    portStart?: pulumi.Input<number | undefined>;
    /**
     * The network protocol of the port.
     */
    protocol?: pulumi.Input<string | enums.Protocol | undefined>;
}

/**
 * Describes the Power State of the cluster
 */
export interface PowerStateArgs {
    /**
     * Tells whether the cluster is Running or Stopped
     */
    code?: pulumi.Input<string | enums.Code | undefined>;
}

/**
 * Private endpoint which a connection belongs to.
 */
export interface PrivateEndpointArgs {
    /**
     * The resource ID of the private endpoint
     */
    id?: pulumi.Input<string | undefined>;
}

/**
 * A private link resource
 */
export interface PrivateLinkResourceArgs {
    /**
     * The group ID of the resource.
     */
    groupId?: pulumi.Input<string | undefined>;
    /**
     * The ID of the private link resource.
     */
    id?: pulumi.Input<string | undefined>;
    /**
     * The name of the private link resource.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * The RequiredMembers of the resource
     */
    requiredMembers?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The resource type.
     */
    type?: pulumi.Input<string | undefined>;
}

/**
 * The state of a private link service connection.
 */
export interface PrivateLinkServiceConnectionStateArgs {
    /**
     * The private link service connection description.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * The private link service connection status.
     */
    status?: pulumi.Input<string | enums.ConnectionStatus | undefined>;
}

/**
 * The propagation to be used for provisioning the namespace among the fleet.
 */
export interface PropagationPolicyArgs {
    /**
     * The profile to be used for propagation via placement.
     */
    placementProfile?: pulumi.Input<PlacementProfileArgs | undefined>;
    /**
     * The type of the policy to be used. Default is Placement.
     */
    type: pulumi.Input<string | enums.PropagationType>;
}

/**
 * For schedules like: 'recur every month on the first Monday' or 'recur every 3 months on last Friday'.
 */
export interface RelativeMonthlyScheduleArgs {
    /**
     * Specifies on which day of the week the maintenance occurs.
     */
    dayOfWeek: pulumi.Input<string | enums.WeekDay>;
    /**
     * Specifies the number of months between each set of occurrences.
     */
    intervalMonths: pulumi.Input<number>;
    /**
     * The week index. Specifies on which week of the month the dayOfWeek applies.
     */
    weekIndex: pulumi.Input<string | enums.Type>;
}

/**
 * Resource quota for the namespace.
 */
export interface ResourceQuotaArgs {
    /**
     * CPU limit of the namespace in one-thousandth CPU form. See [CPU resource units](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#meaning-of-cpu) for more details.
     */
    cpuLimit?: pulumi.Input<string | undefined>;
    /**
     * CPU request of the namespace in one-thousandth CPU form. See [CPU resource units](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#meaning-of-cpu) for more details.
     */
    cpuRequest?: pulumi.Input<string | undefined>;
    /**
     * Memory limit of the namespace in the power-of-two equivalents form: Ei, Pi, Ti, Gi, Mi, Ki. See [Memory resource units](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#meaning-of-memory) for more details.
     */
    memoryLimit?: pulumi.Input<string | undefined>;
    /**
     * Memory request of the namespace in the power-of-two equivalents form: Ei, Pi, Ti, Gi, Mi, Ki. See [Memory resource units](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#meaning-of-memory) for more details.
     */
    memoryRequest?: pulumi.Input<string | undefined>;
}

/**
 * A reference to an Azure resource.
 */
export interface ResourceReferenceArgs {
    /**
     * The fully qualified Azure resource id.
     */
    id?: pulumi.Input<string | undefined>;
}

/**
 * Specifications on how to scale a VirtualMachines agent pool.
 */
export interface ScaleProfileArgs {
    /**
     * Specifications on how to scale the VirtualMachines agent pool to a fixed size.
     */
    manual?: pulumi.Input<pulumi.Input<ManualScaleProfileArgs>[] | undefined>;
}

/**
 * One and only one of the schedule types should be specified. Choose either 'daily', 'weekly', 'absoluteMonthly' or 'relativeMonthly' for your maintenance schedule.
 */
export interface ScheduleArgs {
    /**
     * For schedules like: 'recur every month on the 15th' or 'recur every 3 months on the 20th'.
     */
    absoluteMonthly?: pulumi.Input<AbsoluteMonthlyScheduleArgs | undefined>;
    /**
     * For schedules like: 'recur every day' or 'recur every 3 days'.
     */
    daily?: pulumi.Input<DailyScheduleArgs | undefined>;
    /**
     * For schedules like: 'recur every month on the first Monday' or 'recur every 3 months on last Friday'.
     */
    relativeMonthly?: pulumi.Input<RelativeMonthlyScheduleArgs | undefined>;
    /**
     * For schedules like: 'recur every Monday' or 'recur every 3 weeks on Wednesday'.
     */
    weekly?: pulumi.Input<WeeklyScheduleArgs | undefined>;
}

/**
 * Service mesh profile for a managed cluster.
 */
export interface ServiceMeshProfileArgs {
    /**
     * Istio service mesh configuration.
     */
    istio?: pulumi.Input<IstioServiceMeshArgs | undefined>;
    /**
     * Mode of the service mesh.
     */
    mode: pulumi.Input<string | enums.ServiceMeshMode>;
}

/**
 * Sysctl settings for Linux agent nodes.
 */
export interface SysctlConfigArgs {
    /**
     * Sysctl setting fs.aio-max-nr.
     */
    fsAioMaxNr?: pulumi.Input<number | undefined>;
    /**
     * Sysctl setting fs.file-max.
     */
    fsFileMax?: pulumi.Input<number | undefined>;
    /**
     * Sysctl setting fs.inotify.max_user_watches.
     */
    fsInotifyMaxUserWatches?: pulumi.Input<number | undefined>;
    /**
     * Sysctl setting fs.nr_open.
     */
    fsNrOpen?: pulumi.Input<number | undefined>;
    /**
     * Sysctl setting kernel.threads-max.
     */
    kernelThreadsMax?: pulumi.Input<number | undefined>;
    /**
     * Sysctl setting net.core.netdev_max_backlog.
     */
    netCoreNetdevMaxBacklog?: pulumi.Input<number | undefined>;
    /**
     * Sysctl setting net.core.optmem_max.
     */
    netCoreOptmemMax?: pulumi.Input<number | undefined>;
    /**
     * Sysctl setting net.core.rmem_default.
     */
    netCoreRmemDefault?: pulumi.Input<number | undefined>;
    /**
     * Sysctl setting net.core.rmem_max.
     */
    netCoreRmemMax?: pulumi.Input<number | undefined>;
    /**
     * Sysctl setting net.core.somaxconn.
     */
    netCoreSomaxconn?: pulumi.Input<number | undefined>;
    /**
     * Sysctl setting net.core.wmem_default.
     */
    netCoreWmemDefault?: pulumi.Input<number | undefined>;
    /**
     * Sysctl setting net.core.wmem_max.
     */
    netCoreWmemMax?: pulumi.Input<number | undefined>;
    /**
     * Sysctl setting net.ipv4.ip_local_port_range.
     */
    netIpv4IpLocalPortRange?: pulumi.Input<string | undefined>;
    /**
     * Sysctl setting net.ipv4.neigh.default.gc_thresh1.
     */
    netIpv4NeighDefaultGcThresh1?: pulumi.Input<number | undefined>;
    /**
     * Sysctl setting net.ipv4.neigh.default.gc_thresh2.
     */
    netIpv4NeighDefaultGcThresh2?: pulumi.Input<number | undefined>;
    /**
     * Sysctl setting net.ipv4.neigh.default.gc_thresh3.
     */
    netIpv4NeighDefaultGcThresh3?: pulumi.Input<number | undefined>;
    /**
     * Sysctl setting net.ipv4.tcp_fin_timeout.
     */
    netIpv4TcpFinTimeout?: pulumi.Input<number | undefined>;
    /**
     * Sysctl setting net.ipv4.tcp_keepalive_probes.
     */
    netIpv4TcpKeepaliveProbes?: pulumi.Input<number | undefined>;
    /**
     * Sysctl setting net.ipv4.tcp_keepalive_time.
     */
    netIpv4TcpKeepaliveTime?: pulumi.Input<number | undefined>;
    /**
     * Sysctl setting net.ipv4.tcp_max_syn_backlog.
     */
    netIpv4TcpMaxSynBacklog?: pulumi.Input<number | undefined>;
    /**
     * Sysctl setting net.ipv4.tcp_max_tw_buckets.
     */
    netIpv4TcpMaxTwBuckets?: pulumi.Input<number | undefined>;
    /**
     * Sysctl setting net.ipv4.tcp_tw_reuse.
     */
    netIpv4TcpTwReuse?: pulumi.Input<boolean | undefined>;
    /**
     * Sysctl setting net.ipv4.tcp_keepalive_intvl.
     */
    netIpv4TcpkeepaliveIntvl?: pulumi.Input<number | undefined>;
    /**
     * Sysctl setting net.netfilter.nf_conntrack_buckets.
     */
    netNetfilterNfConntrackBuckets?: pulumi.Input<number | undefined>;
    /**
     * Sysctl setting net.netfilter.nf_conntrack_max.
     */
    netNetfilterNfConntrackMax?: pulumi.Input<number | undefined>;
    /**
     * Sysctl setting vm.max_map_count.
     */
    vmMaxMapCount?: pulumi.Input<number | undefined>;
    /**
     * Sysctl setting vm.swappiness.
     */
    vmSwappiness?: pulumi.Input<number | undefined>;
    /**
     * Sysctl setting vm.vfs_cache_pressure.
     */
    vmVfsCachePressure?: pulumi.Input<number | undefined>;
}

/**
 * Time in a week.
 */
export interface TimeInWeekArgs {
    /**
     * The day of the week.
     */
    day?: pulumi.Input<string | enums.WeekDay | undefined>;
    /**
     * A list of hours in the day used to identify a time range. Each integer hour represents a time range beginning at 0m after the hour ending at the next hour (non-inclusive). 0 corresponds to 00:00 UTC, 23 corresponds to 23:00 UTC. Specifying [0, 1] means the 00:00 - 02:00 UTC time range.
     */
    hourSlots?: pulumi.Input<pulumi.Input<number>[] | undefined>;
}

/**
 * A time range. For example, between 2021-05-25T13:00:00Z and 2021-05-25T14:00:00Z.
 */
export interface TimeSpanArgs {
    /**
     * The end of a time span
     */
    end?: pulumi.Input<string | undefined>;
    /**
     * The start of a time span
     */
    start?: pulumi.Input<string | undefined>;
}

/**
 * A group to be updated.
 */
export interface UpdateGroupArgs {
    /**
     * Name of the group.
     * It must match a group name of an existing fleet member.
     */
    name: pulumi.Input<string>;
}

/**
 * Defines the update sequence of the clusters via stages and groups.
 *
 * Stages within a run are executed sequentially one after another.
 * Groups within a stage are executed in parallel.
 * Member clusters within a group are updated sequentially one after another.
 *
 * A valid strategy contains no duplicate groups within or across stages.
 */
export interface UpdateRunStrategyArgs {
    /**
     * The list of stages that compose this update run. Min size: 1.
     */
    stages: pulumi.Input<pulumi.Input<UpdateStageArgs>[]>;
}

/**
 * Defines a stage which contains the groups to update and the steps to take (e.g., wait for a time period) before starting the next stage.
 */
export interface UpdateStageArgs {
    /**
     * The time in seconds to wait at the end of this stage before starting the next one. Defaults to 0 seconds if unspecified.
     */
    afterStageWaitInSeconds?: pulumi.Input<number | undefined>;
    /**
     * Defines the groups to be executed in parallel in this stage. Duplicate groups are not allowed. Min size: 1.
     */
    groups?: pulumi.Input<pulumi.Input<UpdateGroupArgs>[] | undefined>;
    /**
     * The name of the stage. Must be unique within the UpdateRun.
     */
    name: pulumi.Input<string>;
}

/**
 * Settings for overrides when upgrading a cluster.
 */
export interface UpgradeOverrideSettingsArgs {
    /**
     * Whether to force upgrade the cluster. Note that this option instructs upgrade operation to bypass upgrade protections such as checking for deprecated API usage. Enable this option only with caution.
     */
    forceUpgrade?: pulumi.Input<boolean | undefined>;
    /**
     * Until when the overrides are effective. Note that this only matches the start time of an upgrade, and the effectiveness won't change once an upgrade starts even if the `until` expires as upgrade proceeds. This field is not set by default. It must be set for the overrides to take effect.
     */
    until?: pulumi.Input<string | undefined>;
}

/**
 * Details about a user assigned identity.
 */
export interface UserAssignedIdentityArgs {
    /**
     * The client ID of the user assigned identity.
     */
    clientId?: pulumi.Input<string | undefined>;
    /**
     * The object ID of the user assigned identity.
     */
    objectId?: pulumi.Input<string | undefined>;
    /**
     * The resource ID of the user assigned identity.
     */
    resourceId?: pulumi.Input<string | undefined>;
}

/**
 * Current status on a group of nodes of the same vm size.
 */
export interface VirtualMachineNodesArgs {
    /**
     * Number of nodes.
     */
    count?: pulumi.Input<number | undefined>;
    /**
     * The VM size of the agents used to host this group of nodes.
     */
    size?: pulumi.Input<string | undefined>;
}

/**
 * Specifications on VirtualMachines agent pool.
 */
export interface VirtualMachinesProfileArgs {
    /**
     * Specifications on how to scale a VirtualMachines agent pool.
     */
    scale?: pulumi.Input<ScaleProfileArgs | undefined>;
}

/**
 * For schedules like: 'recur every Monday' or 'recur every 3 weeks on Wednesday'.
 */
export interface WeeklyScheduleArgs {
    /**
     * Specifies on which day of the week the maintenance occurs.
     */
    dayOfWeek: pulumi.Input<string | enums.WeekDay>;
    /**
     * Specifies the number of weeks between each set of occurrences.
     */
    intervalWeeks: pulumi.Input<number>;
}

/**
 * Windows gMSA Profile in the managed cluster.
 */
export interface WindowsGmsaProfileArgs {
    /**
     * Specifies the DNS server for Windows gMSA. <br><br> Set it to empty if you have configured the DNS server in the vnet which is used to create the managed cluster.
     */
    dnsServer?: pulumi.Input<string | undefined>;
    /**
     * Whether to enable Windows gMSA. Specifies whether to enable Windows gMSA in the managed cluster.
     */
    enabled?: pulumi.Input<boolean | undefined>;
    /**
     * Specifies the root domain name for Windows gMSA. <br><br> Set it to empty if you have configured the DNS server in the vnet which is used to create the managed cluster.
     */
    rootDomainName?: pulumi.Input<string | undefined>;
}
