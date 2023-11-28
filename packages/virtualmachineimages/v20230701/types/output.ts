import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Generates version number that will be latest based on existing version numbers.
     */
    export interface DistributeVersionerLatestResponse {
        /**
         * Major version for the generated version number. Determine what is "latest" based on versions with this value as the major version. -1 is equivalent to leaving it unset.
         */
        major?: number;
        /**
         * Version numbering scheme to be used.
         * Expected value is 'Latest'.
         */
        scheme: "Latest";
    }
    /**
     * distributeVersionerLatestResponseProvideDefaults sets the appropriate defaults for DistributeVersionerLatestResponse
     */
    export function distributeVersionerLatestResponseProvideDefaults(val: DistributeVersionerLatestResponse): DistributeVersionerLatestResponse {
        return {
            ...val,
            major: (val.major) ?? -1,
        };
    }

    /**
     * Generates version number based on version number of source image
     */
    export interface DistributeVersionerSourceResponse {
        /**
         * Version numbering scheme to be used.
         * Expected value is 'Source'.
         */
        scheme: "Source";
    }

    /**
     * Uploads files to VMs (Linux, Windows). Corresponds to Packer file provisioner
     */
    export interface ImageTemplateFileCustomizerResponse {
        /**
         * The absolute path to a file (with nested directory structures already created) where the file (from sourceUri) will be uploaded to in the VM
         */
        destination?: string;
        /**
         * Friendly Name to provide context on what this customization step does
         */
        name?: string;
        /**
         * SHA256 checksum of the file provided in the sourceUri field above
         */
        sha256Checksum?: string;
        /**
         * The URI of the file to be uploaded for customizing the VM. It can be a github link, SAS URI for Azure Storage, etc
         */
        sourceUri?: string;
        /**
         * The type of customization tool you want to use on the Image. For example, "Shell" can be shell customizer
         * Expected value is 'File'.
         */
        type: "File";
    }
    /**
     * imageTemplateFileCustomizerResponseProvideDefaults sets the appropriate defaults for ImageTemplateFileCustomizerResponse
     */
    export function imageTemplateFileCustomizerResponseProvideDefaults(val: ImageTemplateFileCustomizerResponse): ImageTemplateFileCustomizerResponse {
        return {
            ...val,
            sha256Checksum: (val.sha256Checksum) ?? "",
        };
    }

    /**
     * Uploads files required for validation to VMs (Linux, Windows). Corresponds to Packer file provisioner
     */
    export interface ImageTemplateFileValidatorResponse {
        /**
         * The absolute path to a file (with nested directory structures already created) where the file (from sourceUri) will be uploaded to in the VM
         */
        destination?: string;
        /**
         * Friendly Name to provide context on what this validation step does
         */
        name?: string;
        /**
         * SHA256 checksum of the file provided in the sourceUri field above
         */
        sha256Checksum?: string;
        /**
         * The URI of the file to be uploaded to the VM for validation. It can be a github link, Azure Storage URI (authorized or SAS), etc
         */
        sourceUri?: string;
        /**
         * The type of validation you want to use on the Image. For example, "Shell" can be shell validation
         * Expected value is 'File'.
         */
        type: "File";
    }
    /**
     * imageTemplateFileValidatorResponseProvideDefaults sets the appropriate defaults for ImageTemplateFileValidatorResponse
     */
    export function imageTemplateFileValidatorResponseProvideDefaults(val: ImageTemplateFileValidatorResponse): ImageTemplateFileValidatorResponse {
        return {
            ...val,
            sha256Checksum: (val.sha256Checksum) ?? "",
        };
    }

    /**
     * Identity for the image template.
     */
    export interface ImageTemplateIdentityResponse {
        /**
         * The type of identity used for the image template. The type 'None' will remove any identities from the image template.
         */
        type?: string;
        /**
         * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
         */
        userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
    }

    /**
     * Describes the latest status of running an image template
     */
    export interface ImageTemplateLastRunStatusResponse {
        /**
         * End time of the last run (UTC)
         */
        endTime?: string;
        /**
         * Verbose information about the last run state
         */
        message?: string;
        /**
         * State of the last run
         */
        runState?: string;
        /**
         * Sub-state of the last run
         */
        runSubState?: string;
        /**
         * Start time of the last run (UTC)
         */
        startTime?: string;
    }

    /**
     * Distribute as a Managed Disk Image.
     */
    export interface ImageTemplateManagedImageDistributorResponse {
        /**
         * Tags that will be applied to the artifact once it has been created/updated by the distributor.
         */
        artifactTags?: {[key: string]: string};
        /**
         * Resource Id of the Managed Disk Image
         */
        imageId: string;
        /**
         * Azure location for the image, should match if image already exists
         */
        location: string;
        /**
         * The name to be used for the associated RunOutput.
         */
        runOutputName: string;
        /**
         * Type of distribution.
         * Expected value is 'ManagedImage'.
         */
        type: "ManagedImage";
    }

    /**
     * Describes an image source that is a managed image in customer subscription. This image must reside in the same subscription and region as the Image Builder template.
     */
    export interface ImageTemplateManagedImageSourceResponse {
        /**
         * ARM resource id of the managed image in customer subscription
         */
        imageId: string;
        /**
         * Specifies the type of source image you want to start with.
         * Expected value is 'ManagedImage'.
         */
        type: "ManagedImage";
    }

    /**
     * Describes an image source from [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages).
     */
    export interface ImageTemplatePlatformImageSourceResponse {
        /**
         * Image version from the [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages). This readonly field differs from 'version', only if the value specified in 'version' field is 'latest'.
         */
        exactVersion: string;
        /**
         * Image offer from the [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages).
         */
        offer?: string;
        /**
         * Optional configuration of purchase plan for platform image.
         */
        planInfo?: PlatformImagePurchasePlanResponse;
        /**
         * Image Publisher in [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages).
         */
        publisher?: string;
        /**
         * Image sku from the [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages).
         */
        sku?: string;
        /**
         * Specifies the type of source image you want to start with.
         * Expected value is 'PlatformImage'.
         */
        type: "PlatformImage";
        /**
         * Image version from the [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages). If 'latest' is specified here, the version is evaluated when the image build takes place, not when the template is submitted.
         */
        version?: string;
    }

    /**
     * Runs the specified PowerShell on the VM (Windows). Corresponds to Packer powershell provisioner. Exactly one of 'scriptUri' or 'inline' can be specified.
     */
    export interface ImageTemplatePowerShellCustomizerResponse {
        /**
         * Array of PowerShell commands to execute
         */
        inline?: string[];
        /**
         * Friendly Name to provide context on what this customization step does
         */
        name?: string;
        /**
         * If specified, the PowerShell script will be run with elevated privileges using the Local System user. Can only be true when the runElevated field above is set to true.
         */
        runAsSystem?: boolean;
        /**
         * If specified, the PowerShell script will be run with elevated privileges
         */
        runElevated?: boolean;
        /**
         * URI of the PowerShell script to be run for customizing. It can be a github link, SAS URI for Azure Storage, etc
         */
        scriptUri?: string;
        /**
         * SHA256 checksum of the power shell script provided in the scriptUri field above
         */
        sha256Checksum?: string;
        /**
         * The type of customization tool you want to use on the Image. For example, "Shell" can be shell customizer
         * Expected value is 'PowerShell'.
         */
        type: "PowerShell";
        /**
         * Valid exit codes for the PowerShell script. [Default: 0]
         */
        validExitCodes?: number[];
    }
    /**
     * imageTemplatePowerShellCustomizerResponseProvideDefaults sets the appropriate defaults for ImageTemplatePowerShellCustomizerResponse
     */
    export function imageTemplatePowerShellCustomizerResponseProvideDefaults(val: ImageTemplatePowerShellCustomizerResponse): ImageTemplatePowerShellCustomizerResponse {
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
    export interface ImageTemplatePowerShellValidatorResponse {
        /**
         * Array of PowerShell commands to execute
         */
        inline?: string[];
        /**
         * Friendly Name to provide context on what this validation step does
         */
        name?: string;
        /**
         * If specified, the PowerShell script will be run with elevated privileges using the Local System user. Can only be true when the runElevated field above is set to true.
         */
        runAsSystem?: boolean;
        /**
         * If specified, the PowerShell script will be run with elevated privileges
         */
        runElevated?: boolean;
        /**
         * URI of the PowerShell script to be run for validation. It can be a github link, Azure Storage URI, etc
         */
        scriptUri?: string;
        /**
         * SHA256 checksum of the power shell script provided in the scriptUri field above
         */
        sha256Checksum?: string;
        /**
         * The type of validation you want to use on the Image. For example, "Shell" can be shell validation
         * Expected value is 'PowerShell'.
         */
        type: "PowerShell";
        /**
         * Valid exit codes for the PowerShell script. [Default: 0]
         */
        validExitCodes?: number[];
    }
    /**
     * imageTemplatePowerShellValidatorResponseProvideDefaults sets the appropriate defaults for ImageTemplatePowerShellValidatorResponse
     */
    export function imageTemplatePowerShellValidatorResponseProvideDefaults(val: ImageTemplatePowerShellValidatorResponse): ImageTemplatePowerShellValidatorResponse {
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
    export interface ImageTemplatePropertiesResponseErrorHandling {
        /**
         * If there is a customizer error and this field is set to 'cleanup', the build VM and associated network resources will be cleaned up. This is the default behavior. If there is a customizer error and this field is set to 'abort', the build VM will be preserved.
         */
        onCustomizerError?: string;
        /**
         * If there is a validation error and this field is set to 'cleanup', the build VM and associated network resources will be cleaned up. This is the default behavior. If there is a validation error and this field is set to 'abort', the build VM will be preserved.
         */
        onValidationError?: string;
    }
    /**
     * imageTemplatePropertiesResponseErrorHandlingProvideDefaults sets the appropriate defaults for ImageTemplatePropertiesResponseErrorHandling
     */
    export function imageTemplatePropertiesResponseErrorHandlingProvideDefaults(val: ImageTemplatePropertiesResponseErrorHandling): ImageTemplatePropertiesResponseErrorHandling {
        return {
            ...val,
            onCustomizerError: (val.onCustomizerError) ?? "cleanup",
            onValidationError: (val.onValidationError) ?? "cleanup",
        };
    }

    /**
     * Specifies optimization to be performed on image.
     */
    export interface ImageTemplatePropertiesResponseOptimize {
        /**
         * Optimization is applied on the image for a faster VM boot.
         */
        vmBoot?: ImageTemplatePropertiesResponseVmBoot;
    }

    /**
     * Configuration options and list of validations to be performed on the resulting image.
     */
    export interface ImageTemplatePropertiesResponseValidate {
        /**
         * If validation fails and this field is set to false, output image(s) will not be distributed. This is the default behavior. If validation fails and this field is set to true, output image(s) will still be distributed. Please use this option with caution as it may result in bad images being distributed for use. In either case (true or false), the end to end image run will be reported as having failed in case of a validation failure. [Note: This field has no effect if validation succeeds.]
         */
        continueDistributeOnFailure?: boolean;
        /**
         * List of validations to be performed.
         */
        inVMValidations?: (ImageTemplateFileValidatorResponse | ImageTemplatePowerShellValidatorResponse | ImageTemplateShellValidatorResponse)[];
        /**
         * If this field is set to true, the image specified in the 'source' section will directly be validated. No separate build will be run to generate and then validate a customized image.
         */
        sourceValidationOnly?: boolean;
    }
    /**
     * imageTemplatePropertiesResponseValidateProvideDefaults sets the appropriate defaults for ImageTemplatePropertiesResponseValidate
     */
    export function imageTemplatePropertiesResponseValidateProvideDefaults(val: ImageTemplatePropertiesResponseValidate): ImageTemplatePropertiesResponseValidate {
        return {
            ...val,
            continueDistributeOnFailure: (val.continueDistributeOnFailure) ?? false,
            sourceValidationOnly: (val.sourceValidationOnly) ?? false,
        };
    }

    /**
     * Optimization is applied on the image for a faster VM boot.
     */
    export interface ImageTemplatePropertiesResponseVmBoot {
        /**
         * Enabling this field will improve VM boot time by optimizing the final customized image output.
         */
        state?: string;
    }

    /**
     * Reboots a VM and waits for it to come back online (Windows). Corresponds to Packer windows-restart provisioner
     */
    export interface ImageTemplateRestartCustomizerResponse {
        /**
         * Friendly Name to provide context on what this customization step does
         */
        name?: string;
        /**
         * Command to check if restart succeeded [Default: '']
         */
        restartCheckCommand?: string;
        /**
         * Command to execute the restart [Default: 'shutdown /r /f /t 0 /c "packer restart"']
         */
        restartCommand?: string;
        /**
         * Restart timeout specified as a string of magnitude and unit, e.g. '5m' (5 minutes) or '2h' (2 hours) [Default: '5m']
         */
        restartTimeout?: string;
        /**
         * The type of customization tool you want to use on the Image. For example, "Shell" can be shell customizer
         * Expected value is 'WindowsRestart'.
         */
        type: "WindowsRestart";
    }

    /**
     * Distribute via Azure Compute Gallery.
     */
    export interface ImageTemplateSharedImageDistributorResponse {
        /**
         * Tags that will be applied to the artifact once it has been created/updated by the distributor.
         */
        artifactTags?: {[key: string]: string};
        /**
         * Flag that indicates whether created image version should be excluded from latest. Omit to use the default (false).
         */
        excludeFromLatest?: boolean;
        /**
         * Resource Id of the Azure Compute Gallery image
         */
        galleryImageId: string;
        /**
         * [Deprecated] A list of regions that the image will be replicated to. This list can be specified only if targetRegions is not specified. This field is deprecated - use targetRegions instead.
         */
        replicationRegions?: string[];
        /**
         * The name to be used for the associated RunOutput.
         */
        runOutputName: string;
        /**
         * [Deprecated] Storage account type to be used to store the shared image. Omit to use the default (Standard_LRS). This field can be specified only if replicationRegions is specified. This field is deprecated - use targetRegions instead.
         */
        storageAccountType?: string;
        /**
         * The target regions where the distributed Image Version is going to be replicated to. This object supersedes replicationRegions and can be specified only if replicationRegions is not specified.
         */
        targetRegions?: TargetRegionResponse[];
        /**
         * Type of distribution.
         * Expected value is 'SharedImage'.
         */
        type: "SharedImage";
        /**
         * Describes how to generate new x.y.z version number for distribution.
         */
        versioning?: DistributeVersionerLatestResponse | DistributeVersionerSourceResponse;
    }
    /**
     * imageTemplateSharedImageDistributorResponseProvideDefaults sets the appropriate defaults for ImageTemplateSharedImageDistributorResponse
     */
    export function imageTemplateSharedImageDistributorResponseProvideDefaults(val: ImageTemplateSharedImageDistributorResponse): ImageTemplateSharedImageDistributorResponse {
        return {
            ...val,
            excludeFromLatest: (val.excludeFromLatest) ?? false,
        };
    }

    /**
     * Describes an image source that is an image version in an Azure Compute Gallery or a Direct Shared Gallery.
     */
    export interface ImageTemplateSharedImageVersionSourceResponse {
        /**
         * Exact ARM resource id of the image version. This readonly field differs from the image version Id in 'imageVersionId' only if the version name specified in 'imageVersionId' field is 'latest'.
         */
        exactVersion: string;
        /**
         * ARM resource id of the image version. When image version name is 'latest', the version is evaluated when the image build takes place.
         */
        imageVersionId: string;
        /**
         * Specifies the type of source image you want to start with.
         * Expected value is 'SharedImageVersion'.
         */
        type: "SharedImageVersion";
    }

    /**
     * Runs a shell script during the customization phase (Linux). Corresponds to Packer shell provisioner. Exactly one of 'scriptUri' or 'inline' can be specified.
     */
    export interface ImageTemplateShellCustomizerResponse {
        /**
         * Array of shell commands to execute
         */
        inline?: string[];
        /**
         * Friendly Name to provide context on what this customization step does
         */
        name?: string;
        /**
         * URI of the shell script to be run for customizing. It can be a github link, SAS URI for Azure Storage, etc
         */
        scriptUri?: string;
        /**
         * SHA256 checksum of the shell script provided in the scriptUri field
         */
        sha256Checksum?: string;
        /**
         * The type of customization tool you want to use on the Image. For example, "Shell" can be shell customizer
         * Expected value is 'Shell'.
         */
        type: "Shell";
    }
    /**
     * imageTemplateShellCustomizerResponseProvideDefaults sets the appropriate defaults for ImageTemplateShellCustomizerResponse
     */
    export function imageTemplateShellCustomizerResponseProvideDefaults(val: ImageTemplateShellCustomizerResponse): ImageTemplateShellCustomizerResponse {
        return {
            ...val,
            sha256Checksum: (val.sha256Checksum) ?? "",
        };
    }

    /**
     * Runs the specified shell script during the validation phase (Linux). Corresponds to Packer shell provisioner. Exactly one of 'scriptUri' or 'inline' can be specified.
     */
    export interface ImageTemplateShellValidatorResponse {
        /**
         * Array of shell commands to execute
         */
        inline?: string[];
        /**
         * Friendly Name to provide context on what this validation step does
         */
        name?: string;
        /**
         * URI of the shell script to be run for validation. It can be a github link, Azure Storage URI, etc
         */
        scriptUri?: string;
        /**
         * SHA256 checksum of the shell script provided in the scriptUri field
         */
        sha256Checksum?: string;
        /**
         * The type of validation you want to use on the Image. For example, "Shell" can be shell validation
         * Expected value is 'Shell'.
         */
        type: "Shell";
    }
    /**
     * imageTemplateShellValidatorResponseProvideDefaults sets the appropriate defaults for ImageTemplateShellValidatorResponse
     */
    export function imageTemplateShellValidatorResponseProvideDefaults(val: ImageTemplateShellValidatorResponse): ImageTemplateShellValidatorResponse {
        return {
            ...val,
            sha256Checksum: (val.sha256Checksum) ?? "",
        };
    }

    /**
     * Distribute via VHD in a storage account.
     */
    export interface ImageTemplateVhdDistributorResponse {
        /**
         * Tags that will be applied to the artifact once it has been created/updated by the distributor.
         */
        artifactTags?: {[key: string]: string};
        /**
         * The name to be used for the associated RunOutput.
         */
        runOutputName: string;
        /**
         * Type of distribution.
         * Expected value is 'VHD'.
         */
        type: "VHD";
        /**
         * Optional Azure Storage URI for the distributed VHD blob. Omit to use the default (empty string) in which case VHD would be published to the storage account in the staging resource group.
         */
        uri?: string;
    }

    /**
     * Describes the virtual machines used to build and validate images
     */
    export interface ImageTemplateVmProfileResponse {
        /**
         * Size of the OS disk in GB. Omit or specify 0 to use Azure's default OS disk size.
         */
        osDiskSizeGB?: number;
        /**
         * Optional array of resource IDs of user assigned managed identities to be configured on the build VM and validation VM. This may include the identity of the image template.
         */
        userAssignedIdentities?: string[];
        /**
         * Size of the virtual machine used to build, customize and capture images. Omit or specify empty string to use the default (Standard_D1_v2 for Gen1 images and Standard_D2ds_v4 for Gen2 images).
         */
        vmSize?: string;
        /**
         * Optional configuration of the virtual network to use to deploy the build VM and validation VM in. Omit if no specific virtual network needs to be used.
         */
        vnetConfig?: VirtualNetworkConfigResponse;
    }
    /**
     * imageTemplateVmProfileResponseProvideDefaults sets the appropriate defaults for ImageTemplateVmProfileResponse
     */
    export function imageTemplateVmProfileResponseProvideDefaults(val: ImageTemplateVmProfileResponse): ImageTemplateVmProfileResponse {
        return {
            ...val,
            osDiskSizeGB: (val.osDiskSizeGB) ?? 0,
            vmSize: (val.vmSize) ?? "",
            vnetConfig: (val.vnetConfig ? virtualNetworkConfigResponseProvideDefaults(val.vnetConfig) : undefined),
        };
    }

    /**
     * Installs Windows Updates. Corresponds to Packer Windows Update Provisioner (https://github.com/rgl/packer-provisioner-windows-update)
     */
    export interface ImageTemplateWindowsUpdateCustomizerResponse {
        /**
         * Array of filters to select updates to apply. Omit or specify empty array to use the default (no filter). Refer to above link for examples and detailed description of this field.
         */
        filters?: string[];
        /**
         * Friendly Name to provide context on what this customization step does
         */
        name?: string;
        /**
         * Criteria to search updates. Omit or specify empty string to use the default (search all). Refer to above link for examples and detailed description of this field.
         */
        searchCriteria?: string;
        /**
         * The type of customization tool you want to use on the Image. For example, "Shell" can be shell customizer
         * Expected value is 'WindowsUpdate'.
         */
        type: "WindowsUpdate";
        /**
         * Maximum number of updates to apply at a time. Omit or specify 0 to use the default (1000)
         */
        updateLimit?: number;
    }
    /**
     * imageTemplateWindowsUpdateCustomizerResponseProvideDefaults sets the appropriate defaults for ImageTemplateWindowsUpdateCustomizerResponse
     */
    export function imageTemplateWindowsUpdateCustomizerResponseProvideDefaults(val: ImageTemplateWindowsUpdateCustomizerResponse): ImageTemplateWindowsUpdateCustomizerResponse {
        return {
            ...val,
            updateLimit: (val.updateLimit) ?? 0,
        };
    }

    /**
     * Purchase plan configuration for platform image.
     */
    export interface PlatformImagePurchasePlanResponse {
        /**
         * Name of the purchase plan.
         */
        planName: string;
        /**
         * Product of the purchase plan.
         */
        planProduct: string;
        /**
         * Publisher of the purchase plan.
         */
        planPublisher: string;
    }

    /**
     * Describes the error happened when create or update an image template
     */
    export interface ProvisioningErrorResponse {
        /**
         * Verbose error message about the provisioning failure
         */
        message?: string;
        /**
         * Error code of the provisioning failure
         */
        provisioningErrorCode?: string;
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
     * Describes the target region information.
     */
    export interface TargetRegionResponse {
        /**
         * The name of the region.
         */
        name: string;
        /**
         * The number of replicas of the Image Version to be created in this region. Omit to use the default (1).
         */
        replicaCount?: number;
        /**
         * Specifies the storage account type to be used to store the image in this region. Omit to use the default (Standard_LRS).
         */
        storageAccountType?: string;
    }
    /**
     * targetRegionResponseProvideDefaults sets the appropriate defaults for TargetRegionResponse
     */
    export function targetRegionResponseProvideDefaults(val: TargetRegionResponse): TargetRegionResponse {
        return {
            ...val,
            replicaCount: (val.replicaCount) ?? 1,
        };
    }

    /**
     * Describes the status of a trigger
     */
    export interface TriggerStatusResponse {
        /**
         * The status code.
         */
        code: string;
        /**
         * The detailed status message, including for alerts and error messages.
         */
        message: string;
        /**
         * The time of the status.
         */
        time: string;
    }

    /**
     * User assigned identity properties
     */
    export interface UserAssignedIdentityResponse {
        /**
         * The client ID of the assigned identity.
         */
        clientId: string;
        /**
         * The principal ID of the assigned identity.
         */
        principalId: string;
    }

    /**
     * Virtual Network configuration.
     */
    export interface VirtualNetworkConfigResponse {
        /**
         * Size of the proxy virtual machine used to pass traffic to the build VM and validation VM. Omit or specify empty string to use the default (Standard_A1_v2).
         */
        proxyVmSize?: string;
        /**
         * Resource id of a pre-existing subnet.
         */
        subnetId?: string;
    }
    /**
     * virtualNetworkConfigResponseProvideDefaults sets the appropriate defaults for VirtualNetworkConfigResponse
     */
    export function virtualNetworkConfigResponseProvideDefaults(val: VirtualNetworkConfigResponse): VirtualNetworkConfigResponse {
        return {
            ...val,
            proxyVmSize: (val.proxyVmSize) ?? "",
        };
    }
