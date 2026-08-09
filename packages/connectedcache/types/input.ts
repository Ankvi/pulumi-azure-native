import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Model representing cache node for connected cache resource
 */
export interface AdditionalCacheNodePropertiesArgs {
    /**
     * Auto update or fast update version
     */
    autoUpdateVersion?: pulumi.Input<string | undefined>;
    /**
     * Cache node resource Bgp configuration.
     */
    bgpConfiguration?: pulumi.Input<BgpConfigurationArgs | undefined>;
    /**
     * issues list to return the issues as part of the additional cache node properties
     */
    cacheNodePropertiesDetailsIssuesList?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Cache node resource drive configurations.
     */
    driveConfiguration?: pulumi.Input<pulumi.Input<CacheNodeDriveConfigurationArgs>[] | undefined>;
    /**
     * Cache node resource requires a proxy
     */
    isProxyRequired?: pulumi.Input<string | enums.ProxyRequired | undefined>;
    /**
     * Optional property #1 of Mcc response object
     */
    optionalProperty1?: pulumi.Input<string | undefined>;
    /**
     * Optional property #2 of Mcc response object
     */
    optionalProperty2?: pulumi.Input<string | undefined>;
    /**
     * Optional property #3 of Mcc response object
     */
    optionalProperty3?: pulumi.Input<string | undefined>;
    /**
     * Optional property #4 of Mcc response object
     */
    optionalProperty4?: pulumi.Input<string | undefined>;
    /**
     * Optional property #5 of Mcc response object
     */
    optionalProperty5?: pulumi.Input<string | undefined>;
    /**
     * Operating system of the cache node
     */
    osType?: pulumi.Input<string | enums.OsType | undefined>;
    /**
     * Cache node resource Mcc proxy Url
     */
    proxyUrl?: pulumi.Input<string | undefined>;
    /**
     * proxyUrl configuration of the cache node
     */
    proxyUrlConfiguration?: pulumi.Input<ProxyUrlConfigurationArgs | undefined>;
    /**
     * Update Cycle Type
     */
    updateCycleType?: pulumi.Input<string | enums.CycleType | undefined>;
    /**
     * Update related information details
     */
    updateInfoDetails?: pulumi.Input<string | undefined>;
    /**
     * customer requested date time for mcc install of update cycle
     */
    updateRequestedDateTime?: pulumi.Input<string | undefined>;
}

/**
 * Model representing customer for connected cache resource
 */
export interface AdditionalCustomerPropertiesArgs {
    /**
     * Customer resource Asn (autonomous system number).
     */
    customerAsn?: pulumi.Input<string | undefined>;
    /**
     * Customer resource contact email.
     */
    customerEmail?: pulumi.Input<string | undefined>;
    /**
     * Customer resource entitlement expiration date string.
     */
    customerEntitlementExpiration?: pulumi.Input<string | undefined>;
    /**
     * Customer resource entitlement Sku Guid.
     */
    customerEntitlementSkuGuid?: pulumi.Input<string | undefined>;
    /**
     * Customer resource entitlement Sku Id.
     */
    customerEntitlementSkuId?: pulumi.Input<string | undefined>;
    /**
     * Customer resource entitlement Sku name.
     */
    customerEntitlementSkuName?: pulumi.Input<string | undefined>;
    /**
     * Customer resource transit Asn (autonomous system number).
     */
    customerTransitAsn?: pulumi.Input<string | undefined>;
    /**
     * Customer resource transit state.
     */
    customerTransitState?: pulumi.Input<string | enums.CustomerTransitState | undefined>;
    /**
     * Optional property #1 of Mcc response object.
     */
    optionalProperty1?: pulumi.Input<string | undefined>;
    /**
     * Optional property #2 of Mcc response object.
     */
    optionalProperty2?: pulumi.Input<string | undefined>;
    /**
     * Optional property #3 of Mcc response object.
     */
    optionalProperty3?: pulumi.Input<string | undefined>;
    /**
     * Optional property #4 of Mcc response object.
     */
    optionalProperty4?: pulumi.Input<string | undefined>;
    /**
     * Optional property #5 of Mcc response object.
     */
    optionalProperty5?: pulumi.Input<string | undefined>;
}

