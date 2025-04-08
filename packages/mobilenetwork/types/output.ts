import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Aggregate maximum bit rate.
 */
export interface AmbrResponse {
    /**
     * Downlink bit rate.
     */
    downlink: string;
    /**
     * Uplink bit rate.
     */
    uplink: string;
}

/**
 * Reference to an Azure Async Operation ID.
 */
export interface AsyncOperationIdResponse {
    /**
     * Azure Async Operation ID.
     */
    id: string;
}

/**
 * Reference to an attached data network resource.
 */
export interface AttachedDataNetworkResourceIdResponse {
    /**
     * Attached data network resource ID.
     */
    id: string;
}

/**
 * Reference to an Azure Stack Edge device resource.
 */
export interface AzureStackEdgeDeviceResourceIdResponse {
    /**
     * Azure Stack Edge device resource ID.
     */
    id: string;
}

/**
 * Reference to an Azure Stack HCI cluster resource.
 */
export interface AzureStackHCIClusterResourceIdResponse {
    /**
     * Azure Stack HCI cluster resource ID.
     */
    id: string;
}

/**
 * Certificate provisioning state
 */
export interface CertificateProvisioningResponse {
    /**
     * Reason for certificate provisioning failure.
     */
    reason: string;
    /**
     * The certificate's provisioning state
     */
    state: string;
}

/**
 * Reference to an Azure Arc custom location resource.
 */
export interface ConnectedClusterResourceIdResponse {
    /**
     * Azure Arc connected cluster resource ID.
     */
    id: string;
}

/**
 * Reference to an Azure Arc custom location resource.
 */
export interface CustomLocationResourceIdResponse {
    /**
     * Azure Arc custom location resource ID.
     */
    id: string;
}

/**
 * Settings controlling data network use
 */
export interface DataNetworkConfigurationResponse {
    /**
     * Allowed session types in addition to the default session type. Must not duplicate the default session type.
     */
    additionalAllowedSessionTypes?: string[];
    /**
     * Default QoS Flow allocation and retention priority (ARP) level. Flows with higher priority preempt flows with lower priority, if the settings of `preemptionCapability` and `preemptionVulnerability` allow it. 1 is the highest level of priority. If this field is not specified then `5qi` is used to derive the ARP value. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters.
     */
    allocationAndRetentionPriorityLevel?: number;
    /**
     * List of services that can be used as part of this SIM policy. The list must not contain duplicate items and must contain at least one item. The services must be in the same location as the SIM policy.
     */
    allowedServices: ServiceResourceIdResponse[];
    /**
     * A reference to the data network that these settings apply to. The data network must be in the same location as the SIM policy.
     */
    dataNetwork: DataNetworkResourceIdResponse;
    /**
     * The default PDU session type, which is used if the UE does not request a specific session type.
     */
    defaultSessionType?: string;
    /**
     * Default 5G QoS Flow Indicator value. The 5QI identifies a specific QoS forwarding treatment to be provided to a flow. See 3GPP TS23.501 section 5.7.2.1 for a full description of the 5QI parameter, and table 5.7.4-1 for the definition the 5QI values.
     */
    fiveQi?: number;
    /**
     * The maximum number of downlink packets to buffer at the user plane for High Latency Communication - Extended Buffering. See 3GPP TS29.272 v15.10.0 section 7.3.188 for a full description. This maximum is not guaranteed because there is a internal limit on buffered packets across all PDU sessions.
     */
    maximumNumberOfBufferedPackets?: number;
    /**
     * Default QoS Flow preemption capability. The preemption capability of a QoS Flow controls whether it can preempt another QoS Flow with a lower priority level. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters.
     */
    preemptionCapability?: string;
    /**
     * Default QoS Flow preemption vulnerability. The preemption vulnerability of a QoS Flow controls whether it can be preempted by a QoS Flow with a higher priority level. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters.
     */
    preemptionVulnerability?: string;
    /**
     * Aggregate maximum bit rate across all non-GBR QoS flows of a given PDU session. See 3GPP TS23.501 section 5.7.2.6 for a full description of the Session-AMBR.
     */
    sessionAmbr: AmbrResponse;
}
/**
 * dataNetworkConfigurationResponseProvideDefaults sets the appropriate defaults for DataNetworkConfigurationResponse
 */
