import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get properties of a client group.
 */
export function getClientGroup(args: GetClientGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetClientGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid/v20230601preview:getClientGroup", {
        "clientGroupName": args.clientGroupName,
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetClientGroupArgs {
    /**
     * Name of the client group.
     */
    clientGroupName: string;
    /**
     * Name of the namespace.
     */
    namespaceName: string;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: string;
}

/**
 * The Client group resource.
 */
export interface GetClientGroupResult {
    /**
     * Description for the Client Group resource.
     */
    readonly description?: string;
    /**
     * Fully qualified identifier of the resource.
     */
    readonly id: string;
    /**
     * Name of the resource.
     */
    readonly name: string;
    /**
     * Provisioning state of the ClientGroup resource.
     */
    readonly provisioningState: string;
    /**
     * The grouping query for the clients.
     * Example : attributes.keyName IN ['a', 'b', 'c'].
     */
    readonly query?: string;
    /**
     * The system metadata relating to the ClientGroup resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Type of the resource.
     */
    readonly type: string;
}
/**
 * Get properties of a client group.
 */
export function getClientGroupOutput(args: GetClientGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetClientGroupResult> {
    return pulumi.output(args).apply((a: any) => getClientGroup(a, opts))
}

export interface GetClientGroupOutputArgs {
    /**
     * Name of the client group.
     */
    clientGroupName: pulumi.Input<string>;
    /**
     * Name of the namespace.
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}
