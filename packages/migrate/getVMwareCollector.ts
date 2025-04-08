import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a VMware collector.
 *
 * Uses Azure REST API version 2019-10-01.
 */
export function getVMwareCollector(args: GetVMwareCollectorArgs, opts?: pulumi.InvokeOptions): Promise<GetVMwareCollectorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:migrate:getVMwareCollector", {
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
        "vmWareCollectorName": args.vmWareCollectorName,
    }, opts);
}

export interface GetVMwareCollectorArgs {
    /**
     * Name of the Azure Migrate project.
     */
    projectName: string;
    /**
     * Name of the Azure Resource Group that project is part of.
     */
    resourceGroupName: string;
    /**
     * Unique name of a VMware collector within a project.
     */
    vmWareCollectorName: string;
}

export interface GetVMwareCollectorResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    readonly eTag?: string;
    readonly id: string;
    readonly name: string;
    readonly properties: types.outputs.CollectorPropertiesResponse;
    readonly type: string;
}
/**
 * Get a VMware collector.
 *
 * Uses Azure REST API version 2019-10-01.
 */
export function getVMwareCollectorOutput(args: GetVMwareCollectorOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetVMwareCollectorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:migrate:getVMwareCollector", {
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
        "vmWareCollectorName": args.vmWareCollectorName,
    }, opts);
}

export interface GetVMwareCollectorOutputArgs {
    /**
     * Name of the Azure Migrate project.
     */
    projectName: pulumi.Input<string>;
    /**
     * Name of the Azure Resource Group that project is part of.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Unique name of a VMware collector within a project.
     */
    vmWareCollectorName: pulumi.Input<string>;
}