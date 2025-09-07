import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Container of a site
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2023-12-01, 2024-11-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native web [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getWebAppSiteContainer(args: GetWebAppSiteContainerArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppSiteContainerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:getWebAppSiteContainer", {
        "containerName": args.containerName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetWebAppSiteContainerArgs {
    /**
     * Site Container Name
     */
    containerName: string;
    /**
     * Name of the app.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
}

/**
 * Container of a site
 */
export interface GetWebAppSiteContainerResult {
    /**
     * Auth Type
     */
    readonly authType?: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Created Time
     */
    readonly createdTime: string;
    /**
     * List of environment variables
     */
    readonly environmentVariables?: types.outputs.EnvironmentVariableResponse[];
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Image Name
     */
    readonly image: string;
    /**
     * <code>true</code> if the container is the main site container; <code>false</code> otherwise.
     */
    readonly isMain: boolean;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Last Modified Time
     */
    readonly lastModifiedTime: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * Password Secret
     */
    readonly passwordSecret?: string;
    /**
     * StartUp Command
     */
    readonly startUpCommand?: string;
    /**
     * Target Port
     */
    readonly targetPort?: string;
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * UserManagedIdentity ClientId
     */
    readonly userManagedIdentityClientId?: string;
    /**
     * User Name
     */
    readonly userName?: string;
    /**
     * List of volume mounts
     */
    readonly volumeMounts?: types.outputs.VolumeMountResponse[];
}
/**
 * Container of a site
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2023-12-01, 2024-11-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native web [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getWebAppSiteContainerOutput(args: GetWebAppSiteContainerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWebAppSiteContainerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:getWebAppSiteContainer", {
        "containerName": args.containerName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetWebAppSiteContainerOutputArgs {
    /**
     * Site Container Name
     */
    containerName: pulumi.Input<string>;
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}