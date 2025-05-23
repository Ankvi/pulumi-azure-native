import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Implements Gateway GET method.
 *
 * Uses Azure REST API version 2023-06-15.
 */
export function getInternetGateway(args: GetInternetGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetInternetGatewayResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managednetworkfabric:getInternetGateway", {
        "internetGatewayName": args.internetGatewayName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetInternetGatewayArgs {
    /**
     * Name of the Internet Gateway.
     */
    internetGatewayName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The Internet Gateway resource definition.
 */
export interface GetInternetGatewayResult {
    /**
     * Switch configuration description.
     */
    readonly annotation?: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * ARM Resource ID of the Internet Gateway Rule.
     */
    readonly internetGatewayRuleId?: string;
    /**
     * IPv4 Address of Internet Gateway.
     */
    readonly ipv4Address: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * ARM Resource ID of the Network Fabric Controller.
     */
    readonly networkFabricControllerId: string;
    /**
     * Port number of Internet Gateway.
     */
    readonly port: number;
    /**
     * Provisioning state of resource.
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
 * Implements Gateway GET method.
 *
 * Uses Azure REST API version 2023-06-15.
 */
export function getInternetGatewayOutput(args: GetInternetGatewayOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetInternetGatewayResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:managednetworkfabric:getInternetGateway", {
        "internetGatewayName": args.internetGatewayName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetInternetGatewayOutputArgs {
    /**
     * Name of the Internet Gateway.
     */
    internetGatewayName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}