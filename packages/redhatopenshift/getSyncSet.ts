import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The operation returns properties of a SyncSet.
 *
 * Uses Azure REST API version 2023-11-22.
 *
 * Other available API versions: 2022-09-04, 2023-04-01, 2023-07-01-preview, 2023-09-04. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native redhatopenshift [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSyncSet(args: GetSyncSetArgs, opts?: pulumi.InvokeOptions): Promise<GetSyncSetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:redhatopenshift:getSyncSet", {
        "childResourceName": args.childResourceName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetSyncSetArgs {
    /**
     * The name of the SyncSet resource.
     */
    childResourceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the OpenShift cluster resource.
     */
    resourceName: string;
}

/**
 * SyncSet represents a SyncSet for an Azure Red Hat OpenShift Cluster.
 */
export interface GetSyncSetResult {
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
     * Resources represents the SyncSets configuration.
     */
    readonly resources?: string;
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
 * The operation returns properties of a SyncSet.
 *
 * Uses Azure REST API version 2023-11-22.
 *
 * Other available API versions: 2022-09-04, 2023-04-01, 2023-07-01-preview, 2023-09-04. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native redhatopenshift [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSyncSetOutput(args: GetSyncSetOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSyncSetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:redhatopenshift:getSyncSet", {
        "childResourceName": args.childResourceName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetSyncSetOutputArgs {
    /**
     * The name of the SyncSet resource.
     */
    childResourceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the OpenShift cluster resource.
     */
    resourceName: pulumi.Input<string>;
}