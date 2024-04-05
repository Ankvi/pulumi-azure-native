import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a Dev Box definition
 */
export function getDevBoxDefinition(args: GetDevBoxDefinitionArgs, opts?: pulumi.InvokeOptions): Promise<GetDevBoxDefinitionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devcenter/v20230401:getDevBoxDefinition", {
        "devBoxDefinitionName": args.devBoxDefinitionName,
        "devCenterName": args.devCenterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDevBoxDefinitionArgs {
    /**
     * The name of the Dev Box definition.
     */
    devBoxDefinitionName: string;
    /**
     * The name of the devcenter.
     */
    devCenterName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Represents a definition for a Developer Machine.
 */
export interface GetDevBoxDefinitionResult {
    /**
     * Image reference information for the currently active image (only populated during updates).
     */
    readonly activeImageReference: types.outputs.ImageReferenceResponse;
    /**
     * Indicates whether Dev Boxes created with this definition are capable of hibernation. Not all images are capable of supporting hibernation. To find out more see https://aka.ms/devbox/hibernate
     */
    readonly hibernateSupport?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Image reference information.
     */
    readonly imageReference: types.outputs.ImageReferenceResponse;
    /**
     * Details for image validator error. Populated when the image validation is not successful.
     */
    readonly imageValidationErrorDetails: types.outputs.ImageValidationErrorDetailsResponse;
    /**
     * Validation status of the configured image.
     */
    readonly imageValidationStatus: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The storage type used for the Operating System disk of Dev Boxes created using this definition.
     */
    readonly osStorageType?: string;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * The SKU for Dev Boxes created using this definition.
     */
    readonly sku: types.outputs.SkuResponse;
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
}
/**
 * Gets a Dev Box definition
 */
export function getDevBoxDefinitionOutput(args: GetDevBoxDefinitionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDevBoxDefinitionResult> {
    return pulumi.output(args).apply((a: any) => getDevBoxDefinition(a, opts))
}

export interface GetDevBoxDefinitionOutputArgs {
    /**
     * The name of the Dev Box definition.
     */
    devBoxDefinitionName: pulumi.Input<string>;
    /**
     * The name of the devcenter.
     */
    devCenterName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}