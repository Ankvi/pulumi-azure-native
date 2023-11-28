import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the token used to connect to the endpoint where source code can be uploaded for a build.
 */
export function listBuildAuthToken(args: ListBuildAuthTokenArgs, opts?: pulumi.InvokeOptions): Promise<ListBuildAuthTokenResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:app/v20230801preview:listBuildAuthToken", {
        "buildName": args.buildName,
        "builderName": args.builderName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListBuildAuthTokenArgs {
    /**
     * The name of a build.
     */
    buildName: string;
    /**
     * The name of the builder.
     */
    builderName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Build Auth Token.
 */
export interface ListBuildAuthTokenResult {
    /**
     * Token expiration date.
     */
    readonly expires: string;
    /**
     * Authentication token.
     */
    readonly token: string;
}
/**
 * Gets the token used to connect to the endpoint where source code can be uploaded for a build.
 */
export function listBuildAuthTokenOutput(args: ListBuildAuthTokenOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListBuildAuthTokenResult> {
    return pulumi.output(args).apply((a: any) => listBuildAuthToken(a, opts))
}

export interface ListBuildAuthTokenOutputArgs {
    /**
     * The name of a build.
     */
    buildName: pulumi.Input<string>;
    /**
     * The name of the builder.
     */
    builderName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
