import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Description for Gets a Swift Virtual Network connection.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2018-02-01, 2018-11-01, 2019-08-01, 2020-06-01, 2020-09-01, 2020-10-01, 2021-01-15, 2021-02-01, 2021-03-01, 2022-03-01, 2022-09-01, 2023-01-01, 2023-12-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native web [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getWebAppSwiftVirtualNetworkConnectionSlot(args: GetWebAppSwiftVirtualNetworkConnectionSlotArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppSwiftVirtualNetworkConnectionSlotResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:getWebAppSwiftVirtualNetworkConnectionSlot", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
}

export interface GetWebAppSwiftVirtualNetworkConnectionSlotArgs {
    /**
     * Name of the app.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will get a gateway for the production slot's Virtual Network.
     */
    slot: string;
}

/**
 * Swift Virtual Network Contract. This is used to enable the new Swift way of doing virtual network integration.
 */
export interface GetWebAppSwiftVirtualNetworkConnectionSlotResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * The Virtual Network subnet's resource ID. This is the subnet that this Web App will join. This subnet must have a delegation to Microsoft.Web/serverFarms defined first.
     */
    readonly subnetResourceId?: string;
    /**
     * A flag that specifies if the scale unit this Web App is on supports Swift integration.
     */
    readonly swiftSupported?: boolean;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Description for Gets a Swift Virtual Network connection.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2018-02-01, 2018-11-01, 2019-08-01, 2020-06-01, 2020-09-01, 2020-10-01, 2021-01-15, 2021-02-01, 2021-03-01, 2022-03-01, 2022-09-01, 2023-01-01, 2023-12-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native web [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getWebAppSwiftVirtualNetworkConnectionSlotOutput(args: GetWebAppSwiftVirtualNetworkConnectionSlotOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWebAppSwiftVirtualNetworkConnectionSlotResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:getWebAppSwiftVirtualNetworkConnectionSlot", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
}

export interface GetWebAppSwiftVirtualNetworkConnectionSlotOutputArgs {
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will get a gateway for the production slot's Virtual Network.
     */
    slot: pulumi.Input<string>;
}