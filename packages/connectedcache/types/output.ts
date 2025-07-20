import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Model representing cache node for connected cache resource
 */
export interface AdditionalCacheNodePropertiesResponse {
    /**
     * Cache node resource aggregated status code.
     */
    aggregatedStatusCode: number;
    /**
     * Cache node resource aggregated status details.
     */
    aggregatedStatusDetails: string;
    /**
     * Cache node resource aggregated status text.
     */
    aggregatedStatusText: string;
    /**
     * Auto update version that is the applied to update on mcc cache node
     */
    autoUpdateAppliedVersion: string;
    /**
     * Auto update last applied date time of mcc install
     */
    autoUpdateLastAppliedDateTime: string;
    /**
     * Auto Update status details from the backend after applying the new version details
     */
    autoUpdateLastAppliedDetails: string;
    /**
     * Last applied auto update state for mcc install of auto update cycle
     */
    autoUpdateLastAppliedState: string;
    /**
     * Auto update last triggered date time of mcc install
     */
    autoUpdateLastTriggeredDateTime: string;
    /**
     * Auto update last applied date time of mcc install
     */
    autoUpdateNextAvailableDateTime: string;
    /**
     * Auto update version that is the Next available version to update on mcc cache node
     */
    autoUpdateNextAvailableVersion: string;
    /**
     * Auto update or fast update version
     */
    autoUpdateVersion?: string;
    /**
     * Cache node resource Bgp configuration.
     */
    bgpConfiguration?: BgpConfigurationResponse;
    /**
     * issues list to return the issues as part of the additional cache node properties
     */
    cacheNodePropertiesDetailsIssuesList?: string[];
    /**
     * Cache node resource state as integer.
     */
    cacheNodeState: number;
    /**
     * Cache node resource detailed state text.
     */
    cacheNodeStateDetailedText: string;
    /**
     * Cache node resource short state text.
     */
    cacheNodeStateShortText: string;
    /**
     * Cache node resource drive configurations.
     */
    driveConfiguration?: CacheNodeDriveConfigurationResponse[];
    /**
     * Cache node resource flag indicating if cache node has been physically installed or provisioned on their physical lab.
     */
    isProvisioned: boolean;
    /**
     * Cache node resource requires a proxy
     */
    isProxyRequired?: string;
    /**
     * Optional property #1 of Mcc response object
     */
    optionalProperty1?: string;
    /**
     * Optional property #2 of Mcc response object
     */
    optionalProperty2?: string;
    /**
     * Optional property #3 of Mcc response object
     */
    optionalProperty3?: string;
    /**
     * Optional property #4 of Mcc response object
     */
    optionalProperty4?: string;
    /**
     * Optional property #5 of Mcc response object
     */
    optionalProperty5?: string;
    /**
     * Operating system of the cache node
     */
    osType?: string;
    /**
     * Cache node resource Mcc product version.
     */
    productVersion: string;
    /**
     * Cache node resource Mcc proxy Url
     */
    proxyUrl?: string;
    /**
     * proxyUrl configuration of the cache node
     */
    proxyUrlConfiguration?: ProxyUrlConfigurationResponse;
    /**
     * Update Cycle Type
     */
    updateCycleType?: string;
    /**
     * Update related information details
     */
    updateInfoDetails?: string;
    /**
     * customer requested date time for mcc install of update cycle
     */
    updateRequestedDateTime?: string;
}

/**
 * Model representing customer for connected cache resource
 */
