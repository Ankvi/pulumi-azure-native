import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * List of custom and predefined url category
 */
export interface AdvSecurityObjectModelResponse {
    /**
     * URL entry
     */
    entry: NameDescriptionObjectResponse[];
    /**
     * type of object
     */
    type?: string;
}

/**
 * Data Type for App Seen
 */
export interface AppSeenDataResponse {
    /**
     * array of appSeen
     */
    appSeenList: AppSeenInfoResponse[];
    /**
     * number of rows
     */
    count: number;
}

/**
 * Definition for App Seen
 */
export interface AppSeenInfoResponse {
    /**
     * category
     */
    category: string;
    /**
     * risk
     */
    risk: string;
    /**
     * standardPorts
     */
    standardPorts: string;
    /**
     * subCategory
     */
    subCategory: string;
    /**
     * tag
     */
    tag: string;
    /**
     * technology
     */
    technology: string;
    /**
     * title
     */
    title: string;
}

/**
 * Application Insights key
 */
export interface ApplicationInsightsResponse {
    /**
     * Resource id for Application Insights
     */
    id?: string;
    /**
     * Application Insights key
     */
    key?: string;
}

/**
 * The properties of the managed service identities assigned to this resource.
 */
export interface AzureResourceManagerManagedIdentityPropertiesResponse {
    /**
     * The active directory identifier of this principal.
     */
    principalId: string;
    /**
     * The Active Directory tenant id of the principal.
     */
    tenantId: string;
    /**
     * The type of managed identity assigned to this resource.
     */
    type: string;
    /**
     * The identities assigned to this resource by the user.
     */
    userAssignedIdentities?: {[key: string]: AzureResourceManagerUserAssignedIdentityResponse};
}

/**
 * A managed identity assigned by the user.
 */
export interface AzureResourceManagerUserAssignedIdentityResponse {
    /**
     * The active directory client identifier for this principal.
     */
    clientId?: string;
    /**
     * The active directory identifier for this principal.
     */
    principalId?: string;
}

/**
 * URL/EDL to match
 */
export interface CategoryResponse {
    /**
     * feed list
     */
    feeds: string[];
    /**
     * custom URL
     */
    urlCustom: string[];
}

/**
 * Country Description
 */
export interface CountryResponse {
    /**
     * country code
     */
    code: string;
    /**
     * code description
     */
    description?: string;
}

/**
 * DNS Proxy settings for Firewall
 */
export interface DNSSettingsResponse {
    /**
     * List of IPs associated with the Firewall
     */
    dnsServers?: IPAddressResponse[];
    /**
     * Enable DNS proxy, disabled by default
     */
    enableDnsProxy?: string;
    /**
     * Enabled DNS proxy type, disabled by default
     */
    enabledDnsType?: string;
}

/**
 * destination address
 */
export interface DestinationAddrResponse {
    /**
     * special value 'any'
     */
    cidrs?: string[];
    /**
     * list of countries
     */
    countries?: string[];
    /**
     * list of feeds
     */
    feeds?: string[];
    /**
     * fqdn list
     */
    fqdnLists?: string[];
    /**
     * prefix list
     */
    prefixLists?: string[];
}

/**
 * Endpoint Configuration for frontend and backend
 */
export interface EndpointConfigurationResponse {
    /**
     * Address Space
     */
    address: IPAddressResponse;
    /**
     * port ID
     */
    port: string;
}

/**
 * EventHub configurations
 */
export interface EventHubResponse {
    /**
     * Resource ID of EventHub
     */
    id?: string;
    /**
     * EventHub name
     */
    name?: string;
    /**
     * EventHub namespace
     */
    nameSpace?: string;
    /**
     * EventHub policy name
     */
    policyName?: string;
    /**
     * Subscription Id
     */
    subscriptionId?: string;
}

/**
 * Frontend setting for Firewall
 */
export interface FrontendSettingResponse {
    /**
     * Backend configurations
     */
    backendConfiguration: EndpointConfigurationResponse;
    /**
     * Frontend configurations
     */
    frontendConfiguration: EndpointConfigurationResponse;
    /**
     * Settings name
     */
    name: string;
    /**
     * Protocol Type
     */
    protocol: string;
}

/**
 * IP Address
 */
export interface IPAddressResponse {
    /**
     * Address value
     */
    address?: string;
    /**
     * Resource Id
     */
    resourceId?: string;
}

/**
 * IP Address Space
 */
export interface IPAddressSpaceResponse {
    /**
     * Address Space
     */
    addressSpace?: string;
    /**
     * Resource Id
     */
    resourceId?: string;
}

/**
 * Log Destination
 */
export interface LogDestinationResponse {
    /**
     * Event Hub configurations
     */
    eventHubConfigurations?: EventHubResponse;
    /**
     * Monitor Log configurations
     */
    monitorConfigurations?: MonitorLogResponse;
    /**
     * Storage account configurations
     */
    storageConfigurations?: StorageAccountResponse;
}

/**
 * MarketplaceDetails of PAN Firewall resource
 */
export interface MarketplaceDetailsResponse {
    /**
     * Marketplace Subscription Id
     */
    marketplaceSubscriptionId: string;
    /**
     * Marketplace Subscription Status
     */
    marketplaceSubscriptionStatus?: string;
    /**
     * Offer Id
     */
    offerId: string;
    /**
     * Publisher Id
     */
    publisherId: string;
}

/**
 * MonitorLog configurations
 */
export interface MonitorLogResponse {
    /**
     * Resource ID of MonitorLog
     */
    id?: string;
    /**
     * Primary Key value for Monitor
     */
    primaryKey?: string;
    /**
     * Secondary Key value for Monitor
     */
    secondaryKey?: string;
    /**
     * Subscription Id
     */
    subscriptionId?: string;
    /**
     * MonitorLog workspace
     */
    workspace?: string;
}

