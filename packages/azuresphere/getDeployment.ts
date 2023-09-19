import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Deployment. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name.
 * Azure REST API version: 2022-09-01-preview.
 */
export function getDeployment(args: GetDeploymentArgs, opts?: pulumi.InvokeOptions): Promise<GetDeploymentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azuresphere:getDeployment", {
        "catalogName": args.catalogName,
        "deploymentName": args.deploymentName,
        "deviceGroupName": args.deviceGroupName,
        "productName": args.productName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDeploymentArgs {
    /**
     * Name of catalog
     */
    catalogName: string;
    /**
     * Deployment name. Use .default for deployment creation and to get the current deployment for the associated device group.
     */
    deploymentName: string;
    /**
     * Name of device group.
     */
    deviceGroupName: string;
    /**
     * Name of product.
     */
    productName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * An deployment resource belonging to a device group resource.
 */
export interface GetDeploymentResult {
    /**
     * Images deployed
     */
    readonly deployedImages?: types.outputs.ImageResponse[];
    /**
     * Deployment date UTC
     */
    readonly deploymentDateUtc: string;
    /**
     * Deployment ID
     */
    readonly deploymentId?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The status of the last operation.
     */
    readonly provisioningState: string;
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
 * Get a Deployment. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name.
 * Azure REST API version: 2022-09-01-preview.
 */
export function getDeploymentOutput(args: GetDeploymentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDeploymentResult> {
    return pulumi.output(args).apply((a: any) => getDeployment(a, opts))
}

export interface GetDeploymentOutputArgs {
    /**
     * Name of catalog
     */
    catalogName: pulumi.Input<string>;
    /**
     * Deployment name. Use .default for deployment creation and to get the current deployment for the associated device group.
     */
    deploymentName: pulumi.Input<string>;
    /**
     * Name of device group.
     */
    deviceGroupName: pulumi.Input<string>;
    /**
     * Name of product.
     */
    productName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
