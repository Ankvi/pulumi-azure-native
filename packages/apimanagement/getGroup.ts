import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the details of the group specified by its identifier.
 *
 * Uses Azure REST API version 2022-08-01.
 *
 * Other available API versions: 2016-10-10, 2022-09-01-preview, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview.
 */
export function getGroup(args: GetGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement:getGroup", {
        "groupId": args.groupId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetGroupArgs {
    /**
     * Group identifier. Must be unique in the current API Management service instance.
     */
    groupId: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    serviceName: string;
}

/**
 * Contract details.
 */
export interface GetGroupResult {
    /**
     * true if the group is one of the three system groups (Administrators, Developers, or Guests); otherwise false.
     */
    readonly builtIn: boolean;
    /**
     * Group description. Can contain HTML formatting tags.
     */
    readonly description?: string;
    /**
     * Group name.
     */
    readonly displayName: string;
    /**
     * For external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory `aad://<tenant>.onmicrosoft.com/groups/<group object id>`; otherwise the value is null.
     */
    readonly externalId?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the details of the group specified by its identifier.
 *
 * Uses Azure REST API version 2022-08-01.
 *
 * Other available API versions: 2016-10-10, 2022-09-01-preview, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview.
 */
export function getGroupOutput(args: GetGroupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:apimanagement:getGroup", {
        "groupId": args.groupId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetGroupOutputArgs {
    /**
     * Group identifier. Must be unique in the current API Management service instance.
     */
    groupId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}