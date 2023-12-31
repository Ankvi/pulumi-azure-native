import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The Action Groups information, used by the alert rule.
     */
    export interface ActionGroupsInformationResponse {
        /**
         * An optional custom email subject to use in email notifications.
         */
        customEmailSubject?: string;
        /**
         * An optional custom web-hook payload to use in web-hook notifications.
         */
        customWebhookPayload?: string;
        /**
         * The Action Group resource IDs.
         */
        groupIds: string[];
    }

    /**
     * The detector parameter definition.
     */
    export interface DetectorParameterDefinitionResponse {
        /**
         * The detector parameter description.
         */
        description?: string;
        /**
         * The detector parameter display name.
         */
        displayName?: string;
        /**
         * A value indicating whether this detector parameter is mandatory.
         */
        isMandatory?: boolean;
        /**
         * The detector parameter name.
         */
        name?: string;
        /**
         * The detector parameter type.
         */
        type?: string;
    }

    /**
     * The detector information. By default this is not populated, unless it's specified in expandDetector
     */
    export interface DetectorResponse {
        /**
         * The Smart Detector description.
         */
        description: string;
        /**
         * The detector id.
         */
        id: string;
        /**
         * The Smart Detector image path. By default this is not populated, unless it's specified in expandDetector
         */
        imagePaths: string[];
        /**
         * The Smart Detector name.
         */
        name: string;
        /**
         * The Smart Detector parameters definitions.'
         */
        parameterDefinitions: DetectorParameterDefinitionResponse[];
        /**
         * The detector's parameters.'
         */
        parameters?: {[key: string]: any};
        /**
         * The Smart Detector supported cadences.
         */
        supportedCadences: number[];
        /**
         * The Smart Detector supported resource types.
         */
        supportedResourceTypes: string[];
    }

    /**
     * Optional throttling information for the alert rule.
     */
    export interface ThrottlingInformationResponse {
        /**
         * The required duration (in ISO8601 format) to wait before notifying on the alert rule again. The time granularity must be in minutes and minimum value is 0 minutes
         */
        duration?: string;
    }
