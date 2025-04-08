import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Generates version number that will be latest based on existing version numbers.
 */
export interface DistributeVersionerLatestArgs {
    /**
     * Major version for the generated version number. Determine what is "latest" based on versions with this value as the major version. -1 is equivalent to leaving it unset.
     */
    major?: pulumi.Input<number>;
    /**
     * Version numbering scheme to be used.
     * Expected value is 'Latest'.
     */
    scheme: pulumi.Input<"Latest">;
}
/**
 * distributeVersionerLatestArgsProvideDefaults sets the appropriate defaults for DistributeVersionerLatestArgs
 */
export function distributeVersionerLatestArgsProvideDefaults(val: DistributeVersionerLatestArgs): DistributeVersionerLatestArgs {
    return {
        ...val,
        major: (val.major) ?? -1,
    };
}

/**
 * Generates version number based on version number of source image
 */
export interface DistributeVersionerSourceArgs {
    /**
     * Version numbering scheme to be used.
     * Expected value is 'Source'.
     */
    scheme: pulumi.Input<"Source">;
}

/**
 * Indicates if the image template needs to be built on create/update
 */
export interface ImageTemplateAutoRunArgs {
    /**
     * Enabling this field will trigger an automatic build on image template creation or update.
     */
    state?: pulumi.Input<enums.AutoRunState>;
}

/**
 * Uploads files to VMs (Linux, Windows). Corresponds to Packer file provisioner
 */
export interface ImageTemplateFileCustomizerArgs {
    /**
     * The absolute path to a file (with nested directory structures already created) where the file (from sourceUri) will be uploaded to in the VM
     */
    destination?: pulumi.Input<string>;
    /**
     * Friendly Name to provide context on what this customization step does
     */
    name?: pulumi.Input<string>;
    /**
     * SHA256 checksum of the file provided in the sourceUri field above
     */
    sha256Checksum?: pulumi.Input<string>;
    /**
     * The URI of the file to be uploaded for customizing the VM. It can be a github link, SAS URI for Azure Storage, etc
     */
    sourceUri?: pulumi.Input<string>;
    /**
     * The type of customization tool you want to use on the Image. For example, "Shell" can be shell customizer
     * Expected value is 'File'.
     */
    type: pulumi.Input<"File">;
}
/**
 * imageTemplateFileCustomizerArgsProvideDefaults sets the appropriate defaults for ImageTemplateFileCustomizerArgs
 */
export function imageTemplateFileCustomizerArgsProvideDefaults(val: ImageTemplateFileCustomizerArgs): ImageTemplateFileCustomizerArgs {
    return {
        ...val,
        sha256Checksum: (val.sha256Checksum) ?? "",
    };
}

/**
 * Uploads files required for validation to VMs (Linux, Windows). Corresponds to Packer file provisioner
 */
export interface ImageTemplateFileValidatorArgs {
    /**
     * The absolute path to a file (with nested directory structures already created) where the file (from sourceUri) will be uploaded to in the VM
     */
    destination?: pulumi.Input<string>;
    /**
     * Friendly Name to provide context on what this validation step does
     */
    name?: pulumi.Input<string>;
    /**
     * SHA256 checksum of the file provided in the sourceUri field above
     */
    sha256Checksum?: pulumi.Input<string>;
    /**
     * The URI of the file to be uploaded to the VM for validation. It can be a github link, Azure Storage URI (authorized or SAS), etc
     */
    sourceUri?: pulumi.Input<string>;
    /**
     * The type of validation you want to use on the Image. For example, "Shell" can be shell validation
     * Expected value is 'File'.
     */
    type: pulumi.Input<"File">;
}
/**
 * imageTemplateFileValidatorArgsProvideDefaults sets the appropriate defaults for ImageTemplateFileValidatorArgs
 */
export function imageTemplateFileValidatorArgsProvideDefaults(val: ImageTemplateFileValidatorArgs): ImageTemplateFileValidatorArgs {
    return {
        ...val,
        sha256Checksum: (val.sha256Checksum) ?? "",
    };
}

/**
 * Identity for the image template.
 */
