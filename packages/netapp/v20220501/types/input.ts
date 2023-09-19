import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Encryption settings
     */
    export interface AccountEncryptionArgs {
        /**
         * Identity used to authenticate to KeyVault. Applicable if keySource is 'Microsoft.KeyVault'.
         */
        identity?: pulumi.Input<EncryptionIdentityArgs>;
        /**
         * The encryption keySource (provider). Possible values (case-insensitive):  Microsoft.NetApp, Microsoft.KeyVault
         */
        keySource?: pulumi.Input<string | enums.KeySource>;
        /**
         * Properties provided by KeVault. Applicable if keySource is 'Microsoft.KeyVault'.
         */
        keyVaultProperties?: pulumi.Input<KeyVaultPropertiesArgs>;
    }
    /**
     * accountEncryptionArgsProvideDefaults sets the appropriate defaults for AccountEncryptionArgs
     */
    export function accountEncryptionArgsProvideDefaults(val: AccountEncryptionArgs): AccountEncryptionArgs {
        return {
            ...val,
            keySource: (val.keySource) ?? "Microsoft.NetApp",
        };
    }

    /**
     * Active Directory
     */
    export interface ActiveDirectoryArgs {
        /**
         * Id of the Active Directory
         */
        activeDirectoryId?: pulumi.Input<string>;
        /**
         * Name of the active directory machine. This optional parameter is used only while creating kerberos volume
         */
        adName?: pulumi.Input<string>;
        /**
         * Users to be added to the Built-in Administrators active directory group. A list of unique usernames without domain specifier
         */
        administrators?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * If enabled, AES encryption will be enabled for SMB communication.
         */
        aesEncryption?: pulumi.Input<boolean>;
        /**
         *  If enabled, NFS client local users can also (in addition to LDAP users) access the NFS volumes.
         */
        allowLocalNfsUsersWithLdap?: pulumi.Input<boolean>;
        /**
         * Users to be added to the Built-in Backup Operator active directory group. A list of unique usernames without domain specifier
         */
        backupOperators?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Comma separated list of DNS server IP addresses (IPv4 only) for the Active Directory domain
         */
        dns?: pulumi.Input<string>;
        /**
         * Name of the Active Directory domain
         */
        domain?: pulumi.Input<string>;
        /**
         * If enabled, Traffic between the SMB server to Domain Controller (DC) will be encrypted.
         */
        encryptDCConnections?: pulumi.Input<boolean>;
        /**
         * kdc server IP addresses for the active directory machine. This optional parameter is used only while creating kerberos volume.
         */
        kdcIP?: pulumi.Input<string>;
        /**
         * Specifies whether or not the LDAP traffic needs to be secured via TLS.
         */
        ldapOverTLS?: pulumi.Input<boolean>;
        /**
         * LDAP Search scope options
         */
        ldapSearchScope?: pulumi.Input<LdapSearchScopeOptArgs>;
        /**
         * Specifies whether or not the LDAP traffic needs to be signed.
         */
        ldapSigning?: pulumi.Input<boolean>;
        /**
         * The Organizational Unit (OU) within the Windows Active Directory
         */
        organizationalUnit?: pulumi.Input<string>;
        /**
         * Plain text password of Active Directory domain administrator, value is masked in the response
         */
        password?: pulumi.Input<string>;
        /**
         * Domain Users in the Active directory to be given SeSecurityPrivilege privilege (Needed for SMB Continuously available shares for SQL). A list of unique usernames without domain specifier
         */
        securityOperators?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * When LDAP over SSL/TLS is enabled, the LDAP client is required to have base64 encoded Active Directory Certificate Service's self-signed root CA certificate, this optional parameter is used only for dual protocol with LDAP user-mapping volumes.
         */
        serverRootCACertificate?: pulumi.Input<string>;
        /**
         * The Active Directory site the service will limit Domain Controller discovery to
         */
        site?: pulumi.Input<string>;
        /**
         * NetBIOS name of the SMB server. This name will be registered as a computer account in the AD and used to mount volumes
         */
        smbServerName?: pulumi.Input<string>;
        /**
         * A domain user account with permission to create machine accounts
         */
        username?: pulumi.Input<string>;
    }
    /**
     * activeDirectoryArgsProvideDefaults sets the appropriate defaults for ActiveDirectoryArgs
     */
    export function activeDirectoryArgsProvideDefaults(val: ActiveDirectoryArgs): ActiveDirectoryArgs {
        return {
            ...val,
            organizationalUnit: (val.organizationalUnit) ?? "CN=Computers",
        };
    }

    /**
     * Identity used to authenticate with key vault.
     */
    export interface EncryptionIdentityArgs {
        /**
         * The ARM resource identifier of the user assigned identity used to authenticate with key vault. Applicable if identity.type has 'UserAssigned'. It should match key of identity.userAssignedIdentities.
         */
        userAssignedIdentity?: pulumi.Input<string>;
    }

    /**
     * Identity for the resource.
     */
    export interface IdentityArgs {
        /**
         * The identity type.
         */
        type: pulumi.Input<string | enums.IdentityType>;
        /**
         * Gets or sets a list of key value pairs that describe the set of User Assigned identities that will be used with this storage account. The key is the ARM resource identifier of the identity. Only 1 User Assigned identity is permitted here.
         */
        userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Properties of key vault.
     */
    export interface KeyVaultPropertiesArgs {
        /**
         * The name of KeyVault key.
         */
        keyName: pulumi.Input<string>;
        /**
         * The resource ID of KeyVault.
         */
        keyVaultResourceId: pulumi.Input<string>;
        /**
         * The Uri of KeyVault.
         */
        keyVaultUri: pulumi.Input<string>;
    }

    /**
     * LDAP search scope 
     */
    export interface LdapSearchScopeOptArgs {
        /**
         * This specifies the group DN, which overrides the base DN for group lookups.
         */
        groupDN?: pulumi.Input<string>;
        /**
         * This specifies the custom LDAP search filter to be used when looking up group membership from LDAP server.
         */
        groupMembershipFilter?: pulumi.Input<string>;
        /**
         * This specifies the user DN, which overrides the base DN for user lookups.
         */
        userDN?: pulumi.Input<string>;
    }
