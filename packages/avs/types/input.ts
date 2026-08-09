import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The properties of an Arc addon
 */
export interface AddonArcPropertiesArgs {
    /**
     * Addon type
     * Expected value is 'Arc'.
     */
    addonType: pulumi.Input<"Arc">;
    /**
     * The VMware vCenter resource ID
     */
    vCenter?: pulumi.Input<string | undefined>;
}

/**
 * The properties of an HCX addon
 */
export interface AddonHcxPropertiesArgs {
    /**
     * Addon type
     * Expected value is 'HCX'.
     */
    addonType: pulumi.Input<"HCX">;
    /**
     * The HCX offer, example VMware MaaS Cloud Provider (Enterprise)
     */
    offer: pulumi.Input<string>;
}

/**
 * The properties of a Site Recovery Manager (SRM) addon
 */
export interface AddonSrmPropertiesArgs {
    /**
     * Addon type
     * Expected value is 'SRM'.
     */
    addonType: pulumi.Input<"SRM">;
    /**
     * The Site Recovery Manager (SRM) license
     */
    licenseKey?: pulumi.Input<string | undefined>;
}

/**
 * The properties of a vSphere Replication (VR) addon
 */
export interface AddonVrPropertiesArgs {
    /**
     * Addon type
     * Expected value is 'VR'.
     */
    addonType: pulumi.Input<"VR">;
    /**
     * The vSphere Replication Server (VRS) count
     */
    vrsCount: pulumi.Input<number>;
}

/**
 * The properties describing private cloud availability zone distribution
 */
export interface AvailabilityPropertiesArgs {
    /**
     * The secondary availability zone for the private cloud
     */
    secondaryZone?: pulumi.Input<number | undefined>;
    /**
     * The availability strategy for the private cloud
     */
    strategy?: pulumi.Input<string | enums.AvailabilityStrategy | undefined>;
    /**
     * The primary availability zone for the private cloud
     */
    zone?: pulumi.Input<number | undefined>;
}

/**
 * An iSCSI volume from Microsoft.StoragePool provider
 */
export interface DiskPoolVolumeArgs {
    /**
     * Name of the LUN to be used for datastore
     */
    lunName: pulumi.Input<string>;
    /**
     * Mode that describes whether the LUN has to be mounted as a datastore or
     * attached as a LUN
     */
    mountOption?: pulumi.Input<string | enums.MountOptionEnum | undefined>;
    /**
     * Azure resource ID of the iSCSI target
     */
    targetId: pulumi.Input<string>;
}
/**
 * diskPoolVolumeArgsProvideDefaults sets the appropriate defaults for DiskPoolVolumeArgs
 */
export function diskPoolVolumeArgsProvideDefaults(val: DiskPoolVolumeArgs): DiskPoolVolumeArgs {
    return {
        ...val,
        mountOption: (val.mountOption) ?? "MOUNT",
    };
}

/**
 * An Elastic SAN volume from Microsoft.ElasticSan provider
 */
export interface ElasticSanVolumeArgs {
    /**
     * Azure resource ID of the Elastic SAN Volume
     */
    targetId: pulumi.Input<string>;
}

/**
 * The properties of customer managed encryption key
 */
export interface EncryptionArgs {
    /**
     * The key vault where the encryption key is stored
     */
    keyVaultProperties?: pulumi.Input<EncryptionKeyVaultPropertiesArgs | undefined>;
    /**
     * Status of customer managed encryption key
     */
    status?: pulumi.Input<string | enums.EncryptionState | undefined>;
}

/**
 * An Encryption Key
 */
export interface EncryptionKeyVaultPropertiesArgs {
    /**
     * The name of the key.
     */
    keyName?: pulumi.Input<string | undefined>;
    /**
     * The URL of the vault.
     */
    keyVaultUrl?: pulumi.Input<string | undefined>;
    /**
     * The version of the key.
     */
    keyVersion?: pulumi.Input<string | undefined>;
}

/**
 * vCenter Single Sign On Identity Source
 */
