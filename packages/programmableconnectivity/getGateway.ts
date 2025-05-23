import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Gateway resource by name.
 *
 * Uses Azure REST API version 2024-01-15-preview.
 *
 * Other available API versions: 2025-03-30-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native programmableconnectivity [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getGateway(args: GetGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetGatewayResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:programmableconnectivity:getGateway", {
        "gatewayName": args.gatewayName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetGatewayArgs {
    /**
     * Azure Programmable Connectivity Gateway Name.
     */
    gatewayName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A Programmable Connectivity Gateway resource.
 */
export interface GetGatewayResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Base URL of the Gateway resource. This is the URL that the users would use to make Network API requests to the Operators via Azure.
     */
    readonly gatewayBaseUrl: string;
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
     * List of Operator API Connections selected by the user.
     */
    readonly operatorApiConnections: string[];
    /**
     * The status of the last operation on the Gateway resource.
     */
    readonly provisioningState: string;
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
 * Get a Gateway resource by name.
 *
 * Uses Azure REST API version 2024-01-15-preview.
 *
 * Other available API versions: 2025-03-30-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native programmableconnectivity [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getGatewayOutput(args: GetGatewayOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetGatewayResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:programmableconnectivity:getGateway", {
        "gatewayName": args.gatewayName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetGatewayOutputArgs {
    /**
     * Azure Programmable Connectivity Gateway Name.
     */
    gatewayName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}