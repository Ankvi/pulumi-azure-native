import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get service runner.
 * Azure REST API version: 2018-09-15.
 */
export function getServiceRunner(args: GetServiceRunnerArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceRunnerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devtestlab:getServiceRunner", {
        "labName": args.labName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetServiceRunnerArgs {
    /**
     * The name of the lab.
     */
    labName: string;
    /**
     * The name of the service runner.
     */
    name: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * A container for a managed identity to execute DevTest lab services.
 */
export interface GetServiceRunnerResult {
    /**
     * The identifier of the resource.
     */
    readonly id: string;
    /**
     * The identity of the resource.
     */
    readonly identity?: types.outputs.IdentityPropertiesResponse;
    /**
     * The location of the resource.
     */
    readonly location?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The tags of the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Get service runner.
 * Azure REST API version: 2018-09-15.
 */
export function getServiceRunnerOutput(args: GetServiceRunnerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServiceRunnerResult> {
    return pulumi.output(args).apply((a: any) => getServiceRunner(a, opts))
}

export interface GetServiceRunnerOutputArgs {
    /**
     * The name of the lab.
     */
    labName: pulumi.Input<string>;
    /**
     * The name of the service runner.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}