export interface IdentitySourceArgs {
    /**
     * The domain's NetBIOS name
     */
    alias?: pulumi.Input<string | undefined>;
    /**
     * The base distinguished name for groups
     */
    baseGroupDN?: pulumi.Input<string | undefined>;
    /**
     * The base distinguished name for users
     */
    baseUserDN?: pulumi.Input<string | undefined>;
    /**
     * The domain's DNS name
     */
    domain?: pulumi.Input<string | undefined>;
    /**
     * The name of the identity source
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * The password of the Active Directory user with a minimum of read-only access to
     * Base DN for users and groups.
     */
    password?: pulumi.Input<string | undefined>;
    /**
     * Primary server URL
     */
    primaryServer?: pulumi.Input<string | undefined>;
    /**
     * Secondary server URL
     */
    secondaryServer?: pulumi.Input<string | undefined>;
    /**
     * Protect LDAP communication using SSL certificate (LDAPS)
     */
    ssl?: pulumi.Input<string | enums.SslEnum | undefined>;
    /**
     * The ID of an Active Directory user with a minimum of read-only access to Base
     * DN for users and group
     */
    username?: pulumi.Input<string | undefined>;
}

/**
 * A key-value pair representing a label.
 */
export interface LabelArgs {
    /**
     * The key of the label.
     */
    key: pulumi.Input<string>;
    /**
     * The value of the label.
     */
    value: pulumi.Input<string>;
}

/**
 * The properties of a management cluster
 */
export interface ManagementClusterArgs {
    /**
     * The cluster size
     */
    clusterSize?: pulumi.Input<number | undefined>;
    /**
     * The hosts
     */
    hosts?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Name of the vsan datastore associated with the cluster
     */
    vsanDatastoreName?: pulumi.Input<string | undefined>;
}

/**
 * An Azure NetApp Files volume from Microsoft.NetApp provider
 */
export interface NetAppVolumeArgs {
    /**
     * Azure resource ID of the NetApp volume
     */
    id: pulumi.Input<string>;
}

/**
 * a powershell credential object
 */
export interface PSCredentialExecutionParameterArgs {
    /**
     * The parameter name
     */
    name: pulumi.Input<string>;
    /**
     * password for login
     */
    password?: pulumi.Input<string | undefined>;
    /**
     * script execution parameter type
     * Expected value is 'Credential'.
     */
    type: pulumi.Input<"Credential">;
    /**
     * username for login
     */
    username?: pulumi.Input<string | undefined>;
}

/**
 * a plain text value execution parameter
 */
export interface ScriptSecureStringExecutionParameterArgs {
    /**
     * The parameter name
     */
    name: pulumi.Input<string>;
    /**
     * A secure value for the passed parameter, not to be stored in logs
     */
    secureValue?: pulumi.Input<string | undefined>;
    /**
     * script execution parameter type
     * Expected value is 'SecureValue'.
     */
    type: pulumi.Input<"SecureValue">;
}

/**
 * a plain text value execution parameter
 */
export interface ScriptStringExecutionParameterArgs {
    /**
     * The parameter name
     */
    name: pulumi.Input<string>;
    /**
     * script execution parameter type
     * Expected value is 'Value'.
     */
    type: pulumi.Input<"Value">;
    /**
     * The value for the passed parameter
     */
    value?: pulumi.Input<string | undefined>;
}

/**
 * The resource model definition representing SKU
 */
export interface SkuArgs {
    /**
     * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
     */
    capacity?: pulumi.Input<number | undefined>;
    /**
     * If the service has different generations of hardware, for the same SKU, then that can be captured here.
     */
    family?: pulumi.Input<string | undefined>;
    /**
     * The name of the SKU. E.g. P3. It is typically a letter+number code
     */
    name: pulumi.Input<string>;
    /**
     * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
     */
    size?: pulumi.Input<string | undefined>;
    /**
     * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
     */
    tier?: pulumi.Input<enums.SkuTier | undefined>;
}

/**
 * Managed service identity (either system assigned, or none)
 */
export interface SystemAssignedServiceIdentityArgs {
    /**
     * Type of managed service identity (either system assigned, or none).
     */
    type: pulumi.Input<string | enums.SystemAssignedServiceIdentityType>;
}

/**
 * VM-Host placement policy properties
 */
