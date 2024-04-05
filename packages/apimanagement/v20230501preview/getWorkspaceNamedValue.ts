import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of the named value specified by its identifier.
 */
export function getWorkspaceNamedValue(args: GetWorkspaceNamedValueArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkspaceNamedValueResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement/v20230501preview:getWorkspaceNamedValue", {
        "namedValueId": args.namedValueId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "workspaceId": args.workspaceId,
    }, opts);
}

export interface GetWorkspaceNamedValueArgs {
    /**
     * Identifier of the NamedValue.
     */
    namedValueId: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    serviceName: string;
    /**
     * Workspace identifier. Must be unique in the current API Management service instance.
     */
    workspaceId: string;
}

/**
 * NamedValue details.
 */
export interface GetWorkspaceNamedValueResult {
    /**
     * Unique name of NamedValue. It may contain only letters, digits, period, dash, and underscore characters.
     */
    readonly displayName: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * KeyVault location details of the namedValue.
     */
    readonly keyVault?: types.outputs.KeyVaultContractPropertiesResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state
     */
    readonly provisioningState: string;
    /**
     * Determines whether the value is a secret and should be encrypted or not. Default value is false.
     */
    readonly secret?: boolean;
    /**
     * Optional tags that when provided can be used to filter the NamedValue list.
     */
    readonly tags?: string[];
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Value of the NamedValue. Can contain policy expressions. It may not be empty or consist only of whitespace. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
     */
    readonly value?: string;
}
/**
 * Gets the details of the named value specified by its identifier.
 */
export function getWorkspaceNamedValueOutput(args: GetWorkspaceNamedValueOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWorkspaceNamedValueResult> {
    return pulumi.output(args).apply((a: any) => getWorkspaceNamedValue(a, opts))
}

export interface GetWorkspaceNamedValueOutputArgs {
    /**
     * Identifier of the NamedValue.
     */
    namedValueId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * Workspace identifier. Must be unique in the current API Management service instance.
     */
    workspaceId: pulumi.Input<string>;
}