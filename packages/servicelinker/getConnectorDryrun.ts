import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * get a dryrun job
 * Azure REST API version: 2022-11-01-preview.
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
    readonly operationPreviews: types.outputs.servicelinker.DryrunOperationPreviewResponse[];
    /**
     * The parameters of the dryrun
     */
    readonly parameters?: types.outputs.servicelinker.CreateOrUpdateDryrunParametersResponse;
    /**
     * the result of the dryrun
     */
    readonly prerequisiteResults: (types.outputs.servicelinker.BasicErrorDryrunPrerequisiteResultResponse | types.outputs.servicelinker.PermissionsMissingDryrunPrerequisiteResultResponse)[];
    /**
     * The provisioning state. 
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.servicelinker.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * get a dryrun job
 * Azure REST API version: 2022-11-01-preview.
 */
export function getConnectorDryrunOutput(args: GetConnectorDryrunOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetConnectorDryrunResult> {
    return pulumi.output(args).apply((a: any) => getConnectorDryrun(a, opts))
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
