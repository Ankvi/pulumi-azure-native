import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * get a dryrun job
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-04-01-preview, 2024-07-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native servicelinker [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getConnectorDryrun(args: GetConnectorDryrunArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectorDryrunResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicelinker:getConnectorDryrun", {
        "dryrunName": args.dryrunName,
        "location": args.location,
        "resourceGroupName": args.resourceGroupName,
        "subscriptionId": args.subscriptionId,
    }, opts);
}

export interface GetConnectorDryrunArgs {
    /**
     * The name of dryrun.
     */
    dryrunName: string;
    /**
     * The name of Azure region.
     */
    location: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The ID of the target subscription.
     */
    subscriptionId?: string;
}

/**
 * a dryrun job resource
 */
export interface GetConnectorDryrunResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * the preview of the operations for creation
     */
    readonly operationPreviews: types.outputs.DryrunOperationPreviewResponse[];
    /**
     * The parameters of the dryrun
     */
    readonly parameters?: types.outputs.CreateOrUpdateDryrunParametersResponse;
    /**
     * the result of the dryrun
     */
    readonly prerequisiteResults: (types.outputs.BasicErrorDryrunPrerequisiteResultResponse | types.outputs.PermissionsMissingDryrunPrerequisiteResultResponse)[];
    /**
     * The provisioning state. 
     */
    readonly provisioningState: string;
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
 * get a dryrun job
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-04-01-preview, 2024-07-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native servicelinker [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getConnectorDryrunOutput(args: GetConnectorDryrunOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetConnectorDryrunResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:servicelinker:getConnectorDryrun", {
        "dryrunName": args.dryrunName,
        "location": args.location,
        "resourceGroupName": args.resourceGroupName,
        "subscriptionId": args.subscriptionId,
    }, opts);
}

export interface GetConnectorDryrunOutputArgs {
    /**
     * The name of dryrun.
     */
    dryrunName: pulumi.Input<string>;
    /**
     * The name of Azure region.
     */
    location: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The ID of the target subscription.
     */
    subscriptionId?: pulumi.Input<string>;
}