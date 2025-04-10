import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Description for Get the named public certificate for an app (or deployment slot, if specified).
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2020-10-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function getWebAppPublicCertificate(args: GetWebAppPublicCertificateArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppPublicCertificateResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:getWebAppPublicCertificate", {
        "name": args.name,
        "publicCertificateName": args.publicCertificateName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetWebAppPublicCertificateArgs {
    /**
     * Name of the app.
     */
    name: string;
    /**
     * Public certificate name.
     */
    publicCertificateName: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
}

/**
 * Public certificate object
 */
export interface GetWebAppPublicCertificateResult {
    /**
     * Public Certificate byte array
     */
    readonly blob?: string;
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * Public Certificate Location
     */
    readonly publicCertificateLocation?: string;
    /**
     * Certificate Thumbprint
     */
    readonly thumbprint: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Description for Get the named public certificate for an app (or deployment slot, if specified).
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2020-10-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function getWebAppPublicCertificateOutput(args: GetWebAppPublicCertificateOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWebAppPublicCertificateResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:getWebAppPublicCertificate", {
        "name": args.name,
        "publicCertificateName": args.publicCertificateName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetWebAppPublicCertificateOutputArgs {
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Public certificate name.
     */
    publicCertificateName: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}