export interface VmHostPlacementPolicyPropertiesArgs {
    /**
     * vm-host placement policy affinity strength (should/must)
     */
    affinityStrength?: pulumi.Input<string | enums.AffinityStrength | undefined>;
    /**
     * placement policy affinity type
     */
    affinityType: pulumi.Input<string | enums.AffinityType>;
    /**
     * placement policy azure hybrid benefit opt-in type
     */
    azureHybridBenefitType?: pulumi.Input<string | enums.AzureHybridBenefitType | undefined>;
    /**
     * Display name of the placement policy
     */
    displayName?: pulumi.Input<string | undefined>;
    /**
     * Host members list
     */
    hostMembers: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Whether the placement policy is enabled or disabled
     */
    state?: pulumi.Input<string | enums.PlacementPolicyState | undefined>;
    /**
     * Placement Policy type
     * Expected value is 'VmHost'.
     */
    type: pulumi.Input<"VmHost">;
    /**
     * Virtual machine members list
     */
    vmMembers: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * VM-VM placement policy properties
 */
export interface VmVmPlacementPolicyPropertiesArgs {
    /**
     * placement policy affinity type
     */
    affinityType: pulumi.Input<string | enums.AffinityType>;
    /**
     * Display name of the placement policy
     */
    displayName?: pulumi.Input<string | undefined>;
    /**
     * Whether the placement policy is enabled or disabled
     */
    state?: pulumi.Input<string | enums.PlacementPolicyState | undefined>;
    /**
     * Placement Policy type
     * Expected value is 'VmVm'.
     */
    type: pulumi.Input<"VmVm">;
    /**
     * Virtual machine members list
     */
    vmMembers: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The properties of a VMware Firewall license
 */
export interface VmwareFirewallLicensePropertiesArgs {
    /**
     * The Broadcom contract number associated with the license.
     */
    broadcomContractNumber?: pulumi.Input<string | undefined>;
    /**
     * The Broadcom site ID associated with the license.
     */
    broadcomSiteId?: pulumi.Input<string | undefined>;
    /**
     * Number of cores included in the license, measured per hour
     */
    cores: pulumi.Input<number>;
    /**
     * UTC datetime when the license expires
     */
    endDate: pulumi.Input<string>;
    /**
     * The kind of license.
     * Expected value is 'VmwareFirewall'.
     */
    kind: pulumi.Input<"VmwareFirewall">;
    /**
     * Additional labels passed through for license reporting.
     */
    labels?: pulumi.Input<pulumi.Input<LabelArgs>[] | undefined>;
    /**
     * License key
     */
    licenseKey?: pulumi.Input<string | undefined>;
}

/**
 * NSX DHCP Relay
 */
export interface WorkloadNetworkDhcpRelayArgs {
    /**
     * Type of DHCP: SERVER or RELAY.
     * Expected value is 'RELAY'.
     */
    dhcpType: pulumi.Input<"RELAY">;
    /**
     * Display name of the DHCP entity.
     */
    displayName?: pulumi.Input<string | undefined>;
    /**
     * NSX revision number.
     */
    revision?: pulumi.Input<number | undefined>;
    /**
     * DHCP Relay Addresses. Max 3.
     */
    serverAddresses?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * NSX DHCP Server
 */
export interface WorkloadNetworkDhcpServerArgs {
    /**
     * Type of DHCP: SERVER or RELAY.
     * Expected value is 'SERVER'.
     */
    dhcpType: pulumi.Input<"SERVER">;
    /**
     * Display name of the DHCP entity.
     */
    displayName?: pulumi.Input<string | undefined>;
    /**
     * DHCP Server Lease Time.
     */
    leaseTime?: pulumi.Input<number | undefined>;
    /**
     * NSX revision number.
     */
    revision?: pulumi.Input<number | undefined>;
    /**
     * DHCP Server Address.
     */
    serverAddress?: pulumi.Input<string | undefined>;
}

/**
 * Subnet configuration for segment
 */
export interface WorkloadNetworkSegmentSubnetArgs {
    /**
     * DHCP Range assigned for subnet.
     */
    dhcpRanges?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Gateway address.
     */
    gatewayAddress?: pulumi.Input<string | undefined>;
}
