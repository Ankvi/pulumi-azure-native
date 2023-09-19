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
        operation?: pulumi.Input<string | enums.Operation>;
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
