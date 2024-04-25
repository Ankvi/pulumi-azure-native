import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Container of a site
 * Azure REST API version: 2023-12-01.
 */
export function getWebAppSiteContainerSlot(args: GetWebAppSiteContainerSlotArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppSiteContainerSlotResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:getWebAppSiteContainerSlot", {
        "containerName": args.containerName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
}

export interface GetWebAppSiteContainerSlotArgs {
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
    /**
     * Name of the deployment slot. If a slot is not specified, the API will get the Site Container for the production slot.
     */
    slot: string;
}

/**
 * Container of a site
 */
export interface GetWebAppSiteContainerSlotResult {
    /**
     * Auth Type
     */
    readonly authType?: string;
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
 * Azure REST API version: 2023-12-01.
 */
export function getWebAppSiteContainerSlotOutput(args: GetWebAppSiteContainerSlotOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWebAppSiteContainerSlotResult> {
    return pulumi.output(args).apply((a: any) => getWebAppSiteContainerSlot(a, opts))
}

export interface GetWebAppSiteContainerSlotOutputArgs {
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
    /**
     * Name of the deployment slot. If a slot is not specified, the API will get the Site Container for the production slot.
     */
    slot: pulumi.Input<string>;
}