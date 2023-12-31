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

    export interface JitNetworkAccessPolicyVirtualMachineArgs {
        /**
         * Resource ID of the virtual machine that is linked to this policy
         */
        id: pulumi.Input<string>;
        /**
         * Port configurations for the virtual machine
         */
        ports: pulumi.Input<pulumi.Input<JitNetworkAccessPortRuleArgs>[]>;
        /**
         * Public IP address of the Azure Firewall that is linked to this policy, if applicable
         */
        publicIpAddress?: pulumi.Input<string>;
    }

    export interface JitNetworkAccessPortRuleArgs {
        /**
         * Mutually exclusive with the "allowedSourceAddressPrefixes" parameter. Should be an IP address or CIDR, for example "192.168.0.3" or "192.168.0.0/16".
         */
        allowedSourceAddressPrefix?: pulumi.Input<string>;
        /**
         * Mutually exclusive with the "allowedSourceAddressPrefix" parameter.
         */
        allowedSourceAddressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Maximum duration requests can be made for. In ISO 8601 duration format. Minimum 5 minutes, maximum 1 day
         */
        maxRequestAccessDuration: pulumi.Input<string>;
        number: pulumi.Input<number>;
        protocol: pulumi.Input<string | enums.Protocol>;
    }

    export interface JitNetworkAccessRequestArgs {
        /**
         * The justification for making the initiate request
         */
        justification?: pulumi.Input<string>;
        /**
         * The identity of the person who made the request
         */
        requestor: pulumi.Input<string>;
        /**
         * The start time of the request in UTC
         */
        startTimeUtc: pulumi.Input<string>;
        virtualMachines: pulumi.Input<pulumi.Input<JitNetworkAccessRequestVirtualMachineArgs>[]>;
    }

    export interface JitNetworkAccessRequestPortArgs {
        /**
         * Mutually exclusive with the "allowedSourceAddressPrefixes" parameter. Should be an IP address or CIDR, for example "192.168.0.3" or "192.168.0.0/16".
         */
        allowedSourceAddressPrefix?: pulumi.Input<string>;
        /**
         * Mutually exclusive with the "allowedSourceAddressPrefix" parameter.
         */
        allowedSourceAddressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The date & time at which the request ends in UTC
         */
        endTimeUtc: pulumi.Input<string>;
        /**
         * The port which is mapped to this port's `number` in the Azure Firewall, if applicable
         */
        mappedPort?: pulumi.Input<number>;
        number: pulumi.Input<number>;
        /**
         * The status of the port
         */
        status: pulumi.Input<string | enums.Status>;
        /**
         * A description of why the `status` has its value
         */
        statusReason: pulumi.Input<string | enums.StatusReason>;
    }

    export interface JitNetworkAccessRequestVirtualMachineArgs {
        /**
         * Resource ID of the virtual machine that is linked to this policy
         */
        id: pulumi.Input<string>;
        /**
         * The ports that were opened for the virtual machine
         */
        ports: pulumi.Input<pulumi.Input<JitNetworkAccessRequestPortArgs>[]>;
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
     * Represents a path that is recommended to be allowed and its properties
     */
    export interface PathRecommendationArgs {
        /**
         * The recommendation action of the machine or rule
         */
        action?: pulumi.Input<string>;
        /**
         * Whether the application is commonly run on the machine
         */
        common?: pulumi.Input<boolean>;
        /**
         * The configuration status of the machines group or machine or rule
         */
        configurationStatus?: pulumi.Input<string>;
        /**
         * The type of the file (for Linux files - Executable is used)
         */
        fileType?: pulumi.Input<string>;
        /**
         * The full path of the file, or an identifier of the application
         */
        path?: pulumi.Input<string>;
        /**
         * Represents the publisher information of a process/rule
         */
        publisherInfo?: pulumi.Input<PublisherInfoArgs>;
        /**
         * The type of the rule to be allowed
         */
        type?: pulumi.Input<string>;
        userSids?: pulumi.Input<pulumi.Input<string>[]>;
        usernames?: pulumi.Input<pulumi.Input<UserRecommendationArgs>[]>;
    }

    /**
     * The protection mode of the collection/file types. Exe/Msi/Script are used for Windows, Executable is used for Linux.
     */
    export interface ProtectionModeArgs {
        /**
         * The application control policy enforcement/protection mode of the machine group
         */
        exe?: pulumi.Input<string>;
        /**
         * The application control policy enforcement/protection mode of the machine group
         */
        executable?: pulumi.Input<string>;
        /**
         * The application control policy enforcement/protection mode of the machine group
         */
        msi?: pulumi.Input<string>;
        /**
         * The application control policy enforcement/protection mode of the machine group
         */
        script?: pulumi.Input<string>;
    }

    /**
     * Represents the publisher information of a process/rule
     */
    export interface PublisherInfoArgs {
        /**
         * The "OriginalName" field taken from the file's version resource
         */
        binaryName?: pulumi.Input<string>;
        /**
         * The product name taken from the file's version resource
         */
        productName?: pulumi.Input<string>;
        /**
         * The Subject field of the x.509 certificate used to sign the code, using the following fields -  O = Organization, L = Locality, S = State or Province, and C = Country
         */
        publisherName?: pulumi.Input<string>;
        /**
         * The binary file version taken from the file's version resource
         */
        version?: pulumi.Input<string>;
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

    /**
     * Represents a user that is recommended to be allowed for a certain rule
     */
    export interface UserRecommendationArgs {
        /**
         * The recommendation action of the machine or rule
         */
        recommendationAction?: pulumi.Input<string>;
        /**
         * Represents a user that is recommended to be allowed for a certain rule
         */
        username?: pulumi.Input<string>;
    }

    /**
     * Represents a machine that is part of a machine group
     */
    export interface VmRecommendationArgs {
        /**
         * The configuration status of the machines group or machine or rule
         */
        configurationStatus?: pulumi.Input<string>;
        /**
         * The machine supportability of Enforce feature
         */
        enforcementSupport?: pulumi.Input<string>;
        /**
         * The recommendation action of the machine or rule
         */
        recommendationAction?: pulumi.Input<string>;
        /**
         * The full resource id of the machine
         */
        resourceId?: pulumi.Input<string>;
    }
