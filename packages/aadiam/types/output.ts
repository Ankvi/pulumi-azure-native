import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export interface AzureADMetricsPropertiesFormatResponse {
    /**
     * The provisioning state of the resource.
     */
    provisioningState: string;
}

/**
 * Part of MultiTenantDiagnosticSettings. Specifies the settings for a particular log.
 */
export interface LogSettingsResponse {
    /**
     * Name of a Diagnostic Log category for a resource type this setting is applied to. To obtain the list of Diagnostic Log categories for a resource, first perform a GET diagnostic settings operation.
     */
    category?: string;
    /**
     * A value indicating whether this log is enabled.
     */
    enabled: boolean;
    /**
     * The retention policy for this log.
     */
    retentionPolicy?: RetentionPolicyResponse;
}

/**
 * Private endpoint object properties.
 */
export interface PrivateEndpointResponse {
    /**
     * Full identifier of the private endpoint resource.
     */
    id?: string;
}

/**
 * An object that represents the approval state of the private link connection.
 */
export interface PrivateLinkServiceConnectionStateResponse {
    /**
     * A message indicating if changes on the service provider require any updates on the consumer.
     */
    actionsRequired?: string;
    /**
     * The reason for approval or rejection.
     */
    description?: string;
    /**
     * Indicates whether the connection has been approved, rejected or removed by the given policy owner.
     */
    status?: string;
}

/**
 * Specifies the retention policy for the log.
 */
export interface RetentionPolicyResponse {
    /**
     * The number of days for the retention in days. A value of 0 will retain the events indefinitely.
     */
    days: number;
    /**
     * A value indicating whether the retention policy is enabled.
     */
    enabled: boolean;
}



