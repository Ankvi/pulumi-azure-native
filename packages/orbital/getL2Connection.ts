import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified L2 connection in a specified resource group.
 *
 * Uses Azure REST API version 2024-03-01-preview.
 *
 * Other available API versions: 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native orbital [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getL2Connection(args: GetL2ConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetL2ConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:orbital:getL2Connection", {
        "l2ConnectionName": args.l2ConnectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetL2ConnectionArgs {
    /**
     * L2 Connection name.
     */
    l2ConnectionName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Connects an edge site to an orbital gateway and describes what layer 2 traffic to forward between them.
 */
export interface GetL2ConnectionResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Globally-unique identifier for this connection that is to be used as a circuit ID.
     */
    readonly circuitId: string;
    /**
     * A reference to an Microsoft.Orbital/edgeSites resource to route traffic for.
     */
    readonly edgeSite: types.outputs.L2ConnectionsPropertiesResponseEdgeSite;
    /**
     * A reference to an Microsoft.Orbital/groundStations resource to route traffic for.
     */
    readonly groundStation: types.outputs.L2ConnectionsPropertiesResponseGroundStation;
    /**
     * The name of the partner router to establish a connection to within the ground station.
     */
    readonly groundStationPartnerRouter: types.outputs.L2ConnectionsPropertiesResponseGroundStationPartnerRouter;
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
    /**
     * The VLAN ID for the L2 connection.
     */
    readonly vlanId: number;
}
/**
 * Gets the specified L2 connection in a specified resource group.
 *
 * Uses Azure REST API version 2024-03-01-preview.
 *
 * Other available API versions: 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native orbital [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getL2ConnectionOutput(args: GetL2ConnectionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetL2ConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:orbital:getL2Connection", {
        "l2ConnectionName": args.l2ConnectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetL2ConnectionOutputArgs {
    /**
     * L2 Connection name.
     */
    l2ConnectionName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}