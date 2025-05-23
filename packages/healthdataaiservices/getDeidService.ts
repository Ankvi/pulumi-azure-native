import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a DeidService
 *
 * Uses Azure REST API version 2024-09-20.
 *
 * Other available API versions: 2024-02-28-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native healthdataaiservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDeidService(args: GetDeidServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetDeidServiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:healthdataaiservices:getDeidService", {
        "deidServiceName": args.deidServiceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDeidServiceArgs {
    /**
     * The name of the deid service
     */
    deidServiceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A HealthDataAIServicesProviderHub resource
 */
export interface GetDeidServiceResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The managed service identities assigned to this resource.
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.DeidServicePropertiesResponse;
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
 * Get a DeidService
 *
 * Uses Azure REST API version 2024-09-20.
 *
 * Other available API versions: 2024-02-28-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native healthdataaiservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDeidServiceOutput(args: GetDeidServiceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDeidServiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:healthdataaiservices:getDeidService", {
        "deidServiceName": args.deidServiceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDeidServiceOutputArgs {
    /**
     * The name of the deid service
     */
    deidServiceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}