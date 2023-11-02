import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the Spring Cloud Gateway custom domain.
 */
export function getGatewayCustomDomain(args: GetGatewayCustomDomainArgs, opts?: pulumi.InvokeOptions): Promise<GetGatewayCustomDomainResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appplatform/v20231101preview:getGatewayCustomDomain", {
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
