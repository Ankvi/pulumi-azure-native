import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an integration runtime.
 */
export function getIntegrationRuntime(args: GetIntegrationRuntimeArgs, opts?: pulumi.InvokeOptions): Promise<GetIntegrationRuntimeResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datafactory/v20180601:getIntegrationRuntime", {
        "factoryName": args.factoryName,
        "integrationRuntimeName": args.integrationRuntimeName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIntegrationRuntimeArgs {
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
 * Integration runtime resource type.
 */
export interface GetIntegrationRuntimeResult {
    /**
     * Etag identifies change in the resource.
     */
    readonly etag: string;
    /**
     * The resource identifier.
     */
    readonly id: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * Integration runtime properties.
     */
    readonly properties: types.outputs.ManagedIntegrationRuntimeResponse | types.outputs.SelfHostedIntegrationRuntimeResponse;
    /**
     * The resource type.
     */
    readonly type: string;
}
/**
 * Gets an integration runtime.
 */
export function getIntegrationRuntimeOutput(args: GetIntegrationRuntimeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIntegrationRuntimeResult> {
    return pulumi.output(args).apply((a: any) => getIntegrationRuntime(a, opts))
}

export interface GetIntegrationRuntimeOutputArgs {
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
