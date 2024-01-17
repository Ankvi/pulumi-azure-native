import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * List globally enabled APMs for a Service.
 * Azure REST API version: 2023-05-01-preview.
 *
 * Other available API versions: 2023-07-01-preview, 2023-09-01-preview, 2023-11-01-preview, 2023-12-01.
 */
export function listServiceGloballyEnabledApms(args: ListServiceGloballyEnabledApmsArgs, opts?: pulumi.InvokeOptions): Promise<ListServiceGloballyEnabledApmsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appplatform:listServiceGloballyEnabledApms", {
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface ListServiceGloballyEnabledApmsArgs {
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
 * Globally enabled APMs payload
 */
export interface ListServiceGloballyEnabledApmsResult {
    /**
     * Collection of the globally enabled APMs
     */
    readonly value?: string[];
}
/**
 * List globally enabled APMs for a Service.
 * Azure REST API version: 2023-05-01-preview.
 *
 * Other available API versions: 2023-07-01-preview, 2023-09-01-preview, 2023-11-01-preview, 2023-12-01.
 */
export function listServiceGloballyEnabledApmsOutput(args: ListServiceGloballyEnabledApmsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListServiceGloballyEnabledApmsResult> {
    return pulumi.output(args).apply((a: any) => listServiceGloballyEnabledApms(a, opts))
}

export interface ListServiceGloballyEnabledApmsOutputArgs {
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Service resource.
     */
    serviceName: pulumi.Input<string>;
}
