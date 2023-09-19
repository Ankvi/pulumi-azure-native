import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The result of the assessment
     */
    export interface AssessmentStatusArgs {
        /**
         * Programmatic code for the cause of the assessment status
         */
        cause?: pulumi.Input<string>;
        /**
         * Programmatic code for the status of the assessment
         */
        code: pulumi.Input<string | enums.AssessmentStatusCode>;
        /**
         * Human readable description of the assessment status
         */
        description?: pulumi.Input<string>;
    }

    /**
     * Details of the Azure resource that was assessed
     */
    export interface AzureResourceDetailsArgs {
        /**
         * The platform where the assessed resource resides
         * Expected value is 'Azure'.
         */
        source: pulumi.Input<"Azure">;
    }

    /**
     * Details of the On Premise resource that was assessed
     */
    export interface OnPremiseResourceDetailsArgs {
        /**
         * The name of the machine
         */
        machineName: pulumi.Input<string>;
        /**
         * The platform where the assessed resource resides
         * Expected value is 'OnPremise'.
         */
        source: pulumi.Input<"OnPremise">;
        /**
         * The oms agent Id installed on the machine
         */
        sourceComputerId: pulumi.Input<string>;
        /**
         * The unique Id of the machine
         */
        vmuuid: pulumi.Input<string>;
        /**
         * Azure resource Id of the workspace the machine is attached to
         */
        workspaceId: pulumi.Input<string>;
    }

    /**
     * Details of the On Premise Sql resource that was assessed
     */
    export interface OnPremiseSqlResourceDetailsArgs {
        /**
         * The Sql database name installed on the machine
         */
        databaseName: pulumi.Input<string>;
        /**
         * The name of the machine
         */
        machineName: pulumi.Input<string>;
        /**
         * The Sql server name installed on the machine
         */
        serverName: pulumi.Input<string>;
        /**
         * The platform where the assessed resource resides
         * Expected value is 'OnPremiseSql'.
         */
        source: pulumi.Input<"OnPremiseSql">;
        /**
         * The oms agent Id installed on the machine
         */
        sourceComputerId: pulumi.Input<string>;
        /**
         * The unique Id of the machine
         */
        vmuuid: pulumi.Input<string>;
        /**
         * Azure resource Id of the workspace the machine is attached to
         */
        workspaceId: pulumi.Input<string>;
    }

    /**
     * Describes the partner that created the assessment
     */
    export interface SecurityAssessmentMetadataPartnerDataArgs {
        /**
         * Name of the company of the partner
         */
        partnerName: pulumi.Input<string>;
        /**
         * Name of the product of the partner that created the assessment
         */
        productName?: pulumi.Input<string>;
        /**
         * Secret to authenticate the partner and verify it created the assessment - write only
         */
        secret: pulumi.Input<string>;
    }

    /**
     * Describes properties of an assessment metadata.
     */
    export interface SecurityAssessmentMetadataPropertiesArgs {
        /**
         * BuiltIn if the assessment based on built-in Azure Policy definition, Custom if the assessment based on custom Azure Policy definition
         */
        assessmentType: pulumi.Input<string | enums.AssessmentType>;
        categories?: pulumi.Input<pulumi.Input<string | enums.Categories>[]>;
        /**
         * Human readable description of the assessment
         */
        description?: pulumi.Input<string>;
        /**
         * User friendly display name of the assessment
         */
        displayName: pulumi.Input<string>;
        /**
         * The implementation effort required to remediate this assessment
         */
        implementationEffort?: pulumi.Input<string | enums.ImplementationEffort>;
        /**
         * Describes the partner that created the assessment
         */
        partnerData?: pulumi.Input<SecurityAssessmentMetadataPartnerDataArgs>;
        /**
         * True if this assessment is in preview release status
         */
        preview?: pulumi.Input<boolean>;
        /**
         * Human readable description of what you should do to mitigate this security issue
         */
        remediationDescription?: pulumi.Input<string>;
        /**
         * The severity level of the assessment
         */
        severity: pulumi.Input<string | enums.Severity>;
        threats?: pulumi.Input<pulumi.Input<string | enums.Threats>[]>;
        /**
         * The user impact of the assessment
         */
        userImpact?: pulumi.Input<string | enums.UserImpact>;
    }

    export interface SecurityAssessmentMetadataPropertiesResponsePublishDatesArgs {
        gA?: pulumi.Input<string>;
        public: pulumi.Input<string>;
    }

    /**
     * Data regarding 3rd party partner integration
     */
    export interface SecurityAssessmentPartnerDataArgs {
        /**
         * Name of the company of the partner
         */
        partnerName: pulumi.Input<string>;
        /**
         * secret to authenticate the partner - write only
         */
        secret: pulumi.Input<string>;
    }
