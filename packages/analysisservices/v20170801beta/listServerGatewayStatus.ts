import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Return the gateway status of the specified Analysis Services server instance.
 */
export function listServerGatewayStatus(args: ListServerGatewayStatusArgs, opts?: pulumi.InvokeOptions): Promise<ListServerGatewayStatusResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:analysisservices/v20170801beta:listServerGatewayStatus", {
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface ListServerGatewayStatusArgs {
    /**
     * The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
     */
    resourceGroupName: string;
    /**
     * The name of the Analysis Services server.
     */
    serverName: string;
}

/**
 * Status of gateway is live.
 */
export interface ListServerGatewayStatusResult {
    /**
     * Live message of list gateway. Status: 0 - Live
     */
    readonly status?: number;
}
/**
 * Return the gateway status of the specified Analysis Services server instance.
 */
export function listServerGatewayStatusOutput(args: ListServerGatewayStatusOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListServerGatewayStatusResult> {
    return pulumi.output(args).apply((a: any) => listServerGatewayStatus(a, opts))
}

export interface ListServerGatewayStatusOutputArgs {
    /**
     * The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Analysis Services server.
     */
    serverName: pulumi.Input<string>;
}
