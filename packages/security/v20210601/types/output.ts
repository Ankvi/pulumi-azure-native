import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Links relevant to the assessment
     */
    export interface AssessmentLinksResponse {
        /**
         * Link to assessment in Azure Portal
         */
        azurePortalUri: string;
    }

    /**
     * The result of the assessment
     */
    export interface AssessmentStatusResponseResponse {
        /**
         * Programmatic code for the cause of the assessment status
         */
        cause?: string;
        /**
         * Programmatic code for the status of the assessment
         */
        code: string;
        /**
         * Human readable description of the assessment status
         */
        description?: string;
        /**
         * The time that the assessment was created and first evaluated. Returned as UTC time in ISO 8601 format
         */
        firstEvaluationDate: string;
        /**
         * The time that the status of the assessment last changed. Returned as UTC time in ISO 8601 format
         */
        statusChangeDate: string;
    }

    /**
     * Details of the Azure resource that was assessed
     */
    export interface AzureResourceDetailsResponse {
        /**
         * Azure resource Id of the assessed resource
         */
        id: string;
        /**
         * The platform where the assessed resource resides
         * Expected value is 'Azure'.
         */
        source: "Azure";
    }

    /**
     * Details of the On Premise resource that was assessed
     */
    export interface OnPremiseResourceDetailsResponse {
        /**
         * The name of the machine
         */
        machineName: string;
        /**
         * The platform where the assessed resource resides
         * Expected value is 'OnPremise'.
         */
        source: "OnPremise";
        /**
         * The oms agent Id installed on the machine
         */
        sourceComputerId: string;
        /**
         * The unique Id of the machine
         */
        vmuuid: string;
        /**
         * Azure resource Id of the workspace the machine is attached to
         */
        workspaceId: string;
    }

    /**
     * Details of the On Premise Sql resource that was assessed
     */
    export interface OnPremiseSqlResourceDetailsResponse {
        /**
         * The Sql database name installed on the machine
         */
        databaseName: string;
        /**
         * The name of the machine
         */
        machineName: string;
        /**
         * The Sql server name installed on the machine
         */
        serverName: string;
        /**
         * The platform where the assessed resource resides
         * Expected value is 'OnPremiseSql'.
         */
        source: "OnPremiseSql";
        /**
         * The oms agent Id installed on the machine
         */
        sourceComputerId: string;
        /**
         * The unique Id of the machine
         */
        vmuuid: string;
        /**
         * Azure resource Id of the workspace the machine is attached to
         */
        workspaceId: string;
    }

    /**
     * Describes the partner that created the assessment
     */
    export interface SecurityAssessmentMetadataPartnerDataResponse {
        /**
         * Name of the company of the partner
         */
        partnerName: string;
        /**
         * Name of the product of the partner that created the assessment
         */
        productName?: string;
        /**
         * Secret to authenticate the partner and verify it created the assessment - write only
         */
        secret: string;
    }

    /**
     * Describes properties of an assessment metadata.
     */
    export interface SecurityAssessmentMetadataPropertiesResponse {
        /**
         * BuiltIn if the assessment based on built-in Azure Policy definition, Custom if the assessment based on custom Azure Policy definition
         */
        assessmentType: string;
        categories?: string[];
        /**
         * Human readable description of the assessment
         */
        description?: string;
        /**
         * User friendly display name of the assessment
         */
        displayName: string;
        /**
         * The implementation effort required to remediate this assessment
         */
        implementationEffort?: string;
        /**
         * Describes the partner that created the assessment
         */
        partnerData?: SecurityAssessmentMetadataPartnerDataResponse;
        /**
         * Azure resource ID of the policy definition that turns this assessment calculation on
         */
        policyDefinitionId: string;
        /**
         * True if this assessment is in preview release status
         */
        preview?: boolean;
        /**
         * Human readable description of what you should do to mitigate this security issue
         */
        remediationDescription?: string;
        /**
         * The severity level of the assessment
         */
        severity: string;
        threats?: string[];
        /**
         * The user impact of the assessment
         */
        userImpact?: string;
    }

    export interface SecurityAssessmentMetadataPropertiesResponseResponsePublishDates {
        gA?: string;
        public: string;
    }

    /**
     * Data regarding 3rd party partner integration
     */
    export interface SecurityAssessmentPartnerDataResponse {
        /**
         * Name of the company of the partner
         */
        partnerName: string;
        /**
         * secret to authenticate the partner - write only
         */
        secret: string;
    }
