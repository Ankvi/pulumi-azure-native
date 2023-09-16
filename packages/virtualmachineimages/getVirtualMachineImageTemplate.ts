import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get information about a virtual machine image template
 * Azure REST API version: 2022-07-01.
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
    readonly customize?: (types.outputs.virtualmachineimages.ImageTemplateFileCustomizerResponse | types.outputs.virtualmachineimages.ImageTemplatePowerShellCustomizerResponse | types.outputs.virtualmachineimages.ImageTemplateRestartCustomizerResponse | types.outputs.virtualmachineimages.ImageTemplateShellCustomizerResponse | types.outputs.virtualmachineimages.ImageTemplateWindowsUpdateCustomizerResponse)[];
    /**
     * The distribution targets where the image output needs to go to.
     */
    readonly distribute: (types.outputs.virtualmachineimages.ImageTemplateManagedImageDistributorResponse | types.outputs.virtualmachineimages.ImageTemplateSharedImageDistributorResponse | types.outputs.virtualmachineimages.ImageTemplateVhdDistributorResponse)[];
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
    readonly identity: types.outputs.virtualmachineimages.ImageTemplateIdentityResponse;
    /**
     * State of 'run' that is currently executing or was last executed.
     */
    readonly lastRunStatus: types.outputs.virtualmachineimages.ImageTemplateLastRunStatusResponse;
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
    readonly optimize?: types.outputs.virtualmachineimages.ImageTemplatePropertiesResponseOptimize;
    /**
     * Provisioning error, if any
     */
    readonly provisioningError: types.outputs.virtualmachineimages.ProvisioningErrorResponse;
    /**
     * Provisioning state of the resource
     */
    readonly provisioningState: string;
    /**
     * Specifies the properties used to describe the source image.
     */
    readonly source: types.outputs.virtualmachineimages.ImageTemplateManagedImageSourceResponse | types.outputs.virtualmachineimages.ImageTemplatePlatformImageSourceResponse | types.outputs.virtualmachineimages.ImageTemplateSharedImageVersionSourceResponse;
    /**
     * The staging resource group id in the same subscription as the image template that will be used to build the image. If this field is empty, a resource group with a random name will be created. If the resource group specified in this field doesn't exist, it will be created with the same name. If the resource group specified exists, it must be empty and in the same region as the image template. The resource group created will be deleted during template deletion if this field is empty or the resource group specified doesn't exist, but if the resource group specified exists the resources created in the resource group will be deleted during template deletion and the resource group itself will remain.
     */
    readonly stagingResourceGroup?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.virtualmachineimages.SystemDataResponse;
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
    readonly validate?: types.outputs.virtualmachineimages.ImageTemplatePropertiesResponseValidate;
    /**
     * Describes how virtual machine is set up to build images
     */
    readonly vmProfile?: types.outputs.virtualmachineimages.ImageTemplateVmProfileResponse;
}
/**
 * Get information about a virtual machine image template
 * Azure REST API version: 2022-07-01.
 */
export function getVirtualMachineImageTemplateOutput(args: GetVirtualMachineImageTemplateOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualMachineImageTemplateResult> {
    return pulumi.output(args).apply((a: any) => getVirtualMachineImageTemplate(a, opts))
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
