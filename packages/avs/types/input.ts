import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The properties of an Arc addon
 */
export interface AddonArcPropertiesArgs {
    /**
     * The type of private cloud addon
     * Expected value is 'Arc'.
     */
    addonType: pulumi.Input<"Arc">;
    /**
     * The VMware vCenter resource ID
     */
    vCenter?: pulumi.Input<string>;
}

/**
 * The properties of an HCX addon
 */
export interface AddonHcxPropertiesArgs {
    /**
     * The type of private cloud addon
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
     * The type of private cloud addon
     * Expected value is 'SRM'.
     */
    addonType: pulumi.Input<"SRM">;
    /**
     * The Site Recovery Manager (SRM) license
     */
    licenseKey?: pulumi.Input<string>;
}

/**
 * The properties of a vSphere Replication (VR) addon
 */
export interface AddonVrPropertiesArgs {
    /**
     * The type of private cloud addon
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
    secondaryZone?: pulumi.Input<number>;
    /**
     * The availability strategy for the private cloud
     */
    strategy?: pulumi.Input<string | enums.AvailabilityStrategy>;
    /**
     * The primary availability zone for the private cloud
     */
    zone?: pulumi.Input<number>;
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
     * Mode that describes whether the LUN has to be mounted as a datastore or attached as a LUN
     */
    mountOption?: pulumi.Input<string | enums.MountOptionEnum>;
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
 * The properties of customer managed encryption key
 */
export interface EncryptionArgs {
    /**
     * The key vault where the encryption key is stored
     */
    keyVaultProperties?: pulumi.Input<EncryptionKeyVaultPropertiesArgs>;
    /**
     * Status of customer managed encryption key
     */
    status?: pulumi.Input<string | enums.EncryptionState>;
}

/**
 * An Encryption Key
 */
export interface EncryptionKeyVaultPropertiesArgs {
    /**
     * The name of the key.
     */
    keyName?: pulumi.Input<string>;
    /**
     * The URL of the vault.
     */
    keyVaultUrl?: pulumi.Input<string>;
    /**
     * The version of the key.
     */
    keyVersion?: pulumi.Input<string>;
}

/**
 * vCenter Single Sign On Identity Source
 */
export interface IdentitySourceArgs {
    /**
     * The domain's NetBIOS name
     */
    alias?: pulumi.Input<string>;
    /**
     * The base distinguished name for groups
     */
    baseGroupDN?: pulumi.Input<string>;
    /**
     * The base distinguished name for users
     */
    baseUserDN?: pulumi.Input<string>;
    /**
     * The domain's dns name
     */
    domain?: pulumi.Input<string>;
    /**
     * The name of the identity source
     */
    name?: pulumi.Input<string>;
    /**
     * The password of the Active Directory user with a minimum of read-only access to Base DN for users and groups.
     */
    password?: pulumi.Input<string>;
    /**
     * Primary server URL
     */
    primaryServer?: pulumi.Input<string>;
    /**
     * Secondary server URL
     */
    secondaryServer?: pulumi.Input<string>;
    /**
     * Protect LDAP communication using SSL certificate (LDAPS)
     */
    ssl?: pulumi.Input<string | enums.SslEnum>;
    /**
     * The ID of an Active Directory user with a minimum of read-only access to Base DN for users and group
     */
    username?: pulumi.Input<string>;
}

/**
 * The properties of a management cluster
 */
export interface ManagementClusterArgs {
    /**
     * The cluster size
     */
    clusterSize: pulumi.Input<number>;
    /**
     * The hosts
     */
    hosts?: pulumi.Input<pulumi.Input<string>[]>;
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
    password?: pulumi.Input<string>;
    /**
     * The type of execution parameter
     * Expected value is 'Credential'.
     */
    type: pulumi.Input<"Credential">;
    /**
     * username for login
     */
    username?: pulumi.Input<string>;
}

/**
 * Identity for the virtual machine.
 */
export interface PrivateCloudIdentityArgs {
    /**
     * The type of identity used for the private cloud. The type 'SystemAssigned' refers to an implicitly created identity. The type 'None' will remove any identities from the Private Cloud.
     */
    type?: pulumi.Input<string | enums.ResourceIdentityType>;
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
    secureValue?: pulumi.Input<string>;
    /**
     * The type of execution parameter
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
     * The type of execution parameter
     * Expected value is 'Value'.
     */
    type: pulumi.Input<"Value">;
    /**
     * The value for the passed parameter
     */
    value?: pulumi.Input<string>;
}

/**
 * The resource model definition representing SKU
 */
export interface SkuArgs {
    /**
     * The name of the SKU.
     */
    name: pulumi.Input<string>;
}

/**
 * VM-Host placement policy properties
 */
export interface VmHostPlacementPolicyPropertiesArgs {
    /**
     * vm-host placement policy affinity strength (should/must)
     */
    affinityStrength?: pulumi.Input<string | enums.AffinityStrength>;
    /**
     * placement policy affinity type
     */
    affinityType: pulumi.Input<string | enums.AffinityType>;
    /**
     * placement policy azure hybrid benefit opt-in type
     */
    azureHybridBenefitType?: pulumi.Input<string | enums.AzureHybridBenefitType>;
    /**
     * Display name of the placement policy
     */
    displayName?: pulumi.Input<string>;
    /**
     * Host members list
     */
    hostMembers: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Whether the placement policy is enabled or disabled
     */
    state?: pulumi.Input<string | enums.PlacementPolicyState>;
    /**
     * placement policy type
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
    displayName?: pulumi.Input<string>;
    /**
     * Whether the placement policy is enabled or disabled
     */
    state?: pulumi.Input<string | enums.PlacementPolicyState>;
    /**
     * placement policy type
     * Expected value is 'VmVm'.
     */
    type: pulumi.Input<"VmVm">;
    /**
     * Virtual machine members list
     */
    vmMembers: pulumi.Input<pulumi.Input<string>[]>;
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
    displayName?: pulumi.Input<string>;
    /**
     * NSX revision number.
     */
    revision?: pulumi.Input<number>;
    /**
     * DHCP Relay Addresses. Max 3.
     */
    serverAddresses?: pulumi.Input<pulumi.Input<string>[]>;
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
    displayName?: pulumi.Input<string>;
    /**
     * DHCP Server Lease Time.
     */
    leaseTime?: pulumi.Input<number>;
    /**
     * NSX revision number.
     */
    revision?: pulumi.Input<number>;
    /**
     * DHCP Server Address.
     */
    serverAddress?: pulumi.Input<string>;
}

/**
 * Subnet configuration for segment
 */
export interface WorkloadNetworkSegmentSubnetArgs {
    /**
     * DHCP Range assigned for subnet.
     */
    dhcpRanges?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Gateway address.
     */
    gatewayAddress?: pulumi.Input<string>;
}




