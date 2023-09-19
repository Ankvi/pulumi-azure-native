import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get function information by its ID for web site, or a deployment slot.
 */
export function getWebAppFunction(args: GetWebAppFunctionArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppFunctionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20201001:getWebAppFunction", {
        "functionName": args.functionName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetWebAppFunctionArgs {
    /**
     * Function name.
     */
    functionName: string;
    /**
     * Site name.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
}

/**
 * Function information.
 */
export interface GetWebAppFunctionResult {
    /**
     * Config information.
     */
    readonly config?: any;
    /**
     * Config URI.
     */
    readonly configHref?: string;
    /**
     * File list.
     */
    readonly files?: {[key: string]: string};
    /**
     * Function App ID.
     */
    readonly functionAppId?: string;
    /**
     * Function URI.
     */
    readonly href?: string;
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * The invocation URL
     */
    readonly invokeUrlTemplate?: string;
    /**
     * Gets or sets a value indicating whether the function is disabled
     */
    readonly isDisabled?: boolean;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * The function language
     */
    readonly language?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * Script URI.
     */
    readonly scriptHref?: string;
    /**
     * Script root path URI.
     */
    readonly scriptRootPathHref?: string;
    /**
     * Secrets file URI.
     */
    readonly secretsFileHref?: string;
    /**
     * The system metadata relating to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Test data used when testing via the Azure Portal.
     */
    readonly testData?: string;
    /**
     * Test data URI.
     */
    readonly testDataHref?: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Get function information by its ID for web site, or a deployment slot.
 */
export function getWebAppFunctionOutput(args: GetWebAppFunctionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWebAppFunctionResult> {
    return pulumi.output(args).apply((a: any) => getWebAppFunction(a, opts))
}

export interface GetWebAppFunctionOutputArgs {
    /**
     * Function name.
     */
    functionName: pulumi.Input<string>;
    /**
     * Site name.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}