/**
 * object type info
 */
export interface NameDescriptionObjectResponse {
    /**
     * description value
     */
    description?: string;
    /**
     * name value
     */
    name: string;
}

/**
 * Network settings for Firewall
 */
export interface NetworkProfileResponse {
    /**
     * Egress nat IP to use
     */
    egressNatIp?: IPAddressResponse[];
    /**
     * Enable egress NAT, enabled by default
     */
    enableEgressNat: string;
    /**
     * vnet or vwan, cannot be updated
     */
    networkType: string;
    /**
     * List of IPs associated with the Firewall
     */
    publicIps: IPAddressResponse[];
    /**
     * Non-RFC 1918 address
     */
    trustedRanges?: string[];
    /**
     * Vnet configurations
     */
    vnetConfiguration?: VnetConfigurationResponse;
    /**
     * Vwan configurations
     */
    vwanConfiguration?: VwanConfigurationResponse;
}

/**
 * Panorama Config
 */
export interface PanoramaConfigResponse {
    /**
     * Panorama Collector Group to join - (Once configured we can not edit the value)
     */
    cgName: string;
    /**
     * Base64 encoded string representing Panorama parameters to be used by Firewall to connect to Panorama. This string is generated via azure plugin in Panorama
     */
    configString: string;
    /**
     * Panorama Device Group to join
     */
    dgName: string;
    /**
     * Resource name(may be unique) for PN admin
     */
    hostName: string;
    /**
     * Primary Panorama Server IP address value in dotted format for IPv4
     */
    panoramaServer: string;
    /**
     * Secondary Panorama Server IP address value in dotted format for IPv4
     */
    panoramaServer2: string;
    /**
     * Panorama Template Stack to join - (Once configured we can not edit the value)
     */
    tplName: string;
    /**
     * VM auth key for panorama connectivity
     */
    vmAuthKey: string;
}

/**
 * Billing plan information.
 */
export interface PlanDataResponse {
    /**
     * different billing cycles like MONTHLY/WEEKLY
     */
    billingCycle: string;
    /**
     * date when plan was applied
     */
    effectiveDate: string;
    /**
     * plan id as published by Liftr.PAN
     */
    planId: string;
    /**
     * different usage type like PAYG/COMMITTED
     */
    usageType?: string;
}

/**
 * Predefined URL category object
 */
export interface PredefinedUrlCategoryResponse {
    action: string;
    name: string;
}

/**
 * Associated rulestack details
 */
export interface RulestackDetailsResponse {
    /**
     * Rulestack location
     */
    location?: string;
    /**
     * Resource Id
     */
    resourceId?: string;
    /**
     * Associated rulestack Id
     */
    rulestackId?: string;
}

/**
 * security services
 */
export interface SecurityServicesResponse {
    /**
     * Anti spyware Profile data
     */
    antiSpywareProfile?: string;
    /**
     * anti virus profile data
     */
    antiVirusProfile?: string;
    /**
     * DNS Subscription profile data
     */
    dnsSubscription?: string;
    /**
     * File blocking profile data
     */
    fileBlockingProfile?: string;
    /**
     * Trusted Egress Decryption profile data
     */
    outboundTrustCertificate?: string;
    /**
     * Untrusted Egress Decryption profile data
     */
    outboundUnTrustCertificate?: string;
    /**
     * URL filtering profile data
     */
    urlFilteringProfile?: string;
    /**
     * IPs Vulnerability Profile Data
     */
    vulnerabilityProfile?: string;
}

/**
 * Security services type list
 */
export interface SecurityServicesTypeListResponse {
    /**
     * list
     */
    entry: NameDescriptionObjectResponse[];
    /**
     * security services type
     */
    type?: string;
}

/**
 * Address properties
 */
export interface SourceAddrResponse {
    /**
     * special value 'any'
     */
    cidrs?: string[];
    /**
     * list of countries
     */
    countries?: string[];
    /**
     * list of feeds
     */
    feeds?: string[];
    /**
     * prefix list
     */
    prefixLists?: string[];
}

/**
 * Storage Account configurations
 */
export interface StorageAccountResponse {
    /**
     * Storage account name
     */
    accountName?: string;
    /**
     * Resource ID of storage account
     */
    id?: string;
    /**
     * Subscription Id
     */
    subscriptionId?: string;
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
 * Tag
 */
export interface TagInfoResponse {
    /**
     * tag name
     */
    key: string;
    /**
     * tag value
     */
    value: string;
}

/**
 * VnetInfo for Firewall Networking
 */
export interface VnetConfigurationResponse {
    /**
     * IP of trust subnet for UDR
     */
    ipOfTrustSubnetForUdr?: IPAddressResponse;
    /**
     * Trust Subnet
     */
    trustSubnet: IPAddressSpaceResponse;
    /**
     * Untrust Subnet
     */
    unTrustSubnet: IPAddressSpaceResponse;
    /**
     * Azure Virtual Network
     */
    vnet: IPAddressSpaceResponse;
}

/**
 * VwanInfo for Firewall Networking
 */
export interface VwanConfigurationResponse {
    /**
     * IP of trust subnet for UDR
     */
    ipOfTrustSubnetForUdr?: IPAddressResponse;
    /**
     * Network Virtual Appliance resource ID 
     */
    networkVirtualApplianceId?: string;
    /**
     * Trust Subnet
     */
    trustSubnet?: IPAddressSpaceResponse;
    /**
     * Untrust Subnet
     */
    unTrustSubnet?: IPAddressSpaceResponse;
    /**
     * vHub Address
     */
    vHub: IPAddressSpaceResponse;
}






