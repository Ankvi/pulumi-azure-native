import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the Web Service Definition as specified by a subscription, resource group, and name. Note that the storage credentials and web service keys are not returned by this call. To get the web service access keys, call List Keys.
 *
 * Uses Azure REST API version 2017-01-01.
 *
 * Other available API versions: 2016-05-01-preview.
 */
export function getWebService(args: GetWebServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetWebServiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearning:getWebService", {
        "region": args.region,
        "resourceGroupName": args.resourceGroupName,
        "webServiceName": args.webServiceName,
    }, opts);
}

export interface GetWebServiceArgs {
    /**
     * The region for which encrypted credential parameters are valid.
     */
    region?: string;
    /**
     * Name of the resource group in which the web service is located.
     */
    resourceGroupName: string;
    /**
     * The name of the web service.
     */
    webServiceName: string;
}

/**
 * Instance of an Azure ML web service resource.
 */
export interface GetWebServiceResult {
    /**
     * Specifies the resource ID.
     */
    readonly id: string;
    /**
     * Specifies the location of the resource.
     */
    readonly location: string;
    /**
     * Specifies the name of the resource.
     */
    readonly name: string;
    /**
     * Contains the property payload that describes the web service.
     */
    readonly properties: types.outputs.WebServicePropertiesForGraphResponse;
    /**
     * Contains resource tags defined as key/value pairs.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Specifies the type of the resource.
     */
    readonly type: string;
}
/**
 * Gets the Web Service Definition as specified by a subscription, resource group, and name. Note that the storage credentials and web service keys are not returned by this call. To get the web service access keys, call List Keys.
 *
 * Uses Azure REST API version 2017-01-01.
 *
 * Other available API versions: 2016-05-01-preview.
 */
export function getWebServiceOutput(args: GetWebServiceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWebServiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:machinelearning:getWebService", {
        "region": args.region,
        "resourceGroupName": args.resourceGroupName,
        "webServiceName": args.webServiceName,
    }, opts);
}

export interface GetWebServiceOutputArgs {
    /**
     * The region for which encrypted credential parameters are valid.
     */
    region?: pulumi.Input<string>;
    /**
     * Name of the resource group in which the web service is located.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the web service.
     */
    webServiceName: pulumi.Input<string>;
}