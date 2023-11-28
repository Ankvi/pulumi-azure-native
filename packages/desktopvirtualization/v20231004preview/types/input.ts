import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The session host configuration for updating agent, monitoring agent, and stack component.
     */
    export interface AgentUpdatePropertiesArgs {
        /**
         * Time zone for maintenance as defined in https://docs.microsoft.com/en-us/dotnet/api/system.timezoneinfo.findsystemtimezonebyid?view=net-5.0. Must be set if useLocalTime is true.
         */
        maintenanceWindowTimeZone?: pulumi.Input<string>;
        /**
         * List of maintenance windows. Maintenance windows are 2 hours long.
         */
        maintenanceWindows?: pulumi.Input<pulumi.Input<MaintenanceWindowPropertiesArgs>[]>;
        /**
         * The type of maintenance for session host components.
         */
        type?: pulumi.Input<string | enums.SessionHostComponentUpdateType>;
        /**
         * Whether to use localTime of the virtual machine.
         */
        useSessionHostLocalTime?: pulumi.Input<boolean>;
    }

    /**
     * Schema for Import Package Information properties.
     */
    export interface AppAttachPackageInfoPropertiesArgs {
        /**
         * Date certificate expires, found in the appxmanifest.xml. 
         */
        certificateExpiry?: pulumi.Input<string>;
        /**
         * Certificate name found in the appxmanifest.xml. 
         */
        certificateName?: pulumi.Input<string>;
        /**
         * User friendly Name to be displayed in the portal. 
         */
        displayName?: pulumi.Input<string>;
        /**
         * VHD/CIM image path on Network Share.
         */
        imagePath?: pulumi.Input<string>;
        /**
         * Make this version of the package the active one across the hostpool. 
         */
        isActive?: pulumi.Input<boolean>;
        /**
         * Is package timestamped so it can ignore the certificate expiry date
         */
        isPackageTimestamped?: pulumi.Input<string | enums.PackageTimestamped>;
        /**
         * Specifies how to register Package in feed.
         */
        isRegularRegistration?: pulumi.Input<boolean>;
        /**
         * Date Package was last updated, found in the appxmanifest.xml. 
         */
        lastUpdated?: pulumi.Input<string>;
        /**
         * Alias of App Attach Package. Assigned at import time
         */
        packageAlias?: pulumi.Input<string>;
        /**
         * List of package applications. 
         */
        packageApplications?: pulumi.Input<pulumi.Input<MsixPackageApplicationsArgs>[]>;
        /**
         * List of package dependencies. 
         */
        packageDependencies?: pulumi.Input<pulumi.Input<MsixPackageDependenciesArgs>[]>;
        /**
         * Package Family Name from appxmanifest.xml. Contains Package Name and Publisher name. 
         */
        packageFamilyName?: pulumi.Input<string>;
        /**
         * Package Full Name from appxmanifest.xml. 
         */
        packageFullName?: pulumi.Input<string>;
        /**
         * Package Name from appxmanifest.xml. 
         */
        packageName?: pulumi.Input<string>;
        /**
         * Relative Path to the package inside the image. 
         */
        packageRelativePath?: pulumi.Input<string>;
        /**
         * Package Version found in the appxmanifest.xml. 
         */
        version?: pulumi.Input<string>;
    }

    /**
     * Schema for App Attach Package properties.
     */
    export interface AppAttachPackagePropertiesArgs {
        /**
         * Parameter indicating how the health check should behave if this package fails staging
         */
        failHealthCheckOnStagingFailure?: pulumi.Input<string | enums.FailHealthCheckOnStagingFailure>;
        /**
         * List of Hostpool resource Ids.
         */
        hostPoolReferences?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Detailed properties for App Attach Package
         */
        image?: pulumi.Input<AppAttachPackageInfoPropertiesArgs>;
        /**
         * URL of keyvault location to store certificate
         */
        keyVaultURL?: pulumi.Input<string>;
    }

    /**
     * Maintenance window starting hour and day of week.
     */
    export interface MaintenanceWindowPropertiesArgs {
        /**
         * Day of the week.
         */
        dayOfWeek?: pulumi.Input<enums.DayOfWeek>;
        /**
         * The update start hour of the day. (0 - 23)
         */
        hour?: pulumi.Input<number>;
    }

    /**
     * Schema for MSIX Package Application properties.
     */
    export interface MsixPackageApplicationsArgs {
        /**
         * Package Application Id, found in appxmanifest.xml.
         */
        appId?: pulumi.Input<string>;
        /**
         * Used to activate Package Application. Consists of Package Name and ApplicationID. Found in appxmanifest.xml.
         */
        appUserModelID?: pulumi.Input<string>;
        /**
         * Description of Package Application.
         */
        description?: pulumi.Input<string>;
        /**
         * User friendly name.
         */
        friendlyName?: pulumi.Input<string>;
        /**
         * User friendly name.
         */
        iconImageName?: pulumi.Input<string>;
        /**
         * the icon a 64 bit string as a byte array.
         */
        rawIcon?: pulumi.Input<string>;
        /**
         * the icon a 64 bit string as a byte array.
         */
        rawPng?: pulumi.Input<string>;
    }

    /**
     * Schema for MSIX Package Dependencies properties.
     */
    export interface MsixPackageDependenciesArgs {
        /**
         * Name of package dependency.
         */
        dependencyName?: pulumi.Input<string>;
        /**
         * Dependency version required.
         */
        minVersion?: pulumi.Input<string>;
        /**
         * Name of dependency publisher.
         */
        publisher?: pulumi.Input<string>;
    }

    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    export interface PrivateLinkServiceConnectionStateArgs {
        /**
         * A message indicating if changes on the service provider require any updates on the consumer.
         */
        actionsRequired?: pulumi.Input<string>;
        /**
         * The reason for approval/rejection of the connection.
         */
        description?: pulumi.Input<string>;
        /**
         * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
         */
        status?: pulumi.Input<string | enums.PrivateEndpointServiceConnectionStatus>;
    }

    /**
     * Represents a RegistrationInfo definition.
     */
    export interface RegistrationInfoArgs {
        /**
         * Expiration time of registration token.
         */
        expirationTime?: pulumi.Input<string>;
        /**
         * The type of resetting the token.
         */
        registrationTokenOperation?: pulumi.Input<string | enums.RegistrationTokenOperation>;
        /**
         * The registration token base64 encoded string.
         */
        token?: pulumi.Input<string>;
    }

    export interface ResourceModelWithAllowedPropertySetIdentityArgs {
        /**
         * The identity type.
         */
        type?: pulumi.Input<enums.ResourceIdentityType>;
    }

    export interface ResourceModelWithAllowedPropertySetPlanArgs {
        /**
         * A user defined name of the 3rd Party Artifact that is being procured.
         */
        name: pulumi.Input<string>;
        /**
         * The 3rd Party artifact that is being procured. E.g. NewRelic. Product maps to the OfferID specified for the artifact at the time of Data Market onboarding. 
         */
        product: pulumi.Input<string>;
        /**
         * A publisher provided promotion code as provisioned in Data Market for the said product/artifact.
         */
        promotionCode?: pulumi.Input<string>;
        /**
         * The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic
         */
        publisher: pulumi.Input<string>;
        /**
         * The version of the desired product/artifact.
         */
        version?: pulumi.Input<string>;
    }

    export interface ResourceModelWithAllowedPropertySetSkuArgs {
        /**
         * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
         */
        capacity?: pulumi.Input<number>;
        /**
         * If the service has different generations of hardware, for the same SKU, then that can be captured here.
         */
        family?: pulumi.Input<string>;
        /**
         * The name of the SKU. Ex - P3. It is typically a letter+number code
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
     * Scaling plan reference to hostpool.
     */
    export interface ScalingHostPoolReferenceArgs {
        /**
         * Arm path of referenced hostpool.
         */
        hostPoolArmPath?: pulumi.Input<string>;
        /**
         * Is the scaling plan enabled for this hostpool.
         */
        scalingPlanEnabled?: pulumi.Input<boolean>;
    }

    /**
     * A ScalingPlanPooledSchedule.
     */
    export interface ScalingScheduleArgs {
        /**
         * Set of days of the week on which this schedule is active.
         */
        daysOfWeek?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Name of the ScalingPlanPooledSchedule.
         */
        name?: pulumi.Input<string>;
        /**
         * Load balancing algorithm for off-peak period.
         */
        offPeakLoadBalancingAlgorithm?: pulumi.Input<string | enums.SessionHostLoadBalancingAlgorithm>;
        /**
         * Starting time for off-peak period.
         */
        offPeakStartTime?: pulumi.Input<TimeArgs>;
        /**
         * Load balancing algorithm for peak period.
         */
        peakLoadBalancingAlgorithm?: pulumi.Input<string | enums.SessionHostLoadBalancingAlgorithm>;
        /**
         * Starting time for peak period.
         */
        peakStartTime?: pulumi.Input<TimeArgs>;
        /**
         * Capacity threshold for ramp down period.
         */
        rampDownCapacityThresholdPct?: pulumi.Input<number>;
        /**
         * Should users be logged off forcefully from hosts.
         */
        rampDownForceLogoffUsers?: pulumi.Input<boolean>;
        /**
         * Load balancing algorithm for ramp down period.
         */
        rampDownLoadBalancingAlgorithm?: pulumi.Input<string | enums.SessionHostLoadBalancingAlgorithm>;
        /**
         * Minimum host percentage for ramp down period.
         */
        rampDownMinimumHostsPct?: pulumi.Input<number>;
        /**
         * Notification message for users during ramp down period.
         */
        rampDownNotificationMessage?: pulumi.Input<string>;
        /**
         * Starting time for ramp down period.
         */
        rampDownStartTime?: pulumi.Input<TimeArgs>;
        /**
         * Specifies when to stop hosts during ramp down period.
         */
        rampDownStopHostsWhen?: pulumi.Input<string | enums.StopHostsWhen>;
        /**
         * Number of minutes to wait to stop hosts during ramp down period.
         */
        rampDownWaitTimeMinutes?: pulumi.Input<number>;
        /**
         * Capacity threshold for ramp up period.
         */
        rampUpCapacityThresholdPct?: pulumi.Input<number>;
        /**
         * Load balancing algorithm for ramp up period.
         */
        rampUpLoadBalancingAlgorithm?: pulumi.Input<string | enums.SessionHostLoadBalancingAlgorithm>;
        /**
         * Minimum host percentage for ramp up period.
         */
        rampUpMinimumHostsPct?: pulumi.Input<number>;
        /**
         * Starting time for ramp up period.
         */
        rampUpStartTime?: pulumi.Input<TimeArgs>;
    }

    /**
     * The time for a scaling action to occur.
     */
    export interface TimeArgs {
        /**
         * The hour.
         */
        hour: pulumi.Input<number>;
        /**
         * The minute.
         */
        minute: pulumi.Input<number>;
    }
