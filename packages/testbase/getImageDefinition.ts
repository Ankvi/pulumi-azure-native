import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get image properties under the image definition name created by test base custom image which derived from 'VHD' source.
 *
 * Uses Azure REST API version 2023-11-01-preview.
 */
export function getImageDefinition(args: GetImageDefinitionArgs, opts?: pulumi.InvokeOptions): Promise<GetImageDefinitionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:testbase:getImageDefinition", {
        "imageDefinitionName": args.imageDefinitionName,
        "resourceGroupName": args.resourceGroupName,
        "testBaseAccountName": args.testBaseAccountName,
    }, opts);
}

export interface GetImageDefinitionArgs {
    /**
     * The resource name of the test base image definition.
     */
    imageDefinitionName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The resource name of the Test Base Account.
     */
    testBaseAccountName: string;
}

/**
 * The test base image definition resource.
 */
export interface GetImageDefinitionResult {
    /**
     * Custom image architecture.
     */
    readonly architecture: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Custom image OS state.
     */
    readonly osState: string;
    readonly provisioningState: string;
    /**
     * Custom image security type.
     */
    readonly securityType: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get image properties under the image definition name created by test base custom image which derived from 'VHD' source.
 *
 * Uses Azure REST API version 2023-11-01-preview.
 */
export function getImageDefinitionOutput(args: GetImageDefinitionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetImageDefinitionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:testbase:getImageDefinition", {
        "imageDefinitionName": args.imageDefinitionName,
        "resourceGroupName": args.resourceGroupName,
        "testBaseAccountName": args.testBaseAccountName,
    }, opts);
}

export interface GetImageDefinitionOutputArgs {
    /**
     * The resource name of the test base image definition.
     */
    imageDefinitionName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The resource name of the Test Base Account.
     */
    testBaseAccountName: pulumi.Input<string>;
}