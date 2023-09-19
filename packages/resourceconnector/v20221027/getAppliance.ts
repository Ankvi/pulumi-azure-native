import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of an Appliance with a specified resource group and name.
 */
export function getAppliance(args: GetApplianceArgs, opts?: pulumi.InvokeOptions): Promise<GetApplianceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:resourceconnector/v20221027:getAppliance", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetApplianceArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Appliances name.
     */
    resourceName: string;
}

/**
 * Appliances definition.
 */
export interface GetApplianceResult {
    /**
     * Represents a supported Fabric/Infra. (AKSEdge etc...).
     */
    readonly distro?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Identity for the resource.
     */
    readonly identity?: types.outputs.IdentityResponse;
    /**
     * Contains infrastructure information about the Appliance
     */
    readonly infrastructureConfig?: types.outputs.AppliancePropertiesResponseInfrastructureConfig;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The current deployment or provisioning state, which only appears in the response.
     */
    readonly provisioningState: string;
    /**
     * Certificates pair used to download MSI certificate from HIS. Can only be set once.
     */
    readonly publicKey?: string;
    /**
     * Appliance’s health and state of connection to on-prem
     */
    readonly status: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Version of the Appliance
     */
    readonly version?: string;
}
/**
 * Gets the details of an Appliance with a specified resource group and name.
 */
export function getApplianceOutput(args: GetApplianceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApplianceResult> {
    return pulumi.output(args).apply((a: any) => getAppliance(a, opts))
}

export interface GetApplianceOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Appliances name.
     */
    resourceName: pulumi.Input<string>;
}
