import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get information about a virtual machine image template
 *
 * Uses Azure REST API version 2022-07-01.
 *
 * Other available API versions: 2023-07-01, 2024-02-01.
 */
export function getVirtualMachineImageTemplate(args: GetVirtualMachineImageTemplateArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualMachineImageTemplateResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:virtualmachineimages:getVirtualMachineImageTemplate", {
        "imageTemplateName": args.imageTemplateName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetVirtualMachineImageTemplateArgs {
    /**
     * The name of the image Template
     */
    imageTemplateName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Image template is an ARM resource managed by Microsoft.VirtualMachineImages provider
 */
export interface GetVirtualMachineImageTemplateResult {
    /**
     * Maximum duration to wait while building the image template (includes all customizations, optimization, validations, and distributions). Omit or specify 0 to use the default (4 hours).
     */
    readonly buildTimeoutInMinutes?: number;
    /**
     * Specifies the properties used to describe the customization steps of the image, like Image source etc
     */
    readonly customize?: (types.outputs.ImageTemplateFileCustomizerResponse | types.outputs.ImageTemplatePowerShellCustomizerResponse | types.outputs.ImageTemplateRestartCustomizerResponse | types.outputs.ImageTemplateShellCustomizerResponse | types.outputs.ImageTemplateWindowsUpdateCustomizerResponse)[];
    /**
     * The distribution targets where the image output needs to go to.
     */
    readonly distribute: (types.outputs.ImageTemplateManagedImageDistributorResponse | types.outputs.ImageTemplateSharedImageDistributorResponse | types.outputs.ImageTemplateVhdDistributorResponse)[];
    /**
     * The staging resource group id in the same subscription as the image template that will be used to build the image. This read-only field differs from 'stagingResourceGroup' only if the value specified in the 'stagingResourceGroup' field is empty.
     */
    readonly exactStagingResourceGroup: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The identity of the image template, if configured.
     */
    readonly identity: types.outputs.ImageTemplateIdentityResponse;
    /**
     * State of 'run' that is currently executing or was last executed.
     */
    readonly lastRunStatus: types.outputs.ImageTemplateLastRunStatusResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Specifies optimization to be performed on image.
     */
    readonly optimize?: types.outputs.ImageTemplatePropertiesResponseOptimize;
    /**
     * Provisioning error, if any
     */
    readonly provisioningError: types.outputs.ProvisioningErrorResponse;
    /**
     * Provisioning state of the resource
     */
    readonly provisioningState: string;
    /**
     * Specifies the properties used to describe the source image.
     */
    readonly source: types.outputs.ImageTemplateManagedImageSourceResponse | types.outputs.ImageTemplatePlatformImageSourceResponse | types.outputs.ImageTemplateSharedImageVersionSourceResponse;
    /**
     * The staging resource group id in the same subscription as the image template that will be used to build the image. If this field is empty, a resource group with a random name will be created. If the resource group specified in this field doesn't exist, it will be created with the same name. If the resource group specified exists, it must be empty and in the same region as the image template. The resource group created will be deleted during template deletion if this field is empty or the resource group specified doesn't exist, but if the resource group specified exists the resources created in the resource group will be deleted during template deletion and the resource group itself will remain.
     */
    readonly stagingResourceGroup?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Configuration options and list of validations to be performed on the resulting image.
     */
    readonly validate?: types.outputs.ImageTemplatePropertiesResponseValidate;
    /**
     * Describes how virtual machine is set up to build images
     */
    readonly vmProfile?: types.outputs.ImageTemplateVmProfileResponse;
}
/**
 * Get information about a virtual machine image template
 *
 * Uses Azure REST API version 2022-07-01.
 *
 * Other available API versions: 2023-07-01, 2024-02-01.
 */
export function getVirtualMachineImageTemplateOutput(args: GetVirtualMachineImageTemplateOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetVirtualMachineImageTemplateResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:virtualmachineimages:getVirtualMachineImageTemplate", {
        "imageTemplateName": args.imageTemplateName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetVirtualMachineImageTemplateOutputArgs {
    /**
     * The name of the image Template
     */
    imageTemplateName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}