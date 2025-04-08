import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Description for Gets a hybrid connection configuration by its name.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2016-08-01, 2018-02-01, 2018-11-01, 2019-08-01, 2020-06-01, 2020-09-01, 2020-10-01, 2020-12-01, 2021-01-01, 2021-01-15, 2021-02-01, 2021-03-01, 2022-03-01, 2022-09-01, 2023-01-01, 2023-12-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native web [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getWebAppRelayServiceConnectionSlot(args: GetWebAppRelayServiceConnectionSlotArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppRelayServiceConnectionSlotResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:getWebAppRelayServiceConnectionSlot", {
        "entityName": args.entityName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
}

export interface GetWebAppRelayServiceConnectionSlotArgs {
    /**
     * Name of the hybrid connection.
     */
    entityName: string;
    /**
     * Name of the app.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will get a hybrid connection for the production slot.
     */
    slot: string;
}

/**
 * Hybrid Connection for an App Service app.
 */
export interface GetWebAppRelayServiceConnectionSlotResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    readonly biztalkUri?: string;
    readonly entityConnectionString?: string;
    readonly entityName?: string;
    readonly hostname?: string;
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
    readonly port?: number;
    readonly resourceConnectionString?: string;
    readonly resourceType?: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Description for Gets a hybrid connection configuration by its name.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2016-08-01, 2018-02-01, 2018-11-01, 2019-08-01, 2020-06-01, 2020-09-01, 2020-10-01, 2020-12-01, 2021-01-01, 2021-01-15, 2021-02-01, 2021-03-01, 2022-03-01, 2022-09-01, 2023-01-01, 2023-12-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native web [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getWebAppRelayServiceConnectionSlotOutput(args: GetWebAppRelayServiceConnectionSlotOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWebAppRelayServiceConnectionSlotResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:getWebAppRelayServiceConnectionSlot", {
        "entityName": args.entityName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
}

export interface GetWebAppRelayServiceConnectionSlotOutputArgs {
    /**
     * Name of the hybrid connection.
     */
    entityName: pulumi.Input<string>;
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will get a hybrid connection for the production slot.
     */
    slot: pulumi.Input<string>;
}