export function dataNetworkConfigurationResponseProvideDefaults(val: DataNetworkConfigurationResponse): DataNetworkConfigurationResponse {
    return {
        ...val,
        allocationAndRetentionPriorityLevel: (val.allocationAndRetentionPriorityLevel) ?? 9,
        defaultSessionType: (val.defaultSessionType) ?? "IPv4",
        fiveQi: (val.fiveQi) ?? 9,
        maximumNumberOfBufferedPackets: (val.maximumNumberOfBufferedPackets) ?? 10,
        preemptionCapability: (val.preemptionCapability) ?? "NotPreempt",
        preemptionVulnerability: (val.preemptionVulnerability) ?? "Preemptable",
    };
}

/**
 * Reference to a data network resource.
 */
export interface DataNetworkResourceIdResponse {
    /**
     * Data network resource ID.
     */
    id: string;
}

/**
 * Configuration for uploading packet core diagnostics.
 */
export interface DiagnosticsUploadConfigurationResponse {
    /**
     * The Storage Account Container URL to upload diagnostics to.
     */
    storageAccountContainerUrl: string;
}

/**
 * Configuration for sending packet core events to Azure Event Hub.
 */
export interface EventHubConfigurationResponse {
    /**
     * Resource ID  of Azure Event Hub to send packet core events to.
     */
    id: string;
    /**
     * The duration (in seconds) between UE usage reports.
     */
    reportingInterval?: number;
}
/**
 * eventHubConfigurationResponseProvideDefaults sets the appropriate defaults for EventHubConfigurationResponse
 */
export function eventHubConfigurationResponseProvideDefaults(val: EventHubConfigurationResponse): EventHubConfigurationResponse {
    return {
        ...val,
        reportingInterval: (val.reportingInterval) ?? 1800,
    };
}

export interface HomeNetworkPrivateKeysProvisioningResponse {
    /**
     * The provisioning state of the private keys for SUPI concealment.
     */
    state: string;
}

/**
 * A key used for SUPI concealment.
 */
export interface HomeNetworkPublicKeyResponse {
    /**
     * The Home Network Public Key Identifier determines which public key was used to generate the SUCI sent to the AMF. See TS 23.003 Section 2.2B Section 5.
     */
    id: number;
    /**
     * The URL of Azure Key Vault secret containing the private key, versioned or unversioned. For example: https://contosovault.vault.azure.net/secrets/mySuciPrivateKey/562a4bb76b524a1493a6afe8e536ee78.
     */
    url?: string;
}

/**
 * HTTPS server certificate configuration.
 */
export interface HttpsServerCertificateResponse {
    /**
     * The certificate URL, unversioned. For example: https://contosovault.vault.azure.net/certificates/ingress.
     */
    certificateUrl: string;
    /**
     * The provisioning state of the certificate.
     */
    provisioning: CertificateProvisioningResponse;
}

/**
 * The installation state of the packet core.
 */
export interface InstallationResponse {
    /**
     * The desired installation state
     */
    desiredState?: string;
    /**
     * A reference to an in-progress installation operation
     */
    operation: AsyncOperationIdResponse;
    /**
     * Reason(s) for the current installation state of the packet core.
     */
    reasons: string[];
    /**
     * Whether a reinstall of the packet core is required to pick up the latest configuration changes.
     */
    reinstallRequired: string;
    /**
     * Installation state
     */
    state: string;
}
/**
 * installationResponseProvideDefaults sets the appropriate defaults for InstallationResponse
 */
export function installationResponseProvideDefaults(val: InstallationResponse): InstallationResponse {
    return {
        ...val,
        desiredState: (val.desiredState) ?? "Installed",
    };
}

/**
 * Interface properties
 */
