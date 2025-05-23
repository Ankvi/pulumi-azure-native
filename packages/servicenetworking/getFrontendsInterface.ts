import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Frontend
 *
 * Uses Azure REST API version 2025-01-01.
 *
 * Other available API versions: 2023-05-01-preview, 2023-11-01, 2024-05-01-preview, 2025-03-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native servicenetworking [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getFrontendsInterface(args: GetFrontendsInterfaceArgs, opts?: pulumi.InvokeOptions): Promise<GetFrontendsInterfaceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicenetworking:getFrontendsInterface", {
        "frontendName": args.frontendName,
        "resourceGroupName": args.resourceGroupName,
        "trafficControllerName": args.trafficControllerName,
    }, opts);
}

export interface GetFrontendsInterfaceArgs {
    /**
     * Frontends
     */
    frontendName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * traffic controller name for path
     */
    trafficControllerName: string;
}

/**
 * Frontend Sub Resource of Traffic Controller.
 */
export interface GetFrontendsInterfaceResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The Fully Qualified Domain Name of the DNS record associated to a Traffic Controller frontend.
     */
    readonly fqdn: string;
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
     * Provisioning State of Traffic Controller Frontend Resource
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
 * Get a Frontend
 *
 * Uses Azure REST API version 2025-01-01.
 *
 * Other available API versions: 2023-05-01-preview, 2023-11-01, 2024-05-01-preview, 2025-03-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native servicenetworking [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getFrontendsInterfaceOutput(args: GetFrontendsInterfaceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetFrontendsInterfaceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:servicenetworking:getFrontendsInterface", {
        "frontendName": args.frontendName,
        "resourceGroupName": args.resourceGroupName,
        "trafficControllerName": args.trafficControllerName,
    }, opts);
}

export interface GetFrontendsInterfaceOutputArgs {
    /**
     * Frontends
     */
    frontendName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * traffic controller name for path
     */
    trafficControllerName: pulumi.Input<string>;
}