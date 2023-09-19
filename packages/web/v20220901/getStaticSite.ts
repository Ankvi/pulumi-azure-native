import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Description for Gets the details of a static site.
 */
export function getStaticSite(args: GetStaticSiteArgs, opts?: pulumi.InvokeOptions): Promise<GetStaticSiteResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20220901:getStaticSite", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetStaticSiteArgs {
    /**
     * Name of the static site.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
}

/**
 * Static Site ARM resource.
 */
export interface GetStaticSiteResult {
    /**
     * <code>false</code> if config file is locked for this static web app; otherwise, <code>true</code>.
     */
    readonly allowConfigFileUpdates?: boolean;
    /**
     * The target branch in the repository.
     */
    readonly branch?: string;
    /**
     * Build properties to configure on the repository.
     */
    readonly buildProperties?: types.outputs.StaticSiteBuildPropertiesResponse;
    /**
     * The content distribution endpoint for the static site.
     */
    readonly contentDistributionEndpoint: string;
    /**
     * The custom domains associated with this static site.
     */
    readonly customDomains: string[];
    /**
     * Database connections for the static site
     */
    readonly databaseConnections: types.outputs.DatabaseConnectionOverviewResponse[];
    /**
     * The default autogenerated hostname for the static site.
     */
    readonly defaultHostname: string;
    /**
     * State indicating the status of the enterprise grade CDN serving traffic to the static web app.
     */
    readonly enterpriseGradeCdnStatus?: string;
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Managed service identity.
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * Identity to use for Key Vault Reference authentication.
     */
    readonly keyVaultReferenceIdentity: string;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Backends linked to the static side
     */
    readonly linkedBackends: types.outputs.StaticSiteLinkedBackendResponse[];
    /**
     * Resource Location.
     */
    readonly location: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * Private endpoint connections
     */
    readonly privateEndpointConnections: types.outputs.ResponseMessageEnvelopeRemotePrivateEndpointConnectionResponse[];
    /**
     * The provider that submitted the last deployment to the primary environment of the static site.
     */
    readonly provider?: string;
    /**
     * State indicating whether public traffic are allowed or not for a static web app. Allowed Values: 'Enabled', 'Disabled' or an empty string.
     */
    readonly publicNetworkAccess?: string;
    /**
     * A user's github repository token. This is used to setup the Github Actions workflow file and API secrets.
     */
    readonly repositoryToken?: string;
    /**
     * URL for the repository of the static site.
     */
    readonly repositoryUrl?: string;
    /**
     * Description of a SKU for a scalable resource.
     */
    readonly sku?: types.outputs.SkuDescriptionResponse;
    /**
     * State indicating whether staging environments are allowed or not allowed for a static web app.
     */
    readonly stagingEnvironmentPolicy?: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Template options for generating a new repository.
     */
    readonly templateProperties?: types.outputs.StaticSiteTemplateOptionsResponse;
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * User provided function apps registered with the static site
     */
    readonly userProvidedFunctionApps: types.outputs.StaticSiteUserProvidedFunctionAppResponse[];
}
/**
 * Description for Gets the details of a static site.
 */
export function getStaticSiteOutput(args: GetStaticSiteOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStaticSiteResult> {
    return pulumi.output(args).apply((a: any) => getStaticSite(a, opts))
}

export interface GetStaticSiteOutputArgs {
    /**
     * Name of the static site.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}