export interface InterfacePropertiesResponse {
    /**
     * The IPv4 addresses of the endpoints to send BFD probes to.
     */
    bfdIpv4Endpoints?: string[];
    /**
     * The IPv4 address.
     */
    ipv4Address?: string;
    /**
     * The list of IPv4 addresses, for a multi-node system.
     */
    ipv4AddressList?: string[];
    /**
     * The default IPv4 gateway (router).
     */
    ipv4Gateway?: string;
    /**
     * The IPv4 subnet.
     */
    ipv4Subnet?: string;
    /**
     * The logical name for this interface. This should match one of the interfaces configured on your Azure Stack Edge device.
     */
    name?: string;
    /**
     * VLAN identifier of the network interface. Example: 501.
     */
    vlanId?: number;
}

/**
 * An Azure key vault key.
 */
export interface KeyVaultKeyResponse {
    /**
     * The key URL, unversioned. For example: https://contosovault.vault.azure.net/keys/azureKey.
     */
    keyUrl?: string;
}

/**
 * The kubernetes ingress configuration to control access to packet core diagnostics over local APIs.
 */
export interface LocalDiagnosticsAccessConfigurationResponse {
    /**
     * How to authenticate users who access local diagnostics APIs.
     */
    authenticationType: string;
    /**
     * The HTTPS server TLS certificate used to secure local access to diagnostics.
     */
    httpsServerCertificate?: HttpsServerCertificateResponse;
}

/**
 * Managed service identity (User assigned identity)
 */
export interface ManagedServiceIdentityResponse {
    /**
     * Type of managed service identity (currently only UserAssigned allowed).
     */
    type: string;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
}

/**
 * Reference to a mobile network resource.
 */
export interface MobileNetworkResourceIdResponse {
    /**
     * Mobile network resource ID.
     */
    id: string;
}

/**
 * Configuration enabling NAS reroute.
 */
export interface NASRerouteConfigurationResponse {
    /**
     * The macro network's MME group ID. This is where unknown UEs are sent to via NAS reroute.
     */
    macroMmeGroupId: number;
}

/**
 * The network address and port translation settings to use for the attached data network.
 */
export interface NaptConfigurationResponse {
    /**
     * Whether NAPT is enabled for connections to this attached data network.
     */
    enabled?: string;
    /**
     * Maximum number of UDP and TCP pinholes that can be open simultaneously on the core interface. For 5G networks, this is the N6 interface. For 4G networks, this is the SGi interface.
     */
    pinholeLimits?: number;
    /**
     * Expiry times of inactive NAPT pinholes, in seconds. All timers must be at least 1 second.
     */
    pinholeTimeouts?: PinholeTimeoutsResponse;
    /**
     * Range of port numbers to use as translated ports on each translated address.
     * If not specified and NAPT is enabled, this range defaults to 1,024 - 49,999.
     * (Ports under 1,024 should not be used because these are special purpose ports reserved by IANA. Ports 50,000 and above are reserved for non-NAPT use.)
     */
    portRange?: PortRangeResponse;
    /**
     * The minimum time (in seconds) that will pass before a port that was used by a closed pinhole can be recycled for use by another pinhole. All hold times must be at least 1 second.
     */
    portReuseHoldTime?: PortReuseHoldTimesResponse;
}
/**
 * naptConfigurationResponseProvideDefaults sets the appropriate defaults for NaptConfigurationResponse
 */
export function naptConfigurationResponseProvideDefaults(val: NaptConfigurationResponse): NaptConfigurationResponse {
    return {
        ...val,
        pinholeLimits: (val.pinholeLimits) ?? 65536,
        pinholeTimeouts: (val.pinholeTimeouts ? pinholeTimeoutsResponseProvideDefaults(val.pinholeTimeouts) : undefined),
        portRange: (val.portRange ? portRangeResponseProvideDefaults(val.portRange) : undefined),
        portReuseHoldTime: (val.portReuseHoldTime ? portReuseHoldTimesResponseProvideDefaults(val.portReuseHoldTime) : undefined),
    };
}

/**
 * Data flow policy rule configuration
 */