/**
 * Bgp configuration of cache node
 */
export interface BgpConfigurationArgs {
    /**
     * Asn to ip address mapping
     */
    asnToIpAddressMapping?: pulumi.Input<string | undefined>;
}

/**
 * Drive configuration for cache node
 */
export interface CacheNodeDriveConfigurationArgs {
    /**
     * corresponding nginx cache number. Valid cache numbers are 1 - 20
     */
    cacheNumber?: pulumi.Input<number | undefined>;
    /**
     * full binding for corresponding nginx cache drive
     */
    nginxMapping?: pulumi.Input<string | undefined>;
    /**
     * physical path location of the folder used for caching content
     */
    physicalPath?: pulumi.Input<string | undefined>;
    /**
     * physical size of the drive used for caching content
     */
    sizeInGb?: pulumi.Input<number | undefined>;
}

/**
 * Model representing Cache Node for ConnectedCache resource
 */
export interface CacheNodeEntityArgs {
    /**
     * Customer requested day of week for mcc install of auto update cycle. 0 is default no selection. 1-7 are days of week, 1 is Sunday, 2 is Monday, etc.
     */
    autoUpdateRequestedDay?: pulumi.Input<number | undefined>;
    /**
     * Customer requested time of the day for mcc install of auto update cycle, should be hh:mm
     */
    autoUpdateRequestedTime?: pulumi.Input<string | undefined>;
    /**
     * Customer requested week of month for mcc install of auto update cycle. 0 is default no selection. 1-5 are valid weeks of month, 1 is first week, 2 is second week, etc.
     */
    autoUpdateRequestedWeek?: pulumi.Input<number | undefined>;
    /**
     * Auto Update Ring Type which is slow or fast etc.
     */
    autoUpdateRingType?: pulumi.Input<string | enums.AutoUpdateRingType | undefined>;
    /**
     * Cache node resource identifier of the cache node
     */
    cacheNodeId?: pulumi.Input<string | undefined>;
    /**
     * Cache node resource name.
     */
    cacheNodeName?: pulumi.Input<string | undefined>;
    /**
     * Cache node resource comma separated values of Cidrs.
     */
    cidrCsv?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Cache node resource current Cidr range precedence selection type.
     */
    cidrSelectionType?: pulumi.Input<number | undefined>;
    /**
     * Cache node resource customer resource Asn (autonomous system number)
     */
    customerAsn?: pulumi.Input<number | undefined>;
    /**
     * Cache node resource customer index as string.
     */
    customerIndex?: pulumi.Input<string | undefined>;
    /**
     * Cache node resource customer resource name.
     */
    customerName?: pulumi.Input<string | undefined>;
    /**
     * FQDN(fully qualified domain name) value of the mcc cache node
     */
    fullyQualifiedDomainName?: pulumi.Input<string | undefined>;
    /**
     * Cache node resource Azure fully qualified resource Id.
     */
    fullyQualifiedResourceId?: pulumi.Input<string | undefined>;
    /**
     * Cache node resource Ip address.
     */
    ipAddress?: pulumi.Input<string | undefined>;
    /**
     * Cache node resource flag for indicating if cache node is enabled.
     */
    isEnabled?: pulumi.Input<boolean | undefined>;
    /**
     * Cache node resource flag for determining if managed by enterprise as boolean.
     */
    isEnterpriseManaged?: pulumi.Input<boolean | undefined>;
    /**
     * Cache node resource maximum allowed egress in Mbps.
     */
    maxAllowableEgressInMbps?: pulumi.Input<number | undefined>;
    /**
     * Cache node resource flag for determining if customer will be migrated.
     */
    shouldMigrate?: pulumi.Input<boolean | undefined>;
}

