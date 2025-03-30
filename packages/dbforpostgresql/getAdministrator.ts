import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about a server.
 *
 * Uses Azure REST API version 2022-12-01.
 *
 * Other available API versions: 2023-03-01-preview, 2023-06-01-preview, 2023-12-01-preview, 2024-03-01-preview, 2024-08-01, 2024-11-01-preview.
 */
export function getAdministrator(args: GetAdministratorArgs, opts?: pulumi.InvokeOptions): Promise<GetAdministratorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dbforpostgresql:getAdministrator", {
        "objectId": args.objectId,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetAdministratorArgs {
    /**
     * Guid of the objectId for the administrator.
     */
    objectId: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the server.
     */
    serverName: string;
}

/**
 * Represents an Active Directory administrator.
 */
export interface GetAdministratorResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The objectId of the Active Directory administrator.
     */
    readonly objectId?: string;
    /**
     * Active Directory administrator principal name.
     */
    readonly principalName?: string;
    /**
     * The principal type used to represent the type of Active Directory Administrator.
     */
    readonly principalType?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The tenantId of the Active Directory administrator.
     */
    readonly tenantId?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets information about a server.
 *
 * Uses Azure REST API version 2022-12-01.
 *
 * Other available API versions: 2023-03-01-preview, 2023-06-01-preview, 2023-12-01-preview, 2024-03-01-preview, 2024-08-01, 2024-11-01-preview.
 */
export function getAdministratorOutput(args: GetAdministratorOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAdministratorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:dbforpostgresql:getAdministrator", {
        "objectId": args.objectId,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetAdministratorOutputArgs {
    /**
     * Guid of the objectId for the administrator.
     */
    objectId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
}