import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
     * Mode that describes whether the LUN has to be mounted as a datastore or
     * attached as a LUN
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
     * The password of the Active Directory user with a minimum of read-only access to
     * Base DN for users and groups.
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
     * The ID of an Active Directory user with a minimum of read-only access to Base
     * DN for users and group
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
    clusterSize?: pulumi.Input<number>;
    /**
     * The hosts
     */
    hosts?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of the vsan datastore associated with the cluster
     */
    vsanDatastoreName?: pulumi.Input<string>;
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
     * script execution parameter type
     * Expected value is 'Credential'.
     */
    type: pulumi.Input<"Credential">;
    /**
     * username for login
     */
    username?: pulumi.Input<string>;
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
    value?: pulumi.Input<string>;
}

/**
 * The resource model definition representing SKU
 */
export interface SkuArgs {
    /**
     * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
     */
    capacity?: pulumi.Input<number>;
    /**
     * If the service has different generations of hardware, for the same SKU, then that can be captured here.
     */
    family?: pulumi.Input<string>;
    /**
     * The name of the SKU. E.g. P3. It is typically a letter+number code
     */
    name: pulumi.Input<string>;
    /**
     * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. 
     */
    size?: pulumi.Input<string>;
    /**
     * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
     */
    tier?: pulumi.Input<enums.SkuTier>;
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
