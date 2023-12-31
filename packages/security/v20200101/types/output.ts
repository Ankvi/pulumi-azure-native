import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Represents a summary of the alerts of the machine group
     */
    export interface AdaptiveApplicationControlIssueSummaryResponse {
        /**
         * An alert that machines within a group can have
         */
        issue?: string;
        /**
         * The number of machines in the group that have this alert
         */
        numberOfVms?: number;
    }

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
    export interface AssessmentStatusResponse {
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

    export interface JitNetworkAccessPolicyVirtualMachineResponse {
        /**
         * Resource ID of the virtual machine that is linked to this policy
         */
        id: string;
        /**
         * Port configurations for the virtual machine
         */
        ports: JitNetworkAccessPortRuleResponse[];
        /**
         * Public IP address of the Azure Firewall that is linked to this policy, if applicable
         */
        publicIpAddress?: string;
    }

    export interface JitNetworkAccessPortRuleResponse {
        /**
         * Mutually exclusive with the "allowedSourceAddressPrefixes" parameter. Should be an IP address or CIDR, for example "192.168.0.3" or "192.168.0.0/16".
         */
        allowedSourceAddressPrefix?: string;
        /**
         * Mutually exclusive with the "allowedSourceAddressPrefix" parameter.
         */
        allowedSourceAddressPrefixes?: string[];
        /**
         * Maximum duration requests can be made for. In ISO 8601 duration format. Minimum 5 minutes, maximum 1 day
         */
        maxRequestAccessDuration: string;
        number: number;
        protocol: string;
    }

    export interface JitNetworkAccessRequestPortResponse {
        /**
         * Mutually exclusive with the "allowedSourceAddressPrefixes" parameter. Should be an IP address or CIDR, for example "192.168.0.3" or "192.168.0.0/16".
         */
        allowedSourceAddressPrefix?: string;
        /**
         * Mutually exclusive with the "allowedSourceAddressPrefix" parameter.
         */
        allowedSourceAddressPrefixes?: string[];
        /**
         * The date & time at which the request ends in UTC
         */
        endTimeUtc: string;
        /**
         * The port which is mapped to this port's `number` in the Azure Firewall, if applicable
         */
        mappedPort?: number;
        number: number;
        /**
         * The status of the port
         */
        status: string;
        /**
         * A description of why the `status` has its value
         */
        statusReason: string;
    }

    export interface JitNetworkAccessRequestResponse {
        /**
         * The justification for making the initiate request
         */
        justification?: string;
        /**
         * The identity of the person who made the request
         */
        requestor: string;
        /**
         * The start time of the request in UTC
         */
        startTimeUtc: string;
        virtualMachines: JitNetworkAccessRequestVirtualMachineResponse[];
    }

    export interface JitNetworkAccessRequestVirtualMachineResponse {
        /**
         * Resource ID of the virtual machine that is linked to this policy
         */
        id: string;
        /**
         * The ports that were opened for the virtual machine
         */
        ports: JitNetworkAccessRequestPortResponse[];
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
     * Represents a path that is recommended to be allowed and its properties
     */
    export interface PathRecommendationResponse {
        /**
         * The recommendation action of the machine or rule
         */
        action?: string;
        /**
         * Whether the application is commonly run on the machine
         */
        common?: boolean;
        /**
         * The configuration status of the machines group or machine or rule
         */
        configurationStatus?: string;
        /**
         * The type of the file (for Linux files - Executable is used)
         */
        fileType?: string;
        /**
         * The full path of the file, or an identifier of the application
         */
        path?: string;
        /**
         * Represents the publisher information of a process/rule
         */
        publisherInfo?: PublisherInfoResponse;
        /**
         * The type of the rule to be allowed
         */
        type?: string;
        userSids?: string[];
        usernames?: UserRecommendationResponse[];
    }

    /**
     * The protection mode of the collection/file types. Exe/Msi/Script are used for Windows, Executable is used for Linux.
     */
    export interface ProtectionModeResponse {
        /**
         * The application control policy enforcement/protection mode of the machine group
         */
        exe?: string;
        /**
         * The application control policy enforcement/protection mode of the machine group
         */
        executable?: string;
        /**
         * The application control policy enforcement/protection mode of the machine group
         */
        msi?: string;
        /**
         * The application control policy enforcement/protection mode of the machine group
         */
        script?: string;
    }

    /**
     * Represents the publisher information of a process/rule
     */
    export interface PublisherInfoResponse {
        /**
         * The "OriginalName" field taken from the file's version resource
         */
        binaryName?: string;
        /**
         * The product name taken from the file's version resource
         */
        productName?: string;
        /**
         * The Subject field of the x.509 certificate used to sign the code, using the following fields -  O = Organization, L = Locality, S = State or Province, and C = Country
         */
        publisherName?: string;
        /**
         * The binary file version taken from the file's version resource
         */
        version?: string;
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

    /**
     * Represents a user that is recommended to be allowed for a certain rule
     */
    export interface UserRecommendationResponse {
        /**
         * The recommendation action of the machine or rule
         */
        recommendationAction?: string;
        /**
         * Represents a user that is recommended to be allowed for a certain rule
         */
        username?: string;
    }

    /**
     * Represents a machine that is part of a machine group
     */
    export interface VmRecommendationResponse {
        /**
         * The configuration status of the machines group or machine or rule
         */
        configurationStatus?: string;
        /**
         * The machine supportability of Enforce feature
         */
        enforcementSupport?: string;
        /**
         * The recommendation action of the machine or rule
         */
        recommendationAction?: string;
        /**
         * The full resource id of the machine
         */
        resourceId?: string;
    }