export interface AdditionalCustomerPropertiesResponse {
    /**
     * Customer resource Asn (autonomous system number).
     */
    customerAsn?: string;
    /**
     * Customer resource estimated Asn peering peak in Gbps.
     */
    customerAsnEstimatedEgressPeekGbps: number;
    /**
     * Customer resource contact email.
     */
    customerEmail?: string;
    /**
     * Customer resource entitlement expiration date string.
     */
    customerEntitlementExpiration?: string;
    /**
     * Customer resource entitlement Sku Guid.
     */
    customerEntitlementSkuGuid?: string;
    /**
     * Customer resource entitlement Sku Id.
     */
    customerEntitlementSkuId?: string;
    /**
     * Customer resource entitlement Sku name.
     */
    customerEntitlementSkuName?: string;
    /**
     * Customer resource owner organization name.
     */
    customerOrgName: string;
    /**
     * Customer resource average egress in Mbps.
     */
    customerPropertiesOverviewAverageEgressMbps: number;
    /**
     * Customer resource average cache miss throughput in Mbps.
     */
    customerPropertiesOverviewAverageMissMbps: number;
    /**
     * Customer resource cache efficiency.
     */
    customerPropertiesOverviewCacheEfficiency: number;
    /**
     * Customer resource total healthy cache nodes.
     */
    customerPropertiesOverviewCacheNodesHealthyCount: number;
    /**
     * Customer resource total unhealthy cache nodes.
     */
    customerPropertiesOverviewCacheNodesUnhealthyCount: number;
    /**
     * Customer resource maximum egress in Mbps.
     */
    customerPropertiesOverviewEgressMbpsMax: number;
    /**
     * Customer resource peak egress timestamp.
     */
    customerPropertiesOverviewEgressMbpsMaxDateTime: string;
    /**
     * Customer resource maximum cache miss throughput in Mbps.
     */
    customerPropertiesOverviewMissMbpsMax: number;
    /**
     * Customer resource peak cache miss throughput timestamp.
     */
    customerPropertiesOverviewMissMbpsMaxDateTime: string;
    /**
     * Customer resource transit Asn (autonomous system number).
     */
    customerTransitAsn?: string;
    /**
     * Customer resource transit state.
     */
    customerTransitState?: string;
    /**
     * Optional property #1 of Mcc response object.
     */
    optionalProperty1?: string;
    /**
     * Optional property #2 of Mcc response object.
     */
    optionalProperty2?: string;
    /**
     * Optional property #3 of Mcc response object.
     */
    optionalProperty3?: string;
    /**
     * Optional property #4 of Mcc response object.
     */
    optionalProperty4?: string;
    /**
     * Optional property #5 of Mcc response object.
     */
    optionalProperty5?: string;
    /**
     * Customer resource last PeeringDB update timestamp.
     */
    peeringDbLastUpdateDate: string;
    /**
     * Customer resource last PeeringDB update timestamp.
     */
    peeringDbLastUpdateTime: string;
    /**
     * Customer resource signup phase status code as integer.
     */
    signupPhaseStatusCode: number;
    /**
     * Customer resource signup phase status as string text.
     */
    signupPhaseStatusText: string;
    /**
     * Customer resource signup status as boolean.
     */
    signupStatus: boolean;
    /**
     * Customer resource signup status as integer code.
     */
    signupStatusCode: number;
    /**
     * Customer resource signup status as string text.
     */
    signupStatusText: string;
}

/**
 * Mcc cache node Bgp Cidr details.
 */
export interface BgpCidrsConfigurationResponse {
    /**
     * Mcc cache node Bgp Cidr details.
     */
    bgpCidrs: string[];
}

/**
 * Bgp configuration of cache node
 */
export interface BgpConfigurationResponse {
    /**
     * Asn to ip address mapping
     */
    asnToIpAddressMapping?: string;
}

/**
 * Drive configuration for cache node
 */
export interface CacheNodeDriveConfigurationResponse {
    /**
     * corresponding nginx cache number. Valid cache numbers are 1 - 20
     */
    cacheNumber?: number;
    /**
     * full binding for corresponding nginx cache drive
     */
    nginxMapping?: string;
    /**
     * physical path location of the folder used for caching content
     */
    physicalPath?: string;
    /**
     * physical size of the drive used for caching content
     */
    sizeInGb?: number;
}

/**
 * Model representing Cache Node for ConnectedCache resource
 */
