import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    export interface BillingHubExecutionUsageDetailResponse {
        applicationName?: string;
        applicationVersion?: string;
        billedCharges?: number;
        endTimeStamp?: string;
        executionRequestId?: string;
        meterId?: string;
        osBuild?: string;
        release?: string;
        sku?: string;
        startTimeStamp?: string;
        testType?: string;
        updateType?: string;
        usedBillableHours?: number;
        usedFreeHours?: number;
    }

    export interface BillingHubFreeHourIncrementEntryResponse {
        createTimeStamp?: string;
        expirationTimeStamp?: string;
        incrementalFreeHours?: number;
        remainingFreeHours?: number;
    }

    export interface BillingHubGetUsageRequestResponse {
        endTimeStamp: string;
        pageIndex?: number;
        pageSize?: number;
        startTimeStamp: string;
    }

    export interface BillingHubPackageUsageResponse {
        applicationName?: string;
        applicationVersion?: string;
        azureResourceUri?: string;
        totalCharges?: number;
        totalUsedBillableHours?: number;
        totalUsedFreeHours?: number;
        usageEntriesGroupedByUpdateType?: BillingHubUsageGroupedByUpdateTypeResponse[];
    }

    export interface BillingHubUsageGroupResponse {
        executionUsageDetails?: BillingHubExecutionUsageDetailResponse[];
        osBuild?: string;
        productFamily?: string;
        release?: string;
        releaseBuildDate?: string;
        releaseBuildNumber?: number;
        releaseBuildRevision?: number;
        testType?: string;
        totalCharges?: number;
        totalUsedBillableHours?: number;
        totalUsedFreeHours?: number;
    }

    export interface BillingHubUsageGroupedByUpdateTypeResponse {
        totalCharges?: number;
        totalUsedBillableHours?: number;
        totalUsedFreeHours?: number;
        updateType?: string;
        usageGroups?: BillingHubUsageGroupResponse[];
    }

    /**
     * The command used in the test
     */
    export interface CommandResponse {
        /**
         * The action of the command.
         */
        action: string;
        /**
         * Specifies whether to run the command even if a previous command is failed.
         */
        alwaysRun?: boolean;
        /**
         * Specifies whether to apply update before the command.
         */
        applyUpdateBefore?: boolean;
        /**
         * The content of the command. The content depends on source type.
         */
        content: string;
        /**
         * The type of command content.
         */
        contentType: string;
        /**
         * Specifies the max run time of the command.
         */
        maxRunTime?: number;
        /**
         * The name of the command.
         */
        name: string;
        /**
         * Specifies whether to restart the VM after the command executed.
         */
        restartAfter?: boolean;
        /**
         * Specifies whether to run the command in interactive mode.
         */
        runAsInteractive?: boolean;
        /**
         * Specifies whether to run the command as administrator.
         */
        runElevated?: boolean;
    }

    /**
     * The user object receiver value.
     */
    export interface DistributionGroupListReceiverValueResponse {
        /**
         * The list of distribution groups.
         */
        distributionGroups?: string[];
    }

    /**
     * A notification event receivers.
     */
    export interface NotificationEventReceiverResponse {
        /**
         * The type of the notification event receiver.
         */
        receiverType?: string;
        /**
         * The notification event receiver value.
         */
        receiverValue?: NotificationReceiverValueResponse;
    }

    /**
     * A notification event receiver value.
     */
    export interface NotificationReceiverValueResponse {
        /**
         * The user object receiver value.
         */
        distributionGroupListReceiverValue?: DistributionGroupListReceiverValueResponse;
        /**
         * The user object receiver value.
         */
        subscriptionReceiverValue?: SubscriptionReceiverValueResponse;
        /**
         * The user object receiver value.
         */
        userObjectReceiverValue?: UserObjectReceiverValueResponse;
    }

    /**
     * The validation results. There's validation on package when it's created or updated.
     */
    export interface PackageValidationResultResponse {
        /**
         * Error information.
         */
        errors: string[];
        /**
         * Indicates whether the package passed the validation.
         */
        isValid: boolean;
        /**
         * Validation name.
         */
        validationName: string;
    }

    /**
     * The subscription role receiver value.
     */
    export interface SubscriptionReceiverValueResponse {
        /**
         * The role of the notification receiver.
         */
        role?: string;
        /**
         * The subscription id of the notification receiver.
         */
        subscriptionId?: string;
        /**
         * The subscription name of the notification receiver.
         */
        subscriptionName?: string;
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
         * The type of identity that last modified the resource.
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
     * The information of the target OS to be tested.
     */
    export interface TargetOSInfoResponse {
        /**
         * Specifies the baseline OSs to be tested.
         */
        baselineOSs?: string[];
        /**
         * Specifies the OS update type to test against, e.g., 'Security updates' or 'Feature updates'.
         */
        osUpdateType: string;
        /**
         * Specifies the target OSs to be tested.
         */
        targetOSs: string[];
    }

    /**
     * Properties of the Test Base Account SKU Capability.
     */
    export interface TestBaseAccountSKUCapabilityResponse {
        /**
         * An invariant to describe the feature, such as 'SLA'.
         */
        name: string;
        /**
         * An invariant if the feature is measured by quantity, such as 99.9%.
         */
        value: string;
    }

    /**
     * Describes a Test Base Account SKU.
     */
    export interface TestBaseAccountSKUResponse {
        /**
         * The capabilities of a SKU.
         */
        capabilities: TestBaseAccountSKUCapabilityResponse[];
        /**
         * The locations that the SKU is available.
         */
        locations?: string[];
        /**
         * The name of the SKU. This is typically a letter + number code, such as B0 or S0.
         */
        name: string;
        /**
         * The type of resource the SKU applies to.
         */
        resourceType?: string;
        /**
         * The tier of this particular SKU.
         */
        tier: string;
    }

    /**
     * The definition of a Test.
     */
    export interface TestResponse {
        /**
         * The commands used in the test.
         */
        commands: CommandResponse[];
        /**
         * Indicates if this test is active.It doesn't schedule test for not active Test.
         */
        isActive?: boolean;
        /**
         * The type of the test.
         */
        testType: string;
        /**
         * Resource identifier of the validation test result.
         */
        validationResultId: string;
        /**
         * The status of the validation run of the package.
         */
        validationRunStatus: string;
    }

    /**
     * The user object receiver value.
     */
    export interface UserObjectReceiverValueResponse {
        /**
         * user object ids.
         */
        userObjectIds?: string[];
    }
