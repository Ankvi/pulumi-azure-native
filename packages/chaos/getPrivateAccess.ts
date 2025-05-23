import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a private access resource
 *
 * Uses Azure REST API version 2024-03-22-preview.
 *
 * Other available API versions: 2023-10-27-preview, 2024-11-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native chaos [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getPrivateAccess(args: GetPrivateAccessArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateAccessResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:chaos:getPrivateAccess", {
        "privateAccessName": args.privateAccessName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPrivateAccessArgs {
    /**
     * The name of the private access resource that is being created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
     */
    privateAccessName: string;
    /**
     * String that represents an Azure resource group.
     */
    resourceGroupName: string;
}

/**
 * PrivateAccesses tracked resource.
 */
export interface GetPrivateAccessResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
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
     * A readonly collection of private endpoint connection. Currently only one endpoint connection is supported.
     */
    readonly privateEndpointConnections: types.outputs.PrivateEndpointConnectionResponse[];
    /**
     * Most recent provisioning state for the given privateAccess resource.
     */
    readonly provisioningState: string;
    /**
     * Public Network Access Control for PrivateAccess resource.
     */
    readonly publicNetworkAccess?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a private access resource
 *
 * Uses Azure REST API version 2024-03-22-preview.
 *
 * Other available API versions: 2023-10-27-preview, 2024-11-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native chaos [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getPrivateAccessOutput(args: GetPrivateAccessOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPrivateAccessResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:chaos:getPrivateAccess", {
        "privateAccessName": args.privateAccessName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPrivateAccessOutputArgs {
    /**
     * The name of the private access resource that is being created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
     */
    privateAccessName: pulumi.Input<string>;
    /**
     * String that represents an Azure resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}