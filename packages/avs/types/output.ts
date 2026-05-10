import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The properties of an Arc addon
 */
export interface AddonArcPropertiesResponse {
    /**
     * Addon type
     * Expected value is 'Arc'.
     */
    addonType: "Arc";
    /**
     * The state of the addon provisioning
     */
    provisioningState: string;
    /**
     * The VMware vCenter resource ID
     */
    vCenter?: string;
}

/**
 * The properties of an HCX addon
 */
export interface AddonHcxPropertiesResponse {
    /**
     * Addon type
     * Expected value is 'HCX'.
     */
    addonType: "HCX";
    /**
     * The HCX offer, example VMware MaaS Cloud Provider (Enterprise)
     */
    offer: string;
    /**
     * The state of the addon provisioning
     */
    provisioningState: string;
}

/**
 * The properties of a Site Recovery Manager (SRM) addon
 */
export interface AddonSrmPropertiesResponse {
    /**
     * Addon type
     * Expected value is 'SRM'.
     */
    addonType: "SRM";
    /**
     * The Site Recovery Manager (SRM) license
     */
    licenseKey?: string;
    /**
     * The state of the addon provisioning
     */
    provisioningState: string;
}

/**
 * The properties of a vSphere Replication (VR) addon
 */
export interface AddonVrPropertiesResponse {
    /**
     * Addon type
     * Expected value is 'VR'.
     */
    addonType: "VR";
    /**
     * The state of the addon provisioning
     */
    provisioningState: string;
    /**
     * The vSphere Replication Server (VRS) count
     */
    vrsCount: number;
}

/**
 * The properties describing private cloud availability zone distribution
 */
export interface AvailabilityPropertiesResponse {
    /**
     * The secondary availability zone for the private cloud
     */
    secondaryZone?: number;
    /**
     * The availability strategy for the private cloud
     */
    strategy?: string;
    /**
     * The primary availability zone for the private cloud
     */
    zone?: number;
}

/**
 * An ExpressRoute Circuit
 */
export interface CircuitResponse {
    /**
     * Identifier of the ExpressRoute Circuit (Microsoft Colo only)
     */
    expressRouteID: string;
    /**
     * ExpressRoute Circuit private peering identifier
     */
    expressRoutePrivatePeeringID: string;
    /**
     * CIDR of primary subnet
     */
    primarySubnet: string;
    /**
     * CIDR of secondary subnet
     */
    secondarySubnet: string;
}

/**
 * Zone and associated hosts info
 */
export interface ClusterZoneResponse {
    /**
     * List of hosts belonging to the availability zone in a cluster
     */
    hosts: string[];
    /**
     * Availability zone identifier
     */
    zone: string;
}

/**
 * An iSCSI volume from Microsoft.StoragePool provider
 */
export interface DiskPoolVolumeResponse {
    /**
     * Name of the LUN to be used for datastore
     */
    lunName: string;
    /**
     * Mode that describes whether the LUN has to be mounted as a datastore or
     * attached as a LUN
     */
    mountOption?: string;
    /**
     * Device path
     */
    path: string;
    /**
     * Azure resource ID of the iSCSI target
     */
    targetId: string;
}
/**
 * diskPoolVolumeResponseProvideDefaults sets the appropriate defaults for DiskPoolVolumeResponse
 */
export function diskPoolVolumeResponseProvideDefaults(val: DiskPoolVolumeResponse): DiskPoolVolumeResponse {
    return {
        ...val,
        mountOption: (val.mountOption) ?? "MOUNT",
    };
}

/**
 * An Elastic SAN volume from Microsoft.ElasticSan provider
 */
export interface ElasticSanVolumeResponse {
    /**
     * Azure resource ID of the Elastic SAN Volume
     */
    targetId: string;
}

/**
 * An Encryption Key
 */
export interface EncryptionKeyVaultPropertiesResponse {
    /**
     * The auto-detected version of the key if versionType is auto-detected.
     */
    autoDetectedKeyVersion: string;
    /**
     * The name of the key.
     */
    keyName?: string;
    /**
     * The state of key provided
     */
    keyState: string;
    /**
     * The URL of the vault.
     */
    keyVaultUrl?: string;
    /**
     * The version of the key.
     */
    keyVersion?: string;
    /**
     * Property of the key if user provided or auto detected
     */
    versionType: string;
}

/**
 * The properties of customer managed encryption key
 */
