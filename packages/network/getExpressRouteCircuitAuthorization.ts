import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the specified authorization from the specified express route circuit.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2018-06-01, 2018-07-01, 2018-08-01, 2018-10-01, 2018-11-01, 2018-12-01, 2019-02-01, 2019-04-01, 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getExpressRouteCircuitAuthorization(args: GetExpressRouteCircuitAuthorizationArgs, opts?: pulumi.InvokeOptions): Promise<GetExpressRouteCircuitAuthorizationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getExpressRouteCircuitAuthorization", {
        "authorizationName": args.authorizationName,
        "circuitName": args.circuitName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetExpressRouteCircuitAuthorizationArgs {
    /**
     * The name of the authorization.
     */
    authorizationName: string;
    /**
     * The name of the express route circuit.
     */
    circuitName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Authorization in an ExpressRouteCircuit resource.
 */
export interface GetExpressRouteCircuitAuthorizationResult {
    /**
     * The authorization key.
     */
    readonly authorizationKey?: string;
    /**
     * The authorization use status.
     */
    readonly authorizationUseStatus?: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The reference to the ExpressRoute connection resource using the authorization.
     */
    readonly connectionResourceUri: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * The provisioning state of the authorization resource.
     */
    readonly provisioningState: string;
    /**
     * Type of the resource.
     */
    readonly type: string;
}
/**
 * Gets the specified authorization from the specified express route circuit.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2018-06-01, 2018-07-01, 2018-08-01, 2018-10-01, 2018-11-01, 2018-12-01, 2019-02-01, 2019-04-01, 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getExpressRouteCircuitAuthorizationOutput(args: GetExpressRouteCircuitAuthorizationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetExpressRouteCircuitAuthorizationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getExpressRouteCircuitAuthorization", {
        "authorizationName": args.authorizationName,
        "circuitName": args.circuitName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetExpressRouteCircuitAuthorizationOutputArgs {
    /**
     * The name of the authorization.
     */
    authorizationName: pulumi.Input<string>;
    /**
     * The name of the express route circuit.
     */
    circuitName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}