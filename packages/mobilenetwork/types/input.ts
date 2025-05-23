import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Aggregate maximum bit rate.
 */
export interface AmbrArgs {
    /**
     * Downlink bit rate.
     */
    downlink: pulumi.Input<string>;
    /**
     * Uplink bit rate.
     */
    uplink: pulumi.Input<string>;
}

/**
 * Reference to an attached data network resource.
 */
export interface AttachedDataNetworkResourceIdArgs {
    /**
     * Attached data network resource ID.
     */
    id: pulumi.Input<string>;
}

/**
 * Reference to an Azure Stack Edge device resource.
 */
export interface AzureStackEdgeDeviceResourceIdArgs {
    /**
     * Azure Stack Edge device resource ID.
     */
    id: pulumi.Input<string>;
}

/**
 * Reference to an Azure Stack HCI cluster resource.
 */
export interface AzureStackHCIClusterResourceIdArgs {
    /**
     * Azure Stack HCI cluster resource ID.
     */
    id: pulumi.Input<string>;
}

/**
 * Reference to an Azure Arc custom location resource.
 */
export interface ConnectedClusterResourceIdArgs {
    /**
     * Azure Arc connected cluster resource ID.
     */
    id: pulumi.Input<string>;
}

/**
 * Reference to an Azure Arc custom location resource.
 */
export interface CustomLocationResourceIdArgs {
    /**
     * Azure Arc custom location resource ID.
     */
    id: pulumi.Input<string>;
}

/**
 * Settings controlling data network use
 */
export interface DataNetworkConfigurationArgs {
    /**
     * Allowed session types in addition to the default session type. Must not duplicate the default session type.
     */
    additionalAllowedSessionTypes?: pulumi.Input<pulumi.Input<string | enums.PduSessionType>[]>;
    /**
     * Default QoS Flow allocation and retention priority (ARP) level. Flows with higher priority preempt flows with lower priority, if the settings of `preemptionCapability` and `preemptionVulnerability` allow it. 1 is the highest level of priority. If this field is not specified then `5qi` is used to derive the ARP value. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters.
     */
    allocationAndRetentionPriorityLevel?: pulumi.Input<number>;
    /**
     * List of services that can be used as part of this SIM policy. The list must not contain duplicate items and must contain at least one item. The services must be in the same location as the SIM policy.
     */
    allowedServices: pulumi.Input<pulumi.Input<ServiceResourceIdArgs>[]>;
    /**
     * A reference to the data network that these settings apply to. The data network must be in the same location as the SIM policy.
     */
    dataNetwork: pulumi.Input<DataNetworkResourceIdArgs>;
    /**
     * The default PDU session type, which is used if the UE does not request a specific session type.
     */
    defaultSessionType?: pulumi.Input<string | enums.PduSessionType>;
    /**
     * Default 5G QoS Flow Indicator value. The 5QI identifies a specific QoS forwarding treatment to be provided to a flow. See 3GPP TS23.501 section 5.7.2.1 for a full description of the 5QI parameter, and table 5.7.4-1 for the definition the 5QI values.
     */
    fiveQi?: pulumi.Input<number>;
    /**
     * The maximum number of downlink packets to buffer at the user plane for High Latency Communication - Extended Buffering. See 3GPP TS29.272 v15.10.0 section 7.3.188 for a full description. This maximum is not guaranteed because there is a internal limit on buffered packets across all PDU sessions.
     */
    maximumNumberOfBufferedPackets?: pulumi.Input<number>;
    /**
     * Default QoS Flow preemption capability. The preemption capability of a QoS Flow controls whether it can preempt another QoS Flow with a lower priority level. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters.
     */
    preemptionCapability?: pulumi.Input<string | enums.PreemptionCapability>;
    /**
     * Default QoS Flow preemption vulnerability. The preemption vulnerability of a QoS Flow controls whether it can be preempted by a QoS Flow with a higher priority level. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters.
     */
    preemptionVulnerability?: pulumi.Input<string | enums.PreemptionVulnerability>;
    /**
     * Aggregate maximum bit rate across all non-GBR QoS flows of a given PDU session. See 3GPP TS23.501 section 5.7.2.6 for a full description of the Session-AMBR.
     */
    sessionAmbr: pulumi.Input<AmbrArgs>;
}
/**
 * dataNetworkConfigurationArgsProvideDefaults sets the appropriate defaults for DataNetworkConfigurationArgs
 */