export interface CacheNodeEntityResponse {
    /**
     * Cache node resource total addressable space defined by the Cidr Csv block.
     */
    addressSpace: number;
    /**
     * Customer requested day of week for mcc install of auto update cycle. 0 is default no selection. 1-7 are days of week, 1 is Sunday, 2 is Monday, etc.
     */
    autoUpdateRequestedDay?: number;
    /**
     * Customer requested time of the day for mcc install of auto update cycle, should be hh:mm
     */
    autoUpdateRequestedTime?: string;
    /**
     * Customer requested week of month for mcc install of auto update cycle. 0 is default no selection. 1-5 are valid weeks of month, 1 is first week, 2 is second week, etc.
     */
    autoUpdateRequestedWeek?: number;
    /**
     * Auto Update Ring Type which is slow or fast etc.
     */
    autoUpdateRingType?: string;
    /**
     * Cache node resource total addressable space defined by Bgp and Cidr Csv blocks.
     */
    bgpAddressSpace: number;
    /**
     * Cache node resource Bgp block count.
     */
    bgpCidrBlocksCount: number;
    /**
     * Cache node resource last Bgp Cidr Csv update timestamp
     */
    bgpCidrCsvLastUpdateTime: string;
    /**
     * Cache node resource bytes truncated from Bgp output file.
     */
    bgpFileBytesTruncated: number;
    /**
     * Cache node resource last Bgp report timestamp.
     */
    bgpLastReportedTime: string;
    /**
     * Cache node resource Bgp record count.
     */
    bgpNumberOfRecords: number;
    /**
     * Cache node resource Bgp update count.
     */
    bgpNumberOfTimesUpdated: number;
    /**
     * Cache node resource Bgp review feedback text.
     */
    bgpReviewFeedback: string;
    /**
     * Cache node resource Bgp review state string text.
     */
    bgpReviewState: string;
    /**
     * Cache node resource Bgp review state string text in detail.
     */
    bgpReviewStateText: string;
    /**
     * Cache node resource identifier of the cache node
     */
    cacheNodeId?: string;
    /**
     * Cache node resource name.
     */
    cacheNodeName?: string;
    /**
     * Cache node resource category.
     */
    category: string;
    /**
     * Cache node resource comma separated values of Cidrs.
     */
    cidrCsv?: string[];
    /**
     * Cache node resource last Cidr Csv update timestamp
     */
    cidrCsvLastUpdateTime: string;
    /**
     * Cache node resource current Cidr range precedence selection type.
     */
    cidrSelectionType?: number;
    /**
     * Cache node resource customer resource client tenant Id of subscription.
     */
    clientTenantId: string;
    /**
     * Cache node resource configuration state.
     */
    configurationState: string;
    /**
     * Cache node resource configuration state text.
     */
    configurationStateText: string;
    /**
     * Cache node resource container configuration details.
     */
    containerConfigurations: string;
    /**
     * Cache node resource Mcc container configuration details re-sync trigger.
     */
    containerResyncTrigger: number;
    /**
     * Cache node resource create async operation Id.
     */
    createAsyncOperationId: string;
    /**
     * Cache node resource customer resource Asn (autonomous system number)
     */
    customerAsn?: number;
    /**
     * Cache node resource customer resource GUID Id.
     */
    customerId: string;
    /**
     * Cache node resource customer index as string.
     */
    customerIndex?: string;
    /**
     * Cache node resource customer resource name.
     */
    customerName?: string;
    /**
     * Cache node resource deletion async operation Id.
     */
    deleteAsyncOperationId: string;
    /**
     * FQDN(fully qualified domain name) value of the mcc cache node
     */
    fullyQualifiedDomainName?: string;
    /**
     * Cache node resource Azure fully qualified resource Id.
     */
    fullyQualifiedResourceId?: string;
    /**
     * Cache node resource Mcc Container Id Uri.
     */
    imageUri: string;
    /**
     * Cache node resource Ip address.
     */
    ipAddress?: string;
    /**
     * Cache node resource flag for indicating if cache node is enabled.
     */
    isEnabled?: boolean;
    /**
     * Cache node resource flag for determining if managed by enterprise as boolean.
     */
    isEnterpriseManaged?: boolean;
    /**
     * Cache node resource flag for indicating the cache node resource is frozen (not selectable, not editable in UI).
     */
    isFrozen: boolean;
    /**
     * Cache node resource last sync timestamp.
     */
    lastSyncWithAzureTimestamp: string;
    /**
     * Cache node resource last backend updated timestamp.
     */
    lastUpdatedTimestamp: string;
    /**
     * Cache node resource maximum allowed egress in Mbps.
     */
    maxAllowableEgressInMbps?: number;
    /**
     * Cache node resource maximum allowed probability of egress.
     */
    maxAllowableProbability: number;
    /**
     * Cache node resource release version.
     */
    releaseVersion: number;
    /**
     * Cache node resource review feedback text.
     */
    reviewFeedback: string;
    /**
     * Cache node resource review process state as integer
     */
    reviewState: number;
    /**
     * Cache node resource review state text.
     */
    reviewStateText: string;
    /**
     * Cache node resource flag for determining if customer will be migrated.
     */
    shouldMigrate?: boolean;
    /**
     * Cache node resource attempts to sync with Azure.
     */
    synchWithAzureAttemptsCount: number;
    /**
     * Cache node resource Mcc container deployment worker connection count.
     */
    workerConnections: number;
    /**
     * Cache node resource last updated Mcc container deployment worker connection count timestamp.
     */
    workerConnectionsLastUpdatedDateTime: string;
    /**
     * Cache node resource Azure XCid.
     */
    xCid: string;
}

