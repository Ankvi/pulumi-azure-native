import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a Transform.
 *
 * Uses Azure REST API version 2022-07-01.
 */
export function getTransform(args: GetTransformArgs, opts?: pulumi.InvokeOptions): Promise<GetTransformResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:media:getTransform", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "transformName": args.transformName,
    }, opts);
}

export interface GetTransformArgs {
    /**
     * The Media Services account name.
     */
    accountName: string;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: string;
    /**
     * The Transform name.
     */
    transformName: string;
}

/**
 * A Transform encapsulates the rules or instructions for generating desired outputs from input media, such as by transcoding or by extracting insights. After the Transform is created, it can be applied to input media by creating Jobs.
 */
export interface GetTransformResult {
    /**
     * The UTC date and time when the Transform was created, in 'YYYY-MM-DDThh:mm:ssZ' format.
     */
    readonly created: string;
    /**
     * An optional verbose description of the Transform.
     */
    readonly description?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The UTC date and time when the Transform was last updated, in 'YYYY-MM-DDThh:mm:ssZ' format.
     */
    readonly lastModified: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * An array of one or more TransformOutputs that the Transform should generate.
     */
    readonly outputs: types.outputs.TransformOutputResponse[];
    /**
     * The system metadata relating to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets a Transform.
 *
 * Uses Azure REST API version 2022-07-01.
 */
export function getTransformOutput(args: GetTransformOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetTransformResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:media:getTransform", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "transformName": args.transformName,
    }, opts);
}

export interface GetTransformOutputArgs {
    /**
     * The Media Services account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Transform name.
     */
    transformName: pulumi.Input<string>;
}