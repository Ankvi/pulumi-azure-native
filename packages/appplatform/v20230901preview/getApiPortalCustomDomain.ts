import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get the API portal custom domain.
 */
export function getApiPortalCustomDomain(args: GetApiPortalCustomDomainArgs, opts?: pulumi.InvokeOptions): Promise<GetApiPortalCustomDomainResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appplatform/v20230901preview:getApiPortalCustomDomain", {
        "apiPortalName": args.apiPortalName,
        "domainName": args.domainName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetApiPortalCustomDomainArgs {
    /**
     * The name of API portal.
     */
    apiPortalName: string;
    /**
     * The name of the API portal custom domain.
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
 * Custom domain of the API portal
 */
export interface GetApiPortalCustomDomainResult {
    /**
     * Fully qualified resource Id for the resource.
     */
    readonly id: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The properties of custom domain for API portal
     */
    readonly properties: types.outputs.appplatform.v20230901preview.ApiPortalCustomDomainPropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.appplatform.v20230901preview.SystemDataResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Get the API portal custom domain.
 */
export function getApiPortalCustomDomainOutput(args: GetApiPortalCustomDomainOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApiPortalCustomDomainResult> {
    return pulumi.output(args).apply((a: any) => getApiPortalCustomDomain(a, opts))
}

export interface GetApiPortalCustomDomainOutputArgs {
    /**
     * The name of API portal.
     */
    apiPortalName: pulumi.Input<string>;
    /**
     * The name of the API portal custom domain.
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
