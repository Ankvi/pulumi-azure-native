import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Container App Auth Token.
 * Azure REST API version: 2022-10-01.
 *
 * Other available API versions: 2023-04-01-preview, 2023-05-01, 2023-05-02-preview, 2023-08-01-preview.
 */
export function getContainerAppAuthToken(args: GetContainerAppAuthTokenArgs, opts?: pulumi.InvokeOptions): Promise<GetContainerAppAuthTokenResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:app:getContainerAppAuthToken", {
        "containerAppName": args.containerAppName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetContainerAppAuthTokenArgs {
    /**
     * Name of the Container App.
     */
    containerAppName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Container App Auth Token.
 */
export interface GetContainerAppAuthTokenResult {
    /**
     * Token expiration date.
     */
    readonly expires: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Auth token value.
     */
    readonly token: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Container App Auth Token.
 * Azure REST API version: 2022-10-01.
 *
 * Other available API versions: 2023-04-01-preview, 2023-05-01, 2023-05-02-preview, 2023-08-01-preview.
 */
export function getContainerAppAuthTokenOutput(args: GetContainerAppAuthTokenOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetContainerAppAuthTokenResult> {
    return pulumi.output(args).apply((a: any) => getContainerAppAuthToken(a, opts))
}

export interface GetContainerAppAuthTokenOutputArgs {
    /**
     * Name of the Container App.
     */
    containerAppName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}