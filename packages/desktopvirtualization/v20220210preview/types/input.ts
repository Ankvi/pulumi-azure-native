import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
