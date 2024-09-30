import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * cloud profile for AWS.
 */
export interface AwsCloudProfileResponse {
    /**
     * List of AWS accounts which need to be excluded.
     */
    excludedAccounts?: string[];
}

/**
 * Endpoint details
 */
export interface EndpointPropertiesResponse {
    /**
     * The resource provisioning state.
     */
    provisioningState: string;
    /**
     * The resource Id of the connectivity endpoint (optional).
     */
    resourceId?: string;
    /**
     * The type of endpoint.
     */
    type: string;
}

/**
 * Properties of public cloud connectors.
 */
export interface PublicCloudConnectorPropertiesResponse {
    /**
     * Cloud profile for AWS.
     */
    awsCloudProfile: AwsCloudProfileResponse;
    /**
     * Connector primary identifier.
     */
    connectorPrimaryIdentifier: string;
    /**
     * The resource provisioning state.
     */
    provisioningState: string;
}

/**
 * Solution configuration resource.
 */
export interface SolutionConfigurationPropertiesResponse {
    /**
     * The last time resources were inventoried
     */
    lastSyncTime: string;
    /**
     * The resource provisioning state.
     */
    provisioningState: string;
    /**
     * Solution settings
     */
    solutionSettings?: {[key: string]: string};
    /**
     * The type of the solution
     */
    solutionType: string;
    /**
     * The status of solution configurations
     */
    status: string;
    /**
     * The detailed message of status details
     */
    statusDetails: string;
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

