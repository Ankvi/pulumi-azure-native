import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Dapr Component.
 */
export function getDaprComponent(args: GetDaprComponentArgs, opts?: pulumi.InvokeOptions): Promise<GetDaprComponentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:app/v20220101preview:getDaprComponent", {
        "environmentName": args.environmentName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDaprComponentArgs {
    /**
     * Name of the Managed Environment.
     */
    environmentName: string;
    /**
     * Name of the Dapr Component.
     */
    name: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Dapr Component.
 */
export interface GetDaprComponentResult {
    /**
     * Component type
     */
    readonly componentType?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Boolean describing if the component errors are ignores
     */
    readonly ignoreErrors?: boolean;
    /**
     * Initialization timeout
     */
    readonly initTimeout?: string;
    /**
     * Component metadata
     */
    readonly metadata?: types.outputs.app.v20220101preview.DaprMetadataResponse[];
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Names of container apps that can use this Dapr component
     */
    readonly scopes?: string[];
    /**
     * Collection of secrets used by a Dapr component
     */
    readonly secrets?: types.outputs.app.v20220101preview.SecretResponse[];
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.app.v20220101preview.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Component version
     */
    readonly version?: string;
}
/**
 * Dapr Component.
 */
export function getDaprComponentOutput(args: GetDaprComponentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDaprComponentResult> {
    return pulumi.output(args).apply((a: any) => getDaprComponent(a, opts))
}

export interface GetDaprComponentOutputArgs {
    /**
     * Name of the Managed Environment.
     */
    environmentName: pulumi.Input<string>;
    /**
     * Name of the Dapr Component.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
