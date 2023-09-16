import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * A member of the Fleet. It contains a reference to an existing Kubernetes cluster on Azure.
 */
export function getFleetMember(args: GetFleetMemberArgs, opts?: pulumi.InvokeOptions): Promise<GetFleetMemberResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerservice/v20220702preview:getFleetMember", {
        "fleetMemberName": args.fleetMemberName,
        "fleetName": args.fleetName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFleetMemberArgs {
    /**
     * The name of the Fleet member resource.
     */
    fleetMemberName: string;
    /**
     * The name of the Fleet resource.
     */
    fleetName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A member of the Fleet. It contains a reference to an existing Kubernetes cluster on Azure.
 */
export interface GetFleetMemberResult {
    /**
     * The ARM resource id of the cluster that joins the Fleet. Must be a valid Azure resource id. e.g.: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{clusterName}'.
     */
    readonly clusterResourceId?: string;
    /**
     * Resource Etag.
     */
    readonly etag: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of the last accepted operation.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.containerservice.v20220702preview.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * A member of the Fleet. It contains a reference to an existing Kubernetes cluster on Azure.
 */
export function getFleetMemberOutput(args: GetFleetMemberOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFleetMemberResult> {
    return pulumi.output(args).apply((a: any) => getFleetMember(a, opts))
}

export interface GetFleetMemberOutputArgs {
    /**
     * The name of the Fleet member resource.
     */
    fleetMemberName: pulumi.Input<string>;
    /**
     * The name of the Fleet resource.
     */
    fleetName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