export interface PccRuleConfigurationResponse {
    /**
     * The name of the rule. This must be unique within the parent service. You must not use any of the following reserved strings - `default`, `requested` or `service`.
     */
    ruleName: string;
    /**
     * A precedence value that is used to decide between data flow policy rules when identifying the QoS values to use for a particular SIM. A lower value means a higher priority. This value should be unique among all data flow policy rules configured in the mobile network.
     */
    rulePrecedence: number;
    /**
     * The QoS policy to use for packets matching this rule. If this field is null then the parent service will define the QoS settings.
     */
    ruleQosPolicy?: PccRuleQosPolicyResponse;
    /**
     * The set of data flow templates to use for this data flow policy rule.
     */
    serviceDataFlowTemplates: ServiceDataFlowTemplateResponse[];
    /**
     * Determines whether flows that match this data flow policy rule are permitted.
     */
    trafficControl?: string;
}
/**
 * pccRuleConfigurationResponseProvideDefaults sets the appropriate defaults for PccRuleConfigurationResponse
 */
export function pccRuleConfigurationResponseProvideDefaults(val: PccRuleConfigurationResponse): PccRuleConfigurationResponse {
    return {
        ...val,
        ruleQosPolicy: (val.ruleQosPolicy ? pccRuleQosPolicyResponseProvideDefaults(val.ruleQosPolicy) : undefined),
        trafficControl: (val.trafficControl) ?? "Enabled",
    };
}

/**
 * Data flow policy rule QoS policy
 */
export interface PccRuleQosPolicyResponse {
    /**
     * QoS Flow allocation and retention priority (ARP) level. Flows with higher priority preempt flows with lower priority, if the settings of `preemptionCapability` and `preemptionVulnerability` allow it. 1 is the highest level of priority. If this field is not specified then `5qi` is used to derive the ARP value. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters.
     */
    allocationAndRetentionPriorityLevel?: number;
    /**
     * 5G QoS Flow Indicator value. The 5QI identifies a specific QoS forwarding treatment to be provided to a flow. See 3GPP TS23.501 section 5.7.2.1 for a full description of the 5QI parameter, and table 5.7.4-1 for the definition the 5QI values.
     */
    fiveQi?: number;
    /**
     * The guaranteed bit rate (GBR) for all service data flows that use this data flow policy rule. This is an optional setting. If you do not provide a value, there will be no GBR set for the data flow policy rule that uses this QoS definition.
     */
    guaranteedBitRate?: AmbrResponse;
    /**
     * The maximum bit rate (MBR) for all service data flows that use this data flow policy rule or service.
     */
    maximumBitRate: AmbrResponse;
    /**
     * QoS Flow preemption capability. The preemption capability of a QoS Flow controls whether it can preempt another QoS Flow with a lower priority level. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters.
     */
    preemptionCapability?: string;
    /**
     * QoS Flow preemption vulnerability. The preemption vulnerability of a QoS Flow controls whether it can be preempted by a QoS Flow with a higher priority level. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters.
     */
    preemptionVulnerability?: string;
}
/**
 * pccRuleQosPolicyResponseProvideDefaults sets the appropriate defaults for PccRuleQosPolicyResponse
 */
export function pccRuleQosPolicyResponseProvideDefaults(val: PccRuleQosPolicyResponse): PccRuleQosPolicyResponse {
    return {
        ...val,
        allocationAndRetentionPriorityLevel: (val.allocationAndRetentionPriorityLevel) ?? 9,
        fiveQi: (val.fiveQi) ?? 9,
        preemptionCapability: (val.preemptionCapability) ?? "NotPreempt",
        preemptionVulnerability: (val.preemptionVulnerability) ?? "Preemptable",
    };
}

/**
 * Expiry times of inactive NAPT pinholes, in seconds. All timers must be at least 1 second.
 */
export interface PinholeTimeoutsResponse {
    /**
     * Pinhole timeout for ICMP pinholes in seconds. Default for ICMP Echo is 30 seconds.
     */
    icmp?: number;
    /**
     * Pinhole timeout for TCP pinholes in seconds. Default for TCP is 3 minutes.
     */
    tcp?: number;
    /**
     * Pinhole timeout for UDP pinholes in seconds. Default for UDP is 30 seconds.
     */
    udp?: number;
}
/**
 * pinholeTimeoutsResponseProvideDefaults sets the appropriate defaults for PinholeTimeoutsResponse
 */
