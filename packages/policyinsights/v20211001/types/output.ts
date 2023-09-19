import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Error definition.
     */
    export interface ErrorDefinitionResponse {
        /**
         * Additional scenario specific error details.
         */
        additionalInfo: TypedErrorInfoResponse[];
        /**
         * Service specific error code which serves as the substatus for the HTTP error code.
         */
        code: string;
        /**
         * Internal error details.
         */
        details: ErrorDefinitionResponse[];
        /**
         * Description of the error.
         */
        message: string;
        /**
         * The target of the error.
         */
        target: string;
    }

    /**
     * Details of a single deployment created by the remediation.
     */
    export interface RemediationDeploymentResponse {
        /**
         * The time at which the remediation was created.
         */
        createdOn: string;
        /**
         * Resource ID of the template deployment that will remediate the resource.
         */
        deploymentId: string;
        /**
         * Error encountered while remediated the resource.
         */
        error: ErrorDefinitionResponse;
        /**
         * The time at which the remediation deployment was last updated.
         */
        lastUpdatedOn: string;
        /**
         * Resource ID of the resource that is being remediated by the deployment.
         */
        remediatedResourceId: string;
        /**
         * Location of the resource that is being remediated.
         */
        resourceLocation: string;
        /**
         * Status of the remediation deployment.
         */
        status: string;
    }

    /**
     * The deployment status summary for all deployments created by the remediation.
     */
    export interface RemediationDeploymentSummaryResponse {
        /**
         * The number of deployments required by the remediation that have failed.
         */
        failedDeployments: number;
        /**
         * The number of deployments required by the remediation that have succeeded.
         */
        successfulDeployments: number;
        /**
         * The number of deployments required by the remediation.
         */
        totalDeployments: number;
    }

    /**
     * The filters that will be applied to determine which resources to remediate.
     */
    export interface RemediationFiltersResponse {
        /**
         * The resource locations that will be remediated.
         */
        locations?: string[];
    }

    /**
     * The remediation failure threshold settings
     */
    export interface RemediationPropertiesResponseFailureThreshold {
        /**
         * A number between 0.0 to 1.0 representing the percentage failure threshold. The remediation will fail if the percentage of failed remediation operations (i.e. failed deployments) exceeds this threshold.
         */
        percentage?: number;
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
     * Scenario specific error details.
     */
    export interface TypedErrorInfoResponse {
        /**
         * The scenario specific error details.
         */
        info: any;
        /**
         * The type of included error details.
         */
        type: string;
    }
