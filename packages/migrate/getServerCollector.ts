import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Server collector.
 * Azure REST API version: 2019-10-01.
 */
export function getServerCollector(args: GetServerCollectorArgs, opts?: pulumi.InvokeOptions): Promise<GetServerCollectorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:migrate:getServerCollector", {
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
        "serverCollectorName": args.serverCollectorName,
    }, opts);
}

export interface GetServerCollectorArgs {
    /**
     * Name of the Azure Migrate project.
     */
    projectName: string;
    /**
     * Name of the Azure Resource Group that project is part of.
     */
    resourceGroupName: string;
    /**
     * Unique name of a Server collector within a project.
     */
    serverCollectorName: string;
}

export interface GetServerCollectorResult {
    readonly eTag?: string;
    readonly id: string;
    readonly name: string;
    readonly properties: types.outputs.CollectorPropertiesResponse;
    readonly type: string;
}
/**
 * Get a Server collector.
 * Azure REST API version: 2019-10-01.
 */
export function getServerCollectorOutput(args: GetServerCollectorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServerCollectorResult> {
    return pulumi.output(args).apply((a: any) => getServerCollector(a, opts))
}

export interface GetServerCollectorOutputArgs {
    /**
     * Name of the Azure Migrate project.
     */
    projectName: pulumi.Input<string>;
    /**
     * Name of the Azure Resource Group that project is part of.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Unique name of a Server collector within a project.
     */
    serverCollectorName: pulumi.Input<string>;
}