export function pinholeTimeoutsResponseProvideDefaults(val: PinholeTimeoutsResponse): PinholeTimeoutsResponse {
    return {
        ...val,
        icmp: (val.icmp) ?? 30,
        tcp: (val.tcp) ?? 180,
        udp: (val.udp) ?? 30,
    };
}

/**
 * The platform where the packet core is deployed.
 */
export interface PlatformConfigurationResponse {
    /**
     * The Azure Stack Edge device where the packet core is deployed. If the device is part of a fault tolerant pair, either device in the pair can be specified.
     */
    azureStackEdgeDevice?: AzureStackEdgeDeviceResourceIdResponse;
    /**
     * The Azure Stack Edge devices where the packet core is deployed. If the packet core is deployed across multiple devices, all devices will appear in this list.
     */
    azureStackEdgeDevices: AzureStackEdgeDeviceResourceIdResponse[];
    /**
     * The Azure Stack HCI cluster where the packet core is deployed.
     */
    azureStackHciCluster?: AzureStackHCIClusterResourceIdResponse;
    /**
     * Azure Arc connected cluster where the packet core is deployed.
     */
    connectedCluster?: ConnectedClusterResourceIdResponse;
    /**
     * Azure Arc custom location where the packet core is deployed.
     */
    customLocation?: CustomLocationResourceIdResponse;
    /**
     * The platform type where packet core is deployed.
     */
    type: string;
}

/**
 * Public land mobile network (PLMN) ID. This is made up of the mobile country code and mobile network code, as defined in https://www.itu.int/rec/T-REC-E.212. The values 001-01 and 001-001 can be used for testing and the values 999-99 and 999-999 can be used on internal private networks.
 */
export interface PlmnIdResponse {
    /**
     * Mobile country code (MCC).
     */
    mcc: string;
    /**
     * Mobile network code (MNC).
     */
    mnc: string;
}

/**
 * Range of port numbers to use as translated ports on each translated address.
 * If not specified and NAPT is enabled, this range defaults to 1,024 - 49,999.
 * (Ports under 1,024 should not be used because these are special purpose ports reserved by IANA. Ports 50,000 and above are reserved for non-NAPT use.)
 */
export interface PortRangeResponse {
    /**
     * The maximum port number
     */
    maxPort?: number;
    /**
     * The minimum port number
     */
    minPort?: number;
}
/**
 * portRangeResponseProvideDefaults sets the appropriate defaults for PortRangeResponse
 */
export function portRangeResponseProvideDefaults(val: PortRangeResponse): PortRangeResponse {
    return {
        ...val,
        maxPort: (val.maxPort) ?? 49999,
        minPort: (val.minPort) ?? 1024,
    };
}

/**
 * The minimum time (in seconds) that will pass before a port that was used by a closed pinhole can be recycled for use by another pinhole. All hold times must be minimum 1 second.
 */
export interface PortReuseHoldTimesResponse {
    /**
     * Minimum time in seconds that will pass before a TCP port that was used by a closed pinhole can be reused. Default for TCP is 2 minutes.
     */
    tcp?: number;
    /**
     * Minimum time in seconds that will pass before a UDP port that was used by a closed pinhole can be reused. Default for UDP is 1 minute.
     */
    udp?: number;
}
/**
 * portReuseHoldTimesResponseProvideDefaults sets the appropriate defaults for PortReuseHoldTimesResponse
 */
export function portReuseHoldTimesResponseProvideDefaults(val: PortReuseHoldTimesResponse): PortReuseHoldTimesResponse {
    return {
        ...val,
        tcp: (val.tcp) ?? 120,
        udp: (val.udp) ?? 60,
    };
}

/**
 * Configuration relating to a particular PLMN
 */
export interface PublicLandMobileNetworkResponse {
    /**
     * Configuration relating to SUPI concealment.
     */
    homeNetworkPublicKeys?: PublicLandMobileNetworkResponseHomeNetworkPublicKeys;
    /**
     * Mobile country code (MCC).
     */
    mcc: string;
    /**
     * Mobile network code (MNC).
     */
    mnc: string;
}

/**
 * Configuration relating to SUPI concealment.
 */
