import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The properties to maximize savings by using Azure Hybrid Benefit
     */
    export interface AzureHybridBenefitPropertiesResponse {
        /**
         * SCOM license type. Maximize savings by using license you already own
         */
        scomLicenseType?: string;
        /**
         * SQL Server license type. Maximize savings by using Azure Hybrid Benefit for SQL Server with license you already own
         */
        sqlServerLicenseType?: string;
        /**
         * Specifies that the image or disk that is being used was licensed on-premises. <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-hybrid-use-benefit-licensing?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json)
         */
        windowsServerLicenseType?: string;
    }

    /**
     * The properties of database instance
     */
    export interface DatabaseInstancePropertiesResponse {
        /**
         * Fully qualified domain name of existing database instance
         */
        databaseFqdn: string;
        /**
         * Resource Id of existing database instance
         */
        databaseInstanceId?: string;
        /**
         * Resource Id of warehouse database on database instance
         */
        dwDatabaseId: string;
        /**
         * Name of warehouse database on database instance
         */
        dwDatabaseName: string;
        /**
         * Resource Id of operational database on database instance
         */
        operationalDatabaseId: string;
    }

    /**
     * The properties of domain controller to which SCOM and SQL servers join for AuthN/AuthZ.
     */
    export interface DomainControllerPropertiesResponse {
        /**
         * IP address of DNS server 
         */
        dnsServer?: string;
        /**
         * Fully qualified domain name
         */
        domainName?: string;
        /**
         * Organizational Unit path in which the SCOM servers will be present
         */
        ouPath?: string;
    }
    /**
     * domainControllerPropertiesResponseProvideDefaults sets the appropriate defaults for DomainControllerPropertiesResponse
     */
    export function domainControllerPropertiesResponseProvideDefaults(val: DomainControllerPropertiesResponse): DomainControllerPropertiesResponse {
        return {
            ...val,
            ouPath: (val.ouPath) ?? "",
        };
    }

    /**
     * Get Domain user name and password from key vault
     */
    export interface DomainUserCredentialsResponse {
        /**
         * Key vault url to get the domain username and password
         */
        keyVaultUrl?: string;
        /**
         * Domain Password secret 
         */
        passwordSecret?: string;
        /**
         * Domain user name secret 
         */
        userNameSecret?: string;
    }

    /**
     * Gmsa Details
     */
    export interface GmsaDetailsResponse {
        /**
         * Frontend DNS name for Load Balancer which will be used by Agents to initiate communication
         */
        dnsName?: string;
        /**
         * gMSA account under which context all Management Server services will run
         */
        gmsaAccount?: string;
        /**
         * Frontend IP configuration for Load Balancer, which should be an available IP in customer VNet
         */
        loadBalancerIP?: string;
        /**
         * OnPrem AD Computer Group where we will join VMs for ease of management
         */
        managementServerGroupName?: string;
    }

    /**
     * Configuration for Log Analytics linking to SCOM managed instance.
     */
    export interface LogAnalyticsConfigurationResponse {
        /**
         * The types of data to be ingested to Log Analytics workspace.
         */
        dataTypes?: string[];
        /**
         * A one-time optional parameter to import data of last 7 days.
         */
        importData?: boolean;
        /**
         * The resource ID of the Log Analytics workspace to be used.
         */
        workspaceId?: string;
    }
    /**
     * logAnalyticsConfigurationResponseProvideDefaults sets the appropriate defaults for LogAnalyticsConfigurationResponse
     */
    export function logAnalyticsConfigurationResponseProvideDefaults(val: LogAnalyticsConfigurationResponse): LogAnalyticsConfigurationResponse {
        return {
            ...val,
            importData: (val.importData) ?? false,
        };
    }

    /**
     * The properties of a gateway resource.
     */
    export interface ManagedGatewayPropertiesResponse {
        /**
         * ComputerName of the gateway to be monitored.
         */
        computerName?: string;
        /**
         * The connection status of the gateway resource.
         */
        connectionStatus: string;
        /**
         * The domain name associated with the gateway to be monitored.
         */
        domainName?: string;
        /**
         * The health status of the gateway resource.
         */
        healthStatus: string;
        /**
         * Install type of gateway resource.
         */
        installType: string;
        /**
         * The management server endpoint to which the gateway is directed.
         */
        managementServerEndpoint: string;
        provisioningState: string;
        /**
         * ArmId of the gateway to be monitored.
         */
        resourceId?: string;
        /**
         * Location of the gateway to be monitored.
         */
        resourceLocation?: string;
        /**
         * The version of the gateway resource.
         */
        version: string;
    }

    /**
     * Azure Active Directory identity configuration for a resource.
     */
    export interface ManagedIdentityResponse {
        /**
         * System Assigned Identity ObjectId.
         */
        principalId: string;
        /**
         * The Azure Active Directory tenant id.
         */
        tenantId: string;
        /**
         * The identity type
         */
        type?: string;
        /**
         * The resource ids of the user assigned identities to use
         */
        userAssignedIdentities?: {[key: string]: UserIdentityResponse};
    }

    /**
     * Gets status of current and latest SCOM managed instance operation.
     */
    export interface ManagedInstanceOperationStatusResponse {
        /**
         * Operation id
         */
        id: string;
        /**
         * Operation Name
         */
        operationName: string;
        /**
         * Operation status
         */
        operationState: string;
    }

    /**
     * The properties of management server
     */
    export interface ManagementServerPropertiesResponse {
        /**
         * Management server Fully Qualified Domain Name.
         */
        fqdn: string;
        /**
         * Management server health state.
         */
        healthState: string;
        /**
         * Management server Name
         */
        serverName: string;
        /**
         * Represent whether the Server is a Management Server and/or Web Console Server.
         */
        serverRoles: string;
        /**
         * Azure VM Resource Id of the Management server.
         */
        vmResId: string;
    }

    /**
     * The properties of a monitored resource.
     */
    export interface MonitoredResourcePropertiesResponse {
        /**
         * The version of the monitored resource agent version.
         */
        agentVersion: string;
        /**
         * ComputerName of the monitored resource.
         */
        computerName?: string;
        /**
         * The connection status of the monitored resource.
         */
        connectionStatus: string;
        /**
         * The domain name associated with the monitored resource.
         */
        domainName?: string;
        /**
         * The health status of the monitored resource.
         */
        healthStatus: string;
        /**
         * Install type of monitored resource.
         */
        installType: string;
        /**
         * The management server endpoint to which the monitored resource is directed.
         */
        managementServerEndpoint: string;
        provisioningState: string;
        /**
         * ArmId of the monitored resource.
         */
        resourceId?: string;
        /**
         * Location of the monitored resource.
         */
        resourceLocation?: string;
    }

    /**
     * The properties of a SCOM instance resource
     */
    export interface MonitoringInstancePropertiesResponse {
        /**
         * The properties to enable Azure Hybrid benefit for various SCOM infrastructure license.
         */
        azureHybridBenefit?: AzureHybridBenefitPropertiesResponse;
        /**
         * The database instance where the SCOM Operational and Warehouse databases will be stored.
         */
        databaseInstance?: DatabaseInstancePropertiesResponse;
        /**
         * Domain controller details
         */
        domainController?: DomainControllerPropertiesResponse;
        /**
         * Domain user which will be used to join VMs to domain and login to VMs.
         */
        domainUserCredentials?: DomainUserCredentialsResponse;
        /**
         * Gmsa Details for load balancer and vmss
         */
        gmsaDetails?: GmsaDetailsResponse;
        /**
         * Details of Log Analytics workspace and data being ingested.
         */
        logAnalyticsProperties: LogAnalyticsConfigurationResponse;
        /**
         * List of management server endpoints
         */
        managementEndpoints: ManagementServerPropertiesResponse[];
        /**
         * Gets status of current and latest SCOM managed instance operations.
         */
        operationsStatus: ManagedInstanceOperationStatusResponse[];
        /**
         * SCOM product version to be installed on instance
         */
        productVersion: string;
        /**
         * Gets or sets the provisioning state.
         */
        provisioningState: string;
        /**
         * Virtual Network subnet id on which Aquila instance will be provisioned
         */
        vNetSubnetId?: string;
    }
    /**
     * monitoringInstancePropertiesResponseProvideDefaults sets the appropriate defaults for MonitoringInstancePropertiesResponse
     */
    export function monitoringInstancePropertiesResponseProvideDefaults(val: MonitoringInstancePropertiesResponse): MonitoringInstancePropertiesResponse {
        return {
            ...val,
            domainController: (val.domainController ? domainControllerPropertiesResponseProvideDefaults(val.domainController) : undefined),
            logAnalyticsProperties: logAnalyticsConfigurationResponseProvideDefaults(val.logAnalyticsProperties),
        };
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
     * Azure Active Directory identity configuration for a resource.
     */
    export interface UserIdentityResponse {
        /**
         * The Azure Active Directory client id.
         */
        clientId: string;
        /**
         * The Azure Active Directory principal id.
         */
        principalId: string;
    }
