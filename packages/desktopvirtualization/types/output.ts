import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The session host configuration for updating agent, monitoring agent, and stack component.
 */
export interface AgentUpdatePropertiesResponse {
    /**
     * Time zone for maintenance as defined in https://docs.microsoft.com/en-us/dotnet/api/system.timezoneinfo.findsystemtimezonebyid?view=net-5.0. Must be set if useLocalTime is true.
     */
    maintenanceWindowTimeZone?: string;
    /**
     * List of maintenance windows. Maintenance windows are 2 hours long.
     */
    maintenanceWindows?: MaintenanceWindowPropertiesResponse[];
    /**
     * The type of maintenance for session host components.
     */
    type?: string;
    /**
     * Whether to use localTime of the virtual machine.
     */
    useSessionHostLocalTime?: boolean;
}

/**
 * Schema for Import Package Information properties.
 */
export interface AppAttachPackageInfoPropertiesResponse {
    /**
     * Date certificate expires, found in the appxmanifest.xml. 
     */
    certificateExpiry?: string;
    /**
     * Certificate name found in the appxmanifest.xml. 
     */
    certificateName?: string;
    /**
     * User friendly Name to be displayed in the portal. 
     */
    displayName?: string;
    /**
     * VHD/CIM image path on Network Share.
     */
    imagePath?: string;
    /**
     * Make this version of the package the active one across the hostpool. 
     */
    isActive?: boolean;
    /**
     * Is package timestamped so it can ignore the certificate expiry date
     */
    isPackageTimestamped?: string;
    /**
     * Specifies how to register Package in feed.
     */
    isRegularRegistration?: boolean;
    /**
     * Date Package was last updated, found in the appxmanifest.xml. 
     */
    lastUpdated?: string;
    /**
     * Alias of App Attach Package. Assigned at import time
     */
    packageAlias?: string;
    /**
     * List of package applications. 
     */
    packageApplications?: MsixPackageApplicationsResponse[];
    /**
     * List of package dependencies. 
     */
    packageDependencies?: MsixPackageDependenciesResponse[];
    /**
     * Package Family Name from appxmanifest.xml. Contains Package Name and Publisher name. 
     */
    packageFamilyName?: string;
    /**
     * Package Full Name from appxmanifest.xml. 
     */
    packageFullName?: string;
    /**
     * Package Name from appxmanifest.xml. 
     */
    packageName?: string;
    /**
     * Relative Path to the package inside the image. 
     */
    packageRelativePath?: string;
    /**
     * Package Version found in the appxmanifest.xml. 
     */
    version?: string;
}

/**
 * Schema for App Attach Package properties.
 */
export interface AppAttachPackagePropertiesResponse {
    /**
     * Parameter indicating how the health check should behave if this package fails staging
     */
    failHealthCheckOnStagingFailure?: string;
    /**
     * List of Hostpool resource Ids.
     */
    hostPoolReferences?: string[];
    /**
     * Detailed properties for App Attach Package
     */
    image?: AppAttachPackageInfoPropertiesResponse;
    /**
     * URL of keyvault location to store certificate
     */
    keyVaultURL?: string;
    /**
     * The provisioning state of the App Attach Package.
     */
    provisioningState: string;
}

/**
 * Maintenance window starting hour and day of week.
 */
export interface MaintenanceWindowPropertiesResponse {
    /**
     * Day of the week.
     */
    dayOfWeek?: string;
    /**
     * The update start hour of the day. (0 - 23)
     */
    hour?: number;
}

/**
 * Schema for MSIX Package Application properties.
 */
export interface MsixPackageApplicationsResponse {
    /**
     * Package Application Id, found in appxmanifest.xml.
     */
    appId?: string;
    /**
     * Used to activate Package Application. Consists of Package Name and ApplicationID. Found in appxmanifest.xml.
     */
    appUserModelID?: string;
    /**
     * Description of Package Application.
     */
    description?: string;
    /**
     * User friendly name.
     */
    friendlyName?: string;
    /**
     * User friendly name.
     */
    iconImageName?: string;
    /**
     * the icon a 64 bit string as a byte array.
     */
    rawIcon?: string;
    /**
     * the icon a 64 bit string as a byte array.
     */
    rawPng?: string;
}

/**
 * Schema for MSIX Package Dependencies properties.
 */
export interface MsixPackageDependenciesResponse {
    /**
     * Name of package dependency.
     */
    dependencyName?: string;
    /**
     * Dependency version required.
     */
    minVersion?: string;
    /**
     * Name of dependency publisher.
     */
    publisher?: string;
}

/**
 * The Private Endpoint resource.
 */
