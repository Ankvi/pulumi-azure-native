import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the metadata of an IoT Central application.
 *
 * Uses Azure REST API version 2021-11-01-preview.
 *
 * Other available API versions: 2021-06-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native iotcentral [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getApp(args: GetAppArgs, opts?: pulumi.InvokeOptions): Promise<GetAppResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:iotcentral:getApp", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetAppArgs {
    /**
     * The name of the resource group that contains the IoT Central application.
     */
    resourceGroupName: string;
    /**
     * The ARM resource name of the IoT Central application.
     */
    resourceName: string;
}

/**
 * The IoT Central application.
 */
export interface GetAppResult {
    /**
     * The ID of the application.
     */
    readonly applicationId: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The display name of the application.
     */
    readonly displayName?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The managed identities for the IoT Central application.
     */
    readonly identity?: types.outputs.SystemAssignedServiceIdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Network Rule Set Properties of this IoT Central application.
     */
    readonly networkRuleSets?: types.outputs.NetworkRuleSetsResponse;
    /**
     * Private endpoint connections created on this IoT Central application.
     */
    readonly privateEndpointConnections: types.outputs.PrivateEndpointConnectionResponse[];
    /**
     * The provisioning state of the application.
     */
    readonly provisioningState: string;
    /**
     * Whether requests from the public network are allowed.
     */
    readonly publicNetworkAccess?: string;
    /**
     * A valid instance SKU.
     */
    readonly sku: types.outputs.AppSkuInfoResponse;
    /**
     * The current state of the application.
     */
    readonly state: string;
    /**
     * The subdomain of the application.
     */
    readonly subdomain?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The ID of the application template, which is a blueprint that defines the characteristics and behaviors of an application. Optional; if not specified, defaults to a blank blueprint and allows the application to be defined from scratch.
     */
    readonly template?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get the metadata of an IoT Central application.
 *
 * Uses Azure REST API version 2021-11-01-preview.
 *
 * Other available API versions: 2021-06-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native iotcentral [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAppOutput(args: GetAppOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAppResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:iotcentral:getApp", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetAppOutputArgs {
    /**
     * The name of the resource group that contains the IoT Central application.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The ARM resource name of the IoT Central application.
     */
    resourceName: pulumi.Input<string>;
}