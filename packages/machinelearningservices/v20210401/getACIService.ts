import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Service by name.
 */
export function getACIService(args: GetACIServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetACIServiceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices/v20210401:getACIService", {
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetACIServiceArgs {
    /**
     * Set to True to include Model details.
     */
    expand?: boolean;
    /**
     * Name of the resource group in which workspace is located.
     */
    resourceGroupName: string;
    /**
     * Name of the Azure Machine Learning service.
     */
    serviceName: string;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: string;
}

/**
 * Machine Learning service object wrapped into ARM resource envelope.
 */
export interface GetACIServiceResult {
    /**
     * Specifies the resource ID.
     */
    readonly id: string;
    /**
     * The identity of the resource.
     */
    readonly identity?: types.outputs.IdentityResponse;
    /**
     * Specifies the location of the resource.
     */
    readonly location?: string;
    /**
     * Specifies the name of the resource.
     */
    readonly name: string;
    /**
     * Service properties
     */
    readonly properties: types.outputs.ACIServiceResponseResponse | types.outputs.AKSServiceResponseResponse | types.outputs.AKSVariantResponseResponse;
    /**
     * The sku of the workspace.
     */
    readonly sku?: types.outputs.SkuResponse;
    /**
     * Read only system data
     */
    readonly systemData: types.outputs.SystemDataResponse;
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
 * Get a Service by name.
 */
export function getACIServiceOutput(args: GetACIServiceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetACIServiceResult> {
    return pulumi.output(args).apply((a: any) => getACIService(a, opts))
}

export interface GetACIServiceOutputArgs {
    /**
     * Set to True to include Model details.
     */
    expand?: pulumi.Input<boolean>;
    /**
     * Name of the resource group in which workspace is located.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the Azure Machine Learning service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}
