import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a EnclaveEndpointResource
 *
 * Uses Azure REST API version 2025-05-01-preview.
 *
 * Other available API versions: 2024-06-01-preview, 2024-12-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native mission [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getEnclaveEndpoint(args: GetEnclaveEndpointArgs, opts?: pulumi.InvokeOptions): Promise<GetEnclaveEndpointResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:mission:getEnclaveEndpoint", {
        "enclaveEndpointName": args.enclaveEndpointName,
        "resourceGroupName": args.resourceGroupName,
        "virtualEnclaveName": args.virtualEnclaveName,
    }, opts);
}

export interface GetEnclaveEndpointArgs {
    /**
     * The name of the Enclave Endpoint Resource
     */
    enclaveEndpointName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the enclaveResource Resource
     */
    virtualEnclaveName: string;
}

/**
 * EnclaveEndpoint Model Resource
 */
export interface GetEnclaveEndpointResult {
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
     * Provisioning State.
     */
    readonly provisioningState: string;
    /**
     * List of resource ids created by community endpoint.
     */
    readonly resourceCollection: string[];
    /**
     * Enclave Endpoint Rule Collection.
     */
    readonly ruleCollection: types.outputs.EnclaveEndpointDestinationRuleResponse[];
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
 * Get a EnclaveEndpointResource
 *
 * Uses Azure REST API version 2025-05-01-preview.
 *
 * Other available API versions: 2024-06-01-preview, 2024-12-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native mission [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getEnclaveEndpointOutput(args: GetEnclaveEndpointOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetEnclaveEndpointResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:mission:getEnclaveEndpoint", {
        "enclaveEndpointName": args.enclaveEndpointName,
        "resourceGroupName": args.resourceGroupName,
        "virtualEnclaveName": args.virtualEnclaveName,
    }, opts);
}

export interface GetEnclaveEndpointOutputArgs {
    /**
     * The name of the Enclave Endpoint Resource
     */
    enclaveEndpointName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the enclaveResource Resource
     */
    virtualEnclaveName: pulumi.Input<string>;
}