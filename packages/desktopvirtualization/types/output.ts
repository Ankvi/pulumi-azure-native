import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace desktopvirtualization {
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

    export namespace v20210201preview {
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
         * Scaling plan schedule.
         */
        export interface ScalingScheduleResponse {
            /**
             * Set of days of the week on which this schedule is active.
             */
            daysOfWeek?: string[];
            /**
             * Name of the scaling schedule.
             */
            name?: string;
            /**
             * Load balancing algorithm for off-peak period.
             */
            offPeakLoadBalancingAlgorithm?: string;
            /**
             * Starting time for off-peak period.
             */
            offPeakStartTime?: string;
            /**
             * Load balancing algorithm for peak period.
             */
            peakLoadBalancingAlgorithm?: string;
            /**
             * Starting time for peak period.
             */
            peakStartTime?: string;
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
            rampDownStartTime?: string;
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
            rampUpStartTime?: string;
        }

    }

    export namespace v20220210preview {
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
         * Scaling plan schedule.
         */
        export interface ScalingScheduleResponse {
            /**
             * Set of days of the week on which this schedule is active.
             */
            daysOfWeek?: string[];
            /**
             * Name of the scaling schedule.
             */
            name?: string;
            /**
             * Load balancing algorithm for off-peak period.
             */
            offPeakLoadBalancingAlgorithm?: string;
            /**
             * Starting time for off-peak period.
             */
            offPeakStartTime?: v20220210preview.TimeResponse;
            /**
             * Load balancing algorithm for peak period.
             */
            peakLoadBalancingAlgorithm?: string;
            /**
             * Starting time for peak period.
             */
            peakStartTime?: v20220210preview.TimeResponse;
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
            rampDownStartTime?: v20220210preview.TimeResponse;
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
            rampUpStartTime?: v20220210preview.TimeResponse;
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

    }

    export namespace v20220401preview {
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
            maintenanceWindows?: v20220401preview.MaintenanceWindowPropertiesResponse[];
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
         * Properties for arm migration.
         */
        export interface MigrationRequestPropertiesResponse {
            /**
             * The path to the legacy object to migrate.
             */
            migrationPath?: string;
            /**
             * The type of operation for migration.
             */
            operation?: string;
        }

        /**
         * The Private Endpoint Connection resource.
         */
        export interface PrivateEndpointConnectionResponse {
            /**
             * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
             */
            id: string;
            /**
             * The name of the resource
             */
            name: string;
            /**
             * The resource of private end point.
             */
            privateEndpoint?: v20220401preview.PrivateEndpointResponse;
            /**
             * A collection of information about the state of the connection between service consumer and provider.
             */
            privateLinkServiceConnectionState: v20220401preview.PrivateLinkServiceConnectionStateResponse;
            /**
             * The provisioning state of the private endpoint connection resource.
             */
            provisioningState: string;
            /**
             * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
             */
            type: string;
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

    }

    export namespace v20220909 {
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
            maintenanceWindows?: v20220909.MaintenanceWindowPropertiesResponse[];
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
            offPeakStartTime?: v20220909.TimeResponse;
            /**
             * Load balancing algorithm for peak period.
             */
            peakLoadBalancingAlgorithm?: string;
            /**
             * Starting time for peak period.
             */
            peakStartTime?: v20220909.TimeResponse;
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
            rampDownStartTime?: v20220909.TimeResponse;
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
            rampUpStartTime?: v20220909.TimeResponse;
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

    }

    export namespace v20221014preview {
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
            maintenanceWindows?: v20221014preview.MaintenanceWindowPropertiesResponse[];
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
         * The Private Endpoint Connection resource.
         */
        export interface PrivateEndpointConnectionResponse {
            /**
             * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
             */
            id: string;
            /**
             * The name of the resource
             */
            name: string;
            /**
             * The resource of private end point.
             */
            privateEndpoint?: v20221014preview.PrivateEndpointResponse;
            /**
             * A collection of information about the state of the connection between service consumer and provider.
             */
            privateLinkServiceConnectionState: v20221014preview.PrivateLinkServiceConnectionStateResponse;
            /**
             * The provisioning state of the private endpoint connection resource.
             */
            provisioningState: string;
            /**
             * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
             */
            type: string;
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
            offPeakStartTime?: v20221014preview.TimeResponse;
            /**
             * Load balancing algorithm for peak period.
             */
            peakLoadBalancingAlgorithm?: string;
            /**
             * Starting time for peak period.
             */
            peakStartTime?: v20221014preview.TimeResponse;
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
            rampDownStartTime?: v20221014preview.TimeResponse;
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
            rampUpStartTime?: v20221014preview.TimeResponse;
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

    }

    export namespace v20230707preview {
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
            maintenanceWindows?: v20230707preview.MaintenanceWindowPropertiesResponse[];
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
         * The Private Endpoint Connection resource.
         */
        export interface PrivateEndpointConnectionResponse {
            /**
             * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
             */
            id: string;
            /**
             * The name of the resource
             */
            name: string;
            /**
             * The resource of private end point.
             */
            privateEndpoint?: v20230707preview.PrivateEndpointResponse;
            /**
             * A collection of information about the state of the connection between service consumer and provider.
             */
            privateLinkServiceConnectionState: v20230707preview.PrivateLinkServiceConnectionStateResponse;
            /**
             * The provisioning state of the private endpoint connection resource.
             */
            provisioningState: string;
            /**
             * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
             */
            type: string;
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
            offPeakStartTime?: v20230707preview.TimeResponse;
            /**
             * Load balancing algorithm for peak period.
             */
            peakLoadBalancingAlgorithm?: string;
            /**
             * Starting time for peak period.
             */
            peakStartTime?: v20230707preview.TimeResponse;
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
            rampDownStartTime?: v20230707preview.TimeResponse;
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
            rampUpStartTime?: v20230707preview.TimeResponse;
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

    }
}