export interface PublicLandMobileNetworkResponseHomeNetworkPublicKeys {
    /**
     * This provides a mapping to identify which public key has been used for SUPI concealment using the Profile A Protection Scheme.
     */
    profileA?: HomeNetworkPublicKeyResponse[];
    /**
     * This provides a mapping to identify which public key has been used for SUPI concealment using the Profile B Protection Scheme.
     */
    profileB?: HomeNetworkPublicKeyResponse[];
}

/**
 * QoS policy
 */
export interface QosPolicyResponse {
    /**
     * QoS Flow allocation and retention priority (ARP) level. Flows with higher priority preempt flows with lower priority, if the settings of `preemptionCapability` and `preemptionVulnerability` allow it. 1 is the highest level of priority. If this field is not specified then `5qi` is used to derive the ARP value. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters.
     */
    allocationAndRetentionPriorityLevel?: number;
    /**
     * 5G QoS Flow Indicator value. The 5QI identifies a specific QoS forwarding treatment to be provided to a flow. See 3GPP TS23.501 section 5.7.2.1 for a full description of the 5QI parameter, and table 5.7.4-1 for the definition the 5QI values.
     */
    fiveQi?: number;
    /**
     * The maximum bit rate (MBR) for all service data flows that use this data flow policy rule or service.
     */
    maximumBitRate: AmbrResponse;
    /**
     * QoS Flow preemption capability. The preemption capability of a QoS Flow controls whether it can preempt another QoS Flow with a lower priority level. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters.
     */
    preemptionCapability?: string;
    /**
     * QoS Flow preemption vulnerability. The preemption vulnerability of a QoS Flow controls whether it can be preempted by a QoS Flow with a higher priority level. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters.
     */
    preemptionVulnerability?: string;
}
/**
 * qosPolicyResponseProvideDefaults sets the appropriate defaults for QosPolicyResponse
 */
export function qosPolicyResponseProvideDefaults(val: QosPolicyResponse): QosPolicyResponse {
    return {
        ...val,
        allocationAndRetentionPriorityLevel: (val.allocationAndRetentionPriorityLevel) ?? 9,
        fiveQi: (val.fiveQi) ?? 9,
        preemptionCapability: (val.preemptionCapability) ?? "NotPreempt",
        preemptionVulnerability: (val.preemptionVulnerability) ?? "Preemptable",
    };
}

/**
 * Data flow template
 */
export interface ServiceDataFlowTemplateResponse {
    /**
     * The direction of this flow.
     */
    direction: string;
    /**
     * The port(s) to which UEs will connect for this flow. You can specify zero or more ports or port ranges. If you specify one or more ports or port ranges then you must specify a value other than `ip` in the `protocol` field. This is an optional setting. If you do not specify it then connections will be allowed on all ports. Port ranges must be specified as <FirstPort>-<LastPort>. For example: [`8080`, `8082-8085`].
     */
    ports?: string[];
    /**
     * A list of the allowed protocol(s) for this flow. If you want this flow to be able to use any protocol within the internet protocol suite, use the value `ip`. If you only want to allow a selection of protocols, you must use the corresponding IANA Assigned Internet Protocol Number for each protocol, as described in https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml. For example, for UDP, you must use 17. If you use the value `ip` then you must leave the field `port` unspecified.
     */
    protocol: string[];
    /**
     * The remote IP address(es) to which UEs will connect for this flow. If you want to allow connections on any IP address, use the value `any`. Otherwise, you must provide each of the remote IP addresses to which the packet core instance will connect for this flow. You must provide each IP address in CIDR notation, including the netmask (for example, 192.0.2.54/24).
     */
    remoteIpList: string[];
    /**
     * The name of the data flow template. This must be unique within the parent data flow policy rule. You must not use any of the following reserved strings - `default`, `requested` or `service`.
     */
    templateName: string;
}

/**
 * Reference to a service resource.
 */
export interface ServiceResourceIdResponse {
    /**
     * Service resource ID.
     */
    id: string;
}

/**
 * Signaling configuration for the packet core.
 */