/**
 * Mcc cache node resource install script properties.
 */
export interface CacheNodeInstallPropertiesResponse {
    /**
     * Mcc cache node resource Id.
     */
    cacheNodeId?: string;
    /**
     * Mcc customer resource Id.
     */
    customerId?: string;
    /**
     * Mcc primary account key. Internal to Mcc.
     */
    primaryAccountKey: string;
    /**
     * Mcc Iot Central temporary device registration key, used once.
     */
    registrationKey: string;
    /**
     * Mcc secondary account key. Internal to Mcc.
     */
    secondaryAccountKey: string;
}

/**
 * Model representing Cache Node for ConnectedCache resource
 */
export interface CacheNodeOldResponseResponse {
    /**
     * The error details
     */
    error?: ErrorDetailResponse;
    /**
     * The provisioned state of the resource
     */
    provisioningState: string;
    /**
     * status of the HTTP error code
     */
    status: string;
    /**
     * statusCode used to get code details of Mcc response object
     */
    statusCode?: string;
    /**
     * statusDetails used to get inner details of Mcc response object
     */
    statusDetails?: string;
    /**
     * statusText used to get status details in string format of Mcc response object
     */
    statusText?: string;
}

/**
 * Model representing an Mcc cache node connectedCache resource
 */
export interface CacheNodePropertyResponse {
    /**
     * Mcc cache node resource additional properties.
     */
    additionalCacheNodeProperties?: AdditionalCacheNodePropertiesResponse;
    /**
     * Mcc cache node resource (cache node entity).
     */
    cacheNode?: CacheNodeEntityResponse;
    /**
     * Mcc response error details.
     */
    error?: ErrorDetailResponse;
    /**
     * The provisioned state of the resource
     */
    provisioningState: string;
    /**
     * HTTP error status code.
     */
    status: string;
    /**
     * Mcc response status code.
     */
    statusCode?: string;
    /**
     * Mcc response status details for retrieving response inner details.
     */
    statusDetails?: string;
    /**
     * Mcc response status text as string for retrieving status details.
     */
    statusText?: string;
}

