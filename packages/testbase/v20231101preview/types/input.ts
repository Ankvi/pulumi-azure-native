import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The command used in the test
     */
    export interface CommandArgs {
        /**
         * The action of the command.
         */
        action: pulumi.Input<string | enums.Action>;
        /**
         * Specifies whether to run the command even if a previous command is failed.
         */
        alwaysRun?: pulumi.Input<boolean>;
        /**
         * Specifies whether to apply update before the command.
         */
        applyUpdateBefore?: pulumi.Input<boolean>;
        /**
         * The content of the command. The content depends on source type.
         */
        content: pulumi.Input<string>;
        /**
         * The type of command content.
         */
        contentType: pulumi.Input<string | enums.ContentType>;
        /**
         * Specifies whether to enroll Intune before the command.
         */
        enrollIntuneBefore?: pulumi.Input<boolean>;
        /**
         * Specifies whether to install first party applications before running the command.
         */
        install1PAppBefore?: pulumi.Input<boolean>;
        /**
         * Specifies the max run time of the command.
         */
        maxRunTime?: pulumi.Input<number>;
        /**
         * The name of the command.
         */
        name: pulumi.Input<string>;
        /**
         * Specifies whether the command is assigned to be executed after in-place upgrade.
         */
        postUpgrade?: pulumi.Input<boolean>;
        /**
         * Specifies whether the command is assigned to be executed before in-place upgrade.
         */
        preUpgrade?: pulumi.Input<boolean>;
        /**
         * Specifies whether to restart the VM after the command executed.
         */
        restartAfter?: pulumi.Input<boolean>;
        /**
         * Specifies whether to run the command in interactive mode.
         */
        runAsInteractive?: pulumi.Input<boolean>;
        /**
         * Specifies whether to run the command as administrator.
         */
        runElevated?: pulumi.Input<boolean>;
    }

    /**
     * The user object receiver value.
     */
    export interface DistributionGroupListReceiverValueArgs {
        /**
         * The list of distribution groups.
         */
        distributionGroups?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * The metadata of Intune app(s) used for generation.
     */
    export interface DraftPackageIntuneAppMetadataArgs {
        /**
         * The Metadata of the Intune App through intunewin file uploading.
         */
        intuneApp?: pulumi.Input<DraftPackageIntuneAppMetadataItemArgs>;
        /**
         * The Metadata of dependencies of the Intune App through intunewin file uploading.
         */
        intuneAppDependencies?: pulumi.Input<pulumi.Input<DraftPackageIntuneAppMetadataItemArgs>[]>;
    }

    /**
     * The Metadata of a single Intune App.
     */
    export interface DraftPackageIntuneAppMetadataItemArgs {
        /**
         * Intune app id.
         */
        appId?: pulumi.Input<string>;
        /**
         * Intune app name.
         */
        appName?: pulumi.Input<string>;
        /**
         * Creation date of the app.
         */
        createDate?: pulumi.Input<string>;
        /**
         * Ids of dependency apps.
         */
        dependencyIds?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Count of dependency apps.
         */
        dependentAppCount?: pulumi.Input<number>;
        /**
         * Description of the app.
         */
        description?: pulumi.Input<string>;
        /**
         * Expected exit codes returned from Intune App.
         */
        expectedExitCodes?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Install command.
         */
        installCommand?: pulumi.Input<string>;
        /**
         * last processed time tickets.
         */
        lastProcessed?: pulumi.Input<number>;
        /**
         * Minimum supported OS. The OS version must be greater than this version to run this app.
         */
        minimumSupportedOS?: pulumi.Input<string>;
        /**
         * Owner of the app.
         */
        owner?: pulumi.Input<string>;
        /**
         * Publisher of the app.
         */
        publisher?: pulumi.Input<string>;
        /**
         * Setup file path.
         */
        setupFile?: pulumi.Input<string>;
        /**
         * Extract status.
         */
        status?: pulumi.Input<string | enums.IntuneExtractStatus>;
        /**
         * Uninstall command.
         */
        uninstallCommand?: pulumi.Input<string>;
        /**
         * Intune app version.
         */
        version?: pulumi.Input<string>;
    }

    /**
     * Metadata of the enrolled Intune app.
     */
    export interface EnrolledIntuneAppArgs {
        /**
         * Intune app id.
         */
        appId: pulumi.Input<string>;
        /**
         * Intune app name.
         */
        appName: pulumi.Input<string>;
        /**
         * Intune app expected installation path.
         */
        expectedInstallationPath: pulumi.Input<string>;
    }

    /**
     * Properties of the definition of a first party application of the Test Base package.
     */
    export interface FirstPartyAppDefinitionArgs {
        /**
         * The architecture of a first party application of a Test Base Account.
         */
        architecture?: pulumi.Input<string | enums.Architecture>;
        /**
         * The channel info of a first party application of a Test Base Account.
         */
        channel?: pulumi.Input<string>;
        /**
         * Specifies how the first party applications should be inter-operated with user's application.
         */
        interopExecutionMode?: pulumi.Input<string | enums.InteropExecutionMode>;
        /**
         * The media name of a first party application of a Test Base Account.
         */
        name?: pulumi.Input<string>;
        /**
         * The ring info of a first party application of a Test Base Account.
         */
        ring?: pulumi.Input<string>;
    }
    /**
     * firstPartyAppDefinitionArgsProvideDefaults sets the appropriate defaults for FirstPartyAppDefinitionArgs
     */
    export function firstPartyAppDefinitionArgsProvideDefaults(val: FirstPartyAppDefinitionArgs): FirstPartyAppDefinitionArgs {
        return {
            ...val,
            interopExecutionMode: (val.interopExecutionMode) ?? "firstPartyAppWithTests",
        };
    }

    /**
     * Properties of the definition of a gallery application used in Test Base package.
     */
    export interface GalleryAppDefinitionArgs {
        /**
         * Whether the disclaimer of the gallery application is accepted.
         */
        isConsented?: pulumi.Input<boolean>;
        /**
         * The SKU id of the gallery application.
         */
        skuId: pulumi.Input<string>;
    }
    /**
     * galleryAppDefinitionArgsProvideDefaults sets the appropriate defaults for GalleryAppDefinitionArgs
     */
    export function galleryAppDefinitionArgsProvideDefaults(val: GalleryAppDefinitionArgs): GalleryAppDefinitionArgs {
        return {
            ...val,
            isConsented: (val.isConsented) ?? false,
        };
    }

    /**
     * The information of a highlighted file that user should pay attention to.
     */
    export interface HighlightedFileArgs {
        /**
         * The path of the highlighted file.
         */
        path: pulumi.Input<string>;
        /**
         * The name of sections to highlight.
         */
        sections?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * A flag to save whether this file is viewed by user.
         */
        visited?: pulumi.Input<boolean>;
    }
    /**
     * highlightedFileArgsProvideDefaults sets the appropriate defaults for HighlightedFileArgs
     */
    export function highlightedFileArgsProvideDefaults(val: HighlightedFileArgs): HighlightedFileArgs {
        return {
            ...val,
            visited: (val.visited) ?? false,
        };
    }

    /**
     * Specifies the baseline os and target os for in-place upgrade tests.
     */
    export interface InplaceUpgradeOSInfoArgs {
        /**
         * Specifies the baseline os for in-place upgrade tests.
         */
        baselineOS?: pulumi.Input<OsPropertiesArgs>;
        /**
         * Specifies the target os for in-place upgrade tests.
         */
        targetOS?: pulumi.Input<string>;
    }

    /**
     * The metadata of Intune enrollment.
     */
    export interface IntuneEnrollmentMetadataArgs {
        /**
         * The enrolled Intune apps.
         */
        appList?: pulumi.Input<pulumi.Input<EnrolledIntuneAppArgs>[]>;
        /**
         * The id of the Intune enrollment credential.
         */
        credentialId?: pulumi.Input<string>;
        /**
         * The expected duration of Intune applications and policies deployment.
         */
        expectedDeploymentDurationInMinute?: pulumi.Input<number>;
    }

    /**
     * A notification event receivers.
     */
    export interface NotificationEventReceiverArgs {
        /**
         * The type of the notification event receiver.
         */
        receiverType?: pulumi.Input<string>;
        /**
         * The notification event receiver value.
         */
        receiverValue?: pulumi.Input<NotificationReceiverValueArgs>;
    }

    /**
     * A notification event receiver value.
     */
    export interface NotificationReceiverValueArgs {
        /**
         * The user object receiver value.
         */
        distributionGroupListReceiverValue?: pulumi.Input<DistributionGroupListReceiverValueArgs>;
        /**
         * The user object receiver value.
         */
        subscriptionReceiverValue?: pulumi.Input<SubscriptionReceiverValueArgs>;
        /**
         * The user object receiver value.
         */
        userObjectReceiverValue?: pulumi.Input<UserObjectReceiverValueArgs>;
    }

    /**
     * The properties of an operating system.
     */
    export interface OsPropertiesArgs {
        /**
         * Specify the referenced Test Base Custom Image Id if available.
         */
        customImageId?: pulumi.Input<string>;
        /**
         * The name of the OS.
         */
        osName?: pulumi.Input<string>;
        /**
         * The properties of the OS release.
         */
        releaseProperties?: pulumi.Input<ReleasePropertiesArgs>;
    }

    export interface PreReleaseAccessRequestSpecArgs {
        city?: pulumi.Input<string>;
        companyWebsite?: pulumi.Input<string>;
        countryAndRegion?: pulumi.Input<string>;
        email?: pulumi.Input<string>;
        engagements?: pulumi.Input<pulumi.Input<string | enums.Engagements>[]>;
        organizationName?: pulumi.Input<string>;
        stateOrProvince?: pulumi.Input<string>;
        streetAddress?: pulumi.Input<string>;
        zipCode?: pulumi.Input<string>;
    }

    /**
     * The properties of an operating system release.
     */
    export interface ReleasePropertiesArgs {
        /**
         * The build number of the OS release.
         */
        buildNumber?: pulumi.Input<string>;
        /**
         * The build revision of the OS release.
         */
        buildRevision?: pulumi.Input<string>;
        /**
         * The name of the OS release.
         */
        releaseName?: pulumi.Input<string>;
        /**
         * The release version date of the OS release.
         */
        releaseVersionDate?: pulumi.Input<string>;
    }

    /**
     * The subscription role receiver value.
     */
    export interface SubscriptionReceiverValueArgs {
        /**
         * The role of the notification receiver.
         */
        role?: pulumi.Input<string>;
        /**
         * The subscription id of the notification receiver.
         */
        subscriptionId?: pulumi.Input<string>;
        /**
         * The subscription name of the notification receiver.
         */
        subscriptionName?: pulumi.Input<string>;
    }

    /**
     * Managed service identity (either system assigned, or none)
     */
    export interface SystemAssignedServiceIdentityArgs {
        /**
         * Type of managed service identity (either system assigned, or none).
         */
        type: pulumi.Input<string | enums.SystemAssignedServiceIdentityType>;
    }

    /**
     * Specifies current state of tabs.
     */
    export interface TabStateArgs {
        /**
         * Current tab.
         */
        currentTab?: pulumi.Input<string | enums.PackageStudioTabs>;
        /**
         * visited tabs.
         */
        visitedTabs?: pulumi.Input<pulumi.Input<string | enums.PackageStudioTabs>[]>;
    }

    /**
     * The information of the target OS to be tested.
     */
    export interface TargetOSInfoArgs {
        /**
         * Specifies the baseline OSs to be tested.
         */
        baselineOSs?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Insider Channel Ids. Only used for feature update.
         */
        insiderChannelIds?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Specifies the OS update type to test against, e.g., 'Security updates' or 'Feature updates'.
         */
        osUpdateType: pulumi.Input<string>;
        /**
         * Specifies the ids of the target OSs from Custom Images to be tested.
         */
        targetOSImageIds?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Specifies the target OSs to be tested.
         */
        targetOSs?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * The definition of a Test.
     */
    export interface TestArgs {
        /**
         * The commands used in the test.
         */
        commands: pulumi.Input<pulumi.Input<CommandArgs>[]>;
        /**
         * Indicates if this test is active.It doesn't schedule test for not active Test.
         */
        isActive?: pulumi.Input<boolean>;
        /**
         * The type of the test.
         */
        testType: pulumi.Input<string | enums.TestType>;
    }

    /**
     * Describes a Test Base Account SKU.
     */
    export interface TestBaseAccountSKUArgs {
        /**
         * The locations that the SKU is available.
         */
        locations?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The name of the SKU. This is typically a letter + number code, such as B0 or S0.
         */
        name: pulumi.Input<string>;
        /**
         * The type of resource the SKU applies to.
         */
        resourceType?: pulumi.Input<string>;
        /**
         * The tier of this particular SKU.
         */
        tier: pulumi.Input<string | enums.Tier>;
    }

    /**
     * The user object receiver value.
     */
    export interface UserObjectReceiverValueArgs {
        /**
         * user object ids.
         */
        userObjectIds?: pulumi.Input<pulumi.Input<string>[]>;
    }
