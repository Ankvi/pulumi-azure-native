import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a ApplicationResource
 * Azure REST API version: 2023-11-14-preview.
 */
export function getApplicationResource(args: GetApplicationResourceArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationResourceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:integrationspaces:getApplicationResource", {
        "applicationName": args.applicationName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
        "spaceName": args.spaceName,
    }, opts);
}

export interface GetApplicationResourceArgs {
    /**
     * The name of the Application
     */
    applicationName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the application resource.
     */
    resourceName: string;
    /**
     * The name of the space
     */
    spaceName: string;
}

/**
 * A resource under application.
 */
export interface GetApplicationResourceResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The status of the last operation.
     */
    readonly provisioningState: string;
    /**
     * The Arm id of the application resource.
     */
    readonly resourceId: string;
    /**
     * The kind of the application resource.
     */
    readonly resourceKind?: string;
    /**
     * The type of the application resource.
     */
    readonly resourceType: string;
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
 * Get a ApplicationResource
 * Azure REST API version: 2023-11-14-preview.
 */
export function getApplicationResourceOutput(args: GetApplicationResourceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApplicationResourceResult> {
    return pulumi.output(args).apply((a: any) => getApplicationResource(a, opts))
}

export interface GetApplicationResourceOutputArgs {
    /**
     * The name of the Application
     */
    applicationName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the application resource.
     */
    resourceName: pulumi.Input<string>;
    /**
     * The name of the space
     */
    spaceName: pulumi.Input<string>;
}
