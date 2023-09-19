import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Frontend
 * Azure REST API version: 2023-05-01-preview.
 */
export function getFrontendsInterface(args: GetFrontendsInterfaceArgs, opts?: pulumi.InvokeOptions): Promise<GetFrontendsInterfaceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicenetworking:getFrontendsInterface", {
        "frontendName": args.frontendName,
        "resourceGroupName": args.resourceGroupName,
        "trafficControllerName": args.trafficControllerName,
    }, opts);
}

export interface GetFrontendsInterfaceArgs {
    /**
     * Frontends
     */
    frontendName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * traffic controller name for path
     */
    trafficControllerName: string;
}

/**
 * Frontend Subresource of Traffic Controller.
 */
export interface GetFrontendsInterfaceResult {
    /**
     * The Fully Qualified Domain Name of the DNS record associated to a Traffic Controller frontend.
     */
    readonly fqdn: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Provisioning State of Traffic Controller Frontend Resource
     */
    readonly provisioningState: string;
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
}
/**
 * Get a Frontend
 * Azure REST API version: 2023-05-01-preview.
 */
export function getFrontendsInterfaceOutput(args: GetFrontendsInterfaceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFrontendsInterfaceResult> {
    return pulumi.output(args).apply((a: any) => getFrontendsInterface(a, opts))
}

export interface GetFrontendsInterfaceOutputArgs {
    /**
     * Frontends
     */
    frontendName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * traffic controller name for path
     */
    trafficControllerName: pulumi.Input<string>;
}
