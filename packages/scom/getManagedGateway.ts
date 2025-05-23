import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieve the details of the gateway resource.
 *
 * Uses Azure REST API version 2023-07-07-preview.
 */
export function getManagedGateway(args: GetManagedGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedGatewayResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:scom:getManagedGateway", {
        "instanceName": args.instanceName,
        "managedGatewayName": args.managedGatewayName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManagedGatewayArgs {
    /**
     * Name of the SCOM managed instance.
     */
    instanceName: string;
    /**
     * The gateway resource name.
     */
    managedGatewayName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A gateway resource.
 */
export interface GetManagedGatewayResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The properties of a gateway resource.
     */
    readonly properties: types.outputs.ManagedGatewayPropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Retrieve the details of the gateway resource.
 *
 * Uses Azure REST API version 2023-07-07-preview.
 */
export function getManagedGatewayOutput(args: GetManagedGatewayOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetManagedGatewayResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:scom:getManagedGateway", {
        "instanceName": args.instanceName,
        "managedGatewayName": args.managedGatewayName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManagedGatewayOutputArgs {
    /**
     * Name of the SCOM managed instance.
     */
    instanceName: pulumi.Input<string>;
    /**
     * The gateway resource name.
     */
    managedGatewayName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}