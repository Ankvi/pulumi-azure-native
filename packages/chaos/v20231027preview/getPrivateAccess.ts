import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a private access resource
 */
export function getPrivateAccess(args: GetPrivateAccessArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateAccessResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:chaos/v20231027preview:getPrivateAccess", {
        "privateAccessName": args.privateAccessName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPrivateAccessArgs {
    /**
     * The name of the private access resource that is being created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
     */
    privateAccessName: string;
    /**
     * String that represents an Azure resource group.
     */
    resourceGroupName: string;
}

/**
 * PrivateAccesses tracked resource.
 */
export interface GetPrivateAccessResult {
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
     * A readonly collection of private endpoint connection. Currently only one endpoint connection is supported.
     */
    readonly privateEndpointConnections: types.outputs.PrivateEndpointConnectionResponse[];
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
 * Get a private access resource
 */
export function getPrivateAccessOutput(args: GetPrivateAccessOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPrivateAccessResult> {
    return pulumi.output(args).apply((a: any) => getPrivateAccess(a, opts))
}

export interface GetPrivateAccessOutputArgs {
    /**
     * The name of the private access resource that is being created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
     */
    privateAccessName: pulumi.Input<string>;
    /**
     * String that represents an Azure resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