/**
 * Model representing Cache Node for ConnectedCache resource
 */
export interface CacheNodeOldResponseArgs {
    /**
     * statusCode used to get code details of Mcc response object
     */
    statusCode?: pulumi.Input<string | undefined>;
    /**
     * statusDetails used to get inner details of Mcc response object
     */
    statusDetails?: pulumi.Input<string | undefined>;
    /**
     * statusText used to get status details in string format of Mcc response object
     */
    statusText?: pulumi.Input<string | undefined>;
}

/**
 * Model representing an Mcc cache node connectedCache resource
 */
export interface CacheNodePropertyArgs {
    /**
     * Mcc cache node resource additional properties.
     */
    additionalCacheNodeProperties?: pulumi.Input<AdditionalCacheNodePropertiesArgs | undefined>;
    /**
     * Mcc cache node resource (cache node entity).
     */
    cacheNode?: pulumi.Input<CacheNodeEntityArgs | undefined>;
    /**
     * Mcc response status code.
     */
    statusCode?: pulumi.Input<string | undefined>;
    /**
     * Mcc response status details for retrieving response inner details.
     */
    statusDetails?: pulumi.Input<string | undefined>;
    /**
     * Mcc response status text as string for retrieving status details.
     */
    statusText?: pulumi.Input<string | undefined>;
}

/**
 * Model representing Customer resource for ConnectedCache resource
 */
export interface CustomerEntityArgs {
    /**
     * Customer resource client tenant Id of subscription.
     */
    clientTenantId?: pulumi.Input<string | undefined>;
    /**
     * Customer resource contact email.
     */
    contactEmail?: pulumi.Input<string | undefined>;
    /**
     * Customer resource contact full name.
     */
    contactName?: pulumi.Input<string | undefined>;
    /**
     * Customer resource contact phone.
     */
    contactPhone?: pulumi.Input<string | undefined>;
    /**
     * Customer resource name.
     */
    customerName?: pulumi.Input<string | undefined>;
    /**
     * Customer resource Azure fully qualified resource Id.
     */
    fullyQualifiedResourceId?: pulumi.Input<string | undefined>;
    /**
     * Customer resource flag for enterprise management as boolean.
     */
    isEnterpriseManaged?: pulumi.Input<boolean | undefined>;
    /**
     * Customer resource entitlement flag as boolean.
     */
    isEntitled?: pulumi.Input<boolean | undefined>;
    /**
     * Customer resource Mcc release version.
     */
    releaseVersion?: pulumi.Input<number | undefined>;
    /**
     * Customer resource flag for resending signup code as boolean.
     */
    resendSignupCode?: pulumi.Input<boolean | undefined>;
    /**
     * Customer resource flag for migration.
     */
    shouldMigrate?: pulumi.Input<boolean | undefined>;
    /**
     * Customer resource flag for requiring verification of signup code as boolean.
     */
    verifySignupCode?: pulumi.Input<boolean | undefined>;
    /**
     * Customer resource phrase for verifying signup.
     */
    verifySignupPhrase?: pulumi.Input<string | undefined>;
}

/**
 * Model representing customer for connectedCache resource
 */
export interface CustomerPropertyArgs {
    /**
     * Mcc customer resource additional properties.
     */
    additionalCustomerProperties?: pulumi.Input<AdditionalCustomerPropertiesArgs | undefined>;
    /**
     * Mcc customer resource (customer entity).
     */
    customer?: pulumi.Input<CustomerEntityArgs | undefined>;
}

/**
 * ProxyUrl configuration of cache node
 */
export interface ProxyUrlConfigurationArgs {
    /**
     * Host Proxy Address configuration along with port number. This can be a proxy or ip address. ex: xx.xx.xx.xxxx:80 or host name http://exampleproxy.com:80
     */
    proxyUrl?: pulumi.Input<string | undefined>;
}
