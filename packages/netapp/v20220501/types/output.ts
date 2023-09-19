import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Encryption settings
     */
    export interface AccountEncryptionResponse {
        /**
         * Identity used to authenticate to KeyVault. Applicable if keySource is 'Microsoft.KeyVault'.
         */
        identity?: EncryptionIdentityResponse;
        /**
         * The encryption keySource (provider). Possible values (case-insensitive):  Microsoft.NetApp, Microsoft.KeyVault
         */
        keySource?: string;
        /**
         * Properties provided by KeVault. Applicable if keySource is 'Microsoft.KeyVault'.
         */
        keyVaultProperties?: KeyVaultPropertiesResponse;
    }
    /**
     * accountEncryptionResponseProvideDefaults sets the appropriate defaults for AccountEncryptionResponse
     */
    export function accountEncryptionResponseProvideDefaults(val: AccountEncryptionResponse): AccountEncryptionResponse {
        return {
            ...val,
            keySource: (val.keySource) ?? "Microsoft.NetApp",
        };
    }

    /**
     * Active Directory
     */
    export interface ActiveDirectoryResponse {
        /**
         * Id of the Active Directory
         */
        activeDirectoryId?: string;
        /**
         * Name of the active directory machine. This optional parameter is used only while creating kerberos volume
         */
        adName?: string;
        /**
         * Users to be added to the Built-in Administrators active directory group. A list of unique usernames without domain specifier
         */
        administrators?: string[];
        /**
         * If enabled, AES encryption will be enabled for SMB communication.
         */
        aesEncryption?: boolean;
        /**
         *  If enabled, NFS client local users can also (in addition to LDAP users) access the NFS volumes.
         */
        allowLocalNfsUsersWithLdap?: boolean;
        /**
         * Users to be added to the Built-in Backup Operator active directory group. A list of unique usernames without domain specifier
         */
        backupOperators?: string[];
        /**
         * Comma separated list of DNS server IP addresses (IPv4 only) for the Active Directory domain
         */
        dns?: string;
        /**
         * Name of the Active Directory domain
         */
        domain?: string;
        /**
         * If enabled, Traffic between the SMB server to Domain Controller (DC) will be encrypted.
         */
        encryptDCConnections?: boolean;
        /**
         * kdc server IP addresses for the active directory machine. This optional parameter is used only while creating kerberos volume.
         */
        kdcIP?: string;
        /**
         * Specifies whether or not the LDAP traffic needs to be secured via TLS.
         */
        ldapOverTLS?: boolean;
        /**
         * LDAP Search scope options
         */
        ldapSearchScope?: LdapSearchScopeOptResponse;
        /**
         * Specifies whether or not the LDAP traffic needs to be signed.
         */
        ldapSigning?: boolean;
        /**
         * The Organizational Unit (OU) within the Windows Active Directory
         */
        organizationalUnit?: string;
        /**
         * Plain text password of Active Directory domain administrator, value is masked in the response
         */
        password?: string;
        /**
         * Domain Users in the Active directory to be given SeSecurityPrivilege privilege (Needed for SMB Continuously available shares for SQL). A list of unique usernames without domain specifier
         */
        securityOperators?: string[];
        /**
         * When LDAP over SSL/TLS is enabled, the LDAP client is required to have base64 encoded Active Directory Certificate Service's self-signed root CA certificate, this optional parameter is used only for dual protocol with LDAP user-mapping volumes.
         */
        serverRootCACertificate?: string;
        /**
         * The Active Directory site the service will limit Domain Controller discovery to
         */
        site?: string;
        /**
         * NetBIOS name of the SMB server. This name will be registered as a computer account in the AD and used to mount volumes
         */
        smbServerName?: string;
        /**
         * Status of the Active Directory
         */
        status: string;
        /**
         * Any details in regards to the Status of the Active Directory
         */
        statusDetails: string;
        /**
         * A domain user account with permission to create machine accounts
         */
        username?: string;
    }
    /**
     * activeDirectoryResponseProvideDefaults sets the appropriate defaults for ActiveDirectoryResponse
     */
    export function activeDirectoryResponseProvideDefaults(val: ActiveDirectoryResponse): ActiveDirectoryResponse {
        return {
            ...val,
            organizationalUnit: (val.organizationalUnit) ?? "CN=Computers",
        };
    }

    /**
     * Identity used to authenticate with key vault.
     */
    export interface EncryptionIdentityResponse {
        /**
         * The principal ID (object ID) of the identity used to authenticate with key vault. Read-only.
         */
        principalId: string;
        /**
         * The ARM resource identifier of the user assigned identity used to authenticate with key vault. Applicable if identity.type has 'UserAssigned'. It should match key of identity.userAssignedIdentities.
         */
        userAssignedIdentity?: string;
    }

    /**
     * Identity for the resource.
     */
    export interface IdentityResponse {
        /**
         * The principal ID of resource identity.
         */
        principalId: string;
        /**
         * The tenant ID of resource.
         */
        tenantId: string;
        /**
         * The identity type.
         */
        type: string;
        /**
         * Gets or sets a list of key value pairs that describe the set of User Assigned identities that will be used with this storage account. The key is the ARM resource identifier of the identity. Only 1 User Assigned identity is permitted here.
         */
        userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
    }

    /**
     * Properties of key vault.
     */
    export interface KeyVaultPropertiesResponse {
        /**
         * The name of KeyVault key.
         */
        keyName: string;
        /**
         * UUID v4 used to identify the Azure Key Vault configuration
         */
        keyVaultId: string;
        /**
         * The resource ID of KeyVault.
         */
        keyVaultResourceId: string;
        /**
         * The Uri of KeyVault.
         */
        keyVaultUri: string;
        /**
         * Status of the KeyVault connection.
         */
        status: string;
    }

    /**
     * LDAP search scope 
     */
    export interface LdapSearchScopeOptResponse {
        /**
         * This specifies the group DN, which overrides the base DN for group lookups.
         */
        groupDN?: string;
        /**
         * This specifies the custom LDAP search filter to be used when looking up group membership from LDAP server.
         */
        groupMembershipFilter?: string;
        /**
         * This specifies the user DN, which overrides the base DN for user lookups.
         */
        userDN?: string;
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
     * UserAssignedIdentity for the resource.
     */
    export interface UserAssignedIdentityResponse {
        /**
         * The client ID of the identity.
         */
        clientId: string;
        /**
         * The principal ID of the identity.
         */
        principalId: string;
    }
