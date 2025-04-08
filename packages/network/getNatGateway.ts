import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified nat gateway in a specified resource group.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2019-02-01, 2019-04-01, 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getNatGateway(args: GetNatGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetNatGatewayResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getNatGateway", {
        "expand": args.expand,
        "natGatewayName": args.natGatewayName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNatGatewayArgs {
    /**
     * Expands referenced resources.
     */
    expand?: string;
    /**
     * The name of the nat gateway.
     */
    natGatewayName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Nat Gateway resource.
 */
export interface GetNatGatewayResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * The idle timeout of the nat gateway.
     */
    readonly idleTimeoutInMinutes?: number;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The provisioning state of the NAT gateway resource.
     */
    readonly provisioningState: string;
    /**
     * An array of public ip addresses associated with the nat gateway resource.
     */
    readonly publicIpAddresses?: types.outputs.SubResourceResponse[];
    /**
     * An array of public ip prefixes associated with the nat gateway resource.
     */
    readonly publicIpPrefixes?: types.outputs.SubResourceResponse[];
    /**
     * The resource GUID property of the NAT gateway resource.
     */
    readonly resourceGuid: string;
    /**
     * The nat gateway SKU.
     */
    readonly sku?: types.outputs.NatGatewaySkuResponse;
    /**
     * An array of references to the subnets using this nat gateway resource.
     */
    readonly subnets: types.outputs.SubResourceResponse[];
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * A list of availability zones denoting the zone in which Nat Gateway should be deployed.
     */
    readonly zones?: string[];
}
/**
 * Gets the specified nat gateway in a specified resource group.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2019-02-01, 2019-04-01, 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getNatGatewayOutput(args: GetNatGatewayOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetNatGatewayResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getNatGateway", {
        "expand": args.expand,
        "natGatewayName": args.natGatewayName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNatGatewayOutputArgs {
    /**
     * Expands referenced resources.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the nat gateway.
     */
    natGatewayName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}