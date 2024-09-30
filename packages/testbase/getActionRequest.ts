import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the action request under the specified test base account.
 * Azure REST API version: 2023-11-01-preview.
 */
export function getActionRequest(args: GetActionRequestArgs, opts?: pulumi.InvokeOptions): Promise<GetActionRequestResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:testbase:getActionRequest", {
        "actionRequestName": args.actionRequestName,
        "resourceGroupName": args.resourceGroupName,
        "testBaseAccountName": args.testBaseAccountName,
    }, opts);
}

export interface GetActionRequestArgs {
    actionRequestName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The resource name of the Test Base Account.
     */
    testBaseAccountName: string;
}

export interface GetActionRequestResult {
    readonly creationDate: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    readonly preReleaseAccessRequestSpec?: types.outputs.PreReleaseAccessRequestSpecResponse;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
    readonly requestType: string;
    readonly status: string;
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
 * Get the action request under the specified test base account.
 * Azure REST API version: 2023-11-01-preview.
 */
export function getActionRequestOutput(args: GetActionRequestOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetActionRequestResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:testbase:getActionRequest", {
        "actionRequestName": args.actionRequestName,
        "resourceGroupName": args.resourceGroupName,
        "testBaseAccountName": args.testBaseAccountName,
    }, opts);
}

export interface GetActionRequestOutputArgs {
    actionRequestName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The resource name of the Test Base Account.
     */
    testBaseAccountName: pulumi.Input<string>;
}