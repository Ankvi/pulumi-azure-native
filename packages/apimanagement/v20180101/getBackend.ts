import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of the backend specified by its identifier.
 */
export function getBackend(args: GetBackendArgs, opts?: pulumi.InvokeOptions): Promise<GetBackendResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement/v20180101:getBackend", {
        "backendid": args.backendid,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetBackendArgs {
    /**
     * Identifier of the Backend entity. Must be unique in the current API Management service instance.
     */
    backendid: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    serviceName: string;
}

/**
 * Backend details.
 */
export interface GetBackendResult {
    /**
     * Backend Credentials Contract Properties
     */
    readonly credentials?: types.outputs.BackendCredentialsContractResponse;
    /**
     * Backend Description.
     */
    readonly description?: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Backend Properties contract
     */
    readonly properties: types.outputs.BackendPropertiesResponse;
    /**
     * Backend communication protocol.
     */
    readonly protocol: string;
    /**
     * Backend Proxy Contract Properties
     */
    readonly proxy?: types.outputs.BackendProxyContractResponse;
    /**
     * Management Uri of the Resource in External System. This url can be the Arm Resource Id of Logic Apps, Function Apps or Api Apps.
     */
    readonly resourceId?: string;
    /**
     * Backend Title.
     */
    readonly title?: string;
    /**
     * Backend TLS Properties
     */
    readonly tls?: types.outputs.BackendTlsPropertiesResponse;
    /**
     * Resource type for API Management resource.
     */
    readonly type: string;
    /**
     * Runtime Url of the Backend.
     */
    readonly url: string;
}
/**
 * Gets the details of the backend specified by its identifier.
 */
export function getBackendOutput(args: GetBackendOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBackendResult> {
    return pulumi.output(args).apply((a: any) => getBackend(a, opts))
}

export interface GetBackendOutputArgs {
    /**
     * Identifier of the Backend entity. Must be unique in the current API Management service instance.
     */
    backendid: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}