export interface SignalingConfigurationResponse {
    /**
     * An ordered list of NAS encryption algorithms, used to encrypt control plane traffic between the UE and packet core, in order from most to least preferred. If not specified, the packet core will use a built-in default ordering.
     */
    nasEncryption?: string[];
    /**
     * Configuration enabling 4G NAS reroute.
     */
    nasReroute?: NASRerouteConfigurationResponse;
}

/**
 * SIM group resource.
 */
export interface SimGroupResponse {
    /**
     * A key to encrypt the SIM data that belongs to this SIM group.
     */
    encryptionKey?: KeyVaultKeyResponse;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    id: string;
    /**
     * The identity used to retrieve the encryption key from Azure key vault.
     */
    identity?: ManagedServiceIdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    location: string;
    /**
     * Mobile network that this SIM group belongs to. The mobile network must be in the same location as the SIM group.
     */
    mobileNetwork?: MobileNetworkResourceIdResponse;
    /**
     * The name of the resource
     */
    name: string;
    /**
     * The provisioning state of the SIM group resource.
     */
    provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    systemData: SystemDataResponse;
    /**
     * Resource tags.
     */
    tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    type: string;
}

/**
 * Reference to a SIM policy resource.
 */
export interface SimPolicyResourceIdResponse {
    /**
     * SIM policy resource ID.
     */
    id: string;
}

/**
 * Static IP configuration for a SIM, scoped to a particular attached data network and slice.
 */
export interface SimStaticIpPropertiesResponse {
    /**
     * The attached data network on which the static IP address will be used. The combination of attached data network and slice defines the network scope of the IP address. The attached data network must be in the same location as the SIM.
     */
    attachedDataNetwork?: AttachedDataNetworkResourceIdResponse;
    /**
     * The network slice on which the static IP address will be used. The combination of attached data network and slice defines the network scope of the IP address. The slice must be in the same location as the SIM.
     */
    slice?: SliceResourceIdResponse;
    /**
     * The static IP configuration for the SIM to use at the defined network scope.
     */
    staticIp?: SimStaticIpPropertiesResponseStaticIp;
}

/**
 * The static IP configuration for the SIM to use at the defined network scope.
 */
export interface SimStaticIpPropertiesResponseStaticIp {
    /**
     * The IPv4 address assigned to the SIM at this network scope. This address must be in the userEquipmentStaticAddressPoolPrefix defined in the attached data network.
     */
    ipv4Address?: string;
}

/**
 * Reference to a site resource.
 */
export interface SiteResourceIdResponse {
    /**
     * Site resource ID.
     */
    id: string;
}

/**
 * Per-slice settings
 */
export interface SliceConfigurationResponse {
    /**
     * The allowed data networks and the settings to use for them. The list must not contain duplicate items and must contain at least one item.
     */
    dataNetworkConfigurations: DataNetworkConfigurationResponse[];
    /**
     * The default data network to use if the UE does not explicitly specify it. Configuration for this object must exist in the `dataNetworkConfigurations` map. The data network must be in the same location as the SIM policy.
     */
    defaultDataNetwork: DataNetworkResourceIdResponse;
    /**
     * A reference to the slice that these settings apply to. The slice must be in the same location as the SIM policy.
     */
    slice: SliceResourceIdResponse;
}

/**
 * Reference to a slice resource.
 */
export interface SliceResourceIdResponse {
    /**
     * Slice resource ID.
     */
    id: string;
}

/**
 * Single-network slice selection assistance information (S-NSSAI).
 */
export interface SnssaiResponse {
    /**
     * Slice differentiator (SD).
     */
    sd?: string;
    /**
     * Slice/service type (SST).
     */
    sst: number;
}

/**
 * Reference to another sub resource.
 */
export interface SubResourceResponse {
    /**
     * Resource ID.
     */
    id: string;
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
 * User assigned identity properties
 */
export interface UserAssignedIdentityResponse {
    /**
     * The client ID of the assigned identity.
     */
    clientId: string;
    /**
     * The principal ID of the assigned identity.
     */
    principalId: string;
}

export interface UserConsentConfigurationResponse {
    /**
     * Allow Microsoft to access non-PII telemetry information from the packet core.
     */
    allowSupportTelemetryAccess?: boolean;
}
