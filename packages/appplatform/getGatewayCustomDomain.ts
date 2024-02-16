import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the Spring Cloud Gateway custom domain.
 * Azure REST API version: 2023-05-01-preview.
 *
 * Other available API versions: 2023-07-01-preview, 2023-09-01-preview, 2023-11-01-preview, 2023-12-01, 2024-01-01-preview.
 */
export function getGatewayCustomDomain(args: GetGatewayCustomDomainArgs, opts?: pulumi.InvokeOptions): Promise<GetGatewayCustomDomainResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appplatform:getGatewayCustomDomain", {
        "domainName": args.domainName,
        "gatewayName": args.gatewayName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetGatewayCustomDomainArgs {
    /**
     * The name of the Spring Cloud Gateway custom domain.
     */
    domainName: string;
    /**
     * The name of Spring Cloud Gateway.
     */
    gatewayName: string;
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
 * Custom domain of the Spring Cloud Gateway
 */
export interface GetGatewayCustomDomainResult {
    /**
     * Fully qualified resource Id for the resource.
     */
    readonly id: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The properties of custom domain for Spring Cloud Gateway
     */
    readonly properties: types.outputs.GatewayCustomDomainPropertiesResponse;
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
 * Get the Spring Cloud Gateway custom domain.
 * Azure REST API version: 2023-05-01-preview.
 *
 * Other available API versions: 2023-07-01-preview, 2023-09-01-preview, 2023-11-01-preview, 2023-12-01, 2024-01-01-preview.
 */
export function getGatewayCustomDomainOutput(args: GetGatewayCustomDomainOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGatewayCustomDomainResult> {
    return pulumi.output(args).apply((a: any) => getGatewayCustomDomain(a, opts))
}

export interface GetGatewayCustomDomainOutputArgs {
    /**
     * The name of the Spring Cloud Gateway custom domain.
     */
    domainName: pulumi.Input<string>;
    /**
     * The name of Spring Cloud Gateway.
     */
    gatewayName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Service resource.
     */
    serviceName: pulumi.Input<string>;
}