/**
 * Model representing Customer resource for ConnectedCache resource
 */
export interface CustomerEntityResponse {
    /**
     * Customer resource client tenant Id of subscription.
     */
    clientTenantId?: string;
    /**
     * Customer resource contact email.
     */
    contactEmail?: string;
    /**
     * Customer resource contact full name.
     */
    contactName?: string;
    /**
     * Customer resource contact phone.
     */
    contactPhone?: string;
    /**
     * Customer resource create async operation Id.
     */
    createAsyncOperationId: string;
    /**
     * Customer resource Guid Id.
     */
    customerId: string;
    /**
     * Customer resource name.
     */
    customerName?: string;
    /**
     * Customer resource deletion async operation Id.
     */
    deleteAsyncOperationId: string;
    /**
     * Customer resource Azure fully qualified resource Id.
     */
    fullyQualifiedResourceId?: string;
    /**
     * Customer resource flag for enterprise management as boolean.
     */
    isEnterpriseManaged?: boolean;
    /**
     * Customer resource entitlement flag as boolean.
     */
    isEntitled?: boolean;
    /**
     * Customer resource last Azure sync timestamp.
     */
    lastSyncWithAzureTimestamp: string;
    /**
     * Customer resource Mcc release version.
     */
    releaseVersion?: number;
    /**
     * Customer resource flag for resending signup code as boolean.
     */
    resendSignupCode?: boolean;
    /**
     * Customer resource flag for migration.
     */
    shouldMigrate?: boolean;
    /**
     * Customer resource sync attempts.
     */
    synchWithAzureAttemptsCount: number;
    /**
     * Customer resource flag for requiring verification of signup code as boolean.
     */
    verifySignupCode?: boolean;
}

/**
 * Model representing customer for connectedCache resource
 */
export interface CustomerPropertyResponse {
    /**
     * Mcc customer resource additional properties.
     */
    additionalCustomerProperties?: AdditionalCustomerPropertiesResponse;
    /**
     * Mcc customer resource (customer entity).
     */
    customer?: CustomerEntityResponse;
    /**
     * Mcc response error details.
     */
    error: ErrorDetailResponse;
    /**
     * The provisioned state of the resource
     */
    provisioningState: string;
    /**
     * HTTP error status code.
     */
    status: string;
    /**
     * Mcc response status code.
     */
    statusCode: string;
    /**
     * Mcc response status details for retrieving response inner details.
     */
    statusDetails: string;
    /**
     * Mcc response status text as string for retrieving status details.
     */
    statusText: string;
}

/**
 * The resource management error additional info.
 */
export interface ErrorAdditionalInfoResponse {
    /**
     * The additional info.
     */
    info: any;
    /**
     * The additional info type.
     */
    type: string;
}

/**
 * The error detail.
 */
export interface ErrorDetailResponse {
    /**
     * The error additional info.
     */
    additionalInfo: ErrorAdditionalInfoResponse[];
    /**
     * The error code.
     */
    code: string;
    /**
     * The error details.
     */
    details: ErrorDetailResponse[];
    /**
     * The error message.
     */
    message: string;
    /**
     * The error target.
     */
    target: string;
}

/**
 * Mcc cache node resource auto update history properties.
 */
export interface MccCacheNodeAutoUpdateHistoryPropertiesResponse {
    /**
     * Cache node resource auto update history information.
     */
    autoUpdateHistory?: MccCacheNodeAutoUpdateInfoResponse[];
    /**
     * Mcc cache node resource Id.
     */
    cacheNodeId: string;
    /**
     * Mcc customer resource Id.
     */
    customerId: string;
}

/**
 * Mcc cache node resource auto update properties.
 */
