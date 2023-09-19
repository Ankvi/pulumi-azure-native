import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
