import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Traffic Controller Frontend
 */
export function getFrontendsInterface(args: GetFrontendsInterfaceArgs, opts?: pulumi.InvokeOptions): Promise<GetFrontendsInterfaceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicenetworking/v20221001preview:getFrontendsInterface", {
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
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Frontend IP Address Version (Optional).
     */
    readonly ipAddressVersion?: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Frontend Mode (Optional).
     */
    readonly mode?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * test doc
     */
    readonly provisioningState: string;
    /**
     * Frontend Public IP Address (Optional).
     */
    readonly publicIPAddress?: types.outputs.FrontendPropertiesIPAddressResponse;
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
 * Get a Traffic Controller Frontend
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
