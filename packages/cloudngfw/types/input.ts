import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The properties of the managed service identities assigned to this resource.
 */
export interface AzureResourceManagerManagedIdentityPropertiesArgs {
    /**
     * The type of managed identity assigned to this resource.
     */
    type: pulumi.Input<string | enums.ManagedIdentityType>;
    /**
     * The identities assigned to this resource by the user.
     */
    userAssignedIdentities?: pulumi.Input<{[key: string]: pulumi.Input<AzureResourceManagerUserAssignedIdentityArgs>} | undefined>;
}

/**
 * A managed identity assigned by the user.
 */
export interface AzureResourceManagerUserAssignedIdentityArgs {
    /**
     * The active directory client identifier for this principal.
     */
    clientId?: pulumi.Input<string | undefined>;
    /**
     * The active directory identifier for this principal.
     */
    principalId?: pulumi.Input<string | undefined>;
}

/**
 * URL/EDL to match
 */
export interface CategoryArgs {
    /**
     * feed list
     */
    feeds: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * custom URL
     */
    urlCustom: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * DNS Proxy settings for Firewall
 */
export interface DNSSettingsArgs {
    /**
     * List of IPs associated with the Firewall
     */
    dnsServers?: pulumi.Input<pulumi.Input<IPAddressArgs>[] | undefined>;
    /**
     * Enable DNS proxy, disabled by default
     */
    enableDnsProxy?: pulumi.Input<string | enums.DNSProxy | undefined>;
    /**
     * Enabled DNS proxy type, disabled by default
     */
    enabledDnsType?: pulumi.Input<string | enums.EnabledDNSType | undefined>;
}

/**
 * destination address
 */
export interface DestinationAddrArgs {
    /**
     * special value 'any'
     */
    cidrs?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * list of countries
     */
    countries?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * list of feeds
     */
    feeds?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * fqdn list
     */
    fqdnLists?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * prefix list
     */
    prefixLists?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Endpoint Configuration for frontend and backend
 */
export interface EndpointConfigurationArgs {
    /**
     * Address Space
     */
    address: pulumi.Input<IPAddressArgs>;
    /**
     * port ID
     */
    port: pulumi.Input<string>;
}

/**
 * Frontend setting for Firewall
 */
export interface FrontendSettingArgs {
    /**
     * Backend configurations
     */
    backendConfiguration: pulumi.Input<EndpointConfigurationArgs>;
    /**
     * Frontend configurations
     */
    frontendConfiguration: pulumi.Input<EndpointConfigurationArgs>;
    /**
     * Settings name
     */
    name: pulumi.Input<string>;
    /**
     * Protocol Type
     */
    protocol: pulumi.Input<string | enums.ProtocolType>;
}

/**
 * IP Address
 */
export interface IPAddressArgs {
    /**
     * Address value
     */
    address?: pulumi.Input<string | undefined>;
    /**
     * Resource Id
     */
    resourceId?: pulumi.Input<string | undefined>;
}

/**
 * IP Address Space
 */
export interface IPAddressSpaceArgs {
    /**
     * Address Space
     */
    addressSpace?: pulumi.Input<string | undefined>;
    /**
     * Resource Id
     */
    resourceId?: pulumi.Input<string | undefined>;
}

/**
 * MarketplaceDetails of PAN Firewall resource
 */
export interface MarketplaceDetailsArgs {
    /**
     * Marketplace Subscription Status
     */
    marketplaceSubscriptionStatus?: pulumi.Input<string | enums.MarketplaceSubscriptionStatus | undefined>;
    /**
     * Offer Id
     */
    offerId: pulumi.Input<string>;
    /**
     * Publisher Id
     */
    publisherId: pulumi.Input<string>;
}

/**
 * Network settings for Firewall
 */
export interface NetworkProfileArgs {
    /**
     * Egress nat IP to use
     */
    egressNatIp?: pulumi.Input<pulumi.Input<IPAddressArgs>[] | undefined>;
    /**
     * Enable egress NAT, enabled by default
     */
    enableEgressNat: pulumi.Input<string | enums.EgressNat>;
    /**
     * vnet or vwan, cannot be updated
     */
    networkType: pulumi.Input<string | enums.NetworkType>;
    /**
     * Array of ipv4 destination address for which source NAT is to be performed
     */
    privateSourceNatRulesDestination?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * List of IPs associated with the Firewall
     */
    publicIps: pulumi.Input<pulumi.Input<IPAddressArgs>[]>;
    /**
     * Non-RFC 1918 address
     */
    trustedRanges?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Vnet configurations
     */
    vnetConfiguration?: pulumi.Input<VnetConfigurationArgs | undefined>;
    /**
     * Vwan configurations
     */
    vwanConfiguration?: pulumi.Input<VwanConfigurationArgs | undefined>;
}

/**
 * Panorama Config
 */
export interface PanoramaConfigArgs {
    /**
     * Base64 encoded string representing Panorama parameters to be used by Firewall to connect to Panorama. This string is generated via azure plugin in Panorama
     */
    configString: pulumi.Input<string>;
}

/**
 * Billing plan information.
 */
export interface PlanDataArgs {
    /**
     * different billing cycles like MONTHLY/WEEKLY
     */
    billingCycle: pulumi.Input<string | enums.BillingCycle>;
    /**
     * plan id as published by Liftr.PAN
     */
    planId: pulumi.Input<string>;
    /**
     * different usage type like PAYG/COMMITTED
     */
    usageType?: pulumi.Input<string | enums.UsageType | undefined>;
}

/**
 * Associated rulestack details
 */
export interface RulestackDetailsArgs {
    /**
     * Rulestack location
     */
    location?: pulumi.Input<string | undefined>;
    /**
     * Resource Id
     */
    resourceId?: pulumi.Input<string | undefined>;
    /**
     * Associated rulestack Id
     */
    rulestackId?: pulumi.Input<string | undefined>;
}

/**
 * security services
 */
export interface SecurityServicesArgs {
    /**
     * Anti spyware Profile data
     */
    antiSpywareProfile?: pulumi.Input<string | undefined>;
    /**
     * anti virus profile data
     */
    antiVirusProfile?: pulumi.Input<string | undefined>;
    /**
     * DNS Subscription profile data
     */
    dnsSubscription?: pulumi.Input<string | undefined>;
    /**
     * File blocking profile data
     */
    fileBlockingProfile?: pulumi.Input<string | undefined>;
    /**
     * Trusted Egress Decryption profile data
     */
    outboundTrustCertificate?: pulumi.Input<string | undefined>;
    /**
     * Untrusted Egress Decryption profile data
     */
    outboundUnTrustCertificate?: pulumi.Input<string | undefined>;
    /**
     * URL filtering profile data
     */
    urlFilteringProfile?: pulumi.Input<string | undefined>;
    /**
     * IPs Vulnerability Profile Data
     */
    vulnerabilityProfile?: pulumi.Input<string | undefined>;
}

/**
 * Address properties
 */
export interface SourceAddrArgs {
    /**
     * special value 'any'
     */
    cidrs?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * list of countries
     */
    countries?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * list of feeds
     */
    feeds?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * prefix list
     */
    prefixLists?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * This field is only present if Strata Cloud Manager is managing the policy for this firewall
 */
export interface StrataCloudManagerConfigArgs {
    /**
     * Strata Cloud Manager name which is intended to manage the policy for this firewall.
     */
    cloudManagerName: pulumi.Input<string>;
}

/**
 * Tag
 */
export interface TagInfoArgs {
    /**
     * tag name
     */
    key: pulumi.Input<string>;
    /**
     * tag value
     */
    value: pulumi.Input<string>;
}

/**
 * VnetInfo for Firewall Networking
 */
export interface VnetConfigurationArgs {
    /**
     * IP of trust subnet for UDR
     */
    ipOfTrustSubnetForUdr?: pulumi.Input<IPAddressArgs | undefined>;
    /**
     * Trust Subnet
     */
    trustSubnet: pulumi.Input<IPAddressSpaceArgs>;
    /**
     * Untrust Subnet
     */
    unTrustSubnet: pulumi.Input<IPAddressSpaceArgs>;
    /**
     * Azure Virtual Network
     */
    vnet: pulumi.Input<IPAddressSpaceArgs>;
}

/**
 * VwanInfo for Firewall Networking
 */
export interface VwanConfigurationArgs {
    /**
     * IP of trust subnet for UDR
     */
    ipOfTrustSubnetForUdr?: pulumi.Input<IPAddressArgs | undefined>;
    /**
     * Network Virtual Appliance resource ID
     */
    networkVirtualApplianceId?: pulumi.Input<string | undefined>;
    /**
     * Trust Subnet
     */
    trustSubnet?: pulumi.Input<IPAddressSpaceArgs | undefined>;
    /**
     * Untrust Subnet
     */
    unTrustSubnet?: pulumi.Input<IPAddressSpaceArgs | undefined>;
    /**
     * vHub Address
     */
    vHub: pulumi.Input<IPAddressSpaceArgs>;
}