export interface ImageTemplateIdentityArgs {
    /**
     * The type of identity used for the image template. The type 'None' will remove any identities from the image template.
     */
    type?: pulumi.Input<enums.ResourceIdentityType>;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Distribute as a Managed Disk Image.
 */
export interface ImageTemplateManagedImageDistributorArgs {
    /**
     * Tags that will be applied to the artifact once it has been created/updated by the distributor.
     */
    artifactTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Resource Id of the Managed Disk Image
     */
    imageId: pulumi.Input<string>;
    /**
     * Azure location for the image, should match if image already exists
     */
    location: pulumi.Input<string>;
    /**
     * The name to be used for the associated RunOutput.
     */
    runOutputName: pulumi.Input<string>;
    /**
     * Type of distribution.
     * Expected value is 'ManagedImage'.
     */
    type: pulumi.Input<"ManagedImage">;
}

/**
 * Describes an image source that is a managed image in customer subscription. This image must reside in the same subscription and region as the Image Builder template.
 */
export interface ImageTemplateManagedImageSourceArgs {
    /**
     * ARM resource id of the managed image in customer subscription
     */
    imageId: pulumi.Input<string>;
    /**
     * Specifies the type of source image you want to start with.
     * Expected value is 'ManagedImage'.
     */
    type: pulumi.Input<"ManagedImage">;
}

/**
 * Describes an image source from [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages).
 */
export interface ImageTemplatePlatformImageSourceArgs {
    /**
     * Image offer from the [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages).
     */
    offer?: pulumi.Input<string>;
    /**
     * Optional configuration of purchase plan for platform image.
     */
    planInfo?: pulumi.Input<PlatformImagePurchasePlanArgs>;
    /**
     * Image Publisher in [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages).
     */
    publisher?: pulumi.Input<string>;
    /**
     * Image sku from the [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages).
     */
    sku?: pulumi.Input<string>;
    /**
     * Specifies the type of source image you want to start with.
     * Expected value is 'PlatformImage'.
     */
    type: pulumi.Input<"PlatformImage">;
    /**
     * Image version from the [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages). If 'latest' is specified here, the version is evaluated when the image build takes place, not when the template is submitted.
     */
    version?: pulumi.Input<string>;
}

/**
 * Runs the specified PowerShell on the VM (Windows). Corresponds to Packer powershell provisioner. Exactly one of 'scriptUri' or 'inline' can be specified.
 */
export interface ImageTemplatePowerShellCustomizerArgs {
    /**
     * Array of PowerShell commands to execute
     */
    inline?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Friendly Name to provide context on what this customization step does
     */
    name?: pulumi.Input<string>;
    /**
     * If specified, the PowerShell script will be run with elevated privileges using the Local System user. Can only be true when the runElevated field above is set to true.
     */
    runAsSystem?: pulumi.Input<boolean>;
    /**
     * If specified, the PowerShell script will be run with elevated privileges
     */
    runElevated?: pulumi.Input<boolean>;
    /**
     * URI of the PowerShell script to be run for customizing. It can be a github link, SAS URI for Azure Storage, etc
     */
    scriptUri?: pulumi.Input<string>;
    /**
     * SHA256 checksum of the power shell script provided in the scriptUri field above
     */
    sha256Checksum?: pulumi.Input<string>;
    /**
     * The type of customization tool you want to use on the Image. For example, "Shell" can be shell customizer
     * Expected value is 'PowerShell'.
     */
    type: pulumi.Input<"PowerShell">;
    /**
     * Valid exit codes for the PowerShell script. [Default: 0]
     */
    validExitCodes?: pulumi.Input<pulumi.Input<number>[]>;
}
/**
 * imageTemplatePowerShellCustomizerArgsProvideDefaults sets the appropriate defaults for ImageTemplatePowerShellCustomizerArgs
 */
export function imageTemplatePowerShellCustomizerArgsProvideDefaults(val: ImageTemplatePowerShellCustomizerArgs): ImageTemplatePowerShellCustomizerArgs {
    return {
        ...val,
        runAsSystem: (val.runAsSystem) ?? false,
        runElevated: (val.runElevated) ?? false,
        sha256Checksum: (val.sha256Checksum) ?? "",
    };
}

/**
 * Runs the specified PowerShell script during the validation phase (Windows). Corresponds to Packer powershell provisioner. Exactly one of 'scriptUri' or 'inline' can be specified.
 */
export interface ImageTemplatePowerShellValidatorArgs {
    /**
     * Array of PowerShell commands to execute
     */
    inline?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Friendly Name to provide context on what this validation step does
     */
    name?: pulumi.Input<string>;
    /**
     * If specified, the PowerShell script will be run with elevated privileges using the Local System user. Can only be true when the runElevated field above is set to true.
     */
    runAsSystem?: pulumi.Input<boolean>;
    /**
     * If specified, the PowerShell script will be run with elevated privileges
     */
    runElevated?: pulumi.Input<boolean>;
    /**
     * URI of the PowerShell script to be run for validation. It can be a github link, Azure Storage URI, etc
     */
    scriptUri?: pulumi.Input<string>;
    /**
     * SHA256 checksum of the power shell script provided in the scriptUri field above
     */
    sha256Checksum?: pulumi.Input<string>;
    /**
     * The type of validation you want to use on the Image. For example, "Shell" can be shell validation
     * Expected value is 'PowerShell'.
     */
    type: pulumi.Input<"PowerShell">;
    /**
     * Valid exit codes for the PowerShell script. [Default: 0]
     */
    validExitCodes?: pulumi.Input<pulumi.Input<number>[]>;
}
/**
 * imageTemplatePowerShellValidatorArgsProvideDefaults sets the appropriate defaults for ImageTemplatePowerShellValidatorArgs
 */
export function imageTemplatePowerShellValidatorArgsProvideDefaults(val: ImageTemplatePowerShellValidatorArgs): ImageTemplatePowerShellValidatorArgs {
    return {
        ...val,
        runAsSystem: (val.runAsSystem) ?? false,
        runElevated: (val.runElevated) ?? false,
        sha256Checksum: (val.sha256Checksum) ?? "",
    };
}

/**
 * Error handling options upon a build failure
 */
export interface ImageTemplatePropertiesErrorHandlingArgs {
    /**
     * If there is a customizer error and this field is set to 'cleanup', the build VM and associated network resources will be cleaned up. This is the default behavior. If there is a customizer error and this field is set to 'abort', the build VM will be preserved.
     */
    onCustomizerError?: pulumi.Input<string | enums.OnBuildError>;
    /**
     * If there is a validation error and this field is set to 'cleanup', the build VM and associated network resources will be cleaned up. This is the default behavior. If there is a validation error and this field is set to 'abort', the build VM will be preserved.
     */
    onValidationError?: pulumi.Input<string | enums.OnBuildError>;
}
/**
 * imageTemplatePropertiesErrorHandlingArgsProvideDefaults sets the appropriate defaults for ImageTemplatePropertiesErrorHandlingArgs
 */
export function imageTemplatePropertiesErrorHandlingArgsProvideDefaults(val: ImageTemplatePropertiesErrorHandlingArgs): ImageTemplatePropertiesErrorHandlingArgs {
    return {
        ...val,
        onCustomizerError: (val.onCustomizerError) ?? "cleanup",
        onValidationError: (val.onValidationError) ?? "cleanup",
    };
}

/**
 * Specifies optimization to be performed on image.
 */
export interface ImageTemplatePropertiesOptimizeArgs {
    /**
     * Optimization is applied on the image for a faster VM boot.
     */
    vmBoot?: pulumi.Input<ImageTemplatePropertiesVmBootArgs>;
}

/**
 * Configuration options and list of validations to be performed on the resulting image.
 */
export interface ImageTemplatePropertiesValidateArgs {
    /**
     * If validation fails and this field is set to false, output image(s) will not be distributed. This is the default behavior. If validation fails and this field is set to true, output image(s) will still be distributed. Please use this option with caution as it may result in bad images being distributed for use. In either case (true or false), the end to end image run will be reported as having failed in case of a validation failure. [Note: This field has no effect if validation succeeds.]
     */
    continueDistributeOnFailure?: pulumi.Input<boolean>;
    /**
     * List of validations to be performed.
     */
    inVMValidations?: pulumi.Input<pulumi.Input<ImageTemplateFileValidatorArgs | ImageTemplatePowerShellValidatorArgs | ImageTemplateShellValidatorArgs>[]>;
    /**
     * If this field is set to true, the image specified in the 'source' section will directly be validated. No separate build will be run to generate and then validate a customized image.
     */
    sourceValidationOnly?: pulumi.Input<boolean>;
}
/**
 * imageTemplatePropertiesValidateArgsProvideDefaults sets the appropriate defaults for ImageTemplatePropertiesValidateArgs
 */
export function imageTemplatePropertiesValidateArgsProvideDefaults(val: ImageTemplatePropertiesValidateArgs): ImageTemplatePropertiesValidateArgs {
    return {
        ...val,
        continueDistributeOnFailure: (val.continueDistributeOnFailure) ?? false,
        sourceValidationOnly: (val.sourceValidationOnly) ?? false,
    };
}

/**
 * Optimization is applied on the image for a faster VM boot.
 */
export interface ImageTemplatePropertiesVmBootArgs {
    /**
     * Enabling this field will improve VM boot time by optimizing the final customized image output.
     */
    state?: pulumi.Input<enums.VMBootOptimizationState>;
}

/**
 * Reboots a VM and waits for it to come back online (Windows). Corresponds to Packer windows-restart provisioner
 */
export interface ImageTemplateRestartCustomizerArgs {
    /**
     * Friendly Name to provide context on what this customization step does
     */
    name?: pulumi.Input<string>;
    /**
     * Command to check if restart succeeded [Default: '']
     */
    restartCheckCommand?: pulumi.Input<string>;
    /**
     * Command to execute the restart [Default: 'shutdown /r /f /t 0 /c "packer restart"']
     */
    restartCommand?: pulumi.Input<string>;
    /**
     * Restart timeout specified as a string of magnitude and unit, e.g. '5m' (5 minutes) or '2h' (2 hours) [Default: '5m']
     */
    restartTimeout?: pulumi.Input<string>;
    /**
     * The type of customization tool you want to use on the Image. For example, "Shell" can be shell customizer
     * Expected value is 'WindowsRestart'.
     */
    type: pulumi.Input<"WindowsRestart">;
}

/**
 * Distribute via Azure Compute Gallery.
 */
export interface ImageTemplateSharedImageDistributorArgs {
    /**
     * Tags that will be applied to the artifact once it has been created/updated by the distributor.
     */
    artifactTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Flag that indicates whether created image version should be excluded from latest. Omit to use the default (false).
     */
    excludeFromLatest?: pulumi.Input<boolean>;
    /**
     * Resource Id of the Azure Compute Gallery image
     */
    galleryImageId: pulumi.Input<string>;
    /**
     * [Deprecated] A list of regions that the image will be replicated to. This list can be specified only if targetRegions is not specified. This field is deprecated - use targetRegions instead.
     */
    replicationRegions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name to be used for the associated RunOutput.
     */
    runOutputName: pulumi.Input<string>;
    /**
     * [Deprecated] Storage account type to be used to store the shared image. Omit to use the default (Standard_LRS). This field can be specified only if replicationRegions is specified. This field is deprecated - use targetRegions instead.
     */
    storageAccountType?: pulumi.Input<string | enums.SharedImageStorageAccountType>;
    /**
     * The target regions where the distributed Image Version is going to be replicated to. This object supersedes replicationRegions and can be specified only if replicationRegions is not specified.
     */
    targetRegions?: pulumi.Input<pulumi.Input<TargetRegionArgs>[]>;
    /**
     * Type of distribution.
     * Expected value is 'SharedImage'.
     */
    type: pulumi.Input<"SharedImage">;
    /**
     * Describes how to generate new x.y.z version number for distribution.
     */
    versioning?: pulumi.Input<DistributeVersionerLatestArgs | DistributeVersionerSourceArgs>;
}
/**
 * imageTemplateSharedImageDistributorArgsProvideDefaults sets the appropriate defaults for ImageTemplateSharedImageDistributorArgs
 */
export function imageTemplateSharedImageDistributorArgsProvideDefaults(val: ImageTemplateSharedImageDistributorArgs): ImageTemplateSharedImageDistributorArgs {
    return {
        ...val,
        excludeFromLatest: (val.excludeFromLatest) ?? false,
    };
}

/**
 * Describes an image source that is an image version in an Azure Compute Gallery or a Direct Shared Gallery.
 */
export interface ImageTemplateSharedImageVersionSourceArgs {
    /**
     * ARM resource id of the image version. When image version name is 'latest', the version is evaluated when the image build takes place.
     */
    imageVersionId: pulumi.Input<string>;
    /**
     * Specifies the type of source image you want to start with.
     * Expected value is 'SharedImageVersion'.
     */
    type: pulumi.Input<"SharedImageVersion">;
}

/**
 * Runs a shell script during the customization phase (Linux). Corresponds to Packer shell provisioner. Exactly one of 'scriptUri' or 'inline' can be specified.
 */
export interface ImageTemplateShellCustomizerArgs {
    /**
     * Array of shell commands to execute
     */
    inline?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Friendly Name to provide context on what this customization step does
     */
    name?: pulumi.Input<string>;
    /**
     * URI of the shell script to be run for customizing. It can be a github link, SAS URI for Azure Storage, etc
     */
    scriptUri?: pulumi.Input<string>;
    /**
     * SHA256 checksum of the shell script provided in the scriptUri field
     */
    sha256Checksum?: pulumi.Input<string>;
    /**
     * The type of customization tool you want to use on the Image. For example, "Shell" can be shell customizer
     * Expected value is 'Shell'.
     */
    type: pulumi.Input<"Shell">;
}
/**
 * imageTemplateShellCustomizerArgsProvideDefaults sets the appropriate defaults for ImageTemplateShellCustomizerArgs
 */
export function imageTemplateShellCustomizerArgsProvideDefaults(val: ImageTemplateShellCustomizerArgs): ImageTemplateShellCustomizerArgs {
    return {
        ...val,
        sha256Checksum: (val.sha256Checksum) ?? "",
    };
}

/**
 * Runs the specified shell script during the validation phase (Linux). Corresponds to Packer shell provisioner. Exactly one of 'scriptUri' or 'inline' can be specified.
 */
export interface ImageTemplateShellValidatorArgs {
    /**
     * Array of shell commands to execute
     */
    inline?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Friendly Name to provide context on what this validation step does
     */
    name?: pulumi.Input<string>;
    /**
     * URI of the shell script to be run for validation. It can be a github link, Azure Storage URI, etc
     */
    scriptUri?: pulumi.Input<string>;
    /**
     * SHA256 checksum of the shell script provided in the scriptUri field
     */
    sha256Checksum?: pulumi.Input<string>;
    /**
     * The type of validation you want to use on the Image. For example, "Shell" can be shell validation
     * Expected value is 'Shell'.
     */
    type: pulumi.Input<"Shell">;
}
/**
 * imageTemplateShellValidatorArgsProvideDefaults sets the appropriate defaults for ImageTemplateShellValidatorArgs
 */
export function imageTemplateShellValidatorArgsProvideDefaults(val: ImageTemplateShellValidatorArgs): ImageTemplateShellValidatorArgs {
    return {
        ...val,
        sha256Checksum: (val.sha256Checksum) ?? "",
    };
}

/**
 * Distribute via VHD in a storage account.
 */
export interface ImageTemplateVhdDistributorArgs {
    /**
     * Tags that will be applied to the artifact once it has been created/updated by the distributor.
     */
    artifactTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name to be used for the associated RunOutput.
     */
    runOutputName: pulumi.Input<string>;
    /**
     * Type of distribution.
     * Expected value is 'VHD'.
     */
    type: pulumi.Input<"VHD">;
    /**
     * Optional Azure Storage URI for the distributed VHD blob. Omit to use the default (empty string) in which case VHD would be published to the storage account in the staging resource group.
     */
    uri?: pulumi.Input<string>;
}

/**
 * Describes the virtual machines used to build and validate images
 */
export interface ImageTemplateVmProfileArgs {
    /**
     * Size of the OS disk in GB. Omit or specify 0 to use Azure's default OS disk size.
     */
    osDiskSizeGB?: pulumi.Input<number>;
    /**
     * Optional array of resource IDs of user assigned managed identities to be configured on the build VM and validation VM. This may include the identity of the image template.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Size of the virtual machine used to build, customize and capture images. Omit or specify empty string to use the default (Standard_D1_v2 for Gen1 images and Standard_D2ds_v4 for Gen2 images).
     */
    vmSize?: pulumi.Input<string>;
    /**
     * Optional configuration of the virtual network to use to deploy the build VM and validation VM in. Omit if no specific virtual network needs to be used.
     */
    vnetConfig?: pulumi.Input<VirtualNetworkConfigArgs>;
}
/**
 * imageTemplateVmProfileArgsProvideDefaults sets the appropriate defaults for ImageTemplateVmProfileArgs
 */
export function imageTemplateVmProfileArgsProvideDefaults(val: ImageTemplateVmProfileArgs): ImageTemplateVmProfileArgs {
    return {
        ...val,
        osDiskSizeGB: (val.osDiskSizeGB) ?? 0,
        vmSize: (val.vmSize) ?? "",
        vnetConfig: (val.vnetConfig ? pulumi.output(val.vnetConfig).apply(virtualNetworkConfigArgsProvideDefaults) : undefined),
    };
}

/**
 * Installs Windows Updates. Corresponds to Packer Windows Update Provisioner (https://github.com/rgl/packer-provisioner-windows-update)
 */
export interface ImageTemplateWindowsUpdateCustomizerArgs {
    /**
     * Array of filters to select updates to apply. Omit or specify empty array to use the default (no filter). Refer to above link for examples and detailed description of this field.
     */
    filters?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Friendly Name to provide context on what this customization step does
     */
    name?: pulumi.Input<string>;
    /**
     * Criteria to search updates. Omit or specify empty string to use the default (search all). Refer to above link for examples and detailed description of this field.
     */
    searchCriteria?: pulumi.Input<string>;
    /**
     * The type of customization tool you want to use on the Image. For example, "Shell" can be shell customizer
     * Expected value is 'WindowsUpdate'.
     */
    type: pulumi.Input<"WindowsUpdate">;
    /**
     * Maximum number of updates to apply at a time. Omit or specify 0 to use the default (1000)
     */
    updateLimit?: pulumi.Input<number>;
}
/**
 * imageTemplateWindowsUpdateCustomizerArgsProvideDefaults sets the appropriate defaults for ImageTemplateWindowsUpdateCustomizerArgs
 */
export function imageTemplateWindowsUpdateCustomizerArgsProvideDefaults(val: ImageTemplateWindowsUpdateCustomizerArgs): ImageTemplateWindowsUpdateCustomizerArgs {
    return {
        ...val,
        updateLimit: (val.updateLimit) ?? 0,
    };
}

/**
 * Purchase plan configuration for platform image.
 */
export interface PlatformImagePurchasePlanArgs {
    /**
     * Name of the purchase plan.
     */
    planName: pulumi.Input<string>;
    /**
     * Product of the purchase plan.
     */
    planProduct: pulumi.Input<string>;
    /**
     * Publisher of the purchase plan.
     */
    planPublisher: pulumi.Input<string>;
}

/**
 * Describes the target region information.
 */
export interface TargetRegionArgs {
    /**
     * The name of the region.
     */
    name: pulumi.Input<string>;
    /**
     * The number of replicas of the Image Version to be created in this region. Omit to use the default (1).
     */
    replicaCount?: pulumi.Input<number>;
    /**
     * Specifies the storage account type to be used to store the image in this region. Omit to use the default (Standard_LRS).
     */
    storageAccountType?: pulumi.Input<string | enums.SharedImageStorageAccountType>;
}
/**
 * targetRegionArgsProvideDefaults sets the appropriate defaults for TargetRegionArgs
 */
export function targetRegionArgsProvideDefaults(val: TargetRegionArgs): TargetRegionArgs {
    return {
        ...val,
        replicaCount: (val.replicaCount) ?? 1,
    };
}

/**
 * Virtual Network configuration.
 */
export interface VirtualNetworkConfigArgs {
    /**
     * Resource id of a pre-existing subnet on which Azure Container Instance will be deployed for Isolated Builds. This field may be specified only if `subnetId` is also specified and must be on the same Virtual Network as the subnet specified in `subnetId`.
     */
    containerInstanceSubnetId?: pulumi.Input<string>;
    /**
     * Size of the proxy virtual machine used to pass traffic to the build VM and validation VM. This must not be specified if `containerInstanceSubnetId` is specified because no proxy virtual machine is deployed in that case. Omit or specify empty string to use the default (Standard_A1_v2).
     */
    proxyVmSize?: pulumi.Input<string>;
    /**
     * Resource id of a pre-existing subnet on which the build VM and validation VM will be deployed
     */
    subnetId?: pulumi.Input<string>;
}
/**
 * virtualNetworkConfigArgsProvideDefaults sets the appropriate defaults for VirtualNetworkConfigArgs
 */
export function virtualNetworkConfigArgsProvideDefaults(val: VirtualNetworkConfigArgs): VirtualNetworkConfigArgs {
    return {
        ...val,
        proxyVmSize: (val.proxyVmSize) ?? "",
    };
}