export interface PrivateEndpointResponse {
    /**
     * The ARM identifier for Private Endpoint
     */
    id: string;
}

/**
 * A collection of information about the state of the connection between service consumer and provider.
 */
export interface PrivateLinkServiceConnectionStateResponse {
    /**
     * A message indicating if changes on the service provider require any updates on the consumer.
     */
    actionsRequired?: string;
    /**
     * The reason for approval/rejection of the connection.
     */
    description?: string;
    /**
     * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
     */
    status?: string;
}

/**
 * Represents a RegistrationInfo definition.
 */
export interface RegistrationInfoResponse {
    /**
     * Expiration time of registration token.
     */
    expirationTime?: string;
    /**
     * The type of resetting the token.
     */
    registrationTokenOperation?: string;
    /**
     * The registration token base64 encoded string.
     */
    token?: string;
}

export interface ResourceModelWithAllowedPropertySetResponseIdentity {
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
    type?: string;
}

export interface ResourceModelWithAllowedPropertySetResponsePlan {
    /**
     * A user defined name of the 3rd Party Artifact that is being procured.
     */
    name: string;
    /**
     * The 3rd Party artifact that is being procured. E.g. NewRelic. Product maps to the OfferID specified for the artifact at the time of Data Market onboarding. 
     */
    product: string;
    /**
     * A publisher provided promotion code as provisioned in Data Market for the said product/artifact.
     */
    promotionCode?: string;
    /**
     * The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic
     */
    publisher: string;
    /**
     * The version of the desired product/artifact.
     */
    version?: string;
}

export interface ResourceModelWithAllowedPropertySetResponseSku {
    /**
     * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
     */
    capacity?: number;
    /**
     * If the service has different generations of hardware, for the same SKU, then that can be captured here.
     */
    family?: string;
    /**
     * The name of the SKU. Ex - P3. It is typically a letter+number code
     */
    name: string;
    /**
     * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. 
     */
    size?: string;
    /**
     * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
     */
    tier?: string;
}

/**
 * Scaling plan reference to hostpool.
 */
export interface ScalingHostPoolReferenceResponse {
    /**
     * Arm path of referenced hostpool.
     */
    hostPoolArmPath?: string;
    /**
     * Is the scaling plan enabled for this hostpool.
     */
    scalingPlanEnabled?: boolean;
}

/**
 * A ScalingPlanPooledSchedule.
 */
export interface ScalingScheduleResponse {
    /**
     * Set of days of the week on which this schedule is active.
     */
    daysOfWeek?: string[];
    /**
     * Name of the ScalingPlanPooledSchedule.
     */
    name?: string;
    /**
     * Load balancing algorithm for off-peak period.
     */
    offPeakLoadBalancingAlgorithm?: string;
    /**
     * Starting time for off-peak period.
     */
    offPeakStartTime?: TimeResponse;
    /**
     * Load balancing algorithm for peak period.
     */
    peakLoadBalancingAlgorithm?: string;
    /**
     * Starting time for peak period.
     */
    peakStartTime?: TimeResponse;
    /**
     * Capacity threshold for ramp down period.
     */
    rampDownCapacityThresholdPct?: number;
    /**
     * Should users be logged off forcefully from hosts.
     */
    rampDownForceLogoffUsers?: boolean;
    /**
     * Load balancing algorithm for ramp down period.
     */
    rampDownLoadBalancingAlgorithm?: string;
    /**
     * Minimum host percentage for ramp down period.
     */
    rampDownMinimumHostsPct?: number;
    /**
     * Notification message for users during ramp down period.
     */
    rampDownNotificationMessage?: string;
    /**
     * Starting time for ramp down period.
     */
    rampDownStartTime?: TimeResponse;
    /**
     * Specifies when to stop hosts during ramp down period.
     */
    rampDownStopHostsWhen?: string;
    /**
     * Number of minutes to wait to stop hosts during ramp down period.
     */
    rampDownWaitTimeMinutes?: number;
    /**
     * Capacity threshold for ramp up period.
     */
    rampUpCapacityThresholdPct?: number;
    /**
     * Load balancing algorithm for ramp up period.
     */
    rampUpLoadBalancingAlgorithm?: string;
    /**
     * Minimum host percentage for ramp up period.
     */
    rampUpMinimumHostsPct?: number;
    /**
     * Starting time for ramp up period.
     */
    rampUpStartTime?: TimeResponse;
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
 * The time for a scaling action to occur.
 */
export interface TimeResponse {
    /**
     * The hour.
     */
    hour: number;
    /**
     * The minute.
     */
    minute: number;
}








