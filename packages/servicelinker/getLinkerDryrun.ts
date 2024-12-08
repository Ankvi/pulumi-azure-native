import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * get a dryrun job
 * Azure REST API version: 2022-11-01-preview.
 *
 * Other available API versions: 2023-04-01-preview, 2024-04-01, 2024-07-01-preview.
 */
export function getLinkerDryrun(args: GetLinkerDryrunArgs, opts?: pulumi.InvokeOptions): Promise<GetLinkerDryrunResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicelinker:getLinkerDryrun", {
        "dryrunName": args.dryrunName,
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetLinkerDryrunArgs {
    /**
     * The name of dryrun.
     */
    dryrunName: string;
    /**
     * The fully qualified Azure Resource manager identifier of the resource to be connected.
     */
    resourceUri: string;
}

/**
 * a dryrun job resource
 */
export interface GetLinkerDryrunResult {
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
 * Azure REST API version: 2022-11-01-preview.
 *
 * Other available API versions: 2023-04-01-preview, 2024-04-01, 2024-07-01-preview.
 */
export function getLinkerDryrunOutput(args: GetLinkerDryrunOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetLinkerDryrunResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:servicelinker:getLinkerDryrun", {
        "dryrunName": args.dryrunName,
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetLinkerDryrunOutputArgs {
    /**
     * The name of dryrun.
     */
    dryrunName: pulumi.Input<string>;
    /**
     * The fully qualified Azure Resource manager identifier of the resource to be connected.
     */
    resourceUri: pulumi.Input<string>;
}