export function dataNetworkConfigurationArgsProvideDefaults(val: DataNetworkConfigurationArgs): DataNetworkConfigurationArgs {
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
export interface DataNetworkResourceIdArgs {
    /**
     * Data network resource ID.
     */
    id: pulumi.Input<string>;
}

/**
 * Configuration for uploading packet core diagnostics.
 */
export interface DiagnosticsUploadConfigurationArgs {
    /**
     * The Storage Account Container URL to upload diagnostics to.
     */
    storageAccountContainerUrl: pulumi.Input<string>;
}

/**
 * Configuration for sending packet core events to Azure Event Hub.
 */
export interface EventHubConfigurationArgs {
    /**
     * Resource ID  of Azure Event Hub to send packet core events to.
     */
    id: pulumi.Input<string>;
    /**
     * The duration (in seconds) between UE usage reports.
     */
    reportingInterval?: pulumi.Input<number>;
}
/**
 * eventHubConfigurationArgsProvideDefaults sets the appropriate defaults for EventHubConfigurationArgs
 */
export function eventHubConfigurationArgsProvideDefaults(val: EventHubConfigurationArgs): EventHubConfigurationArgs {
    return {
        ...val,
        reportingInterval: (val.reportingInterval) ?? 1800,
    };
}

/**
 * A key used for SUPI concealment.
 */
export interface HomeNetworkPublicKeyArgs {
    /**
     * The Home Network Public Key Identifier determines which public key was used to generate the SUCI sent to the AMF. See TS 23.003 Section 2.2B Section 5.
     */
    id: pulumi.Input<number>;
    /**
     * The URL of Azure Key Vault secret containing the private key, versioned or unversioned. For example: https://contosovault.vault.azure.net/secrets/mySuciPrivateKey/562a4bb76b524a1493a6afe8e536ee78.
     */
    url?: pulumi.Input<string>;
}

/**
 * HTTPS server certificate configuration.
 */
export interface HttpsServerCertificateArgs {
    /**
     * The certificate URL, unversioned. For example: https://contosovault.vault.azure.net/certificates/ingress.
     */
    certificateUrl: pulumi.Input<string>;
}

/**
 * The installation state of the packet core.
 */
export interface InstallationArgs {
    /**
     * The desired installation state
     */
    desiredState?: pulumi.Input<string | enums.DesiredInstallationState>;
}
/**
 * installationArgsProvideDefaults sets the appropriate defaults for InstallationArgs
 */
export function installationArgsProvideDefaults(val: InstallationArgs): InstallationArgs {
    return {
        ...val,
        desiredState: (val.desiredState) ?? "Installed",
    };
}

/**
 * Interface properties
 */
export interface InterfacePropertiesArgs {
    /**
     * The IPv4 addresses of the endpoints to send BFD probes to.
     */
    bfdIpv4Endpoints?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The IPv4 address.
     */
    ipv4Address?: pulumi.Input<string>;
    /**
     * The list of IPv4 addresses, for a multi-node system.
     */
    ipv4AddressList?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The default IPv4 gateway (router).
     */
    ipv4Gateway?: pulumi.Input<string>;
    /**
     * The IPv4 subnet.
     */
    ipv4Subnet?: pulumi.Input<string>;
    /**
     * The logical name for this interface. This should match one of the interfaces configured on your Azure Stack Edge device.
     */
    name?: pulumi.Input<string>;
    /**
     * VLAN identifier of the network interface. Example: 501.
     */
    vlanId?: pulumi.Input<number>;
}

/**
 * An Azure key vault key.
 */
export interface KeyVaultKeyArgs {
    /**
     * The key URL, unversioned. For example: https://contosovault.vault.azure.net/keys/azureKey.
     */
    keyUrl?: pulumi.Input<string>;
}

/**
 * The kubernetes ingress configuration to control access to packet core diagnostics over local APIs.
 */
export interface LocalDiagnosticsAccessConfigurationArgs {
    /**
     * How to authenticate users who access local diagnostics APIs.
     */
    authenticationType: pulumi.Input<string | enums.AuthenticationType>;
    /**
     * The HTTPS server TLS certificate used to secure local access to diagnostics.
     */
    httpsServerCertificate?: pulumi.Input<HttpsServerCertificateArgs>;
}

/**
 * Managed service identity (User assigned identity)
 */
export interface ManagedServiceIdentityArgs {
    /**
     * Type of managed service identity (currently only UserAssigned allowed).
     */
    type: pulumi.Input<string | enums.ManagedServiceIdentityType>;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Reference to a mobile network resource.
 */
export interface MobileNetworkResourceIdArgs {
    /**
     * Mobile network resource ID.
     */
    id: pulumi.Input<string>;
}

/**
 * Configuration enabling NAS reroute.
 */
export interface NASRerouteConfigurationArgs {
    /**
     * The macro network's MME group ID. This is where unknown UEs are sent to via NAS reroute.
     */
    macroMmeGroupId: pulumi.Input<number>;
}

/**
 * The network address and port translation settings to use for the attached data network.
 */
export interface NaptConfigurationArgs {
    /**
     * Whether NAPT is enabled for connections to this attached data network.
     */
    enabled?: pulumi.Input<string | enums.NaptEnabled>;
    /**
     * Maximum number of UDP and TCP pinholes that can be open simultaneously on the core interface. For 5G networks, this is the N6 interface. For 4G networks, this is the SGi interface.
     */
    pinholeLimits?: pulumi.Input<number>;
    /**
     * Expiry times of inactive NAPT pinholes, in seconds. All timers must be at least 1 second.
     */
    pinholeTimeouts?: pulumi.Input<PinholeTimeoutsArgs>;
    /**
     * Range of port numbers to use as translated ports on each translated address.
     * If not specified and NAPT is enabled, this range defaults to 1,024 - 49,999.
     * (Ports under 1,024 should not be used because these are special purpose ports reserved by IANA. Ports 50,000 and above are reserved for non-NAPT use.)
     */
    portRange?: pulumi.Input<PortRangeArgs>;
    /**
     * The minimum time (in seconds) that will pass before a port that was used by a closed pinhole can be recycled for use by another pinhole. All hold times must be at least 1 second.
     */
    portReuseHoldTime?: pulumi.Input<PortReuseHoldTimesArgs>;
}
/**
 * naptConfigurationArgsProvideDefaults sets the appropriate defaults for NaptConfigurationArgs
 */
export function naptConfigurationArgsProvideDefaults(val: NaptConfigurationArgs): NaptConfigurationArgs {
    return {
        ...val,
        pinholeLimits: (val.pinholeLimits) ?? 65536,
        pinholeTimeouts: (val.pinholeTimeouts ? pulumi.output(val.pinholeTimeouts).apply(pinholeTimeoutsArgsProvideDefaults) : undefined),
        portRange: (val.portRange ? pulumi.output(val.portRange).apply(portRangeArgsProvideDefaults) : undefined),
        portReuseHoldTime: (val.portReuseHoldTime ? pulumi.output(val.portReuseHoldTime).apply(portReuseHoldTimesArgsProvideDefaults) : undefined),
    };
}

/**
 * Data flow policy rule configuration
 */
export interface PccRuleConfigurationArgs {
    /**
     * The name of the rule. This must be unique within the parent service. You must not use any of the following reserved strings - `default`, `requested` or `service`.
     */
    ruleName: pulumi.Input<string>;
    /**
     * A precedence value that is used to decide between data flow policy rules when identifying the QoS values to use for a particular SIM. A lower value means a higher priority. This value should be unique among all data flow policy rules configured in the mobile network.
     */
    rulePrecedence: pulumi.Input<number>;
    /**
     * The QoS policy to use for packets matching this rule. If this field is null then the parent service will define the QoS settings.
     */
    ruleQosPolicy?: pulumi.Input<PccRuleQosPolicyArgs>;
    /**
     * The set of data flow templates to use for this data flow policy rule.
     */
    serviceDataFlowTemplates: pulumi.Input<pulumi.Input<ServiceDataFlowTemplateArgs>[]>;
    /**
     * Determines whether flows that match this data flow policy rule are permitted.
     */
    trafficControl?: pulumi.Input<string | enums.TrafficControlPermission>;
}
/**
 * pccRuleConfigurationArgsProvideDefaults sets the appropriate defaults for PccRuleConfigurationArgs
 */
export function pccRuleConfigurationArgsProvideDefaults(val: PccRuleConfigurationArgs): PccRuleConfigurationArgs {
    return {
        ...val,
        ruleQosPolicy: (val.ruleQosPolicy ? pulumi.output(val.ruleQosPolicy).apply(pccRuleQosPolicyArgsProvideDefaults) : undefined),
        trafficControl: (val.trafficControl) ?? "Enabled",
    };
}

/**
 * Data flow policy rule QoS policy
 */
export interface PccRuleQosPolicyArgs {
    /**
     * QoS Flow allocation and retention priority (ARP) level. Flows with higher priority preempt flows with lower priority, if the settings of `preemptionCapability` and `preemptionVulnerability` allow it. 1 is the highest level of priority. If this field is not specified then `5qi` is used to derive the ARP value. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters.
     */
    allocationAndRetentionPriorityLevel?: pulumi.Input<number>;
    /**
     * 5G QoS Flow Indicator value. The 5QI identifies a specific QoS forwarding treatment to be provided to a flow. See 3GPP TS23.501 section 5.7.2.1 for a full description of the 5QI parameter, and table 5.7.4-1 for the definition the 5QI values.
     */
    fiveQi?: pulumi.Input<number>;
    /**
     * The guaranteed bit rate (GBR) for all service data flows that use this data flow policy rule. This is an optional setting. If you do not provide a value, there will be no GBR set for the data flow policy rule that uses this QoS definition.
     */
    guaranteedBitRate?: pulumi.Input<AmbrArgs>;
    /**
     * The maximum bit rate (MBR) for all service data flows that use this data flow policy rule or service.
     */
    maximumBitRate: pulumi.Input<AmbrArgs>;
    /**
     * QoS Flow preemption capability. The preemption capability of a QoS Flow controls whether it can preempt another QoS Flow with a lower priority level. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters.
     */
    preemptionCapability?: pulumi.Input<string | enums.PreemptionCapability>;
    /**
     * QoS Flow preemption vulnerability. The preemption vulnerability of a QoS Flow controls whether it can be preempted by a QoS Flow with a higher priority level. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters.
     */
    preemptionVulnerability?: pulumi.Input<string | enums.PreemptionVulnerability>;
}
/**
 * pccRuleQosPolicyArgsProvideDefaults sets the appropriate defaults for PccRuleQosPolicyArgs
 */
export function pccRuleQosPolicyArgsProvideDefaults(val: PccRuleQosPolicyArgs): PccRuleQosPolicyArgs {
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
export interface PinholeTimeoutsArgs {
    /**
     * Pinhole timeout for ICMP pinholes in seconds. Default for ICMP Echo is 30 seconds.
     */
    icmp?: pulumi.Input<number>;
    /**
     * Pinhole timeout for TCP pinholes in seconds. Default for TCP is 3 minutes.
     */
    tcp?: pulumi.Input<number>;
    /**
     * Pinhole timeout for UDP pinholes in seconds. Default for UDP is 30 seconds.
     */
    udp?: pulumi.Input<number>;
}
/**
 * pinholeTimeoutsArgsProvideDefaults sets the appropriate defaults for PinholeTimeoutsArgs
 */
export function pinholeTimeoutsArgsProvideDefaults(val: PinholeTimeoutsArgs): PinholeTimeoutsArgs {
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
export interface PlatformConfigurationArgs {
    /**
     * The Azure Stack Edge device where the packet core is deployed. If the device is part of a fault tolerant pair, either device in the pair can be specified.
     */
    azureStackEdgeDevice?: pulumi.Input<AzureStackEdgeDeviceResourceIdArgs>;
    /**
     * The Azure Stack HCI cluster where the packet core is deployed.
     */
    azureStackHciCluster?: pulumi.Input<AzureStackHCIClusterResourceIdArgs>;
    /**
     * Azure Arc connected cluster where the packet core is deployed.
     */
    connectedCluster?: pulumi.Input<ConnectedClusterResourceIdArgs>;
    /**
     * Azure Arc custom location where the packet core is deployed.
     */
    customLocation?: pulumi.Input<CustomLocationResourceIdArgs>;
    /**
     * The platform type where packet core is deployed.
     */
    type: pulumi.Input<string | enums.PlatformType>;
}

/**
 * Public land mobile network (PLMN) ID. This is made up of the mobile country code and mobile network code, as defined in https://www.itu.int/rec/T-REC-E.212. The values 001-01 and 001-001 can be used for testing and the values 999-99 and 999-999 can be used on internal private networks.
 */
export interface PlmnIdArgs {
    /**
     * Mobile country code (MCC).
     */
    mcc: pulumi.Input<string>;
    /**
     * Mobile network code (MNC).
     */
    mnc: pulumi.Input<string>;
}

/**
 * Range of port numbers to use as translated ports on each translated address.
 * If not specified and NAPT is enabled, this range defaults to 1,024 - 49,999.
 * (Ports under 1,024 should not be used because these are special purpose ports reserved by IANA. Ports 50,000 and above are reserved for non-NAPT use.)
 */
export interface PortRangeArgs {
    /**
     * The maximum port number
     */
    maxPort?: pulumi.Input<number>;
    /**
     * The minimum port number
     */
    minPort?: pulumi.Input<number>;
}
/**
 * portRangeArgsProvideDefaults sets the appropriate defaults for PortRangeArgs
 */
export function portRangeArgsProvideDefaults(val: PortRangeArgs): PortRangeArgs {
    return {
        ...val,
        maxPort: (val.maxPort) ?? 49999,
        minPort: (val.minPort) ?? 1024,
    };
}

/**
 * The minimum time (in seconds) that will pass before a port that was used by a closed pinhole can be recycled for use by another pinhole. All hold times must be minimum 1 second.
 */
export interface PortReuseHoldTimesArgs {
    /**
     * Minimum time in seconds that will pass before a TCP port that was used by a closed pinhole can be reused. Default for TCP is 2 minutes.
     */
    tcp?: pulumi.Input<number>;
    /**
     * Minimum time in seconds that will pass before a UDP port that was used by a closed pinhole can be reused. Default for UDP is 1 minute.
     */
    udp?: pulumi.Input<number>;
}
/**
 * portReuseHoldTimesArgsProvideDefaults sets the appropriate defaults for PortReuseHoldTimesArgs
 */
export function portReuseHoldTimesArgsProvideDefaults(val: PortReuseHoldTimesArgs): PortReuseHoldTimesArgs {
    return {
        ...val,
        tcp: (val.tcp) ?? 120,
        udp: (val.udp) ?? 60,
    };
}

/**
 * Configuration relating to a particular PLMN
 */
export interface PublicLandMobileNetworkArgs {
    /**
     * Configuration relating to SUPI concealment.
     */
    homeNetworkPublicKeys?: pulumi.Input<PublicLandMobileNetworkHomeNetworkPublicKeysArgs>;
    /**
     * Mobile country code (MCC).
     */
    mcc: pulumi.Input<string>;
    /**
     * Mobile network code (MNC).
     */
    mnc: pulumi.Input<string>;
}

/**
 * Configuration relating to SUPI concealment.
 */
export interface PublicLandMobileNetworkHomeNetworkPublicKeysArgs {
    /**
     * This provides a mapping to identify which public key has been used for SUPI concealment using the Profile A Protection Scheme.
     */
    profileA?: pulumi.Input<pulumi.Input<HomeNetworkPublicKeyArgs>[]>;
    /**
     * This provides a mapping to identify which public key has been used for SUPI concealment using the Profile B Protection Scheme.
     */
    profileB?: pulumi.Input<pulumi.Input<HomeNetworkPublicKeyArgs>[]>;
}

/**
 * QoS policy
 */
export interface QosPolicyArgs {
    /**
     * QoS Flow allocation and retention priority (ARP) level. Flows with higher priority preempt flows with lower priority, if the settings of `preemptionCapability` and `preemptionVulnerability` allow it. 1 is the highest level of priority. If this field is not specified then `5qi` is used to derive the ARP value. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters.
     */
    allocationAndRetentionPriorityLevel?: pulumi.Input<number>;
    /**
     * 5G QoS Flow Indicator value. The 5QI identifies a specific QoS forwarding treatment to be provided to a flow. See 3GPP TS23.501 section 5.7.2.1 for a full description of the 5QI parameter, and table 5.7.4-1 for the definition the 5QI values.
     */
    fiveQi?: pulumi.Input<number>;
    /**
     * The maximum bit rate (MBR) for all service data flows that use this data flow policy rule or service.
     */
    maximumBitRate: pulumi.Input<AmbrArgs>;
    /**
     * QoS Flow preemption capability. The preemption capability of a QoS Flow controls whether it can preempt another QoS Flow with a lower priority level. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters.
     */
    preemptionCapability?: pulumi.Input<string | enums.PreemptionCapability>;
    /**
     * QoS Flow preemption vulnerability. The preemption vulnerability of a QoS Flow controls whether it can be preempted by a QoS Flow with a higher priority level. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters.
     */
    preemptionVulnerability?: pulumi.Input<string | enums.PreemptionVulnerability>;
}
/**
 * qosPolicyArgsProvideDefaults sets the appropriate defaults for QosPolicyArgs
 */
export function qosPolicyArgsProvideDefaults(val: QosPolicyArgs): QosPolicyArgs {
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
export interface ServiceDataFlowTemplateArgs {
    /**
     * The direction of this flow.
     */
    direction: pulumi.Input<string | enums.SdfDirection>;
    /**
     * The port(s) to which UEs will connect for this flow. You can specify zero or more ports or port ranges. If you specify one or more ports or port ranges then you must specify a value other than `ip` in the `protocol` field. This is an optional setting. If you do not specify it then connections will be allowed on all ports. Port ranges must be specified as <FirstPort>-<LastPort>. For example: [`8080`, `8082-8085`].
     */
    ports?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of the allowed protocol(s) for this flow. If you want this flow to be able to use any protocol within the internet protocol suite, use the value `ip`. If you only want to allow a selection of protocols, you must use the corresponding IANA Assigned Internet Protocol Number for each protocol, as described in https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml. For example, for UDP, you must use 17. If you use the value `ip` then you must leave the field `port` unspecified.
     */
    protocol: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The remote IP address(es) to which UEs will connect for this flow. If you want to allow connections on any IP address, use the value `any`. Otherwise, you must provide each of the remote IP addresses to which the packet core instance will connect for this flow. You must provide each IP address in CIDR notation, including the netmask (for example, 192.0.2.54/24).
     */
    remoteIpList: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the data flow template. This must be unique within the parent data flow policy rule. You must not use any of the following reserved strings - `default`, `requested` or `service`.
     */
    templateName: pulumi.Input<string>;
}

/**
 * Reference to a service resource.
 */
export interface ServiceResourceIdArgs {
    /**
     * Service resource ID.
     */
    id: pulumi.Input<string>;
}

/**
 * Signaling configuration for the packet core.
 */
export interface SignalingConfigurationArgs {
    /**
     * An ordered list of NAS encryption algorithms, used to encrypt control plane traffic between the UE and packet core, in order from most to least preferred. If not specified, the packet core will use a built-in default ordering.
     */
    nasEncryption?: pulumi.Input<pulumi.Input<string | enums.NasEncryptionType>[]>;
    /**
     * Configuration enabling 4G NAS reroute.
     */
    nasReroute?: pulumi.Input<NASRerouteConfigurationArgs>;
}

/**
 * Reference to a SIM policy resource.
 */
export interface SimPolicyResourceIdArgs {
    /**
     * SIM policy resource ID.
     */
    id: pulumi.Input<string>;
}

/**
 * Static IP configuration for a SIM, scoped to a particular attached data network and slice.
 */
export interface SimStaticIpPropertiesArgs {
    /**
     * The attached data network on which the static IP address will be used. The combination of attached data network and slice defines the network scope of the IP address. The attached data network must be in the same location as the SIM.
     */
    attachedDataNetwork?: pulumi.Input<AttachedDataNetworkResourceIdArgs>;
    /**
     * The network slice on which the static IP address will be used. The combination of attached data network and slice defines the network scope of the IP address. The slice must be in the same location as the SIM.
     */
    slice?: pulumi.Input<SliceResourceIdArgs>;
    /**
     * The static IP configuration for the SIM to use at the defined network scope.
     */
    staticIp?: pulumi.Input<SimStaticIpPropertiesStaticIpArgs>;
}

/**
 * The static IP configuration for the SIM to use at the defined network scope.
 */
export interface SimStaticIpPropertiesStaticIpArgs {
    /**
     * The IPv4 address assigned to the SIM at this network scope. This address must be in the userEquipmentStaticAddressPoolPrefix defined in the attached data network.
     */
    ipv4Address?: pulumi.Input<string>;
}

/**
 * Reference to a site resource.
 */
export interface SiteResourceIdArgs {
    /**
     * Site resource ID.
     */
    id: pulumi.Input<string>;
}

/**
 * Per-slice settings
 */
export interface SliceConfigurationArgs {
    /**
     * The allowed data networks and the settings to use for them. The list must not contain duplicate items and must contain at least one item.
     */
    dataNetworkConfigurations: pulumi.Input<pulumi.Input<DataNetworkConfigurationArgs>[]>;
    /**
     * The default data network to use if the UE does not explicitly specify it. Configuration for this object must exist in the `dataNetworkConfigurations` map. The data network must be in the same location as the SIM policy.
     */
    defaultDataNetwork: pulumi.Input<DataNetworkResourceIdArgs>;
    /**
     * A reference to the slice that these settings apply to. The slice must be in the same location as the SIM policy.
     */
    slice: pulumi.Input<SliceResourceIdArgs>;
}

/**
 * Reference to a slice resource.
 */
export interface SliceResourceIdArgs {
    /**
     * Slice resource ID.
     */
    id: pulumi.Input<string>;
}

/**
 * Single-network slice selection assistance information (S-NSSAI).
 */
export interface SnssaiArgs {
    /**
     * Slice differentiator (SD).
     */
    sd?: pulumi.Input<string>;
    /**
     * Slice/service type (SST).
     */
    sst: pulumi.Input<number>;
}

export interface UserConsentConfigurationArgs {
    /**
     * Allow Microsoft to access non-PII telemetry information from the packet core.
     */
    allowSupportTelemetryAccess?: pulumi.Input<boolean>;
}
