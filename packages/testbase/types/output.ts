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
     * Specifies whether to enroll Intune before the command.
     */
    enrollIntuneBefore?: boolean;
    /**
     * Specifies whether to install first party applications before running the command.
     */
    install1PAppBefore?: boolean;
    /**
     * Specifies the max run time of the command.
     */
    maxRunTime?: number;
    /**
     * The name of the command.
     */
    name: string;
    /**
     * Specifies whether the command is assigned to be executed after in-place upgrade.
     */
    postUpgrade?: boolean;
    /**
     * Specifies whether the command is assigned to be executed before in-place upgrade.
     */
    preUpgrade?: boolean;
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
 * The Metadata of a single Intune App.
 */
export interface DraftPackageIntuneAppMetadataItemResponse {
    /**
     * Intune app id.
     */
    appId?: string;
    /**
     * Intune app name.
     */
    appName?: string;
    /**
     * Creation date of the app.
     */
    createDate?: string;
    /**
     * Ids of dependency apps.
     */
    dependencyIds?: string[];
    /**
     * Count of dependency apps.
     */
    dependentAppCount?: number;
    /**
     * Description of the app.
     */
    description?: string;
    /**
     * Expected exit codes returned from Intune App.
     */
    expectedExitCodes?: string[];
    /**
     * Install command.
     */
    installCommand?: string;
    /**
     * last processed time tickets.
     */
    lastProcessed?: number;
    /**
     * Minimum supported OS. The OS version must be greater than this version to run this app.
     */
    minimumSupportedOS?: string;
    /**
     * Owner of the app.
     */
    owner?: string;
    /**
     * Publisher of the app.
     */
    publisher?: string;
    /**
     * Setup file path.
     */
    setupFile?: string;
    /**
     * Extract status.
     */
    status?: string;
    /**
     * Uninstall command.
     */
    uninstallCommand?: string;
    /**
     * Intune app version.
     */
    version?: string;
}

/**
 * The metadata of Intune app(s) used for generation.
 */
export interface DraftPackageIntuneAppMetadataResponse {
    /**
     * The Metadata of the Intune App through intunewin file uploading.
     */
    intuneApp?: DraftPackageIntuneAppMetadataItemResponse;
    /**
     * The Metadata of dependencies of the Intune App through intunewin file uploading.
     */
    intuneAppDependencies?: DraftPackageIntuneAppMetadataItemResponse[];
}

/**
 * Metadata of the enrolled Intune app.
 */
export interface EnrolledIntuneAppResponse {
    /**
     * Intune app id.
     */
    appId: string;
    /**
     * Intune app name.
     */
    appName: string;
    /**
     * Intune app expected installation path.
     */
    expectedInstallationPath: string;
}

/**
 * Properties of the definition of a first party application of the Test Base package.
 */
export interface FirstPartyAppDefinitionResponse {
    /**
     * The architecture of a first party application of a Test Base Account.
     */
    architecture?: string;
    /**
     * The channel info of a first party application of a Test Base Account.
     */
    channel?: string;
    /**
     * Specifies how the first party applications should be inter-operated with user's application.
     */
    interopExecutionMode?: string;
    /**
     * The media name of a first party application of a Test Base Account.
     */
    name?: string;
    /**
     * The ring info of a first party application of a Test Base Account.
     */
    ring?: string;
}
/**
 * firstPartyAppDefinitionResponseProvideDefaults sets the appropriate defaults for FirstPartyAppDefinitionResponse
 */
export function firstPartyAppDefinitionResponseProvideDefaults(val: FirstPartyAppDefinitionResponse): FirstPartyAppDefinitionResponse {
    return {
        ...val,
        interopExecutionMode: (val.interopExecutionMode) ?? "firstPartyAppWithTests",
    };
}

/**
 * Properties of the definition of a gallery application used in Test Base package.
 */
export interface GalleryAppDefinitionResponse {
    /**
     * Whether the disclaimer of the gallery application is accepted.
     */
    isConsented?: boolean;
    /**
     * The SKU id of the gallery application.
     */
    skuId: string;
}
/**
 * galleryAppDefinitionResponseProvideDefaults sets the appropriate defaults for GalleryAppDefinitionResponse
 */