export interface MccCacheNodeAutoUpdateInfoResponse {
    /**
     * Auto update last applied status.
     */
    autoUpdateLastAppliedStatus: number;
    /**
     * Auto update last applied detailed status text.
     */
    autoUpdateLastAppliedStatusDetailedText: string;
    /**
     * Auto update last applied status text.
     */
    autoUpdateLastAppliedStatusText: string;
    /**
     * Auto update Ring Type.
     */
    autoUpdateRingType: number;
    /**
     * Auto update entity created datetime.
     */
    createdDateTimeUtc: string;
    /**
     * Auto update image uri before update.
     */
    imageUriBeforeUpdate: string;
    /**
     * Auto update image uri targetted to update.
     */
    imageUriTargeted: string;
    /**
     * Auto update image uri at Terminal.
     */
    imageUriTerminal: string;
    /**
     * Auto update image uri after update.
     */
    movedToTerminalStateDateTime: string;
    /**
     * This text describing the purpose of the plan of auto update.
     */
    planChangeLogText: string;
    /**
     * Auto update planId.
     */
    planId: number;
    /**
     * Auto update image uri after update.
     */
    ruleRequestedDay: number;
    /**
     * Auto update rule requested hour.
     */
    ruleRequestedHour: string;
    /**
     * Auto update rule requested minute.
     */
    ruleRequestedMinute: string;
    /**
     * Auto update image uri before update.
     */
    ruleRequestedWeek: number;
    /**
     * Auto update time to go live date time.
     */
    timeToGoLiveDateTime: string;
    /**
     * Auto update entity last updated datetime.
     */
    updatedRegistryDateTimeUtc: string;
}

/**
 * Mcc cache node resource issue history properties.
 */
export interface MccCacheNodeIssueHistoryPropertiesResponse {
    /**
     * Mcc cache node resource Id.
     */
    cacheNodeId: string;
    /**
     * Mcc customer resource Id.
     */
    customerId: string;
    /**
     * Cache node resource issue details history.
     */
    mccIssueHistory?: MccIssueResponse[];
}

/**
 * Mcc cache node resource auto update properties.
 */
export interface MccCacheNodeTlsCertificatePropertiesResponse {
    /**
     * Mcc cache node resource Id.
     */
    cacheNodeId: string;
    /**
     * Mcc customer resource Id.
     */
    customerId: string;
    /**
     * Cache node resource tls certificate history details.
     */
    tlsCertificateHistory?: MccCacheNodeTlsCertificateResponse[];
}

/**
 * Mcc cache node resource Tls certificate details.
 */
export interface MccCacheNodeTlsCertificateResponse {
    /**
     * Mcc cache node Tls certificate status.
     */
    actionRequired: string;
    /**
     * Mcc cache node Tls certificate file name.
     */
    certificateFileName: string;
    /**
     * Mcc cache node Tls certificate expiry date.
     */
    expiryDate: string;
    /**
     * Mcc cache node Tls certificate not before date.
     */
    notBeforeDate: string;
    /**
     * Mcc cache node Tls certificate subject name.
     */
    subject: string;
    /**
     * Mcc cache node Tls certificate subject alternate name.
     */
    subjectAltName: string;
    /**
     * Mcc cache node Tls certificate thumbprint.
     */
    thumbprint: string;
}

/**
 * Mcc cache node resource issue properties.
 */
export interface MccIssueResponse {
    /**
     * Mcc cache node issue detail string.
     */
    detailString: string;
    /**
     * Mcc cache node issue related help link.
     */
    helpLink: string;
    /**
     * Mcc cache node issue end date.
     */
    issueEndDate: string;
    /**
     * Mcc cache node issue start date.
     */
    issueStartDate: string;
    /**
     * Mcc cache node issue type.
     */
    mccIssueType: string;
    /**
     * Mcc cache node issues toastString.
     */
    toastString: string;
}

/**
 * ProxyUrl configuration of cache node
 */
export interface ProxyUrlConfigurationResponse {
    /**
     * Host Proxy Address configuration along with port number. This can be a proxy or ip address. ex: xx.xx.xx.xxxx:80 or host name http://exampleproxy.com:80
     */
    proxyUrl?: string;
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
