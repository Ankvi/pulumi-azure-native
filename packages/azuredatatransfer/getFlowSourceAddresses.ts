import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get the source addresses for the specified flow.
 * Azure REST API version: 2024-09-27.
 */
export function getFlowSourceAddresses(args: GetFlowSourceAddressesArgs, opts?: pulumi.InvokeOptions): Promise<GetFlowSourceAddressesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azuredatatransfer:getFlowSourceAddresses", {
        "connectionName": args.connectionName,
        "flowName": args.flowName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFlowSourceAddressesArgs {
    /**
     * The name for the connection that is to be requested.
     */
    connectionName: string;
    /**
     * The name for the flow that is to be onboarded.
     */
    flowName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The source IP address and CIDR ranges of the stream
 */
export interface GetFlowSourceAddressesResult {
    /**
     * A source IP address or CIDR range
     */
    readonly sourceAddresses?: string[];
}
/**
 * Get the source addresses for the specified flow.
 * Azure REST API version: 2024-09-27.
 */
export function getFlowSourceAddressesOutput(args: GetFlowSourceAddressesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFlowSourceAddressesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azuredatatransfer:getFlowSourceAddresses", {
        "connectionName": args.connectionName,
        "flowName": args.flowName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFlowSourceAddressesOutputArgs {
    /**
     * The name for the connection that is to be requested.
     */
    connectionName: pulumi.Input<string>;
    /**
     * The name for the flow that is to be onboarded.
     */
    flowName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}