export function galleryAppDefinitionResponseProvideDefaults(val: GalleryAppDefinitionResponse): GalleryAppDefinitionResponse {
    return {
        ...val,
        isConsented: (val.isConsented) ?? false,
    };
}

/**
 * The information of a highlighted file that user should pay attention to.
 */
export interface HighlightedFileResponse {
    /**
     * The path of the highlighted file.
     */
    path: string;
    /**
     * The name of sections to highlight.
     */
    sections?: string[];
    /**
     * A flag to save whether this file is viewed by user.
     */
    visited?: boolean;
}
/**
 * highlightedFileResponseProvideDefaults sets the appropriate defaults for HighlightedFileResponse
 */
export function highlightedFileResponseProvideDefaults(val: HighlightedFileResponse): HighlightedFileResponse {
    return {
        ...val,
        visited: (val.visited) ?? false,
    };
}

/**
 * The image validation result.
 */
export interface ImageValidationResultsResponse {
    /**
     * The validation results of the image.
     */
    results?: VerificationResultResponse[];
}

/**
 * Specifies the baseline os and target os for in-place upgrade tests.
 */
export interface InplaceUpgradeOSInfoResponse {
    /**
     * Specifies the baseline os for in-place upgrade tests.
     */
    baselineOS?: OsPropertiesResponse;
    /**
     * Specifies the target os for in-place upgrade tests.
     */
    targetOS?: string;
}

/**
 * The metadata of Intune enrollment.
 */
export interface IntuneEnrollmentMetadataResponse {
    /**
     * The enrolled Intune apps.
     */
    appList?: EnrolledIntuneAppResponse[];
    /**
     * The id of the Intune enrollment credential.
     */
    credentialId?: string;
    /**
     * The expected duration of Intune applications and policies deployment.
     */
    expectedDeploymentDurationInMinute?: number;
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
 * The properties of an operating system.
 */
export interface OsPropertiesResponse {
    /**
     * The name of the custom image resource.
     */
    customImageDisplayName: string;
    /**
     * Specify the referenced Test Base Custom Image Id if available.
     */
    customImageId?: string;
    /**
     * The name of the OS.
     */
    osName?: string;
    /**
     * The properties of the OS release.
     */
    releaseProperties?: ReleasePropertiesResponse;
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

export interface PreReleaseAccessRequestSpecResponse {
    city?: string;
    companyWebsite?: string;
    countryAndRegion?: string;
    email?: string;
    engagements?: string[];
    organizationName?: string;
    stateOrProvince?: string;
    streetAddress?: string;
    zipCode?: string;
}

/**
 * The properties of an operating system release.
 */
export interface ReleasePropertiesResponse {
    /**
     * The build number of the OS release.
     */
    buildNumber?: string;
    /**
     * The build revision of the OS release.
     */
    buildRevision?: string;
    /**
     * The name of the OS release.
     */
    releaseName?: string;
    /**
     * The release version date of the OS release.
     */
    releaseVersionDate?: string;
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
 * Specifies current state of tabs.
 */
export interface TabStateResponse {
    /**
     * Current tab.
     */
    currentTab?: string;
    /**
     * visited tabs.
     */
    visitedTabs?: string[];
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
     * Insider Channel Ids. Only used for feature update.
     */
    insiderChannelIds?: string[];
    /**
     * Specifies the OS update type to test against, e.g., 'Security updates' or 'Feature updates'.
     */
    osUpdateType: string;
    /**
     * Specifies the ids of the target OSs from Custom Images to be tested.
     */
    targetOSImageIds?: string[];
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

/**
 * The detailed result of a validation or rule checking.
 */
export interface VerificationResultResponse {
    /**
     * Message for clarification.
     */
    message?: string;
    /**
     * Indicates if the validation or rule checking is passed.
     */
    result: string;
    /**
     * The name of the verification rule.
     */
    verificationName?: string;
}

