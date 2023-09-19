import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Hyper-V collector.
 * Azure REST API version: 2019-10-01.
 */
export function getHyperVCollector(args: GetHyperVCollectorArgs, opts?: pulumi.InvokeOptions): Promise<GetHyperVCollectorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:migrate:getHyperVCollector", {
        "hyperVCollectorName": args.hyperVCollectorName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetHyperVCollectorArgs {
    /**
     * Unique name of a Hyper-V collector within a project.
     */
    hyperVCollectorName: string;
    /**
     * Name of the Azure Migrate project.
     */
    projectName: string;
    /**
     * Name of the Azure Resource Group that project is part of.
     */
    resourceGroupName: string;
}

export interface GetHyperVCollectorResult {
    readonly eTag?: string;
    readonly id: string;
    readonly name: string;
    readonly properties: types.outputs.CollectorPropertiesResponse;
    readonly type: string;
}
/**
 * Get a Hyper-V collector.
 * Azure REST API version: 2019-10-01.
 */
export function getHyperVCollectorOutput(args: GetHyperVCollectorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetHyperVCollectorResult> {
    return pulumi.output(args).apply((a: any) => getHyperVCollector(a, opts))
}

export interface GetHyperVCollectorOutputArgs {
    /**
     * Unique name of a Hyper-V collector within a project.
     */
    hyperVCollectorName: pulumi.Input<string>;
    /**
     * Name of the Azure Migrate project.
     */
    projectName: pulumi.Input<string>;
    /**
     * Name of the Azure Resource Group that project is part of.
     */
    resourceGroupName: pulumi.Input<string>;
}
