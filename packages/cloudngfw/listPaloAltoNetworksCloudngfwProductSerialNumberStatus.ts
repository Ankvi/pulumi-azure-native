import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Product serial and status for the service
 *
 * Uses Azure REST API version 2024-02-07-preview.
 *
 * Other available API versions: 2025-02-06-preview.
 */
export function listPaloAltoNetworksCloudngfwProductSerialNumberStatus(args?: ListPaloAltoNetworksCloudngfwProductSerialNumberStatusArgs, opts?: pulumi.InvokeOptions): Promise<ListPaloAltoNetworksCloudngfwProductSerialNumberStatusResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw:listPaloAltoNetworksCloudngfwProductSerialNumberStatus", {
    }, opts);
}

export interface ListPaloAltoNetworksCloudngfwProductSerialNumberStatusArgs {
}

/**
 * Product serial and status for the service
 */
export interface ListPaloAltoNetworksCloudngfwProductSerialNumberStatusResult {
    /**
     * product Serial associated with given resource
     */
    readonly serialNumber?: string;
    /**
     * allocation status of the product serial number
     */
    readonly status: string;
}
/**
 * Product serial and status for the service
 *
 * Uses Azure REST API version 2024-02-07-preview.
 *
 * Other available API versions: 2025-02-06-preview.
 */
export function listPaloAltoNetworksCloudngfwProductSerialNumberStatusOutput(opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListPaloAltoNetworksCloudngfwProductSerialNumberStatusResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cloudngfw:listPaloAltoNetworksCloudngfwProductSerialNumberStatus", {
    }, opts);
}