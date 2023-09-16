import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Use this function to access the current configuration of the native Azure provider.
 */
export function getClientConfig(opts?: pulumi.InvokeOptions): Promise<GetClientConfigResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:authorization:getClientConfig", {
    }, opts);
}

/**
 * Configuration values returned by getClientConfig.
 */
export interface GetClientConfigResult {
    /**
     * Azure Client ID (Application Object ID).
     */
    readonly clientId: string;
    /**
     * Azure Object ID of the current user or service principal.
     */
    readonly objectId: string;
    /**
     * Azure Subscription ID
     */
    readonly subscriptionId: string;
    /**
     * Azure Tenant ID
     */
    readonly tenantId: string;
}
/**
 * Use this function to access the current configuration of the native Azure provider.
 */
export function getClientConfigOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetClientConfigResult> {
    return pulumi.output(getClientConfig(opts))
}
