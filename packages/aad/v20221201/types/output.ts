import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Configuration Diagnostics
     */
    export interface ConfigDiagnosticsResponse {
        /**
         * Last domain configuration diagnostics DateTime
         */
        lastExecuted?: string;
        /**
         * List of Configuration Diagnostics validator results.
         */
        validatorResults?: ConfigDiagnosticsValidatorResultResponse[];
    }

    /**
     * Specific issue for a particular config diagnostics validator
     */
    export interface ConfigDiagnosticsValidatorResultIssueResponse {
        /**
         * List of domain resource property name or values used to compose a rich description.
         */
        descriptionParams?: string[];
        /**
         * Validation issue identifier.
         */
        id?: string;
    }

    /**
     * Config Diagnostics validator result data
     */
    export interface ConfigDiagnosticsValidatorResultResponse {
        /**
         * List of resource config validation issues.
         */
        issues?: ConfigDiagnosticsValidatorResultIssueResponse[];
        /**
         * Replica set location and subnet name
         */
        replicaSetSubnetDisplayName?: string;
        /**
         * Status for individual validator after running diagnostics.
         */
        status?: string;
        /**
         * Validator identifier
         */
        validatorId?: string;
    }
    /**
     * configDiagnosticsValidatorResultResponseProvideDefaults sets the appropriate defaults for ConfigDiagnosticsValidatorResultResponse
     */
    export function configDiagnosticsValidatorResultResponseProvideDefaults(val: ConfigDiagnosticsValidatorResultResponse): ConfigDiagnosticsValidatorResultResponse {
        return {
            ...val,
            status: (val.status) ?? "None",
        };
    }

    /**
     * Container Account Description
     */
    export interface ContainerAccountResponse {
        /**
         * The account name
         */
        accountName?: string;
        /**
         * The account password
         */
        password?: string;
        /**
         * The account spn
         */
        spn?: string;
    }

    /**
     * Domain Security Settings
     */
    export interface DomainSecuritySettingsResponse {
        /**
         * A flag to determine whether or not ChannelBinding is enabled or disabled.
         */
        channelBinding?: string;
        /**
         * A flag to determine whether or not KerberosArmoring is enabled or disabled.
         */
        kerberosArmoring?: string;
        /**
         * A flag to determine whether or not KerberosRc4Encryption is enabled or disabled.
         */
        kerberosRc4Encryption?: string;
        /**
         * A flag to determine whether or not LdapSigning is enabled or disabled.
         */
        ldapSigning?: string;
        /**
         * A flag to determine whether or not NtlmV1 is enabled or disabled.
         */
        ntlmV1?: string;
        /**
         * A flag to determine whether or not SyncKerberosPasswords is enabled or disabled.
         */
        syncKerberosPasswords?: string;
        /**
         * A flag to determine whether or not SyncNtlmPasswords is enabled or disabled.
         */
        syncNtlmPasswords?: string;
        /**
         * A flag to determine whether or not SyncOnPremPasswords is enabled or disabled.
         */
        syncOnPremPasswords?: string;
        /**
         * A flag to determine whether or not TlsV1 is enabled or disabled.
         */
        tlsV1?: string;
    }
    /**
     * domainSecuritySettingsResponseProvideDefaults sets the appropriate defaults for DomainSecuritySettingsResponse
     */
    export function domainSecuritySettingsResponseProvideDefaults(val: DomainSecuritySettingsResponse): DomainSecuritySettingsResponse {
        return {
            ...val,
            channelBinding: (val.channelBinding) ?? "Disabled",
            kerberosArmoring: (val.kerberosArmoring) ?? "Disabled",
            kerberosRc4Encryption: (val.kerberosRc4Encryption) ?? "Enabled",
            ldapSigning: (val.ldapSigning) ?? "Disabled",
            ntlmV1: (val.ntlmV1) ?? "Enabled",
            syncKerberosPasswords: (val.syncKerberosPasswords) ?? "Enabled",
            syncNtlmPasswords: (val.syncNtlmPasswords) ?? "Enabled",
            syncOnPremPasswords: (val.syncOnPremPasswords) ?? "Enabled",
            tlsV1: (val.tlsV1) ?? "Enabled",
        };
    }

    /**
     * Forest Trust Setting
     */
    export interface ForestTrustResponse {
        /**
         * Friendly Name
         */
        friendlyName?: string;
        /**
         * Remote Dns ips
         */
        remoteDnsIps?: string;
        /**
         * Trust Direction
         */
        trustDirection?: string;
        /**
         * Trust Password
         */
        trustPassword?: string;
        /**
         * Trusted Domain FQDN
         */
        trustedDomainFqdn?: string;
    }

    /**
     * Health Alert Description
     */
    export interface HealthAlertResponse {
        /**
         * Health Alert Id
         */
        id: string;
        /**
         * Health Alert Issue
         */
        issue: string;
        /**
         * Health Alert Last Detected DateTime
         */
        lastDetected: string;
        /**
         * Health Alert Name
         */
        name: string;
        /**
         * Health Alert Raised DateTime
         */
        raised: string;
        /**
         * Health Alert TSG Link
         */
        resolutionUri: string;
        /**
         * Health Alert Severity
         */
        severity: string;
    }

    /**
     * Health Monitor Description
     */
    export interface HealthMonitorResponse {
        /**
         * Health Monitor Details
         */
        details: string;
        /**
         * Health Monitor Id
         */
        id: string;
        /**
         * Health Monitor Name
         */
        name: string;
    }

    /**
     * Secure LDAP Settings
     */
    export interface LdapsSettingsResponse {
        /**
         * NotAfter DateTime of configure ldaps certificate.
         */
        certificateNotAfter: string;
        /**
         * Thumbprint of configure ldaps certificate.
         */
        certificateThumbprint: string;
        /**
         * A flag to determine whether or not Secure LDAP access over the internet is enabled or disabled.
         */
        externalAccess?: string;
        /**
         * A flag to determine whether or not Secure LDAP is enabled or disabled.
         */
        ldaps?: string;
        /**
         * The certificate required to configure Secure LDAP. The parameter passed here should be a base64encoded representation of the certificate pfx file.
         */
        pfxCertificate?: string;
        /**
         * The password to decrypt the provided Secure LDAP certificate pfx file.
         */
        pfxCertificatePassword?: string;
        /**
         * Public certificate used to configure secure ldap.
         */
        publicCertificate: string;
    }
    /**
     * ldapsSettingsResponseProvideDefaults sets the appropriate defaults for LdapsSettingsResponse
     */
    export function ldapsSettingsResponseProvideDefaults(val: LdapsSettingsResponse): LdapsSettingsResponse {
        return {
            ...val,
            externalAccess: (val.externalAccess) ?? "Disabled",
            ldaps: (val.ldaps) ?? "Disabled",
        };
    }

    /**
     * Migration Progress
     */
    export interface MigrationProgressResponse {
        /**
         * Completion Percentage
         */
        completionPercentage?: number;
        /**
         * Progress Message
         */
        progressMessage?: string;
    }

    /**
     * Migration Properties
     */
    export interface MigrationPropertiesResponse {
        /**
         * Migration Progress
         */
        migrationProgress: MigrationProgressResponse;
        /**
         * Old Subnet Id
         */
        oldSubnetId: string;
        /**
         * Old Vnet Site Id
         */
        oldVnetSiteId: string;
    }

    /**
     * Settings for notification
     */
    export interface NotificationSettingsResponse {
        /**
         * The list of additional recipients
         */
        additionalRecipients?: string[];
        /**
         * Should domain controller admins be notified
         */
        notifyDcAdmins?: string;
        /**
         * Should global admins be notified
         */
        notifyGlobalAdmins?: string;
    }

    /**
     * Replica Set Definition
     */
    export interface ReplicaSetResponse {
        /**
         * List of Domain Controller IP Address
         */
        domainControllerIpAddress: string[];
        /**
         * External access ip address.
         */
        externalAccessIpAddress: string;
        /**
         * List of Domain Health Alerts
         */
        healthAlerts: HealthAlertResponse[];
        /**
         * Last domain evaluation run DateTime
         */
        healthLastEvaluated: string;
        /**
         * List of Domain Health Monitors
         */
        healthMonitors: HealthMonitorResponse[];
        /**
         * Virtual network location
         */
        location?: string;
        /**
         * ReplicaSet Id
         */
        replicaSetId: string;
        /**
         * Status of Domain Service instance
         */
        serviceStatus: string;
        /**
         * The name of the virtual network that Domain Services will be deployed on. The id of the subnet that Domain Services will be deployed on. /virtualNetwork/vnetName/subnets/subnetName.
         */
        subnetId?: string;
        /**
         * Virtual network site id
         */
        vnetSiteId: string;
    }

    /**
     * Settings for Resource Forest
     */
    export interface ResourceForestSettingsResponse {
        /**
         * Resource Forest
         */
        resourceForest?: string;
        /**
         * List of settings for Resource Forest
         */
        settings?: ForestTrustResponse[];
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
