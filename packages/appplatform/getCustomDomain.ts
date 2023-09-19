import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the custom domain of one lifecycle application.
 * Azure REST API version: 2023-05-01-preview.
 */
export function getCustomDomain(args: GetCustomDomainArgs, opts?: pulumi.InvokeOptions): Promise<GetCustomDomainResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appplatform:getCustomDomain", {
        "appName": args.appName,
        "domainName": args.domainName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetCustomDomainArgs {
    /**
     * The name of the App resource.
     */
    appName: string;
    /**
     * The name of the custom domain resource.
     */
    domainName: string;
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
 * Custom domain resource payload.
 */
export interface GetCustomDomainResult {
    /**
     * Fully qualified resource Id for the resource.
     */
    readonly id: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Properties of the custom domain resource.
     */
    readonly properties: types.outputs.CustomDomainPropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Get the custom domain of one lifecycle application.
 * Azure REST API version: 2023-05-01-preview.
 */
export function getCustomDomainOutput(args: GetCustomDomainOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCustomDomainResult> {
    return pulumi.output(args).apply((a: any) => getCustomDomain(a, opts))
}

export interface GetCustomDomainOutputArgs {
    /**
     * The name of the App resource.
     */
    appName: pulumi.Input<string>;
    /**
     * The name of the custom domain resource.
     */
    domainName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Service resource.
     */
    serviceName: pulumi.Input<string>;
}
