import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of the workload instance.
 */
export function getWorkloadInstance(args: GetWorkloadInstanceArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkloadInstanceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:migrate/v20220501preview:getWorkloadInstance", {
        "modernizeProjectName": args.modernizeProjectName,
        "resourceGroupName": args.resourceGroupName,
        "subscriptionId": args.subscriptionId,
        "workloadInstanceName": args.workloadInstanceName,
    }, opts);
}

export interface GetWorkloadInstanceArgs {
    /**
     * ModernizeProject name.
     */
    modernizeProjectName: string;
    /**
     * Name of the Azure Resource Group that project is part of.
     */
    resourceGroupName: string;
    /**
     * Azure Subscription Id in which project was created.
     */
    subscriptionId?: string;
    /**
     * Workload instance name.
     */
    workloadInstanceName: string;
}

/**
 * Workload instance model.
 */
export interface GetWorkloadInstanceResult {
    /**
     * Gets or sets the Id of the resource.
     */
    readonly id: string;
    /**
     * Gets or sets the name of the resource.
     */
    readonly name: string;
    /**
     * Workload instance model properties.
     */
    readonly properties: types.outputs.WorkloadInstanceModelPropertiesResponse;
    readonly systemData: types.outputs.WorkloadInstanceModelResponseSystemData;
    /**
     * Gets or sets the resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Gets or sets the type of the resource.
     */
    readonly type: string;
}
/**
 * Gets the details of the workload instance.
 */
export function getWorkloadInstanceOutput(args: GetWorkloadInstanceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWorkloadInstanceResult> {
    return pulumi.output(args).apply((a: any) => getWorkloadInstance(a, opts))
}

export interface GetWorkloadInstanceOutputArgs {
    /**
     * ModernizeProject name.
     */
    modernizeProjectName: pulumi.Input<string>;
    /**
     * Name of the Azure Resource Group that project is part of.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Azure Subscription Id in which project was created.
     */
    subscriptionId?: pulumi.Input<string>;
    /**
     * Workload instance name.
     */
    workloadInstanceName: pulumi.Input<string>;
}