export interface EncryptionResponse {
    /**
     * The key vault where the encryption key is stored
     */
    keyVaultProperties?: EncryptionKeyVaultPropertiesResponse;
    /**
     * Status of customer managed encryption key
     */
    status?: string;
}

/**
 * Endpoint addresses
 */
export interface EndpointsResponse {
    /**
     * Endpoint FQDN for the HCX Cloud Manager
     */
    hcxCloudManager: string;
    /**
     * Endpoint IP for the HCX Cloud Manager
     */
    hcxCloudManagerIp: string;
    /**
     * Endpoint FQDN for the NSX-T Data Center manager
     */
    nsxtManager: string;
    /**
     * Endpoint IP for the NSX-T Data Center manager
     */
    nsxtManagerIp: string;
    /**
     * Endpoint IP for Virtual Center Server Appliance
     */
    vcenterIp: string;
    /**
     * Endpoint FQDN for Virtual Center Server Appliance
     */
    vcsa: string;
}

/**
 * vCenter Single Sign On Identity Source
 */
export interface IdentitySourceResponse {
    /**
     * The domain's NetBIOS name
     */
    alias?: string;
    /**
     * The base distinguished name for groups
     */
    baseGroupDN?: string;
    /**
     * The base distinguished name for users
     */
    baseUserDN?: string;
    /**
     * The domain's DNS name
     */
    domain?: string;
    /**
     * The name of the identity source
     */
    name?: string;
    /**
     * The password of the Active Directory user with a minimum of read-only access to
     * Base DN for users and groups.
     */
    password?: string;
    /**
     * Primary server URL
     */
    primaryServer?: string;
    /**
     * Secondary server URL
     */
    secondaryServer?: string;
    /**
     * Protect LDAP communication using SSL certificate (LDAPS)
     */
    ssl?: string;
    /**
     * The ID of an Active Directory user with a minimum of read-only access to Base
     * DN for users and group
     */
    username?: string;
}

/**
 * A key-value pair representing a label.
 */
export interface LabelResponse {
    /**
     * The key of the label.
     */
    key: string;
    /**
     * The value of the label.
     */
    value: string;
}

/**
 * The properties of a management cluster
 */
export interface ManagementClusterResponse {
    /**
     * The identity
     */
    clusterId: number;
    /**
     * The cluster size
     */
    clusterSize?: number;
    /**
     * The hosts
     */
    hosts?: string[];
    /**
     * The state of the cluster provisioning
     */
    provisioningState: string;
    /**
     * Name of the vsan datastore associated with the cluster
     */
    vsanDatastoreName?: string;
}

/**
 * An Azure NetApp Files volume from Microsoft.NetApp provider
 */
export interface NetAppVolumeResponse {
    /**
     * Azure resource ID of the NetApp volume
     */
    id: string;
}

/**
 * a powershell credential object
 */
export interface PSCredentialExecutionParameterResponse {
    /**
     * The parameter name
     */
    name: string;
    /**
     * password for login
     */
    password?: string;
    /**
     * script execution parameter type
     * Expected value is 'Credential'.
     */
    type: "Credential";
    /**
     * username for login
     */
    username?: string;
}

/**
 * a plain text value execution parameter
 */
export interface ScriptSecureStringExecutionParameterResponse {
    /**
     * The parameter name
     */
    name: string;
    /**
     * A secure value for the passed parameter, not to be stored in logs
     */
    secureValue?: string;
    /**
     * script execution parameter type
     * Expected value is 'SecureValue'.
     */
    type: "SecureValue";
}

/**
 * a plain text value execution parameter
 */
export interface ScriptStringExecutionParameterResponse {
    /**
     * The parameter name
     */
    name: string;
    /**
     * script execution parameter type
     * Expected value is 'Value'.
     */
    type: "Value";
    /**
     * The value for the passed parameter
     */
    value?: string;
}

/**
 * The resource model definition representing SKU
 */
export interface SkuResponse {
    /**
     * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
     */
    capacity?: number;
    /**
     * If the service has different generations of hardware, for the same SKU, then that can be captured here.
     */
    family?: string;
    /**
     * The name of the SKU. E.g. P3. It is typically a letter+number code
     */
    name: string;
    /**
     * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. 
     */
    size?: string;
    /**
     * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
     */
    tier?: string;
}

/**
 * Managed service identity (either system assigned, or none)
 */
