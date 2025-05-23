import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets detailed status information for an integration runtime.
 *
 * Uses Azure REST API version 2018-06-01.
 */
export function getIntegrationRuntimeStatus(args: GetIntegrationRuntimeStatusArgs, opts?: pulumi.InvokeOptions): Promise<GetIntegrationRuntimeStatusResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datafactory:getIntegrationRuntimeStatus", {
        "factoryName": args.factoryName,
        "integrationRuntimeName": args.integrationRuntimeName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIntegrationRuntimeStatusArgs {
    /**
     * The factory name.
     */
    factoryName: string;
    /**
     * The integration runtime name.
     */
    integrationRuntimeName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

/**
 * Integration runtime status response.
 */
export interface GetIntegrationRuntimeStatusResult {
    /**
     * The integration runtime name.
     */
    readonly name: string;
    /**
     * Integration runtime properties.
     */
    readonly properties: types.outputs.ManagedIntegrationRuntimeStatusResponse | types.outputs.SelfHostedIntegrationRuntimeStatusResponse;
}
/**
 * Gets detailed status information for an integration runtime.
 *
 * Uses Azure REST API version 2018-06-01.
 */
export function getIntegrationRuntimeStatusOutput(args: GetIntegrationRuntimeStatusOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetIntegrationRuntimeStatusResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:datafactory:getIntegrationRuntimeStatus", {
        "factoryName": args.factoryName,
        "integrationRuntimeName": args.integrationRuntimeName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIntegrationRuntimeStatusOutputArgs {
    /**
     * The factory name.
     */
    factoryName: pulumi.Input<string>;
    /**
     * The integration runtime name.
     */
    integrationRuntimeName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}