import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace desktopvirtualization {
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

    export namespace v20210201preview {
        export interface ResourceModelWithAllowedPropertySetIdentityArgs {
            /**
             * The identity type.
             */
            type?: pulumi.Input<enums.v20210201preview.ResourceIdentityType>;
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
            tier?: pulumi.Input<enums.v20210201preview.SkuTier>;
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
         * Scaling plan schedule.
         */
        export interface ScalingScheduleArgs {
            /**
             * Set of days of the week on which this schedule is active.
             */
            daysOfWeek?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Name of the scaling schedule.
             */
            name?: pulumi.Input<string>;
            /**
             * Load balancing algorithm for off-peak period.
             */
            offPeakLoadBalancingAlgorithm?: pulumi.Input<string | enums.v20210201preview.SessionHostLoadBalancingAlgorithm>;
            /**
             * Starting time for off-peak period.
             */
            offPeakStartTime?: pulumi.Input<string>;
            /**
             * Load balancing algorithm for peak period.
             */
            peakLoadBalancingAlgorithm?: pulumi.Input<string | enums.v20210201preview.SessionHostLoadBalancingAlgorithm>;
            /**
             * Starting time for peak period.
             */
            peakStartTime?: pulumi.Input<string>;
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
            rampDownLoadBalancingAlgorithm?: pulumi.Input<string | enums.v20210201preview.SessionHostLoadBalancingAlgorithm>;
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
            rampDownStartTime?: pulumi.Input<string>;
            /**
             * Specifies when to stop hosts during ramp down period.
             */
            rampDownStopHostsWhen?: pulumi.Input<string | enums.v20210201preview.StopHostsWhen>;
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
            rampUpLoadBalancingAlgorithm?: pulumi.Input<string | enums.v20210201preview.SessionHostLoadBalancingAlgorithm>;
            /**
             * Minimum host percentage for ramp up period.
             */
            rampUpMinimumHostsPct?: pulumi.Input<number>;
            /**
             * Starting time for ramp up period.
             */
            rampUpStartTime?: pulumi.Input<string>;
        }

    }

    export namespace v20220210preview {
        export interface ResourceModelWithAllowedPropertySetIdentityArgs {
            /**
             * The identity type.
             */
            type?: pulumi.Input<enums.v20220210preview.ResourceIdentityType>;
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
            tier?: pulumi.Input<enums.v20220210preview.SkuTier>;
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
         * Scaling plan schedule.
         */
        export interface ScalingScheduleArgs {
            /**
             * Set of days of the week on which this schedule is active.
             */
            daysOfWeek?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Name of the scaling schedule.
             */
            name?: pulumi.Input<string>;
            /**
             * Load balancing algorithm for off-peak period.
             */
            offPeakLoadBalancingAlgorithm?: pulumi.Input<string | enums.v20220210preview.SessionHostLoadBalancingAlgorithm>;
            /**
             * Starting time for off-peak period.
             */
            offPeakStartTime?: pulumi.Input<v20220210preview.TimeArgs>;
            /**
             * Load balancing algorithm for peak period.
             */
            peakLoadBalancingAlgorithm?: pulumi.Input<string | enums.v20220210preview.SessionHostLoadBalancingAlgorithm>;
            /**
             * Starting time for peak period.
             */
            peakStartTime?: pulumi.Input<v20220210preview.TimeArgs>;
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
            rampDownLoadBalancingAlgorithm?: pulumi.Input<string | enums.v20220210preview.SessionHostLoadBalancingAlgorithm>;
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
            rampDownStartTime?: pulumi.Input<v20220210preview.TimeArgs>;
            /**
             * Specifies when to stop hosts during ramp down period.
             */
            rampDownStopHostsWhen?: pulumi.Input<string | enums.v20220210preview.StopHostsWhen>;
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
            rampUpLoadBalancingAlgorithm?: pulumi.Input<string | enums.v20220210preview.SessionHostLoadBalancingAlgorithm>;
            /**
             * Minimum host percentage for ramp up period.
             */
            rampUpMinimumHostsPct?: pulumi.Input<number>;
            /**
             * Starting time for ramp up period.
             */
            rampUpStartTime?: pulumi.Input<v20220210preview.TimeArgs>;
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

    }

    export namespace v20220401preview {
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
            maintenanceWindows?: pulumi.Input<pulumi.Input<v20220401preview.MaintenanceWindowPropertiesArgs>[]>;
            /**
             * The type of maintenance for session host components.
             */
            type?: pulumi.Input<string | enums.v20220401preview.SessionHostComponentUpdateType>;
            /**
             * Whether to use localTime of the virtual machine.
             */
            useSessionHostLocalTime?: pulumi.Input<boolean>;
        }

        /**
         * Maintenance window starting hour and day of week.
         */
        export interface MaintenanceWindowPropertiesArgs {
            /**
             * Day of the week.
             */
            dayOfWeek?: pulumi.Input<enums.v20220401preview.DayOfWeek>;
            /**
             * The update start hour of the day. (0 - 23)
             */
            hour?: pulumi.Input<number>;
        }

        /**
         * Properties for arm migration.
         */
        export interface MigrationRequestPropertiesArgs {
            /**
             * The path to the legacy object to migrate.
             */
            migrationPath?: pulumi.Input<string>;
            /**
             * The type of operation for migration.
             */
            operation?: pulumi.Input<string | enums.v20220401preview.Operation>;
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
            registrationTokenOperation?: pulumi.Input<string | enums.v20220401preview.RegistrationTokenOperation>;
            /**
             * The registration token base64 encoded string.
             */
            token?: pulumi.Input<string>;
        }

        export interface ResourceModelWithAllowedPropertySetIdentityArgs {
            /**
             * The identity type.
             */
            type?: pulumi.Input<enums.v20220401preview.ResourceIdentityType>;
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
            tier?: pulumi.Input<enums.v20220401preview.SkuTier>;
        }

    }

    export namespace v20220909 {
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
            maintenanceWindows?: pulumi.Input<pulumi.Input<v20220909.MaintenanceWindowPropertiesArgs>[]>;
            /**
             * The type of maintenance for session host components.
             */
            type?: pulumi.Input<string | enums.v20220909.SessionHostComponentUpdateType>;
            /**
             * Whether to use localTime of the virtual machine.
             */
            useSessionHostLocalTime?: pulumi.Input<boolean>;
        }

        /**
         * Maintenance window starting hour and day of week.
         */
        export interface MaintenanceWindowPropertiesArgs {
            /**
             * Day of the week.
             */
            dayOfWeek?: pulumi.Input<enums.v20220909.DayOfWeek>;
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
            registrationTokenOperation?: pulumi.Input<string | enums.v20220909.RegistrationTokenOperation>;
            /**
             * The registration token base64 encoded string.
             */
            token?: pulumi.Input<string>;
        }

        export interface ResourceModelWithAllowedPropertySetIdentityArgs {
            /**
             * The identity type.
             */
            type?: pulumi.Input<enums.v20220909.ResourceIdentityType>;
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
            tier?: pulumi.Input<enums.v20220909.SkuTier>;
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
            offPeakLoadBalancingAlgorithm?: pulumi.Input<string | enums.v20220909.SessionHostLoadBalancingAlgorithm>;
            /**
             * Starting time for off-peak period.
             */
            offPeakStartTime?: pulumi.Input<v20220909.TimeArgs>;
            /**
             * Load balancing algorithm for peak period.
             */
            peakLoadBalancingAlgorithm?: pulumi.Input<string | enums.v20220909.SessionHostLoadBalancingAlgorithm>;
            /**
             * Starting time for peak period.
             */
            peakStartTime?: pulumi.Input<v20220909.TimeArgs>;
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
            rampDownLoadBalancingAlgorithm?: pulumi.Input<string | enums.v20220909.SessionHostLoadBalancingAlgorithm>;
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
            rampDownStartTime?: pulumi.Input<v20220909.TimeArgs>;
            /**
             * Specifies when to stop hosts during ramp down period.
             */
            rampDownStopHostsWhen?: pulumi.Input<string | enums.v20220909.StopHostsWhen>;
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
            rampUpLoadBalancingAlgorithm?: pulumi.Input<string | enums.v20220909.SessionHostLoadBalancingAlgorithm>;
            /**
             * Minimum host percentage for ramp up period.
             */
            rampUpMinimumHostsPct?: pulumi.Input<number>;
            /**
             * Starting time for ramp up period.
             */
            rampUpStartTime?: pulumi.Input<v20220909.TimeArgs>;
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

    }

    export namespace v20221014preview {
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
            maintenanceWindows?: pulumi.Input<pulumi.Input<v20221014preview.MaintenanceWindowPropertiesArgs>[]>;
            /**
             * The type of maintenance for session host components.
             */
            type?: pulumi.Input<string | enums.v20221014preview.SessionHostComponentUpdateType>;
            /**
             * Whether to use localTime of the virtual machine.
             */
            useSessionHostLocalTime?: pulumi.Input<boolean>;
        }

        /**
         * Maintenance window starting hour and day of week.
         */
        export interface MaintenanceWindowPropertiesArgs {
            /**
             * Day of the week.
             */
            dayOfWeek?: pulumi.Input<enums.v20221014preview.DayOfWeek>;
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
            status?: pulumi.Input<string | enums.v20221014preview.PrivateEndpointServiceConnectionStatus>;
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
            registrationTokenOperation?: pulumi.Input<string | enums.v20221014preview.RegistrationTokenOperation>;
            /**
             * The registration token base64 encoded string.
             */
            token?: pulumi.Input<string>;
        }

        export interface ResourceModelWithAllowedPropertySetIdentityArgs {
            /**
             * The identity type.
             */
            type?: pulumi.Input<enums.v20221014preview.ResourceIdentityType>;
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
            tier?: pulumi.Input<enums.v20221014preview.SkuTier>;
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
            offPeakLoadBalancingAlgorithm?: pulumi.Input<string | enums.v20221014preview.SessionHostLoadBalancingAlgorithm>;
            /**
             * Starting time for off-peak period.
             */
            offPeakStartTime?: pulumi.Input<v20221014preview.TimeArgs>;
            /**
             * Load balancing algorithm for peak period.
             */
            peakLoadBalancingAlgorithm?: pulumi.Input<string | enums.v20221014preview.SessionHostLoadBalancingAlgorithm>;
            /**
             * Starting time for peak period.
             */
            peakStartTime?: pulumi.Input<v20221014preview.TimeArgs>;
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
            rampDownLoadBalancingAlgorithm?: pulumi.Input<string | enums.v20221014preview.SessionHostLoadBalancingAlgorithm>;
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
            rampDownStartTime?: pulumi.Input<v20221014preview.TimeArgs>;
            /**
             * Specifies when to stop hosts during ramp down period.
             */
            rampDownStopHostsWhen?: pulumi.Input<string | enums.v20221014preview.StopHostsWhen>;
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
            rampUpLoadBalancingAlgorithm?: pulumi.Input<string | enums.v20221014preview.SessionHostLoadBalancingAlgorithm>;
            /**
             * Minimum host percentage for ramp up period.
             */
            rampUpMinimumHostsPct?: pulumi.Input<number>;
            /**
             * Starting time for ramp up period.
             */
            rampUpStartTime?: pulumi.Input<v20221014preview.TimeArgs>;
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

    }

    export namespace v20230707preview {
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
            maintenanceWindows?: pulumi.Input<pulumi.Input<v20230707preview.MaintenanceWindowPropertiesArgs>[]>;
            /**
             * The type of maintenance for session host components.
             */
            type?: pulumi.Input<string | enums.v20230707preview.SessionHostComponentUpdateType>;
            /**
             * Whether to use localTime of the virtual machine.
             */
            useSessionHostLocalTime?: pulumi.Input<boolean>;
        }

        /**
         * Maintenance window starting hour and day of week.
         */
        export interface MaintenanceWindowPropertiesArgs {
            /**
             * Day of the week.
             */
            dayOfWeek?: pulumi.Input<enums.v20230707preview.DayOfWeek>;
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
            status?: pulumi.Input<string | enums.v20230707preview.PrivateEndpointServiceConnectionStatus>;
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
            registrationTokenOperation?: pulumi.Input<string | enums.v20230707preview.RegistrationTokenOperation>;
            /**
             * The registration token base64 encoded string.
             */
            token?: pulumi.Input<string>;
        }

        export interface ResourceModelWithAllowedPropertySetIdentityArgs {
            /**
             * The identity type.
             */
            type?: pulumi.Input<enums.v20230707preview.ResourceIdentityType>;
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
            tier?: pulumi.Input<enums.v20230707preview.SkuTier>;
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
            offPeakLoadBalancingAlgorithm?: pulumi.Input<string | enums.v20230707preview.SessionHostLoadBalancingAlgorithm>;
            /**
             * Starting time for off-peak period.
             */
            offPeakStartTime?: pulumi.Input<v20230707preview.TimeArgs>;
            /**
             * Load balancing algorithm for peak period.
             */
            peakLoadBalancingAlgorithm?: pulumi.Input<string | enums.v20230707preview.SessionHostLoadBalancingAlgorithm>;
            /**
             * Starting time for peak period.
             */
            peakStartTime?: pulumi.Input<v20230707preview.TimeArgs>;
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
            rampDownLoadBalancingAlgorithm?: pulumi.Input<string | enums.v20230707preview.SessionHostLoadBalancingAlgorithm>;
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
            rampDownStartTime?: pulumi.Input<v20230707preview.TimeArgs>;
            /**
             * Specifies when to stop hosts during ramp down period.
             */
            rampDownStopHostsWhen?: pulumi.Input<string | enums.v20230707preview.StopHostsWhen>;
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
            rampUpLoadBalancingAlgorithm?: pulumi.Input<string | enums.v20230707preview.SessionHostLoadBalancingAlgorithm>;
            /**
             * Minimum host percentage for ramp up period.
             */
            rampUpMinimumHostsPct?: pulumi.Input<number>;
            /**
             * Starting time for ramp up period.
             */
            rampUpStartTime?: pulumi.Input<v20230707preview.TimeArgs>;
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

    }
}