export interface SystemAssignedServiceIdentityResponse {
    /**
     * The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
     */
    principalId: string;
    /**
     * The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
     */
    tenantId: string;
    /**
     * Type of managed service identity (either system assigned, or none).
     */
    type: string;
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
 * VM-Host placement policy properties
 */
export interface VmHostPlacementPolicyPropertiesResponse {
    /**
     * vm-host placement policy affinity strength (should/must)
     */
    affinityStrength?: string;
    /**
     * placement policy affinity type
     */
    affinityType: string;
    /**
     * placement policy azure hybrid benefit opt-in type
     */
    azureHybridBenefitType?: string;
    /**
     * Display name of the placement policy
     */
    displayName?: string;
    /**
     * Host members list
     */
    hostMembers: string[];
    /**
     * The provisioning state
     */
    provisioningState: string;
    /**
     * Whether the placement policy is enabled or disabled
     */
    state?: string;
    /**
     * Placement Policy type
     * Expected value is 'VmHost'.
     */
    type: "VmHost";
    /**
     * Virtual machine members list
     */
    vmMembers: string[];
}

/**
 * VM-VM placement policy properties
 */
export interface VmVmPlacementPolicyPropertiesResponse {
    /**
     * placement policy affinity type
     */
    affinityType: string;
    /**
     * Display name of the placement policy
     */
    displayName?: string;
    /**
     * The provisioning state
     */
    provisioningState: string;
    /**
     * Whether the placement policy is enabled or disabled
     */
    state?: string;
    /**
     * Placement Policy type
     * Expected value is 'VmVm'.
     */
    type: "VmVm";
    /**
     * Virtual machine members list
     */
    vmMembers: string[];
}

/**
 * The properties of a VMware Firewall license
 */
export interface VmwareFirewallLicensePropertiesResponse {
    /**
     * The Broadcom contract number associated with the license.
     */
    broadcomContractNumber?: string;
    /**
     * The Broadcom site ID associated with the license.
     */
    broadcomSiteId?: string;
    /**
     * Number of cores included in the license, measured per hour
     */
    cores: number;
    /**
     * UTC datetime when the license expires
     */
    endDate: string;
    /**
     * The kind of license.
     * Expected value is 'VmwareFirewall'.
     */
    kind: "VmwareFirewall";
    /**
     * Additional labels passed through for license reporting.
     */
    labels?: LabelResponse[];
    /**
     * License key
     */
    licenseKey?: string;
    /**
     * The state of the license provisioning
     */
    provisioningState: string;
}

/**
 * NSX DHCP Relay
 */
export interface WorkloadNetworkDhcpRelayResponse {
    /**
     * Type of DHCP: SERVER or RELAY.
     * Expected value is 'RELAY'.
     */
    dhcpType: "RELAY";
    /**
     * Display name of the DHCP entity.
     */
    displayName?: string;
    /**
     * The provisioning state
     */
    provisioningState: string;
    /**
     * NSX revision number.
     */
    revision?: number;
    /**
     * NSX Segments consuming DHCP.
     */
    segments: string[];
    /**
     * DHCP Relay Addresses. Max 3.
     */
    serverAddresses?: string[];
}

/**
 * NSX DHCP Server
 */
export interface WorkloadNetworkDhcpServerResponse {
    /**
     * Type of DHCP: SERVER or RELAY.
     * Expected value is 'SERVER'.
     */
    dhcpType: "SERVER";
    /**
     * Display name of the DHCP entity.
     */
    displayName?: string;
    /**
     * DHCP Server Lease Time.
     */
    leaseTime?: number;
    /**
     * The provisioning state
     */
    provisioningState: string;
    /**
     * NSX revision number.
     */
    revision?: number;
    /**
     * NSX Segments consuming DHCP.
     */
    segments: string[];
    /**
     * DHCP Server Address.
     */
    serverAddress?: string;
}

/**
 * Ports and any VIF attached to segment.
 */
export interface WorkloadNetworkSegmentPortVifResponse {
    /**
     * Name of port or VIF attached to segment.
     */
    portName?: string;
}

/**
 * Subnet configuration for segment
 */
export interface WorkloadNetworkSegmentSubnetResponse {
    /**
     * DHCP Range assigned for subnet.
     */
    dhcpRanges?: string[];
    /**
     * Gateway address.
     */
    gatewayAddress?: string;
}
