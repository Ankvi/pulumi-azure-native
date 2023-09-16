import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Retrieves details of a specific security connector
 */
export function getSecurityConnector(args: GetSecurityConnectorArgs, opts?: pulumi.InvokeOptions): Promise<GetSecurityConnectorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security/v20210701preview:getSecurityConnector", {
        "resourceGroupName": args.resourceGroupName,
        "securityConnectorName": args.securityConnectorName,
    }, opts);
}

export interface GetSecurityConnectorArgs {
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The security connector name.
     */
    securityConnectorName: string;
}

/**
 * The security connector resource.
 */
export interface GetSecurityConnectorResult {
    /**
     * The multi cloud resource's cloud name.
     */
    readonly cloudName?: string;
    /**
     * Entity tag is used for comparing two or more entities from the same requested resource.
     */
    readonly etag?: string;
    /**
     * The multi cloud resource identifier (account id in case of AWS connector).
     */
    readonly hierarchyIdentifier?: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Kind of the resource
     */
    readonly kind?: string;
    /**
     * Location where the resource is stored
     */
    readonly location?: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * A collection of offerings for the security connector.
     */
    readonly offerings?: (types.outputs.security.v20210701preview.CspmMonitorAwsOfferingResponse | types.outputs.security.v20210701preview.DefenderForContainersAwsOfferingResponse | types.outputs.security.v20210701preview.DefenderForServersAwsOfferingResponse | types.outputs.security.v20210701preview.InformationProtectionAwsOfferingResponse)[];
    /**
     * The multi cloud account's organizational data
     */
    readonly organizationalData?: types.outputs.security.v20210701preview.SecurityConnectorPropertiesResponseOrganizationalData;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.security.v20210701preview.SystemDataResponse;
    /**
     * A list of key value pairs that describe the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Retrieves details of a specific security connector
 */
export function getSecurityConnectorOutput(args: GetSecurityConnectorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSecurityConnectorResult> {
    return pulumi.output(args).apply((a: any) => getSecurityConnector(a, opts))
}

export interface GetSecurityConnectorOutputArgs {
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The security connector name.
     */
    securityConnectorName: pulumi.Input<string>;
}
