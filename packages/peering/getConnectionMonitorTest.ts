import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets an existing connection monitor test with the specified name under the given subscription, resource group and peering service.
 * Azure REST API version: 2022-10-01.
 */
export function getConnectionMonitorTest(args: GetConnectionMonitorTestArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectionMonitorTestResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:peering:getConnectionMonitorTest", {
        "connectionMonitorTestName": args.connectionMonitorTestName,
        "peeringServiceName": args.peeringServiceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetConnectionMonitorTestArgs {
    /**
     * The name of the connection monitor test
     */
    connectionMonitorTestName: string;
    /**
     * The name of the peering service.
     */
    peeringServiceName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * The Connection Monitor Test class.
 */
export interface GetConnectionMonitorTestResult {
    /**
     * The Connection Monitor test destination
     */
    readonly destination?: string;
    /**
     * The Connection Monitor test destination port
     */
    readonly destinationPort?: number;
    /**
     * The ID of the resource.
     */
    readonly id: string;
    /**
     * The flag that indicates if the Connection Monitor test is successful or not.
     */
    readonly isTestSuccessful: boolean;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The path representing the Connection Monitor test.
     */
    readonly path: string[];
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * The Connection Monitor test source agent
     */
    readonly sourceAgent?: string;
    /**
     * The Connection Monitor test frequency in seconds
     */
    readonly testFrequencyInSec?: number;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Gets an existing connection monitor test with the specified name under the given subscription, resource group and peering service.
 * Azure REST API version: 2022-10-01.
 */
export function getConnectionMonitorTestOutput(args: GetConnectionMonitorTestOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetConnectionMonitorTestResult> {
    return pulumi.output(args).apply((a: any) => getConnectionMonitorTest(a, opts))
}

export interface GetConnectionMonitorTestOutputArgs {
    /**
     * The name of the connection monitor test
     */
    connectionMonitorTestName: pulumi.Input<string>;
    /**
     * The name of the peering service.
     */
    peeringServiceName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
