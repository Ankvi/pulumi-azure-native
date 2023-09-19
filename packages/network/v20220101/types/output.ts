import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * DDoS custom policy properties.
     */
    export interface ProtocolCustomSettingsFormatResponse {
        /**
         * The protocol for which the DDoS protection policy is being customized.
         */
        protocol?: string;
        /**
         * The customized DDoS protection source rate.
         */
        sourceRateOverride?: string;
        /**
         * The customized DDoS protection trigger rate.
         */
        triggerRateOverride?: string;
        /**
         * The customized DDoS protection trigger rate sensitivity degrees. High: Trigger rate set with most sensitivity w.r.t. normal traffic. Default: Trigger rate set with moderate sensitivity w.r.t. normal traffic. Low: Trigger rate set with less sensitivity w.r.t. normal traffic. Relaxed: Trigger rate set with least sensitivity w.r.t. normal traffic.
         */
        triggerSensitivityOverride?: string;
    }

    /**
     * Reference to another subresource.
     */
    export interface SubResourceResponse {
        /**
         * Resource ID.
         */
        id?: string;
    }
