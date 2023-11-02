import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * List test keys for a Service.
 */
export function listServiceTestKeys(args: ListServiceTestKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListServiceTestKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appplatform/v20231101preview:listServiceTestKeys", {
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface ListServiceTestKeysArgs {
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * The name of the Service resource.
     */
    serviceName: string;
}

/**
 * Test keys payload
 */
export interface ListServiceTestKeysResult {
    /**
     * Indicates whether the test endpoint feature enabled or not
     */
    readonly enabled?: boolean;
    /**
     * Primary key
     */
    readonly primaryKey?: string;
    /**
     * Primary test endpoint
     */
    readonly primaryTestEndpoint?: string;
    /**
     * Secondary key
     */
    readonly secondaryKey?: string;
    /**
     * Secondary test endpoint
     */
    readonly secondaryTestEndpoint?: string;
}
/**
 * List test keys for a Service.
 */
export function listServiceTestKeysOutput(args: ListServiceTestKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListServiceTestKeysResult> {
    return pulumi.output(args).apply((a: any) => listServiceTestKeys(a, opts))
}

export interface ListServiceTestKeysOutputArgs {
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Service resource.
     */
    serviceName: pulumi.Input<string>;
}