import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The get business process development artifact action.
 */
export function getApplicationBusinessProcessDevelopmentArtifact(args: GetApplicationBusinessProcessDevelopmentArtifactArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationBusinessProcessDevelopmentArtifactResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:integrationspaces/v20231114preview:getApplicationBusinessProcessDevelopmentArtifact", {
        "applicationName": args.applicationName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "spaceName": args.spaceName,
    }, opts);
}

export interface GetApplicationBusinessProcessDevelopmentArtifactArgs {
    /**
     * The name of the Application
     */
    applicationName: string;
    /**
     * The name of the business process development artifact.
     */
    name: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the space
     */
    spaceName: string;
}

/**
 * The business process development artifact save or get response.
 */
export interface GetApplicationBusinessProcessDevelopmentArtifactResult {
    /**
     * The name of the business process development artifact.
     */
    readonly name: string;
    /**
     * The properties of the business process development artifact.
     */
    readonly properties: types.outputs.BusinessProcessDevelopmentArtifactPropertiesResponse;
    /**
     * The system data of the business process development artifact.
     */
    readonly systemData: types.outputs.SystemDataResponse;
}
/**
 * The get business process development artifact action.
 */
export function getApplicationBusinessProcessDevelopmentArtifactOutput(args: GetApplicationBusinessProcessDevelopmentArtifactOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApplicationBusinessProcessDevelopmentArtifactResult> {
    return pulumi.output(args).apply((a: any) => getApplicationBusinessProcessDevelopmentArtifact(a, opts))
}

export interface GetApplicationBusinessProcessDevelopmentArtifactOutputArgs {
    /**
     * The name of the Application
     */
    applicationName: pulumi.Input<string>;
    /**
     * The name of the business process development artifact.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the space
     */
    spaceName: pulumi.Input<string>;
}
